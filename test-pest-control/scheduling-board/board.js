/**
 * Route Board - Generated Blueprint UI (THE BOARD, board-001 2.0.0 -- THE PLANNING JOB)
 *
 * 1.0.0 (SJ s51 rung 5a, the second sitting, 2026-09-08): his diver board of 2025 thrown on the flow paper as
 * reading C -- "WE produce proposed routes/stops, and the users are only dealing with non-happy-path scenarios" --
 * THE MACHINE's own thesis wearing a face: the strip, THE POOL by buffer with LATE as one red word and the machine's
 * reason on a leftover, the day's TECHNICIAN COLUMNS with their bars, the drag through the door with the human's
 * reason (Q10), the acts by grant, desktop only, the office closed.
 *
 * 1.1.0 (2026-09-10; READING D passed on the picture): THE BOARD IN TWO MODES (Q15) -- PLANNING and CURRENT on THE
 * DAYS TRACK of schedulable days only, titled by mode; THE PERIOD chosen on the board and kept for the client; THE
 * STEP on the track; THE SILENT DROP (the door with the filter's reason; the panel on the exception only; no browser
 * dialog); THE ROOM IN THE CLIENT'S UNIT.
 *
 * 2.0.0 (SJ s52 leg 6 act (a), 2026-09-13; READING E, THE PLANNING JOB, passed whole 2026-09-12 -- "I think it looks
 * great! I approve Reading E now"; the paper .project-models/demand/services-template-routing.planning-job.md):
 * THE MACHINE HAS RUN when the board opens (the sweep at the lead, PROPOSAL 0); the human tweaks with the cost shown.
 * The day's schedules are CARDS IN A GRID under collapsible AREA and ZONE headings whose totals a closed heading still
 * reads (his item 4; `groups`); each card is a SCORECARD -- THE HEALTH, NOT A SCORE (his cut 09-11): the bar in the
 * client's unit (for production value its full length IS the daily minimum and the gap shows in it, the caption
 * "$940 of $1,250" beneath, the stops beside), the flags in words beneath it only when true (the days read's
 * `flags`; a healthy card shows the bar and the counts and nothing else), the cue (the stop count and a caret)
 * opening THE SITTING (act (b)), Release on the card (`release`). THE COLLAPSE IS THE FILTER (his cut 09-11): every
 * group open at the start, the seat's closed state remembered on the desk; no pills, no place filter. THE EXCEPTIONS
 * BAND above the grid (`exceptions`; CC's call at his YOUR CALL): the LATE and the leftovers whose window touches the
 * day, each with the machine's reason and its three cheapest days (PROPOSAL B), collapsible, always shown whatever
 * group is open, one quiet line when empty; a card dragged onto a scorecard goes through the drag's door (silent,
 * asked, refused). THE POOL OFF THE BOARD (his mockup): a count on the title (`period_read`); the pool lives in the
 * sitting. The days track's release cue on each chip (his 13); the title's release state (his 14) and THE TALLY
 * (PROPOSAL C). RELEASE ALL on the day's head (`release_all`; his 12). The search box a JUMP only (his cut: an area
 * or a zone opens its group and scrolls to it; a technician's name lights his card). RETIRED: the technician columns
 * and their foot acts, the pool column, the pills and the place filter, the minutes on the face, widen the window
 * (the sitting's pool carries it). CURRENT keeps the same face on today's period.
 *
 * 2.0.0 act (b) (SJ s52 leg 6, 2026-09-14; his items 6-8, 11-12; the form RULED at his pass 09-11: "THE SITTING IS A
 * TEARSHEET"): THE SITTING -- the cue opens a tearsheet OVER THE BOARD for one schedule (tearsheet-001's form: the full
 * sheet with the board's edge showing behind it under a dim, two panes, the footer's buttons): the schedule's stops in
 * order under its scorecard LIVE (the bar, the caption, the flags re-read after every act; a stop opens in place with
 * `detail`); THE POOL on the other side (`pool`'s ready rows narrowed to the schedule's zones by the row's `zone`, plus
 * the day's `exceptions`; a card opens in place with the four things); THE COST BEFORE THE DROP on the list's head as a
 * card crosses it (`sitting.cost`: the words and the verdict class the door would give); every drop through the drag's
 * door LIVE -- silent, asked (the panel inside the sheet), refused with the door's words; SAVE closes with what the door
 * wrote; CANCEL calls `sitting.cancel` (undo_since from the stamp the sitting opened at -- the door's own clock) and
 * closes; RELEASE releases this schedule through `release`; the board's card and the heading's totals re-read when the
 * sitting closes. The button colours are the controls' own (s51 card 33). A band card dropped on a scorecard opens that
 * schedule's sitting with the card IN HAND (selected, its cost read).
 *
 * 2.0.0 act (c) (SJ s52 leg 6, 2026-09-14; his items 9-10; Q13 part 11; Q4 RULED -- the Mapbox seam for the demo,
 * MapLibre the swap): THE MAP ON SEQUENCE -- the sitting's head switches PLACE to SEQUENCE: the day's stops as PINS
 * joined in order by one line from `map.function` (schedule_geojson's FeatureCollection: start, the stops in sequence,
 * end, the line with the day's drive), the start a black square and the end a white one, the list beside it top to
 * bottom; the rows DRAG (and step) into her order and the door prices it LIVE through `map.order` (sequence_by_hand: a
 * run of kind override carrying her order, the drive by the machine's own arithmetic, the machine's order and drive kept
 * beside it) -- the line redrawn in her order, the price on the map's head against the machine's; the run is A PROPOSAL
 * until SAVE (or RELEASE, first) accepts it through `map.accept` (accept_run), when the stops take her order and the
 * day's drive and flags re-read from the rows; CANCEL undoes the proposals with the sitting's other runs. The renderer
 * loads once when Sequence first opens (never at mount) through the deployment seam's key; with NO KEY (Local) the map
 * draws the pins and the line on a BLANK GROUND and calls nothing of the map's -- the pins' DOM and the source's
 * features are the proof (Q4: "the tiles absent").
 * Blueprint ID: d4000000-0000-0000-0000-000000000001
 * Pattern: BOARD
 *
 * Implements Pattern Interface Contract (JBA-003)
 * - mount(container) / unmount() / onContext(context) / getMetadata() / setRecordId(id)
 * The board takes no record: setRecordId is accepted and ignored (the track is the selection).
 */

