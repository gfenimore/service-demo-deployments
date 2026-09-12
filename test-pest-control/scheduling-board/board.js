/**
 * Route Board - Generated Blueprint UI (THE BOARD, board-001 1.1.0)
 *
 * 1.0.0 (SJ s51 rung 5a, the second sitting, 2026-09-08): his diver board of 2025 thrown on the flow paper as
 * reading C -- "WE produce proposed routes/stops, and the users are only dealing with non-happy-path scenarios" --
 * THE MACHINE's own thesis wearing a face: the strip, THE POOL by buffer with LATE as one red word and the machine's
 * reason on a leftover, the day's TECHNICIAN COLUMNS with their bars, a pool card opened IN PLACE with the four things,
 * the keys, the drag through the door with the human's reason (Q10), the acts by grant, desktop only, the office closed.
 *
 * 1.1.0 (2026-09-10; READING D passed on the picture with his cuts 1-2; his word "Approve the reading D as-is"):
 * THE BOARD IN TWO MODES (Q15). PLANNING and CURRENT are two seats on one board, both on THE DAYS TRACK of schedulable
 * days only (the client's working weekdays), the board TITLED by its mode. THE PERIOD (week | two weeks | half month |
 * month) is chosen ON THE BOARD and kept for the client through the registry's door (his (a)); until the door lands the
 * desk keeps it and says so. THE STEP on the track (his cut 2): the period before, the period after, the way home a
 * chip shown only when stepped away; the board opens on the coming period; a day past the generator's horizon reads
 * "to generate". THE SEARCH BY PLACE ONLY (his cut 1 and his word): an area or a zone, one tree -- the pills and the
 * columns follow the place; a technician's name is a JUMP to his column, lit, never a filter. THE SILENT DROP (Q10
 * amended, Q15 part 5): a drop calls the door with the filter's own reason; inside the criteria it PLACES with no
 * question; the door returns the EXCEPTION and only then the reason panel asks; a refusal keeps the card with the
 * door's words; the browser's confirm dialog is GONE. THE ROOM IN THE CLIENT'S UNIT (Q15 part 6): the minutes leave
 * the face unless the unit is minutes. WIDEN THE WINDOW in both forms for his chair (his (c)). CURRENT shows every
 * schedule in its state; its life (the stop's statuses) is leg 6's.
 * Blueprint ID: d4000000-0000-0000-0000-000000000001
 * Pattern: BOARD
 *
 * Implements Pattern Interface Contract (JBA-003)
 * - mount(container) / unmount() / onContext(context) / getMetadata() / setRecordId(id)
 * The board takes no record: setRecordId is accepted and ignored (the track is the selection).
 */

