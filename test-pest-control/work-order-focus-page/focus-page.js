/**
 * Work Order Focus Page - Generated Blueprint UI (THE ONE PAGE, focus-page-001 1.2.0)
 *
 * 1.2.0 (SJ s51 rung 5a, the second sitting, 2026-09-08 -- his verdict on the flow paper,
 * B + C, and his pass): THE RAIL. FACE.rail (optional) declares the page's ACTS IN ORDER
 * the way the tearsheet's walk wears them: a source view keyed by the record whose one
 * row carries the state; steps (a verb, a title, its gate's blueprint, its route kept as
 * the deep link, the selector it reads, a done_when on the row, a receipt field); the done
 * state. THE LIGHTING RULE is the rows': the first step not done is lit, the ones before
 * it done with their receipts, the ones after greyed; all done = the done state. The lit
 * step's body is ITS GATE MOUNTED IN THE FRAME (guarded-gate 1.2.1 inline mode): on the
 * affirmative path the gate emits its verdict and stays; this page re-reads, the rail
 * advances, the receipt appears, the frame turns to the next step's read. The lit selector
 * follows the step. Header seats whose verbs are rail steps fold into the rail; a step
 * renders only for a role whose acts carry its verb; a role with none sees no rail.
 * No rail declared = 1.1.0 in behavior.
 *
 * 1.1.0 (SJ s44 Q-AF, 2026-08-31): THE EARNED HEADER SEAT -- concept 41's own
 * clause: a verb "earns a header seat back only by a DECLARED SCENARIO, never
 * parked". FACE.verbs (optional) declares each seat: verb + title + route +
 * scenario (the schema refuses a seatless declaration); rendered quiet at the
 * header's edge, role-gated (the verb must sit in the gate's actions where a
 * gate narrows), the route's :id filled with the standing record. The header
 * stays identity-first: no verbs declared = 1.0.0 byte-for-byte.
 * Blueprint ID: c9000000-0000-0000-0000-000000000001
 * Pattern: FOCUS-PAGE (screen-grammar concepts 42-46, HIS layout, s41 3b)
 *
 * Implements Pattern Interface Contract (JBA-003)
 * - mount(container) / unmount() / onContext(context) / getMetadata() / setRecordId(id)
 *
 * The laws this component IS, not configures: an identity-only header (42) -- no state,
 * no verbs; the needs-attention tray as the ONLY place the page says act (40; one way to
 * resolve makes the way the button title, else Resolve; no screen yet renders FUTURE,
 * never hidden); four constant selectors over ONE shared frame (43-44; site leads with
 * radios where declared, and at one site the radios collapse -- 30); the Touch Log
 * opening in place, comms only (45); the address law (46: billing address in the Ledger
 * caption, the site's address on the site line at site-focus). The call panel is 3c's --
 * absent, never faked. Errors render as errors (11); an empty set is a quiet line, never
 * an empty region (30). Resolve on an open touch WRITES: resolution_status + resolved_at
 * (the 3a door is column-precise; resolved_by rides when 3c brings identity).
 */