(function() {
  'use strict';

  var FACE = {"schema":"services_template","map":{"order":{"verb":"sequence","function":"sequence_by_hand"},"accept":{"function":"accept_run"},"function":"schedule_geojson"},"acts":[{"verb":"place_week","route":"/operations/scheduling/:id/place-week","scope":"week","title":"Place the week"},{"verb":"sequence","route":"/operations/scheduling/:id/sequence","scope":"day","title":"Sequence"},{"verb":"release","route":"/operations/scheduling/:id/release","scope":"day","title":"Release"}],"days":"v_board_days","drag":{"verb":"place","confirm":"Place {account} on {date} with {technician}?","function":"place_on_day","silent_reason":"route_filter","default_reason":"customer_asked"},"pool":"work_order_due_list","unit":"stops","areas":"geographic_area","stops":"v_schedule_stops","zones":"service_zone","detail":"v_board_stop_detail","groups":"v_board_groups","period":{"key":"policy.planning_period","default":"week","function":"set_tenant_policy","lead_key":"policy.planning_lead"},"desktop":{"refusal":"The board is a desk's screen. Open it on a screen at least 1024 pixels wide.","min_width":1024},"reasons":"v_override_reasons","release":{"verb":"release","function":"release_schedule"},"sitting":{"cost":{"function":"drop_cost"},"cancel":{"function":"undo_since"}},"registry":"tenant_property","unit_key":"capacity.unit","day_route":"/operations/scheduling/:id","days_route":"/operations/scheduling/days","exceptions":"v_board_exceptions","pool_route":"/operations/pending/:id","period_read":"v_board_period","pool_detail":"v_board_pool_detail","release_all":{"verb":"release","function":"release_day"},"weekdays_key":"calendar.operating_weekdays","personas":{"FIELD_TECH":{"fields":null,"readonly":[],"filters":{"status":["active"]},"actions":["view","search"],"seated":false},"GENERIC_USER":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter"],"seated":false},"OPS_MANAGER":{"fields":["route_name","status","route_date","weekday","technician","template","state","room","placed","slack","minutes","released"],"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"ADMIN_FULL":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","delete","export","bulk_actions","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"CUSTOMER_SERVICE":{"fields":["route_name","status","route_date","weekday","technician","template","state","room","placed","slack","minutes","released"],"readonly":[],"filters":{"status":["active"]},"actions":["view","search","sort","filter","edit","log_call","schedule","cancel","defer","place"],"seated":false},"SERVICE_MANAGER":{"fields":["route_name","status","route_date","weekday","technician","template","state","room","placed","slack","minutes","released"],"readonly":[],"filters":{"status":["active"]},"actions":["view","search","sort","filter","schedule","assign_tech","create","cancel","defer","place","place_week","sequence","release"],"seated":true}}};
  var SKELETON = "<!-- Route Board -- THE BOARD (board-001 2.0.0; s52 leg 6 act (a): READING E, THE PLANNING JOB, passed whole at his word\n     2026-09-12 \"I think it looks great! I approve Reading E now\"; act (b): THE SITTING, a tearsheet over the board).\n     Generated; do not edit. The shell mounts into an EMPTY host (the s37 skeleton lesson): this markup is written\n     by board.js FIRST, then filled. -->\n<div class=\"bd\" data-blueprint=\"d4000000-0000-0000-0000-000000000001\">\n  <header class=\"bd-head\">\n    <span class=\"bd-modes\" data-bd=\"modes\"></span>\n    <h2 class=\"bd-title\" data-bd=\"title\">The board</h2>\n    <span class=\"bd-sub\" data-bd=\"sub\"></span>\n    <span class=\"bd-acts\" data-bd=\"acts\"></span>\n  </header>\n  <nav class=\"bd-track\" data-bd=\"track\" aria-label=\"The days track\"></nav>\n  <div class=\"bd-jump\" data-bd=\"jump\"></div>\n  <p class=\"bd-verdict\" data-bd-out=\"1\" hidden></p>\n  <div class=\"bd-dayhead\" data-bd=\"dayhead\"></div>\n  <section class=\"bd-band\" data-bd=\"band\" aria-label=\"The exceptions\"></section>\n  <div class=\"bd-groups\" data-bd=\"groups\"></div>\n  <p class=\"bd-note\" data-bd=\"note\"></p>\n  <section class=\"bd-sitting\" data-bd=\"sitting\" aria-label=\"The sitting\" hidden></section>\n</div>\n";
  // the keys a 1.x row does not carry read their defaults here -- honest until the rows land
  var REGISTRY = FACE.registry || 'tenant_property';
  var PERIOD = FACE.period || {};
  var PERIOD_KEY = PERIOD.key || 'policy.planning_period';
  var LEAD_KEY = PERIOD.lead_key || 'policy.planning_lead';
  var UNIT_KEY = FACE.unit_key || 'capacity.unit';
  var WEEKDAYS_KEY = FACE.weekdays_key || 'calendar.operating_weekdays';
  var SILENT_REASON = (FACE.drag && FACE.drag.silent_reason) || 'route_filter';
  var SITTING = FACE.sitting || null;                      // act (b): the cost door and CANCEL's door; absent = no cost line, no CANCEL
  var RUNS = (SITTING && SITTING.runs) || 'schedule_run';  // the run rows, read once at the opening for CANCEL's stamp; a hand order's price by run_id
  var MAP = FACE.map || null;                              // act (c): THE MAP on Sequence; absent = no Sequence, no hand order
  var MAP_ORDER = (MAP && MAP.order) || null;              // the hand order's door (sequence_by_hand) and the verb the role must hold
  var MAP_ACCEPT = (MAP && MAP.accept) || null;            // the accept door (accept_run): SAVE and RELEASE call it for the pending proposal
  var RENDERER = (MAP && MAP.renderer) || {};              // the renderer's seams: Mapbox GL JS by default (Q4); MapLibre the swap
  var RENDERER_SCRIPT = RENDERER.script || 'https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.js';
  var RENDERER_CSS = RENDERER.css || 'https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.css';
  var RENDERER_GLOBAL = RENDERER.global || 'mapboxgl';
  var RENDERER_STYLE = RENDERER.style || 'mapbox://styles/mapbox/streets-v12';
  var TOKEN_KEY = RENDERER.token_key || 'mapboxToken';
  // THE BLANK GROUND: the style drawn where the deployment carries no key -- no source, no tile, one grey background
  var BLANK_STYLE = { version: 8, name: 'blank ground', sources: {}, layers: [{ id: 'ground', type: 'background', paint: { 'background-color': '#f4f4f4' } }] };
  var PERIOD_WORDS = { week: 'week', two_weeks: 'two weeks', half_month: 'half month', month: 'month' };
  var WEEKDAY = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  var NO_AREA = '(no area)', NO_ZONE = '(no zone)';

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
  // money in the owner's form: whole dollars with commas, the cents only when they are there ("$940 of $1,250")
  function money(x) { var n = Number(x) || 0; var whole = Math.abs(n) === Math.round(Math.abs(n)); return (n < 0 ? '-$' : '$') + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2 }); }
  function plural(n, word) { return n + ' ' + word + (Number(n) === 1 ? '' : 's'); }
  function split(s) { return String(s || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean); }
  function miles(x) { return (Math.round((Number(x) || 0) * 10) / 10) + ' mi'; }
  function mins(x) { return Math.round(Number(x) || 0) + ' min'; }
  function sameOrder(a, b) { if (!a || !b || a.length !== b.length) return false; for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false; return true; }

  // THE RENDERER, loaded once when Sequence first opens (never at mount): the script and its stylesheet from the seams;
  // resolves the library's global, or null when the script cannot be loaded (the list and the door still work)
  var rendererLoad = null;
  function loadRenderer() {
    var lib = window[RENDERER_GLOBAL];
    if (lib && lib.Map) return Promise.resolve(lib);
    if (rendererLoad) return rendererLoad;
    rendererLoad = new Promise(function (resolve) {
      try {
        if (RENDERER_CSS && !document.querySelector('link[data-bd-renderer]')) { var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = RENDERER_CSS; l.setAttribute('data-bd-renderer', '1'); document.head.appendChild(l); }
        var sc = document.createElement('script'); sc.src = RENDERER_SCRIPT; sc.async = true; sc.setAttribute('data-bd-renderer', '1');
        sc.onload = function () { var g = window[RENDERER_GLOBAL]; resolve(g && g.Map ? g : null); };
        sc.onerror = function () { rendererLoad = null; resolve(null); };
        document.head.appendChild(sc);
      } catch (e) { rendererLoad = null; resolve(null); }
    });
    return rendererLoad;
  }

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
      this.days = [];               // the period's schedules with their health (FACE.days)
      this.groups = [];             // the selected day's headings with their totals (FACE.groups)
      this.exceptions = [];         // the selected day's band (FACE.exceptions)
      this.periodRead = null;       // the title's row (FACE.period_read)
      this.poolCount = null;        // the pool's count when no title row stands
      this.reasons = [];
      this.zones = [];
      this.areas = [];
      this.closed = {};             // the seat's closed groups, kept on the desk
      this.closedRead = false;
      this.bandClosed = false;
      this.litRoute = null;         // the card a technician's name jumped to
      this.litGroup = null;         // the heading a place jumped to
      this.verdict = null; this.verdictBad = false;
      this.selectedX = null;        // the keys' selection in the band
      this.openX = null;            // the band card opened in place (the four things)
      this.refused = false;         // the desktop law
      this.sitting = null;          // THE SITTING open on one schedule (act (b)): {route, day, stamp, stops, pool, costs, inHand, ...}
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
      // the keys move the selection (his efficiency law): down and up walk the band's cards, Enter opens one in place, Escape closes
      this._keys = function (e) {
        if (self.refused || self.sitting) return;   // the sitting's sheet keeps its own keys
        if (e.target && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
        var shown = self.bandCards();
        if (!shown.length) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          var ids = shown.map(function (w) { return w.work_order_id; });
          var i = ids.indexOf(self.selectedX);
          i = e.key === 'ArrowDown' ? Math.min(ids.length - 1, i + 1) : Math.max(0, i - 1);
          self.selectedX = ids[i]; self.renderBand();
          var card = container.querySelector('.bd-card--x[data-wo="' + self.selectedX + '"]');
          if (card && card.scrollIntoView) card.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        } else if (e.key === 'Enter' && self.selectedX) { e.preventDefault(); self.toggleX(self.selectedX); }
        else if (e.key === 'Escape' && self.openX) { e.preventDefault(); self.openX = null; self.renderBand(); }
      };
      container.addEventListener('keydown', this._keys);
      // the law holds while the window changes: a desk that narrows is refused, a phone that widens is admitted
      this._resize = function () {
        var wide = self.deskWide();
        if (!wide && !self.refused) { var s0 = self.sitting; self.sitting = null; self.dropMap(s0); self.refuse(container); }
        else if (wide && self.refused) { self.mount(container); }
        else if (self.sitting) self.placeSheet();
      };
      window.addEventListener('resize', this._resize);
    }

    unmount() {
      if (this._resize) window.removeEventListener('resize', this._resize);
      if (this.container && this._keys) this.container.removeEventListener('keydown', this._keys);
      if (this.container) clear(this.container);
      this.dropMap(this.sitting);
      this.sitting = null;   // the sheet leaves with the board; nothing is undone (every act was written through its door)
      this.container = null; this.days = []; this.groups = []; this.exceptions = []; this.period = null; this.registryRead = false;
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
      var host = this.$('groups') || this.container;
      host.insertBefore(el('div', 'bd-error', where + ': ' + message), host.firstChild);
      this.container.removeAttribute('data-bd-busy');
    }
    // THE FACE SAYS WHEN IT IS READING (s52 leg 7 act (a), the grown story): the root carries data-bd-busy from a load's first
    // read to its render, so a chair or a test waits on the face's own word, never on a guessed pause (a loaded book reads in
    // 750 ms where the thin one read in 200; a superseded load leaves the mark to the load that supersedes it)
    busy(on) { if (on) this.container.setAttribute('data-bd-busy', '1'); else this.container.removeAttribute('data-bd-busy'); }

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
    byWord() { return String((this.context && this.context.facet) || 'service_manager').toLowerCase(); }

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
    closedKey() { return 'board.closed.' + ((this.context && this.context.tenant_id) || 'tenant'); }
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
      var wd = split(this.registry[WEEKDAYS_KEY] || 'mon,tue,wed,thu,fri,sat').map(function (s) { return s.toLowerCase(); }).filter(function (s) { return WEEKDAY.indexOf(s) !== -1; });
      if (wd.length) this.weekdays = wd;
    }
    // THE SEAT'S CLOSED STATE lives on the desk (his cut 09-11: the board opens with every group open; what she closes stays closed)
    readClosed() {
      this.closedRead = true;
      try { var raw = window.localStorage.getItem(this.closedKey()); this.closed = raw ? (JSON.parse(raw) || {}) : {}; } catch (ignored) { this.closed = {}; }
    }
    writeClosed() { try { window.localStorage.setItem(this.closedKey(), JSON.stringify(this.closed)); } catch (ignored) { /* no desk memory */ } }

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
      this.litRoute = null; this.litGroup = null;
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
      this.busy(true);
      if (!this.registryRead) await this.readRegistry();
      if (!this.closedRead) this.readClosed();
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
      // THE TITLE's row: the pool's count, the release state, the tally (2.0.0); else the pool counted here
      if (FACE.period_read) {
        var t = await this.tenantOf(this.from(FACE.period_read).select('*')).limit(1);
        if (seq !== this._loadSeq) return;
        if (t.error) this.fail(FACE.period_read, t.error.message); else this.periodRead = (t.data || [])[0] || null;
      }
      if (!this.periodRead) {
        var p = await this.tenantOf(this.from(FACE.pool).select('work_order_id, late').eq('state', 'ready'));
        if (seq !== this._loadSeq) return;
        if (p.error) this.fail(FACE.pool, p.error.message);
        else { this.poolCount = { pool_count: (p.data || []).length, late_count: (p.data || []).filter(function (w) { return w.late; }).length }; }
      }
      // THE HEADINGS' totals and THE BAND, for the selected day
      this.groups = []; this.exceptions = [];
      if (FACE.groups && this.selectedDate) {
        var g = await this.tenantOf(this.from(FACE.groups).select('*').eq('route_date', this.selectedDate)).order('area').order('zone');
        if (seq !== this._loadSeq) return;
        if (g.error) this.fail(FACE.groups, g.error.message); else this.groups = g.data || [];
      }
      if (FACE.exceptions && this.selectedDate) {
        var x = await this.tenantOf(this.from(FACE.exceptions).select('*').eq('route_date', this.selectedDate)).order('late', { ascending: false }).order('buffer');
        if (seq !== this._loadSeq) return;
        if (x.error) this.fail(FACE.exceptions, x.error.message); else this.exceptions = x.data || [];
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
      this.renderJump();
      this.renderVerdict();
      this.renderDayHead();
      this.renderBand();
      this.renderGroups();
      // the sheet stands over a re-rendered board (a load while the sitting is open never closes it)
      if (this.sitting) { var d = this.days.filter(function (x) { return x.route_id === this.sitting.route; }, this)[0]; if (d) this.sitting.day = d; this.renderSitting(); }
      this.busy(false);
    }

    // -- the day's facts, from the rows --------------------------------------------------------------
    daysOn(dt) { return this.days.filter(function (d) { return d.route_date === dt; }); }
    isReleased(d) { return (d.released && d.released !== '-') || d.state === 'released'; }
    releasedOn(dt) { var on = this.daysOn(dt); return { n: on.length, k: on.filter(this.isReleased).length }; }
    unitOf(d) { return (d && d.unit) || this.unit || 'stops'; }
    zoneOf(d) { var z = split(d.zones); return z.length ? z[0] : NO_ZONE; }               // the primary zone: the first by name (v_board_groups' rule)
    areaOf(d) { var a = split(d.areas).sort(); return a.length ? a[0] : NO_AREA; }        // the first area by name
    poolFacts() { return this.periodRead || this.poolCount || { pool_count: 0, late_count: 0 }; }
    // the title's row speaks for the period it names; a stepped period computes its release from the days shown
    periodMatches() { return !!(this.periodRead && this.periodRead.period_start === iso(this.period.start) && this.periodRead.period_end === iso(this.period.end)); }
    periodReleased() {
      var self = this;
      var dates = {}; this.days.forEach(function (d) { dates[d.route_date] = true; });
      var list = Object.keys(dates);
      if (!list.length) return null;
      var all = list.every(function (dt) { var r = self.releasedOn(dt); return r.n > 0 && r.k === r.n; });
      if (!all) return null;
      var stamp = this.periodMatches() && this.periodRead.last_released_at ? String(this.periodRead.last_released_at).replace('T', ' ').slice(0, 16) : null;
      if (!stamp) { var stamps = this.days.map(function (d) { return d.released; }).filter(function (s) { return s && s !== '-'; }).sort(); stamp = stamps.length ? stamps[stamps.length - 1] : ''; }
      return stamp;
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

    // -- the head: THE MODE (two seats, one board), the title by mode and period WITH ITS RELEASE STATE, the pool's count
    //    and THE TALLY on the sub, THE PERIOD chosen on the board, the re-run by grant --
    renderHead() {
      var self = this;
      var modes = this.$('modes'); clear(modes);
      ['planning', 'current'].forEach(function (m) {
        var b = el('button', 'bd-mode' + (self.mode === m ? ' bd-mode--on' : ''), m.toUpperCase());
        b.type = 'button'; b.setAttribute('data-bd-mode', m);
        b.title = m === 'planning' ? 'PLANNING: the coming period, the machine\'s proposal on it' : 'CURRENT: today\'s period, every schedule in its state';
        b.addEventListener('click', function () { if (self.mode !== m) { self.mode = m; self.goHome(); self.litRoute = null; self.litGroup = null; self.load(); } });
        modes.appendChild(b);
      });
      var p = this.period;
      var title = this.$('title'); clear(title);
      title.appendChild(document.createTextNode(this.mode === 'current'
        ? 'CURRENT -- ' + WEEKDAY[this.today.getUTCDay()] + ' ' + iso(this.today)
        : 'PLANNING -- the ' + this.periodWord() + ' of ' + iso(p.start) + ' to ' + iso(p.end)));
      // his 14: when every schedulable day of the period is released the title reads RELEASED with the last stamp
      var stamp = this.periodReleased();
      if (stamp !== null) { var rel = el('span', 'bd-released', '-- RELEASED' + (stamp ? ' ' + stamp : '')); rel.setAttribute('data-bd-released', '1'); title.appendChild(rel); }
      var all = this.daysOn(this.selectedDate);
      var pf = this.poolFacts();
      var sub = this.$('sub'); clear(sub);
      sub.appendChild(document.createTextNode((this.selectedDate || '-') + ' · ' + plural(all.length, 'schedule') + ' · '));
      var count = el('span', null, (pf.pool_count || 0) + ' in the pool'); count.setAttribute('data-bd-pool-count', String(pf.pool_count || 0));
      count.title = 'THE POOL IS OFF THE BOARD (his mockup): a number here; the pool itself lives in the sitting';
      sub.appendChild(count);
      if (pf.late_count) { sub.appendChild(document.createTextNode(' (')); sub.appendChild(el('span', 'bd-late', pf.late_count + ' LATE')); sub.appendChild(document.createTextNode(')')); }
      // THE TALLY (PROPOSAL C): your hand against the machine's plan, for the period the title's row names
      if (this.periodMatches() && Number(this.periodRead.hand_changes) > 0) {
        var cost = Number(this.periodRead.hand_cost) || 0;
        var tally = el('span', null, ' · your hand changed ' + plural(this.periodRead.hand_changes, 'placement') + ', ' + (cost >= 0 ? '+' : '') + money(cost));
        tally.setAttribute('data-bd-tally', String(this.periodRead.hand_changes));
        sub.appendChild(tally);
      }
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
      // the week-scope act: PLACE THE PERIOD, the re-run over what is still in the pool (PROPOSAL 0); the day-scope acts are retired from the face
      (FACE.acts || []).forEach(function (act) {
        if (act.scope !== 'week' || !self.may(act.verb)) return;
        var b = el('button', 'bd-act', act.title);
        b.type = 'button';
        b.setAttribute('data-act', act.verb);
        b.disabled = all.length === 0;
        b.title = all.length ? 'the re-run over what is still in the pool, for the period this day sits in (' + all[0].technician + '\'s ' + all[0].route_date + ')' : 'no schedule stands on this day';
        b.addEventListener('click', function () { if (all.length) self.navigate(act.route, all[0].route_id); });
        host.appendChild(b);
      });
    }
    async setPeriod(v) {
      if (!PERIOD_WORDS[v] || v === this.periodKind) return;
      this.periodKind = v; this.goHome(); this.litRoute = null; this.litGroup = null;
      if (PERIOD.function) {
        // the registry's door takes the client, the key, the value and the role (the facet seam's word, lower-cased)
        var r = await this.rpc(PERIOD.function, { p_tenant: (this.context && this.context.tenant_id) || null, p_key: PERIOD_KEY, p_value: v, p_by: this.byWord() });
        if (r.ok) this.say('The period is now the ' + PERIOD_WORDS[v] + ', kept for the client (' + PERIOD_KEY + ').', false);
        else this.say('The period was not kept for the client: ' + r.words + ' -- shown as the ' + PERIOD_WORDS[v] + ' on this desk only.', true);
      } else {
        try { window.localStorage.setItem(this.deskKey(), v); } catch (ignored) { /* no desk memory */ }
        this.say('The period is now the ' + PERIOD_WORDS[v] + ' -- kept on this desk until the registry\'s door lands (' + PERIOD_KEY + ' is not written yet).', false);
      }
      this.load();
    }

    // -- THE DAYS TRACK: schedulable days only; THE STEP at each end; each chip's RELEASE CUE (his 13); the way home a chip --
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
        var on = self.daysOn(dt);
        var gen = !on.length && (!maxGen || dt > maxGen);   // past the generator's horizon: honest, "to generate"
        var rel = self.releasedOn(dt);
        var allRel = rel.n > 0 && rel.k === rel.n;
        var cell = el('div', 'bd-day' + (dt === self.selectedDate ? ' bd-day--on' : '') + (on.length ? '' : (gen ? ' bd-day--gen' : ' bd-day--none')) + (allRel ? ' bd-day--all' : ''));
        cell.setAttribute('data-date', dt);
        cell.setAttribute('data-bd-cue', on.length ? (allRel ? 'all' : (rel.k ? 'some' : 'none')) : '');
        cell.appendChild(document.createTextNode((on.length ? on[0].weekday : WEEKDAY[parse(dt).getUTCDay()]) + ' ' + dt.slice(5)));
        var states = {}; on.forEach(function (d) { states[d.state] = true; });
        var small = on.length
          ? (plural(on.length, 'schedule') + ' · ' + (self.mode === 'current' ? Object.keys(states).join(', ') : (allRel ? 'released' : rel.k + ' of ' + rel.n + ' released')))
          : (gen ? 'to generate' : 'no day');
        cell.appendChild(el('small', null, small));
        cell.addEventListener('click', function () { self.selectedDate = dt; self.litRoute = null; self.litGroup = null; self.load(); });
        cells.appendChild(cell);
      });
      host.appendChild(cells);
      var fwd = el('button', 'bd-step', 'the ' + word + ' after ›');
      fwd.type = 'button'; fwd.setAttribute('data-bd-step', 'forward');
      fwd.disabled = !this.canStepForward();
      fwd.title = fwd.disabled ? 'the generator\'s horizon: the period plus the lead (a generate-on-demand act is additive)' : 'the period after: the title, the track and the day follow';
      fwd.addEventListener('click', function () { self.step('forward'); });
      host.appendChild(fwd);
      if (this.stepped()) {
        var home = el('button', 'bd-home', this.mode === 'current' ? 'back to today' : 'back to the coming ' + word);
        home.type = 'button'; home.setAttribute('data-bd-step', 'home');
        home.addEventListener('click', function () { self.step('home'); });
        host.appendChild(home);
      }
    }

    // -- THE JUMP (his cut 09-11: the search returns as a jump only, for a client at volume): an area or a zone OPENS its group
    //    and scrolls to it; a technician's name lights his card. Nothing filters; nothing to clear. --
    technicians() {
      var seen = {}, out = [];
      this.days.forEach(function (d) { if (d.technician && !seen[d.technician]) { seen[d.technician] = true; out.push(d.technician); } });
      return out.sort();
    }
    renderJump() {
      var self = this;
      var host = this.$('jump');
      if (!this.zones.length && !this.areas.length && !this.days.length) { clear(host); return; }
      var input = host.querySelector('[data-bd-jump]');
      if (!input) {
        var listId = 'bd-jump-' + Math.random().toString(36).slice(2, 8);
        input = document.createElement('input');
        input.type = 'search'; input.setAttribute('data-bd-jump', '1'); input.setAttribute('list', listId);
        input.placeholder = 'Jump to an area, a zone, or a technician';
        var dl = document.createElement('datalist'); dl.id = listId;
        input.addEventListener('change', function () { self.jump(input.value); });
        input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); self.jump(input.value); } });
        host.appendChild(input); host.appendChild(dl);
        host.appendChild(el('span', 'bd-jump-state'));
      }
      var list = host.querySelector('datalist'); clear(list);
      var opt = function (text) { var o = document.createElement('option'); o.value = text; list.appendChild(o); };
      this.areas.forEach(function (a) { if (a.name) opt(a.name + ' (area)'); });
      this.zones.forEach(function (z) { if (z.zone_name) opt(z.zone_name + ' (zone)'); });
      this.technicians().forEach(function (t) { opt(t + ' (technician)'); });
      var state = host.querySelector('.bd-jump-state'); clear(state);
      if (this.litGroup) { var g = el('span', 'bd-muted', 'jumped to ' + this.litGroup + ' (a jump, not a filter -- the collapse is the filter)'); g.setAttribute('data-bd-jumped', this.litGroup); state.appendChild(g); }
      if (this.litRoute) {
        var lit = this.days.filter(function (d) { return d.route_id === self.litRoute; })[0];
        if (lit) { var j = el('span', 'bd-muted', 'jumped to ' + lit.technician + '\'s card'); j.setAttribute('data-bd-jumped', lit.technician); state.appendChild(j); }
      }
    }
    jump(text) {
      var self = this;
      var raw = String(text || '');
      if (this._jumping === raw) return;   // Enter and the change event both ask; one answer per tick
      this._jumping = raw; setTimeout(function () { self._jumping = null; }, 0);
      var q = raw.replace(/\s*\((area|zone|technician)\)\s*$/i, '').trim().toLowerCase();
      if (!q) return;
      var match = function (names) {
        var exact = names.filter(function (n) { return n.toLowerCase() === q; })[0];
        return exact || names.filter(function (n) { return n.toLowerCase().indexOf(q) === 0; })[0] || null;
      };
      var areaNames = this.areas.map(function (a) { return a.name; }).filter(Boolean);
      var zoneNames = this.zones.map(function (z) { return z.zone_name; }).filter(Boolean);
      var area = match(areaNames);
      if (area) { this.openGroup('a:' + area); this.litGroup = area; this.litRoute = null; this.say(null); this.render(); this.scrollToGroup('a:' + area); return; }
      var zone = match(zoneNames);
      if (zone) {
        var card = this.daysOn(this.selectedDate).filter(function (d) { return self.zoneOf(d) === zone; })[0];
        var areaOfZone = card ? this.areaOf(card) : NO_AREA;
        this.openGroup('a:' + areaOfZone); this.openGroup('z:' + areaOfZone + '|' + zone);
        this.litGroup = zone; this.litRoute = null; this.say(null); this.render(); this.scrollToGroup('z:' + areaOfZone + '|' + zone);
        if (!card) this.say(zone + ' has no schedule on ' + this.selectedDate + '.', false);
        return;
      }
      var tech = match(this.technicians());
      if (tech) { this.jumpTo(tech); return; }
      this.say('No area, zone or technician named "' + raw.trim() + '" in this period.', true);
    }
    openGroup(key) { if (this.closed[key]) { delete this.closed[key]; this.writeClosed(); } }
    scrollToGroup(key) {
      var h = this.container && this.container.querySelector('.bd-group-h[data-group="' + key.replace(/"/g, '') + '"]');
      if (h && h.scrollIntoView) h.scrollIntoView({ block: 'start' });
    }
    // a technician's NAME lights his card (his word: "techs ARE represented as zones in a sense") -- never a filter
    jumpTo(name) {
      var self = this;
      var his = this.days.filter(function (d) { return d.technician === name; });
      if (!his.length) { this.say(name + ' has no day in this period.', true); return; }
      var day = his.filter(function (d) { return d.route_date === self.selectedDate; })[0] || his[0];
      this.selectedDate = day.route_date; this.litRoute = day.route_id; this.litGroup = null;
      this.openGroup('a:' + this.areaOf(day)); this.openGroup('z:' + this.areaOf(day) + '|' + this.zoneOf(day));
      this.say(null);
      this.load().then(function () {
        var card = self.container && self.container.querySelector('.bd-tcard[data-route="' + day.route_id + '"]');
        if (card && card.scrollIntoView) card.scrollIntoView({ block: 'center' });
      });
    }

    // -- THE DAY'S HEAD: the day, its count, its release cue; RELEASE ALL (his 12; "we want THAT button to be used all the
    //    time, AFTER they trust us") or the receipt where the button stood --
    renderDayHead() {
      var self = this;
      var host = this.$('dayhead'); clear(host);
      if (!this.selectedDate) return;
      var on = this.daysOn(this.selectedDate);
      var rel = this.releasedOn(this.selectedDate);
      var wd = on.length ? on[0].weekday : WEEKDAY[parse(this.selectedDate).getUTCDay()];
      host.appendChild(el('b', null, wd + ' ' + this.selectedDate));
      var cue = el('span', 'bd-muted', plural(on.length, 'schedule') + (on.length ? ' · ' + rel.k + ' of ' + rel.n + ' released' : ''));
      cue.setAttribute('data-bd-day-cue', on.length ? (rel.k === rel.n ? 'all' : (rel.k ? 'some' : 'none')) : '');
      host.appendChild(cue);
      if (!on.length || !FACE.release_all) return;
      if (rel.k === rel.n) {
        var stamps = on.map(function (d) { return d.released; }).filter(function (s) { return s && s !== '-'; }).sort();
        var receipt = el('span', 'bd-receipt', 'Released ' + (stamps.length ? stamps[stamps.length - 1] : ''));
        receipt.setAttribute('data-bd-receipt', '1');
        host.appendChild(receipt);
        return;
      }
      if (!this.may(FACE.release_all.verb)) return;
      var b = el('button', 'bd-btn bd-btn--primary', 'Release All');
      b.type = 'button'; b.setAttribute('data-bd-release-all', '1');
      b.title = 'every draft schedule of ' + this.selectedDate + ' through ' + FACE.release_all.function + ' -- each sequenced first when no order stands, the promises written';
      b.addEventListener('click', function () { self.releaseAll(); });
      host.appendChild(b);
    }
    async releaseAll() {
      var dt = this.selectedDate;
      this.say('Releasing every draft schedule of ' + dt + '...', false);
      var r = await this.rpc(FACE.release_all.function, { p_tenant: (this.context && this.context.tenant_id) || null, p_date: dt, p_by: this.byWord() });
      if (r.ok) {
        var d = r.data || {};
        this.say(null);
        this.receipt('Released ' + plural(d.released || 0, 'schedule') + ' on ' + dt + ' -- ' + plural(d.promises || 0, 'promise') + ' written' + (d.left_alone ? ', ' + d.left_alone + ' left alone (already released, on hold or closed)' : '') + '.');
        await this.load();
      } else this.say('Release All refused: ' + r.words, true);
    }

    // -- THE EXCEPTIONS BAND above the grid: what the machine could not place, or chose not to -- the whole of the human's job --
    bandCards() {
      // the band's rows in the drag's shape (the panel and the door speak account_name, service, work_order_id)
      return this.exceptions.map(function (x) {
        return { work_order_id: x.work_order_id, account_name: x.account, site: x.site, service: x.service, buffer_days: x.buffer, late: !!x.late,
                 reason: x.reason, zone: x.zone, top_three: x.top_three, candidates: x.candidates, window: x.window };
      });
    }
    renderBand() {
      var self = this;
      var host = this.$('band'); clear(host);
      if (!FACE.exceptions) { host.hidden = true; return; }
      host.hidden = false;
      host.className = 'bd-band' + (this.bandClosed ? ' bd-band--closed' : '');
      var cards = this.bandCards();
      var head = el('div', 'bd-band-h');
      var chev = el('button', 'bd-chev', this.bandClosed ? '▸' : '▾');
      chev.type = 'button'; chev.setAttribute('data-bd-band-toggle', '1'); chev.title = this.bandClosed ? 'open the band' : 'close the band to one line';
      chev.addEventListener('click', function () { self.bandClosed = !self.bandClosed; self.renderBand(); });
      head.appendChild(chev);
      var title = el('b', null, 'THE EXCEPTIONS'); head.appendChild(title);
      var count = el('span', 'bd-muted', cards.length ? plural(cards.length, 'card') + ' on ' + (this.selectedDate || '-') + ' -- ' + cards.filter(function (c) { return c.late; }).length + ' LATE, ' + cards.filter(function (c) { return !c.late; }).length + ' left in the pool' : 'none on ' + (this.selectedDate || '-'));
      count.setAttribute('data-bd-band-count', String(cards.length));
      head.appendChild(count);
      host.appendChild(head);
      var body = el('div', 'bd-band-cards');
      if (!cards.length) { var q = el('div', 'bd-quiet', 'none -- the machine placed everything whose window touches this day'); q.setAttribute('data-bd-band-empty', '1'); body.appendChild(q); host.appendChild(body); return; }
      var canDrag = this.may(FACE.drag.verb);
      if (this.selectedX && !cards.some(function (w) { return w.work_order_id === self.selectedX; })) this.selectedX = null;
      cards.forEach(function (w) {
        var on = self.selectedX === w.work_order_id || self.openX === w.work_order_id;
        var card = el('div', 'bd-card bd-card--x' + (on ? ' bd-card--on' : ''));
        card.setAttribute('data-wo', w.work_order_id);
        if (self.openX === w.work_order_id) card.setAttribute('data-open', '1');
        card.appendChild(el('b', null, w.account_name + (w.site && w.site !== w.account_name ? ' / ' + w.site : '')));
        card.appendChild(el('div', null, w.service));
        var n = el('div', 'bd-card-n', 'buffer ' + w.buffer_days);
        if (w.late) { n.appendChild(document.createTextNode(' ')); n.appendChild(el('span', 'bd-late', 'LATE')); }
        card.appendChild(n);
        // the machine's reason on the row (his word 7); the zone its place stands in
        var why = el('div', 'bd-reason', (w.late ? 'past its window' : 'left in the pool: ' + String(w.reason || '').replace(/_/g, ' ')) + (w.zone ? ' · ' + w.zone : ''));
        why.setAttribute('data-bd-reason', String(w.reason || ''));
        card.appendChild(why);
        // PROPOSAL B: the three cheapest days with their deltas, so she sees the machine's alternatives, not one verdict
        var top = el('div', 'bd-top3', w.candidates ? 'cheapest: ' + w.top_three : String(w.top_three || 'no day in the horizon can take it'));
        top.setAttribute('data-bd-top3', String(w.candidates || 0));
        card.appendChild(top);
        card.addEventListener('click', function () { self.selectedX = w.work_order_id; self.toggleX(w.work_order_id); });
        if (canDrag) {
          card.draggable = true;
          card.addEventListener('dragstart', function (e) { e.dataTransfer.setData('text/plain', w.work_order_id); e.dataTransfer.effectAllowed = 'move'; });
        } else { card.title = 'closed to your role'; }
        body.appendChild(card);
        if (self.openX === w.work_order_id) self.fillPoolDetail(w, card);
      });
      host.appendChild(body);
    }
    // a band card opened IN PLACE: THE FOUR THINGS the scheduler decides with (his efficiency law, 2026-09-08)
    toggleX(woId) { this.openX = this.openX === woId ? null : woId; this.renderBand(); }
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

    // -- THE GROUPS: the day's schedules as CARDS IN A GRID under AREA then ZONE headings (his mockup 09-11), each heading
    //    carrying the group's totals from the rows; THE COLLAPSE IS THE FILTER; every group open at the start --
    groupRow(area, zone) {
      return this.groups.filter(function (g) { return (g.area || NO_AREA) === area && (zone === null || (g.zone || NO_ZONE) === zone); });
    }
    totalsOf(rows, cards) {
      // the heading's totals from FACE.groups when the rows carry them; else summed on the face from the cards
      var t = { schedules: 0, placed: 0, room: 0, revenue: 0, minimum: 0, drive_miles: 0, healthy: 0, flagged: 0, exceptions: 0, fromRows: rows.length > 0 };
      if (rows.length) rows.forEach(function (g) { ['schedules', 'placed', 'room', 'revenue', 'minimum', 'drive_miles', 'healthy', 'flagged', 'exceptions'].forEach(function (k) { t[k] += Number(g[k]) || 0; }); });
      else cards.forEach(function (d) { t.schedules += 1; t.placed += Number(d.placed) || 0; t.room += Number(d.room) || 0; t.revenue += Number(d.revenue) || 0; t.minimum += Number(d.minimum) || 0; t.drive_miles += Number(d.drive_miles) || 0; var f = (d.flags || []).length; if (f) t.flagged += 1; else t.healthy += 1; });
      return t;
    }
    totalsWords(t, unit) {
      var parts = [t.placed + ' / ' + t.room + ' stops'];
      if (unit === 'production_value' && t.minimum > 0) parts.push(money(t.revenue) + ' of ' + money(t.minimum));
      parts.push((Math.round(t.drive_miles * 10) / 10) + ' mi');
      parts.push(t.flagged ? t.flagged + ' flagged' : t.healthy + ' of ' + t.schedules + ' healthy');
      if (t.fromRows) parts.push(plural(t.exceptions, 'exception') + ' in its pool');
      return parts.join(' · ');
    }
    headingOf(kind, key, name, totals, closed, lit) {
      var self = this;
      var h = el('div', 'bd-group-h' + (kind === 'area' ? ' bd-group-h--area' : '') + (closed ? ' bd-group-h--closed' : '') + (lit ? ' bd-group-h--lit' : ''));
      h.setAttribute('data-group', key); h.setAttribute('data-group-kind', kind); h.setAttribute('data-closed', closed ? '1' : '0');
      var chev = el('button', 'bd-chev', closed ? '▸' : '▾');
      chev.type = 'button'; chev.setAttribute('data-bd-toggle', key); chev.title = closed ? 'open ' + name : 'close ' + name + ' -- the heading still reads its totals';
      chev.addEventListener('click', function () { if (self.closed[key]) delete self.closed[key]; else self.closed[key] = true; self.writeClosed(); self.litGroup = null; self.renderGroups(); self.renderJump(); });
      h.appendChild(chev);
      h.appendChild(el('b', null, name));
      var tot = el('span', 'bd-group-tot', totals); tot.setAttribute('data-bd-totals', '1');
      h.appendChild(tot);
      return h;
    }
    renderGroups() {
      var self = this;
      var host = this.$('groups'); clear(host);
      var cards = this.daysOn(this.selectedDate);
      if (!cards.length) {
        var past = this.maxGenerated && this.selectedDate && this.selectedDate > this.maxGenerated;
        host.appendChild(el('div', 'bd-quiet', past ? 'to generate: ' + this.selectedDate + ' lies past the generator\'s horizon (the period plus the lead)' : 'no day: no standing route generates ' + this.selectedDate + ' (a holiday or a time off generates nothing)'));
        this.$('note').textContent = '';
        return;
      }
      // the tree: AREA then ZONE, by the card's primary zone and first area (v_board_groups' rule); a client with no areas gets two levels still
      var byArea = {}; var areaOrder = [];
      cards.forEach(function (d) {
        var a = self.areaOf(d), z = self.zoneOf(d);
        if (!byArea[a]) { byArea[a] = { zones: {}, order: [] }; areaOrder.push(a); }
        if (!byArea[a].zones[z]) { byArea[a].zones[z] = []; byArea[a].order.push(z); }
        byArea[a].zones[z].push(d);
      });
      areaOrder.sort();
      var unit = this.unitOf(cards[0]);
      areaOrder.forEach(function (a) {
        var aKey = 'a:' + a;
        var aClosed = !!self.closed[aKey];
        var allCards = []; byArea[a].order.forEach(function (z) { allCards = allCards.concat(byArea[a].zones[z]); });
        var group = el('div', 'bd-group' + (aClosed ? ' bd-group--closed' : ''));
        group.setAttribute('data-area', a);
        group.appendChild(self.headingOf('area', aKey, a, self.totalsWords(self.totalsOf(self.groupRow(a, null), allCards), unit), aClosed, self.litGroup === a));
        byArea[a].order.sort().forEach(function (z) {
          var zKey = 'z:' + a + '|' + z;
          var zClosed = !!self.closed[zKey];
          var zone = el('div', 'bd-zone' + (zClosed ? ' bd-zone--closed' : ''));
          zone.setAttribute('data-zone', z);
          zone.appendChild(self.headingOf('zone', zKey, z, self.totalsWords(self.totalsOf(self.groupRow(a, z), byArea[a].zones[z]), unit), zClosed, self.litGroup === z));
          var grid = el('div', 'bd-grid');
          byArea[a].zones[z].forEach(function (d) { grid.appendChild(self.scorecardOf(d)); });
          zone.appendChild(grid);
          group.appendChild(zone);
        });
        host.appendChild(group);
      });
      // a receipt (a release, a saved or cancelled sitting) reads once over the standing line, then the line returns
      this.$('note').textContent = this._receipt || 'the machine has run; you deal with the exceptions -- the stop count opens THE SITTING (the stops beside the pool, the cost before the drop, every drop judged live); a card from the band dropped on a schedule opens its sitting with the card in hand; the technician\'s name opens the day; a closed heading still reads its totals.';
      this._receipt = null;
    }
    receipt(text) { this._receipt = text || null; if (this.$('note')) this.$('note').textContent = text || ''; }

    // THE HEALTH DRAWN (the paper's section 3), on the board's card and live on the sitting's: the bar in the client's unit
    // (for production value its full length IS the daily minimum), the caption beneath, the stops beside, the flags in words
    flagsOf(d) { return Array.isArray(d.flags) ? d.flags : split(d.flags && d.flags.replace ? d.flags.replace(/^\{|\}$/g, '') : ''); }
    healthInto(card, d) {
      var unit = this.unitOf(d);
      var room = Number(d.room) || 0, placed = Number(d.placed) || 0;
      var revenue = Number(d.revenue) || 0, minimum = Number(d.minimum) || 0;
      var pct = unit === 'production_value' && minimum > 0 ? Math.min(100, Math.round(100 * revenue / minimum)) : (room ? Math.min(100, Math.round(100 * placed / room)) : 0);
      var bar = el('div', 'bd-bar'); var fill = el('span'); fill.style.width = pct + '%'; bar.appendChild(fill);
      bar.setAttribute('data-bd-bar', String(pct));
      card.appendChild(bar);
      var label = el('div', 'bd-bar-label');
      if (unit === 'production_value' && minimum > 0) {
        var cap = el('span', null, money(revenue) + ' of ' + money(minimum)); cap.setAttribute('data-bd-caption', '1');
        label.appendChild(cap);
        label.appendChild(el('span', 'bd-right', placed + ' / ' + room + ' stops'));
      } else {
        var cap2 = el('span', null, placed + ' / ' + room + ' stops'); cap2.setAttribute('data-bd-caption', '1');
        label.appendChild(cap2);
        if (unit === 'minutes') label.appendChild(el('span', 'bd-right', d.minutes + ' min'));
      }
      card.appendChild(label);
      // THE FLAGS, in words, only when true: one quiet line each; a healthy card shows nothing here
      var flags = this.flagsOf(d);
      if (flags.length) {
        var fl = el('div', 'bd-flags');
        flags.forEach(function (f) { var line = el('div', 'bd-flag', f); line.setAttribute('data-bd-flag', '1'); fl.appendChild(line); });
        card.appendChild(fl);
      }
    }

    // -- THE SCORECARD: THE HEALTH, not a score -- the bar in the client's unit with the gap in it, the caption beneath, the
    //    stops beside, the flags in words only when true; the cue opening the sitting; Release; a drop target --
    scorecardOf(d) {
      var self = this;
      var released = this.isReleased(d);
      var card = el('div', 'bd-tcard' + (this.litRoute === d.route_id ? ' bd-tcard--lit' : '') + (released ? ' bd-tcard--released' : ''));
      card.setAttribute('data-route', d.route_id);
      card.setAttribute('data-flags', String((d.flags || []).length));
      var head = el('div', 'bd-tcard-h');
      var tech = el('button', 'bd-tech', d.technician);
      tech.type = 'button'; tech.title = 'opens the day';
      tech.addEventListener('click', function () { self.navigate(FACE.day_route, d.route_id); });
      head.appendChild(tech);
      head.appendChild(document.createTextNode(' '));
      head.appendChild(el('span', 'bd-muted', d.state + (d.zones ? ' · ' + d.zones : '')));
      card.appendChild(head);
      this.healthInto(card, d);
      var placed = Number(d.placed) || 0;
      var foot = el('div', 'bd-tcard-f');
      // THE CUE (his 6): the stop count and a caret, opening THE SITTING
      var cue = el('button', 'bd-cue', plural(placed, 'stop'));
      cue.appendChild(el('span', 'bd-caret', '▸'));
      cue.type = 'button'; cue.setAttribute('data-bd-cue-open', d.route_id); cue.title = 'opens the sitting: the stops beside the pool';
      cue.addEventListener('click', function () { self.openSitting(d); });
      foot.appendChild(cue);
      // RELEASE on the card (his 12): one schedule through its door; a released card reads its stamp where the button stood
      if (released) { var st = el('span', 'bd-muted bd-right', 'released ' + (d.released && d.released !== '-' ? d.released : '')); st.setAttribute('data-bd-released-card', '1'); foot.appendChild(st); }
      else if (FACE.release && this.may(FACE.release.verb) && d.state === 'draft') {
        var rb = el('button', 'bd-btn bd-right', 'Release');
        rb.type = 'button'; rb.setAttribute('data-act', 'release'); rb.title = 'this schedule through ' + FACE.release.function + ' -- sequenced first when no order stands, the promises written';
        rb.addEventListener('click', function () { self.releaseOne(d); });
        foot.appendChild(rb);
      }
      card.appendChild(foot);
      if (this.may(FACE.drag.verb)) {
        card.addEventListener('dragover', function (e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; card.classList.add('bd-tcard--over'); });
        card.addEventListener('dragleave', function () { card.classList.remove('bd-tcard--over'); });
        card.addEventListener('drop', function (e) {
          e.preventDefault(); card.classList.remove('bd-tcard--over');
          var wo = e.dataTransfer.getData('text/plain');
          // act (b): a band card dropped on a scorecard opens THAT schedule's sitting with the card in hand (the paper's 12b)
          if (wo) self.openSitting(d, wo);
        });
      }
      return card;
    }
    async releaseOne(d) {
      this.say('Releasing ' + d.technician + '\'s ' + d.route_date + '...', false);
      var r = await this.rpc(FACE.release.function, { p_route: d.route_id, p_by: this.byWord() });
      if (r.ok) {
        this.say(null);
        var n = typeof r.data === 'number' ? r.data : (r.data && r.data.promises);
        this.receipt('Released ' + d.technician + '\'s ' + d.weekday + ' ' + d.route_date + (n !== undefined && n !== null ? ' -- ' + plural(n, 'promise') + ' written' : '') + '.');
        await this.load();
      } else this.say('Release refused: ' + r.words, true);
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

    // ==== THE SITTING (act (b)): a TEARSHEET over the board for ONE schedule =================================================
    //   the form RULED at his pass 09-11 (tearsheet-001's): the full sheet with the board's edge showing behind it under a dim,
    //   two panes -- the stops in order under the LIVE scorecard, THE POOL beside them -- and the footer's buttons. Every act
    //   writes through a door as she works (no working copy beside the rows); the door judges each drop LIVE; the cost line
    //   reads before the drop; CANCEL undoes the sitting's runs in one act; the board re-reads when the sheet closes.
    sitDay() { return this.sitting && this.sitting.day; }
    async openSitting(d, inHand) {
      if (this.sitting && this.sitting.route === d.route_id) { if (inHand) this.takeInHand(inHand); return; }
      this.sitting = { route: d.route_id, day: d, stamp: null, stampFrom: 'desk', stops: [], pool: [], poolZoned: false, costs: {}, inHand: inHand || null,
                       dragging: null, openWo: null, openStop: null, panel: null, out: null, bad: false, acts: 0, loading: true, sheet: null,
                       // act (c): THE MAP on Sequence -- the mode, the door's collection, the renderer's map, its state, the pins, the ground;
                       // her order of the day's stops, the pending proposal {run, row, order}, the price in flight
                       mode: 'place', geo: null, map: null, mapState: 'idle', mapNote: null, ground: null, markers: [], fitted: false,
                       order: null, proposal: null, pricing: false, dragStop: null };
      this.say(null);
      this.renderSitting();
      await this.readSittingStamp();
      await this.loadSitting();
      if (this.sitting && this.sitting.inHand) this.readCost(this.sitting.inHand);
      var sel = this.sitting && this.sitting.inHand ? this.sheetQ('.bd-card--p[data-wo="' + this.sitting.inHand + '"]') : null;
      if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: 'nearest' });
    }
    // CANCEL's stamp is THE DOOR'S OWN CLOCK: a microsecond past the schedule's newest run row at the opening (undo_since reads
    // created_at >= the stamp); the desk's clock only when no run stands -- a desk ahead of the door would miss the first act
    async readSittingStamp() {
      var s = this.sitting; if (!s) return;
      s.stamp = new Date().toISOString(); s.stampFrom = 'desk';
      try {
        var r = await this.from(RUNS).select('created_at').eq('route_id', s.route).order('created_at', { ascending: false }).limit(1);
        if (!r.error && r.data && r.data.length && r.data[0].created_at) { s.stamp = new Date(new Date(r.data[0].created_at).getTime() + 1).toISOString(); s.stampFrom = 'door'; }
      } catch (ignored) { /* the desk's clock stands */ }
    }
    async loadSitting() {
      var s = this.sitting; if (!s) return;
      var self = this;
      var route = s.route;
      var seq = s._seq = (s._seq || 0) + 1;
      var stale = function () { return !self.sitting || self.sitting !== s || seq !== s._seq; };
      // the schedule's row, LIVE (the bar, the caption, the flags, the state)
      var dr = await this.from(FACE.days).select('*').eq('route_id', route).limit(1);
      if (stale()) return;
      if (dr.error) { s.out = FACE.days + ': ' + dr.error.message; s.bad = true; } else if (dr.data && dr.data[0]) s.day = dr.data[0];
      // the stops in order
      var sr = await this.from(FACE.stops).select('*').eq('route_id', route).order('seq');
      if (stale()) return;
      if (sr.error) { s.out = FACE.stops + ': ' + sr.error.message; s.bad = true; } else s.stops = (sr.data || []).filter(function (x) { return x.state !== 'on_hold'; });
      // act (c): her order follows the rows; a pending proposal over a changed set of stops is dropped (the door would refuse it)
      var ids = s.stops.map(function (x) { return x.route_stop_id; });
      if (s.proposal && (s.proposal.order.length !== ids.length || s.proposal.order.some(function (id) { return ids.indexOf(id) === -1; }))) {
        s.proposal = null; s.order = null; s.mapNote = 'the stops changed under your order -- it was set aside; drag again to price a new one';
      }
      if (!s.proposal) s.order = ids;
      // THE POOL: the day's exceptions (the band's rows, with the zone), plus the ready rows of the schedule's zones (by the row's zone)
      var zones = split(s.day.zones);
      var byId = {}, order = [];
      var put = function (row, exception) {
        var id = row.work_order_id; if (!id) return;
        if (!byId[id]) { byId[id] = row; order.push(id); } else if (exception) { byId[id] = row; }
      };
      if (FACE.exceptions) {
        var xr = await this.tenantOf(this.from(FACE.exceptions).select('*').eq('route_date', s.day.route_date)).order('late', { ascending: false }).order('buffer');
        if (stale()) return;
        if (xr.error) { s.out = FACE.exceptions + ': ' + xr.error.message; s.bad = true; }
        else (xr.data || []).forEach(function (x) { put({ work_order_id: x.work_order_id, account_name: x.account, site: x.site, service: x.service, buffer_days: x.buffer, late: !!x.late, reason: x.reason, zone: x.zone, top_three: x.top_three, candidates: x.candidates, window: x.window, exception: true }, true); });
      }
      var pr = await this.tenantOf(this.from(FACE.pool).select('*').eq('state', 'ready')).order('buffer_days');
      if (stale()) return;
      if (pr.error) { s.out = FACE.pool + ': ' + pr.error.message; s.bad = true; }
      else {
        var rows = pr.data || [];
        s.poolZoned = rows.some(function (p) { return p.zone !== undefined && p.zone !== null; });
        if (s.poolZoned && zones.length) rows.filter(function (p) { return zones.indexOf(p.zone) !== -1; }).forEach(function (p) {
          put({ work_order_id: p.work_order_id, account_name: p.account_name, site: p.site, service: p.service, buffer_days: p.buffer_days, late: !!p.late, reason: p.late ? 'LATE' : (p.pool_reason || null), zone: p.zone, top_three: null, candidates: null, window: p.service_window, exception: false }, false);
        });
      }
      s.pool = order.map(function (id) { return byId[id]; });
      if (s.inHand && !byId[s.inHand]) s.inHand = null;
      if (s.openWo && !byId[s.openWo]) s.openWo = null;
      // act (c): the map's collection re-read with the rows once the map has been opened (a drop adds a pin)
      if (s.geo || s.mode === 'sequence') { await this.readGeo(); if (stale()) return; }
      s.loading = false;
      this.renderSitting();
    }
    sheetQ(sel) { return this.sitting && this.sitting.sheet ? this.sitting.sheet.querySelector(sel) : null; }
    // the sheet stands over the board's own extent (the content zone, not the shell's nav); re-placed when the window changes
    placeSheet() {
      var sh = this.sitting && this.sitting.sheet; if (!sh || !this.container) return;
      var rect = this.container.getBoundingClientRect();
      var left = Math.max(0, rect.left - 24);
      sh.style.left = left + 'px';
      sh.style.width = Math.max(320, Math.min(window.innerWidth - left, rect.width + 48)) + 'px';
      if (this.sitting.map && this.sitting.mode === 'sequence') { try { this.sitting.map.resize(); } catch (ignored) { /* the map follows the sheet */ } }
    }
    renderSitting() {
      var self = this;
      var host = this.$('sitting'); if (!host) return;
      var s = this.sitting;
      if (!s) { clear(host); host.hidden = true; return; }
      if (!s.sheet) {
        clear(host); host.hidden = false;
        var scrim = el('div', 'bd-scrim'); scrim.setAttribute('data-bd-scrim', '1'); host.appendChild(scrim);
        var sheet = el('div', 'bd-sheet'); sheet.setAttribute('data-bd-sheet', s.route); sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-label', 'The sitting');
        // THE BOARD'S EDGE SHOWING (act (d), Local's rows): the sheet's top is the board's title row, wherever the shell puts it
        // (the css's 5.5rem was the harness's bare page; under the shell's header the title stands lower) -- read at the opening
        var titleEl = this.container ? this.container.querySelector('.bd-title') : null; var titleBox = titleEl ? titleEl.getBoundingClientRect() : null;
        if (titleBox && titleBox.bottom > 0) sheet.style.top = Math.max(88, Math.round(titleBox.bottom + 6)) + 'px';
        var head = el('header', 'bd-sheet-h'); head.setAttribute('data-bd-sit', 'head'); sheet.appendChild(head);
        var body = el('div', 'bd-sheet-body');
        var list = el('div', 'bd-sheet-list');
        var card = el('div', 'bd-sheet-card'); card.setAttribute('data-bd-sit-card', '1'); list.appendChild(card);
        var lh = el('div', 'bd-sheet-listh'); lh.setAttribute('data-bd-sit', 'listh'); list.appendChild(lh);
        var out = el('div', 'bd-sheet-out'); out.setAttribute('data-bd-sit-out', '1'); list.appendChild(out);
        var panel = el('section', 'bd-panel'); panel.setAttribute('data-bd-sit-panel', '1'); panel.hidden = true; list.appendChild(panel);
        var ol = el('ol', 'bd-stops'); ol.setAttribute('data-bd-stops', '1'); list.appendChild(ol);
        // THE LIST IS THE DROP TARGET: the cost line reads as the card crosses it; the drop goes through the door
        if (this.may(FACE.drag.verb)) {
          // a stop dragged within the list (Sequence) is the rows' own affair, never a drop from the pool
          ol.addEventListener('dragover', function (e) { if (s.dragStop) return; e.preventDefault(); e.dataTransfer.dropEffect = 'move'; ol.classList.add('bd-stops--over'); if (s.dragging) self.readCost(s.dragging); });
          ol.addEventListener('dragleave', function () { ol.classList.remove('bd-stops--over'); });
          ol.addEventListener('drop', function (e) { if (s.dragStop) return; e.preventDefault(); ol.classList.remove('bd-stops--over'); var wo = e.dataTransfer.getData('text/plain') || s.dragging; s.dragging = null; if (wo && !/^stop:/.test(wo)) self.sitDrop(wo); });
        }
        body.appendChild(list);
        var pool = el('div', 'bd-sheet-pool'); pool.setAttribute('data-bd-sit', 'poolpane');
        var ph = el('div', 'bd-sheet-listh'); ph.setAttribute('data-bd-sit', 'poolh'); pool.appendChild(ph);
        var pc = el('div', 'bd-pool-cards'); pc.setAttribute('data-bd-pool', '1'); pool.appendChild(pc);
        body.appendChild(pool);
        // act (c): THE MAP pane stands where the pool stood when the head's switch reads SEQUENCE
        var mapPane = el('div', 'bd-sheet-map'); mapPane.setAttribute('data-bd-sit', 'mappane'); mapPane.hidden = true;
        var mh = el('div', 'bd-sheet-listh'); mh.setAttribute('data-bd-sit', 'maph'); mapPane.appendChild(mh);
        var mq = el('div', 'bd-map-quiet'); mq.setAttribute('data-bd-map-quiet', '1'); mapPane.appendChild(mq);
        var mhost = el('div', 'bd-map'); mhost.setAttribute('data-bd-map', s.route); mhost.setAttribute('data-bd-map-state', 'idle'); mapPane.appendChild(mhost);
        body.appendChild(mapPane);
        sheet.appendChild(body);
        var foot = el('footer', 'bd-sheet-f'); foot.setAttribute('data-bd-sit', 'foot'); sheet.appendChild(foot);
        sheet.addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (s.panel) { s.panel = null; self.renderSitPanel(); } else if (s.openWo || s.openStop) { s.openWo = null; s.openStop = null; self.renderSitPool(); self.renderSitStops(); } } });
        host.appendChild(sheet);
        s.sheet = sheet;
        this.placeSheet();
      }
      this.renderSitHead(); this.renderSitCard(); this.renderSitListHead(); this.renderSitOut(); this.renderSitPanel(); this.renderSitStops(); this.renderSitPool(); this.renderSitPanes(); this.renderSitMap(); this.renderSitFoot();
    }
    renderSitHead() {
      var self = this, s = this.sitting, d = s.day; var host = this.sheetQ('[data-bd-sit="head"]'); if (!host) return; clear(host);
      var left = el('div', 'bd-sheet-hl');
      var t = el('h3', 'bd-sheet-t', d.technician + '\'s ' + (d.weekday || '') + ' ' + d.route_date);
      t.setAttribute('data-bd-sit-title', d.route_id);
      t.appendChild(document.createTextNode(' '));
      t.appendChild(el('span', 'bd-muted', d.state + (d.zones ? ' · ' + d.zones : '')));
      left.appendChild(t);
      var opened = ' (opened ' + String(s.stamp || '').replace('T', ' ').slice(0, 19) + ', the ' + s.stampFrom + '\'s clock)';
      left.appendChild(el('p', 'bd-sheet-sub', s.mode === 'sequence'
        ? 'SEQUENCE: the day on the map, the stops as pins joined in order, the start and the end marked. Drag a row in the list (or step it) into your order and the door prices it live against the machine\'s -- a proposal until Save accepts it. Cancel undoes this sitting\'s runs in one act' + opened + '.'
        : 'THE SITTING: the stops beside the pool. A card dropped on the list goes through the door live -- inside the criteria it places; on the exception the panel asks your reason; the door refuses what cannot be done. The cost reads on the list\'s head as the card crosses it. Save keeps what was written; Cancel undoes this sitting\'s runs in one act' + opened + '.'));
      host.appendChild(left);
      // act (c): the head's switch -- PLACE (the pool beside the stops) or SEQUENCE (the map beside the order)
      if (MAP) {
        var sw = el('span', 'bd-modes bd-sit-modes'); sw.setAttribute('data-bd-sit-modes', '1');
        [['place', 'Place'], ['sequence', 'Sequence']].forEach(function (m) {
          var b = el('button', 'bd-mode' + (s.mode === m[0] ? ' bd-mode--on' : ''), m[1]);
          b.type = 'button'; b.setAttribute('data-bd-sit-mode', m[0]);
          b.title = m[0] === 'place' ? 'PLACE: the pool beside the stops; every drop through the door' : 'SEQUENCE: the day on the map; drag the order in the list, the door prices it';
          b.addEventListener('click', function () { self.setSitMode(m[0]); });
          sw.appendChild(b);
        });
        host.appendChild(sw);
      }
    }
    setSitMode(m) {
      var s = this.sitting; if (!s || (m !== 'place' && m !== 'sequence') || s.mode === m) return;
      s.mode = m; s.dragStop = null; s.dragging = null;
      this.renderSitHead(); this.renderSitListHead(); this.renderSitStops(); this.renderSitPanes();
      if (m === 'sequence') this.openMap();
    }
    // the right pane by mode: the pool, or the map (the map re-measured when it returns)
    renderSitPanes() {
      var s = this.sitting; var pool = this.sheetQ('[data-bd-sit="poolpane"]'), map = this.sheetQ('[data-bd-sit="mappane"]'); if (!pool || !map) return;
      var seq = MAP && s.mode === 'sequence';
      pool.hidden = !!seq; map.hidden = !seq;
      if (seq && s.map) { try { s.map.resize(); } catch (ignored) { /* the map follows the pane */ } }
    }
    renderSitCard() {
      var s = this.sitting; var host = this.sheetQ('[data-bd-sit-card]'); if (!host) return; clear(host);
      var h = el('div', 'bd-tcard-h'); h.appendChild(el('b', null, 'THE SCORECARD, live')); h.appendChild(document.createTextNode(' ')); h.appendChild(el('span', 'bd-muted', 're-read after every act')); host.appendChild(h);
      this.healthInto(host, s.day);
    }
    renderSitListHead() {
      var s = this.sitting; var host = this.sheetQ('[data-bd-sit="listh"]'); if (!host) return; clear(host);
      host.appendChild(el('b', null, s.mode === 'sequence' ? 'THE ORDER' : 'THE STOPS'));
      var n = el('span', 'bd-muted', s.loading ? 'reading...' : plural(s.stops.length, 'stop') + (s.mode === 'sequence' ? (this.canOrder() ? ' -- drag a row, or step it' : ' in order (your role cannot change it)') : ' in order' + (s.stops.length ? '' : ' -- drop the first here')));
      n.setAttribute('data-bd-sit-stops', String(s.stops.length)); host.appendChild(n);
      var cost = el('span', 'bd-cost'); cost.setAttribute('data-bd-cost', ''); host.appendChild(cost);
      this.renderSitCost();
    }
    canOrder() { return !!(MAP_ORDER && this.may(MAP_ORDER.verb)); }
    // THE COST BEFORE THE DROP (PROPOSAL A): the words and the verdict class the door would give, read once per card
    async readCost(woId) {
      var s = this.sitting; if (!s || !SITTING || !SITTING.cost) return;
      if (s.costs[woId] === undefined) {
        s.costs[woId] = null; this.renderSitCost();
        var r = await this.rpc(SITTING.cost.function, { p_work_order: woId, p_route: s.route });
        if (!this.sitting || this.sitting !== s) return;
        s.costs[woId] = r.ok && r.data && typeof r.data === 'object' ? r.data : { verdict: 'unread', words: 'the cost could not be read: ' + (r.words || '?'), cause: null };
      }
      this.renderSitCost();
    }
    renderSitCost() {
      var s = this.sitting; var host = this.sheetQ('[data-bd-cost]'); if (!host) return;
      var wo = s.dragging || s.inHand;
      var w = wo ? s.pool.filter(function (x) { return x.work_order_id === wo; })[0] : null;
      host.className = 'bd-cost'; host.textContent = ''; host.setAttribute('data-bd-cost', ''); host.removeAttribute('data-bd-cost-class');
      if (!w) return;
      if (!SITTING || !SITTING.cost) { host.textContent = w.account_name + ' in hand -- the door judges the drop'; host.setAttribute('data-bd-cost', wo); return; }
      var c = s.costs[wo];
      if (c === undefined) { this.readCost(wo); return; }
      if (c === null) { host.textContent = 'pricing ' + w.account_name + ' on this day...'; host.setAttribute('data-bd-cost', wo); return; }
      var verdict = c.verdict || 'unread';
      var tail = verdict === 'silent' ? ' -- inside the criteria: the drop places with no question'
               : verdict === 'asked' ? ' -- the door will ask: ' + (c.cause || 'your reason places it')
               : verdict === 'refused' ? ' -- refused: ' + (c.cause || 'the door refuses this drop')
               : '';
      host.textContent = w.account_name + ': ' + (c.words || '') + tail;
      host.className = 'bd-cost bd-cost--' + verdict;
      host.setAttribute('data-bd-cost', wo); host.setAttribute('data-bd-cost-class', verdict);
    }
    renderSitOut() {
      var s = this.sitting; var host = this.sheetQ('[data-bd-sit-out]'); if (!host) return;
      host.textContent = s.out || ''; host.className = 'bd-sheet-out' + (s.bad ? ' is-bad' : '');
    }
    renderSitStops() {
      var self = this, s = this.sitting; var host = this.sheetQ('[data-bd-stops]'); if (!host) return; clear(host);
      if (!s.stops.length && !s.loading) { var q = el('li', 'bd-quiet', 'no stop stands on this schedule -- the pool beside is the first drop'); q.setAttribute('data-bd-stops-empty', '1'); host.appendChild(q); return; }
      // act (c): in SEQUENCE the rows stand in HER order (the proposal's, or the rows' own), numbered as she has them; the eta
      // greys until the order is accepted (the door writes the eta at the acceptance); the rows drag and step
      var sequence = MAP && s.mode === 'sequence';
      var canOrder = sequence && this.canOrder();
      var byId = {}; s.stops.forEach(function (st) { byId[st.route_stop_id] = st; });
      var rows = sequence && s.order ? s.order.map(function (id) { return byId[id]; }).filter(Boolean) : s.stops.slice();
      if (sequence) s.stops.forEach(function (st) { if (rows.indexOf(st) === -1) rows.push(st); });
      var standing = s.stops.map(function (st) { return st.route_stop_id; });
      var proposed = sequence && s.order && !sameOrder(s.order, standing);
      host.setAttribute('data-bd-order', sequence ? rows.map(function (st) { return st.route_stop_id; }).join(',') : '');
      rows.forEach(function (st, i) {
        var seq = sequence ? i + 1 : st.seq;
        var li = el('li', 'bd-stop' + (s.openStop === st.route_stop_id ? ' bd-stop--on' : '') + (canOrder ? ' bd-stop--order' : ''));
        li.setAttribute('data-stop', st.route_stop_id); li.setAttribute('data-seq', String(seq));
        li.appendChild(el('span', 'bd-stop-seq', String(seq)));
        var eta = el('span', 'bd-stop-eta' + (proposed ? ' bd-stop-eta--proposed' : ''), proposed ? '--:--' : (st.eta || '-'));
        if (proposed) eta.title = 'the eta is written when your order is accepted (Save)';
        li.appendChild(eta);
        li.appendChild(el('span', 'bd-stop-place', st.place || '-'));
        if (canOrder) {
          var mv = el('span', 'bd-stop-moves');
          var up = el('button', 'bd-move', '▲'); up.type = 'button'; up.setAttribute('data-bd-move-up', st.route_stop_id); up.title = 'one earlier'; up.disabled = i === 0;
          up.addEventListener('click', function (e) { e.stopPropagation(); self.moveBy(st.route_stop_id, -1); });
          var down = el('button', 'bd-move', '▼'); down.type = 'button'; down.setAttribute('data-bd-move-down', st.route_stop_id); down.title = 'one later'; down.disabled = i === rows.length - 1;
          down.addEventListener('click', function (e) { e.stopPropagation(); self.moveBy(st.route_stop_id, 1); });
          mv.appendChild(up); mv.appendChild(down);
          li.appendChild(mv);
          li.draggable = true;
          li.addEventListener('dragstart', function (e) { s.dragStop = st.route_stop_id; e.dataTransfer.setData('text/plain', 'stop:' + st.route_stop_id); e.dataTransfer.effectAllowed = 'move'; li.classList.add('bd-stop--dragging'); });
          li.addEventListener('dragend', function () { s.dragStop = null; li.classList.remove('bd-stop--dragging'); });
          li.addEventListener('dragover', function (e) { if (!s.dragStop) return; e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = 'move'; li.classList.add('bd-stop--over'); });
          li.addEventListener('dragleave', function () { li.classList.remove('bd-stop--over'); });
          li.addEventListener('drop', function (e) { if (!s.dragStop) return; e.preventDefault(); e.stopPropagation(); li.classList.remove('bd-stop--over'); var from = s.dragStop; s.dragStop = null; self.moveStop(from, st.route_stop_id); });
        } else li.appendChild(el('span', 'bd-muted', st.state || ''));
        li.appendChild(el('div', 'bd-stop-work', st.work_orders || ''));
        li.addEventListener('click', function () { s.openStop = s.openStop === st.route_stop_id ? null : st.route_stop_id; self.renderSitStops(); self.markPin(); });
        if (s.openStop === st.route_stop_id) self.fillStopDetail(st, li);
        host.appendChild(li);
      });
    }
    // ==== THE MAP ON SEQUENCE (act (c)) ====================================================================================
    //   the day's stops as pins joined in order from the door's collection; her order dragged in the list and priced live by
    //   the door as a proposal; the line redrawn in her order; SAVE (or RELEASE, first) accepts the proposal
    async openMap() {
      var s = this.sitting; if (!s || !MAP) return;
      if (!s.order) s.order = s.stops.map(function (x) { return x.route_stop_id; });
      if (!s.geo) { await this.readGeo(); if (!this.sitting || this.sitting !== s) return; }
      if (s.mapState === 'idle') await this.buildMap();
      else this.renderSitMap();
    }
    async readGeo() {
      var s = this.sitting; if (!s || !MAP) return;
      var r = await this.rpc(MAP.function, { p_route: s.route });
      if (!this.sitting || this.sitting !== s) return;
      if (r.ok && r.data && r.data.type === 'FeatureCollection' && Array.isArray(r.data.features)) { s.geo = r.data; if (s.mapNote && /read failed/.test(s.mapNote)) s.mapNote = null; }
      else { s.geo = { type: 'FeatureCollection', features: [], properties: {} }; s.mapNote = 'the map\'s read failed: ' + (r.words || 'no collection came back from ' + MAP.function); }
    }
    async buildMap() {
      var self = this, s = this.sitting; var host = this.sheetQ('[data-bd-map]'); if (!host || !s) return;
      s.mapState = 'loading'; host.setAttribute('data-bd-map-state', 'loading'); this.renderSitMapHead();
      var lib = await loadRenderer();
      if (!this.sitting || this.sitting !== s) return;
      host = this.sheetQ('[data-bd-map]'); if (!host) return;
      if (!lib) { s.mapState = 'failed'; s.mapNote = 'the map\'s renderer could not be loaded (' + RENDERER_SCRIPT + ') -- the order still drags and the door still prices it; the map is the picture, the door is the truth'; host.setAttribute('data-bd-map-state', 'failed'); this.renderSitMapHead(); return; }
      // THE SEAM: the deployment's key, or none -- with none, THE BLANK GROUND: no style of the map's, no tile, no call to its API
      var ctx = window.AppContext || {}; var token = ctx.integrations && ctx.integrations[TOKEN_KEY];
      var keyed = !!(token && !/^__/.test(String(token)));
      s.ground = keyed ? 'tiles' : 'blank';
      host.setAttribute('data-bd-map-ground', s.ground);
      var opts = { container: host, style: keyed ? RENDERER_STYLE : BLANK_STYLE, attributionControl: keyed, testMode: !keyed };
      if (keyed) opts.accessToken = token;
      else {
        opts.accessToken = 'pk.no-key-on-this-deployment';
        opts.transformRequest = function (url) { return /^https?:\/\/[a-z.-]*mapbox\.com\//i.test(String(url)) ? { url: 'data:application/json,{}' } : { url: url }; };
        // the seam's fourth setting (act (d), Local's rows): the library's TELEMETRY goes to its events host by its own fetch and
        // beacon, outside transformRequest -- on the blank ground both are answered here, so nothing of the map's is called
        if (!window.__bdMapQuiet) {
          window.__bdMapQuiet = true;
          var isEvents = function (u) { return /^https?:\/\/events\.mapbox\.com\//i.test(String(u && u.url ? u.url : u)); };
          var isSession = function (u) { return /^https?:\/\/api\.mapbox\.com\/map-sessions\//i.test(String(u && u.url ? u.url : u)); };
          var realFetch = window.fetch;
          if (realFetch) window.fetch = function (input, init) {
            if (isEvents(input)) return Promise.resolve(new Response(null, { status: 204 }));
            if (isSession(input)) return Promise.resolve(new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } }));
            return realFetch.apply(this, arguments);
          };
          if (navigator.sendBeacon) { var realBeacon = navigator.sendBeacon.bind(navigator); navigator.sendBeacon = function (u, d) { return isEvents(u) ? true : realBeacon(u, d); }; }
        }
      }
      var map;
      try { map = new lib.Map(opts); }
      catch (e) { s.mapState = 'failed'; s.mapNote = 'the map could not be drawn: ' + e.message; host.setAttribute('data-bd-map-state', 'failed'); this.renderSitMapHead(); return; }
      map.on('error', function (e) { var m = (e && e.error && e.error.message) || 'the renderer reports an error'; if (!keyed && /token|access|401|unauthori/i.test(m)) return; s.mapNote = 'the map\'s ground: ' + m; self.renderSitMapHead(); });
      s.map = map; host.__bdMap = map;
      await new Promise(function (res) { if (map.loaded()) res(); else { map.once('load', res); setTimeout(res, 8000); } });
      if (!this.sitting || this.sitting !== s) { try { map.remove(); } catch (ignored) { /* gone */ } return; }
      try {
        if (!map.getSource('route')) map.addSource('route', { type: 'geojson', data: this.drawnGeo() });
        if (!map.getLayer('route-line')) map.addLayer({ id: 'route-line', type: 'line', source: 'route', filter: ['==', ['get', 'kind'], 'line'], layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-color': '#0f62fe', 'line-width': 3, 'line-opacity': 0.9 } });
      } catch (e) { s.mapNote = 'the map\'s line: ' + e.message; }
      s.mapState = 'ready';
      this.renderSitMap();
    }
    // the collection AS DRAWN: the door's, with the stops in HER order when it differs -- renumbered, the eta withheld, the
    // line rebuilt through them from the start to the end; the proposal's drive on the line once the door has priced it
    drawnGeo() {
      var s = this.sitting; var g = (s && s.geo) || { type: 'FeatureCollection', features: [], properties: {} };
      var feats = g.features || [];
      var kind = function (f) { return (f && f.properties && f.properties.kind) || ''; };
      var stops = feats.filter(function (f) { return kind(f) === 'stop'; });
      var start = feats.filter(function (f) { return kind(f) === 'start'; })[0] || null;
      var end = feats.filter(function (f) { return kind(f) === 'end'; })[0] || null;
      var line = feats.filter(function (f) { return kind(f) === 'line'; })[0] || null;
      var byId = {}; stops.forEach(function (f) { byId[f.properties.route_stop_id] = f; });
      var order = s && s.order && s.order.length ? s.order : stops.map(function (f) { return f.properties.route_stop_id; });
      var ordered = order.map(function (id) { return byId[id]; }).filter(Boolean);
      stops.forEach(function (f) { if (ordered.indexOf(f) === -1) ordered.push(f); });
      var changed = ordered.some(function (f, i) { return f !== stops[i]; });
      var out = [];
      if (start) out.push(start);
      ordered.forEach(function (f, i) {
        var p = {}; for (var k in f.properties) p[k] = f.properties[k];
        p.seq = i + 1; if (changed) { p.eta = null; p.etd = null; p.by_hand = true; }
        out.push({ type: 'Feature', geometry: f.geometry, properties: p });
      });
      if (end) out.push(end);
      var coords = [];
      if (start && start.geometry && start.geometry.coordinates) coords.push(start.geometry.coordinates);
      ordered.forEach(function (f) { if (f.geometry && f.geometry.coordinates) coords.push(f.geometry.coordinates); });
      if (end && end.geometry && end.geometry.coordinates) coords.push(end.geometry.coordinates);
      var lp = {}; if (line && line.properties) for (var k2 in line.properties) lp[k2] = line.properties[k2];
      lp.kind = 'line'; lp.stops = ordered.length; lp.by_hand = changed; lp.priced = !!(changed && s && s.proposal && s.proposal.row);
      if (lp.priced) { lp.drive_miles = s.proposal.row.drive_miles; lp.drive_minutes = s.proposal.row.drive_minutes; lp.projected = false; }
      out.push({ type: 'Feature', geometry: { type: 'LineString', coordinates: coords }, properties: lp });
      return { type: 'FeatureCollection', features: out, properties: g.properties || {} };
    }
    renderSitMap() { var s = this.sitting; if (!s || !MAP) return; if (s.mapState === 'ready' && s.map) this.drawMap(); else this.renderSitMapHead(); }
    drawMap() {
      var self = this, s = this.sitting; var host = this.sheetQ('[data-bd-map]'); if (!s || !s.map || s.mapState !== 'ready' || !host) { this.renderSitMapHead(); return; }
      var lib = window[RENDERER_GLOBAL];
      var fc = this.drawnGeo(); host.__bdGeo = fc;
      try { var src = s.map.getSource('route'); if (src && src.setData) src.setData(fc); } catch (e) { s.mapNote = 'the map\'s source: ' + e.message; }
      (s.markers || []).forEach(function (m) { try { m.remove(); } catch (ignored) { /* gone */ } }); s.markers = [];
      var startCoord = null, bounds = null;
      fc.features.forEach(function (f) {
        if (!f.geometry || f.geometry.type !== 'Point' || !f.geometry.coordinates) return;
        var k = f.properties.kind, c = f.geometry.coordinates;
        var pin = el('div', 'bd-pin bd-pin--' + k + (k === 'stop' && s.openStop === f.properties.route_stop_id ? ' bd-pin--on' : ''), k === 'stop' ? String(f.properties.seq) : (k === 'start' ? 'S' : 'E'));
        pin.setAttribute('data-bd-pin', k);
        if (k === 'stop') { pin.setAttribute('data-stop', f.properties.route_stop_id); pin.setAttribute('data-seq', String(f.properties.seq)); }
        pin.title = k === 'stop'
          ? f.properties.seq + '. ' + (f.properties.place || '') + (f.properties.eta ? ' at ' + f.properties.eta : '') + (f.properties.work_orders ? ' -- ' + f.properties.work_orders : '') + (f.properties.mandated ? ' (mandated)' : '')
          : (k === 'start' ? 'the start: ' : 'the end: ') + (f.properties.place || '') + (f.properties.technician ? ' (' + f.properties.technician + ')' : '');
        var opts = { element: pin };
        if (k === 'start') startCoord = c;
        // the end is the start until leg 8 names one: the end's pin stands beside the start's, never under it
        if (k === 'end' && startCoord && startCoord[0] === c[0] && startCoord[1] === c[1]) opts.offset = [16, 0];
        try { var m = new lib.Marker(opts).setLngLat(c).addTo(s.map); s.markers.push(m); } catch (e) { s.mapNote = 'a pin could not be placed: ' + e.message; return; }
        if (k === 'stop') pin.addEventListener('click', function () { s.openStop = s.openStop === f.properties.route_stop_id ? null : f.properties.route_stop_id; self.renderSitStops(); self.markPin(); var li = self.sheetQ('.bd-stop[data-stop="' + f.properties.route_stop_id + '"]'); if (li && li.scrollIntoView) li.scrollIntoView({ block: 'nearest' }); });
        if (!bounds) bounds = [[c[0], c[1]], [c[0], c[1]]];
        else { bounds[0][0] = Math.min(bounds[0][0], c[0]); bounds[0][1] = Math.min(bounds[0][1], c[1]); bounds[1][0] = Math.max(bounds[1][0], c[0]); bounds[1][1] = Math.max(bounds[1][1], c[1]); }
      });
      if (bounds && !s.fitted) { s.fitted = true; try { s.map.fitBounds(bounds, { padding: 56, duration: 0, maxZoom: 14 }); } catch (ignored) { /* the map keeps its view */ } }
      host.setAttribute('data-bd-map-pins', String(s.markers.length));
      host.setAttribute('data-bd-map-state', 'ready');
      this.renderSitMapHead();
    }
    markPin() {
      var s = this.sitting; var host = this.sheetQ('[data-bd-map]'); if (!s || !host) return;
      var pins = host.querySelectorAll('.bd-pin[data-bd-pin="stop"]');
      for (var i = 0; i < pins.length; i++) pins[i].classList.toggle('bd-pin--on', pins[i].getAttribute('data-stop') === s.openStop);
    }
    // the map's head: the machine's drive as the door has it; HER ORDER'S PRICE against it once the door has priced it; the ground
    renderSitMapHead() {
      var s = this.sitting; var host = this.sheetQ('[data-bd-sit="maph"]'), quiet = this.sheetQ('[data-bd-map-quiet]'); if (!s || !host || !quiet) return;
      clear(host); clear(quiet);
      host.appendChild(el('b', null, 'THE MAP'));
      var gp = (s.geo && s.geo.properties) || {};
      var standing = s.stops.map(function (st) { return st.route_stop_id; });
      var proposed = s.order && !sameOrder(s.order, standing);
      var machine = gp.drive_miles !== undefined && gp.drive_miles !== null ? miles(gp.drive_miles) + ' / ' + mins(gp.drive_minutes) + (gp.projected ? ' (projected)' : '') : 'the drive unread';
      var words = el('span', 'bd-muted', s.mapState === 'loading' ? 'the renderer loading...' : plural(Number(gp.stops !== undefined ? gp.stops : s.stops.length), 'stop') + ' · the machine\'s drive ' + machine);
      words.setAttribute('data-bd-map-machine', String(gp.drive_miles !== undefined && gp.drive_miles !== null ? gp.drive_miles : ''));
      host.appendChild(words);
      if (s.pricing) { var pr = el('span', 'bd-map-price', 'pricing your order...'); pr.setAttribute('data-bd-map-pricing', '1'); host.appendChild(pr); }
      else if (proposed && s.proposal) {
        var row = s.proposal.row || {};
        var dm = Number(row.drive_miles), dn = Number(row.drive_minutes);
        var bm = Number(gp.drive_miles), bn = Number(gp.drive_minutes);
        var delta = isFinite(dm) && isFinite(bm) ? ' (' + (dm - bm >= 0 ? '+' : '-') + miles(Math.abs(dm - bm)) + (isFinite(dn) && isFinite(bn) ? ', ' + (dn - bn >= 0 ? '+' : '-') + mins(Math.abs(dn - bn)) : '') + ')' : '';
        var price = el('span', 'bd-map-price', 'BY HAND ' + (isFinite(dm) ? miles(dm) + ' / ' + mins(dn) : 'priced') + ' against the machine\'s ' + machine + delta + ' -- a proposal until Save');
        price.setAttribute('data-bd-map-price', String(s.proposal.run)); price.setAttribute('data-bd-map-hand', String(isFinite(dm) ? dm : ''));
        host.appendChild(price);
      } else if (proposed) { var un = el('span', 'bd-map-price', 'your order is not priced -- ' + (s.out || 'the door did not answer')); un.setAttribute('data-bd-map-unpriced', '1'); host.appendChild(un); }
      if (s.ground === 'blank') { var g = el('div', 'bd-quiet', 'no map key on this deployment: the pins and the line draw on a blank ground, and nothing of the map\'s is called (the tiles absent)'); g.setAttribute('data-bd-map-ground-line', 'blank'); quiet.appendChild(g); }
      if (s.mapNote) { var n = el('div', 'bd-quiet', s.mapNote); n.setAttribute('data-bd-map-note', '1'); quiet.appendChild(n); }
      if (s.geo && !s.geo.features.some(function (f) { return f.properties && f.properties.kind === 'stop' && f.geometry; })) { var e0 = el('div', 'bd-quiet', 'no stop with a place on the map stands on this schedule'); e0.setAttribute('data-bd-map-empty', '1'); quiet.appendChild(e0); }
    }
    // HER ORDER: a row dragged onto another takes its place; a row stepped moves one; the door prices the whole order
    moveStop(from, to) {
      var s = this.sitting; if (!s || !s.order || from === to) return;
      var o = s.order.slice(); var i = o.indexOf(from), j = o.indexOf(to); if (i < 0 || j < 0) return;
      o.splice(i, 1); o.splice(j, 0, from);
      this.sitOrder(o);
    }
    moveBy(id, delta) {
      var s = this.sitting; if (!s || !s.order) return;
      var o = s.order.slice(); var i = o.indexOf(id), j = i + delta; if (i < 0 || j < 0 || j >= o.length) return;
      o.splice(i, 1); o.splice(j, 0, id);
      this.sitOrder(o);
    }
    async sitOrder(order) {
      var s = this.sitting; if (!s || !this.canOrder()) return;
      s.order = order.slice(); s.proposal = null;
      var standing = s.stops.map(function (st) { return st.route_stop_id; });
      if (sameOrder(order, standing)) {
        // back to the rows' own order: nothing to price; the proposals already written wait for CANCEL or stand unaccepted
        s.pricing = false; s.out = 'The machine\'s order stands again -- nothing to accept.'; s.bad = false;
        this.renderSitOut(); this.renderSitStops(); this.renderSitFoot(); this.renderSitMap(); return;
      }
      s.pricing = true;
      this.renderSitStops(); this.renderSitMap();
      var seq = s._orderSeq = (s._orderSeq || 0) + 1;
      var r = await this.rpc(MAP_ORDER.function, { p_route: s.route, p_order: order, p_by: this.byWord() });
      if (!this.sitting || this.sitting !== s || seq !== s._orderSeq) return;
      if (!r.ok) { s.pricing = false; s.out = 'Your order was refused: ' + r.words; s.bad = true; this.renderSitOut(); this.renderSitMapHead(); return; }
      var run = typeof r.data === 'string' ? r.data : ((r.data && (r.data.run || r.data.run_id)) || String(r.data));
      var row = null;
      try { var rr = await this.from(RUNS).select('*').eq('run_id', run).limit(1); if (!rr.error && rr.data && rr.data[0]) row = rr.data[0]; } catch (ignored) { /* the price stays on the door */ }
      if (!this.sitting || this.sitting !== s || seq !== s._orderSeq) return;
      s.pricing = false; s.proposal = { run: run, row: row, order: order.slice() }; s.acts++;
      s.out = 'Your order priced by the door' + (row && row.result_summary ? ': ' + row.result_summary : ' (run ' + run + ')') + ' -- a proposal until Save accepts it.'; s.bad = false;
      this.renderSitOut(); this.renderSitStops(); this.renderSitFoot(); this.renderSitMap();
    }
    // THE PROPOSAL ACCEPTED through its door (SAVE; RELEASE first): null when none stands, the run when accepted, false when refused
    async acceptProposal() {
      var s = this.sitting; if (!s || !s.proposal || !MAP_ACCEPT) return null;
      s.out = 'Accepting your order...'; s.bad = false; this.renderSitOut();
      var r = await this.rpc(MAP_ACCEPT.function, { p_run: s.proposal.run, p_by: this.byWord() });
      if (!this.sitting || this.sitting !== s) return false;
      if (!r.ok) { s.out = 'Your order was not accepted: ' + r.words + ' -- the sitting stays open.'; s.bad = true; this.renderSitOut(); return false; }
      var run = s.proposal.run; s.proposal = null; s.order = null;
      return run;
    }
    dropMap(s) {
      if (!s) return;
      (s.markers || []).forEach(function (m) { try { m.remove(); } catch (ignored) { /* gone */ } }); s.markers = [];
      if (s.map) { try { s.map.remove(); } catch (ignored) { /* gone */ } s.map = null; }
      s.mapState = 'idle';
    }
    // a stop OPENED IN PLACE with its facts: what the technician sees (his cut 6)
    async fillStopDetail(st, li) {
      var box = el('div', 'bd-detail bd-detail--stop', 'reading...');
      box.setAttribute('data-bd-stop-detail', st.route_stop_id);
      li.appendChild(box);
      var r = await this.from(FACE.detail).select('*').eq('route_stop_id', st.route_stop_id).limit(1);
      clear(box);
      if (r.error) { box.appendChild(el('div', 'bd-error', r.error.message)); return; }
      var f = (r.data || [])[0];
      if (!f) { box.appendChild(el('div', 'bd-muted', 'no facts stand on this stop')); return; }
      var row = function (label, text) { if (!text) return; var d = el('div', null, null); d.appendChild(el('span', 'bd-muted', label + ' ')); d.appendChild(document.createTextNode(text)); box.appendChild(d); };
      row('work', f.summary); row('window', f.window); row('grade', f.grade); row('mandate', f.mandate); row('access', f.paper); row('promise', f.promise); row('', f.mandated);
    }
    poolWords(s) {
      var zones = split(s.day.zones);
      var late = s.pool.filter(function (w) { return w.late; }).length, x = s.pool.filter(function (w) { return w.exception; }).length;
      var parts = [plural(s.pool.length, 'card') + (zones.length ? ' for ' + zones.join(', ') : '')];
      if (x) parts.push(plural(x, 'exception') + ' of the day');
      if (late) parts.push(late + ' LATE');
      return parts.join(' · ');
    }
    renderSitPool() {
      var self = this, s = this.sitting;
      var head = this.sheetQ('[data-bd-sit="poolh"]'); var host = this.sheetQ('[data-bd-pool]'); if (!head || !host) return;
      clear(head); clear(host);
      head.appendChild(el('b', null, 'THE POOL'));
      var n = el('span', 'bd-muted', s.loading ? 'reading...' : this.poolWords(s)); n.setAttribute('data-bd-sit-pool', String(s.pool.length)); head.appendChild(n);
      if (s.loading) return;
      if (!s.poolZoned) { var z = el('div', 'bd-quiet', 'the zones\' own ready rows read when the pool rows carry a zone; the day\'s exceptions stand here'); z.setAttribute('data-bd-pool-unzoned', '1'); host.appendChild(z); }
      if (!s.pool.length) { var q = el('div', 'bd-quiet', 'none -- the machine placed everything in this schedule\'s zones'); q.setAttribute('data-bd-pool-empty', '1'); host.appendChild(q); return; }
      var canDrag = this.may(FACE.drag.verb);
      // THE POOL IN THE STOPS' FORM (his chair, s52 leg 7 act (a), 2026-09-14: "the pool's cards should be in the same display
      // list form as Place or Sequence"): one row per card -- the account, its window and buffer at the right, the service under,
      // the machine's word under that; an exception marked at its left edge, the card in hand lit like a stop; no band card here
      // (the band's card is a 20rem-wide tile for a row of tiles; in a column that width became its height)
      s.pool.forEach(function (w) {
        var on = s.inHand === w.work_order_id;
        var card = el('div', 'bd-pool-row bd-card--p' + (w.exception ? ' bd-pool-row--x' : '') + (on ? ' bd-pool-row--on' : ''));
        card.setAttribute('data-wo', w.work_order_id);
        if (s.openWo === w.work_order_id) card.setAttribute('data-open', '1');
        if (on) card.setAttribute('data-in-hand', '1');
        var acct = el('span', 'bd-pool-acct'); acct.appendChild(el('b', null, w.account_name + (w.site && w.site !== w.account_name ? ' / ' + w.site : ''))); card.appendChild(acct);
        var nn = el('span', 'bd-pool-n', 'buffer ' + w.buffer_days + (w.window ? ' · ' + w.window : ''));
        if (w.late) { nn.appendChild(document.createTextNode(' ')); nn.appendChild(el('span', 'bd-late', 'LATE')); }
        card.appendChild(nn);
        card.appendChild(el('div', 'bd-pool-work', w.service));
        var why = el('div', 'bd-pool-why', (w.late ? 'past its window' : (w.reason ? 'left in the pool: ' + String(w.reason).replace(/_/g, ' ') : 'ready, its window ahead')) + (w.zone ? ' · ' + w.zone : ''));
        why.setAttribute('data-bd-reason', String(w.reason || ''));
        if (w.exception) { var top = el('span', 'bd-top3', ' · ' + (w.candidates ? 'cheapest: ' + w.top_three : String(w.top_three || 'no day in the horizon can take it'))); top.setAttribute('data-bd-top3', String(w.candidates || 0)); why.appendChild(top); }
        card.appendChild(why);
        // a click takes the card IN HAND: the cost reads on the list's head, the four things open, Place here beside them
        card.addEventListener('click', function () { self.takeInHand(w.work_order_id); });
        if (canDrag) {
          card.draggable = true;
          card.addEventListener('dragstart', function (e) { e.dataTransfer.setData('text/plain', w.work_order_id); e.dataTransfer.effectAllowed = 'move'; s.dragging = w.work_order_id; self.readCost(w.work_order_id); });
          card.addEventListener('dragend', function () { s.dragging = null; self.renderSitCost(); });
        } else card.title = 'closed to your role';
        if (on) {
          if (canDrag) {
            var place = el('button', 'bd-btn bd-btn--primary bd-place-here', 'Place here');
            place.type = 'button'; place.setAttribute('data-bd-place-here', w.work_order_id); place.title = 'the same door as a drop on the list';
            place.addEventListener('click', function (e) { e.stopPropagation(); self.sitDrop(w.work_order_id); });
            card.appendChild(place);
          }
          if (s.openWo === w.work_order_id) self.fillPoolDetail(w, card);
        }
        host.appendChild(card);
      });
    }
    takeInHand(woId) {
      var s = this.sitting; if (!s) return;
      if (s.inHand === woId) { s.openWo = s.openWo === woId ? null : woId; }
      else { s.inHand = woId; s.openWo = woId; }
      this.renderSitPool(); this.renderSitCost();
      this.readCost(woId);
    }
    // THE DROP inside the sitting (Q10 amended; Q15 part 5): the same door, called silently; inside the criteria it places;
    // the exception opens the panel in the sheet; a refusal keeps the card with the door's words
    async sitDrop(woId) {
      var s = this.sitting; if (!s) return;
      var w = s.pool.filter(function (x) { return x.work_order_id === woId; })[0];
      if (!w) return;
      s.panel = null; s.out = 'Placing ' + w.account_name + ' on ' + s.day.route_date + ' with ' + s.day.technician + '...'; s.bad = false;
      this.renderSitPanel(); this.renderSitOut();
      var r = await this.rpc(FACE.drag.function, this.doorBody(w, s.day, SILENT_REASON, null));
      if (!this.sitting || this.sitting !== s) return;
      if (r.ok) {
        s.acts++; s.inHand = null; s.openWo = null; delete s.costs[woId];
        s.out = 'Placed ' + w.account_name + ' -- inside the criteria, no question; the run row (kind override) carries the filter\'s reason (' + SILENT_REASON + ').'; s.bad = false;
        await this.loadSitting();
      } else if (r.exception) {
        s.out = null; s.panel = { wo: w, cause: r.words, out: null, bad: false };
        this.renderSitOut(); this.renderSitPanel();
        var p = this.sheetQ('[data-bd-sit-panel]'); if (p && p.scrollIntoView) p.scrollIntoView({ block: 'nearest' });
      } else {
        s.out = 'Refused: ' + r.words; s.bad = true;
        this.renderSitOut();
      }
    }
    // THE EXCEPTION PANEL inside the sheet: the door's cause, the human's reason (the canned list, the customer's request preselected, OTHER with a note)
    renderSitPanel() {
      var self = this, s = this.sitting; var host = this.sheetQ('[data-bd-sit-panel]'); if (!host) return;
      clear(host);
      if (!s.panel) { host.hidden = true; return; }
      host.hidden = false;
      var w = s.panel.wo, d = s.day;
      host.appendChild(el('p', 'bd-panel-h', 'Place ' + w.account_name + ': ' + w.service + ' on ' + d.weekday + ' ' + d.route_date + ' with ' + d.technician + ' -- the exception'));
      var cause = el('p', 'bd-panel-cause', 'The door says: ' + (s.panel.cause || 'outside the criteria'));
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
      place.addEventListener('click', function () { self.sitAnswer(sel.value, note.value); });
      var cancel = el('button', 'bd-btn bd-btn--ghost', 'Not this day');
      cancel.type = 'button'; cancel.setAttribute('data-bd-cancel', '1');
      cancel.addEventListener('click', function () { s.panel = null; self.renderSitPanel(); });
      acts.appendChild(place); acts.appendChild(cancel);
      acts.appendChild(el('span', 'bd-muted', 'a hand placement, kind override, with its delta; your reason rides the run row for the Performance module'));
      host.appendChild(acts);
      var out = el('div', 'bd-panel-out' + (s.panel.bad ? ' is-bad' : ''), s.panel.out || '');
      out.setAttribute('data-bd-panel-out', '1');
      out.hidden = !s.panel.out;
      host.appendChild(out);
    }
    // the human ANSWERS the exception with a reason
    async sitAnswer(reason, note) {
      var s = this.sitting; if (!s || !s.panel) return;
      var w = s.panel.wo;
      s.panel.out = 'Placing...'; s.panel.bad = false; this.renderSitPanel();
      var r = await this.rpc(FACE.drag.function, this.doorBody(w, s.day, reason, note));
      if (!this.sitting || this.sitting !== s) return;
      if (r.ok) {
        s.acts++; s.panel = null; s.inHand = null; s.openWo = null; delete s.costs[w.work_order_id];
        s.out = 'Placed ' + w.account_name + ' (' + (reason || 'no reason') + ') -- the exception answered; the run row, kind override, carries your reason.'; s.bad = false;
        this.renderSitPanel();
        await this.loadSitting();
      } else {
        s.panel.out = (r.exception ? 'Still the exception: ' : 'Refused: ') + r.words; s.panel.bad = true;
        this.renderSitPanel();
      }
    }
    // THE FOOTER'S BUTTONS in the controls' own colours: RELEASE (ghost) or the stamp; CANCEL (ghost); SAVE (primary)
    renderSitFoot() {
      var self = this, s = this.sitting, d = s.day; var host = this.sheetQ('[data-bd-sit="foot"]'); if (!host) return; clear(host);
      var note = el('span', 'bd-sheet-note', s.loading ? '' : (s.acts ? plural(s.acts, 'act') + ' written through the door this sitting' : 'nothing written yet this sitting')); note.setAttribute('data-bd-sit-acts', String(s.acts));
      host.appendChild(note);
      if (this.isReleased(d)) { var st = el('span', 'bd-receipt', 'released ' + (d.released && d.released !== '-' ? d.released : '')); st.setAttribute('data-bd-sit-released', '1'); host.appendChild(st); }
      else if (FACE.release && this.may(FACE.release.verb) && d.state === 'draft') {
        var rel = el('button', 'bd-btn bd-btn--ghost', 'Release'); rel.type = 'button'; rel.setAttribute('data-bd-sit-release', '1');
        rel.title = 'this schedule through ' + FACE.release.function + ' -- sequenced first when no order stands, the promises written';
        rel.addEventListener('click', function () { self.sitRelease(); });
        host.appendChild(rel);
      }
      if (SITTING && SITTING.cancel) {
        var can = el('button', 'bd-btn bd-btn--ghost', 'Cancel'); can.type = 'button'; can.setAttribute('data-bd-sit-cancel', '1');
        can.title = 'every run on this schedule since the sitting opened, undone newest first in one act (' + SITTING.cancel.function + ')';
        can.addEventListener('click', function () { self.sitCancel(); });
        host.appendChild(can);
      }
      var save = el('button', 'bd-btn bd-btn--primary', 'Save'); save.type = 'button'; save.setAttribute('data-bd-sit-save', '1');
      save.title = s.proposal && MAP_ACCEPT ? 'accepts your order through ' + MAP_ACCEPT.function + ' and closes the sitting' : 'closes the sitting; every act was written through its door as you worked';
      if (s.proposal) save.setAttribute('data-bd-proposal', String(s.proposal.run));
      save.addEventListener('click', function () { self.sitSave(); });
      host.appendChild(save);
    }
    async sitRelease() {
      var s = this.sitting; if (!s) return;
      // act (c): a pending hand order is accepted before the release, so the promises carry her order
      var acc = await this.acceptProposal();
      if (acc === false || !this.sitting || this.sitting !== s) return;
      s.out = 'Releasing ' + s.day.technician + '\'s ' + s.day.route_date + (acc ? ' with your order accepted' : '') + '...'; s.bad = false; this.renderSitOut();
      var r = await this.rpc(FACE.release.function, { p_route: s.route, p_by: this.byWord() });
      if (!this.sitting || this.sitting !== s) return;
      if (r.ok) {
        var n = typeof r.data === 'number' ? r.data : (r.data && r.data.promises);
        s.out = 'Released ' + s.day.technician + '\'s ' + s.day.route_date + (n !== undefined && n !== null ? ' -- ' + plural(n, 'promise') + ' written' : '') + '.'; s.bad = false;
        await this.loadSitting();
      } else { s.out = 'Release refused: ' + r.words; s.bad = true; this.renderSitOut(); }
    }
    async sitCancel() {
      var s = this.sitting; if (!s || !SITTING || !SITTING.cancel) return;
      s.out = 'Undoing this sitting\'s runs...'; s.bad = false; this.renderSitOut();
      var r = await this.rpc(SITTING.cancel.function, { p_route: s.route, p_stamp: s.stamp, p_by: this.byWord() });
      if (!this.sitting || this.sitting !== s) return;
      if (r.ok) { var n = typeof r.data === 'number' ? r.data : 0; await this.closeSitting('Cancelled: ' + plural(n, 'run') + ' on ' + s.day.technician + '\'s ' + s.day.route_date + ' undone in one act, newest first -- the placements back to the pool.'); }
      else { s.out = 'Cancel refused: ' + r.words + ' -- the sitting stays open; every act so far stands as written.'; s.bad = true; this.renderSitOut(); }
    }
    async sitSave() {
      var s = this.sitting; if (!s) return;
      // act (c): SAVE accepts the pending hand order through its door; a refusal keeps the sitting open with the door's words
      var acc = await this.acceptProposal();
      if (acc === false || !this.sitting || this.sitting !== s) return;
      await this.closeSitting('Saved: ' + s.day.technician + '\'s ' + s.day.route_date + ' -- ' + plural(s.acts, 'act') + ' written through the door this sitting' + (acc ? '; your order accepted (the stops re-sequenced, the drive and the flags re-read)' : '') + '; the card and the heading re-read.');
    }
    // the sheet closes; the board's card and the heading's totals RE-READ (his item 8)
    async closeSitting(note) {
      var s = this.sitting;
      this.sitting = null;
      this.dropMap(s);
      this.renderSitting();
      this.receipt(note);
      await this.load();
    }
  }

  if (typeof window !== 'undefined') {
    window.RouteBoardBlueprintUI = RouteBoardBlueprintUI;
    window.PatternRegistry = window.PatternRegistry || {};
    window.PatternRegistry['d4000000-0000-0000-0000-000000000001'] = window.RouteBoardBlueprintUI;
  }
})();
