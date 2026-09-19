/**
 * Route Board - Generated Blueprint UI (THE BOARD, board-001 2.3.0 -- THE PLANNING JOB; UNASSIGN A STOP, WITH A REASON)
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
 *
 * 2.1.0 (SJ s52 leg 11, 2026-09-16; THE SITTING AFTER HIS WALK on DEMO -- the mockup first, three rounds at his eye, his
 * fifteen calls agreed; cards 41, 46-49): THE ROUTE HEADER IS THE ROUTE'S STATE (the technician, the day, the state, the
 * zone; the scorecard under the name, re-read after every act; no sentence and no clock -- the teaching line behind a help
 * mark); THREE LEVELS IN THREE PLACES (the ROUTE menu at the header's right with Release, the later route acts' slot; the
 * SITTING's Cancel and Save beside it, gray until an act is written or an order proposed, a close mark for a sheet with
 * nothing to keep; the STOP's acts on its row); POOL | MAP on the pane it switches; THE STOP ROW two lines (the number, the
 * promised window from the stops read's window_text, the account / the service, the mandate word, "by hand") and a third
 * only when the place is not the account's name; ONE MOTION TO PLACE (the drag; the cost read while the card is over the
 * list; the panel after the decision) -- a click on a stop or a pool card READS: the facts, THE HISTORY (`history`: the
 * last three services, two rows each, the technician's note under), the account record in its own tab (`account_route`) --
 * and never places; the row's own button retired; THE WORDS "Add to route" and "Cancel", no reason preselected, the button
 * dark until one is chosen, the origin row grayed while the panel stands; THE BOARD'S OPEN CALLS THE SWEEP (`open`,
 * ensure_swept once per mount before the first read, under the busy mark -- card 41).
 *
 * 2.2.0 (SJ s52 leg 12, 2026-09-17; THE SITTING AS A ROUTE-BUILDING TOOL -- the mockup first, five rounds at his eye,
 * cards 53-60, Q12; his frame: "the sitting builds routes fast, thirty a period; records are the exception's door;
 * just-in-time info -- access to vital data without cluttering the screen"): THE HEADER IS A DECLARED LINE (`summary`:
 * the pairs the instance names from the days read's row, one dense line of label and value, the days read's flag as a
 * gray aside; a client adds a column, the face draws one more pair; not tiles); THE ROWS left-justified (lines 2 and 3
 * under the name); the chip reads the mandate's kind alone, "by hand" plain; NO YEARS on the sitting; THE ONE-LINK OPEN
 * (a click on a stop or a pool card opens one line, "Details" -- no facts, no history, no other link; `history` and
 * `pool_route` unread); THE DETAILS SHEET (`details`: the account's own record narrowed to the row's service location,
 * the shell's page framed bare over the Pool | Map pane, one close mark, the stops untouched, the whole record's link at
 * its foot); THE TWO LISTS IN ONE SHAPE (a pool row in the stops' grid: the buffer, the account, the service, the address
 * when it differs; the "left in the pool" line retired; the stripe and a red chip ONLY where the reason says something);
 * THE FIT COLUMN AND THE SORT (`fit`: what it costs to place the card on this route in dollars; ACCOMMODATED ON THIS
 * ROUTE first by cost, a cut line, the rest by buffer with the refusal's word -- Q12); THE HEADER'S THREE ACTS (card 60:
 * the Route menu lit at the open and gray while unsaved changes stand; Cancel always lit, the way back to the board, the
 * close mark retired; Save gray until any change and lit after); the proposal line beside Pool | Map until Save.
 *
 * 2.3.0 (SJ s52 leg 10, 2026-09-19; UNASSIGN A STOP, WITH A REASON -- Q7 RULED (a) 2026-09-15, his added MVP scenario:
 * "on the tech tearsheet, we must have the ability to unassign a W.O. (stop), with a reason"; the mockup first at his eye;
 * Q15 RULED (a)): on a DRAFT day the opened stop line reads "Details" and "Unassign" (THE LEAN OPEN kept: one line, two
 * links; on a released day "Details" alone -- a promise is not undone, the recall is leg 8's); Unassign opens the panel IN
 * THE SHEET UNDER THE ROW, the drop's twin ("Take <account> off this route: <day> with <technician>"; the client's own list
 * from `unassign.reasons`, no reason preselected, OTHER with a note; "Unassign" dark until a reason is chosen; "Cancel";
 * the origin row gray) and calls `unassign.function` (unassign_stop: the standing placement undone through the undo door,
 * the reason on the undo row); the stops, the pool and the header re-read live, the act counted; the returned card reads
 * "unassigned: <reason>" as its chip until the next sweep re-reasons it. THE UNASSIGN STANDS: the sitting's Cancel does not
 * put it back (row 67's law: an undo is not undone); the way back is the drag from the pool. A 2.2.0 row draws no Unassign.
 * Blueprint ID: d4000000-0000-0000-0000-000000000001
 * Pattern: BOARD
 *
 * Implements Pattern Interface Contract (JBA-003)
 * - mount(container) / unmount() / onContext(context) / getMetadata() / setRecordId(id)
 * The board takes no record: setRecordId is accepted and ignored (the track is the selection).
 */

