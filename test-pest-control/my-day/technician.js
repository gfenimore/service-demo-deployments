/**
 * Route Stop Technician - Generated Blueprint UI (THE TECHNICIAN'S DAY ON A PHONE, technician-001 1.1.0)
 *
 * 1.1.0 THE SECOND ROUND (SJ s52 leg 15, 2026-09-24; Q21, Q22, Q23 RULED (a) at his word; the mockup's round 4 approved
 * "Sheets 4-6 approved, draw the leg"; the states paper's section 6; the rows and the doors at 20260924000002 and
 * 20260924000003):
 *   - ONE DOOR FOR WHAT THE TECHNICIAN SAYS (Q21): the service lines stand on the stop face from the moment he arrives,
 *     each with "Something to report" -- the same panel the close sheet opens; Keep writes the note AT ONCE through the
 *     door with the line named (add_stop_note p_item), the verdict and the reason ride Accept as before; the words on a
 *     line are READ FROM THE ROWS (gap D: a phone that died mid-stop opens a close sheet that remembers); the Notes face
 *     is RETIRED (Stop | Photos); a closed stop's lines take "Something to add", a note only (Q-T4).
 *   - THE RAIN-OUT (Q23): Close my day returns the never-reached stops to the pool in the same act; the summary says so
 *     before the stamp ("6 not reached ... back in the pool when you close") and after ("6 back in the pool"); a
 *     closed day's never-reached row reads "back in the pool".
 *   - REOPEN MY DAY (Q22): on the closed summary, until midnight of the day's own date (the phone's clock, Q20), the
 *     door reopen_day with the phone's date; the face says what came back and what the office had placed; the day's
 *     line carries both clocks ("closed 1:12, reopened 1:40").
 *   - the photo resized on the phone before the upload (card 76): 1600 px on the long side, a record still.
 *
 * 1.0.0 (SJ s52 leg 14 act (b), 2026-09-23; the paper docs/working/s52-the-technicians-app.md -- the scenarios in HIS
 * words CLOSED 2026-09-22 "the rest stands", the mockup APPROVED in two rounds "Approve all! Go!"; the definition's
 * sections 6 and 7b; the rows and the doors at act (a), 20260923000001). A PHONE IN A TRUCK: one column, big targets,
 * ONLINE. SIX FACES in the day's order:
 *   1. THE DAY OPENS (D-A.1..D-A.5): the released schedule as a list of stops -- the order, the name, the planned time,
 *      the service, nothing else on the row; List | Map a CONTENT SWITCHER (Carbon's word, Q-T1: two formats of one
 *      content); the map the board's seam (pins numbered in the released order, joined, the phone's position when it
 *      allows; a blank ground with no key); Start my day the first stamp.
 *   2. ROLLING (D-B): the closed stops ONE gray line with a count (his word on sheet 2); a tap expands, a second tap opens
 *      the closed stop; the current stop lit with its tag; what is left fills the screen; THE OFFICE ALERT one line at
 *      the top from `reads.changes` (interruptions are the office's; the list re-reads; the alert clears).
 *   3. THE NEXT STOP (S-1, S-2): the name, the street, the service, how far (the phone's own position when allowed); the
 *      gate code and the field notes before the drive; who is home; the last three; THE REACH BUTTON IS THE PREFERENCE
 *      (Call . Text . Email, the door's reach_verb); Directions hands the address to the phone's own map app; On my way
 *      stamp one; while driving the same face with the stamp and Arrived the big button (no separate driving screen).
 *   4. ARRIVED (S-3, S-4): stamp two; the stamps line; the switcher Stop | Notes | Photos; Notes written any time with
 *      the display under (today's on this stop, then the account's standing notes); Photos taken here; COLLECT FEES at
 *      the door -- captured now, WRITTEN at Accept with the stop, one act (7b): never cash; a check with its number; a
 *      card the processor's reference only; then the phone goes in the pocket.
 *   5. THE CLOSE (S-5): THE EXCEPTION PRINCIPLE, his law -- every line is done unless he says otherwise (the open stop draws NO
 *      verdict chip on a clean line, his chair 2026-09-25: "done" is a word for the rows, read on the close sheet and the closed
 *      stop; a not-done line reads its chip anywhere); "Something to report" opens the line's
 *      panel: NOT DONE with a reason he can attest at the curb (the client's list, other with a note) or a condition
 *      noted; what rides the close read back (the notes, the photo, the fees); Accept is stamp three; the not-done line
 *      returns to the pool as a new work order; the list re-reads and the next stop is current without a tap (S-6).
 *   6. THE DAY CLOSES (D-D): the summary from the stamps -- stops, on site, drive against the plan, checks, what went to
 *      the office; Tomorrow an option above the close, not the close's face; Close my day the last stamp. Q-T4: until
 *      then a closed stop may take a note, a photo and a fixed check number; never the verdict, the stamps, the amount
 *      or the reason -- the office's, as reversing rows.
 * Every read is NARROWED to the employee behind the login by the engine; every door refuses another technician's day.
 * The face names the reads and the doors; the rows decide. The role gate (`personas`) narrows by verb where a facet
 * stands; a login with no facet narrows nothing (the one-man client runs his own day on the owner's login).
 * Blueprint ID: d5000000-0000-0000-0000-000000000001
 * Pattern: TECHNICIAN
 *
 * Implements Pattern Interface Contract (JBA-003)
 * - mount(container) / unmount() / onContext(context) / getMetadata() / setRecordId(id)
 * The phone takes no record: setRecordId is accepted and ignored (the day is the login's).
 */