(function() {
  'use strict';

  var FACE = {"schema":"services_template","tray":{"kinds":{"late":{"button":{"title":"Place now","status":"future"}},"compliance":{"button":{"title":"Resolve","status":"future"}}},"source":"v_work_order_tray"},"verbs":[{"verb":"cancel","route":"/operations/pending/:id/cancel","title":"Cancel","scenario":"the cancel act (s51 Q4, his R3): one occurrence cancelled with a reason from the catalog; the paper disposes"},{"verb":"defer","route":"/operations/pending/:id/defer","title":"Defer","scenario":"the defer act (s51 row 6): one occurrence postponed until a date inside its window with a reason; the planner honors it"},{"verb":"place","route":"/operations/pending/:id/place","title":"Place","scenario":"the place act on a date (s51 rung 5a; his I: the booking call is whoever takes the call): the work order to the cheapest eligible day of the date, a hand placement with its delta"}],"entity":"work_order","header":{"chips":["work_order_status","window_grade","work_order_type"],"title_field":"summary"},"selectors":[{"key":"mandate","list":{"source":"v_work_order_mandate","columns":[{"field":"rule","header":"rule"},{"field":"value","header":"value"},{"field":"binds","header":"binds"},{"field":"since","header":"since"}],"order_by":"ordinal"},"label":"Mandate"},{"key":"dates","list":{"source":"v_work_order_dates","columns":[{"field":"date","header":"date"},{"field":"weekday","header":"weekday"},{"field":"days_ahead","header":"days ahead"},{"field":"placement","header":"placement"}],"order_by":"date"},"label":"Dates"},{"key":"history","list":{"source":"v_work_order_history","columns":[{"field":"at","header":"at"},{"field":"move","header":"move"},{"field":"worker","header":"worker"},{"field":"reason","header":"reason"}],"order_by":"at desc"},"label":"History"},{"key":"paper","list":{"source":"v_work_order_paper","columns":[{"field":"term","header":"term"},{"field":"value","header":"value"},{"field":"source","header":"source"},{"field":"note","header":"note"}],"order_by":"ordinal"},"label":"Paper"}],"primary_key":"work_order_id","frame_columns":4,"personas":{"GENERIC_USER":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter"],"seated":false},"FIELD_TECH":{"fields":null,"readonly":[],"filters":{"status":["active"]},"actions":["close_stop","search","view","run_day"],"seated":false},"OPS_MANAGER":{"fields":["summary","work_order_type","work_order_status","priority","scheduled_date_time","completion_date_time","window_grade","account_name","site","service","service_window","buffer_days","state","compliance","assigned_to","pool_reason"],"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"ADMIN_FULL":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","delete","export","bulk_actions","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"CUSTOMER_SERVICE":{"fields":["summary","work_order_type","work_order_status","scheduled_date_time","completion_date_time","window_grade","account_name","site","service","service_window","buffer_days","state","compliance","assigned_to","pool_reason"],"readonly":[],"filters":{"status":["active"]},"actions":["view","search","sort","filter","edit","log_call","schedule","cancel","defer","place"],"seated":true},"SERVICE_MANAGER":{"fields":["summary","work_order_status","priority","scheduled_date_time","notes_internal","work_order_type","window_grade","account_name","site","service","service_window","buffer_days","state","compliance","assigned_to","pool_reason"],"readonly":[],"filters":{"status":["active"]},"actions":["view","search","sort","filter","schedule","assign_tech","create","cancel","defer","place","place_week","sequence","release"],"seated":true}}};
  var SKELETON = "<!-- Work Order Focus Page -- THE ONE PAGE (focus-page-001, screen-grammar 42-46; 1.2.0 THE RAIL). Generated; do not edit.\n     The shell mounts into an EMPTY host (the s37 skeleton lesson): this markup is written by\n     focus-page.js FIRST, then filled. Five regions less one: the call panel arrives with 3c.\n     1.2.0 (s51 rung 5a): the body splits into THE RAIL on the left (hidden unless the blueprint\n     declares one and the role holds a step) and the main column: the selectors, the frame, and\n     the lit step's body (its gate mounted in the frame). -->\n<div class=\"fp\" data-blueprint=\"c9000000-0000-0000-0000-000000000001\">\n  <header class=\"fp-head\">\n    <h2 class=\"fp-title\" data-fp=\"title\"></h2>\n    <span class=\"fp-chips\" data-fp=\"chips\"></span>\n    <span class=\"fp-verbs\" data-fp=\"verbs\"></span>\n  </header>\n  <p class=\"fp-scope\" data-fp=\"scope\" hidden></p>\n  <section class=\"fp-tray\" aria-label=\"Needs attention\">\n    <p class=\"fp-tray-label\">Needs attention</p>\n    <div data-fp=\"tray\"></div>\n  </section>\n  <div class=\"fp-body fp-body--norail\" data-fp=\"body\">\n    <nav class=\"fp-rail\" data-fp=\"rail\" aria-label=\"The acts, in order\" hidden></nav>\n    <div class=\"fp-main\">\n      <nav class=\"fp-selectors\" data-fp=\"selectors\" aria-label=\"Detail selectors\"></nav>\n      <section class=\"fp-frame\" aria-label=\"Detail\">\n        <p class=\"fp-caption\" data-fp=\"caption\"></p>\n        <div class=\"fp-radios\" data-fp=\"radios\"></div>\n        <p class=\"fp-siteline\" data-fp=\"siteline\" hidden></p>\n        <div class=\"fp-list\" data-fp=\"list\"></div>\n        <div class=\"fp-history\" data-fp=\"history\" hidden></div>\n      </section>\n      <section class=\"fp-step\" data-fp=\"step\" aria-label=\"The step\" hidden></section>\n    </div>\n  </div>\n</div>\n";

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = String(text);
    return e;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  class WorkOrderFocusPageBlueprintUI {

    constructor() {
      this.container = null;
      this.context = null;
      this.recordId = null;
      this.client = null;
      this.rec = null;
      this.activeSelector = 0;
      this.listCache = {};
      this.siteFocus = {};
      this.openPerson = null;
      // 1.2.0 THE RAIL
      this.railRow = null;
      this.railSteps = [];
      this.litIndex = 0;
      this.railSelected = null;
      this.gateInstance = null;
      this.lastVerdict = null;
      // THIS LOCATION ONLY (SJ s52 leg 12, 2026-09-17; the sitting's Details sheet): the route's `location` locks every
      // selector to one site -- the radios fold, the site line stands, the tray narrows, the history at the place reads
      this.siteLockId = null;
      this.siteLock = null;
    }

    getMetadata() {
      return { blueprintId: 'c9000000-0000-0000-0000-000000000001', pattern: 'FOCUS-PAGE', entity: FACE.entity };
    }

    mount(container) {
      this.container = container;
      container.innerHTML = SKELETON;
      this.$ = function (k) { return container.querySelector('[data-fp="' + k + '"]'); };
      this.maybeLoad();
    }

    unmount() {
      this.unmountGate();
      if (this.container) clear(this.container);
      this.container = null; this.rec = null; this.listCache = {};
      this.railRow = null; this.railSteps = []; this.railSelected = null; this.lastVerdict = null;
    }

    onContext(context) {
      this.context = context || {};
      // THIS LOCATION ONLY: the shell hands the route's query on context.params (`location`); a change re-reads the lists
      var p = this.context.params || {};
      var lock = p.location ? String(p.location) : null;
      if (lock !== this.siteLockId) { this.siteLockId = lock; this.siteLock = null; this.listCache = {}; this.siteFocus = {}; }
      if (this.context.recordId && !this.recordId) this.recordId = this.context.recordId;
      this.maybeLoad();
    }

    setRecordId(id) {
      if (!id) return;
      // 1.1.0: the SAME id reloads too -- an edit act may have moved the rows while
      // the face stood cached; every hand-off re-reads (the rows are the truth).
      if (id !== this.recordId) { this.railSelected = null; this.lastVerdict = null; }
      this.recordId = id;
      this.listCache = {}; this.siteFocus = {}; this.openPerson = null;
      this.maybeLoad();
    }

    dataClient() {
      var ctx = window.AppContext || {};
      var sb = ctx.supabase || {};
      if (window.ShellData && (sb.schema || 'public') === FACE.schema) return window.ShellData;
      if (window.supabase && window.supabase.createClient && sb.url && sb.anonKey) {
        return window.supabase.createClient(sb.url, sb.anonKey, {
          db: { schema: FACE.schema },
          global: sb.accessToken ? { headers: { Authorization: 'Bearer ' + sb.accessToken } } : {}
        });
      }
      return null;
    }

    from(table) { return this.client.schema(FACE.schema).from(table); }

    fail(where, message) {
      var host = this.$('list') || this.container;
      var e = el('div', 'fp-error', where + ': ' + message);
      host.insertBefore(e, host.firstChild);
    }

    maybeLoad() {
      if (!this.container || !this.recordId) return;
      this.client = this.client || this.dataClient();
      if (!this.client) return;
      this.load();
    }

    async load() {
      var self = this;
      // SJ s51 leg 3a (2026-09-07): two loads in flight for the same record (the route and the
      // record bridge both hand the id) drew the tray's cards TWICE -- each load cleared the host
      // and then both appended. A load carries its sequence; a stale one paints nothing.
      var seq = this._loadSeq = (this._loadSeq || 0) + 1;
      var r = await this.from(FACE.entity).select('*').eq(FACE.primary_key, this.recordId).limit(1);
      if (seq !== this._loadSeq) return;   // a newer load owns the page: this one paints nothing
      if (r.error) return this.fail(FACE.entity, r.error.message);
      this.rec = (r.data || [])[0];
      if (!this.rec) return this.fail(FACE.entity, 'no record ' + this.recordId);
      // THIS LOCATION ONLY: the locked site's own row -- its name is what every list's `site` column carries
      this.siteLock = null;
      if (this.siteLockId) {
        var lr = await this.from('service_location').select('*').eq('service_location_id', this.siteLockId).eq(FACE.primary_key, this.recordId).limit(1);
        if (seq !== this._loadSeq) return;
        var lrow = (lr.data || [])[0];
        this.siteLock = lrow ? { id: this.siteLockId, name: lrow.location_name || '', row: lrow } : { id: this.siteLockId, name: null, row: null, missing: lr.error ? lr.error.message : 'no such location on this account' };
      }
      await this.loadRail();
      if (seq !== this._loadSeq) return;
      this.renderHeader();
      this.renderScope();
      await this.renderTray();
      if (seq !== this._loadSeq) return;
      this.renderRail();
      this.renderSelectors();
      await this.showSelector(this.activeSelector);
      if (seq !== this._loadSeq) return;
      this.renderStep();
    }

    // -- the ROLE gate (the engine's key is `personas` -- 1.1.1's identifier; chosen at
    // render time from context.facet; null = no narrowing). The same mechanics the record
    // card runs: fields narrow what renders, actions narrow what writes.
    roleGate() {
      var facet = this.context && this.context.facet;
      if (!facet || !FACE.personas) return null;
      return FACE.personas[facet] || null;
    }

    // -- the identity-only header (concept 42); chips narrowed by the role's fields ------------
    renderHeader() {
      this.$('title').textContent = this.rec[FACE.header.title_field] || '';
      var gate = this.roleGate();
      var chips = this.$('chips'); clear(chips);
      for (var i = 0; i < FACE.header.chips.length; i++) {
        var f = FACE.header.chips[i];
        if (gate && Array.isArray(gate.fields) && gate.fields.indexOf(f) === -1) continue;
        var v = this.rec[f];
        if (v === null || v === undefined || v === '') continue;
        var c = el('span', 'fp-chip' + (String(v) === 'active' ? ' fp-chip--ok' : ''), v);
        chips.appendChild(c);
      }
      this.renderVerbs(gate);
    }

    // THIS LOCATION ONLY (SJ s52 leg 12): the scope line under the identity -- said, never implied
    renderScope() {
      var host = this.$('scope'); if (!host) return;
      clear(host);
      if (!this.siteLock) { host.hidden = true; host.removeAttribute('data-location'); return; }
      host.hidden = false; host.setAttribute('data-location', this.siteLock.id);
      if (this.siteLock.row) {
        var loc = this.siteLock.row;
        host.appendChild(el('b', null, 'this location only: ' + this.siteLock.name));
        var addr = [loc.street_address, loc.city, loc.state, loc.postal_code].filter(Boolean).join(', ');
        if (addr) host.appendChild(document.createTextNode(' · ' + addr));
        if (loc.access_information) host.appendChild(document.createTextNode(' · ' + loc.access_information));
      } else {
        host.appendChild(el('span', 'fp-error', 'the location ' + this.siteLock.id + ' is not on this account (' + (this.siteLock.missing || '?') + ') -- the whole record shows'));
      }
    }

    // -- the earned seats (1.1.0, concept 41's clause): declared verbs, quiet, role-gated --
    // 1.2.0: a seat whose verb is a rail step folds into the rail (the rail is the acts' own place)
    renderVerbs(gate) {
      var self = this;
      var host = this.$('verbs');
      if (!host) return;
      clear(host);
      (FACE.verbs || []).forEach(function (v) {
        if (gate && Array.isArray(gate.actions) && gate.actions.indexOf(v.verb) === -1) return;
        if (self.railSteps.some(function (s) { return s.verb === v.verb; })) return;
        var b = el('button', 'fp-verb', v.title);
        b.type = 'button';
        b.title = v.scenario;   // the seat is never parked: the scenario rides the control
        b.addEventListener('click', function () {
          var route = String(v.route).replace(':id', encodeURIComponent(self.recordId));
          if (window.ShellNavigation && window.ShellNavigation.navigate) window.ShellNavigation.navigate(route);
          else window.location.hash = '#' + route;
        });
        host.appendChild(b);
      });
    }

    // -- the tray (concept 40): open touches + derived exceptions; Resolve writes -------------
    async renderTray() {
      var self = this;
      var seq = this._loadSeq;
      var host = this.$('tray'); clear(host);
      var r = await this.from(FACE.tray.source).select('*').eq(FACE.primary_key, this.recordId);
      if (seq !== this._loadSeq) return;   // a newer load owns the tray now
      if (r.error) return this.fail(FACE.tray.source, r.error.message);
      var rows = r.data || [];
      // THIS LOCATION ONLY: the tray narrowed to the locked place (a row with no place stays -- it is the account's)
      if (this.siteLock && this.siteLock.row) { var lockId = this.siteLock.id; rows = rows.filter(function (t) { return !t.service_location_id || String(t.service_location_id) === lockId; }); }
      var order = Object.keys(FACE.tray.kinds);
      rows.sort(function (a, b) {
        return (order.indexOf(a.kind) - order.indexOf(b.kind)) || (a.headline < b.headline ? -1 : 1);
      });
      if (rows.length === 0) {
        host.appendChild(el('p', 'fp-quiet', 'nothing needs attention'));
        return;
      }
      rows.forEach(function (t) {
        var kindCfg = FACE.tray.kinds[t.kind];
        var card = el('div', 'fp-card');
        card.appendChild(el('span', 'fp-card-kind', t.kind.replace(/_/g, ' ')));
        card.appendChild(el('span', 'fp-card-h', t.headline));
        if (t.contact_name) card.appendChild(el('span', 'fp-card-who', t.contact_name));
        if (!kindCfg) {
          // a kind the blueprint does not declare is a SPEC error said out loud (11)
          card.appendChild(el('span', 'fp-error', 'undeclared kind: ' + t.kind));
          host.appendChild(card);
          return;
        }
        var btn = el('button', 'fp-btn', kindCfg.button.title);
        btn.type = 'button';
        // The role's actions gate the WRITE (conservative reading of the gate: resolving
        // a touch is acting on a call -- log_call -- or editing; a role with neither sees
        // the button closed, said out loud, never hidden).
        var gate = self.roleGate();
        var mayResolve = !gate || !Array.isArray(gate.actions)
          || gate.actions.indexOf('log_call') !== -1 || gate.actions.indexOf('edit') !== -1;
        if (kindCfg.button.status === 'live' && t.kind === 'open_touch' && mayResolve) {
          btn.addEventListener('click', function () { self.resolveTouch(t, btn); });
        } else if (kindCfg.button.status === 'live' && t.kind === 'open_touch') {
          btn.disabled = true;
          btn.title = 'closed to your role';
          card.appendChild(btn);
          host.appendChild(card);
          return;
        } else {
          btn.disabled = true;
          card.appendChild(btn);
          card.appendChild(el('span', 'fp-future', 'future'));
          host.appendChild(card);
          return;
        }
        card.appendChild(btn);
        host.appendChild(card);
      });
    }

    // Q7 propose-and-confirm's CONFIRM: a person presses, the write happens, nothing silent.
    // The 3a door admits exactly (resolution_status, resolved_at, resolved_by); resolved_by
    // rides when 3c brings a signed identity to attribute.
    async resolveTouch(t, btn) {
      btn.disabled = true;
      var r = await this.from('communication_log')
        .update({ resolution_status: 'resolved', resolved_at: new Date().toISOString() })
        .eq('communication_log_id', t.item_id);
      if (r.error) { btn.disabled = false; return this.fail('Resolve', r.error.message); }
      await this.renderTray();
    }

    // -- THE RAIL (1.2.0): the acts in order, lit by the rows ---------------------------------
    selectorIndex(key) {
      for (var i = 0; i < FACE.selectors.length; i++) if (FACE.selectors[i].key === key) return i;
      return -1;
    }

    stepDone(s) {
      var row = this.railRow || {};
      var dw = s.done_when || {};
      var v = row[dw.field];
      if (Object.prototype.hasOwnProperty.call(dw, 'gt')) return Number(v) > Number(dw.gt);
      return v === dw.equals || String(v) === String(dw.equals);
    }

    async loadRail() {
      this.railSteps = []; this.railRow = null;
      if (!FACE.rail) return;
      var gate = this.roleGate();
      var steps = (FACE.rail.steps || []).filter(function (s) {
        return !gate || !Array.isArray(gate.actions) || gate.actions.indexOf(s.verb) !== -1;
      });
      if (steps.length === 0) return;   // a role with none of the acts sees no rail
      var r = await this.from(FACE.rail.source).select('*').eq(FACE.primary_key, this.recordId).limit(1);
      if (r.error) { this.fail(FACE.rail.source, r.error.message); return; }
      this.railRow = (r.data || [])[0] || {};
      this.railSteps = steps;
      var lit = steps.length;
      for (var i = 0; i < steps.length; i++) { if (!this.stepDone(steps[i])) { lit = i; break; } }
      this.litIndex = lit;
      if (this.railSelected === null || this.railSelected > steps.length) this.railSelected = lit;
      // the lit selector follows the step (his cut: the first landing is what the step reads)
      var reads = this.railSelected < steps.length ? steps[this.railSelected].reads : FACE.rail.done.reads;
      var idx = this.selectorIndex(reads);
      if (idx >= 0) this.activeSelector = idx;
    }

    renderRail() {
      var self = this;
      var host = this.$('rail'), body = this.$('body');
      if (!host || !body) return;
      clear(host);
      if (this.railSteps.length === 0) { host.hidden = true; body.classList.add('fp-body--norail'); return; }
      host.hidden = false; body.classList.remove('fp-body--norail');
      var lit = this.litIndex;
      this.railSteps.forEach(function (s, i) {
        var done = i < lit, cur = i === lit;
        var item = el('div', 'fp-rail-item' + (cur ? ' fp-rail-item--current' : done ? ' fp-rail-item--done' : ' fp-rail-item--ahead') + (i === self.railSelected ? ' fp-rail-item--selected' : ''));
        item.setAttribute('data-step', String(i));
        item.setAttribute('data-state', cur ? 'current' : done ? 'done' : 'ahead');
        var row = el('div', 'fp-rail-row');
        row.appendChild(el('span', 'fp-rail-num', done ? '✓' : String(i + 1)));
        row.appendChild(el('span', 'fp-rail-name', s.title));
        row.appendChild(el('span', 'fp-rail-state', done ? 'done' : cur ? 'you are here' : ''));
        item.appendChild(row);
        var receipt = done && s.receipt_field ? self.railRow[s.receipt_field] : null;
        if (done && receipt) item.appendChild(el('div', 'fp-rail-sub', receipt));
        else if (cur) item.appendChild(el('div', 'fp-rail-sub', String(s.route).replace(':id', String(self.recordId))));
        item.addEventListener('click', function () { self.railGo(i); });
        host.appendChild(item);
      });
      if (lit >= this.railSteps.length) {
        var doneItem = el('div', 'fp-rail-item fp-rail-item--done fp-rail-item--current' + (this.railSelected === this.railSteps.length ? ' fp-rail-item--selected' : ''));
        doneItem.setAttribute('data-step', 'done');
        doneItem.setAttribute('data-state', 'all-done');
        var drow = el('div', 'fp-rail-row');
        drow.appendChild(el('span', 'fp-rail-num', '✓'));
        drow.appendChild(el('span', 'fp-rail-name', (FACE.rail.done && FACE.rail.done.title) || 'Done'));
        drow.appendChild(el('span', 'fp-rail-state', 'every step done'));
        doneItem.appendChild(drow);
        doneItem.addEventListener('click', function () { self.railGo(self.railSteps.length); });
        host.appendChild(doneItem);
      }
    }

    async railGo(i) {
      this.railSelected = i;
      this.renderRail();
      var reads = i < this.railSteps.length ? this.railSteps[i].reads : FACE.rail.done.reads;
      var idx = this.selectorIndex(reads);
      if (idx >= 0) await this.showSelector(idx);
      this.renderStep();
    }

    unmountGate() {
      if (this.gateInstance) { try { this.gateInstance.unmount(); } catch (ignored) { /* already gone */ } }
      this.gateInstance = null;
    }

    // the step's body IN THE FRAME: a done step's receipt; the lit step's GATE mounted inline; an ahead step's wait
    renderStep() {
      var self = this;
      var host = this.$('step');
      if (!host) return;
      this.unmountGate();
      clear(host);
      if (this.railSteps.length === 0) { host.hidden = true; return; }
      host.hidden = false;
      var sel = this.railSelected, lit = this.litIndex, n = this.railSteps.length;
      var head = el('h3', 'fp-step-head');
      if (sel >= n) {
        head.appendChild(el('span', 'fp-step-num', '✓'));
        head.appendChild(el('span', null, (FACE.rail.done && FACE.rail.done.title) || 'Done'));
        host.appendChild(head);
        if (this.lastVerdict) host.appendChild(this.receiptLine(this.lastVerdict));
        var last = this.railSteps[n - 1];
        var lastReceipt = last.receipt_field ? this.railRow[last.receipt_field] : null;
        if (lastReceipt) host.appendChild(el('div', 'fp-receipt', '✓ ' + lastReceipt));
        host.appendChild(el('p', 'fp-step-note', 'every step done; the frame reads ' + this.selectorLabel(FACE.rail.done.reads)));
        return;
      }
      var s = this.railSteps[sel];
      head.appendChild(el('span', 'fp-step-num', String(sel + 1)));
      head.appendChild(el('span', null, s.title));
      head.appendChild(el('span', 'fp-step-link', 'deep link ' + String(s.route).replace(':id', String(this.recordId))));
      host.appendChild(head);
      if (this.lastVerdict && sel === lit) host.appendChild(this.receiptLine(this.lastVerdict));
      // THE RAIL LIGHTS, NEVER LOCKS (the chair's catch, 2026-09-08: a hand placement from the office's booking call
      // lights Sequence by the rows, and Place the week must still be reachable from the day): a done step shows its
      // receipt ABOVE its gate, an ahead step a note above its gate -- every step's gate stands in the frame; the
      // door refuses what cannot be done (the human is the optimize pass).
      if (sel < lit) {
        var receipt = s.receipt_field ? this.railRow[s.receipt_field] : null;
        host.appendChild(el('div', 'fp-receipt', '✓ done' + (receipt ? ': ' + receipt : '')));
        host.appendChild(el('p', 'fp-step-note', 'done by the rows; its gate stands below to act again (the frame reads ' + this.selectorLabel(s.reads) + '; the rail is at ' + (lit < n ? this.railSteps[lit].title : 'done') + ')'));
      } else if (sel > lit) {
        host.appendChild(el('p', 'fp-step-note', 'ahead of the rows: the rail is at ' + this.railSteps[lit].title + '; this step\'s gate stands below all the same -- the rail lights, never locks; the door refuses what is not ready'));
      }
      // the selected step's gate, in the frame (guarded-gate 1.2.1 inline mode) -- every step's, not only the lit one's
      var Cls = (window.PatternRegistry || {})[s.gate];
      if (!Cls) { host.appendChild(el('div', 'fp-error', 'the gate ' + s.gate + ' is not registered -- was its script emitted?')); return; }
      var gateHost = el('div', 'fp-gate');
      gateHost.setAttribute('data-gate-blueprint', s.gate);
      host.appendChild(gateHost);
      gateHost.addEventListener('blueprint:verdict', function (e) { self.onVerdict(e.detail || {}); });
      try {
        var g = new Cls();
        g.mount(gateHost, { inline: true });
        if (typeof g.onContext === 'function') g.onContext(this.context);
        if (typeof g.setRecordId === 'function') g.setRecordId(this.recordId);
        this.gateInstance = g;
      } catch (err) {
        host.appendChild(el('div', 'fp-error', 'the gate could not mount in the frame: ' + err.message));
      }
    }

    receiptLine(v) {
      return el('div', 'fp-receipt', '✓ ' + (v.label || v.verdict || 'recorded') + ' recorded.' + (v.consequence ? ' ' + v.consequence : '') + (v.next ? ' Next: ' + v.next + '.' : ''));
    }

    selectorLabel(key) {
      var i = this.selectorIndex(key);
      return i >= 0 ? FACE.selectors[i].label : key;
    }

    // the affirmative path, taken in the frame: the rows moved, so the page re-reads and the rail advances
    onVerdict(detail) {
      this.lastVerdict = detail;
      this.railSelected = null;
      this.listCache = {};
      this.load();
    }

    // -- four constant selectors, one shared frame (43-44) -------------------------------------
    renderSelectors() {
      var self = this;
      var host = this.$('selectors'); clear(host);
      FACE.selectors.forEach(function (s, i) {
        var b = el('button', 'fp-selector' + (i === self.activeSelector ? ' fp-selector--on' : ''), s.label);
        b.type = 'button';
        b.addEventListener('click', function () { self.showSelector(i); });
        host.appendChild(b);
      });
    }

    async fetchList(i) {
      if (this.listCache[i]) return this.listCache[i];
      var L = FACE.selectors[i].list;
      var q = this.from(L.source).select('*').eq(FACE.primary_key, this.recordId);
      if (L.order_by) {
        var p = L.order_by.split(/\s+/);
        q = q.order(p[0], { ascending: p[1] !== 'desc' });
      }
      var r = await q;
      if (r.error) { this.fail(L.source, r.error.message); return []; }
      this.listCache[i] = r.data || [];
      return this.listCache[i];
    }

    async showSelector(i) {
      var self = this;
      this.activeSelector = i;
      this.renderSelectors();
      var s = FACE.selectors[i], L = s.list;
      var rows = await this.fetchList(i);

      // THIS LOCATION ONLY (SJ s52 leg 12): the locked site narrows every list that carries a site; no radios, the site line stands
      var locked = !!(this.siteLock && this.siteLock.row);
      // a row with no site is the account's own (a contact for the whole account, a ledger line) and stays
      if (locked && rows.length && rows[0].site !== undefined) { var lockName = this.siteLock.name; rows = rows.filter(function (r) { return !r.site || r.site === lockName; }); }

      // caption -- and the Ledger's half of the address law (46)
      var cap = s.label + ' · ' + rows.length + ' row(s)' + (locked ? ' · this location only' : '');
      if (L.caption_billing_address && this.rec) {
        cap += ' · billing address: ' + [this.rec.billing_street_address, this.rec.billing_city,
          this.rec.billing_state, this.rec.billing_zip_code].filter(Boolean).join(', ');
      }
      this.$('caption').textContent = cap;

      // site radios (44); one site -> they collapse (30); a locked site draws none
      var radios = this.$('radios'); clear(radios);
      var line = this.$('siteline'); line.hidden = true; line.textContent = '';
      var focus = this.siteFocus[i] || 'all';
      if (locked && L.site_leads) { await this.renderSiteLine(line, this.siteLock.name); }
      else if (L.site_leads) {
        var sites = []; rows.forEach(function (r) { if (r.site && sites.indexOf(r.site) < 0) sites.push(r.site); });
        sites.sort();
        if (sites.length > 1) {
          var opts = ['all'].concat(sites);
          opts.forEach(function (site) {
            var lab = el('label', null, null);
            var inp = document.createElement('input');
            inp.type = 'radio'; inp.name = 'fp-site-' + i; inp.checked = (site === focus);
            inp.addEventListener('change', function () { self.siteFocus[i] = site; self.showSelector(i); });
            lab.appendChild(inp);
            lab.appendChild(document.createTextNode(' ' + (site === 'all' ? 'All Sites' : site)));
            radios.appendChild(lab);
          });
          if (focus !== 'all') { rows = rows.filter(function (r) { return r.site === focus; }); await this.renderSiteLine(line, focus); }
        }
      }

      // the table, frame_columns wide
      var list = this.$('list'); clear(list);
      var table = el('table', 'fp-table');
      var thead = document.createElement('thead'); var trh = document.createElement('tr');
      L.columns.forEach(function (c) { trh.appendChild(el('th', null, c.header)); });
      thead.appendChild(trh); table.appendChild(thead);
      var tbody = document.createElement('tbody');
      if (rows.length === 0) {
        var tr0 = document.createElement('tr');
        var td0 = el('td', 'fp-muted', 'none yet');
        td0.colSpan = FACE.frame_columns;
        tr0.appendChild(td0); tbody.appendChild(tr0);
      } else {
        rows.forEach(function (row) {
          var tr = document.createElement('tr');
          L.columns.forEach(function (c) {
            var v = row[c.field];
            var td = document.createElement('td');
            if (c.field === 'status' && v) {
              var seg = el('span', 'fp-seg ' + (/(covered|completed|resolved|cleared|active)$/.test(v) ? 'fp-seg--done' : /(uncovered|open|past)/.test(v) ? 'fp-seg--warn' : 'fp-seg--blue'), v);
              td.appendChild(seg);
            } else {
              td.textContent = (v === null || v === undefined) ? '-' : String(v);
            }
            tr.appendChild(td);
          });
          if (L.row_expansion && L.row_expansion.kind === 'touch_log') {
            tr.className = 'fp-row--openable';
            if (Number(row.touches) > 0) {
              var last = tr.lastChild;
              last.appendChild(el('span', 'fp-muted', ' · ' + row.touches + ' touch' + (Number(row.touches) === 1 ? '' : 'es')));
            }
            tr.addEventListener('click', function () { self.togglePerson(row, tr, L); });
          }
          tbody.appendChild(tr);
        });
      }
      table.appendChild(tbody);
      list.appendChild(table);
      await this.renderHistory(s, locked);
    }

    // THE HISTORY AT THIS LOCATION (SJ s52 leg 12; his word: "notes are how techs say what is happening on the account"):
    // under the Work Orders list when a site is locked -- the last three services at the place from v_location_history
    // (the date, the service, the technician, the note the field wrote); nothing drawn on the whole record
    async renderHistory(s, locked) {
      var host = this.$('history'); if (!host) return;
      clear(host); host.hidden = true;
      if (!locked || s.key !== 'work_orders') return;
      var r = await this.from('v_location_history').select('*').eq('service_location_id', this.siteLock.id).order('ordinal').limit(3);
      host.hidden = false;
      host.appendChild(el('p', 'fp-caption', 'History at this location' + (r.error ? '' : ' · ' + (r.data || []).length + ' service(s)')));
      if (r.error) { host.appendChild(el('div', 'fp-error', 'v_location_history: ' + r.error.message)); return; }
      var rows = r.data || [];
      if (!rows.length) { host.appendChild(el('p', 'fp-muted', 'no service on the record at this location')); return; }
      var table = el('table', 'fp-table'); var thead = document.createElement('thead'); var trh = document.createElement('tr');
      ['date', 'service', 'technician', 'note'].forEach(function (h) { trh.appendChild(el('th', null, h)); });
      thead.appendChild(trh); table.appendChild(thead);
      var tbody = document.createElement('tbody');
      rows.forEach(function (x) {
        var tr = document.createElement('tr'); tr.setAttribute('data-fp-history-row', String(x.ordinal)); tr.setAttribute('data-fp-history-source', String(x.source || ''));
        tr.appendChild(el('td', null, String(x.served_on || '').slice(5) || '-'));
        tr.appendChild(el('td', null, x.service || '-'));
        tr.appendChild(el('td', x.technician ? null : 'fp-muted', x.technician || '-'));
        var note = el('td', x.note ? null : 'fp-muted', x.note || '-'); note.setAttribute('data-fp-history-note', x.note ? '1' : '0'); tr.appendChild(note);
        tbody.appendChild(tr);
      });
      table.appendChild(tbody); host.appendChild(table);
    }

    // the site line -- the site's half of the address law (46)
    async renderSiteLine(line, site) {
      var r = await this.from('service_location').select('*')
        .eq(FACE.primary_key, this.recordId).eq('location_name', site).limit(1);
      var loc = (r.data || [])[0];
      if (!loc) return;
      var bits = [[loc.street_address, loc.city, loc.state, loc.postal_code].filter(Boolean).join(', ')];
      if (loc.access_information) bits.push(loc.access_information);
      line.textContent = site + ' — ' + bits.join(' · ');
      line.hidden = false;
    }

    // the Touch Log opens in place (45) -- comms only; system events live under their selectors
    async togglePerson(row, tr, L) {
      var existing = tr.nextSibling;
      if (existing && existing.className === 'fp-expand') { existing.parentNode.removeChild(existing); this.openPerson = null; return; }
      var old = tr.parentNode.querySelector('.fp-expand');
      if (old) old.parentNode.removeChild(old);
      this.openPerson = row.contact_id;
      var xr = document.createElement('tr'); xr.className = 'fp-expand';
      var td = document.createElement('td'); td.colSpan = FACE.frame_columns;
      td.appendChild(el('div', 'fp-muted', (row.reach ? row.reach + ' · ' : '') + 'prefers ' + (row.prefers || 'not set')));
      var r = await this.from(L.row_expansion.source).select('*')
        .eq('contact_id', row.contact_id).order('timestamp', { ascending: false });
      if (r.error) { td.appendChild(el('div', 'fp-error', r.error.message)); }
      else if ((r.data || []).length === 0) {
        td.appendChild(el('p', 'fp-muted', 'no touches yet'));
      } else {
        var ul = el('ul', 'fp-log');
        r.data.forEach(function (g) {
          var li = el('li', null, String(g.timestamp).slice(0, 10) + ' · ' + g.method + ' ' + g.direction +
            ' · "' + (g.subject || '') + '" · ' + g.resolution_status +
            (g.related_work_order_id ? ' · names its work order' : ''));
          ul.appendChild(li);
        });
        td.appendChild(ul);
      }
      xr.appendChild(td);
      tr.parentNode.insertBefore(xr, tr.nextSibling);
    }
  }

  // Export to window for the shell's mounting system
  if (typeof window !== 'undefined') {
    window.WorkOrderFocusPageBlueprintUI = WorkOrderFocusPageBlueprintUI;
    window.PatternRegistry = window.PatternRegistry || {};
    window.PatternRegistry['c9000000-0000-0000-0000-000000000001'] = window.WorkOrderFocusPageBlueprintUI;
  }
})();