(function() {
  'use strict';

  var FACE = {"schema":"services_template","fit":"sitting_fit","map":{"order":{"verb":"sequence","function":"sequence_by_hand"},"accept":{"function":"accept_run"},"function":"schedule_geojson"},"acts":[{"verb":"place_week","route":"/operations/scheduling/:id/place-week","scope":"week","title":"Place the week"},{"verb":"sequence","route":"/operations/scheduling/:id/sequence","scope":"day","title":"Sequence"},{"verb":"release","route":"/operations/scheduling/:id/release","scope":"day","title":"Release"}],"days":"v_board_days","drag":{"verb":"place","confirm":"Place {account} on {date} with {technician}?","function":"place_on_day","silent_reason":"route_filter","default_reason":"customer_asked"},"open":{"function":"ensure_swept"},"pool":"work_order_due_list","unit":"stops","areas":"geographic_area","stops":"v_schedule_stops","zones":"service_zone","detail":"v_board_stop_detail","groups":"v_board_groups","period":{"key":"policy.planning_period","default":"week","function":"set_tenant_policy","lead_key":"policy.planning_lead"},"desktop":{"refusal":"The board is a desk's screen. Open it on a screen at least 1024 pixels wide.","min_width":1024},"details":"/accounts/:id?location=:location","reasons":"v_override_reasons","release":{"verb":"release","function":"release_schedule"},"sitting":{"cost":{"function":"drop_cost"},"cancel":{"function":"undo_since"}},"summary":[{"of":"room","flag":"overloaded by","label":"stops","values":[{"unit":"count","column":"placed"}]},{"of":"minimum","flag":"under the minimum","label":"revenue","values":[{"unit":"money","column":"revenue"}]},{"label":"mandated","values":[{"unit":"count","column":"mandated"}]},{"label":"drive","values":[{"unit":"mi","column":"drive_miles"},{"unit":"min","column":"drive_minutes"}]}],"registry":"tenant_property","unassign":{"verb":"place","reasons":"v_unassign_reasons","function":"unassign_stop"},"unit_key":"capacity.unit","day_route":"/operations/scheduling/:id","days_route":"/operations/scheduling/days","exceptions":"v_board_exceptions","period_read":"v_board_period","pool_detail":"v_board_pool_detail","release_all":{"verb":"release","function":"release_day"},"weekdays_key":"calendar.operating_weekdays","account_route":"/accounts/:id","personas":{"FIELD_TECH":{"fields":null,"readonly":[],"filters":{"status":["active"]},"actions":["view","search"],"seated":false},"GENERIC_USER":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter"],"seated":false},"OPS_MANAGER":{"fields":["route_name","status","route_date","weekday","technician","template","state","room","placed","slack","minutes","released"],"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"ADMIN_FULL":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","delete","export","bulk_actions","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"CUSTOMER_SERVICE":{"fields":["route_name","status","route_date","weekday","technician","template","state","room","placed","slack","minutes","released"],"readonly":[],"filters":{"status":["active"]},"actions":["view","search","sort","filter","edit","log_call","schedule","cancel","defer","place"],"seated":false},"SERVICE_MANAGER":{"fields":["route_name","status","route_date","weekday","technician","template","state","room","placed","slack","minutes","released"],"readonly":[],"filters":{"status":["active"]},"actions":["view","search","sort","filter","schedule","assign_tech","create","cancel","defer","place","place_week","sequence","release"],"seated":true}}};
  var SKELETON = "<!-- Route Board -- THE BOARD (board-001 2.3.0; s52 leg 10 UNASSIGN A STOP, WITH A REASON; s52 leg 6 act (a): READING E, THE PLANNING JOB, passed whole at his word\n     2026-09-12 \"I think it looks great! I approve Reading E now\"; act (b): THE SITTING, a tearsheet over the board;\n     s52 leg 11: THE SITTING AFTER HIS WALK, the mockup first; s52 leg 12: THE SITTING AS A ROUTE-BUILDING TOOL).\n     Generated; do not edit. The shell mounts into an EMPTY host (the s37 skeleton lesson): this markup is written\n     by board.js FIRST, then filled. -->\n<div class=\"bd\" data-blueprint=\"d4000000-0000-0000-0000-000000000001\">\n  <header class=\"bd-head\">\n    <span class=\"bd-modes\" data-bd=\"modes\"></span>\n    <h2 class=\"bd-title\" data-bd=\"title\">The board</h2>\n    <span class=\"bd-sub\" data-bd=\"sub\"></span>\n    <span class=\"bd-acts\" data-bd=\"acts\"></span>\n  </header>\n  <nav class=\"bd-track\" data-bd=\"track\" aria-label=\"The days track\"></nav>\n  <div class=\"bd-jump\" data-bd=\"jump\"></div>\n  <p class=\"bd-verdict\" data-bd-out=\"1\" hidden></p>\n  <div class=\"bd-dayhead\" data-bd=\"dayhead\"></div>\n  <section class=\"bd-band\" data-bd=\"band\" aria-label=\"The exceptions\"></section>\n  <div class=\"bd-groups\" data-bd=\"groups\"></div>\n  <p class=\"bd-note\" data-bd=\"note\"></p>\n  <section class=\"bd-sitting\" data-bd=\"sitting\" aria-label=\"The sitting\" hidden></section>\n</div>\n";
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
  // 2.2.0 (THE LEAN OPEN): `history` and `pool_route` are UNREAD -- a click opens one link; the sheet reads the record
  var ACCOUNT_ROUTE = FACE.account_route || null;          // 2.1.0: the account's own page; 2.2.0: the link at the Details sheet's foot; absent = no link
  var OPEN = FACE.open || null;                            // 2.1.0 (card 41): the sweep the board's open calls once per mount; absent = the face reads what stands
  // 2.2.0 (card 56): THE DECLARED LINE -- the pairs the route header shows; a 2.1.0 row draws the four defaults
  var SUMMARY = Array.isArray(FACE.summary) && FACE.summary.length ? FACE.summary : [
    { label: 'stops', values: [{ column: 'placed', unit: 'count' }], of: 'room', flag: 'overloaded by' },
    { label: 'revenue', values: [{ column: 'revenue', unit: 'money' }], of: 'minimum', flag: 'under the minimum' },
    { label: 'mandated', values: [{ column: 'mandated', unit: 'count' }] },
    { label: 'drive', values: [{ column: 'drive_miles', unit: 'mi' }, { column: 'drive_minutes', unit: 'min' }] }
  ];
  var FIT = FACE.fit || null;                              // 2.2.0 (card 58, Q12): the fit read; absent = the pool by buffer, no cost column
  var DETAILS = FACE.details || null;                      // 2.2.0 (card 55): the record's route framed in the pane; absent = no Details link
  var UNASSIGN = FACE.unassign || null;                    // 2.3.0 (leg 10, Q7): the door and the reasons' read; absent = no Unassign on the row
  var UNASSIGN_VERB = (UNASSIGN && UNASSIGN.verb) || (FACE.drag && FACE.drag.verb) || 'place';   // who may place a stop may take it off
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
  // 2.2.0 (his call: no years in this module -- "they have the year info in their planning window"): a date as MM-DD; a day as "mon 09-21"
  function mmdd(s) { var t = String(s || ''); return /^\d{4}-\d\d-\d\d/.test(t) ? t.slice(5, 10) : t; }
  function dayWord(d) { return ((d && d.weekday) || '') + ' ' + mmdd(d && d.route_date); }
  // 2.2.0 (card 56): a pair's value in its unit
  function unitWord(v, unit) {
    var n = Number(v);
    if (unit === 'money') return money(isFinite(n) ? n : 0);
    if (unit === 'mi') return miles(v);
    if (unit === 'min') return mins(v);
    if (unit === 'text') return v === null || v === undefined ? '-' : String(v);
    return isFinite(n) ? String(Math.round(n)) : (v === null || v === undefined ? '-' : String(v));
  }

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
      this.unassignReasons = [];   // 2.3.0 (leg 10): the client's list for a stop coming off, read once
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
      this.swept = false;           // 2.1.0: the open's sweep called once per mount (card 41)
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
      this.container = null; this.days = []; this.groups = []; this.exceptions = []; this.period = null; this.registryRead = false; this.swept = false;
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
      // 2.1.0 (card 41; Q1: the board's open is the clock): THE BOARD'S OPEN CALLS THE SWEEP once per mount, before the first
      // read, under the busy mark -- a sweep that ran at this open is said; one that had run today is silent; a refusal is said
      if (OPEN && !this.swept) {
        this.swept = true;
        var tenantId = this.context && this.context.tenant_id;
        if (tenantId && !/^__/.test(String(tenantId))) {
          var sw = await this.rpc(OPEN.function, { p_tenant: tenantId });
          if (seq !== this._loadSeq) return;
          this.container.setAttribute('data-bd-swept', sw.ok ? (sw.data && sw.data.already_swept === false ? 'ran' : 'stood') : 'refused');
          if (sw.ok && sw.data && sw.data.already_swept === false) this.say('The machine has run for today at this open: ' + plural(Number(sw.data.placed) || 0, 'placement') + ', ' + (Number(sw.data.left) || 0) + ' left in the pool with a reason (' + OPEN.function + ').', false);
          else if (!sw.ok) this.say('The machine did not run at this open: ' + sw.words + ' -- the board reads what stands.', true);
        }
      }
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
      // 2.3.0 (leg 10): the reasons a stop comes off -- the client's own list (v_unassign_reasons), read once
      if (UNASSIGN && !this.unassignReasons.length) {
        var us = await this.tenantOf(this.from(UNASSIGN.reasons).select('*'));
        if (seq !== this._loadSeq) return;
        if (us.error) this.fail(UNASSIGN.reasons, us.error.message); else this.unassignReasons = us.data || [];
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
      if (f.mandated) row('', f.mandated);
      // 2.2.0 (THE LEAN OPEN): the band's card opens with the four things alone -- the history and the work order's page are
      // the Details sheet's on the sitting (`history` and `pool_route` unread)
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
                       // 2.2.0: the fit read's rows by work order (card 58); the Details sheet standing over the pane (card 55)
                       fit: null, details: null,
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
      // 2.2.0: a band row carries no account or place id; the due list's row lends them (the Details link needs both)
      var lend = function (p) { var r = byId[p.work_order_id]; if (!r) return; if (!r.account_id) r.account_id = p.account_id || null; if (!r.service_location_id) r.service_location_id = p.service_location_id || null; };
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
          put({ work_order_id: p.work_order_id, account_name: p.account_name, account_id: p.account_id || null, service_location_id: p.service_location_id || null, site: p.site, service: p.service, buffer_days: p.buffer_days, late: !!p.late, reason: p.late ? 'LATE' : (p.pool_reason || null), zone: p.zone, top_three: null, candidates: null, window: p.service_window, exception: false }, false);
        });
        rows.forEach(lend);
      }
      s.pool = order.map(function (id) { return byId[id]; });
      // 2.2.0 (card 58; Q12 "accommodated on this route"): THE FIT READ -- every ready card priced against this route; the pool
      // ordered accommodated-first by cost, then the rest by buffer (a 2.1.0 row keeps the buffer order alone)
      s.fit = null;
      if (FIT && s.pool.length) {
        var fr = await this.rpc(FIT, { p_route: route });
        if (stale()) return;
        if (fr.ok && Array.isArray(fr.data)) { s.fit = {}; fr.data.forEach(function (f) { s.fit[f.work_order_id] = f; }); }
        else { s.out = FIT + ': ' + (fr.words || 'the fit could not be read'); s.bad = true; }
      }
      if (s.fit) {
        var fitOf = function (w) { return s.fit[w.work_order_id] || null; };
        s.pool.sort(function (a, b) {
          var fa = fitOf(a), fb = fitOf(b);
          var aa = fa && fa.accommodated ? 0 : 1, ab = fb && fb.accommodated ? 0 : 1;
          if (aa !== ab) return aa - ab;
          if (aa === 0) { var da = Number(fa.delta), db = Number(fb.delta); if (isFinite(da) && isFinite(db) && da !== db) return da - db; }
          var ba = Number(a.buffer_days), bb = Number(b.buffer_days); if (isFinite(ba) && isFinite(bb) && ba !== bb) return ba - bb;
          return String(a.account_name).localeCompare(String(b.account_name));
        });
      }
      if (s.inHand && !byId[s.inHand]) s.inHand = null;
      if (s.openWo && !byId[s.openWo]) s.openWo = null;
      if (s.openStop && !s.stops.some(function (x) { return x.route_stop_id === s.openStop; })) s.openStop = null;
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
      this.placeDetails();
    }
    // 2.2.0 (card 55): the Details sheet stands exactly over the right pane -- measured, so the stops never move
    placeDetails() {
      var s = this.sitting; var dp = this.sheetQ('[data-bd-sit="details"]'); if (!s || !dp || dp.hidden) return;
      var pane = this.sheetQ(MAP && s.mode === 'sequence' ? '[data-bd-sit="mappane"]' : '[data-bd-sit="poolpane"]'); if (!pane) return;
      dp.style.left = pane.offsetLeft + 'px'; dp.style.width = pane.offsetWidth + 'px'; dp.style.top = pane.offsetTop + 'px'; dp.style.height = pane.offsetHeight + 'px';
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
        // 2.1.0: the scorecard stands in the route header (renderSitHead), not over the list
        var lh = el('div', 'bd-sheet-listh'); lh.setAttribute('data-bd-sit', 'listh'); list.appendChild(lh);
        var out = el('div', 'bd-sheet-out'); out.setAttribute('data-bd-sit-out', '1'); list.appendChild(out);
        var panel = el('section', 'bd-panel'); panel.setAttribute('data-bd-sit-panel', '1'); panel.hidden = true; list.appendChild(panel);
        // 2.3.0 (his walk on DEMO 2026-09-19, the second fault): the panel stands INSIDE the asked stop's row while an unassign
        // asks, and the row's own click toggles the open line and redraws the list -- so every click on the select or the note
        // destroyed the panel under the hand (the machine's chair set values and never clicked; card 73's class). A click or a
        // press inside the panel is the panel's own and goes no further up.
        ['click', 'mousedown', 'pointerdown', 'dragstart'].forEach(function (evName) { panel.addEventListener(evName, function (e) { e.stopPropagation(); }); });
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
        // 2.2.0 (card 55): THE DETAILS SHEET, laid over the right pane when a row's Details is clicked (placeDetails measures it)
        var dPane = el('div', 'bd-sheet-details'); dPane.setAttribute('data-bd-sit', 'details'); dPane.hidden = true;
        body.appendChild(dPane);
        sheet.appendChild(body);
        // 2.1.0 (his call 2): the footer retired -- the route's and the sitting's acts stand in the header (renderSitFoot renders there)
        sheet.addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (s.details) { self.closeDetails(); } else if (s.panel) { s.panel = null; self.renderSitPanel(); self.renderSitStops(); self.renderSitPool(); } else if (s.openWo || s.openStop) { s.openWo = null; s.openStop = null; self.renderSitPool(); self.renderSitStops(); } } });
        host.appendChild(sheet);
        s.sheet = sheet;
        this.placeSheet();
      }
      this.renderSitHead(); this.renderSitCard(); this.renderSitListHead(); this.renderSitOut(); this.renderSitPanel(); this.renderSitStops(); this.renderSitPool(); this.renderSitPanes(); this.renderSitMap(); this.renderSitFoot(); this.renderSitDetails();
    }
    // 2.1.0 (his walk, calls 1 and 3): THE ROUTE HEADER IS THE ROUTE'S STATE -- the technician, the day, the state, the zone;
    // the scorecard under the name, re-read after every act; no sentence and no clock on the sheet (the teaching line behind a
    // help mark); the route's and the sitting's acts at the right (renderSitFoot renders into the acts host)
    renderSitHead() {
      var s = this.sitting, d = s.day; var host = this.sheetQ('[data-bd-sit="head"]'); if (!host) return; clear(host);
      var left = el('div', 'bd-sheet-hl');
      // 2.2.0: no year on the sitting ("mon 09-21")
      var t = el('h3', 'bd-sheet-t', d.technician + ' · ' + dayWord(d));
      t.setAttribute('data-bd-sit-title', d.route_id);
      t.appendChild(document.createTextNode(' '));
      t.appendChild(el('span', 'bd-muted', '· ' + d.state + (d.zones ? ' · ' + d.zones : '')));
      var help = el('button', 'bd-help', '?'); help.type = 'button'; help.setAttribute('data-bd-sit-help', '1'); help.setAttribute('aria-label', 'how the sitting works');
      help.title = s.mode === 'sequence'
        ? 'MAP: the day on the map, the stops as pins joined in order, the start and the end marked. Drag a row in the list (or step it) into your order and the door prices it live against the machine\'s -- a proposal until Save accepts it. Cancel undoes this sitting\'s runs in one act.'
        : 'THE SITTING: the stops beside the pool. Drag a pool card onto the list: inside the criteria it lands with no question; on the exception the panel asks your reason; the door refuses what cannot be done. The cost reads on the list\'s head as the card crosses it. A click on a row reads its facts and its history and places nothing. Save keeps what was written; Cancel undoes this sitting\'s runs in one act.';
      t.appendChild(help);
      left.appendChild(t);
      var card = el('div', 'bd-sheet-card bd-sheet-card--head'); card.setAttribute('data-bd-sit-card', '1'); left.appendChild(card);
      host.appendChild(left);
      var acts = el('div', 'bd-sheet-acts'); acts.setAttribute('data-bd-sit', 'acts'); host.appendChild(acts);
    }
    // 2.1.0 (his call 4): POOL | MAP stands in the pane's head, on the thing it switches (the words Place / Sequence retired)
    sitSwitch() {
      var self = this, s = this.sitting;
      var sw = el('span', 'bd-modes bd-sit-modes'); sw.setAttribute('data-bd-sit-modes', '1');
      if (!MAP) { sw.appendChild(el('b', null, 'THE POOL')); return sw; }
      [['place', 'Pool'], ['sequence', 'Map']].forEach(function (m) {
        var b = el('button', 'bd-mode' + (s.mode === m[0] ? ' bd-mode--on' : ''), m[1]);
        b.type = 'button'; b.setAttribute('data-bd-sit-mode', m[0]);
        b.title = m[0] === 'place' ? 'POOL: the pool beside the stops; a card dragged onto the list goes through the door' : 'MAP: the day on the map; drag the order in the list, the door prices it';
        b.addEventListener('click', function () { self.setSitMode(m[0]); });
        sw.appendChild(b);
      });
      return sw;
    }
    setSitMode(m) {
      var s = this.sitting; if (!s || (m !== 'place' && m !== 'sequence') || s.mode === m) return;
      s.mode = m; s.dragStop = null; s.dragging = null;
      this.renderSitHead(); this.renderSitCard(); this.renderSitListHead(); this.renderSitStops(); this.renderSitPool(); this.renderSitMapHead(); this.renderSitPanes(); this.renderSitFoot();
      if (m === 'sequence') this.openMap();
    }
    // the right pane by mode: the pool, or the map (the map re-measured when it returns)
    renderSitPanes() {
      var s = this.sitting; var pool = this.sheetQ('[data-bd-sit="poolpane"]'), map = this.sheetQ('[data-bd-sit="mappane"]'); if (!pool || !map) return;
      var seq = MAP && s.mode === 'sequence';
      pool.hidden = !!seq; map.hidden = !seq;
      if (seq && s.map) { try { s.map.resize(); } catch (ignored) { /* the map follows the pane */ } }
      this.placeDetails();   // 2.2.0: the Details sheet follows the pane it covers
    }
    // 2.2.0 (card 56; his word "our mission is to design the most flexible format for route header data"): THE HEADER IS A
    // DECLARED LINE -- the instance's pairs, each a label over a value read from the days read's row ("X of Y" when the pair
    // names `of`), the matching flag drawn whole as the gray aside; the drive pair's aside while a hand order stands unsaved is
    // the proposal; no tiles, no bar, no heading -- the route's current state, re-read after every act
    renderSitCard() {
      var s = this.sitting, d = s.day; var host = this.sheetQ('[data-bd-sit-card]'); if (!host) return; clear(host);
      var flags = this.flagsOf(d);
      var line = el('div', 'bd-hline'); line.setAttribute('data-bd-hline', String(SUMMARY.length));
      var prop = this.proposalWords();
      SUMMARY.forEach(function (p) {
        var pair = el('span', 'bd-pair'); pair.setAttribute('data-bd-pair', p.label);
        pair.appendChild(el('i', 'bd-pair-l', p.label));
        var vals = (p.values || []).map(function (v) { return unitWord(d[v.column], v.unit || 'count'); });
        var text = vals.join(' · ');
        if (p.of) { var u0 = (p.values && p.values[0] && p.values[0].unit) || 'count'; text += ' of ' + unitWord(d[p.of], u0); }
        var b = el('b', 'bd-pair-v', text); b.setAttribute('data-bd-value', text); pair.appendChild(b);
        var aside = null;
        if (p.flag) { var hit = flags.filter(function (f) { return String(f).indexOf(p.flag) !== -1; })[0]; if (hit) aside = hit; }
        if (!aside && prop && (p.values || []).some(function (v) { return v.column === 'drive_miles' || v.column === 'drive_minutes'; })) aside = prop.short;
        if (aside) { var u = el('u', 'bd-pair-a', aside); u.setAttribute('data-bd-aside', '1'); pair.appendChild(u); }
        line.appendChild(pair);
      });
      host.appendChild(line);
    }
    // 2.2.0 (card 56): the proposal's words while a hand order stands unsaved -- the aside on the drive pair, the line beside Pool | Map
    proposalWords() {
      var s = this.sitting; if (!s || !s.proposal || !s.proposal.row) return null;
      var row = s.proposal.row, gp = (s.geo && s.geo.properties) || {};
      var dm = Number(row.drive_miles), dn = Number(row.drive_minutes), bm = Number(gp.drive_miles), bn = Number(gp.drive_minutes);
      if (!isFinite(dm)) return { short: 'by hand, priced -- a proposal until Save', long: 'your order priced by the door -- a proposal until Save' };
      var delta = isFinite(bm) ? ' (' + (dm - bm >= 0 ? '+' : '-') + miles(Math.abs(dm - bm)) + (isFinite(dn) && isFinite(bn) ? ', ' + (dn - bn >= 0 ? '+' : '-') + mins(Math.abs(dn - bn)) : '') + ')' : '';
      var machine = isFinite(bm) ? miles(bm) + ' / ' + mins(bn) : 'the machine\'s drive unread';
      return { short: 'by hand ' + miles(dm) + ' · ' + mins(dn) + ', a proposal', long: 'by hand ' + miles(dm) + ' / ' + mins(dn) + ' against the machine\'s ' + machine + delta + ' · a proposal until Save' };
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
      var self = this, s = this.sitting; var host = this.sheetQ('[data-bd-stops]'); if (!host) return;
      // 2.3.0 (leg 10): the panel stands UNDER THE ROW it asks about while an unassign is asked (the mockup at his eye); it goes
      // back to its standing place above the list before the rows are redrawn (the drop's panel stands there)
      var panelHost = this.sheetQ('[data-bd-sit-panel]');
      if (panelHost && panelHost.parentNode !== host.parentNode) host.parentNode.insertBefore(panelHost, host);
      if (panelHost) panelHost.classList.remove('bd-panel--row');   // the row's class goes on again below, for the asked row alone
      clear(host);
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
        // 2.3.0 (leg 10): the origin row grays while the unassign panel asks about it -- the panel is the one lit thing (card 46's rule)
        var asked = !!(s.panel && s.panel.unassign && s.panel.stop && s.panel.stop.route_stop_id === st.route_stop_id);
        var li = el('li', 'bd-stop' + (s.openStop === st.route_stop_id ? ' bd-stop--on' : '') + (canOrder ? ' bd-stop--order' : '') + (asked ? ' bd-stop--asked' : ''));
        li.setAttribute('data-stop', st.route_stop_id); li.setAttribute('data-seq', String(seq));
        if (asked) li.setAttribute('data-bd-origin', '1');
        li.appendChild(el('span', 'bd-stop-seq', String(seq)));
        // 2.1.0 (his calls 5-6): THE PROMISED WINDOW where the eta stood -- the stops read's window_text (the eta through the
        // client's grain; a dash before the day is sequenced; the technician sees ETAs after dispatch); a 2.0.0 row shows its eta
        var winText = st.window_text !== undefined ? (st.window_text || '-') : (st.eta || '-');
        var win = el('span', 'bd-stop-eta bd-stop-win' + (proposed ? ' bd-stop-eta--proposed' : ''), proposed ? '--' : winText);
        win.setAttribute('data-bd-window', proposed ? '' : (st.window_text || ''));
        win.title = proposed ? 'the window is written when your order is accepted (Save)' : ('the promised window' + (st.eta && st.eta !== '-' ? '; the eta ' + st.eta : '; no eta until the day is sequenced'));
        li.appendChild(win);
        // line 1: the account (the place stands in for a 2.0.0 row); line 3 the place only when it is not the account's name
        var acct = el('span', 'bd-stop-place', st.account || st.place || '-'); acct.setAttribute('data-bd-account', st.account || '');
        li.appendChild(acct);
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
        // line 2: the service, THE CHIP (2.2.0: the mandate's kind alone -- "the user will learn that any widget of that color is
        // referring to a mandate"), "by hand" plain when a reason placed it (a 2.0.0 row prints its work orders)
        var l2 = el('div', 'bd-stop-work'); l2.setAttribute('data-bd-line2', '1');
        l2.appendChild(document.createTextNode(st.service !== undefined ? (st.service || '-') : (st.work_orders || '')));
        if (st.mandated) { l2.appendChild(document.createTextNode(' · ')); var mw = el('em', 'bd-mandate', String(st.mandated).replace(/^mandated:\s*/, '')); mw.setAttribute('data-bd-mandated', '1'); mw.title = 'a mandate: ' + String(st.mandated).replace(/^mandated:\s*/, ''); l2.appendChild(mw); }
        if (st.by_hand) { l2.appendChild(document.createTextNode(' · ')); var bh = el('span', 'bd-hand', 'by hand'); bh.setAttribute('data-bd-by-hand', String(st.hand_reason || '1')); bh.title = 'placed by hand' + (st.hand_reason ? ': ' + String(st.hand_reason).replace(/_/g, ' ') : ''); l2.appendChild(bh); }
        li.appendChild(l2);
        if (st.account && st.place && st.place !== st.account) { var l3 = el('div', 'bd-stop-place3', st.place); l3.setAttribute('data-bd-line3', '1'); li.appendChild(l3); }
        li.addEventListener('click', function () { s.openStop = s.openStop === st.route_stop_id ? null : st.route_stop_id; self.renderSitStops(); self.markPin(); });
        // 2.2.0 (THE LEAN OPEN, card 54): a click opens ONE line -- Details; no facts, no history
        if (s.openStop === st.route_stop_id) self.fillDetailsLine(li, st.account_id, st.service_location_id, st.account || st.place, 'stop', st.route_stop_id);
        // 2.3.0 (leg 10): the asked stop carries the panel under its lines
        // (his walk on DEMO 2026-09-19: every later row's else-branch stripped this class again -- the panel fell into the first
        //  column, one word a line; the class is cleared once above the loop, never here)
        if (asked && panelHost) { panelHost.classList.add('bd-panel--row'); li.appendChild(panelHost); }
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
      host.appendChild(this.sitSwitch());   // 2.1.0: POOL | MAP on the pane it switches
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
      // 2.2.0 (card 56): the paragraph above the stops retired -- the price reads on the pane's line and the drive pair's aside
      s.out = null; s.bad = false;
      this.renderSitOut(); this.renderSitCard(); this.renderSitStops(); this.renderSitPool(); this.renderSitFoot(); this.renderSitMap();
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
    // 2.2.0 (THE LEAN OPEN, card 54; his call: "the more we provide on a single-click open is slowing them down... that detail
    // belongs with the phone app"): a click on a stop or a pool card opens ONE line -- "Details" -- and nothing else; the facts,
    // the history and the record are the Details sheet's (card 55). A click never places.
    fillDetailsLine(host, acct, loc, name, kind, key) {
      var self = this, s = this.sitting;
      var line = el('div', 'bd-open'); line.setAttribute('data-bd-open', kind + ':' + key);
      if (DETAILS && loc) {
        var a = document.createElement('a'); a.className = 'bd-details-link'; a.textContent = 'Details'; a.href = '#';
        a.setAttribute('data-bd-details', String(loc)); a.setAttribute('data-bd-details-account', String(acct || ''));
        a.title = 'this location\'s record over the pane; the sitting stays';
        a.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); self.openDetails(acct, loc, name); });
        line.appendChild(a);
        if (s && s.details && s.details.location === loc) line.appendChild(el('span', 'bd-muted', ' open'));
      } else {
        var q = el('span', 'bd-muted', DETAILS ? 'no place on this row -- no details' : 'no Details on this deployment'); q.setAttribute('data-bd-details-none', '1'); line.appendChild(q);
      }
      // 2.3.0 (leg 10, Q7 (a); the mockup at his eye): on a DRAFT day a stop's line grows ONE link beside Details -- "Unassign";
      // the role that may place a stop may take it off; a released day is a promise (no link; the recall is leg 8's)
      if (kind === 'stop' && UNASSIGN && s && s.day && s.day.state === 'draft' && this.may(UNASSIGN_VERB)) {
        var u = document.createElement('a'); u.className = 'bd-details-link bd-unassign-link'; u.textContent = 'Unassign'; u.href = '#';
        u.setAttribute('data-bd-unassign-link', String(key));
        u.title = 'take this stop off the route, with a reason; the work order goes back to the pool as ready';
        u.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); self.askUnassign(key); });
        line.appendChild(u);
      }
      host.appendChild(line);
    }
    // 2.2.0 (card 55, his idea 2026-09-17): THE DETAILS SHEET -- the shell's own record page, framed BARE over the right pane,
    // narrowed to the row's service location (the record card takes `location`); one close mark; the stops and the header never
    // move, a drag still lands; the whole record's link at the foot leaves the sitting for the app's page
    openDetails(acct, loc, name) {
      var s = this.sitting; if (!s || !DETAILS || !loc) return;
      s.details = { account: acct || null, location: loc, name: name || '' };
      this.renderSitDetails(); this.renderSitStops(); this.renderSitPool();
    }
    closeDetails() {
      var s = this.sitting; if (!s) return;
      s.details = null;
      this.renderSitDetails(); this.renderSitStops(); this.renderSitPool();
    }
    detailsSrc(acct, loc) {
      var route = String(DETAILS).replace(':id', encodeURIComponent(acct || '')).replace(':location', encodeURIComponent(loc || ''));
      var page = (window.location.pathname || '').replace(/[^/]*$/, 'index.html');
      return page + '?bare=1#' + route;
    }
    renderSitDetails() {
      var self = this, s = this.sitting; var dp = this.sheetQ('[data-bd-sit="details"]'); if (!dp) return;
      if (!s.details) { clear(dp); dp.hidden = true; return; }
      if (dp.getAttribute('data-bd-details-location') === String(s.details.location) && !dp.hidden) return;
      clear(dp); dp.hidden = false; dp.setAttribute('data-bd-details-location', String(s.details.location)); dp.setAttribute('data-bd-details-account', String(s.details.account || ''));
      var head = el('div', 'bd-details-h');
      var hl = el('div', 'bd-details-hl');
      hl.appendChild(el('span', 'bd-details-k', 'details · this location only'));
      var nm = el('b', 'bd-details-name', s.details.name || 'the location'); nm.setAttribute('data-bd-details-name', '1'); hl.appendChild(nm);
      head.appendChild(hl);
      var close = el('button', 'bd-btn bd-btn--ghost bd-details-close', '✕'); close.type = 'button'; close.setAttribute('data-bd-details-close', '1'); close.setAttribute('aria-label', 'close the details'); close.title = 'close the sheet; the sitting is as you left it';
      close.addEventListener('click', function () { self.closeDetails(); });
      head.appendChild(close);
      dp.appendChild(head);
      var frame = document.createElement('iframe'); frame.className = 'bd-details-frame'; frame.setAttribute('data-bd-details-frame', '1'); frame.setAttribute('title', 'the record at this location');
      frame.src = this.detailsSrc(s.details.account, s.details.location);
      dp.appendChild(frame);
      if (ACCOUNT_ROUTE && s.details.account) {
        var foot = el('div', 'bd-details-f');
        foot.appendChild(el('span', 'bd-muted', 'the account\'s whole record: '));
        var a = document.createElement('a'); a.className = 'bd-tech bd-account-link'; a.textContent = 'Accounts › ' + (s.details.name || 'the account');
        a.setAttribute('data-bd-account-link', String(s.details.account)); a.href = '#' + String(ACCOUNT_ROUTE).replace(':id', encodeURIComponent(s.details.account));
        a.title = 'the app\'s page; leaves the sitting (what was written stands)';
        a.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); var acct = s.details.account; self.closeDetails(); self.navigate(ACCOUNT_ROUTE, acct); });
        foot.appendChild(a);
        foot.appendChild(el('span', 'bd-muted', ' (the app\'s page; leaves the sitting)'));
        dp.appendChild(foot);
      }
      this.placeDetails();
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
      // 2.1.0 (his calls 4 and 6): the switch where the label stood; the planning window printed ONCE here, not on every row
      // (2.2.0: no year -- "09-21 to 09-27")
      head.appendChild(this.sitSwitch());
      var n = el('span', 'bd-muted', s.loading ? 'reading...' : this.poolWords(s) + (this.period ? ' · the window ' + mmdd(iso(this.period.start)) + ' to ' + mmdd(iso(this.period.end)) : '')); n.setAttribute('data-bd-sit-pool', String(s.pool.length)); head.appendChild(n);
      // 2.2.0 (card 56): the proposal's line beside the switch while a hand order stands unsaved; gone at Save
      var prop = this.proposalWords();
      if (prop) { var pl = el('span', 'bd-map-price bd-proposal-line', prop.long); pl.setAttribute('data-bd-proposal-line', String(s.proposal.run)); head.appendChild(pl); }
      // 2.2.0 (cards 57-58): the columns and the order said ONCE on the pane's line, never on a row
      if (!s.loading && s.pool.length) { var cols = el('span', 'bd-muted bd-pool-columns', s.fit ? 'buffer days · account · the cost to place here · accommodated on this route first, by cost, then the rest by buffer' : 'buffer days · account · by buffer'); cols.setAttribute('data-bd-pool-columns', s.fit ? 'fit' : 'buffer'); head.appendChild(cols); }
      if (s.loading) return;
      if (!s.poolZoned) { var z = el('div', 'bd-quiet', 'the zones\' own ready rows read when the pool rows carry a zone; the day\'s exceptions stand here'); z.setAttribute('data-bd-pool-unzoned', '1'); host.appendChild(z); }
      if (!s.pool.length) { var q = el('div', 'bd-quiet', 'none -- the machine placed everything in this schedule\'s zones'); q.setAttribute('data-bd-pool-empty', '1'); host.appendChild(q); return; }
      var canDrag = this.may(FACE.drag.verb);
      // THE TWO LISTS IN ONE SHAPE (2.2.0, card 57; his chair 2026-09-14 "the pool's cards should be in the same display list form"
      // and 2026-09-16 "the data in the route list and the pool list need symmetry"): a pool row in the stops' own grid -- the buffer
      // where the stop has its window, the account, the service under it, the address a third line when it differs; THE FIT COLUMN
      // at the right (card 58: what it costs to place the card here, the machine's price); the stripe and a red chip ONLY where the
      // reason says something (Q12: the refusal's word; "no room" never); the card in hand lit like a stop; the "left in the pool"
      // line, the buffer word and the zone RETIRED from the row
      var cutDrawn = false;
      s.pool.forEach(function (w) {
        var on = s.inHand === w.work_order_id;
        var f = s.fit ? (s.fit[w.work_order_id] || null) : null;
        var refusal = f ? (f.accommodated ? null : (f.refusal || 'not accommodated')) : (w.late ? 'late' : null);
        // 2.3.0 (leg 10): a card the scheduler took off a day reads WHY -- "unassigned: <reason>" -- until the next sweep re-reasons
        // it (card 32's rule); a quiet chip, not the red one: nothing is wrong with the card
        var off = (!refusal && /^unassigned: /.test(String(w.reason || ''))) ? String(w.reason).replace(/_/g, ' ') : null;
        // 2.2.0 (card 58): THE CUT LINE where the accommodated end and the rest begin
        if (s.fit && f && !f.accommodated && !cutDrawn) { cutDrawn = true; var cut = el('div', 'bd-pool-cut', 'not accommodated on this route · by buffer'); cut.setAttribute('data-bd-pool-cut', '1'); host.appendChild(cut); }
        // 2.1.0 (his call 46.2): the origin row grays while the panel asks about it -- the panel is the one lit thing
        var origin = !!(s.panel && s.panel.wo && s.panel.wo.work_order_id === w.work_order_id);
        var card = el('div', 'bd-pool-row bd-card--p' + (refusal ? ' bd-pool-row--x' : '') + (off ? ' bd-pool-row--off' : '') + (on ? ' bd-pool-row--on' : '') + (origin ? ' bd-pool-row--asked' : '') + (s.fit && f && !f.accommodated ? ' bd-pool-row--far' : ''));
        card.setAttribute('data-wo', w.work_order_id);
        card.setAttribute('data-bd-off', off || '');
        if (s.openWo === w.work_order_id) card.setAttribute('data-open', '1');
        if (on) card.setAttribute('data-in-hand', '1');
        if (origin) card.setAttribute('data-bd-origin', '1');
        if (f) { card.setAttribute('data-bd-accommodated', f.accommodated ? '1' : '0'); card.setAttribute('data-bd-fit', f.delta === null || f.delta === undefined ? '' : String(f.delta)); }
        card.setAttribute('data-bd-buffer', String(w.buffer_days));
        card.setAttribute('data-bd-refusal', refusal || '');
        // line 1: the buffer, the account, the cost to place here
        var buf = el('span', 'bd-pool-buf', String(w.buffer_days)); buf.title = 'buffer days'; card.appendChild(buf);
        var acct = el('span', 'bd-pool-acct'); acct.appendChild(el('b', null, w.account_name)); acct.setAttribute('data-bd-account', w.account_name || ''); card.appendChild(acct);
        var fitEl = el('span', 'bd-pool-fit', f ? (f.delta === null || f.delta === undefined ? '-' : (f.accommodated ? money(f.delta) : money(f.delta))) : '');
        if (f) fitEl.title = f.accommodated ? 'what it costs to place this card on this route (the door\'s own price)' : 'the cost if placed here; the route does not accommodate it';
        card.appendChild(fitEl);
        // line 2: the service, the chip only where the reason says something
        var l2 = el('div', 'bd-pool-work'); l2.setAttribute('data-bd-line2', '1');
        l2.appendChild(document.createTextNode(w.service || '-'));
        if (refusal) { l2.appendChild(document.createTextNode(' · ')); var chip = el('em', 'bd-refusal', refusal); chip.setAttribute('data-bd-chip', refusal); chip.title = 'why this route does not accommodate it'; l2.appendChild(chip); }
        else if (off) { l2.appendChild(document.createTextNode(' · ')); var offChip = el('em', 'bd-refusal bd-refusal--off', off); offChip.setAttribute('data-bd-chip', off); offChip.title = 'taken off a day by hand, with this reason; the next sweep re-reads it'; l2.appendChild(offChip); }
        card.appendChild(l2);
        // line 3: the place, only when it is not the account's name
        if (w.site && w.site !== '-' && w.site !== w.account_name) { var l3 = el('div', 'bd-pool-place3', w.site); l3.setAttribute('data-bd-line3', '1'); card.appendChild(l3); }
        // 2.1.0 (his call 7): ONE MOTION TO PLACE -- the drag; a click opens ONE line (2.2.0: Details) and never places
        card.addEventListener('click', function () { self.toggleOpenWo(w.work_order_id); });
        if (canDrag) {
          card.draggable = true;
          card.addEventListener('dragstart', function (e) { e.dataTransfer.setData('text/plain', w.work_order_id); e.dataTransfer.effectAllowed = 'move'; s.dragging = w.work_order_id; self.readCost(w.work_order_id); });
          card.addEventListener('dragend', function () { s.dragging = null; self.renderSitCost(); });
        } else card.title = 'closed to your role';
        if (s.openWo === w.work_order_id) self.fillDetailsLine(card, w.account_id, w.service_location_id, w.account_name, 'pool', w.work_order_id);
        host.appendChild(card);
      });
    }
    toggleOpenWo(woId) {
      var s = this.sitting; if (!s) return;
      s.openWo = s.openWo === woId ? null : woId;
      this.renderSitPool();
    }
    // a band card dropped on a scorecard opens the sitting with the card IN HAND: lit, its cost read (the drag places it)
    takeInHand(woId) {
      var s = this.sitting; if (!s) return;
      s.inHand = woId;
      this.renderSitPool(); this.renderSitCost();
      this.readCost(woId);
    }
    // THE DROP inside the sitting (Q10 amended; Q15 part 5): the same door, called silently; inside the criteria it places;
    // the exception opens the panel in the sheet; a refusal keeps the card with the door's words
    async sitDrop(woId) {
      var s = this.sitting; if (!s) return;
      var w = s.pool.filter(function (x) { return x.work_order_id === woId; })[0];
      if (!w) return;
      s.panel = null; s.out = 'Placing ' + w.account_name + ' on ' + dayWord(s.day) + ' with ' + s.day.technician + '...'; s.bad = false;
      this.renderSitPanel(); this.renderSitOut();
      var r = await this.rpc(FACE.drag.function, this.doorBody(w, s.day, SILENT_REASON, null));
      if (!this.sitting || this.sitting !== s) return;
      if (r.ok) {
        s.acts++; s.inHand = null; s.openWo = null; delete s.costs[woId];
        s.out = 'Placed ' + w.account_name + ' -- inside the criteria, no question; the run row (kind override) carries the filter\'s reason (' + SILENT_REASON + ').'; s.bad = false;
        await this.loadSitting();
      } else if (r.exception) {
        s.out = null; s.panel = { wo: w, cause: r.words, out: null, bad: false };
        this.renderSitOut(); this.renderSitPanel(); this.renderSitPool();   // 2.1.0: the origin row grays while the panel stands
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
      if (s.panel.unassign) { this.renderUnassignPanel(host); return; }   // 2.3.0 (leg 10): the drop's twin, for a stop coming off
      var w = s.panel.wo, d = s.day;
      // 2.1.0 (his walk, card 46): THE WORDS -- "Add to route", "Cancel"; NO REASON PRESELECTED ("system learning is vital
      // here"): the button stays dark until a reason is chosen; the origin row grays (renderSitPool) and this panel is the one lit thing
      host.appendChild(el('p', 'bd-panel-h', 'Add ' + w.account_name + ' to this route: ' + dayWord(d) + ' with ' + d.technician + ' -- the door asks'));
      var cause = el('p', 'bd-panel-cause', 'The door says: ' + (s.panel.cause || 'outside the criteria'));
      cause.setAttribute('data-bd-cause', '1');
      host.appendChild(cause);
      host.appendChild(el('label', null, 'Why this day'));
      var sel = document.createElement('select'); sel.setAttribute('data-bd-reason', '1');
      var o0 = document.createElement('option'); o0.value = ''; o0.textContent = 'choose a reason'; o0.selected = true; sel.appendChild(o0);
      var seen = {}, offered = 0;
      this.reasons.forEach(function (rs) {
        if (!rs.code || seen[rs.code] || rs.code === SILENT_REASON) return;
        seen[rs.code] = true; offered++;
        var o = document.createElement('option'); o.value = rs.code; o.textContent = rs.meaning || rs.code;
        sel.appendChild(o);
      });
      if (!offered) { o0.textContent = '(no reasons stand -- ' + FACE.reasons + ' is empty)'; }
      host.appendChild(sel);
      host.appendChild(el('label', null, 'A note (with Other, or whenever it helps)'));
      var note = document.createElement('textarea'); note.rows = 2; note.setAttribute('data-bd-note', '1');
      host.appendChild(note);
      var acts = el('div', 'bd-panel-acts');
      var place = el('button', 'bd-btn bd-btn--primary', 'Add to route');
      place.type = 'button'; place.setAttribute('data-bd-place', '1'); place.disabled = true; place.title = 'dark until a reason is chosen';
      place.addEventListener('click', function () { self.sitAnswer(sel.value, note.value); });
      sel.addEventListener('change', function () { place.disabled = !sel.value; place.title = sel.value ? 'a hand placement through the door, your reason on the run row' : 'dark until a reason is chosen'; });
      var cancel = el('button', 'bd-btn bd-btn--ghost', 'Cancel');
      cancel.type = 'button'; cancel.setAttribute('data-bd-cancel', '1'); cancel.title = 'the card stays in the pool; nothing written';
      cancel.addEventListener('click', function () { s.panel = null; self.renderSitPanel(); self.renderSitPool(); });
      acts.appendChild(place); acts.appendChild(cancel);
      acts.appendChild(el('span', 'bd-muted', 'your reason rides the run row for the Performance module'));
      host.appendChild(acts);
      var out = el('div', 'bd-panel-out' + (s.panel.bad ? ' is-bad' : ''), s.panel.out || '');
      out.setAttribute('data-bd-panel-out', '1');
      out.hidden = !s.panel.out;
      host.appendChild(out);
    }
    // the human ANSWERS the exception with a reason
    async sitAnswer(reason, note) {
      var s = this.sitting; if (!s || !s.panel) return;
      if (!reason) { s.panel.out = 'choose a reason first -- no reason is preselected'; s.panel.bad = true; this.renderSitPanel(); return; }
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
    // 2.3.0 (s52 leg 10; Q7 RULED (a); the mockup at his eye 2026-09-19; Q15 RULED (a)): THE UNASSIGN PANEL -- the drop's twin,
    // under the row it asks about: what happens and to whom, the client's own reasons (none preselected; Other wants a note),
    // "Unassign" dark until a reason is chosen, "Cancel" beside it; the words say it writes at once and Cancel does not put it back
    renderUnassignPanel(host) {
      var self = this, s = this.sitting; var st = s.panel.stop, d = s.day;
      host.appendChild(el('p', 'bd-panel-h', 'Take ' + (st.account || st.place || 'this stop') + ' off this route: ' + dayWord(d) + ' with ' + d.technician));
      var cause = el('p', 'bd-panel-cause', 'The work order goes back to the pool as ready, with your reason on the record. It writes at once; to put it back, add it to a route from the pool.');
      cause.setAttribute('data-bd-cause', 'unassign');
      host.appendChild(cause);
      host.appendChild(el('label', null, 'Why it comes off'));
      var sel = document.createElement('select'); sel.setAttribute('data-bd-reason', '1');
      var o0 = document.createElement('option'); o0.value = ''; o0.textContent = 'choose a reason'; o0.selected = true; sel.appendChild(o0);
      var seen = {}, offered = 0;
      this.unassignReasons.forEach(function (rs) {
        if (!rs.code || seen[rs.code]) return;
        seen[rs.code] = true; offered++;
        var o = document.createElement('option'); o.value = rs.code; o.textContent = rs.meaning || rs.code;
        sel.appendChild(o);
      });
      if (!offered) { o0.textContent = '(no reasons stand -- ' + UNASSIGN.reasons + ' is empty)'; }
      host.appendChild(sel);
      host.appendChild(el('label', null, 'A note (with Other, or whenever it helps)'));
      var note = document.createElement('textarea'); note.rows = 2; note.setAttribute('data-bd-note', '1');
      host.appendChild(note);
      var acts = el('div', 'bd-panel-acts');
      var go = el('button', 'bd-btn bd-btn--primary', 'Unassign');
      go.type = 'button'; go.setAttribute('data-bd-unassign', '1'); go.disabled = true; go.title = 'dark until a reason is chosen';
      go.addEventListener('click', function () { self.sitUnassign(sel.value, note.value); });
      sel.addEventListener('change', function () { go.disabled = !sel.value; go.title = sel.value ? 'the stop off the route through the door, your reason on the undo row' : 'dark until a reason is chosen'; });
      var cancel = el('button', 'bd-btn bd-btn--ghost', 'Cancel');
      cancel.type = 'button'; cancel.setAttribute('data-bd-cancel', '1'); cancel.title = 'the stop stays; nothing written';
      cancel.addEventListener('click', function () { s.panel = null; self.renderSitPanel(); self.renderSitStops(); self.renderSitPool(); });
      acts.appendChild(go); acts.appendChild(cancel);
      acts.appendChild(el('span', 'bd-muted', 'once written it stands: the sitting\'s Cancel does not put it back; the drag from the pool does'));
      host.appendChild(acts);
      var out = el('div', 'bd-panel-out' + (s.panel.bad ? ' is-bad' : ''), s.panel.out || '');
      out.setAttribute('data-bd-panel-out', '1');
      out.hidden = !s.panel.out;
      host.appendChild(out);
    }
    // the Unassign link on an opened stop asks: the panel under the row, the origin row gray
    askUnassign(stopId) {
      var s = this.sitting; if (!s || !UNASSIGN) return;
      var st = null; s.stops.forEach(function (x) { if (x.route_stop_id === stopId) st = x; });
      if (!st || !st.work_order_id) return;
      s.panel = { unassign: true, stop: st, out: null, bad: false }; s.out = null; s.bad = false;
      this.renderSitOut(); this.renderSitPanel(); this.renderSitStops(); this.renderSitPool();
      var p = this.sheetQ('[data-bd-sit-panel]'); if (p && p.scrollIntoView) p.scrollIntoView({ block: 'nearest' });
    }
    // the reason chosen: ONE DOOR (unassign_stop) -- the stop off the day, the work order ready, the reason on the undo row;
    // the sitting re-read live; the act counted (Save lit, the Route menu gray). It stands (Q15): Cancel does not put it back.
    async sitUnassign(reason, note) {
      var s = this.sitting; if (!s || !s.panel || !s.panel.unassign) return;
      if (!reason) { s.panel.out = 'choose a reason first -- no reason is preselected'; s.panel.bad = true; this.renderSitPanel(); return; }
      var st = s.panel.stop;
      s.panel.out = 'Taking it off...'; s.panel.bad = false; this.renderSitPanel();
      var r = await this.rpc(UNASSIGN.function, { p_work_order: st.work_order_id, p_by: this.byWord(), p_reason: reason, p_note: (note && note.trim()) ? note : null });
      if (!this.sitting || this.sitting !== s) return;
      if (r.ok) {
        s.acts++; s.panel = null; s.openStop = null;
        s.out = 'Unassigned ' + (st.account || st.place) + ' (' + String(reason).replace(/_/g, ' ') + ') -- off the day, back in the pool as ready; the undo row carries your reason. It stands: Cancel does not put it back.'; s.bad = false;
        this.renderSitPanel();
        await this.loadSitting();
      } else {
        s.panel.out = 'Refused: ' + r.words; s.panel.bad = true;
        this.renderSitPanel();
      }
    }
    // 2.1.0 (his calls 2-3): THREE LEVELS IN THREE PLACES, in the route header's right -- THE ROUTE's menu (Release, or the
    // stamp; the later route acts take their slot here), THE SITTING's Cancel and Save GRAY until an act is written or an order
    // proposed, a close mark for a sheet with nothing to keep; the footer retired. The colours the controls' own (s51 card 33).
    // 2.2.0 (card 60, his note 2026-09-17): THE HEADER'S THREE ACTS -- "the Route/Release drop-down activates on form load but
    // deactivates if ANY changes are made. The Cancel button is always active and returns the user to the previous screen. The
    // Save button activates if there are ANY changes to the route stop ordering, or additions/subtractions." The close mark
    // retired (Cancel is the way out); the colours the controls' own (s51 card 33).
    renderSitFoot() {
      var self = this, s = this.sitting, d = s.day; var host = this.sheetQ('[data-bd-sit="acts"]'); if (!host) return; clear(host);
      var changed = s.acts > 0 || !!s.proposal;
      var menu = document.createElement('details'); menu.className = 'bd-route-menu' + (changed ? ' bd-route-menu--off' : ''); menu.setAttribute('data-bd-route-menu', changed ? 'off' : 'on');
      var sum = document.createElement('summary'); sum.className = 'bd-btn bd-btn--ghost bd-route-sum'; sum.textContent = 'Route'; menu.appendChild(sum);
      sum.title = changed ? 'gray while your changes stand -- Save or Cancel first' : 'the acts on the whole route';
      if (changed) { sum.setAttribute('aria-disabled', 'true'); sum.addEventListener('click', function (e) { e.preventDefault(); menu.open = false; }); }
      var items = el('div', 'bd-route-items');
      if (this.isReleased(d)) { var st = el('span', 'bd-receipt', 'released ' + (d.released && d.released !== '-' ? mmdd(d.released) : '')); st.setAttribute('data-bd-sit-released', '1'); items.appendChild(st); }
      else if (FACE.release && this.may(FACE.release.verb) && d.state === 'draft') {
        var rel = el('button', 'bd-btn bd-btn--ghost', 'Release'); rel.type = 'button'; rel.setAttribute('data-bd-sit-release', '1');
        rel.title = 'this schedule through ' + FACE.release.function + ' -- sequenced first when no order stands, the promises written';
        rel.addEventListener('click', function () { menu.open = false; self.sitRelease(); });
        items.appendChild(rel);
      } else items.appendChild(el('span', 'bd-muted', 'no route act open to your role on this day'));
      menu.appendChild(items);
      host.appendChild(menu);
      var can = el('button', 'bd-btn bd-btn--ghost', 'Cancel'); can.type = 'button'; can.setAttribute('data-bd-sit-cancel', '1'); can.disabled = false;
      can.title = changed && SITTING && SITTING.cancel ? 'every run on this schedule since the sitting opened, undone newest first in one act (' + SITTING.cancel.function + '); back to the board' : 'back to the board' + (changed ? ' -- what was written stands' : '');
      can.addEventListener('click', function () { self.sitCancel(); });
      host.appendChild(can);
      var save = el('button', 'bd-btn bd-btn--primary', 'Save'); save.type = 'button'; save.setAttribute('data-bd-sit-save', '1'); save.disabled = !changed;
      save.title = s.proposal && MAP_ACCEPT ? 'accepts your order through ' + MAP_ACCEPT.function + ' and closes the sitting' : (changed ? 'closes the sitting; every act was written through its door as you worked' : 'gray until a change -- a drop, an order, an unassign');
      if (s.proposal) save.setAttribute('data-bd-proposal', String(s.proposal.run));
      save.addEventListener('click', function () { self.sitSave(); });
      host.appendChild(save);
      var note = el('span', 'bd-sheet-note', s.loading ? '' : (s.acts ? plural(s.acts, 'act') + ' written' : '')); note.setAttribute('data-bd-sit-acts', String(s.acts)); note.title = 'written through the door this sitting';
      host.appendChild(note);
    }
    async sitRelease() {
      var s = this.sitting; if (!s) return;
      // act (c): a pending hand order is accepted before the release, so the promises carry her order
      var acc = await this.acceptProposal();
      if (acc === false || !this.sitting || this.sitting !== s) return;
      s.out = 'Releasing ' + s.day.technician + '\'s ' + dayWord(s.day) + (acc ? ' with your order accepted' : '') + '...'; s.bad = false; this.renderSitOut();
      var r = await this.rpc(FACE.release.function, { p_route: s.route, p_by: this.byWord() });
      if (!this.sitting || this.sitting !== s) return;
      if (r.ok) {
        var n = typeof r.data === 'number' ? r.data : (r.data && r.data.promises);
        s.out = 'Released ' + s.day.technician + '\'s ' + dayWord(s.day) + (n !== undefined && n !== null ? ' -- ' + plural(n, 'promise') + ' written' : '') + '.'; s.bad = false;
        await this.loadSitting();
      } else { s.out = 'Release refused: ' + r.words; s.bad = true; this.renderSitOut(); }
    }
    async sitCancel() {
      var s = this.sitting; if (!s) return;
      // 2.2.0 (card 60): Cancel is always the way back -- with nothing written it simply closes; without a cancel door it closes with what stands
      var changed = s.acts > 0 || !!s.proposal;
      if (!changed || !SITTING || !SITTING.cancel) { await this.closeSitting('Closed: ' + s.day.technician + '\'s ' + dayWord(s.day) + ' -- ' + (s.acts ? plural(s.acts, 'act') + ' written through the door this sitting stand' : 'nothing written') + (s.proposal ? '; your order stays a proposal, not accepted' : '') + '.'); return; }
      s.out = 'Undoing this sitting\'s runs...'; s.bad = false; this.renderSitOut();
      var r = await this.rpc(SITTING.cancel.function, { p_route: s.route, p_stamp: s.stamp, p_by: this.byWord() });
      if (!this.sitting || this.sitting !== s) return;
      if (r.ok) { var n = typeof r.data === 'number' ? r.data : 0; await this.closeSitting('Cancelled: ' + plural(n, 'run') + ' on ' + s.day.technician + '\'s ' + dayWord(s.day) + ' undone in one act, newest first -- the placements back to the pool.'); }
      else { s.out = 'Cancel refused: ' + r.words + ' -- the sitting stays open; every act so far stands as written.'; s.bad = true; this.renderSitOut(); }
    }
    async sitSave() {
      var s = this.sitting; if (!s) return;
      // act (c): SAVE accepts the pending hand order through its door; a refusal keeps the sitting open with the door's words
      var acc = await this.acceptProposal();
      if (acc === false || !this.sitting || this.sitting !== s) return;
      await this.closeSitting('Saved: ' + s.day.technician + '\'s ' + dayWord(s.day) + ' -- ' + plural(s.acts, 'act') + ' written through the door this sitting' + (acc ? '; your order accepted (the stops re-sequenced, the drive and the flags re-read)' : '') + '; the card and the heading re-read.');
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