(function() {
  'use strict';

  var FACE = {"schema":"services_template","acts":[{"verb":"place_week","route":"/operations/scheduling/:id/place-week","scope":"week","title":"Place the week"},{"verb":"sequence","route":"/operations/scheduling/:id/sequence","scope":"day","title":"Sequence"},{"verb":"release","route":"/operations/scheduling/:id/release","scope":"day","title":"Release"}],"days":"v_board_days","drag":{"verb":"place","confirm":"Place {account} on {date} with {technician}?","function":"place_on_day","silent_reason":"route_filter","default_reason":"customer_asked"},"pool":"work_order_due_list","unit":"stops","areas":"geographic_area","stops":"v_schedule_stops","zones":"service_zone","detail":"v_board_stop_detail","period":{"key":"policy.planning_period","default":"week","function":"set_tenant_policy","lead_key":"policy.planning_lead"},"desktop":{"refusal":"The board is a desk's screen. Open it on a screen at least 1024 pixels wide.","min_width":1024},"reasons":"v_override_reasons","registry":"tenant_property","unit_key":"capacity.unit","day_route":"/operations/scheduling/:id","days_route":"/operations/scheduling/days","pool_route":"/operations/pending/:id","pool_detail":"v_board_pool_detail","weekdays_key":"calendar.operating_weekdays","personas":{"FIELD_TECH":{"fields":null,"readonly":[],"filters":{"status":["active"]},"actions":["view","search"],"seated":false},"GENERIC_USER":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter"],"seated":false},"OPS_MANAGER":{"fields":["route_name","status","route_date","weekday","technician","template","state","room","placed","slack","minutes","released"],"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"ADMIN_FULL":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","delete","export","bulk_actions","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"CUSTOMER_SERVICE":{"fields":["route_name","status","route_date","weekday","technician","template","state","room","placed","slack","minutes","released"],"readonly":[],"filters":{"status":["active"]},"actions":["view","search","sort","filter","edit","log_call","schedule","cancel","defer","place"],"seated":false},"SERVICE_MANAGER":{"fields":["route_name","status","route_date","weekday","technician","template","state","room","placed","slack","minutes","released"],"readonly":[],"filters":{"status":["active"]},"actions":["view","search","sort","filter","schedule","assign_tech","create","cancel","defer","place","place_week","sequence","release"],"seated":true}}};
  var SKELETON = "<!-- Route Board -- THE BOARD (board-001 1.1.0; s51 rung 5a: reading C as built, and READING D, the board in two modes,\n     at his word 2026-09-10 \"Approve the reading D as-is\"). Generated; do not edit. The shell mounts into an EMPTY host\n     (the s37 skeleton lesson): this markup is written by board.js FIRST, then filled. -->\n<div class=\"bd\" data-blueprint=\"d4000000-0000-0000-0000-000000000001\">\n  <header class=\"bd-head\">\n    <span class=\"bd-modes\" data-bd=\"modes\"></span>\n    <h2 class=\"bd-title\" data-bd=\"title\">The board</h2>\n    <span class=\"bd-sub\" data-bd=\"sub\"></span>\n    <span class=\"bd-acts\" data-bd=\"acts\"></span>\n  </header>\n  <nav class=\"bd-track\" data-bd=\"track\" aria-label=\"The days track\"></nav>\n  <div class=\"bd-search\" data-bd=\"search\"></div>\n  <div class=\"bd-filters\" data-bd=\"filters\"></div>\n  <p class=\"bd-verdict\" data-bd-out=\"1\" hidden></p>\n  <section class=\"bd-panel\" data-bd=\"panel\" aria-label=\"The exception\" hidden></section>\n  <div class=\"bd-board\">\n    <div class=\"bd-col bd-col--pool\">\n      <div class=\"bd-col-h\"><b>THE POOL</b><span class=\"bd-muted\" data-bd=\"poolsub\"></span></div>\n      <div class=\"bd-widen\" data-bd=\"widen\"></div>\n      <div class=\"bd-cards\" data-bd=\"pool\"></div>\n    </div>\n    <div class=\"bd-cols\" data-bd=\"cols\"></div>\n  </div>\n  <p class=\"bd-note\" data-bd=\"note\"></p>\n</div>\n";
  // 1.1.0: the keys a 1.0.0 row does not carry read their defaults here -- honest until the rows land
  var REGISTRY = FACE.registry || 'tenant_property';
  var PERIOD = FACE.period || {};
  var PERIOD_KEY = PERIOD.key || 'policy.planning_period';
  var LEAD_KEY = PERIOD.lead_key || 'policy.planning_lead';
  var UNIT_KEY = FACE.unit_key || 'capacity.unit';
  var WEEKDAYS_KEY = FACE.weekdays_key || 'calendar.operating_weekdays';
  var SILENT_REASON = (FACE.drag && FACE.drag.silent_reason) || 'route_filter';
  var PERIOD_WORDS = { week: 'week', two_weeks: 'two weeks', half_month: 'half month', month: 'month' };
  var WEEKDAY = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = String(text);
    return e;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }
  function iso(d) { return d.toISOString().slice(0, 10); }
  function parse(s) { return new Date(s + 'T00:00:00Z'); }
  function addDays(d, n) { var x = new Date(d.getTime()); x.setUTCDate(x.getUTCDate() + n); return x; }
  function firstOfMonth(d) { return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)); }
  function lastOfMonth(d) { return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)); }
  function mondayOf(d) { var w = d.getUTCDay(); return addDays(d, w === 0 ? -6 : 1 - w); }

  // THE PERIOD (Q15 part 3): one primitive, the client's -- the period holding a date, the one after, the one before
  function periodOf(kind, d) {
    if (kind === 'month') return { start: firstOfMonth(d), end: lastOfMonth(d) };
    if (kind === 'half_month') { var f = firstOfMonth(d); return d.getUTCDate() <= 15 ? { start: f, end: addDays(f, 14) } : { start: addDays(f, 15), end: lastOfMonth(d) }; }
    var m = mondayOf(d);
    return { start: m, end: addDays(m, (kind === 'two_weeks' ? 14 : 7) - 1) };
  }
  function nextPeriod(kind, p) {
    if (kind === 'week' || kind === 'two_weeks') { var n = kind === 'week' ? 7 : 14; return { start: addDays(p.end, 1), end: addDays(p.end, n) }; }
    return periodOf(kind, addDays(p.end, 1));
  }
  function prevPeriod(kind, p) {
    if (kind === 'week' || kind === 'two_weeks') { var n = kind === 'week' ? 7 : 14; return { start: addDays(p.start, -n), end: addDays(p.start, -1) }; }
    return periodOf(kind, addDays(p.start, -1));
  }

  class RouteBoardBlueprintUI {

    constructor() {
      this.container = null;
      this.context = null;
      this.client = null;
      this.today = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
      this.mode = 'planning';       // PLANNING or CURRENT: two seats, one board (Q15)
      this.periodKind = null;       // the client's period, from the registry (his (a))
      this.lead = 0;                // how far ahead the generator builds, in periods
      this.period = null;           // the period SHOWN {start, end}
      this.home = null;             // the seat's home: the coming period (PLANNING) or today's (CURRENT)
      this.weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      this.unit = FACE.unit || 'stops';
      this.registry = {};
      this.registryRead = false;
      this.maxGenerated = null;     // the generator's horizon as the rows have it
      this.selectedDate = null;
      this.days = [];
      this.stopsByRoute = {};
      this.pool = [];
      this.reasons = [];
      this.zones = [];
      this.areas = [];
      this.place = null;            // the place found: {kind: area | zone, name, zones: [names], area}
      this.filterZone = null;       // a zone pill beneath the place
      this.litRoute = null;         // the column a technician's name jumped to
      this.widenDays = 0;           // WIDEN THE WINDOW, form 1: +1 day at a time
      this.widenTo = null;          // form 2: a date
      this.collapsed = {};
      this.openStop = null;
      this.panel = null;            // the exception panel {wo, day, cause, out, bad}
      this.verdict = null; this.verdictBad = false;
      this.selectedPool = null;     // the keys' selection in the pool
      this.openPool = null;         // the pool card opened in place (the four things)
      this.refused = false;         // the desktop law
    }

    getMetadata() { return { blueprintId: 'd4000000-0000-0000-0000-000000000001', pattern: 'BOARD', entity: 'route' }; }

    // THE LAW (Q8 amended at his word 2026-09-08: the board is DESKTOP ONLY): a viewport narrower than the desk's
    // minimum is refused with one quiet line -- never folded, never stacked, no touch mode
    deskWide() { return (window.innerWidth || document.documentElement.clientWidth || 0) >= ((FACE.desktop && FACE.desktop.min_width) || 1024); }
    refuse(container) {
      clear(container);
      var line = el('p', 'bd-quiet bd-refusal', (FACE.desktop && FACE.desktop.refusal) || ('The board is a desk\'s screen. Open it on a screen at least ' + ((FACE.desktop && FACE.desktop.min_width) || 1024) + ' pixels wide.'));
      line.setAttribute('data-bd', 'refusal');
      container.appendChild(line);
      this.refused = true;
    }

    mount(container) {
      var self = this;
      this.container = container;
      if (!this.deskWide()) { this.refuse(container); }
      else {
        this.refused = false;
        container.innerHTML = SKELETON;
        this.$ = function (k) { return container.querySelector('[data-bd="' + k + '"]'); };
        container.setAttribute('tabindex', '0');
        this.maybeLoad();
      }
      // the keys move the selection (his efficiency law): down and up walk the pool shown, Enter opens the card in place, Escape closes
      this._keys = function (e) {
        if (self.refused) return;
        if (e.target && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
        var shown = self.poolShown();
        if (!shown.length) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          var ids = shown.map(function (w) { return w.work_order_id; });
          var i = ids.indexOf(self.selectedPool);
          i = e.key === 'ArrowDown' ? Math.min(ids.length - 1, i + 1) : Math.max(0, i - 1);
          self.selectedPool = ids[i]; self.renderPool();
          var card = container.querySelector('.bd-card--pool[data-wo="' + self.selectedPool + '"]');
          if (card && card.scrollIntoView) card.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter' && self.selectedPool) { e.preventDefault(); self.togglePool(self.selectedPool); }
        else if (e.key === 'Escape' && self.openPool) { e.preventDefault(); self.openPool = null; self.renderPool(); }
      };
      container.addEventListener('keydown', this._keys);
      // the law holds while the window changes: a desk that narrows is refused, a phone that widens is admitted
      this._resize = function () {
        var wide = self.deskWide();
        if (!wide && !self.refused) self.refuse(container);
        else if (wide && self.refused) { self.mount(container); }
      };
      window.addEventListener('resize', this._resize);
    }

    unmount() {
      if (this._resize) window.removeEventListener('resize', this._resize);
      if (this.container && this._keys) this.container.removeEventListener('keydown', this._keys);
      if (this.container) clear(this.container);
      this.container = null; this.days = []; this.stopsByRoute = {}; this.pool = []; this.period = null; this.registryRead = false;
    }

    onContext(context) { this.context = context || {}; this.maybeLoad(); }

    setRecordId(id) { /* the board takes no record: the track is the selection */ }

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
      var host = this.$('cols') || this.container;
      host.insertBefore(el('div', 'bd-error', where + ': ' + message), host.firstChild);
    }

    // -- the ROLE gate: the acts by grant (the engine's key is `personas`) --------------------------
    roleGate() {
      var facet = this.context && this.context.facet;
      if (!facet || !FACE.personas) return null;
      return FACE.personas[facet] || null;
    }
    // a role with no cell on the board's leaf sees NO board (two seats, never munged: the office keeps the days and the
    // work order's page; the scheduler gets the board) -- the resolver marks each persona `seated` from the leaf's
    // cells (job_step_facet_configs), so the gate is the rows', never a guess; a persona with no mark is seated (legacy)
    closedToRole() { var g = this.roleGate(); return !!(g && g.seated === false); }
    may(verb) {
      var gate = this.roleGate();
      if (gate && gate.seated === false) return false;
      return !gate || !Array.isArray(gate.actions) || gate.actions.indexOf(verb) !== -1;
    }

    maybeLoad() {
      if (!this.container || !this.context || this.refused) return;
      this.client = this.client || this.dataClient();
      if (!this.client) return;
      this.load();
    }

    tenantOf(q) {
      var t = this.context && this.context.tenant_id;
      return t && !/^__/.test(String(t)) ? q.eq('tenant_id', t) : q;
    }

    // -- THE REGISTRY, read once: the period, the lead, the unit, the working week (the client's rows, else the defaults) --
    deskKey() { return 'board.period.' + ((this.context && this.context.tenant_id) || 'tenant'); }
    async readRegistry() {
      var self = this;
      this.registryRead = true;
      var keys = [PERIOD_KEY, LEAD_KEY, UNIT_KEY, WEEKDAYS_KEY, 'policy.slack_unit'];
      var r = await this.tenantOf(this.from(REGISTRY).select('property_key, property_value, effective_to').in('property_key', keys));
      if (!r.error) (r.data || []).forEach(function (row) { if (!row.effective_to) self.registry[row.property_key] = row.property_value; });
      var kept = null; try { kept = window.localStorage.getItem(this.deskKey()); } catch (ignored) { /* no desk memory */ }
      // the client's row is the truth once the door exists; until then the desk's choice stands over the row
      var fromRow = PERIOD_WORDS[this.registry[PERIOD_KEY]] ? this.registry[PERIOD_KEY] : null;
      var fromDesk = PERIOD_WORDS[kept] ? kept : null;
      this.periodKind = (PERIOD.function ? (fromRow || fromDesk) : (fromDesk || fromRow)) || PERIOD.default || 'week';
      this.lead = parseInt(this.registry[LEAD_KEY], 10) || 0;
      this.unit = this.registry[UNIT_KEY] || this.registry['policy.slack_unit'] || FACE.unit || 'stops';
      var wd = String(this.registry[WEEKDAYS_KEY] || 'mon,tue,wed,thu,fri,sat').split(',').map(function (s) { return s.trim().toLowerCase(); }).filter(function (s) { return WEEKDAY.indexOf(s) !== -1; });
      if (wd.length) this.weekdays = wd;
    }

    // -- THE HOME and THE STEP (his cut 2): the coming period in PLANNING, today's in CURRENT; the horizon = home + the lead --
    goHome() {
      var t = periodOf(this.periodKind, this.today);
      this.home = this.mode === 'current' ? t : nextPeriod(this.periodKind, t);
      this.period = this.home;
      this.selectedDate = null;
    }
    horizonEnd() { var p = this.home; for (var i = 0; i < this.lead; i++) p = nextPeriod(this.periodKind, p); return iso(p.end); }
    stepped() { return !!(this.period && this.home && iso(this.period.start) !== iso(this.home.start)); }
    canStepForward() {
      // the step forward reaches the horizon (the setting's, or the rows' last generated day); the period past it reads "to generate"
      var later = this.horizonEnd();
      if (this.maxGenerated && this.maxGenerated > later) later = this.maxGenerated;
      return iso(this.period.start) <= later;
    }
    step(dir) {
      if (dir === 'home') this.goHome();
      else if (dir === 'forward') { if (!this.canStepForward()) return; this.period = nextPeriod(this.periodKind, this.period); this.selectedDate = null; }
      else { this.period = prevPeriod(this.periodKind, this.period); this.selectedDate = null; }
      this.openStop = null; this.panel = null; this.litRoute = null;
      this.load();
    }
    trackDates() {
      var out = [];
      for (var d = this.period.start; d <= this.period.end; d = addDays(d, 1)) if (this.weekdays.indexOf(WEEKDAY[d.getUTCDay()]) !== -1) out.push(iso(d));
      return out;
    }
    periodWord() { return PERIOD_WORDS[this.periodKind] || this.periodKind; }

    async load() {
      var self = this;
      if (this.closedToRole()) {
        clear(this.container);
        var line = el('p', 'bd-quiet', 'The board is the scheduler\'s seat. Your role reads the days' + (FACE.days_route ? ':' : '.'));
        line.setAttribute('data-bd', 'closed');
        if (FACE.days_route) { var go = el('button', 'bd-tech', 'the days'); go.type = 'button'; go.addEventListener('click', function () { self.navigate(FACE.days_route, ''); }); line.appendChild(document.createTextNode(' ')); line.appendChild(go); }
        this.container.appendChild(line);
        return;
      }
      var seq = this._loadSeq = (this._loadSeq || 0) + 1;
      if (!this.registryRead) await this.readRegistry();
      if (seq !== this._loadSeq) return;
      if (!this.period) this.goHome();
      var from = iso(this.period.start), to = iso(this.period.end);
      var r = await this.tenantOf(this.from(FACE.days).select('*').gte('route_date', from).lte('route_date', to)).order('route_date').order('technician');
      if (seq !== this._loadSeq) return;
      if (r.error) return this.fail(FACE.days, r.error.message);
      this.days = r.data || [];
      // the generator's horizon as the rows have it: the client's last generated day
      var h = await this.tenantOf(this.from(FACE.days).select('route_date')).order('route_date', { ascending: false }).limit(1);
      if (seq !== this._loadSeq) return;
      this.maxGenerated = (!h.error && h.data && h.data.length) ? h.data[0].route_date : null;
      // the selected day: the one chosen if it stands in the period; else today in CURRENT; else the first day of the period with a schedule; else the first cell
      var cells = this.trackDates();
      var has = function (dt) { return self.days.some(function (d) { return d.route_date === dt; }); };
      if (!this.selectedDate || cells.indexOf(this.selectedDate) === -1) {
        var todayIso = iso(this.today);
        this.selectedDate = (this.mode === 'current' && cells.indexOf(todayIso) !== -1) ? todayIso : (cells.filter(has)[0] || cells[0] || null);
      }
      var p = await this.tenantOf(this.from(FACE.pool).select('*').eq('state', 'ready')).order('buffer_days');
      if (seq !== this._loadSeq) return;
      if (p.error) this.fail(FACE.pool, p.error.message); else this.pool = p.data || [];
      var days = this.days.filter(function (d) { return d.route_date === self.selectedDate; });
      this.stopsByRoute = {};
      for (var i = 0; i < days.length; i++) {
        var s = await this.from(FACE.stops).select('*').eq('route_id', days[i].route_id).order('seq');
        if (seq !== this._loadSeq) return;
        if (s.error) this.fail(FACE.stops, s.error.message); else this.stopsByRoute[days[i].route_id] = s.data || [];
      }
      if (!this.reasons.length) {
        var rs = await this.tenantOf(this.from(FACE.reasons).select('*'));   // the client's list, not every tenant's
        if (seq !== this._loadSeq) return;
        if (rs.error) this.fail(FACE.reasons, rs.error.message); else this.reasons = rs.data || [];
      }
      if (FACE.zones && !this.zones.length) { var z = await this.from(FACE.zones).select('*').order('zone_name'); if (!z.error) this.zones = z.data || []; }
      if (FACE.areas && !this.areas.length) { var a = await this.from(FACE.areas).select('*').order('name'); if (!a.error) this.areas = a.data || []; }
      if (seq !== this._loadSeq) return;
      this.render();
    }

    render() {
      this.renderHead();
      this.renderTrack();
      this.renderSearch();
      this.renderFilters();
      this.renderVerdict();
      this.renderPanel();
      this.renderWiden();
      this.renderPool();
      this.renderColumns();
    }

    // -- the place and the pool, by the filter selections --------------------------------------------
    zoneNamesOf(d) { return String(d.zones || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean); }
    selectedDays() {
      var self = this;
      return this.days.filter(function (d) {
        if (d.route_date !== self.selectedDate) return false;
        var names = self.zoneNamesOf(d);
        if (self.place && !self.place.zones.some(function (z) { return names.indexOf(z) !== -1; })) return false;
        if (self.filterZone && names.indexOf(self.filterZone) === -1) return false;
        return true;
      });
    }
    widenEnd() {
      var e = iso(addDays(this.period.end, this.widenDays));
      return (this.widenTo && this.widenTo > e) ? this.widenTo : e;
    }
    // THE POOL IS ALWAYS THE POOL, by the filter selections: the dues whose window touches the period shown (widened at the human's ask)
    poolShown() {
      var s = iso(this.period.start), e = this.widenEnd();
      return this.pool.filter(function (w) {
        var lo = w.earliest_allowable_date, hi = w.latest_allowable_date;
        return (!lo || lo <= e) && (!hi || hi >= s);
      });
    }

    navigate(route, id) {
      var r = String(route).replace(':id', encodeURIComponent(id));
      if (window.ShellNavigation && window.ShellNavigation.navigate) window.ShellNavigation.navigate(r);
      else window.location.hash = '#' + r;
    }

    say(words, bad) { this.verdict = words || null; this.verdictBad = !!bad; this.renderVerdict(); }
    renderVerdict() {
      var host = this.container && this.container.querySelector('[data-bd-out]');
      if (!host) return;
      host.textContent = this.verdict || '';
      host.className = 'bd-verdict' + (this.verdictBad ? ' is-bad' : '');
      host.hidden = !this.verdict;
    }

    // -- the head: THE MODE (two seats, one board), the title by mode, THE PERIOD chosen on the board, the acts by grant --
    renderHead() {
      var self = this;
      var modes = this.$('modes'); clear(modes);
      ['planning', 'current'].forEach(function (m) {
        var b = el('button', 'bd-mode' + (self.mode === m ? ' bd-mode--on' : ''), m.toUpperCase());
        b.type = 'button'; b.setAttribute('data-bd-mode', m);
        b.title = m === 'planning' ? 'PLANNING: build the coming period from the pool' : 'CURRENT: every schedule in its state; an ad hoc stop onto a released day';
        b.addEventListener('click', function () { if (self.mode !== m) { self.mode = m; self.goHome(); self.openStop = null; self.panel = null; self.litRoute = null; self.load(); } });
        modes.appendChild(b);
      });
      var p = this.period;
      this.$('title').textContent = this.mode === 'current'
        ? 'CURRENT -- ' + WEEKDAY[this.today.getUTCDay()] + ' ' + iso(this.today)
        : 'PLANNING -- the ' + this.periodWord() + ' of ' + iso(p.start) + ' to ' + iso(p.end);
      var all = this.days.filter(function (d) { return d.route_date === self.selectedDate; });
      var shown = this.poolShown().length;
      this.$('sub').textContent = (this.selectedDate || '-') + ' · ' + all.length + ' schedule(s) · ' + shown + ' in the pool' + (shown !== this.pool.length ? ' (' + this.pool.length + ' ready in all)' : '');
      var host = this.$('acts'); clear(host);
      // THE PERIOD chosen on the board (his (a)): the client's, kept across sessions and users through the registry's door
      var sel = document.createElement('select'); sel.className = 'bd-period'; sel.setAttribute('data-bd-period', '1');
      sel.title = 'the planning period -- the client\'s, kept for every seat';
      Object.keys(PERIOD_WORDS).forEach(function (k) { var o = document.createElement('option'); o.value = k; o.textContent = 'the ' + PERIOD_WORDS[k]; if (k === self.periodKind) o.selected = true; sel.appendChild(o); });
      sel.disabled = !this.may(FACE.drag.verb);
      sel.addEventListener('change', function () { self.setPeriod(sel.value); });
      host.appendChild(sel);
      // "access to it if I want it": THE DAYS list, one click away
      if (FACE.days_route) { var dl = el('button', 'bd-act', 'the days'); dl.type = 'button'; dl.setAttribute('data-act', 'days'); dl.addEventListener('click', function () { self.navigate(FACE.days_route, ''); }); host.appendChild(dl); }
      (FACE.acts || []).forEach(function (act) {
        if (act.scope !== 'week' || !self.may(act.verb)) return;
        var b = el('button', 'bd-act', act.title);
        b.type = 'button';
        b.setAttribute('data-act', act.verb);
        b.disabled = all.length === 0;
        b.title = all.length ? 'over the week this day sits in (' + all[0].technician + '\'s ' + all[0].route_date + ')' : 'no schedule stands on this day';
        b.addEventListener('click', function () { if (all.length) self.navigate(act.route, all[0].route_id); });
        host.appendChild(b);
      });
    }
    async setPeriod(v) {
      if (!PERIOD_WORDS[v] || v === this.periodKind) return;
      this.periodKind = v; this.goHome(); this.litRoute = null;
      if (PERIOD.function) {
        // the registry's door takes the client, the key, the value and the role (the facet seam's word, lower-cased)
        var r = await this.rpc(PERIOD.function, { p_tenant: (this.context && this.context.tenant_id) || null, p_key: PERIOD_KEY, p_value: v, p_by: String((this.context && this.context.facet) || 'service_manager').toLowerCase() });
        if (r.ok) this.say('The period is now the ' + PERIOD_WORDS[v] + ', kept for the client (' + PERIOD_KEY + ').', false);
        else this.say('The period was not kept for the client: ' + r.words + ' -- shown as the ' + PERIOD_WORDS[v] + ' on this desk only.', true);
      } else {
        try { window.localStorage.setItem(this.deskKey(), v); } catch (ignored) { /* no desk memory */ }
        this.say('The period is now the ' + PERIOD_WORDS[v] + ' -- kept on this desk until the registry\'s door lands (' + PERIOD_KEY + ' is not written yet).', false);
      }
      this.load();
    }

    // -- THE DAYS TRACK (his cut): schedulable days only; THE STEP at each end; the way home a chip when stepped away --
    renderTrack() {
      var self = this;
      var host = this.$('track'); clear(host);
      var word = this.periodWord();
      var back = el('button', 'bd-step', '‹ the ' + word + ' before');
      back.type = 'button'; back.setAttribute('data-bd-step', 'back'); back.title = 'a past period reads; a drop on a past day is refused (the calendar\'s first law)';
      back.addEventListener('click', function () { self.step('back'); });
      host.appendChild(back);
      var cells = el('div', 'bd-days');
      var maxGen = this.maxGenerated;
      this.trackDates().forEach(function (dt) {
        var on = self.days.filter(function (d) { return d.route_date === dt; });
        var gen = !on.length && (!maxGen || dt > maxGen);   // past the generator's horizon: honest, "to generate"
        var cell = el('div', 'bd-day' + (dt === self.selectedDate ? ' bd-day--on' : '') + (on.length ? '' : (gen ? ' bd-day--gen' : ' bd-day--none')));
        cell.setAttribute('data-date', dt);
        cell.appendChild(document.createTextNode((on.length ? on[0].weekday : WEEKDAY[parse(dt).getUTCDay()]) + ' ' + dt.slice(5)));
        var states = {}; on.forEach(function (d) { states[d.state] = true; });
        var small = on.length ? (on.length + ' schedule(s)' + (self.mode === 'current' ? ' · ' + Object.keys(states).join(', ') : '')) : (gen ? 'to generate' : 'no day');
        cell.appendChild(el('small', null, small));
        cell.addEventListener('click', function () { self.selectedDate = dt; self.openStop = null; self.panel = null; self.load(); });
        cells.appendChild(cell);
      });
      host.appendChild(cells);
      var fwd = el('button', 'bd-step', 'the ' + word + ' after ›');
      fwd.type = 'button'; fwd.setAttribute('data-bd-step', 'forward');
      fwd.disabled = !this.canStepForward();
      fwd.title = fwd.disabled ? 'the generator\'s horizon: the period plus the lead (a generate-on-demand act is additive)' : 'the period after: the title, the track and the pool follow';
      fwd.addEventListener('click', function () { self.step('forward'); });
      host.appendChild(fwd);
      if (this.stepped()) {
        var home = el('button', 'bd-home', this.mode === 'current' ? 'back to today' : 'back to the coming ' + word);
        home.type = 'button'; home.setAttribute('data-bd-step', 'home');
        home.addEventListener('click', function () { self.step('home'); });
        host.appendChild(home);
      }
    }

    // -- THE SEARCH BY PLACE ONLY (his cut 1, his word): an area or a zone, one tree; a technician's name is a JUMP --
    technicians() {
      var seen = {}, out = [];
      this.days.forEach(function (d) { if (d.technician && !seen[d.technician]) { seen[d.technician] = true; out.push(d.technician); } });
      return out.sort();
    }
    zonesOfArea(area) {
      return this.zones.filter(function (z) { return z.geographic_area_id && z.geographic_area_id === area.geographic_area_id; }).map(function (z) { return z.zone_name; });
    }
    areaOfZone(zone) {
      var a = this.areas.filter(function (x) { return zone.geographic_area_id && x.geographic_area_id === zone.geographic_area_id; })[0];
      return a ? a.name : null;
    }
    // the box is built ONCE and kept (a box torn down inside its own change event is Chrome's "moved in a blur handler");
    // only the state beside it -- the place in blue, the jump -- is redrawn
    renderSearch() {
      var self = this;
      var host = this.$('search');
      if (!this.zones.length && !this.areas.length) { clear(host); return; }
      var input = host.querySelector('[data-bd-search]');
      if (!input) {
        var listId = 'bd-places-' + Math.random().toString(36).slice(2, 8);
        input = document.createElement('input');
        input.type = 'search'; input.setAttribute('data-bd-search', '1'); input.setAttribute('list', listId);
        input.placeholder = 'Find an area or a zone -- or a technician\'s name, to jump to his column';
        var dl = document.createElement('datalist'); dl.id = listId;
        input.addEventListener('change', function () { self.find(input.value); });
        input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); self.find(input.value); } });
        host.appendChild(input); host.appendChild(dl);
        host.appendChild(el('span', 'bd-search-state'));
      }
      var list = host.querySelector('datalist'); clear(list);
      var opt = function (text) { var o = document.createElement('option'); o.value = text; list.appendChild(o); };
      this.areas.forEach(function (a) { if (a.name) opt(a.name + ' (area)'); });
      this.zones.forEach(function (z) { if (z.zone_name) opt(z.zone_name + ' (zone)'); });
      this.technicians().forEach(function (t) { opt(t + ' (technician)'); });
      var state = host.querySelector('.bd-search-state'); clear(state);
      if (this.place) {
        var chip = el('span', 'bd-place', 'Place: ' + this.place.name + ' (' + this.place.kind + (this.place.kind === 'zone' && this.place.area ? ', in ' + this.place.area : '') + ')');
        chip.setAttribute('data-bd-place', this.place.name);
        state.appendChild(chip);
        state.appendChild(document.createTextNode(' '));
        var x = el('button', 'bd-clear', 'clear'); x.type = 'button'; x.setAttribute('data-bd-clear', '1');
        x.addEventListener('click', function () { self.place = null; self.filterZone = null; input.value = ''; self.render(); });
        state.appendChild(x);
      }
      if (this.litRoute) {
        var lit = this.days.filter(function (d) { return d.route_id === self.litRoute; })[0];
        if (lit) { var j = el('span', 'bd-muted', ' jumped to ' + lit.technician + '\'s column (a jump, not a filter)'); j.setAttribute('data-bd-jump', lit.technician); state.appendChild(j); }
      }
    }
    find(text) {
      var self = this;
      var raw = String(text || '');
      // Enter and the change event both ask; one answer per tick
      if (this._finding === raw) return;
      this._finding = raw; setTimeout(function () { self._finding = null; }, 0);
      var q = raw.replace(/\s*\((area|zone|technician)\)\s*$/i, '').trim().toLowerCase();
      if (!q) { this.place = null; this.filterZone = null; this.render(); return; }
      var match = function (items, field) {
        var exact = items.filter(function (it) { return String(it[field] || '').toLowerCase() === q; })[0];
        return exact || items.filter(function (it) { return String(it[field] || '').toLowerCase().indexOf(q) === 0; })[0] || null;
      };
      var area = match(this.areas, 'name');
      if (area) { this.place = { kind: 'area', name: area.name, zones: this.zonesOfArea(area) }; this.filterZone = null; this.litRoute = null; this.say(null); this.render(); return; }
      var zone = match(this.zones, 'zone_name');
      if (zone) { this.place = { kind: 'zone', name: zone.zone_name, zones: [zone.zone_name], area: this.areaOfZone(zone) }; this.filterZone = null; this.litRoute = null; this.say(null); this.render(); return; }
      var tech = this.technicians().filter(function (t) { return t.toLowerCase() === q; })[0] || this.technicians().filter(function (t) { return t.toLowerCase().indexOf(q) === 0; })[0];
      if (tech) { this.jump(tech); return; }
      this.say('No area, zone or technician named "' + raw.trim() + '" in this period.', true);
      void self;
    }
    // a technician's NAME is a JUMP to his column, lit -- never a filter (his word: "techs ARE represented as zones in a sense")
    jump(name) {
      var self = this;
      var his = this.days.filter(function (d) { return d.technician === name; });
      if (!his.length) { this.say(name + ' has no day in this period.', true); return; }
      var day = his.filter(function (d) { return d.route_date === self.selectedDate; })[0] || his[0];
      this.place = null; this.filterZone = null;
      this.selectedDate = day.route_date; this.litRoute = day.route_id; this.openStop = null;
      this.say(null);
      this.load().then(function () {
        var col = self.container && self.container.querySelector('.bd-col[data-route="' + day.route_id + '"]');
        if (col && col.scrollIntoView) col.scrollIntoView({ inline: 'center', block: 'nearest' });
      });
    }

    // -- THE PILLS FOLLOW THE PLACE: nothing picked, the areas then the zones (one tree); a place picked, its zones beneath --
    renderFilters() {
      var self = this;
      var host = this.$('filters'); clear(host);
      if (!this.zones.length && !this.areas.length) return;
      var pill = function (text, on, onClick, attr) {
        var b = el('button', 'bd-pill' + (on ? ' bd-pill--on' : ''), text);
        b.type = 'button'; if (attr) b.setAttribute('data-bd-pill', attr);
        b.addEventListener('click', onClick);
        host.appendChild(b);
      };
      if (this.place) {
        host.appendChild(el('span', 'bd-muted', this.place.kind === 'area' ? 'its zones:' : ('in ' + (this.place.area || 'no area') + ':')));
        pill('All', !this.filterZone, function () { self.filterZone = null; self.render(); }, 'all');
        this.place.zones.forEach(function (z) { pill(z, self.filterZone === z, function () { self.filterZone = self.filterZone === z ? null : z; self.render(); }, z); });
        return;
      }
      pill('All', true, function () { self.place = null; self.filterZone = null; self.render(); }, 'all');
      if (this.areas.length) { host.appendChild(el('span', 'bd-muted', 'Area:')); this.areas.forEach(function (a) { if (a.name) pill(a.name, false, function () { self.find(a.name); }, a.name); }); }
      if (this.zones.length) { host.appendChild(el('span', 'bd-muted', this.areas.length ? 'Zone:' : 'Place:')); this.zones.forEach(function (z) { if (z.zone_name) pill(z.zone_name, false, function () { self.find(z.zone_name); }, z.zone_name); }); }
    }

    // -- WIDEN THE WINDOW (David's lever; his (c): both forms for his chair) --------------------------------------------
    renderWiden() {
      var self = this;
      var host = this.$('widen'); clear(host);
      var plus = el('button', 'bd-btn', '+1 day'); plus.type = 'button'; plus.setAttribute('data-bd-widen', 'day');
      plus.title = 'pull the next day\'s dues into the pool (form 1)';
      plus.addEventListener('click', function () { self.widenDays += 1; self.render(); });
      host.appendChild(plus);
      host.appendChild(el('span', null, 'or to'));
      var to = document.createElement('input'); to.type = 'date'; to.setAttribute('data-bd-widen', 'to'); to.value = this.widenTo || ''; to.min = iso(this.period.end);
      to.title = 'the pool\'s dates widened to this day (form 2)';
      to.addEventListener('change', function () { self.widenTo = to.value || null; self.render(); });
      host.appendChild(to);
      if (this.widenDays || this.widenTo) {
        var reset = el('button', 'bd-clear', 'the period only'); reset.type = 'button'; reset.setAttribute('data-bd-widen', 'reset');
        reset.addEventListener('click', function () { self.widenDays = 0; self.widenTo = null; self.render(); });
        host.appendChild(reset);
      }
    }

    // -- the pool: the pending list from the scheduler's side (ready, by buffer) inside the period; each card its reason --
    renderPool() {
      var self = this;
      var host = this.$('pool'); clear(host);
      var shown = this.poolShown();
      var widened = this.widenDays || this.widenTo;
      this.$('poolsub').textContent = 'ready, by buffer, inside ' + iso(this.period.start) + ' to ' + this.widenEnd() + (widened ? ' (widened)' : '');
      if (!shown.length) { host.appendChild(el('div', 'bd-quiet', this.pool.length ? 'no ready work order\'s window touches this period -- widen it, or step' : 'the pool is empty -- every ready work order is on a day')); return; }
      var canDrag = this.may(FACE.drag.verb);
      if (this.selectedPool && !shown.some(function (w) { return w.work_order_id === self.selectedPool; })) this.selectedPool = null;
      shown.forEach(function (w) {
        var on = self.selectedPool === w.work_order_id || self.openPool === w.work_order_id;
        var card = el('div', 'bd-card bd-card--pool' + (on ? ' bd-card--on' : ''));
        card.setAttribute('data-wo', w.work_order_id);
        if (self.openPool === w.work_order_id) card.setAttribute('data-open', '1');
        card.appendChild(el('b', null, w.account_name + (w.site && w.site !== w.account_name ? ' / ' + w.site : '')));
        card.appendChild(el('div', null, w.service));
        var n = el('div', 'bd-card-n', 'buffer ' + w.buffer_days);
        if (w.late) { n.appendChild(document.createTextNode(' ')); n.appendChild(el('span', 'bd-late', 'LATE')); }
        card.appendChild(n);
        if (w.pool_reason) card.appendChild(el('div', 'bd-reason', 'left in the pool: ' + String(w.pool_reason).replace(/_/g, ' ')));
        // the card opens IN PLACE with the four things (his efficiency law); a click selects and opens, a second click closes
        card.addEventListener('click', function () { self.selectedPool = w.work_order_id; self.togglePool(w.work_order_id); });
        if (canDrag) {
          card.draggable = true;
          card.addEventListener('dragstart', function (e) { e.dataTransfer.setData('text/plain', w.work_order_id); e.dataTransfer.effectAllowed = 'move'; });
        } else { card.title = 'closed to your role'; }
        host.appendChild(card);
        if (self.openPool === w.work_order_id) self.fillPoolDetail(w, card);
      });
    }

    // -- a pool card opened IN PLACE: THE FOUR THINGS the scheduler decides with (his efficiency law, 2026-09-08) --
    togglePool(woId) {
      this.openPool = this.openPool === woId ? null : woId;
      this.renderPool();
    }
    async fillPoolDetail(w, card) {
      var self = this;
      var box = el('div', 'bd-detail bd-detail--pool', 'reading...');
      box.setAttribute('data-bd-pool-detail', w.work_order_id);
      card.appendChild(box);
      var r = await this.from(FACE.pool_detail).select('*').eq('work_order_id', w.work_order_id).limit(1);
      clear(box);
      if (r.error) { box.appendChild(el('div', 'bd-error', r.error.message)); return; }
      var f = (r.data || [])[0];
      if (!f) { box.appendChild(el('div', 'bd-muted', 'no facts stand on this work order')); return; }
      var row = function (label, text) { var d = el('div', null, null); d.appendChild(el('span', 'bd-muted', label + ' ')); d.appendChild(document.createTextNode(text || '-')); box.appendChild(d); };
      row('what', f.must);
      row('when', f.window + '; cheapest ' + f.cheapest);
      row('who', f.who);
      row('terms', f.terms);
      if (FACE.pool_route) {
        var a = el('button', 'bd-tech', 'open the work order');
        a.type = 'button'; a.setAttribute('data-bd-pool-open', '1');
        a.addEventListener('click', function (e) { e.stopPropagation(); self.navigate(FACE.pool_route, w.work_order_id); });
        box.appendChild(a);
      }
    }

    // -- the day's technician columns: the bar in the client's unit, the stops, the acts on the foot; a drop target ----
    renderColumns() {
      var self = this;
      var host = this.$('cols'); clear(host);
      var days = this.selectedDays();
      if (!days.length) {
        var onDay = this.days.some(function (d) { return d.route_date === self.selectedDate; });
        var past = this.maxGenerated && this.selectedDate && this.selectedDate > this.maxGenerated;
        host.appendChild(el('div', 'bd-quiet', onDay ? 'no schedule carries the place on this day' : (past ? 'to generate: ' + this.selectedDate + ' lies past the generator\'s horizon (the period plus the lead)' : 'no day: no standing route generates ' + this.selectedDate + ' (a holiday or a time off generates nothing)')));
        this.$('note').textContent = '';
        return;
      }
      days.forEach(function (d) { host.appendChild(self.columnOf(d)); });
      this.$('note').textContent = 'the workers produce the proposal; you deal with the exceptions -- drag a work order from the pool onto a technician\'s day: inside the criteria it places with no question; on the exception the panel asks your reason; the door refuses what cannot be done. The technician\'s name opens the day.';
    }

    columnOf(d) {
      var self = this;
      var collapsed = !!this.collapsed[d.route_id];
      var col = el('div', 'bd-col' + (collapsed ? ' bd-col--collapsed' : '') + (this.litRoute === d.route_id ? ' bd-col--lit' : ''));
      col.setAttribute('data-route', d.route_id);
      var head = el('div', 'bd-col-h');
      var chev = el('button', 'bd-chev', collapsed ? '▸' : '▾');
      chev.type = 'button'; chev.title = collapsed ? 'open the column' : 'collapse the column to one line';
      chev.addEventListener('click', function () { self.collapsed[d.route_id] = !collapsed; self.renderColumns(); });
      head.appendChild(chev); head.appendChild(document.createTextNode(' '));
      var tech = el('button', 'bd-tech', d.technician);
      tech.type = 'button'; tech.title = 'opens the day';
      tech.addEventListener('click', function () { self.navigate(FACE.day_route, d.route_id); });
      head.appendChild(tech);
      head.appendChild(document.createTextNode(' '));
      head.appendChild(el('span', 'bd-muted', d.state + (d.zones ? ' · ' + d.zones : '')));
      col.appendChild(head);
      // THE ROOM IN THE CLIENT'S UNIT (Q15 part 6): the bar in stops as the rows have it; the minutes only when the unit is minutes;
      // production value reads its dollars when the days' read carries them (row 56)
      var room = Number(d.room) || 0, placed = Number(d.placed) || 0;
      var pct = room ? Math.min(100, Math.round(100 * placed / room)) : 0;
      var bar = el('div', 'bd-bar'); var fill = el('span'); fill.style.width = pct + '%'; bar.appendChild(fill);
      col.appendChild(bar);
      var label = el('div', 'bd-bar-label');
      if (this.unit === 'production_value' && d.production_placed !== undefined && d.production_placed !== null) {
        label.appendChild(el('span', null, '$' + d.production_placed + ' / $' + (d.production_minimum || d.production_room || '-')));
        label.appendChild(el('span', 'bd-right', placed + ' / ' + room + ' stops'));
      } else {
        label.appendChild(el('span', null, placed + ' / ' + room + ' stops'));
        if (this.unit === 'minutes') label.appendChild(el('span', 'bd-right', d.minutes + ' min'));
      }
      col.appendChild(label);
      var cards = el('div', 'bd-cards');
      var stops = this.stopsByRoute[d.route_id] || [];
      if (!stops.length) cards.appendChild(el('div', 'bd-drop', this.may(FACE.drag.verb) ? 'drag a work order here' : 'nothing placed'));
      stops.forEach(function (s) {
        var card = el('div', 'bd-card bd-card--stop' + (self.openStop === s.route_stop_id ? ' bd-card--on' : ''));
        card.setAttribute('data-stop', s.route_stop_id);
        card.appendChild(el('b', null, s.place));
        card.appendChild(el('div', 'bd-muted', s.work_orders));
        if (s.eta && s.eta !== '-') card.appendChild(el('div', 'bd-card-n', s.eta));
        // CURRENT reads the stop's state (leg 6 gives it its life: dispatched, done, on hold); PLANNING keeps his cut 5
        if (self.mode === 'current' && s.state) card.appendChild(el('div', 'bd-muted', s.state));
        card.addEventListener('click', function () { self.toggleDetail(s.route_stop_id, card); });
        cards.appendChild(card);
        if (self.openStop === s.route_stop_id) self.fillDetail(s.route_stop_id, card);
      });
      col.appendChild(cards);
      var foot = el('div', 'bd-col-f');
      (FACE.acts || []).forEach(function (act) {
        if (act.scope !== 'day' || !self.may(act.verb)) return;
        var b = el('button', 'bd-btn', act.title);
        b.type = 'button'; b.setAttribute('data-act', act.verb);
        b.addEventListener('click', function () { self.navigate(act.route, d.route_id); });
        foot.appendChild(b);
      });
      if (foot.childNodes.length) col.appendChild(foot);
      if (this.may(FACE.drag.verb)) {
        col.addEventListener('dragover', function (e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; col.classList.add('bd-col--over'); });
        col.addEventListener('dragleave', function () { col.classList.remove('bd-col--over'); });
        col.addEventListener('drop', function (e) {
          e.preventDefault(); col.classList.remove('bd-col--over');
          var wo = e.dataTransfer.getData('text/plain');
          if (wo) self.drop(wo, d);
        });
      }
      return col;
    }

    // -- a stop opened IN PLACE (his cut 6): what the technician sees ----------------------------------
    async toggleDetail(stopId, card) {
      this.openStop = this.openStop === stopId ? null : stopId;
      this.renderColumns();
    }
    async fillDetail(stopId, card) {
      var box = el('div', 'bd-detail', 'reading...');
      card.appendChild(box);
      var r = await this.from(FACE.detail).select('*').eq('route_stop_id', stopId).limit(1);
      clear(box);
      if (r.error) { box.appendChild(el('div', 'bd-error', r.error.message)); return; }
      var f = (r.data || [])[0];
      if (!f) { box.appendChild(el('div', 'bd-muted', 'no facts stand on this stop')); return; }
      box.appendChild(el('div', null, f.summary || ''));
      if (f.window) box.appendChild(el('div', null, 'window ' + f.window + (f.grade ? ' (' + f.grade + ')' : '')));
      box.appendChild(el('div', f.mandate ? null : 'bd-muted', f.mandate ? f.mandate : 'no mandate on this account'));
      if (f.paper) box.appendChild(el('div', 'bd-muted', f.paper));
      box.appendChild(el('div', null, 'promise ' + (f.promise || 'not yet promised (the release sends it)')));
      if (f.state) box.appendChild(el('div', 'bd-muted', 'state ' + f.state));
    }

    // -- THE DOOR, called as the signed-in user; the verdict read as the door gives it -------------------------------
    async rpc(fn, body) {
      var sbCfg = (window.AppContext && window.AppContext.supabase) || {};
      var headers = { 'Content-Type': 'application/json', apikey: sbCfg.anonKey || '', Authorization: 'Bearer ' + (sbCfg.anonKey || ''), 'Content-Profile': FACE.schema };
      try {
        if (window.ShellAuth) { var sess = await window.ShellAuth.auth.getSession(); if (sess.data && sess.data.session) headers.Authorization = 'Bearer ' + sess.data.session.access_token; }
        var res = await fetch(sbCfg.url + '/rest/v1/rpc/' + fn, { method: 'POST', headers: headers, body: JSON.stringify(body) });
        var data = await res.json().catch(function () { return {}; });
        var obj = data && typeof data === 'object' && !Array.isArray(data) ? data : null;
        if (res.ok && !(obj && obj.ok === false)) return { ok: true, data: data };
        if (res.ok && obj && obj.verdict === 'exception') return { ok: false, exception: true, words: obj.words || obj.cause || obj.message || 'the door reports an exception', code: obj.code || obj.cause || null };
        return { ok: false, words: (obj && (obj.words || obj.message || obj.error || obj.details)) || ('HTTP ' + res.status) };
      } catch (e) {
        return { ok: false, words: e.message + ' -- no response from the door.' };
      }
    }
    doorBody(w, d, reason, note) {
      return { p_work_order: w.work_order_id, p_route: d.route_id, p_by: (this.context && this.context.user_id) || null, p_reason: reason || null, p_note: note && note.trim() ? note.trim() : null };
    }

    // -- THE DROP (Q10 amended; Q15 part 5): silent inside the criteria; the panel only on the exception; refused with the words --
    async drop(woId, d) {
      var self = this;
      var w = this.poolShown().filter(function (x) { return x.work_order_id === woId; })[0] || this.pool.filter(function (x) { return x.work_order_id === woId; })[0];
      if (!w) return;
      this.panel = null; this.renderPanel();
      this.say('Placing ' + w.account_name + ' on ' + d.route_date + ' with ' + d.technician + '...', false);
      var r = await this.rpc(FACE.drag.function, this.doorBody(w, d, SILENT_REASON, null));
      if (r.ok) {
        this.say(null);
        this.$('note').textContent = 'Placed ' + w.account_name + ' on ' + d.weekday + ' ' + d.route_date + ' with ' + d.technician + ' -- inside the criteria, no question; the run row (kind override) carries the filter\'s reason (' + SILENT_REASON + ').';
        await this.load();
      } else if (r.exception) {
        this.say(null);
        this.panel = { wo: w, day: d, cause: r.words, out: null, bad: false };
        this.renderPanel();
        var p = this.$('panel'); if (p && p.scrollIntoView) p.scrollIntoView({ block: 'nearest' });
      } else {
        // the door's REFUSAL is the point: its own words, the card stays in the pool, no panel
        this.say('Refused: ' + r.words, true);
      }
      void self;
    }
    // THE EXCEPTION PANEL: the door's cause, the human's reason (the canned list, the customer's request preselected, OTHER with a note)
    renderPanel() {
      var self = this;
      var host = this.$('panel');
      clear(host);
      if (!this.panel) { host.hidden = true; return; }
      host.hidden = false;
      var w = this.panel.wo, d = this.panel.day;
      host.appendChild(el('p', 'bd-panel-h', 'Place ' + w.account_name + ': ' + w.service + ' on ' + d.weekday + ' ' + d.route_date + ' with ' + d.technician + ' -- the exception'));
      var cause = el('p', 'bd-panel-cause', 'The door says: ' + (this.panel.cause || 'outside the criteria'));
      cause.setAttribute('data-bd-cause', '1');
      host.appendChild(cause);
      host.appendChild(el('label', null, 'Why this day (the human\'s reason)'));
      var sel = document.createElement('select'); sel.setAttribute('data-bd-reason', '1');
      var seen = {};
      this.reasons.forEach(function (rs) {
        if (!rs.code || seen[rs.code] || rs.code === SILENT_REASON) return;
        seen[rs.code] = true;
        var o = document.createElement('option'); o.value = rs.code; o.textContent = rs.meaning || rs.code;
        if (rs.code === FACE.drag.default_reason) o.selected = true;
        sel.appendChild(o);
      });
      if (!sel.childNodes.length) { var o0 = document.createElement('option'); o0.value = ''; o0.textContent = '(no reasons stand -- ' + FACE.reasons + ' is empty)'; sel.appendChild(o0); }
      host.appendChild(sel);
      host.appendChild(el('label', null, 'A note (with Other, or whenever it helps)'));
      var note = document.createElement('textarea'); note.rows = 2; note.setAttribute('data-bd-note', '1');
      host.appendChild(note);
      var acts = el('div', 'bd-panel-acts');
      var place = el('button', 'bd-btn bd-btn--primary', 'Place on this day');
      place.type = 'button'; place.setAttribute('data-bd-place', '1');
      place.addEventListener('click', function () { self.answer(sel.value, note.value); });
      var cancel = el('button', 'bd-btn', 'Cancel');
      cancel.type = 'button'; cancel.setAttribute('data-bd-cancel', '1');
      cancel.addEventListener('click', function () { self.panel = null; self.renderPanel(); });
      acts.appendChild(place); acts.appendChild(cancel);
      acts.appendChild(el('span', 'bd-muted', 'a hand placement, kind override, with its delta; your reason rides the run row for the Performance module'));
      host.appendChild(acts);
      var out = el('div', 'bd-panel-out' + (this.panel.bad ? ' is-bad' : ''), this.panel.out || '');
      out.setAttribute('data-bd-panel-out', '1');
      out.hidden = !this.panel.out;
      host.appendChild(out);
    }
    // the human ANSWERS the exception with a reason (named apart from the place found by the search, which is state)
    async answer(reason, note) {
      if (!this.panel) return;
      var w = this.panel.wo, d = this.panel.day;
      this.panel.out = 'Placing...'; this.panel.bad = false; this.renderPanel();
      var r = await this.rpc(FACE.drag.function, this.doorBody(w, d, reason, note));
      if (r.ok) {
        this.panel = null;
        this.$('note').textContent = 'Placed ' + w.account_name + ' on ' + d.weekday + ' ' + d.route_date + ' with ' + d.technician + ' (' + (reason || 'no reason') + ') -- the exception answered; the run row, kind override, carries your reason.';
        this.renderPanel();
        await this.load();
      } else {
        this.panel.out = (r.exception ? 'Still the exception: ' : 'Refused: ') + r.words;
        this.panel.bad = true;
        this.renderPanel();
      }
    }
  }

  if (typeof window !== 'undefined') {
    window.RouteBoardBlueprintUI = RouteBoardBlueprintUI;
    window.PatternRegistry = window.PatternRegistry || {};
    window.PatternRegistry['d4000000-0000-0000-0000-000000000001'] = window.RouteBoardBlueprintUI;
  }
})();
