/**
 * Cancel work order - Guarded Gate (contract compliant)
 * Blueprint ID: ca000000-0000-0000-0000-000000000001
 * Pattern: GUARDED-GATE
 * Gate: WORK_ORDER.CANCEL.CONFIRM
 *
 * Contract:
 * - mount(container): render into container
 * - unmount(): clean up
 * - onContext(context): receive tenant/user/role/state
 * - getMetadata(): component info
 *
 * A guarded gate records a human verdict that changes state. It never writes storage
 * directly: each verdict confirms first, then calls a sanctioned endpoint that records
 * who did it. The result is reported INSIDE this panel, next to the control that
 * produced it -- the schema's outcome.placement is a one-value enum, so no blueprint
 * can ask for it anywhere else.
 *
 * 1.2.1 THE INLINE MODE (SJ s51 rung 5a, the second sitting, 2026-09-08 -- his pass on the flow paper: "the gate
 * opens in the frame as the step's body"): mount(container, { inline: true }) mounts the same gate INSIDE a host
 * page (the focus page's rail). Everything is the same -- the subject's name, the inputs, the confirm, the door,
 * the outcome in the panel -- except the affirmative path: an inline gate emits its verdict (blueprint:verdict,
 * with the label, the consequence and the next step's title) and does NOT navigate or hand off; the host page
 * re-reads its rows and advances its rail. The gate's own route stays as the deep link, where it behaves as 1.2.0.
 */