(function() {
  'use strict';

  var FACE = {"schema":"services_template","alert":{"poll_seconds":60},"doors":{"arrive":"arrive","close_day":"close_day","on_my_way":"on_my_way","start_day":"start_day","close_stop":"close_stop","reopen_day":"reopen_day","add_stop_note":"add_stop_note","add_stop_photo":"add_stop_photo","fix_check_number":"fix_check_number"},"reads":{"day":"v_my_day","curb":"v_stop_curb","close":"v_day_close","changes":"day_changes","reasons":"v_not_done_reasons"},"verbs":{"run_day":"run_day","close_stop":"close_stop"},"photos":{"bucket":"documents"},"personas":{"GENERIC_USER":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter"],"seated":false},"FIELD_TECH":{"fields":null,"readonly":[],"filters":{"status":["active"]},"actions":["close_stop","search","view","run_day"],"seated":true},"OPS_MANAGER":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","create","cancel","defer","place","place_week","sequence","release"],"seated":false},"ADMIN_FULL":{"fields":null,"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","delete","export","bulk_actions","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"CUSTOMER_SERVICE":{"fields":null,"readonly":[],"filters":{"status":["active"]},"actions":["view","search","sort","filter","edit","log_call","schedule","cancel","defer","place"],"seated":false},"SERVICE_MANAGER":{"fields":null,"readonly":[],"filters":{"status":["active"]},"actions":["view","search","sort","filter","schedule","assign_tech","create","cancel","defer","place","place_week","sequence","release"],"seated":false}}};
  var SKELETON = "<!-- Route Stop Technician -- THE TECHNICIAN'S DAY ON A PHONE (technician-001 1.1.0; SJ s52 leg 15 THE PHONE'S SECOND ROUND, 2026-09-24,\n     the mockup's round 4 approved at his eye; 1.0.0 at leg 14, 2026-09-23, \"Approve all! Go!\"). Generated; do not edit. The shell mounts into an EMPTY host (the\n     s37 skeleton lesson): this markup is written by technician.js FIRST, then filled. One column; the faces take turns\n     in the body; the foot holds the big buttons. -->\n<div class=\"tp\" data-blueprint=\"d5000000-0000-0000-0000-000000000001\" data-tech-view=\"day\">\n  <header class=\"tp-bar\" data-tech=\"bar\">\n    <div class=\"tp-who\" data-tech=\"who\"></div>\n    <div class=\"tp-day\" data-tech=\"title\"></div>\n    <div class=\"tp-meta\" data-tech=\"meta\"></div>\n  </header>\n  <div class=\"tp-switch\" data-tech=\"switch\" hidden></div>\n  <div class=\"tp-alert\" data-tech=\"alert\" hidden></div>\n  <p class=\"tp-out\" data-tech-out=\"1\" hidden></p>\n  <div class=\"tp-body\" data-tech=\"body\"></div>\n  <footer class=\"tp-foot\" data-tech=\"foot\"></footer>\n</div>\n";
  var READS = FACE.reads || {};
  var DOORS = FACE.doors || {};
  var REASONS = READS.reasons || 'v_not_done_reasons';
  var CHANGES = READS.changes || null;
  var VERBS = FACE.verbs || {};
  var VERB_RUN = VERBS.run_day || 'run_day';
  var VERB_CLOSE = VERBS.close_stop || 'close_stop';
  var BUCKET = (FACE.photos && FACE.photos.bucket) || 'documents';
  var POLL = (FACE.alert && typeof FACE.alert.poll_seconds === 'number') ? FACE.alert.poll_seconds : 60;
  var RENDERER = (FACE.map && FACE.map.renderer) || {};
  var RENDERER_SCRIPT = RENDERER.script || 'https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.js';
  var RENDERER_CSS = RENDERER.css || 'https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.css';
  var RENDERER_GLOBAL = RENDERER.global || 'mapboxgl';
  var RENDERER_STYLE = RENDERER.style || 'mapbox://styles/mapbox/streets-v12';
  var TOKEN_KEY = RENDERER.token_key || 'mapboxToken';
  var BLANK_STYLE = { version: 8, name: 'blank ground', sources: {}, layers: [{ id: 'ground', type: 'background', paint: { 'background-color': '#f4f4f4' } }] };
  var DOT = ' \u00b7 ';

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = String(text);
    return e;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }
  function btn(cls, text, mark, onClick) {
    var b = el('button', cls, text); b.type = 'button';
    if (mark) b.setAttribute('data-tech', mark);
    if (onClick) b.addEventListener('click', onClick);
    return b;
  }
  function hhmm(ts) {
    if (!ts) return '';
    var d = new Date(ts); if (isNaN(d.getTime())) return String(ts);
    var h = d.getHours(), m = d.getMinutes();
    return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
  }
  function clock12(s) {
    // the mockup's "8:40" from the read's "08:40": the hour without its leading zero, the afternoon in a phone's own way
    var m = /^(\d\d):(\d\d)/.exec(String(s || '')); if (!m) return s || '';
    var h = parseInt(m[1], 10); if (h > 12) h -= 12; if (h === 0) h = 12;
    return h + ':' + m[2];
  }
  function money(x) { var n = Number(x) || 0; return '$' + n.toFixed(2); }
  function plural(n, word) { return n + ' ' + word + (Number(n) === 1 ? '' : 's'); }
  function todayIso() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() < 9 ? '0' : '') + (d.getMonth() + 1) + '-' + (d.getDate() < 10 ? '0' : '') + d.getDate(); }
  function mmdd(s) { var t = String(s || ''); return /^\d{4}-\d\d-\d\d/.test(t) ? t.slice(5, 10) : t; }
  function weekday(s) { var d = new Date(String(s) + 'T00:00:00'); return isNaN(d.getTime()) ? '' : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()]; }
  // card 76 (1), leg 15: the photo is resized ON THE PHONE before the upload -- 1600 px on the long side, a record still, not the
  // camera's 4 MB; a small picture (or a browser without the bitmap door) goes as taken
  function shrinkPhoto(file) {
    return new Promise(function (resolve) {
      var asIs = { bytes: file, shrunk: false, width: 0, height: 0 };
      try {
        if (!file || !/^image\//.test(file.type || '') || typeof createImageBitmap !== 'function') return resolve(asIs);
        createImageBitmap(file).then(function (bmp) {
          var max = 1600, w = bmp.width, h = bmp.height;
          if (Math.max(w, h) <= max) { if (bmp.close) bmp.close(); return resolve(asIs); }
          var k = max / Math.max(w, h);
          var cv = document.createElement('canvas'); cv.width = Math.round(w * k); cv.height = Math.round(h * k);
          cv.getContext('2d').drawImage(bmp, 0, 0, cv.width, cv.height); if (bmp.close) bmp.close();
          cv.toBlob(function (blob) { resolve(blob ? { bytes: blob, shrunk: true, width: cv.width, height: cv.height } : asIs); }, 'image/jpeg', 0.85);
        }).catch(function () { resolve(asIs); });
      } catch (e) { resolve(asIs); }
    });
  }
  function straightMiles(lat1, lon1, lat2, lon2) {
    var R = 3958.8, toR = Math.PI / 180;
    var dLat = (lat2 - lat1) * toR, dLon = (lon2 - lon1) * toR;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * toR) * Math.cos(lat2 * toR) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // THE RENDERER, loaded once when Map first opens (never at mount): the board's seam
  var rendererLoad = null;
  function loadRenderer() {
    var lib = window[RENDERER_GLOBAL];
    if (lib && lib.Map) return Promise.resolve(lib);
    if (rendererLoad) return rendererLoad;
    rendererLoad = new Promise(function (resolve) {
      try {
        if (RENDERER_CSS && !document.querySelector('link[data-tp-renderer]')) { var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = RENDERER_CSS; l.setAttribute('data-tp-renderer', '1'); document.head.appendChild(l); }
        var sc = document.createElement('script'); sc.src = RENDERER_SCRIPT; sc.async = true; sc.setAttribute('data-tp-renderer', '1');
        sc.onload = function () { var g = window[RENDERER_GLOBAL]; resolve(g && g.Map ? g : null); };
        sc.onerror = function () { rendererLoad = null; resolve(null); };
        document.head.appendChild(sc);
      } catch (e) { rendererLoad = null; resolve(null); }
    });
    return rendererLoad;
  }

  class RouteStopTechnicianBlueprintUI {

    constructor() {
      this.container = null;
      this.context = null;
      this.client = null;
      this.view = 'day';            // day . stop . close . dayclose
      this.pane = 'list';           // the day's switcher: list . map
      this.stopPane = 'stop';       // the stop's switcher: stop . photos (the Notes face retired at 1.1.0, Q21)
      this.rows = [];               // the shown day's stops (reads.day)
      this.day = null;              // the shown day's columns (the first row)
      this.days = [];               // every released day of the login, by date
      this.curb = null;             // the open stop (reads.curb)
      this.openStop = null;         // route_stop_id
      this.fees = null;             // the fees captured at the door, written at Accept
      this.feesOpen = false;
      this.exceptions = {};         // the close's exceptions by item: {done, reason, note}
      this.panelItem = null;        // the line whose panel is open
      this.foldOpen = false;        // the closed stops expanded
      this.alertRows = [];
      this.alertSince = null;
      this.summary = null;          // reads.close row
      this.reasons = [];
      this.here = null;             // the phone's position {lat, lon} when allowed
      this.map = null; this.mapLib = null;
      this.out = null; this.outBad = false;
    }

    getMetadata() { return { blueprintId: 'd5000000-0000-0000-0000-000000000001', pattern: 'TECHNICIAN', entity: 'route_stop' }; }

    mount(container) {
      this.container = container;
      container.innerHTML = SKELETON;
      var root = container.firstElementChild;
      this.root = root;
      this.$ = function (k) { return root.querySelector('[data-tech="' + k + '"]'); };
      this.renderAll();
      this.maybeLoad();
    }

    unmount() {
      this.stopPoll();
      this.dropMap();
      if (this.container) clear(this.container);
      this.container = null; this.root = null; this.rows = []; this.day = null; this.curb = null;
    }

    onContext(context) { this.context = context || {}; this.maybeLoad(); }
    setRecordId(id) { /* the phone takes no record: the day is the login's */ }

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
    async rpc(fn, args) {
      try {
        var r = await this.client.schema(FACE.schema).rpc(fn, args || {});
        if (r.error) return { ok: false, words: r.error.message || String(r.error), data: null };
        return { ok: true, data: r.data, words: '' };
      } catch (e) { return { ok: false, words: (e && e.message) || String(e), data: null }; }
    }
    busy(on) { if (!this.root) return; if (on) this.root.setAttribute('data-tech-busy', '1'); else this.root.removeAttribute('data-tech-busy'); }
    hear(code, message) {
      // RI-909: the shell must HEAR a role-loaded read fall -- session dead -> the sign-in gate; session live -> the note stands
      if (this.container) this.container.dispatchEvent(new CustomEvent('blueprint:error', { bubbles: true, detail: { code: code, blueprintId: 'd5000000-0000-0000-0000-000000000001', message: message } }));
    }
    say(words, bad) { this.out = words || null; this.outBad = !!bad; this.renderOut(); }
    renderOut() {
      var o = this.root && this.root.querySelector('[data-tech-out]'); if (!o) return;
      if (!this.out) { o.hidden = true; o.textContent = ''; o.classList.remove('is-bad'); return; }
      o.hidden = false; o.textContent = this.out; o.classList.toggle('is-bad', this.outBad);
    }

    // -- the ROLE gate (the engine's key is `personas`): the acts by verb; no facet, no narrowing --
    roleGate() { var facet = this.context && this.context.facet; if (!facet || !FACE.personas) return null; return FACE.personas[facet] || null; }
    may(verb) { var g = this.roleGate(); if (g && g.seated === false) return false; return !g || !Array.isArray(g.actions) || g.actions.indexOf(verb) !== -1; }
    byWord() { var ctx = this.context || {}; return String(ctx.user_id || ctx.facet || 'technician'); }

    maybeLoad() {
      if (!this.container || !this.context) return;
      this.client = this.client || this.dataClient();
      if (!this.client) return;
      this.load();
    }

    // -- THE DAY: the login's released schedules, today's shown (else the nearest to come) ------------------------
    async load(keepView) {
      var self = this;
      // a role with no cell on the phone's leaf sees no phone (the resolver marks each persona `seated` from the cells)
      var g0 = this.roleGate();
      if (g0 && g0.seated === false) {
        var body0 = this.$('body'); clear(body0);
        var line0 = el('p', 'tp-quiet', 'The phone is the technician\'s seat. Your role runs the office\'s screens.'); line0.setAttribute('data-tech', 'closed');
        body0.appendChild(line0); clear(this.$('foot')); this.$('switch').hidden = true;
        return;
      }
      this.busy(true);
      try {
        var r = await this.from(READS.day).select('*').order('route_date', { ascending: true }).order('seq', { ascending: true });
        if (r.error) throw new Error(r.error.message);
        var all = r.data || [];
        var byDate = {};
        all.forEach(function (row) { (byDate[row.route_date] = byDate[row.route_date] || []).push(row); });
        this.days = Object.keys(byDate).sort().map(function (d) { return { route_date: d, rows: byDate[d] }; });
        var today = todayIso();
        var pick = null;
        if (this.day && byDate[this.day.route_date] && keepView) pick = this.day.route_date;
        else if (byDate[today]) pick = today;
        else { var later = this.days.filter(function (d) { return d.route_date > today; }); pick = later.length ? later[0].route_date : (this.days.length ? this.days[this.days.length - 1].route_date : null); }
        this.rows = pick ? byDate[pick] : [];
        this.day = this.rows.length ? this.rows[0] : null;
        // his chair's catch (2026-09-23): the shell keeps the last login, so the office's seat opened the phone and read
        // "no released route" -- an empty day must say WHOSE login stands; my_employee() is null when the login is nobody's
        if (!this.rows.length) { var me = await this.rpc('my_employee'); this.loginEmployee = me.ok ? (me.data || null) : undefined; }
        if (!this.reasons.length) {
          // the client's own list: the read carries every tenant's rows (the chair on Local caught Other twice); narrowed here
          var rq = this.from(REASONS).select('code, meaning');
          var tid = this.context && this.context.tenant_id;
          if (tid && !/^__/.test(String(tid))) rq = rq.eq('tenant_id', tid);
          var rr = await rq;
          if (!rr.error) this.reasons = rr.data || [];
        }
        if (!keepView) { this.view = (this.day && this.day.day_state === 'closed') ? 'dayclose' : 'day'; }
        if (this.view === 'dayclose') await this.readSummary();
        if (this.day && this.day.day_state === 'in_progress' && !this.alertSince) this.alertSince = this.day.day_started_at || new Date().toISOString();
      } catch (e) {
        var msg = (e && e.message) || String(e);
        this.say('the day could not be read as your role: ' + msg, true);
        this.hear('DATA_LOAD_FAILED', msg);
      }
      this.busy(false);
      this.renderAll();
      this.schedulePoll();
    }
    async readCurb(stopId) {
      var r = await this.from(READS.curb).select('*').eq('route_stop_id', stopId).limit(1);
      if (r.error) { this.say('the stop could not be read as your role: ' + r.error.message, true); this.hear('DATA_LOAD_FAILED', r.error.message); return null; }
      return (r.data && r.data[0]) || null;
    }
    async readSummary() {
      if (!this.day) { this.summary = null; return; }
      var r = await this.from(READS.close).select('*').eq('route_id', this.day.route_id).limit(1);
      this.summary = (!r.error && r.data && r.data[0]) || null;
    }
    currentRow() { for (var i = 0; i < this.rows.length; i++) if (this.rows[i].is_current) return this.rows[i]; var left = this.rows.filter(function (x) { return x.stop_state !== 'closed'; }); return left[0] || null; }
    closedRows() { return this.rows.filter(function (x) { return x.stop_state === 'closed'; }); }
    leftRows() { return this.rows.filter(function (x) { return x.stop_state !== 'closed'; }); }
    dayClosed() { return !!(this.day && this.day.day_state === 'closed'); }
    dayStarted() { return !!(this.day && this.day.day_state === 'in_progress'); }

    // -- THE OFFICE ALERT (D-B.2, Q-T3): the changes since the phone last looked, polled while the day rolls ----
    schedulePoll() {
      this.stopPoll();
      if (!CHANGES || !POLL || !this.dayStarted() || this.view !== 'day') return;
      var self = this;
      this._poll = setInterval(function () { self.readChanges(); }, POLL * 1000);
      this.readChanges();
    }
    stopPoll() { if (this._poll) { clearInterval(this._poll); this._poll = null; } }
    async readChanges() {
      if (!CHANGES || !this.day || !this.client) return;
      var r = await this.rpc(CHANGES, { p_route: this.day.route_id, p_since: this.alertSince || '-infinity' });
      if (!r.ok) return;
      this.alertRows = r.data || [];
      this.renderAlert();
    }
    renderAlert() {
      var a = this.$('alert'); if (!a) return;
      clear(a);
      if (this.view !== 'day' || !this.alertRows.length) { a.hidden = true; return; }
      var self = this;
      var counts = {};
      this.alertRows.forEach(function (c) { counts[c.change] = (counts[c.change] || 0) + 1; });
      var words = Object.keys(counts).map(function (k) { return plural(counts[k], 'stop') + ' ' + k.replace('_', ' '); }).join(', ');
      a.hidden = false;
      a.appendChild(el('span', null, 'The office changed your day: ' + words));
      a.appendChild(btn(null, 'See it \u203a', 'alert-see', async function () {
        // the list re-reads and the alert clears (D-C.1: the tech just sees the updated list)
        self.alertSince = new Date().toISOString(); self.alertRows = []; await self.load(true);
      }));
    }

    // -- RENDER ---------------------------------------------------------------------------------------------------
    renderAll() {
      if (!this.root) return;
      this.root.setAttribute('data-tech-view', this.view);
      this.renderBar(); this.renderSwitch(); this.renderAlert(); this.renderOut(); this.renderBody(); this.renderFoot();
    }
    renderBar() {
      var who = this.$('who'), title = this.$('title'), meta = this.$('meta');
      clear(title);
      if (!this.day) { who.textContent = ''; title.textContent = 'My day'; meta.textContent = 'No released route for today.'; return; }
      var d = this.day;
      who.textContent = d.technician || '';
      var today = d.route_date === todayIso();
      if (this.view === 'stop' || this.view === 'close') {
        // the mockup's status row: the way back at the top, the day's line under it; the stop names itself once, in the body
        var self = this;
        // his chair's catch (2026-09-23): the glyph, never its digits -- a blue "2039 Today" read as a number, not a door
        var back = btn('tp-back', '\u2039 ' + (this.view === 'close' ? ((this.curb && this.curb.place) || 'the stop') : 'Today'), 'back', function () { if (self.view === 'close') { self.view = 'stop'; self.renderAll(); } else self.backToDay(); });
        back.style.padding = '0';
        title.appendChild(back);
        meta.textContent = this.dayStarted() ? (plural(Number(d.stops_closed) || 0, 'stop').replace(/ stops?$/, ' done') + DOT + (this.leftRows().length) + ' left' + DOT + 'ends ' + clock12(d.day_to) + this.reopenWords()) : (plural(Number(d.stops_total) || this.rows.length, 'stop') + DOT + clock12(d.day_from) + ' to ' + clock12(d.day_to));
        return;
      }
      if (this.view === 'dayclose' && !this.dayClosed()) {
        // round 3 (his chair 2026-09-24): the summary BEFORE the stamp is a look, and a look has a way back to the list
        var self3 = this;
        var back3 = btn('tp-back', '‹ Today\'s list', 'back', function () { self3.view = 'day'; self3.say(null); self3.schedulePoll(); self3.renderAll(); });
        back3.style.padding = '0';
        title.appendChild(back3);
        meta.textContent = plural(Number(d.stops_closed) || 0, 'stop').replace(/ stops?$/, ' done') + DOT + (this.leftRows().length) + ' left' + DOT + 'ends ' + clock12(d.day_to) + this.reopenWords();
        return;
      }
      title.appendChild(document.createTextNode((today ? 'Today' : weekday(d.route_date) + ' ' + mmdd(d.route_date)) + (this.dayClosed() ? ', done' : '')));
      if (d.zones) { var z = el('span', null, DOT + d.zones); title.appendChild(z); }
      // Q22: a day that was reopened carries both clocks on its line -- the record is what happened
      if (this.dayClosed()) meta.textContent = 'started ' + hhmm(d.day_started_at) + (d.day_reopened_at ? DOT + 'closed ' + hhmm(d.day_first_closed_at) + ', reopened ' + hhmm(d.day_reopened_at) : '') + DOT + 'closed ' + hhmm(d.day_closed_at);
      else if (this.dayStarted()) meta.textContent = plural(Number(d.stops_closed) || 0, 'stop').replace(/ stops?$/, ' done') + DOT + (this.leftRows().length) + ' left' + DOT + 'ends ' + clock12(d.day_to) + this.reopenWords();
      else meta.textContent = plural(Number(d.stops_total) || this.rows.length, 'stop') + DOT + clock12(d.day_from) + ' to ' + clock12(d.day_to) + (d.planned_miles ? DOT + (Math.round(Number(d.planned_miles) * 10) / 10) + ' mi' : '');
    }
    reopenWords() { var d = this.day; return (d && d.day_reopened_at && !this.dayClosed()) ? DOT + 'closed ' + hhmm(d.day_first_closed_at) + ', reopened ' + hhmm(d.day_reopened_at) : ''; }
    renderSwitch() {
      var s = this.$('switch'); clear(s);
      var self = this;
      if (this.view === 'day' && this.day) {
        // round 3 (his chair 2026-09-24): a closed day keeps List | Map -- he closed the day from the map and had nowhere to go
        s.hidden = false;
        s.appendChild(btn(this.pane === 'list' ? 'is-on' : '', 'List', 'switch-list', function () { self.pane = 'list'; self.dropMap(); self.renderAll(); }));
        s.appendChild(btn(this.pane === 'map' ? 'is-on' : '', 'Map', 'switch-map', function () { self.pane = 'map'; self.renderAll(); }));
      } else if (this.view === 'stop' && this.curb && (this.curb.stop_state === 'arrived' || this.curb.stop_state === 'closed')) {
        s.hidden = false;
        // 1.1.0 (Q21): Stop | Photos -- the Notes face retired; what he says hangs on a service line, on the Stop pane
        s.appendChild(btn(this.stopPane === 'stop' ? 'is-on' : '', 'Stop', 'tab-stop', function () { self.stopPane = 'stop'; self.renderAll(); }));
        if (DOORS.add_stop_photo) s.appendChild(btn(this.stopPane === 'photos' ? 'is-on' : '', 'Photos', 'tab-photos', function () { self.stopPane = 'photos'; self.renderAll(); }));
      } else s.hidden = true;
    }
    renderBody() {
      var b = this.$('body'); clear(b);
      if (!this.day) {
        b.appendChild(el('p', 'tp-quiet', 'No released route stands for you today. The office releases the day; the list reads it here.'));
        this.renderNextDay(b);
        // his chair's catch (2026-09-23): the empty day names the login and offers the way out -- a stale office login
        // must never read like a day the office forgot to release
        var login = (window.AppContext || {}).user_id || '';
        if (login) {
          var w = el('p', 'tp-quiet', 'Signed in as ' + login + (this.loginEmployee === null ? ' -- not a technician\'s login. The phone reads a technician\'s own day.' : '.'));
          w.setAttribute('data-tech', 'signed-in-as'); b.appendChild(w);
          if (window.ShellAuth && window.ShellAuth.auth) {
            // scope local: this browser's kept login is dropped whether or not the server answers -- a kept login whose server
            // session is gone (Local's story rebuilt under it) answers 403 session_not_found and the library then keeps the
            // stored session; the phone drops it itself, and the page returns to the gate
            b.appendChild(btn('tp-big tp-small', 'Sign out', 'sign-out', function () {
              var a = window.ShellAuth.auth;
              a.signOut({ scope: 'local' }).catch(function () { return null; }).then(function () {
                try { if (a.storageKey) window.localStorage.removeItem(a.storageKey); } catch (e) { /* the gate still asks */ }
                window.location.reload();
              });
            }));
          }
        }
        return;
      }
      if (this.view === 'day') { if (this.pane === 'map') this.renderMap(b); else this.renderList(b); }
      else if (this.view === 'stop') this.renderStop(b);
      else if (this.view === 'close') this.renderClose(b);
      else if (this.view === 'dayclose') this.renderDayClose(b);
    }

    // FACE 1 and 2: THE LIST -- the closed stops one line with a count; the current lit; what is left fills the screen
    renderList(b) {
      var self = this;
      var ul = el('ul', 'tp-list'); ul.setAttribute('data-tech', 'list');
      var closed = this.closedRows(), cur = this.currentRow();
      if (closed.length) {
        var fold = el('li', 'tp-row tp-row--fold' + (this.foldOpen ? ' is-open' : '')); fold.setAttribute('data-tech', 'fold');
        fold.appendChild(el('span', 'tp-seq', ''));
        fold.appendChild(el('span', 'tp-name', 'Closed stops' + DOT + closed.length));
        fold.appendChild(el('span', 'tp-win', this.foldOpen ? 'hide \u2039' : (hhmm(closed[0].arrived_at) + '\u2013' + hhmm(closed[closed.length - 1].departed_at) + ' \u203a')));
        fold.addEventListener('click', function () { self.foldOpen = !self.foldOpen; self.renderAll(); });
        ul.appendChild(fold);
        if (this.foldOpen) closed.forEach(function (row) {
          var li = el('li', 'tp-row tp-row--done'); li.setAttribute('data-tech', 'row'); li.setAttribute('data-stop', row.route_stop_id); li.setAttribute('data-state', 'closed');
          li.appendChild(el('span', 'tp-seq', ''));
          li.appendChild(el('span', 'tp-name', row.place));
          li.appendChild(el('span', 'tp-win', hhmm(row.arrived_at) + '\u2013' + hhmm(row.departed_at) + ' \u203a'));
          li.addEventListener('click', function () { self.openStopFace(row.route_stop_id); });   // the second tap opens the closed stop (D-B.4)
          ul.appendChild(li);
        });
      }
      this.leftRows().forEach(function (row) {
        var isCur = cur && row.route_stop_id === cur.route_stop_id && self.dayStarted();
        var li = el('li', 'tp-row' + (isCur ? ' tp-row--cur' : '')); li.setAttribute('data-tech', 'row'); li.setAttribute('data-stop', row.route_stop_id); li.setAttribute('data-state', row.stop_state);
        li.appendChild(el('span', 'tp-seq', row.seq));
        li.appendChild(el('span', 'tp-name', row.place));
        li.appendChild(el('span', 'tp-win', clock12(row.eta)));
        var l2 = (row.service || '-') + (row.account && row.account !== row.place ? DOT + row.account : '') + (row.in_pool ? DOT + 'back in the pool' : '');   // Q23: a never-reached stop of a closed day reads where its work went
        if (isCur && self.here && row.latitude && row.longitude) l2 += DOT + (Math.round(straightMiles(self.here.lat, self.here.lon, Number(row.latitude), Number(row.longitude)) * 10) / 10) + ' mi';
        li.appendChild(el('span', 'tp-l2', l2));
        if (isCur) li.appendChild(el('span', 'tp-tag', row.stop_state === 'arrived' ? 'arrived at ' + hhmm(row.arrived_at) : (row.on_my_way_at ? 'next' + DOT + 'on my way at ' + hhmm(row.on_my_way_at) : 'next')));
        li.addEventListener('click', function () { self.openStopFace(row.route_stop_id); });
        ul.appendChild(li);
      });
      b.appendChild(ul);
      if (!this.rows.length) b.appendChild(el('p', 'tp-quiet', 'No stops on this day.'));
    }

    // THE MAP (D-A.3): today's pins numbered in the released order, joined; the technician's position; the board's seam
    renderMap(b) {
      var self = this;
      var wrap = el('div', 'tp-map'); wrap.setAttribute('data-tech', 'map');
      var ground = el('div', 'tp-map-ground'); ground.setAttribute('data-tech', 'map-ground'); wrap.appendChild(ground);
      var you = el('div', 'tp-map-you', this.here ? '\u25cf you' : 'your position: not shared'); you.setAttribute('data-tech', 'map-you'); wrap.appendChild(you);
      b.appendChild(wrap);
      var pins = this.rows.filter(function (r) { return r.latitude !== null && r.latitude !== undefined && r.longitude !== null && r.longitude !== undefined; });
      wrap.setAttribute('data-pins', String(pins.length));
      if (!pins.length) { ground.appendChild(el('p', 'tp-quiet', 'No stop of this day carries a coordinate yet.')); return; }
      // THE BLANK GROUND (Q4, the board's law read on a phone): with NO KEY on the deployment the pins and the line are the
      // face's OWN DRAWING -- the library is never loaded, nothing of the map's is called (the library's test mode still
      // posts its telemetry, which a phone with no key has no business sending); with a key the street map comes under them
      if (!this.mapToken()) { this.drawSvgPins(ground, pins); this.askPosition(); return; }
      loadRenderer().then(function (lib) {
        if (!self.root || self.pane !== 'map' || !ground.isConnected) return;
        if (!lib) { self.drawSvgPins(ground, pins); return; }
        self.drawLibPins(lib, ground, pins);
      });
      this.askPosition();
    }
    mapToken() { var ctx = window.AppContext || {}; var t = ctx.integrations && ctx.integrations[TOKEN_KEY]; return (t && !/^__[A-Z_]+__$/.test(t)) ? t : null; }
    drawLibPins(lib, ground, pins) {
      var self = this;
      this.dropMap();
      var token = this.mapToken();
      try {
        var coords = pins.map(function (p) { return [Number(p.longitude), Number(p.latitude)]; });
        var lons = coords.map(function (c) { return c[0]; }), lats = coords.map(function (c) { return c[1]; });
        // the street map under the pins: only ever reached with a key (renderMap draws its own pins without one)
        var opts = { container: ground, style: token ? RENDERER_STYLE : BLANK_STYLE, bounds: [[Math.min.apply(null, lons), Math.min.apply(null, lats)], [Math.max.apply(null, lons), Math.max.apply(null, lats)]], fitBoundsOptions: { padding: 40 }, attributionControl: !!token, accessToken: token };
        var map = new lib.Map(opts);
        this.map = map; this.mapLib = lib;
        map.on('load', function () {
          try {
            map.addSource('tp-line', { type: 'geojson', data: { type: 'Feature', geometry: { type: 'LineString', coordinates: coords } } });
            map.addLayer({ id: 'tp-line', type: 'line', source: 'tp-line', paint: { 'line-color': '#0f62fe', 'line-width': 3 } });
          } catch (ignored) { /* the pins still stand */ }
        });
        var cur = this.currentRow();
        pins.forEach(function (p, i) {
          var pin = el('div', 'tp-pin' + (p.stop_state === 'closed' ? ' tp-pin--done' : (cur && cur.route_stop_id === p.route_stop_id && self.dayStarted() ? ' tp-pin--cur' : '')), p.seq);
          pin.setAttribute('data-tech', 'pin');
          new lib.Marker({ element: pin }).setLngLat(coords[i]).addTo(map);
        });
        ground.setAttribute('data-tech-ground', token ? 'tiles' : 'blank');
      } catch (e) { this.drawSvgPins(ground, pins); }
    }
    // no renderer (the script blocked, the phone offline for the library): the pins as one drawing, still in order
    drawSvgPins(ground, pins) {
      clear(ground);
      ground.setAttribute('data-tech-ground', 'svg');
      var lats = pins.map(function (p) { return Number(p.latitude); }), lons = pins.map(function (p) { return Number(p.longitude); });
      var minLat = Math.min.apply(null, lats), maxLat = Math.max.apply(null, lats), minLon = Math.min.apply(null, lons), maxLon = Math.max.apply(null, lons);
      var W = 350, H = 470, pad = 30;
      var sx = function (lon) { return maxLon === minLon ? W / 2 : pad + (lon - minLon) / (maxLon - minLon) * (W - 2 * pad); };
      var sy = function (lat) { return maxLat === minLat ? H / 2 : H - pad - (lat - minLat) / (maxLat - minLat) * (H - 2 * pad); };
      var ns = 'http://www.w3.org/2000/svg';
      var svg = document.createElementNS(ns, 'svg'); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.setAttribute('class', 'tp-map-svg');
      var path = document.createElementNS(ns, 'path');
      path.setAttribute('d', pins.map(function (p, i) { return (i ? 'L' : 'M') + sx(Number(p.longitude)).toFixed(1) + ' ' + sy(Number(p.latitude)).toFixed(1); }).join(' '));
      path.setAttribute('fill', 'none'); path.setAttribute('stroke', '#0f62fe'); path.setAttribute('stroke-width', '3'); path.setAttribute('stroke-linejoin', 'round');
      svg.appendChild(path);
      var cur = this.currentRow(), self = this;
      pins.forEach(function (p) {
        var g = document.createElementNS(ns, 'g'); g.setAttribute('data-tech', 'pin');
        var c = document.createElementNS(ns, 'circle'); c.setAttribute('cx', sx(Number(p.longitude))); c.setAttribute('cy', sy(Number(p.latitude))); c.setAttribute('r', '12');
        c.setAttribute('fill', p.stop_state === 'closed' ? '#8d8d8d' : (cur && cur.route_stop_id === p.route_stop_id && self.dayStarted() ? '#0f62fe' : '#161616'));
        var t = document.createElementNS(ns, 'text'); t.setAttribute('x', sx(Number(p.longitude))); t.setAttribute('y', sy(Number(p.latitude)) + 4); t.setAttribute('fill', '#fff'); t.setAttribute('font-size', '12'); t.setAttribute('text-anchor', 'middle'); t.setAttribute('font-family', 'ui-monospace, Consolas, monospace'); t.textContent = p.seq;
        g.appendChild(c); g.appendChild(t); svg.appendChild(g);
      });
      ground.appendChild(svg);
    }
    dropMap() { if (this.map) { try { this.map.remove(); } catch (ignored) { /* gone */ } this.map = null; } }
    askPosition() {
      var self = this;
      if (this.here || this._askedPos || !navigator.geolocation) return;
      this._askedPos = true;
      try { navigator.geolocation.getCurrentPosition(function (pos) { self.here = { lat: pos.coords.latitude, lon: pos.coords.longitude }; if (self.view === 'day' || self.view === 'stop') self.renderAll(); }, function () { /* not shared: the face says so */ }, { maximumAge: 60000, timeout: 8000 }); } catch (ignored) { /* no position */ }
    }

    // FACE 3 and 4: THE STOP -- the curb read; the reach button IS the preference; Directions; the stamps; Stop | Notes | Photos
    async openStopFace(stopId) {
      this.busy(true);
      var c = await this.readCurb(stopId);
      this.busy(false);
      if (!c) return;
      this.curb = c; this.openStop = stopId; this.view = 'stop'; this.stopPane = 'stop'; this.fees = this.fees && this.fees.stop === stopId ? this.fees : null; this.feesOpen = false; this.exceptions = {}; this.panelItem = null;
      this.say(null); this.stopPoll(); this.renderAll(); this.askPosition();
    }
    async reopenStop() { if (this.openStop) { var c = await this.readCurb(this.openStop); if (c) this.curb = c; } this.renderAll(); }
    backToDay() { this.view = 'day'; this.curb = null; this.openStop = null; this.say(null); this.load(true); }
    renderStop(b) {
      var self = this, c = this.curb; if (!c) return;
      var head = el('div', 'tp-stop');
      head.appendChild(el('div', 'tp-sname', c.place)).setAttribute('data-tech', 'stop-name');
      if (c.stop_state === 'pending') head.appendChild(el('div', 'tp-addr', [c.street, c.city].filter(Boolean).join(', '))).setAttribute('data-tech', 'stop-addr');
      head.appendChild(el('div', 'tp-svc', (c.service || '-'))).setAttribute('data-tech', 'stop-svc');
      if (c.stop_state === 'pending') {
        var dist = (this.here && c.latitude && c.longitude) ? (Math.round(straightMiles(this.here.lat, this.here.lon, Number(c.latitude), Number(c.longitude)) * 10) / 10) + ' mi' + DOT : '';
        head.appendChild(el('div', 'tp-dist', dist + 'planned ' + clock12(c.eta) + (c.window_text ? DOT + c.window_text : ''))).setAttribute('data-tech', 'stop-dist');
      }
      b.appendChild(head);
      // the stamps line (sheet 4): on my way . arrived . the fees captured or written
      if (c.on_my_way_at || c.arrived_at || c.departed_at) {
        var st = el('div', 'tp-stamp'); st.setAttribute('data-tech', 'stamps');
        var parts = [];
        if (c.on_my_way_at) parts.push('on my way <b>' + hhmm(c.on_my_way_at) + '</b>');
        if (c.arrived_at) parts.push('arrived <b>' + hhmm(c.arrived_at) + '</b>');
        if (c.departed_at) parts.push('closed <b>' + hhmm(c.departed_at) + '</b>');
        (c.fees || []).forEach(function (f) { parts.push('<b>' + f.method + (f.reference ? ' ' + f.reference : '') + DOT + money(f.amount) + '</b>' + (f.collected_at ? ' at ' + hhmm(f.collected_at) : '')); });
        if (this.fees && this.fees.stop === c.route_stop_id) parts.push('<b>' + this.fees.method + (this.fees.reference ? ' ' + this.fees.reference : '') + DOT + money(this.fees.amount) + '</b> captured, written at Accept');
        st.innerHTML = parts.join(DOT);
        b.appendChild(st);
      }
      if (this.stopPane === 'photos') return this.renderPhotos(b);
      // THE CURB READ (S-1.4, S-3.2): the gate, the notes, who is home
      var kv = el('div', 'tp-kv'); kv.setAttribute('data-tech', 'kv');
      if (c.gate_code) { kv.appendChild(el('i', null, 'gate')); kv.appendChild(el('span', 'tp-code', c.gate_code)).setAttribute('data-tech', 'kv-gate'); }
      if (c.field_notes) { kv.appendChild(el('i', null, 'notes')); var n = el('span', null, ''); n.setAttribute('data-tech', 'kv-notes'); var m = /^([A-Z][A-Z ]{2,})(\b.*)$/.exec(c.field_notes); if (m) { n.appendChild(el('span', 'tp-warn', m[1].trim())); n.appendChild(document.createTextNode(' ' + m[2].trim())); } else n.textContent = c.field_notes; kv.appendChild(n); }
      if (c.contact_name) { kv.appendChild(el('i', null, c.stop_state === 'pending' ? 'people' : 'home')); var p = el('span', null, ''); p.setAttribute('data-tech', 'kv-people'); p.appendChild(el('b', null, c.contact_name)); p.appendChild(document.createTextNode(DOT + 'prefers ' + (c.prefers === 'voice' ? 'a call' : c.prefers))); kv.appendChild(p); }
      if (kv.childNodes.length) b.appendChild(kv);
      // THE LINES (1.1.0, Q21): once arrived, the service lines with their one door stand here, under the curb; on a closed stop
      // they read their verdicts and take a note only
      if (c.stop_state === 'arrived' || c.stop_state === 'closed') this.renderLines(b, c.stop_state === 'closed', 'stop-lines');
      // THE LAST THREE (S-3.4)
      b.appendChild(el('div', 'tp-sec', 'last three visits'));
      var h = el('ul', 'tp-hist'); h.setAttribute('data-tech', 'hist');
      (c.history || []).forEach(function (v) {
        var li = el('li'); li.appendChild(el('span', 'tp-d', v.served_on)); li.appendChild(el('span', null, (v.service || '-') + (v.technician ? DOT + v.technician.split(' ')[0] : ''))); li.appendChild(el('span', 'tp-n', v.note || '\u2014')); h.appendChild(li);
      });
      if (!(c.history || []).length) { var li0 = el('li'); li0.appendChild(el('span', 'tp-d', '\u2014')); li0.appendChild(el('span', null, 'first visit on the record')); h.appendChild(li0); }
      b.appendChild(h);
      // Q-T4 on a closed stop: the check's number fixed, nothing else
      if (c.stop_state === 'closed' && DOORS.fix_check_number && !this.dayClosed() && (c.fees || []).some(function (f) { return f.method === 'check'; }) && this.may(VERB_CLOSE)) {
        var f0 = (c.fees || []).filter(function (f) { return f.method === 'check'; })[0];
        var fx = el('div', 'tp-field'); fx.appendChild(el('label', null, 'the check\'s number'));
        var inp = el('input'); inp.type = 'text'; inp.value = f0.reference || ''; inp.setAttribute('data-tech', 'fix-input'); fx.appendChild(inp);
        fx.appendChild(btn('tp-big tp-small', 'Fix the number', 'fix-check', async function () {
          var r = await self.rpc(DOORS.fix_check_number, { p_payment: f0.payment_id, p_by: self.byWord(), p_reference: inp.value });
          if (r.ok) { self.say('The check\'s number now reads ' + inp.value + '.', false); await self.reopenStop(); } else self.say(r.words, true);
        }));
        b.appendChild(fx);
      }
      if (this.feesOpen) this.renderFeesPanel(b);
    }
    // THE LINES (1.1.0, Q21 -- ONE DOOR FOR WHAT THE TECHNICIAN SAYS): the service lines, each with "Something to report" -- the same
    // panel on the stop face (once arrived) and on the close sheet; Keep writes the note AT ONCE through the door with the line
    // named, the verdict and the reason ride Accept; the words on a line are READ FROM THE ROWS (the line's note) with the verdict
    // held in memory until Accept -- never the phone's memory alone (gap D). On a CLOSED stop the lines read their verdicts from
    // the rows and "Something to add" takes a note only (Q-T4), until the day closes.
    lastNote(row) { var n = String((row && row.note) || '').split(' | ').filter(Boolean); return n.length ? n[n.length - 1].replace(/^\d\d:\d\d [^:]*: /, '') : ''; }
    lineWords(l, x) {
      var rowNote = this.lastNote(l);
      var notDone = x ? x.done === false : l.status === 'not_done';
      var head = notDone ? 'why not: ' + this.reasonWord(x ? x.reason : l.reason) : ((rowNote || (x && x.note)) ? 'noted' : '');
      var tail = rowNote || (x && x.note) || '';
      return [head, tail].filter(Boolean).join(DOT);
    }
    renderLines(b, closedStop, mark) {
      var self = this, c = this.curb; if (!c) return;
      var mayWrite = !closedStop && this.may(VERB_CLOSE);
      var mayAdd = closedStop && !!DOORS.add_stop_note && !this.dayClosed() && this.may(VERB_CLOSE);
      b.appendChild(el('div', 'tp-sec', 'the services' + DOT + (closedStop ? 'closed at ' + hhmm(c.departed_at) : 'done unless you say otherwise')));
      var ul = el('ul', 'tp-lines'); ul.setAttribute('data-tech', mark || 'close-lines');
      (c.lines || []).forEach(function (l) {
        var x = closedStop ? null : (self.exceptions[l.item] || null);
        var notDone = closedStop ? l.status === 'not_done' : !!(x && x.done === false);
        var li = el('li', 'tp-line'); li.setAttribute('data-tech', 'line'); li.setAttribute('data-item', l.item); li.setAttribute('data-verdict', notDone ? 'not_done' : 'done');
        li.appendChild(el('span', 'tp-what', l.service + (l.target && l.target !== c.place ? DOT + l.target : '')));
        // the verdict's chip: NOT on the open stop's clean line (his chair 2026-09-25: a green "done" before Close this stop asserts
        // what the rows do not hold; the heading already says "done unless you say otherwise") -- a not-done line reads its chip
        // anywhere; the close sheet reads every verdict before the stamp; the closed stop reads what the rows say
        if (notDone || closedStop || mark !== 'stop-lines') li.appendChild(el('span', 'tp-st' + (notDone ? ' is-x' : ''), notDone ? 'not done' : 'done'));
        var exc = el('span', 'tp-exc');
        var words = self.lineWords(l, x);
        if (self.panelItem !== l.item) {
          if (words) exc.appendChild(document.createTextNode(words + DOT));
          if (mayWrite) exc.appendChild(btn(null, words ? 'change' : 'Something to report', 'line-report', function () { self.panelItem = l.item; self.renderAll(); }));
          else if (mayAdd) exc.appendChild(btn(null, 'Something to add', 'line-add', function () { self.panelItem = l.item; self.renderAll(); }));
        }
        li.appendChild(exc);
        if (self.panelItem === l.item) li.appendChild(closedStop ? self.addPanel(l) : self.linePanel(l, x));
        ul.appendChild(li);
      });
      b.appendChild(ul);
    }
    // the note written at once, on its line, with THE PHONE'S CLOCK (Q20); the face says when it is writing (a chair waits on its word)
    async writeLineNote(item, text) {
      var c = this.curb; if (!c || !DOORS.add_stop_note) return false;
      this.busy(true);
      var r = await this.rpc(DOORS.add_stop_note, { p_stop: c.route_stop_id, p_by: this.byWord(), p_text: text, p_clock: hhmm(new Date().toISOString()), p_item: item });
      this.busy(false);
      if (!r.ok) { this.say(r.words, true); return false; }
      this.say(null); return true;
    }
    // Q-T4 under Q21: a closed stop takes a note ONLY, on the line it was about; the verdict, the reason and the amount are the office's
    addPanel(l) {
      var self = this;
      var p = el('div', 'tp-panel'); p.setAttribute('data-tech', 'panel');
      p.appendChild(el('label', null, 'something to add' + DOT + 'a note only; the verdict is the office\'s to change'));
      var ta = el('textarea'); ta.setAttribute('data-tech', 'panel-note'); p.appendChild(ta);
      var acts = el('div', 'tp-pair');
      acts.appendChild(btn('tp-big tp-small tp-big--accent', 'Keep', 'panel-keep', async function () {
        if (!ta.value.trim()) return;
        if (await self.writeLineNote(l.item, ta.value.trim())) { self.panelItem = null; await self.reopenStop(); }
      }));
      acts.appendChild(btn('tp-big tp-small', 'Cancel', 'panel-cancel', function () { self.panelItem = null; self.renderAll(); }));
      p.appendChild(acts);
      return p;
    }
    // THE PHOTOS face (sheet 4, S-4.2): the thumbnails taken here and Take a photo -- the bytes to the bucket, the row through the door
    renderPhotos(b) {
      var self = this, c = this.curb;
      var wrap = el('div', 'tp-photos'); wrap.setAttribute('data-tech', 'photo-list');
      (c.photos || []).forEach(function (p) {
        var img = el('img', 'tp-thumb'); img.alt = p.file_name || 'photo'; img.setAttribute('data-tech', 'photo'); wrap.appendChild(img);
        try { self.client.storage.from(BUCKET).createSignedUrl(p.storage_ref, 600).then(function (r) { if (r && r.data && r.data.signedUrl) img.src = r.data.signedUrl; }); } catch (ignored) { /* the row stands; the bytes are elsewhere */ }
      });
      if (!(c.photos || []).length) wrap.appendChild(el('div', 'tp-thumb', 'none yet'));
      b.appendChild(wrap);
      if (DOORS.add_stop_photo && !this.dayClosed() && this.may(VERB_CLOSE)) {
        var f = el('div', 'tp-field');
        var inp = el('input'); inp.type = 'file'; inp.accept = 'image/*'; inp.setAttribute('capture', 'environment'); inp.setAttribute('data-tech', 'photo-input'); inp.hidden = true;
        f.appendChild(inp);
        f.appendChild(btn('tp-big tp-small', 'Take a photo', 'photo-take', function () { inp.click(); }));
        inp.addEventListener('change', async function () {
          var file = inp.files && inp.files[0]; if (!file) return;
          self.busy(true);
          var tenant = (self.context && self.context.tenant_id) || 'tenant';
          // card 76 (1): resized on the phone first -- 1600 px on the long side; the name keeps its stem, the bytes are a jpeg then
          var shot = await shrinkPhoto(file);
          var name = file.name || 'photo.jpg';
          if (shot.shrunk) name = name.replace(/\.[^.]+$/, '') + '.jpg';
          var ref = tenant + '/' + c.route_stop_id + '/' + Date.now() + '-' + name.replace(/[^A-Za-z0-9._-]/g, '_');
          try {
            var up = await self.client.storage.from(BUCKET).upload(ref, shot.bytes, { contentType: shot.shrunk ? 'image/jpeg' : (file.type || 'image/jpeg'), upsert: false });
            if (up.error) throw new Error(up.error.message);
            var r = await self.rpc(DOORS.add_stop_photo, { p_stop: c.route_stop_id, p_by: self.byWord(), p_file_name: name, p_storage_ref: ref });
            if (!r.ok) throw new Error(r.words);
            self.say(shot.shrunk ? 'The photo landed, resized to ' + shot.width + ' x ' + shot.height + '.' : null, false); await self.reopenStop();
          } catch (e) { self.say('the photo did not land: ' + ((e && e.message) || String(e)), true); }
          self.busy(false);
        });
        b.appendChild(f);
      }
    }
    // COLLECT FEES (sheet 4, his word): captured at the door, WRITTEN at Accept with the stop -- never cash
    renderFeesPanel(b) {
      var self = this, c = this.curb;
      var price = (c.lines || []).reduce(function (s, l) { return s + (Number(l.price) || 0); }, 0);
      var f = this.fees && this.fees.stop === c.route_stop_id ? this.fees : { stop: c.route_stop_id, method: 'check', amount: price ? price.toFixed(2) : '', reference: '' };
      var p = el('div', 'tp-panel'); p.setAttribute('data-tech', 'fees-panel'); p.style.margin = '10px 18px 0';
      p.appendChild(el('label', null, 'paid today'));
      var seg = el('div', 'tp-seg');
      ['check', 'card', 'none'].forEach(function (m) { seg.appendChild(btn(f.method === m ? 'is-on' : '', m === 'card' ? 'Card' : m === 'check' ? 'Check' : 'Nothing', 'fees-' + m, function () { f.method = m; self.fees = f; self.renderAll(); })); });
      p.appendChild(seg);
      if (f.method !== 'none') {
        p.appendChild(el('label', null, 'amount'));
        var amt = el('input'); amt.type = 'number'; amt.step = '0.01'; amt.inputMode = 'decimal'; amt.value = f.amount; amt.setAttribute('data-tech', 'fees-amount'); amt.addEventListener('input', function () { f.amount = amt.value; }); p.appendChild(amt);
        p.appendChild(el('label', null, f.method === 'check' ? 'the check\'s number' : 'the processor\'s reference'));
        var ref = el('input'); ref.type = 'text'; ref.value = f.reference; ref.setAttribute('data-tech', 'fees-reference'); ref.addEventListener('input', function () { f.reference = ref.value; }); p.appendChild(ref);
        p.appendChild(el('div', 'tp-hint', 'Written with the stop at Accept, one act. Cash is never taken; a card is the processor\'s, never a number here.'));
      }
      p.appendChild(btn('tp-big tp-small', f.method === 'none' ? 'Nothing collected' : 'Keep it for the close', 'fees-keep', function () { self.fees = f.method === 'none' ? null : f; self.feesOpen = false; self.renderAll(); }));
      b.appendChild(p);
    }

    // FACE 5: THE CLOSE -- every line done unless you say otherwise; the exceptions' panel; what rides the close; Accept
    renderClose(b) {
      var self = this, c = this.curb; if (!c) return;
      var head = el('div', 'tp-stop');
      head.appendChild(el('div', 'tp-sname', 'Close this stop'));
      head.appendChild(el('div', 'tp-addr', 'arrived ' + hhmm(c.arrived_at) + (c.arrived_at ? DOT + Math.max(0, Math.round((Date.now() - new Date(c.arrived_at).getTime()) / 60000)) + ' min on site' : '')));
      b.appendChild(head);
      // 1.1.0 (Q21): the same lines as the stop face -- the reports made at the curb already on their lines, read from the rows
      this.renderLines(b, false, 'close-lines');
      b.appendChild(el('div', 'tp-sec', 'riding this close'));
      var h = el('ul', 'tp-hist'); h.setAttribute('data-tech', 'riding');
      // no notes row since 1.1.0: a note lives on its line
      var r2 = el('li'); r2.appendChild(el('span', 'tp-d', 'photo')); r2.appendChild(el('span', null, (c.photos || []).length ? plural((c.photos || []).length, 'photo') : 'none')); h.appendChild(r2);
      var r3 = el('li'); r3.appendChild(el('span', 'tp-d', 'fees')); var fs = el('span', null, ''); fs.setAttribute('data-tech', 'riding-fees');
      if (this.fees && this.fees.stop === c.route_stop_id && this.fees.method !== 'none') { fs.appendChild(document.createTextNode(this.fees.method + (this.fees.reference ? ' ' + this.fees.reference : '') + DOT + money(this.fees.amount) + DOT)); }
      else fs.appendChild(document.createTextNode('nothing collected' + DOT));
      // his chair's catch (2026-09-24, round 3: "I think we need a few more clicks! LOL"): collect sent him to the stop face, on
      // whatever pane he had left, and the foot's Collect fees then toggled the panel shut -- three taps for one act. The panel
      // opens HERE, under the riding list, and Keep returns to this sheet with the fees riding
      var chg = btn(null, this.fees && this.fees.stop === c.route_stop_id ? 'change' : 'collect', 'riding-collect', function () { self.feesOpen = true; self.renderAll(); }); chg.style.cssText = 'background:transparent;border:0;color:#0f62fe;font:inherit;font-size:14px;padding:0;border-bottom:1px solid #0f62fe;cursor:pointer';
      fs.appendChild(chg); r3.appendChild(fs); h.appendChild(r3);
      b.appendChild(h);
      if (this.feesOpen) this.renderFeesPanel(b);
    }
    reasonWord(code) { for (var i = 0; i < this.reasons.length; i++) if (this.reasons[i].code === code) return this.reasons[i].meaning; return code || ''; }
    linePanel(l, x) {
      var self = this;
      var p = el('div', 'tp-panel'); p.setAttribute('data-tech', 'panel');
      // 1.1.0 (Q21): with the door standing, Keep WRITES the note at once on the line (the verdict and the reason held for Accept);
      // without the door (an older declaration) the note rides Accept in memory, 1.0.0's way
      var writesNow = !!(DOORS.add_stop_note && !this.dayClosed());
      var rowNote = this.lastNote(l);
      var state = { done: x ? x.done !== false : true, reason: (x && x.reason) || '', note: (!writesNow && x && x.note) || '' };
      var seg = el('div', 'tp-seg'); seg.style.gridTemplateColumns = '1fr 1fr';
      seg.appendChild(btn(state.done ? 'is-on' : '', 'Done, noted', 'panel-done', function () { state.done = true; draw(); }));
      seg.appendChild(btn(!state.done ? 'is-on' : '', 'Not done', 'panel-notdone', function () { state.done = false; draw(); }));
      p.appendChild(seg);
      var body = el('div'); p.appendChild(body);
      function draw() {
        clear(body);
        seg.children[0].className = state.done ? 'is-on' : ''; seg.children[1].className = state.done ? '' : 'is-on';
        if (!state.done) {
          body.appendChild(el('label', null, 'why not'));
          var sel = el('select'); sel.setAttribute('data-tech', 'panel-reason');
          var o0 = el('option', null, 'choose a reason'); o0.value = ''; sel.appendChild(o0);
          self.reasons.forEach(function (r) { var o = el('option', null, r.meaning); o.value = r.code; if (r.code === state.reason) o.selected = true; sel.appendChild(o); });
          sel.addEventListener('change', function () { state.reason = sel.value; keep.disabled = !state.reason; });
          body.appendChild(sel);
          body.appendChild(el('div', 'tp-hint', 'Goes back to the office to place again. Your reason rides with it.'));
        }
        body.appendChild(el('label', null, state.done ? 'what you saw' : 'a note (other needs one)'));
        if (rowNote) body.appendChild(el('div', 'tp-hint', 'On the line already: ' + rowNote));
        var ta = el('textarea'); ta.value = state.note; ta.setAttribute('data-tech', 'panel-note'); ta.addEventListener('input', function () { state.note = ta.value; }); body.appendChild(ta);
        var acts = el('div', 'tp-pair');
        var keep = btn('tp-big tp-small tp-big--accent', 'Keep', 'panel-keep', async function () {
          if (!state.done && !state.reason) return;
          if (!state.done && state.reason === 'other' && !state.note.trim() && !rowNote) { self.say('Other needs a note: why the line was not done.', true); return; }
          var text = state.note.trim();
          if (writesNow && text) { if (!(await self.writeLineNote(l.item, text))) return; text = ''; }
          if (state.done && !text) delete self.exceptions[l.item];
          else self.exceptions[l.item] = { done: state.done, reason: state.done ? null : state.reason, note: text || null };
          self.panelItem = null;
          if (writesNow && state.note.trim()) await self.reopenStop(); else self.renderAll();
        });
        keep.disabled = !state.done && !state.reason;
        acts.appendChild(keep);
        acts.appendChild(btn('tp-big tp-small', 'Cancel', 'panel-cancel', function () { self.panelItem = null; self.renderAll(); }));
        body.appendChild(acts);
      }
      draw();
      return p;
    }
    async accept() {
      var self = this, c = this.curb; if (!c) return;
      var lines = Object.keys(this.exceptions).map(function (item) { var x = self.exceptions[item]; return { item: item, done: x.done !== false, reason: x.reason || null, note: x.note || null }; });
      var fees = (this.fees && this.fees.stop === c.route_stop_id && this.fees.method !== 'none') ? { method: this.fees.method, amount: this.fees.amount, reference: this.fees.reference || null } : null;
      this.busy(true);
      var r = await this.rpc(DOORS.close_stop, { p_stop: c.route_stop_id, p_by: this.byWord(), p_lines: lines, p_note: null, p_fees: fees });
      this.busy(false);
      if (!r.ok) { this.say('The close was refused: ' + r.words, true); return; }
      var d = r.data || {};
      this.fees = null; this.exceptions = {}; this.curb = null; this.openStop = null; this.view = 'day';
      this.say('Closed ' + c.place + ' at ' + hhmm(d.closed_at) + DOT + plural(Number(d.lines_done) || 0, 'line') + ' done' + (Number(d.lines_not_done) ? ', ' + Number(d.lines_not_done) + ' not done (back to the office)' : '') + (d.payment_id ? DOT + 'the payment written' : '') + '.', false);
      await this.load(true);   // S-6.1: the list re-reads, the closed stop folds, the next is current without a tap
    }

    // FACE 6: THE DAY CLOSES -- the summary from the stamps; tomorrow an option; Close my day
    renderDayClose(b) {
      var s = this.summary;
      if (!s) { b.appendChild(el('p', 'tp-quiet', 'The day\'s summary is not readable yet.')); return; }
      var g = el('div', 'tp-sum'); g.setAttribute('data-tech', 'summary');
      function tile(mark, label, big, small, wide) { var d = el('div', wide ? 'tp-wide' : ''); d.setAttribute('data-tech', 'sum-' + mark); d.appendChild(el('i', null, label)); d.appendChild(el('b', null, big)); if (small) d.appendChild(el('small', null, small)); g.appendChild(d); }
      // the stops' small line says BOTH what was not done and what was never reached (his chair's catch, 2026-09-24: the summary is the
      // word before the last stamp, so the stops left to the office must be read on it)
      var stopsSmall = [];
      if (Number(s.lines_not_done)) stopsSmall.push(Number(s.lines_not_done) + ' not done' + DOT + (s.not_done_reasons || ''));
      // Q23 THE RAIN-OUT: before the stamp the stops never reached; after it, where they went (back in the pool, or placed by the office since)
      var pending = Number(s.stops_pending) || 0, inPool = Number(s.back_in_pool) || 0;
      if (pending && !this.dayClosed()) stopsSmall.push(pending + ' not reached');
      else if (pending) { if (inPool) stopsSmall.push(inPool + ' back in the pool'); if (pending > inPool) stopsSmall.push((pending - inPool) + ' placed by the office'); }
      tile('stops', 'stops', (s.stops_closed || 0) + ' of ' + (s.stops_total || 0), stopsSmall.length ? stopsSmall.join(DOT) : 'all closed');
      tile('onsite', 'on site', this.hm(s.on_site_minutes), 'planned ' + this.hm(s.planned_on_site_minutes));
      tile('drive', 'drive', (s.drive_minutes === null || s.drive_minutes === undefined) ? '\u2014' : s.drive_minutes + ' min', 'planned ' + (s.planned_drive_minutes || 0) + (s.planned_drive_miles ? DOT + (Math.round(Number(s.planned_drive_miles) * 10) / 10) + ' mi' : ''));
      tile('checks', 'checks', String(s.checks_count || 0), money(s.checks_sum || 0) + ' to hand in' + (Number(s.cards_count) ? DOT + plural(Number(s.cards_count), 'card') : ''));
      tile('office', 'to the office', '', plural(Number(s.notes_count) || 0, 'note') + DOT + plural(Number(s.photos_count) || 0, 'photo') + DOT + (Number(s.returned_count) || 0) + ' back in the pool'
        + (pending && !this.dayClosed() ? DOT + plural(pending, 'stop') + ' back in the pool when you close' : (this.dayClosed() && inPool ? DOT + plural(inPool, 'stop') + ' in the pool' : '')), true);
      b.appendChild(g);
    }
    hm(m) { var n = Math.round(Number(m) || 0); return n >= 60 ? Math.floor(n / 60) + ' h ' + (n % 60 < 10 ? '0' : '') + (n % 60) : n + ' min'; }
    renderNextDay(b) {
      var today = todayIso();
      var later = this.days.filter(function (d) { return d.route_date > today; });
      if (later.length) { var n = later[0]; b.appendChild(el('p', 'tp-quiet', 'Next: ' + weekday(n.route_date) + ' ' + mmdd(n.route_date) + DOT + plural(n.rows.length, 'stop') + ', starts ' + clock12(n.rows[0].day_from))); }
    }

    // THE FOOT: the big buttons, by face and by grant
    renderFoot() {
      var f = this.$('foot'); clear(f);
      var self = this, c = this.curb;
      if (!this.day) return;
      if (this.view === 'day') {
        if (this.dayClosed()) {
          // round 3 (his chair 2026-09-24): the closed day has a door forward -- its summary, and Tomorrow when released
          f.appendChild(btn('tp-big', 'Today\'s summary', 'to-summary', async function () { await self.readSummary(); self.view = 'dayclose'; self.renderAll(); }));
          this.renderTomorrow(f);
          return;
        }
        if (!this.dayStarted()) { if (this.may(VERB_RUN)) f.appendChild(btn('tp-big tp-big--primary', 'Start my day', 'start-day', function () { self.startDay(); })); return; }
        // his chair's catch (2026-09-24): with stops still to reach the foot offered the next stop ALONE and the day could not close;
        // the door and the paper allow the close (a stop never reached stays on the closed day for the office) -- so once the day
        // is started Close my day always stands, plain under the next stop while one is current, primary when none is left
        var cur = this.currentRow();
        if (cur) f.appendChild(btn('tp-big tp-big--accent', cur.stop_state === 'arrived' ? 'Back to ' + cur.place : 'Open the next stop', 'open-next', function () { self.openStopFace(cur.route_stop_id); }));
        if (this.may(VERB_RUN)) f.appendChild(btn('tp-big' + (cur ? '' : ' tp-big--primary'), 'Close my day', 'to-close-day', async function () { await self.readSummary(); self.view = 'dayclose'; self.stopPoll(); self.renderAll(); }));
      } else if (this.view === 'stop' && c) {
        var pair = el('div', 'tp-pair');
        // Collect fees OPENS the panel on the Stop pane; it toggles shut only when the panel already stands on that pane (his catch: a
        // toggle from the Notes pane closed what it was asked to open)
        if (c.stop_state === 'arrived' && DOORS.close_stop && this.may(VERB_CLOSE)) pair.appendChild(btn('tp-big', 'Collect fees', 'collect-fees', function () { var open = !(self.stopPane === 'stop' && self.feesOpen); self.stopPane = 'stop'; self.feesOpen = open; self.renderAll(); }));
        if (c.contact_name && c.reach && c.reach !== '-') {
          var verb = c.reach_verb || 'Call';
          var href = verb === 'Text' ? 'sms:' + c.reach : verb === 'Email' ? 'mailto:' + c.reach : 'tel:' + c.reach;
          var a = el('a', 'tp-big', verb + ' ' + String(c.contact_name).split(' ')[0]); a.href = href; a.setAttribute('data-tech', 'reach'); a.style.cssText = 'display:grid;place-items:center;text-decoration:none';
          pair.appendChild(a);
        }
        if (c.stop_state === 'pending') {
          var dest = (c.latitude && c.longitude) ? Number(c.latitude) + ',' + Number(c.longitude) : encodeURIComponent([c.street, c.city, c.state, c.postal_code].filter(Boolean).join(', '));
          var d = el('a', 'tp-big', 'Directions'); d.href = 'https://www.google.com/maps/dir/?api=1&destination=' + dest; d.target = '_blank'; d.rel = 'noopener'; d.setAttribute('data-tech', 'directions'); d.style.cssText = 'display:grid;place-items:center;text-decoration:none';
          pair.appendChild(d);
        }
        if (pair.childNodes.length) f.appendChild(pair);
        // a never-reached stop on a CLOSED day draws no stamp button: the doors refuse ("the day is closed"), and a door that does
        // not open is not drawn (his law; his question 2026-09-24 "shouldn't we disable the list for any further actions?")
        if (c.stop_state === 'pending' && this.may(VERB_RUN) && !this.dayClosed()) {
          if (!c.on_my_way_at) f.appendChild(btn('tp-big tp-big--accent', 'On my way', 'on-my-way', function () { self.stamp(DOORS.on_my_way, 'On my way'); }));
          f.appendChild(btn('tp-big ' + (c.on_my_way_at ? 'tp-big--accent' : 'tp-big--primary'), 'Arrived', 'arrive', function () { self.stamp(DOORS.arrive, 'Arrived'); }));
        } else if (c.stop_state === 'arrived' && DOORS.close_stop && this.may(VERB_CLOSE)) {
          f.appendChild(btn('tp-big tp-big--primary', 'Close this stop', 'to-close', function () { self.view = 'close'; self.panelItem = null; self.feesOpen = false; self.renderAll(); }));
        }
      } else if (this.view === 'close' && c) {
        f.appendChild(btn('tp-big tp-big--primary', 'Accept' + DOT + 'done at ' + hhmm(new Date().toISOString()), 'accept', function () { self.accept(); }));
      } else if (this.view === 'dayclose') {
        this.renderTomorrow(f);
        if (!this.dayClosed()) { if (this.may(VERB_RUN)) f.appendChild(btn('tp-big tp-big--primary', 'Close my day', 'close-day', function () { self.closeDay(); })); }
        else {
          // Q22 REOPEN MY DAY: a technician's door until midnight of the day's own date, by the phone's clock (Q20); on any other
          // date the door refuses, so the button is not drawn (a door that does not open is not drawn)
          if (DOORS.reopen_day && this.may(VERB_RUN) && this.day.route_date === todayIso()) f.appendChild(btn('tp-big', 'Reopen my day' + DOT + 'until midnight', 'reopen-day', function () { self.reopenDay(); }));
          f.appendChild(btn('tp-big', '\u2039 Today\'s list', 'back-list', function () { self.view = 'day'; self.renderAll(); }));
        }
      }
    }
    // TOMORROW'S RULE (round 3, his call 2026-09-24: "if the next day has not been released, do we want to enable that button at
    // all?" -- no): a released next day is a button with its count and its start; a draft is a quiet line and nothing of its
    // contents (the phone reads released days only); no next day, nothing. A door that does not open is not drawn.
    renderTomorrow(f) {
      var self = this, s = this.summary, n = s && s.next_day;
      if (!n || !n.route_date) return;
      if (n.state === 'draft') {
        var q = el('p', 'tp-quiet', 'Tomorrow is not released yet'); q.setAttribute('data-tech', 'tomorrow-quiet'); q.style.textAlign = 'center'; q.style.margin = '0';
        f.appendChild(q); return;
      }
      f.appendChild(btn('tp-big', 'Tomorrow' + DOT + plural(Number(n.stops) || 0, 'stop') + (n.starts ? ', starts ' + clock12(n.starts) : ''), 'tomorrow', function () { self.showDay(n.route_date); }));
    }
    showDay(date) { var d = this.days.filter(function (x) { return x.route_date === date; })[0]; if (!d) { this.say('That day is not released yet; the office releases it and it reads here.', false); return; } this.rows = d.rows; this.day = d.rows[0]; this.view = 'day'; this.pane = 'list'; this.foldOpen = false; this.say(null); this.renderAll(); }

    // -- THE DOORS ------------------------------------------------------------------------------------------------
    async startDay() {
      if (!this.day) return;
      this.busy(true);
      var r = await this.rpc(DOORS.start_day, { p_route: this.day.route_id, p_by: this.byWord() });
      this.busy(false);
      if (!r.ok) { this.say('Start my day was refused: ' + r.words, true); return; }
      this.alertSince = (r.data && r.data.started_at) || new Date().toISOString();
      this.say('Your day started at ' + hhmm(this.alertSince) + '.', false);
      await this.load(true);
    }
    async stamp(door, word) {
      if (!this.curb) return;
      this.busy(true);
      var r = await this.rpc(door, { p_stop: this.curb.route_stop_id, p_by: this.byWord() });
      this.busy(false);
      if (!r.ok) { this.say(word + ' was refused: ' + r.words, true); return; }
      this.say(null);
      await this.reopenStop();
    }
    async closeDay() {
      if (!this.day) return;
      this.busy(true);
      var r = await this.rpc(DOORS.close_day, { p_route: this.day.route_id, p_by: this.byWord() });
      this.busy(false);
      if (!r.ok) { this.say('Close my day was refused: ' + r.words, true); return; }
      this.summary = r.data || this.summary;
      var back = Number((r.data || {}).returned_now) || 0;
      this.say('Your day is closed.' + (back ? ' ' + plural(back, 'stop') + ' never reached went back to the pool.' : ''), false);
      await this.load(true);
      this.view = 'dayclose'; await this.readSummary(); this.renderAll();
    }
    // Q22: the day taken back on its own date; the face says what came back and what the office had placed meanwhile
    async reopenDay() {
      if (!this.day || !DOORS.reopen_day) return;
      this.busy(true);
      var r = await this.rpc(DOORS.reopen_day, { p_route: this.day.route_id, p_by: this.byWord(), p_today: todayIso() });
      this.busy(false);
      if (!r.ok) { this.say('Reopen my day was refused: ' + r.words, true); return; }
      var d = r.data || {}, left = d.left_to_the_office || [];
      this.alertSince = d.reopened_at || new Date().toISOString();
      this.say('Reopened at ' + hhmm(d.reopened_at) + DOT + plural(Number(d.taken_back) || 0, 'stop') + ' back on your list' + (left.length ? DOT + left.length + ' placed by the office (' + left.map(function (x) { return x.place; }).join(', ') + ')' : '') + '.', false);
      this.view = 'day'; this.pane = 'list'; this.foldOpen = false; this.summary = null;
      await this.load(true);
    }
  }

  if (typeof window !== 'undefined') {
    window.RouteStopTechnicianBlueprintUI = RouteStopTechnicianBlueprintUI;
    window.PatternRegistry = window.PatternRegistry || {};
    window.PatternRegistry['d5000000-0000-0000-0000-000000000001'] = window.RouteStopTechnicianBlueprintUI;
  }
})();
