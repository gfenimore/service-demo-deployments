/**
 * Deactivate account - Guarded Gate (contract compliant)
 * Blueprint ID: c0000001-0001-0001-0005-000000000001
 * Pattern: GUARDED-GATE
 * Gate: PEST.CUST.ACCT.DEACTIVATE.CONFIRM
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
 */

(function () {
  'use strict';

  var GATE = {
  "code": "PEST.CUST.ACCT.DEACTIVATE.CONFIRM",
  "title": "Deactivate account",
  "subject": "Deactivating stops service and billing for this account. It can be reversed by reactivating, but the reason you record here is kept.",
  "verdicts": [
    {
      "code": "DEACTIVATE",
      "label": "Deactivate account",
      "confirm": "Deactivate this account? Service and billing stop, and the reason you gave is recorded against it.",
      "endpoint": "/accounts/deactivate",
      "method": "POST",
      "payload": {
        "action": "deactivate"
      },
      "consequence": "Stops service and billing for this account and records who deactivated it, when, and why.",
      "reaches": null,
      "tone": "primary",
      "inputs": [
        {
          "field": "deactivation_reason",
          "label": "Reason",
          "type": "select",
          "required": true,
          "options": [
            "customer_request",
            "non_payment",
            "duplicate",
            "moved",
            "other"
          ],
          "help": "Kept with the account. SC-DEL-002 requires this before the account can be deactivated."
        },
        {
          "field": "notes",
          "label": "Additional notes",
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

  class AccountGateUI {
    constructor() {
      this.container = null;
      this.context = null;
      this._boundHandlers = new Map();
      this.metadata = {
        blueprint_id: 'c0000001-0001-0001-0005-000000000001',
        pattern_type: 'GUARDED-GATE',
        gate_code: GATE.code,
        title: GATE.title,
        entity: 'account',
        sopf_node: 'unknown',
        role_context_id: null
      };
    }

    // ---- contract: mount ------------------------------------------------------------
    mount(container) {
      if (!container) throw new Error('Container element is required for mounting');
      if (this.container) throw new Error('Component is already mounted. Call unmount() first.');
      this.container = container;
      this.container.classList.add('blueprint-account-gate');
      this.render();
      this.emit('blueprint:ready', {});
      console.log('[AccountGateUI] Mounted successfully');
    }

    // ---- contract: unmount ----------------------------------------------------------
    unmount() {
      if (!this.container) return;
      this._boundHandlers.forEach(function (h, el) { el.removeEventListener('click', h); });
      this._boundHandlers.clear();
      this.container.classList.remove('blueprint-account-gate');
      this.container.innerHTML = '';
      this.container = null;
      this.context = null;
    }

    // ---- contract: onContext --------------------------------------------------------
    onContext(context) {
      this.context = context || null;
      if (this.container) this.render();
      console.log('[AccountGateUI] Context received:', { role: context && context.role });
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

    subjectId() { return (this.context && this.context.subject_id) || null; }

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

      var html =
        '<div class="blueprint-gate-head">' + esc(GATE.title) +
        '<span class="blueprint-gate-code">' + esc(GATE.code) + '</span></div>';

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
        var body = Object.assign({}, v.payload || {}, collected, {
          subject_id: this.subjectId(),
          verdict: v.code,
          gate_code: GATE.code,
          tenant_id: this.context && this.context.tenant_id,
          user_id: this.context && this.context.user_id,
          role: this.context && this.context.role
        });
        var res = await fetch(v.endpoint, {
          method: v.method || 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        var data = await res.json().catch(function () { return {}; });
        if (res.ok && data.ok !== false) {
          say(v.label + ' recorded. ' + v.consequence, 'ok', v.reaches || null);
          this.emit('blueprint:verdict', { verdict: v.code, gate: GATE.code });
        } else {
          say(v.label + ' refused: ' + (data.error || ('HTTP ' + res.status)), 'error');
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
    module.exports = AccountGateUI;
  }
  if (typeof window !== 'undefined') {
    window.AccountGateUI = AccountGateUI;
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
    window.PatternRegistry['c0000001-0001-0001-0005-000000000001'] = window.AccountGateUI;
  }