(function () {
  'use strict';

  var GATE = {
  "code": "WORK_ORDER.CANCEL.CONFIRM",
  "title": "Cancel work order",
  "subject": "Cancelling ends this occurrence. The paper decides what it costs and who bears it, from the reason you record here; the next occurrence is the planner's.",
  "subjectName": {
    "source": "work_order",
    "key": "work_order_id",
    "field": "summary"
  },
  "schema": "services_template",
  "verdicts": [
    {
      "code": "CANCEL",
      "label": "Cancel work order",
      "confirm": "Cancel this work order? The reason you gave is recorded against it and the paper disposes.",
      "endpoint": "rpc:cancel_work_order",
      "method": "POST",
      "payload": {
        "action": "cancel"
      },
      "consequence": "Moves the work order to cancelled through the job state manager, records the reason, its class and the disposition the paper names.",
      "reaches": null,
      "tone": "primary",
      "next": null,
      "argMap": {
        "p_note": "note",
        "p_work_order": "subject_id",
        "p_reason_code": "reason_code",
        "p_initiated_by": "user_id"
      },
      "inputs": [
        {
          "field": "reason_code",
          "label": "Reason",
          "type": "select",
          "required": true,
          "options": [
            "customer_request",
            "service_removed",
            "agreement_terminated"
          ],
          "help": "From the catalog's cancel class. The reason names; the agreement disposes (Q3)."
        },
        {
          "field": "note",
          "label": "Note",
          "type": "textarea",
          "required": false,
          "options": [],
          "help": "Optional detail for whoever reads this later."
        }
      ]
    }
  ],
  "enabledWhen": null,
  "outcome": {
    "placement": "in_panel",
    "ariaLive": "polite"
  }
};

  /**
   * Outcome notices, at module scope so they survive a host re-render.
   *
   * Keyed by gate code AND subject: a notice written about one subject must never
   * re-appear against another when the host swaps what it is showing.
   *
   * `reports` is the state a SUCCESS actually reached; `prior` is the state the notice
   * was written against. The notice retires the moment the live state is neither. A
   * notice that reports nothing (a cancel, or a failure) carries reports = null and so
   * lives exactly as long as the state it was written against -- otherwise it is
   * immortal, which is the defect this arrangement exists to prevent.
   */
  var OUTCOMES = new Map();
  function outcomeKey(gateCode, subjectId) { return gateCode + '::' + (subjectId == null ? '-' : subjectId); }

  /**
   * THE SUBJECT'S NAME (1.2.0; SJ s51 rung 5a, his cut 2026-09-08): the record named the way its own page
   * names it, read once per subject from the blueprint's subject_name source and kept at module scope.
   */
  var NAMES = new Map();

  /**
   * THE NEXT STEP (1.2.0, the same cut): a successful verdict with a `next` carries its receipt to the next
   * route through sessionStorage and goes there. The gate at that route paints the receipt above its subject
   * for the life of its mount; leaving the route drops it. Keyed by the resolved route.
   */
  function handoffKey(route) { return 'bp-gate-handoff::' + route; }
  function readHandoff(route) {
    try {
      var raw = window.sessionStorage.getItem(handoffKey(route));
      if (!raw) return null;
      var h = JSON.parse(raw);
      // a receipt older than a minute is stale (a record page never reads it; a later visit must not)
      if (!h || !h.at || (Date.now() - h.at) > 60000) { window.sessionStorage.removeItem(handoffKey(route)); return null; }
      return h;
    } catch (ignored) { return null; }
  }

  class WorkOrderGateUI {
    constructor() {
      this.container = null;
      this.context = null;
      this._recordId = null;
      this._boundHandlers = new Map();
      this.metadata = {
        blueprint_id: 'ca000000-0000-0000-0000-000000000001',
        pattern_type: 'GUARDED-GATE',
        gate_code: GATE.code,
        title: GATE.title,
        entity: 'work_order',
        sopf_node: 'unknown',
        role_context_id: null
      };
    }

    // ---- contract: mount ------------------------------------------------------------
    mount(container, options) {
      if (!container) throw new Error('Container element is required for mounting');
      if (this.container) throw new Error('Component is already mounted. Call unmount() first.');
      this.container = container;
      // 1.2.1: inline = mounted inside a host page as a step's body; the affirmative path stays put
      this._inline = !!(options && options.inline);
      this.container.classList.add('blueprint-work_order-gate');
      if (this._inline) this.container.classList.add('blueprint-gate--inline');
      // the route whose carried receipt this gate painted (owned once painted; dropped at unmount)
      this._paintedHandoff = null;
      this.render();
      this.emit('blueprint:ready', {});
      console.log('[WorkOrderGateUI] Mounted successfully');
    }

    // ---- contract: unmount ----------------------------------------------------------
    unmount() {
      if (!this.container) return;
      this._boundHandlers.forEach(function (h, el) { el.removeEventListener('click', h); });
      this._boundHandlers.clear();
      this.container.classList.remove('blueprint-work_order-gate');
      this.container.innerHTML = '';
      this.container = null;
      this.context = null;
      // leaving drops the receipt this gate painted (never another gate's: the shell may move the hash before it unmounts)
      if (this._paintedHandoff) { try { window.sessionStorage.removeItem(handoffKey(this._paintedHandoff)); } catch (ignored) { /* no storage */ } }
      this._paintedHandoff = null;
    }

    // ---- contract: onContext --------------------------------------------------------
    onContext(context) {
      this.context = context || null;
      if (this.container) this.render();
      console.log('[WorkOrderGateUI] Context received:', { role: context && context.role });
    }

    // ---- the record bridge ----------------------------------------------------------
    // The shell hands the selected record's id to every mounted component exposing
    // setRecordId. For a gate the record IS the subject: until one arrives, nothing
    // actionable renders (s31 resume, 2026-08-20 -- the deployed landing view showed a
    // live deactivate form with no account chosen, HIS find).
    setRecordId(recordId) {
      this._recordId = recordId || null;
      if (this.container) this.render();
    }

    // ---- contract: getMetadata ------------------------------------------------------
    getMetadata() { return Object.assign({}, this.metadata); }

    emit(name, detail) {
      if (!this.container) return;
      this.container.dispatchEvent(new CustomEvent(name, { detail: detail, bubbles: true }));
    }

    // ---- state ----------------------------------------------------------------------

    /** The gate's observable state, read at render AND at click time. */
    gateState() {
      if (!GATE.enabledWhen) return 'OPEN';
      var st = (this.context && this.context.state) || {};
      return st[GATE.enabledWhen.field] === GATE.enabledWhen.equals ? 'OPEN' : 'CLOSED';
    }

    subjectId() { return this._recordId || (this.context && this.context.subject_id) || null; }

    /** The subject's name when it has been read; null until then (the line falls back to the id). */
    subjectName() { var id = this.subjectId(); return (id && NAMES.get(id)) || null; }

    /** Read the subject's name once, as the caller, and repaint the one line in place (no re-render: inputs keep their values). */
    async fetchSubjectName() {
      var id = this.subjectId();
      if (!GATE.subjectName || !id || NAMES.has(id)) return;
      var sbCfg = (window.AppContext && window.AppContext.supabase) || {};
      if (!sbCfg.url) return;
      NAMES.set(id, null);
      try {
        var headers = { apikey: sbCfg.anonKey || '', Authorization: 'Bearer ' + (sbCfg.anonKey || ''), 'Accept-Profile': GATE.schema || sbCfg.schema || 'public' };
        if (window.ShellAuth) {
          var sess = await window.ShellAuth.auth.getSession();
          if (sess.data && sess.data.session) headers.Authorization = 'Bearer ' + sess.data.session.access_token;
        }
        var res = await fetch(sbCfg.url + '/rest/v1/' + GATE.subjectName.source + '?' + GATE.subjectName.key + '=eq.' + encodeURIComponent(id) + '&select=' + GATE.subjectName.field + '&limit=1', { headers: headers });
        var rows = res.ok ? await res.json() : [];
        var name = rows && rows[0] ? rows[0][GATE.subjectName.field] : null;
        if (name == null || name === '') { NAMES.delete(id); return; }
        NAMES.set(id, String(name));
        var line = this.container && this.container.querySelector('[data-subject]');
        if (line && this.subjectId() === id) line.textContent = 'For ' + String(name);
      } catch (ignored) { NAMES.delete(id); }
    }

    // ---- render ---------------------------------------------------------------------

    render() {
      if (!this.container) return;
      var state = this.gateState();
      var open = state === 'OPEN';

      if (!this.context) {
        this.container.innerHTML =
          '<div class="blueprint-gate-head">' + esc(GATE.title) +
          '<span class="blueprint-gate-code">' + esc(GATE.code) + '</span></div>' +
          '<div class="blueprint-gate-closed">Waiting for application context...</div>';
        return;
      }

      // NO SUBJECT, NO VERDICT UI. A gate records a verdict ABOUT a record; without one
      // it is an instruction, not a form (s31 resume, 2026-08-20).
      if (!this.subjectId()) {
        this.container.innerHTML =
          '<div class="blueprint-gate-head">' + esc(GATE.title) +
          '<span class="blueprint-gate-code">' + esc(GATE.code) + '</span></div>' +
          '<div class="blueprint-gate-closed">No work_order selected. Open one from the list to use this gate.</div>';
        return;
      }

      var html =
        '<div class="blueprint-gate-head">' + esc(GATE.title) +
        '<span class="blueprint-gate-code">' + esc(GATE.code) + '</span></div>';

      // THE RECEIPT CARRIED HERE (1.2.0): the previous gate's affirmative path, painted above the subject for the life
      // of this mount. Read by the hash AS IT IS at each render (the shell may mount before it moves the hash, so the
      // first render can miss and a later one -- onContext, setRecordId -- finds it); owned once painted.
      var here = (window.location.hash || '').slice(1);
      // an inline gate reads no handoff: its host page paints the receipt (1.2.1)
      var handoff = this._inline ? null : (this._paintedHandoff ? readHandoff(this._paintedHandoff) : readHandoff(here));
      if (handoff && handoff.text) {
        if (!this._paintedHandoff) this._paintedHandoff = here;
        html += '<div class="blueprint-gate-handoff" data-handoff>' + esc(handoff.text) +
                (handoff.next ? ' Next: ' + esc(handoff.next) + '.' : '') + '</div>';
      }

      // the subject named the way its page names it (1.2.0), else the entity word and the id
      var name = this.subjectName();
      html += '<div class="blueprint-gate-subject" data-subject>For ' +
              (name ? esc(name) : 'work_order: ' + esc(this.subjectId())) + '</div>';

      if (GATE.subject) {
        html += '<div class="blueprint-gate-subject">' + esc(GATE.subject) + '</div>';
      }

      if (open) {
        // Inputs render ABOVE the controls, because a human cannot decide what to record
        // until they have said what they are recording. Each is scoped to its verdict.
        GATE.verdicts.forEach(function (v, i) {
          (v.inputs || []).forEach(function (inp) {
            var id = 'bp-' + GATE.code.replace(/[^A-Za-z0-9]/g, '') + '-' + i + '-' + inp.field;
            html += '<div class="blueprint-gate-input">' +
                    '<label for="' + id + '">' + esc(inp.label) +
                    (inp.required ? ' <span class="blueprint-gate-req" aria-hidden="true">*</span>' +
                                    '<span class="blueprint-sr">(required)</span>' : '') +
                    '</label>';
            if (inp.type === 'select') {
              html += '<select id="' + id + '" data-input-for="' + i + '" data-input-field="' +
                      esc(inp.field) + '"' + (inp.required ? ' required' : '') + '>' +
                      '<option value="">-- choose --</option>';
              (inp.options || []).forEach(function (o) {
                html += '<option value="' + esc(o) + '">' + esc(o) + '</option>';
              });
              html += '</select>';
            } else if (inp.type === 'textarea') {
              html += '<textarea id="' + id + '" rows="3" data-input-for="' + i + '" data-input-field="' +
                      esc(inp.field) + '"' + (inp.required ? ' required' : '') + '></textarea>';
            } else if (inp.type === 'date') {
              // SJ s51 leg 3a (the defer act): a calendar control; its value is the YYYY-MM-DD string
              // and reaches the door unchanged through the same collect-then-merge below.
              html += '<input type="date" id="' + id + '" data-input-for="' + i + '" data-input-field="' +
                      esc(inp.field) + '"' + (inp.required ? ' required' : '') + ' />';
            } else {
              html += '<input type="text" id="' + id + '" data-input-for="' + i + '" data-input-field="' +
                      esc(inp.field) + '"' + (inp.required ? ' required' : '') + ' />';
            }
            if (inp.help) html += '<div class="blueprint-gate-help">' + esc(inp.help) + '</div>';
            html += '</div>';
          });
        });

        html += '<div class="blueprint-gate-verdicts">';
        GATE.verdicts.forEach(function (v, i) {
          html += '<button type="button" class="blueprint-gate-btn' +
                  (v.tone === 'primary' ? ' is-primary' : '') +
                  '" data-verdict-index="' + i + '">' + esc(v.label) + '</button>';
        });
        html += '</div>';
        GATE.verdicts.forEach(function (v) {
          html += '<div class="blueprint-gate-consequence"><b>' + esc(v.label) + '</b> &mdash; ' +
                  esc(v.consequence) + '</div>';
        });
      } else {
        html += '<div class="blueprint-gate-closed">' +
                esc((GATE.enabledWhen && GATE.enabledWhen.closedNote) ||
                    'This gate is not open right now.') + '</div>';
      }

      // The outcome container is emitted whether or not it currently holds a notice:
      // it is the gate's declared outcome home, and a structural check asks whether one
      // EXISTS, not whether it happens to have text in it today.
      html += '<div class="blueprint-gate-outcome" data-outcome aria-live="polite" hidden></div>';

      this.container.innerHTML = html;
      this.container.setAttribute('data-gate', GATE.code);

      var self = this;
      Array.prototype.forEach.call(
        this.container.querySelectorAll('[data-verdict-index]'),
        function (btn) {
          var handler = function () { self.recordVerdict(Number(btn.getAttribute('data-verdict-index'))); };
          btn.addEventListener('click', handler);
          self._boundHandlers.set(btn, handler);
        }
      );

      this.paintOutcome();
      this.fetchSubjectName();
    }

    // ---- the guarded action ---------------------------------------------------------

    async recordVerdict(index) {
      var v = GATE.verdicts[index];
      if (!v) return;

      // Captured BEFORE anything is attempted: the state this notice is written against.
      var prior = this.gateState();
      var key = outcomeKey(GATE.code, this.subjectId());
      var self = this;
      var say = function (text, kind, reaches) {
        OUTCOMES.set(key, {
          text: text,
          bad: kind === 'error',
          pending: kind === 'pending',
          reports: kind === 'ok' ? (reaches || null) : null,
          prior: prior
        });
        self.paintOutcome();
      };

      // COLLECT, then VALIDATE, then CONFIRM, then send -- and that order is the design.
      // Confirming first would ask "are you sure?" before the human has said WHY, and
      // validating after the confirmation would make them confirm something the gate is
      // about to refuse. A required input is checked while the decision is still theirs.
      var collected = {};
      var missing = [];
      (v.inputs || []).forEach(function (inp) {
        var el = self.container.querySelector(
          '[data-input-for="' + index + '"][data-input-field="' + inp.field + '"]');
        var val = el ? String(el.value == null ? '' : el.value).trim() : '';
        if (inp.required && val === '') { missing.push(inp.label); return; }
        if (val !== '') collected[inp.field] = val;
      });
      if (missing.length) {
        say(v.label + ' needs ' + missing.join(' and ') + ' before it can be recorded.', 'error');
        return;
      }

      // Guard second. A verdict that cannot be declined is not guarded.
      if (!window.confirm(v.confirm)) {
        say('Not recorded: ' + v.label.toLowerCase() + ' was cancelled.', 'cancel');
        return;
      }

      say('Recording ' + v.label + '...', 'pending');

      try {
        // The identity fields are applied LAST, so neither a static payload nor a collected
        // input can overwrite who acted, on what, or under which verdict. The schema already
        // makes those six field names unwritable in a blueprint; this is the second lock, so
        // the guarantee does not depend on someone never reordering this merge.
        var merged = Object.assign({}, v.payload || {}, collected, {
          subject_id: this.subjectId(),
          verdict: v.code,
          gate_code: GATE.code,
          tenant_id: this.context && this.context.tenant_id,
          user_id: this.context && this.context.user_id,
          role: this.context && this.context.role
        });

        // rpc:<name> targets the app's own data engine -- the sanctioned worker exposed
        // over PostgREST -- with the caller's credentials. Before this, the blueprint's
        // "/accounts/deactivate" pointed at an API server no static deploy has, and the
        // fetch carried no credentials at all (s31 resume, 2026-08-20). A plain URL
        // endpoint keeps the original behavior for shells that do run an API.
        var endpoint = v.endpoint;
        var headers = { 'Content-Type': 'application/json' };
        var sbCfg = (window.AppContext && window.AppContext.supabase) || {};
        if (/^rpc:/.test(endpoint) && sbCfg.url) {
          endpoint = sbCfg.url + '/rest/v1/rpc/' + endpoint.slice(4);
          if (sbCfg.anonKey) {
            headers.apikey = sbCfg.anonKey;
            headers.Authorization = 'Bearer ' + sbCfg.anonKey;
          }
          if (sbCfg.schema) { headers['Content-Profile'] = sbCfg.schema; }
          if (window.ShellAuth) {
            var sess = await window.ShellAuth.auth.getSession();
            if (sess.data && sess.data.session) {
              headers.Authorization = 'Bearer ' + sess.data.session.access_token;
            }
          }
        }

        // argMap: the blueprint names the worker's own parameters ({"p_account_id":
        // "subject_id", ...}) so a Postgres function receives exactly its declared
        // arguments. Without one, the merged fields go as-is -- the API-server shape
        // this template always sent.
        var body = merged;
        if (v.argMap) {
          body = {};
          Object.keys(v.argMap).forEach(function (arg) {
            body[arg] = merged[v.argMap[arg]] !== undefined ? merged[v.argMap[arg]] : null;
          });
        }

        var res = await fetch(endpoint, {
          method: v.method || 'POST',
          headers: headers,
          body: JSON.stringify(body)
        });
        var data = await res.json().catch(function () { return {}; });
        if (res.ok && data.ok !== false) {
          say(v.label + ' recorded. ' + v.consequence, 'ok', v.reaches || null);
          // the verdict said out loud with its receipt (1.2.1: a host page paints it and advances its rail)
          this.emit('blueprint:verdict', { verdict: v.code, gate: GATE.code, label: v.label, consequence: v.consequence,
                                           next: v.next ? (v.next.title || '') : null, nextRoute: v.next ? (v.next.route || null) : null, inline: !!this._inline });
          // THE NEXT STEP (1.2.0, his cut): the affirmative path carries its receipt and goes there -- unless inline
          if (v.next && v.next.route && !this._inline) {
            var route = v.next.route.replace(':id', String(this.subjectId()));
            try {
              window.sessionStorage.setItem(handoffKey(route), JSON.stringify({ text: v.label + ' recorded. ' + v.consequence, next: v.next.title || '', at: Date.now() }));
            } catch (ignored) { /* no storage: the next gate simply shows no receipt */ }
            if (window.ShellNavigation && window.ShellNavigation.navigate) window.ShellNavigation.navigate(route);
            else window.location.hash = '#' + route;
          }
        } else {
          // SJ s51 rung 5a (2026-09-08): a Postgres door refuses with a MESSAGE (PostgREST's error body carries
          // message / details / hint, never `error`), and the reason is the point -- "Sunday: off_day" -- so the
          // screen says the door's own words before it falls back to the status.
          say(v.label + ' refused: ' + (data.error || data.message || data.details || ('HTTP ' + res.status)), 'error');
        }
      } catch (e) {
        say(v.label + ' failed: ' + e.message + ' -- no response from the endpoint.', 'error');
      }
    }

    /** Paint (or retire) the notice for this gate+subject into the in-panel container. */
    paintOutcome() {
      if (!this.container) return;
      var node = this.container.querySelector('[data-outcome]');
      if (!node) return;

      var key = outcomeKey(GATE.code, this.subjectId());
      var m = OUTCOMES.get(key);
      if (m) {
        var expected = m.reports != null ? m.reports : m.prior;
        if (!m.pending && this.gateState() !== expected) {
          OUTCOMES.delete(key);
          m = null;
        }
      }

      node.hidden = !m;
      node.textContent = m ? m.text : '';
      node.classList.toggle('is-bad', !!(m && m.bad));
      node.classList.toggle('is-pending', !!(m && m.pending));
      if (m && m.bad) node.scrollIntoView({ block: 'nearest' });
    }
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = WorkOrderGateUI;
  }
  if (typeof window !== 'undefined') {
    window.WorkOrderGateUI = WorkOrderGateUI;
  }
})();

  // ═══════════════════════════════════════════════════════════════════════
  // SHELL CONTRACT -- register this component so a shell can mount it
  // without knowing its class name. Keyed by blueprint id, which is what
  // app_components.blueprint_id gives the shell. See
  // .project-models/architecture/06-blueprint-processing-gates.md gate 6.
  // ═══════════════════════════════════════════════════════════════════════
  if (typeof window !== 'undefined') {
    window.PatternRegistry = window.PatternRegistry || {};
    window.PatternRegistry['ca000000-0000-0000-0000-000000000001'] = window.WorkOrderGateUI;
  }
