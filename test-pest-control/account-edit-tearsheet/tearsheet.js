/**
 * Account Edit Tearsheet - Generated Blueprint UI (THE WALK FROM THE SPINE, tearsheet-001 3.0.0)
 * Blueprint ID: c7000000-0000-0000-0000-000000000001
 * Pattern: TEARSHEET (s42 intake requirements sitting; his stamp 2026-08-31:
 * "IN-1 thru IN-15 approved as written")
 *
 * Implements Pattern Interface Contract (JBA-003)
 * - mount(container) / unmount() / onContext(context) / getMetadata()
 *
 * 3.2.0: THE ADDRESS SEAM (SJ s52 leg 13; Q18 a RULED ESRI 2026-09-21 on the test of 85
 * real addresses; Q19 a: the key in the page, referrer-restricted; the mockup at his eye
 * 2026-09-22, his calls 3 and 5). Every address rides Esri's suggest as it is typed (free,
 * nothing stored) and the pick's STORED call (findAddressCandidates, forStorage=true -- the
 * vendor's clause: results may be stored only when the request says so) puts the place ON
 * THE MAP: the coordinate with its provenance (who, how exactly, when) rides the place's
 * payload beside the address text and the door writes the five together. ONE quiet line
 * under the place's grid says it: "On the map . rooftop . Esri . <date>" or "Not on the map
 * yet -- pick the address from the list". Typing in the street after a pick takes the place
 * off the map (his call 3); on Next, and before the act, a typed address with no pick is
 * sent to Esri ONCE -- placed, it is on the map like a pick; silent, the place stays off the
 * map and the door still admits it (v_places_off_the_map names it). The billing pick's
 * coordinate rides the F14 copy into the place (his call 5); the account's own billing pair
 * is never written. The search center and country come from v_intake_address_settings
 * (policy.search_center, else the client's own mean). The deployment-seam key __ESRI_KEY__:
 * no key = no list, never a block. Mapbox is gone from the intake; the map tiles are the
 * board's business and untouched.
 *
 * 3.1.2: THE SET'S PRICE (SJ s45, THE POUR SITTING; Q-AM). When billing is TOGETHER
 * the agreement carries the price OF THE SET (declared field `price` on the
 * agreement section; the field-kind law gives it the decimal device by name): the
 * edit walk loads it from the row, the Summary shows it beside the one-bill term,
 * and the payload sends it -- billed separate it stays NULL and each item row
 * carries its own. Never both by arithmetic split.
 *
 * 3.1.1: THE LIVE TOKEN (SJ s45, THE POUR SITTING; RI-909). The data client is the
 * shell's ShellData when the shell publishes one -- its token read fresh per request,
 * so a refreshed session is simply used; the self-built client stays only for shells
 * without ShellData. And the catalog read fails LOUD: the banner wears it and
 * blueprint:error DATA_LOAD_FAILED lets the shell answer session death with the
 * sign-in gate. Never a silent empty.
 *
 * 3.1.0: THE EDIT MODE (SJ s44, THE DOCKET SITTING; his stamps Q-AA/Q-AD/Q-AE
 * 2026-08-31). mode 'edit' re-enters the walk's Summary on a STANDING record: the
 * whole tree loads from the rows AS THE ROLE (ids ride the state), every device is
 * the create walk's own, and Save calls the declared door (intake_update_account)
 * with the same six-family payload plus account_id -- the arrays are the act's
 * whole truth (a missing row is removed; Q-AD). The shell hands the record by
 * setRecordId (route /accounts/:id/edit); every hand-off RELOADS from the rows.
 * mode absent or 'create' = the walk unchanged.
 *
 * 3.0.0: THE SPINE IS DECLARED CONFIGURATION (Q-N stamped (a)) -- the walk's steps
 * come from TS.spine, not from this file: account_facts (the account -> the ACCOUNT
 * ROSTER -> the triage -> the term MODES; Q-M (a)) -> place (repeating: the place ->
 * its people -> its services + specs) -> summary (EVERY fact of the act, editable in
 * place with the SAME devices (IN-8/IN-9); the term VALUES; Create). rosters_separate
 * (IN-15): the account roster and place people stay separate LISTS; the ALREADY-picker
 * and dup-check span the whole act. What stays TEMPLATE LAW (the Q-N line): one Next
 * one advance, the block NAMED (IN-3) - the triage never traps (F1/F7) - the F14
 * shortcut - ALREADY-first, one primary per place demoting quietly (F5/F17/F21) -
 * services wait for done-with-people (F20) - the item row in HIS order, Item last,
 * blank = the whole place (F26) - live rows (F25) - the live name check (F15) - the
 * rail is the walk's map wearing the door's gaps (F12/Q3) - no Save Draft, nothing
 * prefills (T8/T9) - End blank unless requested (Q11) - the field-kind law (dates =
 * calendar, addresses = Mapbox, phone = masked, email = validated, price = decimal) -
 * a selection never moves the reader - the hash is the truth. An admitted act lands
 * on the FACE, born ACTIVE.
 */

(function() {
  'use strict';

  var TS = {"schema":"services_template","function":"intake_update_account","mode":"edit","spine":{"steps":[{"key":"account_facts","label":"Account facts","contains":["account","people.roster","triage","term_modes"]},{"key":"place","repeats":true,"contains":["places","people.at_place","items"],"label_from":"location_name"},{"key":"summary","label":"Summary","contains":["account.edit","agreement.terms","people.roster.edit","places.edit","items.edit","create"]}],"version":"3.0.0","terms_placement":"modes_up_front_values_at_summary","rosters_separate":true},"entity":"account","sections":[{"key":"account","title":"The account","fields":[{"field":"account_name","input":"text","label":"Account name","required":true},{"field":"account_type","input":"select","label":"Kind","options":["residential","commercial"],"required":true},{"field":"billing_street_address","input":"text","label":"Billing street","required":true},{"field":"billing_city","input":"text","label":"City","required":true},{"field":"billing_state","input":"text","label":"State","required":true},{"field":"billing_zip_code","input":"text","label":"ZIP","required":true}],"writes":"services_template.account"},{"key":"people","title":"The people","fields":[{"field":"first_name","input":"text","label":"First name"},{"field":"last_name","input":"text","label":"Last name"},{"field":"phone_number","input":"text","label":"Phone"},{"field":"email_address","input":"text","label":"Email"},{"field":"communication_preference","input":"select","label":"Reach","options":["voice","text","email"]},{"field":"is_primary_contact","input":"checkbox","label":"Primary"}],"writes":"services_template.contact"},{"key":"places","title":"The places","fields":[{"field":"location_name","input":"text","label":"Place name"},{"field":"street_address","input":"text","label":"Street"},{"field":"city","input":"text","label":"City"},{"field":"state","input":"text","label":"State"},{"field":"postal_code","input":"text","label":"ZIP"},{"field":"access_information","input":"text","label":"Access information","placeholder":"gate codes, keys, hours..."},{"field":"notes","input":"text","label":"Notes"}],"writes":"services_template.service_location"},{"key":"items","title":"The service items","fields":[{"field":"item_name","input":"text","label":"Item","placeholder":"blank = the whole place"},{"field":"item_type","input":"select","label":"Kind","options":["general pest","rodent control","commercial kitchen","industrial"]}],"writes":"services_template.service_target"},{"key":"agreement","title":"The agreement","fields":[{"field":"description","input":"text","label":"Description"},{"field":"frequency","input":"select","label":"Service cadence","options":["weekly","bi_weekly","monthly","bi_monthly","quarterly","biannual","annual","on_request"]},{"field":"billing_frequency","input":"select","label":"Billed","options":["upfront","monthly","bi_monthly","quarterly","biannual","annual","on_completion"]},{"field":"start_date","input":"date","label":"Start"},{"field":"end_date","input":"date","label":"End (blank unless requested)"},{"field":"price","input":"text","label":"Price for the set (one bill)"}],"writes":"services_template.service_agreement + agreement_item"},{"key":"ties","title":"Site ties","fields":[{"field":"role","input":"select","label":"Role","options":["primary","gatekeeper","billing","technical","owner","tenant"]},{"field":"notes","input":"text","label":"Notes"}],"writes":"services_template.contact_location"}],"personas":{"FIELD_TECH":{"fields":["account_name","billing_street_address","billing_city","phone","next_service_date"],"readonly":["account_name","billing_street_address","billing_city","phone","next_service_date"],"filters":{"status":["active"]},"actions":["view","search"],"seated":false},"GENERIC_USER":{"fields":["account_name","billing_street_address","billing_city","billing_state","billing_zip_code","phone","email","status","balance","created_at"],"readonly":["account_name","status","balance"],"filters":null,"actions":["view","search","sort","filter"],"seated":false},"OPS_MANAGER":{"fields":["account_name","account_type","billing_street_address","billing_city","billing_state","billing_zip_code","status","phone","email","balance","last_service_date","next_service_date","service_frequency"],"readonly":["balance"],"filters":null,"actions":["view","search","sort","filter","edit","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"ADMIN_FULL":{"fields":["account_name","account_type","billing_street_address","billing_city","billing_state","billing_zip_code","status","internal_notes","phone","email","balance","last_service_date","next_service_date","service_frequency","created_at","updated_at"],"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","delete","export","bulk_actions","create","cancel","defer","place","place_week","sequence","release"],"seated":true},"CUSTOMER_SERVICE":{"fields":["account_name","account_type","status","billing_street_address","billing_city","billing_state","billing_zip_code","internal_notes","created_at","phone","email"],"readonly":["account_name","status","balance","last_service_date","next_service_date"],"filters":{"status":["active"]},"actions":["view","search","sort","filter","edit","log_call","schedule","cancel","defer","place"],"seated":true},"SERVICE_MANAGER":{"fields":["account_name","billing_street_address","billing_city","phone","status","last_service_date","next_service_date","service_frequency"],"readonly":["account_name","status"],"filters":{"status":["active"]},"actions":["view","search","sort","filter","schedule","assign_tech","create","cancel","defer","place","place_week","sequence","release"],"seated":false}}};
  var SKELETON = "<!-- Account Edit Tearsheet -- THE WALK (tearsheet-001 3.1.0; s42 flow sitting, his stamp F1-F28; s44 the edit mode).\n     Generated; do not edit. The shell mounts into an EMPTY host (the s37 skeleton\n     lesson): this markup is written by tearsheet.js FIRST, then filled. The rail is\n     the walk's map (F12) and wears the door's gaps in place (Q3); no Save Draft (T8). -->\n<div class=\"ts\" data-blueprint=\"c7000000-0000-0000-0000-000000000001\">\n  <header class=\"ts-head\">\n    <h2 class=\"ts-title\" data-ts=\"title\"></h2>\n    <p class=\"ts-sub\" data-ts=\"sub\"></p>\n  </header>\n  <div class=\"ts-banner\" data-ts=\"banner\" hidden></div>\n  <div class=\"ts-body\">\n    <nav class=\"ts-rail\" data-ts=\"rail\" aria-label=\"The walk\"></nav>\n    <div class=\"ts-content\" data-ts=\"content\"></div>\n  </div>\n  <footer class=\"ts-foot\">\n    <span class=\"ts-footnote\" data-ts=\"note\"></span>\n    <button type=\"button\" class=\"ts-btn ts-btn--ghost\" data-ts=\"cancel\">Cancel</button>\n    <button type=\"button\" class=\"ts-btn ts-btn--primary\" data-ts=\"submit\">Create account</button>\n  </footer>\n</div>\n";
  var SPINE = TS.spine;
  var ROSTERS_SEPARATE = SPINE && SPINE.rosters_separate === true;
  var TERM_MODES_UP_FRONT = SPINE && SPINE.terms_placement === 'modes_up_front_values_at_summary';
  var EDIT = TS.mode === 'edit';   // 3.1.0: the edit act (s44); absent = the create walk
  // 3.2.0: the five that put a place ON THE MAP -- the coordinate with its provenance, written together by the door
  var GEO_KEYS = ['latitude', 'longitude', 'geocode_provider', 'geocode_accuracy', 'geocoded_at'];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = String(text);
    return e;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }
  function fam(key) {
    for (var i = 0; i < TS.sections.length; i++) if (TS.sections[i].key === key) return TS.sections[i];
    return null;
  }
  function fld(famKey, name) {
    var s = fam(famKey);
    if (!s) return null;
    for (var i = 0; i < s.fields.length; i++) if (s.fields[i].field === name) return s.fields[i];
    return null;
  }
  function personName(p) {
    return (((p.first_name || '') + ' ' + (p.last_name || '')).trim());
  }

  // FIELD-KIND LAW (R1; the stamp's build notes generalized): the kind DERIVES from
  // the declared field name -- no new config, the declaration already says it.
  function fieldKind(f) {
    if (f.input === 'select' || f.input === 'checkbox' || f.input === 'date') return f.input;
    if (/phone/i.test(f.field || '')) return 'phone';
    if (/email/i.test(f.field || '')) return 'email';
    if (/price|amount|rate/i.test(f.field || '')) return 'price';
    return 'text';
  }
  function maskPhone(v) {
    var d = String(v).replace(/\D/g, '').slice(0, 10);
    if (d.length <= 3) return d;
    if (d.length <= 6) return '(' + d.slice(0, 3) + ') ' + d.slice(3);
    return '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
  }
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  class AccountEditTearsheetBlueprintUI {

    constructor() {
      this.container = null;
      this.context = null;
      this.client = null;
      // the act's state: nothing prefills (T9)
      this.acct = {};
      this.agree = {};              // identity: description/start_date/end_date; values: frequency/billing_frequency
      this.roster = [];             // EVERY person in the act (one pool); _org marks roster vs place (IN-15 display split)
      this.places = [];             // each: {vals:{}, ties:[{pi,role,notes,is_primary}], items:[], sub, done}
      this.billingGeo = {};         // 3.2.0: the billing pick's coordinate -- rides the F14 copy into the place, never the account row
      this.triage = '';             // '' | 'one' | 'many'  (F1 -- writes nothing)
      this.useBilling = '';         // '' | 'yes' | 'no'    (F14)
      this.cadMode = '';            // Q-M (a): the MODE is asked up front, '' until answered
      this.billMode = '';
      this.view = 'front';          // 'front' | 'walk' | 'summ'
      this.cursor = 0;
      this.gaps = null;             // the door's refusal, worn by the rail (Q3)
      this.catalog = null;          // service rows (F22); null = not yet loaded
      this.nameTaken = false;       // F15 live check
      this._nameTimer = null;
      this.recordId = null;         // edit mode: the standing record (shell hands it)
      this._loading = false;
    }

    getMetadata() {
      return { blueprintId: 'c7000000-0000-0000-0000-000000000001', pattern: 'TEARSHEET', entity: TS.entity };
    }

    newPlace() { return { vals: {}, ties: [], items: [], sub: 'place', done: false }; }
    simple() { return this.triage === 'one'; }
    rosterVisible() {
      var self = this;
      return this.roster.filter(function (p) { return !(ROSTERS_SEPARATE && p._org === 'place'); });
    }

    mount(container) {
      this.container = container;
      container.innerHTML = SKELETON;
      this.$ = function (k) { return container.querySelector('[data-ts="' + k + '"]'); };
      if (EDIT) {
        this.$('title').textContent = 'Edit ' + TS.entity;
        this.$('sub').textContent = 'THE EDIT ACT: the whole record, loaded; change any fact with ' +
          'the walk\'s own devices. One whole act -- nothing is saved until Save changes, a removed ' +
          'row falls with the act, and a refused act keeps everything as you left it.';
        this.$('submit').textContent = 'Save changes';
      } else {
        this.$('title').textContent = 'New ' + TS.entity + ' -- from the service agreement';
        this.$('sub').textContent = 'THE WALK: say where service happens and it drives the flow; ' +
          'a multi-place ' + TS.entity + ' is captured place by place. One whole act -- ' +
          'nothing is saved until Create, and a refused act keeps everything you entered.';
      }
      var self = this;
      this.$('cancel').addEventListener('click', function () {
        var back = (EDIT && self.recordId) ? '/' + TS.entity + 's/' + self.recordId : '/' + TS.entity + 's';
        if (window.ShellNavigation && window.ShellNavigation.navigate) window.ShellNavigation.navigate(back);
        else window.location.hash = '#' + back;
      });
      this.$('submit').addEventListener('click', function () { self.submit(); });
      this.loadCatalog();
      if (EDIT && this.recordId) this.load();
      else this.renderAll();
    }

    // edit mode: the shell hands the record on /accounts/:id/edit -- EVERY hand-off
    // reloads from the rows (the standing rows are the truth, never a kept state).
    // The record BRIDGE broadcasts to every component (a list row click included);
    // handed while HIDDEN, the walk keeps the id and loads when its route shows it
    // (s44, his chair's find: no background reads on every list click).
    setRecordId(id) {
      if (!EDIT) return;
      this.recordId = id;
      var host = this.container && this.container.closest('.mounted-component');
      if (host && host.style.display === 'none') return;
      if (this.container) this.load();
    }

    // edit mode: the whole tree, read AS THE ROLE, ids riding the state.
    async load() {
      if (this._loading || !this.recordId) return;
      this._loading = true;
      this.client = this.client || this.dataClient();
      if (!this.client) { this._loading = false; return this.failNote('no data client -- the shell did not provide supabase context'); }
      var id = this.recordId, self = this;
      var pk = TS.entity + '_id';
      try {
        var rA = await this.client.from(TS.entity).select('*').eq(pk, id).limit(1);
        if (rA.error || !(rA.data || []).length) throw new Error('the ' + TS.entity + ' could not be read' + (rA.error ? ': ' + rA.error.message : ''));
        var A = rA.data[0];
        var rC = await this.client.from('contact').select('*').eq('account_id', id).order('contact_id');
        var rL = await this.client.from('service_location').select('*').eq('account_id', id).order('service_location_id');
        var rT = await this.client.from('service_target').select('*').eq('account_id', id).order('service_target_id');
        var rG = await this.client.from('service_agreement').select('*').eq('account_id', id).order('created_at', { ascending: false }).limit(1);
        if (rC.error || rL.error || rT.error || rG.error) throw new Error('the record\'s rows could not be read');
        var contacts = rC.data || [], places = rL.data || [], targets = rT.data || [];
        var agreement = (rG.data || [])[0] || null;
        var items = [];
        if (agreement) {
          var rI = await this.client.from('agreement_item').select('*').eq('agreement_id', agreement.agreement_id);
          items = rI.error ? [] : (rI.data || []);
        }
        var ties = [];
        if (contacts.length) {
          var rX = await this.client.from('contact_location').select('*')
            .in('contact_id', contacts.map(function (c) { return c.contact_id; }));
          ties = rX.error ? [] : (rX.data || []);
        }

        // -> the walk's state, ids riding
        this.acct = {};
        fam('account').fields.forEach(function (f) { if (A[f.field] !== undefined && A[f.field] !== null) self.acct[f.field] = A[f.field]; });
        if (A.internal_notes) this.acct.internal_notes = A.internal_notes;
        var P = fam('people');
        this.roster = contacts.map(function (c) {
          var row = { contact_id: c.contact_id, _org: 'acct' };
          P.fields.forEach(function (f) { if (c[f.field] !== undefined && c[f.field] !== null) row[f.field] = c[f.field]; });
          return row;
        });
        var placeIndexById = {};
        this.places = places.map(function (l, i) {
          placeIndexById[l.service_location_id] = i;
          var vals = {};
          fam('places').fields.forEach(function (f) { if (l[f.field] !== undefined && l[f.field] !== null) vals[f.field] = l[f.field]; });
          // 3.2.0: the standing coordinate and its provenance ride the edit -- an unchanged street keeps its place on the map
          GEO_KEYS.forEach(function (k) { if (l[k] !== undefined && l[k] !== null) vals[k] = l[k]; });
          if (vals.latitude !== undefined) vals._picked_street = vals.street_address || '';
          return { id: l.service_location_id, vals: vals, ties: [], items: [], sub: 'place', done: true };
        });
        var itemByTarget = {};
        items.forEach(function (ai) { itemByTarget[ai.service_target_id] = ai; });
        targets.forEach(function (t) {
          var pi = placeIndexById[t.primary_service_location_id];
          if (pi === undefined) return;   // a target off every place has no seat in the walk
          var ai = itemByTarget[t.service_target_id];
          self.places[pi].items.push({
            service_target_id: t.service_target_id,
            item_name: t.item_name || '', item_type: t.item_type || '',
            covered: !!ai,
            price: ai && ai.price !== null && ai.price !== undefined ? String(ai.price) : '',
            frequency: (ai && ai.frequency) || '',
            billing_frequency: (ai && ai.billing_frequency) || '',
            service_id: (ai && ai.service_id) || ''
          });
        });
        var rosterIndexById = {};
        this.roster.forEach(function (p, i) { rosterIndexById[p.contact_id] = i; });
        ties.forEach(function (t) {
          var pi = rosterIndexById[t.contact_id];
          var li = placeIndexById[t.service_location_id];
          if (pi === undefined || li === undefined) return;
          self.places[li].ties.push({ pi: pi, role: t.role || 'primary', notes: t.notes || '', is_primary: !!t.is_primary });
        });
        this.agree = agreement ? {
          description: agreement.description || '',
          start_date: agreement.start_date || '', end_date: agreement.end_date || '',
          frequency: agreement.frequency || '', billing_frequency: agreement.billing_frequency || '',
          price: agreement.price !== null && agreement.price !== undefined ? String(agreement.price) : ''
        } : {};
        var anyItemCad = this.places.some(function (p) { return p.items.some(function (it) { return !!it.frequency; }); });
        var anyItemBill = this.places.some(function (p) { return p.items.some(function (it) { return !!it.billing_frequency; }); });
        this.cadMode = this.agree.frequency ? 'all' : (anyItemCad ? 'per' : 'all');
        this.billMode = this.agree.billing_frequency ? 'together' : (anyItemBill ? 'separate' : 'together');
        this.triage = this.places.length > 1 ? 'many' : 'one';
        if (this.triage === 'one' && this.places.length === 1) {
          this.useBilling = (this.places[0].vals.street_address || '') === (this.acct.billing_street_address || '') ? 'yes' : 'no';
        }
        this.gaps = null;
        this.view = 'summ';        // the edit act ENTERS at the Summary (Q-AA)
        this.cursor = 0;
        if (this.$('title')) this.$('title').textContent = 'Edit ' + (this.acct[TS.entity + '_name'] || TS.entity);
        this.renderAll();
      } catch (e) {
        var lm = (e && e.message) ? e.message : String(e);
        this.failNote('the edit act could not load the record: ' + lm);
        // RI-909: the shell must HEAR a role-loaded read fall -- session dead -> the
        // sign-in gate; session live -> this note stands (a grants problem, visible).
        if (this.container) {
          this.container.dispatchEvent(new CustomEvent('blueprint:error', {
            bubbles: true,
            detail: { code: 'DATA_LOAD_FAILED', blueprintId: 'c7000000-0000-0000-0000-000000000001', message: lm }
          }));
        }
      }
      this._loading = false;
    }

    unmount() {
      if (this.container) clear(this.container);
      this.container = null;
    }

    onContext(context) {
      this.context = context || {};
      this.applyRoleGate();
    }

    // window.ShellData -- one client for the page, its auth token read fresh per
    // request (RI-909: a self-built client freezes its token at mount and spins a
    // second refresh timer against the shell's); the self-built client stays only
    // for shells that publish no ShellData.
    dataClient() {
      var ctx = window.AppContext || {};
      var sb = ctx.supabase || {};
      if (window.ShellData && (sb.schema || 'public') === TS.schema) return window.ShellData;
      if (window.supabase && window.supabase.createClient && sb.url && sb.anonKey) {
        return window.supabase.createClient(sb.url, sb.anonKey, {
          db: { schema: TS.schema },
          global: sb.accessToken ? { headers: { Authorization: 'Bearer ' + sb.accessToken } } : {}
        });
      }
      return null;
    }

    // F22: the Service picker loads the schema's catalog AS THE ROLE. A failed read
    // is never a silent empty (RI-909): the banner wears it, and blueprint:error lets
    // the shell answer session death with the sign-in gate (a live session's failure
    // stays visible as this note -- that is a grants problem, not an auth one).
    async loadCatalog() {
      this.client = this.client || this.dataClient();
      if (!this.client) { this.catalog = []; return; }
      try {
        var r = await this.client.from('service')
          .select('service_id,service_name,service_category')
          .order('service_category', { ascending: true })
          .order('service_name', { ascending: true });
        if (r.error) throw new Error(r.error.message);
        this.catalog = r.data || [];
      } catch (e) {
        this.catalog = [];
        var msg = (e && e.message) ? e.message : String(e);
        this.failNote('the service catalog could not be read as your role: ' + msg);
        if (this.container) {
          this.container.dispatchEvent(new CustomEvent('blueprint:error', {
            bubbles: true,
            detail: { code: 'DATA_LOAD_FAILED', blueprintId: 'c7000000-0000-0000-0000-000000000001', message: msg }
          }));
        }
      }
      this.loadAddressSettings();   // 3.2.0: the search center and country for the address list (never a block)
      if (this.view !== 'front') this.renderAll();
    }

    // the ROLE gate (`personas` = the engine's identifier)
    applyRoleGate() {
      var facet = this.context && this.context.facet;
      var gate = (facet && TS.personas) ? TS.personas[facet] : null;
      if (!this.container) return;
      var btn = this.$('submit');
      var need = EDIT ? 'edit' : 'create';
      if (gate && Array.isArray(gate.actions) && gate.actions.indexOf(need) === -1) {
        btn.disabled = true;
        this.$('note').textContent = (EDIT ? 'editing' : 'creating') + ' is closed to your role';
      }
    }

    // F15: the live name check, as the role, debounced; the DOOR is still the law.
    checkName() {
      var self = this;
      if (this._nameTimer) clearTimeout(this._nameTimer);
      var v = (this.acct.account_name || '').trim();
      var out = this.container.querySelector('[data-ts="namedup"]');
      if (!v) { this.nameTaken = false; if (out) out.textContent = ''; return; }
      this._nameTimer = setTimeout(async function () {
        self.client = self.client || self.dataClient();
        if (!self.client) return;
        try {
          var q = self.client.from(TS.entity).select(TS.entity + '_id').ilike(TS.entity + '_name', v);
          if (EDIT && self.recordId) q = q.neq(TS.entity + '_id', self.recordId);   // our own name never collides with itself
          var r = await q.limit(1);
          self.nameTaken = !r.error && (r.data || []).length > 0;
        } catch (e) { self.nameTaken = false; }
        if (out) out.textContent = self.nameTaken
          ? 'an ' + TS.entity + ' named "' + v + '" already stands -- names are unique (the door will refuse it too)'
          : '';
      }, 350);
    }

    // ---- F16 -> 3.2.0 THE ADDRESS SEAM (SJ s52 leg 13): every address rides Esri's suggest as it is typed and the
    // pick's STORED call puts the place ON THE MAP (the coordinate with its provenance); the key is the deployment
    // seam __ESRI_KEY__, referrer-restricted in the Esri portal (Q19 a) -- no key = no list, never a block ---------
    esriKey() {
      var ctx = window.AppContext || {};
      var key = ctx.integrations && ctx.integrations.esriKey;
      if (!key || /^__[A-Z_]+__$/.test(key)) return null;
      return key;
    }
    // v_intake_address_settings: the country and the client's search center (policy.search_center, else its own mean)
    async loadAddressSettings() {
      this.addrSettings = this.addrSettings || { country_code: 'USA', search_center: null };
      this.client = this.client || this.dataClient();
      if (!this.client) return;
      try {
        var tenant = (this.context && this.context.tenant_id) || ((window.AppContext || {}).tenant_id);
        var r = await this.client.from('v_intake_address_settings').select('*').eq('tenant_id', tenant).limit(1);
        if (!r.error && (r.data || []).length) this.addrSettings = r.data[0];
      } catch (e) { /* no bias -- never a block */ }
    }
    esriUrl(op, params) {
      var base = 'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/' + op;
      var s = this.addrSettings || {};
      var q = { f: 'json', token: this.esriKey(), countryCode: s.country_code || 'USA' };
      if (s.search_center) q.location = s.search_center;
      Object.keys(params).forEach(function (k) { if (params[k] !== undefined && params[k] !== null) q[k] = params[k]; });
      return base + '?' + Object.keys(q).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(q[k]); }).join('&');
    }
    // THE STORED CALL: one candidate for a suggestion (text + magicKey) or for a typed address (text alone).
    // forStorage=true is the vendor's clause -- the results may be kept only when the request says so.
    async esriCandidate(text, magicKey) {
      var url = this.esriUrl('findAddressCandidates', {
        SingleLine: text, magicKey: magicKey || undefined, forStorage: 'true', maxLocations: 1,
        outFields: 'Addr_type,AddNum,StAddr,StName,StType,StDir,City,RegionAbbr,Postal,Match_addr'
      });
      var res = await fetch(url);
      if (!res.ok) return null;
      var body = await res.json();
      var c = (body.candidates || [])[0];
      if (!c || !c.location || !c.attributes) return null;
      var a = c.attributes;
      // Esri's StAddr is the street line WHOLE, the house number inside it ("5301 Cortez Rd W" -- read from the service
      // 2026-09-22 after his chair caught "716 716 44th St W"); AddNum + StName + StType + StDir only when StAddr is absent
      var streetWhole = (a.StAddr || '').trim() || [a.AddNum, a.StName, a.StType, a.StDir].filter(function (x) { return x && String(x).trim(); }).map(function (x) { return String(x).trim(); }).join(' ');
      return {
        street: streetWhole,
        city: a.City || '', state: a.RegionAbbr || '', zip: a.Postal || '',
        latitude: c.location.y, longitude: c.location.x, accuracy: a.Addr_type || '', score: c.score
      };
    }
    onMap(holder) {
      return holder && holder.latitude !== undefined && holder.latitude !== null && holder.latitude !== ''
        && holder.longitude !== undefined && holder.longitude !== null && holder.longitude !== '';
    }
    placeOnMap(holder, c, pickedStreet) {
      holder.latitude = c.latitude; holder.longitude = c.longitude;
      holder.geocode_provider = 'esri'; holder.geocode_accuracy = c.accuracy || 'esri';
      holder.geocoded_at = new Date().toISOString();
      holder._picked_street = pickedStreet !== undefined ? pickedStreet : c.street;
      this.renderProv(holder);
    }
    takeOffMap(holder) {
      GEO_KEYS.forEach(function (k) { delete holder[k]; });
      delete holder._picked_street;
      this.renderProv(holder);
    }
    // his call 3: on Next, and before the act, a typed address with no pick is sent to Esri ONCE -- placed, it is on
    // the map like a pick; silent, the place stays off the map and the door still admits it
    async ensurePlaced(holder) {
      if (this.onMap(holder) || !this.esriKey() || !String(holder.street_address || '').trim()) return;
      try {
        var text = [holder.street_address, holder.city, [holder.state, holder.postal_code].filter(Boolean).join(' ')]
          .filter(function (x) { return x && String(x).trim(); }).join(', ');
        var c = await this.esriCandidate(text, null);
        if (c && /^(PointAddress|Subaddress|StreetAddress|StreetAddressExt)$/.test(c.accuracy)) this.placeOnMap(holder, c, holder.street_address);
      } catch (e) { /* Esri's silence leaves the place off the map */ }
    }
    async ensurePlacedAll() {
      var self = this;
      var live = this.places.filter(function (p) { return !self.placeIsEmpty(p); });
      for (var i = 0; i < live.length; i++) await this.ensurePlaced(live[i].vals);
    }
    provWords(holder) {
      if (!this.onMap(holder)) return { on: false, text: 'Not on the map yet -- pick the address from the list' };
      var acc = holder.geocode_accuracy || '';
      var how = /^(PointAddress|Subaddress)$/.test(acc) ? 'rooftop' : /^Street/.test(acc) ? 'the street'
        : acc === 'hand' ? 'hand-placed' : acc === 'fixture' ? 'a fixture point' : acc;
      var who = holder.geocode_provider === 'esri' ? 'Esri' : holder.geocode_provider === 'hand' ? 'by hand'
        : holder.geocode_provider === 'seed' ? 'the story' : (holder.geocode_provider || '');
      var when = holder.geocoded_at ? String(holder.geocoded_at).slice(0, 10) : '';
      return { on: true, text: 'On the map \u00b7 ' + how + ' \u00b7 ' + who + (when ? ' \u00b7 ' + when : '') };
    }
    // ONE quiet line under the place's grid -- never a badge on the field
    provLine(holder) {
      var line = el('div', 'ts-prov');
      line.dataset.ts = 'prov';
      line.appendChild(el('span', 'ts-prov-dot'));
      line.appendChild(el('span', 'ts-prov-text'));
      holder._provEls = (holder._provEls || []).filter(function (n) { return n.isConnected; });
      holder._provEls.push(line);
      this.renderProv(holder);
      return line;
    }
    renderProv(holder) {
      var w = this.provWords(holder);
      (holder._provEls || []).forEach(function (n) {
        // a line is written whether or not its section is in the document yet (the walk builds sections before it mounts them)
        n.className = 'ts-prov' + (w.on ? ' ts-prov--on' : '');
        n.querySelector('.ts-prov-text').textContent = w.text;
      });
    }
    attachTypeahead(streetInput, targets, holder) {
      var self = this;
      if (!this.esriKey()) return;   // no key, no list -- never a block
      holder = holder || {};
      var list = el('ul', 'ts-suggest');
      list.setAttribute('role', 'listbox');
      list.hidden = true;
      streetInput.setAttribute('autocomplete', 'off');
      streetInput.parentNode.style.position = 'relative';
      streetInput.parentNode.appendChild(list);
      var timer = null, active = -1, rows = [], settling = false;
      var hide = function () { list.hidden = true; list.innerHTML = ''; active = -1; rows = []; };
      var renderList = function () {
        clear(list);
        rows.forEach(function (s, i) {
          var li = el('li', null, s.text || '');
          li.setAttribute('role', 'option');
          if (i === active) li.setAttribute('aria-selected', 'true');
          li.dataset.i = String(i);
          list.appendChild(li);
        });
        list.hidden = rows.length === 0;
      };
      var pick = async function (i) {
        var s = rows[i];
        if (!s) return;
        hide();
        var c = null;
        try { c = await self.esriCandidate(s.text, s.magicKey); } catch (e) { c = null; }
        if (!c) { self.takeOffMap(holder); return; }
        var parts = { street: c.street, city: c.city, state: c.state, zip: c.zip };
        settling = true;
        ['street', 'city', 'state', 'zip'].forEach(function (k) {
          var input = targets[k];
          if (!input) return;
          input.value = parts[k] || '';
          input.dispatchEvent(new Event('input', { bubbles: true }));
        });
        settling = false;
        self.placeOnMap(holder, c);
      };
      streetInput.addEventListener('input', function () {
        if (settling) return;
        if (timer) clearTimeout(timer);
        var q = streetInput.value.trim();
        // typing in the street after a pick takes the place OFF the map (his call 3) -- no dialog, the line says so
        if (self.onMap(holder) && q !== String(holder._picked_street || '').trim()) self.takeOffMap(holder);
        if (q.length < 3) { hide(); return; }
        timer = setTimeout(async function () {
          try {
            var res = await fetch(self.esriUrl('suggest', { text: q, category: 'Address', maxSuggestions: 5 }));
            if (!res.ok) { hide(); return; }
            var body = await res.json();
            rows = (body.suggestions || []).filter(function (s) { return s && s.magicKey && !s.isCollection; });
            active = -1; renderList();
          } catch (e) { hide(); }
        }, 300);
      });
      streetInput.addEventListener('keydown', function (e) {
        if (list.hidden) return;
        if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, features.length - 1); renderList(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); renderList(); }
        else if (e.key === 'Enter' && active >= 0) { e.preventDefault(); pick(active); }
        else if (e.key === 'Escape') hide();
      });
      list.addEventListener('mousedown', function (e) {
        var li = e.target.closest('li[data-i]');
        if (li) { e.preventDefault(); pick(parseInt(li.dataset.i, 10)); }
      });
      streetInput.addEventListener('blur', function () { setTimeout(hide, 150); });
    }

    // ---- shared input builders (bound live; typing never re-renders -- F25) ----------
    input(f, obj, opts) {
      opts = opts || {};
      var self = this;
      var inp;
      if (f.input === 'select') {
        inp = document.createElement('select');
        inp.appendChild(el('option', null, ''));
        (f.options || []).forEach(function (o) {
          var op = el('option', null, o); op.value = o; inp.appendChild(op);
        });
        inp.value = obj[f.field] || '';
        inp.addEventListener('change', function () { obj[f.field] = inp.value; if (opts.onChange) opts.onChange(); });
      } else if (f.input === 'checkbox') {
        inp = document.createElement('input'); inp.type = 'checkbox';
        inp.checked = !!obj[f.field];
        inp.addEventListener('change', function () { obj[f.field] = inp.checked; if (opts.onChange) opts.onChange(); });
      } else {
        inp = document.createElement('input');
        // the stamp's note: every date is a CALENDAR widget, never a keyed entry
        var kind = fieldKind(f);
        inp.type = kind === 'date' ? 'date' : kind === 'email' ? 'email' : kind === 'phone' ? 'tel' : 'text';
        if (f.placeholder) inp.placeholder = f.placeholder;
        if (kind === 'phone') {
          inp.setAttribute('inputmode', 'tel');
          inp.addEventListener('input', function () {
            var m = maskPhone(inp.value);
            if (m !== inp.value) inp.value = m;
          });
        }
        if (kind === 'price') inp.setAttribute('inputmode', 'decimal');
        var validateEmail = null;
        if (kind === 'email') {
          validateEmail = function () {
            var bad = inp.value.trim() !== '' && !EMAIL_RE.test(inp.value.trim());
            inp.classList.toggle('ts-invalid', bad);
            inp.title = bad ? 'not a valid email address' : '';
          };
          inp.addEventListener('input', validateEmail);
          inp.addEventListener('blur', validateEmail);
        }
        inp.value = obj[f.field] || '';
        if (validateEmail) validateEmail();
        inp.addEventListener('input', function () { obj[f.field] = inp.value; if (opts.onInput) opts.onInput(); });
      }
      inp.dataset.wf = f.field;
      return inp;
    }

    labeled(f, obj, opts) {
      var wrap = el('div', 'ts-f');
      wrap.appendChild(el('label', null, f.label));
      wrap.appendChild(this.input(f, obj, opts));
      return wrap;
    }

    secHead(title, note) {
      var h = el('h3', 'ts-sec-head');
      h.appendChild(el('span', null, title));
      if (note) h.appendChild(el('span', 'ts-rail-state', note));
      return h;
    }

    radioLine(lead, name, choices, current, onPick) {
      var line = el('div', 'ts-radio-line');
      line.appendChild(el('span', 'ts-radio-lead', lead));
      choices.forEach(function (c) {
        var lab = el('label');
        var r = document.createElement('input');
        r.type = 'radio'; r.name = name; r.value = c.value;
        r.checked = current === c.value;
        r.addEventListener('change', function () { onPick(c.value); });
        lab.appendChild(r);
        lab.appendChild(document.createTextNode(' ' + c.label));
        line.appendChild(lab);
      });
      return line;
    }

    // ---- the rail: the walk's map (F12) FROM THE SPINE; wears the door's gaps (Q3) ----
    gapRows() {
      // the door speaks section numbers 1-5; the walk maps them to its own rows
      var map = { front: [], place0: [], summ: [] };
      if (this.gaps) {
        for (var g = 0; g < this.gaps.length; g++) {
          var n = this.gaps[g].section_number;
          var msg = this.gaps[g].gap_message;
          if (n <= 2) map.front.push(msg);
          else if (n <= 4) map.place0.push(msg);
          else map.summ.push(msg);
        }
      }
      return map;
    }

    renderRail() {
      var self = this;
      var host = this.$('rail'); clear(host);
      var g = this.gapRows();
      var step0 = SPINE.steps[0], stepP = SPINE.steps[1], stepS = SPINE.steps[2];
      var rows = [{ key: 'front', name: step0.label, sub: 'account - people - where - the terms', msgs: g.front }];
      this.places.forEach(function (p, i) {
        rows.push({ key: 'p' + i,
          name: p.vals[stepP.label_from] || (self.simple() ? 'The place' : 'Place ' + (i + 1)),
          sub: p.done ? '' : ({ place: 'the place', people: 'its people', services: 'its services + specs' })[p.sub],
          msgs: i === 0 ? g.place0 : [] });
      });
      rows.push({ key: 'summ', name: stepS.label, sub: 'every fact, editable - create', msgs: g.summ });
      rows.forEach(function (r, idx) {
        var current = (r.key === 'front' && self.view === 'front') ||
                      (r.key === 'summ' && self.view === 'summ') ||
                      (self.view === 'walk' && r.key === 'p' + self.cursor);
        var cls = 'ts-rail-item' + (r.msgs.length ? ' ts-rail-item--gap' : '') + (current ? ' ts-rail-item--current' : '');
        var item = el('div', cls);
        var row = el('div', 'ts-rail-row');
        row.appendChild(el('span', 'ts-rail-num', r.key === 'summ' ? '*' : String(idx)));
        row.appendChild(el('span', 'ts-rail-name', r.name));
        row.appendChild(el('span', 'ts-rail-state', r.msgs.length ? 'incomplete' : ''));
        item.appendChild(row);
        if (r.sub) item.appendChild(el('div', 'ts-rail-sub', r.sub));
        r.msgs.forEach(function (m) { item.appendChild(el('div', 'ts-rail-gapmsg', m)); });
        item.addEventListener('click', function () { self.railGo(r.key); });
        host.appendChild(item);
      });
    }

    railGo(key) {
      if (key === 'front') { this.view = 'front'; }
      else if (key === 'summ') { this.view = 'summ'; }
      else {
        var i = parseInt(key.slice(1), 10);
        if (i < this.places.length) { this.view = 'walk'; this.cursor = i; }
      }
      this.renderAll();
    }

    renderBanner() {
      var b = this.$('banner');
      if (!this.gaps) { b.hidden = true; return; }
      b.hidden = false;
      b.className = 'ts-banner';
      b.textContent = 'The act was refused -- ' + this.gaps.length + ' gap(s), worn on the rail where the fix lives. ' +
        'Nothing was created; everything you entered is still here.';
    }

    // ---- rendering -------------------------------------------------------------------
    renderAll() {
      // R1-3/R1-4: an in-page selection never moves the reader; reset only on a page turn
      var pageKey = this.view + (this.view === 'walk' ? ':' + this.cursor : '');
      var samePage = this._pageKey === pageKey;
      var keepY = window.scrollY;
      this.renderRail();
      this.renderBanner();
      var host = this.$('content'); clear(host);
      if (this.view === 'front') this.renderFront(host);
      else if (this.view === 'walk') this.renderPlace(host, this.cursor);
      else this.renderSummary(host);
      // Create lives at the Summary only (F19: the one final verb); so does Save.
      var submit = this.$('submit');
      submit.style.display = this.view === 'summ' ? '' : 'none';
      this.$('note').textContent = this.view === 'summ'
        ? 'one payload through ' + TS.function + (EDIT
            ? ' -- saved whole, or refused with the gaps on the rail'
            : ' -- born whole, or refused with the gaps on the rail')
        : 'the act is ONE whole -- ' + (EDIT ? 'Save changes' : 'Create') + ' lives at the Summary; no Save Draft, deliberately';
      this.applyRoleGate();
      if (samePage) window.scrollTo(0, keepY); else window.scrollTo(0, 0);
      this._pageKey = pageKey;
    }

    nextBtn(label, onclick) {
      var b = el('button', 'ts-btn ts-btn--primary', label || 'Next');
      b.type = 'button'; b.dataset.walkNext = '1';
      b.addEventListener('click', onclick);
      return b;
    }
    ghostBtn(label, onclick) {
      var b = el('button', 'ts-btn ts-btn--ghost', label);
      b.type = 'button';
      b.addEventListener('click', onclick);
      return b;
    }

    // ---- step 0: ACCOUNT FACTS (the spine's first step) ------------------------------
    renderFront(host) {
      var self = this;
      var A = fam('account');

      var secA = el('div', 'ts-sec');
      secA.appendChild(this.secHead(A.title));
      var grid = el('div', 'ts-fields');
      A.fields.forEach(function (f) {
        var opts = f.field === TS.entity + '_name' ? { onInput: function () { self.checkName(); } } : {};
        grid.appendChild(self.labeled(f, self.acct, opts));
      });
      secA.appendChild(grid);
      var dup = el('div', 'ts-dup'); dup.dataset.ts = 'namedup';
      secA.appendChild(dup);
      host.appendChild(secA);
      // F16: the billing address types ahead (3.2.0: its pick's coordinate rides the F14 copy into the place, never the account row)
      var bs = grid.querySelector('[data-wf="billing_street_address"]');
      if (bs) this.attachTypeahead(bs, {
        street: bs, city: grid.querySelector('[data-wf="billing_city"]'),
        state: grid.querySelector('[data-wf="billing_state"]'), zip: grid.querySelector('[data-wf="billing_zip_code"]')
      }, this.billingGeo);

      var secP = el('div', 'ts-sec');
      secP.appendChild(this.secHead(fam('people').title,
        ROSTERS_SEPARATE ? 'the account roster -- people at a place are entered at the place (IN-15)' : ''));
      secP.appendChild(this.rosterTable());
      var add = el('button', 'ts-add', '+ add a person');
      add.type = 'button';
      add.addEventListener('click', function () { self.roster.push({ _org: 'roster' }); self.renderAll(); });
      secP.appendChild(add);
      host.appendChild(secP);

      var secW = el('div', 'ts-sec');
      secW.appendChild(this.secHead('Where does service happen?'));
      var triageLine = this.radioLine('', 'ts-triage', [
        { value: 'one', label: 'at ONE place' },
        { value: 'many', label: 'at MORE THAN ONE place -- place by place' }
      ], this.triage, function (v) { self.triage = v; self.renderAll(); });
      if (!this.triage) triageLine.className += ' ts-radio-line--todo';
      secW.appendChild(triageLine);
      host.appendChild(secW);
      if (this.simple()) {
        // its OWN section head -- an inline lead reads as fine print (his 2026-08-28 catch)
        var secB = el('div', 'ts-sec');
        secB.appendChild(this.secHead('Is the service at the billing address?'));
        var billLine = this.radioLine('', 'ts-usebill', [
          { value: 'yes', label: 'Yes -- service happens at the billing address' },
          { value: 'no', label: 'No -- the place is somewhere else' }
        ], this.useBilling, function (v) { self.useBilling = v; self.renderAll(); });
        if (!this.useBilling) billLine.className += ' ts-radio-line--todo';
        secB.appendChild(billLine);
        host.appendChild(secB);
      }

      // Q-M (a): the two MODE questions only; the VALUES wait at the Summary
      if (TERM_MODES_UP_FRONT) {
        var secT = el('div', 'ts-sec');
        secT.appendChild(this.secHead('The terms', 'the values are set at the Summary'));
        var cadLine = this.radioLine('Service cadence:', 'ts-cadmode', [
          { value: 'all', label: 'apply ONE cadence to all services' },
          { value: 'per', label: 'cadence set on each service' }
        ], this.cadMode, function (v) { self.cadMode = v; self.renderAll(); });
        if (!this.cadMode) cadLine.className += ' ts-radio-line--todo';
        secT.appendChild(cadLine);
        var bilLine = this.radioLine('Billing preference:', 'ts-billmode', [
          { value: 'together', label: 'bill all services TOGETHER' },
          { value: 'separate', label: 'bill each service SEPARATELY' }
        ], this.billMode, function (v) { self.billMode = v; self.renderAll(); });
        if (!this.billMode) bilLine.className += ' ts-radio-line--todo';
        secT.appendChild(bilLine);
        host.appendChild(secT);
      }

      // IN-3: one Next, one advance; a blocked advance NAMES every missing answer
      var nav = el('div', 'ts-stepnav');
      var missing = [];
      if (!this.triage) missing.push('"Where does service happen?"');
      if (this.triage === 'one' && !this.useBilling) missing.push('"Is the service at the billing address?"');
      if (TERM_MODES_UP_FRONT) {
        if (!this.cadMode) missing.push('the cadence mode');
        if (!this.billMode) missing.push('the billing preference');
      }
      var next = this.nextBtn('Next', function () { self.beginWalk(); });
      next.disabled = missing.length > 0;
      nav.appendChild(next);
      if (missing.length) {
        nav.appendChild(el('span', 'ts-note ts-note--block', 'to go: ' + missing.join(' and ') + ' -- marked above'));
      }
      host.appendChild(nav);
    }

    // the account roster: LIVE rows (F25); ONE primary, a new one demotes (F17);
    // IN-15: place-born people do not display here (the pool stays one)
    rosterTable() {
      var self = this;
      var visible = this.rosterVisible();
      if (visible.length === 0) return el('p', 'ts-quiet', 'no one entered yet -- add the first');
      var P = fam('people');
      var table = el('table', 'ts-table');
      table.dataset.ts = 'roster';
      var trh = document.createElement('tr');
      P.fields.forEach(function (f) { trh.appendChild(el('th', null, f.label)); });
      trh.appendChild(el('th', null, ''));
      table.appendChild(trh);
      this.roster.forEach(function (person, ri) {
        if (ROSTERS_SEPARATE && person._org === 'place') return;
        var tr = document.createElement('tr');
        P.fields.forEach(function (f) {
          var td = document.createElement('td');
          td.className = 'ts-col-' + fieldKind(f);
          var opts = {};
          if (f.field === 'is_primary_contact') {
            opts.onChange = function () {
              if (person.is_primary_contact) {
                self.roster.forEach(function (o) { if (o !== person) o.is_primary_contact = false; });
              }
              self.renderAll();
            };
          }
          td.appendChild(self.input(f, person, opts));
          tr.appendChild(td);
        });
        var tdx = document.createElement('td');
        var rm = el('button', 'ts-remove', 'remove');
        rm.type = 'button';
        rm.addEventListener('click', function () { self.removePerson(ri); });
        tdx.appendChild(rm); tr.appendChild(tdx);
        table.appendChild(tr);
      });
      return table;
    }

    removePerson(ri) {
      this.roster.splice(ri, 1);
      // the ties go with the person; higher indexes shift down (F25)
      this.places.forEach(function (p) {
        p.ties = p.ties.filter(function (t) { return t.pi !== ri; });
        p.ties.forEach(function (t) { if (t.pi > ri) t.pi--; });
      });
      this.renderAll();
    }

    beginWalk() {
      this.gaps = null;
      if (this.places.length === 0) {
        var p = this.newPlace();
        if (this.simple() && this.useBilling === 'yes') {
          // F14: YOUR yes copies the billing address as THE place -- an act, not a prefill
          p.vals.location_name = this.acct.account_name || '';
          p.vals.street_address = this.acct.billing_street_address || '';
          p.vals.city = this.acct.billing_city || '';
          p.vals.state = this.acct.billing_state || '';
          p.vals.postal_code = this.acct.billing_zip_code || '';
          // 3.2.0 (his call 5): the billing pick's coordinate and provenance ride the copy -- the place is born on the map
          var bg = this.billingGeo || {};
          if (this.onMap(bg)) {
            GEO_KEYS.forEach(function (k) { if (bg[k] !== undefined && bg[k] !== null) p.vals[k] = bg[k]; });
            p.vals._picked_street = p.vals.street_address;
          }
          p.sub = 'people';   // F20: services still wait for done-with-people
        }
        this.places.push(p);
      }
      this.view = 'walk'; this.cursor = 0;
      this.renderAll();
    }

    // ---- the place step (the spine's repeating step) ---------------------------------
    renderPlace(host, i) {
      var self = this;
      var p = this.places[i];
      var L = fam('places');
      var name = p.vals.location_name || (this.simple() ? 'The place' : 'Place ' + (i + 1));

      var secL = el('div', 'ts-sec');
      secL.appendChild(this.secHead(name + ': the place'));
      var grid = el('div', 'ts-fields');
      L.fields.forEach(function (f) { grid.appendChild(self.labeled(f, p.vals)); });
      secL.appendChild(grid);
      secL.appendChild(this.provLine(p.vals));   // 3.2.0: on the map, or not yet -- one quiet line under the grid
      var st = grid.querySelector('[data-wf="street_address"]');
      if (st) this.attachTypeahead(st, {
        street: st, city: grid.querySelector('[data-wf="city"]'),
        state: grid.querySelector('[data-wf="state"]'), zip: grid.querySelector('[data-wf="postal_code"]')
      }, p.vals);
      if (!p.done && p.sub === 'place') {
        var nav1 = el('div', 'ts-stepnav');
        // 3.2.0 (his call 3): Next sends a typed address with no pick to Esri once, then moves on either way
        nav1.appendChild(this.nextBtn('Next', function () { self.ensurePlaced(p.vals).then(function () { p.sub = 'people'; self.renderAll(); }); }));
        secL.appendChild(nav1);
        host.appendChild(secL);
        return;
      }
      host.appendChild(secL);

      // its people -- THE ONE DEVICE (IN-5); on the one-place path there is NO tie machinery (F20)
      var secP = el('div', 'ts-sec');
      secP.appendChild(this.secHead(name + ': its people',
        this.simple() ? '' : 'ALREADY-first; a NEW person here stays a place person (IN-15)'));
      if (this.simple()) {
        secP.appendChild(el('p', 'ts-quiet', "the account's people keep this place -- nothing to wire; the tie is implied"));
        secP.appendChild(this.rosterTable());
        var addS = el('button', 'ts-add', '+ add a person');
        addS.type = 'button';
        addS.addEventListener('click', function () { self.roster.push({ _org: 'roster' }); self.renderAll(); });
        secP.appendChild(addS);
      } else {
        secP.appendChild(this.tieTable(p, i));
        // F5: ALREADY-first -- the picker spans the WHOLE act (IN-15's rider)
        var pickLine = el('div', 'ts-stepnav');
        var sel = document.createElement('select');
        sel.dataset.ts = 'tie-pick';
        sel.appendChild(el('option', null, 'Someone ALREADY entered...'));
        this.roster.forEach(function (person, pi) {
          if (p.ties.some(function (t) { return t.pi === pi; })) return;
          var op = el('option', null, personName(person) || ('person ' + (pi + 1)));
          op.value = String(pi); sel.appendChild(op);
        });
        sel.addEventListener('change', function () {
          if (sel.value === '') return;
          p.ties.push({ pi: Number(sel.value), role: '', notes: '', is_primary: p.ties.length === 0 });
          self.renderAll();
        });
        pickLine.appendChild(sel);
        var addNew = el('button', 'ts-add', '+ someone NEW at this place');
        addNew.type = 'button';
        addNew.addEventListener('click', function () {
          self.roster.push({ _org: 'place' });
          p.ties.push({ pi: self.roster.length - 1, role: '', notes: '', is_primary: p.ties.length === 0 });
          self.renderAll();
        });
        pickLine.appendChild(addNew);
        secP.appendChild(pickLine);
      }
      if (!p.done && p.sub === 'people') {
        var nav2 = el('div', 'ts-stepnav');
        nav2.appendChild(this.nextBtn('Next', function () { p.sub = 'services'; self.renderAll(); }));
        nav2.appendChild(el('span', 'ts-note', 'done with people -- the services come next'));
        secP.appendChild(nav2);
        host.appendChild(secP);
        return;
      }
      host.appendChild(secP);

      // its services + specs (F26: his field order; Q-M: term columns only when they vary)
      var secS = el('div', 'ts-sec');
      secS.appendChild(this.secHead(name + ': its services + agreement specs'));
      secS.appendChild(this.itemTable(p, i));
      var addI = el('button', 'ts-add', '+ add a service item');
      addI.type = 'button';
      addI.addEventListener('click', function () { p.items.push({ covered: true }); self.renderAll(); });
      secS.appendChild(addI);
      // THE FORK NEVER DISAPPEARS (his catch, round 3: a DONE place revisited from the
      // rail showed no way forward and no way to add a place -- the !p.done guard was
      // the regression; the stamped paper never had it). F7: the triage never traps.
      var nav3 = el('div', 'ts-stepnav');
      nav3.appendChild(this.ghostBtn('Add another place', function () {
        p.done = true; p.sub = 'done';
        if (self.triage === 'one') self.triage = 'many';
        self.places.push(self.newPlace());
        self.cursor = self.places.length - 1;
        self.renderAll();
      }));
      nav3.appendChild(this.nextBtn('Next', function () {
        p.done = true; p.sub = 'done';
        self.view = 'summ'; self.renderAll();
      }));
      nav3.appendChild(el('span', 'ts-note', 'Next = the Summary, the whole act on one page'));
      secS.appendChild(nav3);
      host.appendChild(secS);
    }

    // the ties at a place -- THE ONE DEVICE's at-place face: the person's own fields +
    // role/notes from the ties family + primary-here; LIVE rows; one primary per place
    // demoting quietly (F21). R2-6: the columns get ROOM (ts-col-* widths).
    tieTable(p, placeIdx) {
      var self = this;
      if (p.ties.length === 0) return el('p', 'ts-quiet', 'no one named at this place yet');
      var P = fam('people');
      var roleF = fld('ties', 'role');
      var notesF = fld('ties', 'notes');
      var table = el('table', 'ts-table');
      table.dataset.ts = 'ties';
      var trh = document.createElement('tr');
      P.fields.forEach(function (f) { if (f.field !== 'is_primary_contact') trh.appendChild(el('th', null, f.label)); });
      trh.appendChild(el('th', null, roleF ? roleF.label + ' at this place' : 'Role'));
      trh.appendChild(el('th', null, notesF ? notesF.label : 'Notes'));
      trh.appendChild(el('th', null, 'Primary here'));
      trh.appendChild(el('th', null, ''));
      table.appendChild(trh);
      p.ties.forEach(function (tie, ti) {
        var person = self.roster[tie.pi] || {};
        var tr = document.createElement('tr');
        P.fields.forEach(function (f) {
          if (f.field === 'is_primary_contact') return;
          var td = document.createElement('td');
          td.className = 'ts-col-' + fieldKind(f);
          td.appendChild(self.input(f, person));
          tr.appendChild(td);
        });
        var tdR = document.createElement('td');
        tdR.className = 'ts-col-role';
        tdR.appendChild(self.input(roleF || { field: 'role', label: 'Role', input: 'text' }, tie));
        tr.appendChild(tdR);
        var tdN = document.createElement('td');
        tdN.className = 'ts-col-notes';
        tdN.appendChild(self.input(notesF || { field: 'notes', label: 'Notes', input: 'text' }, tie));
        tr.appendChild(tdN);
        var tdP = document.createElement('td');
        var cb = document.createElement('input'); cb.type = 'checkbox';
        cb.checked = !!tie.is_primary;
        cb.dataset.wf = 'is_primary';
        cb.addEventListener('change', function () {
          tie.is_primary = cb.checked;
          if (cb.checked) p.ties.forEach(function (o) { if (o !== tie) o.is_primary = false; });
          self.renderAll();
        });
        tdP.appendChild(cb); tr.appendChild(tdP);
        var tdx = document.createElement('td');
        var rm = el('button', 'ts-remove', 'remove');
        rm.type = 'button';
        rm.addEventListener('click', function () { p.ties.splice(ti, 1); self.renderAll(); });
        tdx.appendChild(rm); tr.appendChild(tdx);
        table.appendChild(tr);
      });
      return table;
    }

    // the items at a place: LIVE rows in HIS order (F26); the catalog picker (F22)
    itemTable(p, placeIdx) {
      var self = this;
      if (p.items.length === 0) return el('p', 'ts-quiet', 'no service items entered at this place');
      var kindF = fld('items', 'item_type');
      var nameF = fld('items', 'item_name');
      var cadF = fld('agreement', 'frequency');
      var bilF = fld('agreement', 'billing_frequency');
      var vc = this.cadMode === 'per', vb = this.billMode === 'separate';
      var table = el('table', 'ts-table');
      table.dataset.ts = 'items';
      var trh = document.createElement('tr');
      trh.appendChild(el('th', null, kindF ? kindF.label : 'Kind'));
      trh.appendChild(el('th', null, 'Service (from the catalog)'));
      if (vc) trh.appendChild(el('th', null, 'Cadence'));
      if (vb) trh.appendChild(el('th', null, 'Billed'));
      trh.appendChild(el('th', null, 'On the agreement'));
      trh.appendChild(el('th', null, 'Price'));
      trh.appendChild(el('th', null, (nameF ? nameF.label : 'Item') + ' (blank = the whole place)'));
      trh.appendChild(el('th', null, ''));
      table.appendChild(trh);
      p.items.forEach(function (item, ii) {
        var tr = document.createElement('tr');
        var tdK = document.createElement('td');
        tdK.appendChild(self.input(kindF || { field: 'item_type', label: 'Kind', input: 'text' }, item));
        tr.appendChild(tdK);
        var tdS = document.createElement('td');
        var svc = document.createElement('select');
        svc.dataset.wf = 'service_id';
        // R3-2: an option with no value attribute answers with its TEXT -- the
        // placeholder's label once rode the payload into the door as a "uuid".
        // The placeholder's value is EXPLICITLY empty, always.
        var ph = el('option', null, self.catalog && self.catalog.length ? '' : '(none in the catalog yet)');
        ph.value = '';
        svc.appendChild(ph);
        var lastCat = null, group = null;
        (self.catalog || []).forEach(function (row) {
          if (row.service_category !== lastCat) {
            lastCat = row.service_category;
            group = document.createElement('optgroup');
            group.label = row.service_category || 'Services';
            svc.appendChild(group);
          }
          var op = el('option', null, row.service_name);
          op.value = row.service_id;
          (group || svc).appendChild(op);
        });
        svc.value = item.service_id || '';
        svc.addEventListener('change', function () { item.service_id = svc.value; });
        tdS.appendChild(svc); tr.appendChild(tdS);
        if (vc) {
          var tdC = document.createElement('td');
          tdC.appendChild(self.input({ field: 'frequency', label: 'Cadence', input: 'select', options: (cadF && cadF.options) || [] }, item));
          tr.appendChild(tdC);
        }
        if (vb) {
          var tdB = document.createElement('td');
          tdB.appendChild(self.input({ field: 'billing_frequency', label: 'Billed', input: 'select', options: (bilF && bilF.options) || [] }, item));
          tr.appendChild(tdB);
        }
        var tdA = document.createElement('td');
        var cb = document.createElement('input'); cb.type = 'checkbox';
        cb.checked = item.covered !== false;
        cb.dataset.wf = 'covered';
        cb.addEventListener('change', function () { item.covered = cb.checked; self.renderAll(); });
        tdA.appendChild(cb);
        tdA.appendChild(el('span', 'ts-chip' + (item.covered !== false ? '' : ' ts-chip--off'),
          item.covered !== false ? ' on the agreement' : ' on file only'));
        tr.appendChild(tdA);
        var tdPr = document.createElement('td');
        var pr = self.input({ field: 'price', label: 'Price', input: 'text' }, item);
        pr.disabled = item.covered === false;
        tdPr.appendChild(pr); tr.appendChild(tdPr);
        var tdN = document.createElement('td');
        tdN.appendChild(self.input({ field: 'item_name', label: 'Item', input: 'text',
          placeholder: 'blank = the whole place' }, item));
        tr.appendChild(tdN);
        var tdx = document.createElement('td');
        var rm = el('button', 'ts-remove', 'remove');
        rm.type = 'button';
        rm.addEventListener('click', function () { p.items.splice(ii, 1); self.renderAll(); });
        tdx.appendChild(rm); tr.appendChild(tdx);
        table.appendChild(tr);
      });
      return table;
    }

    // ---- THE SUMMARY (the spine's last step): every fact, editable in place ----------
    ro(label, value) {
      var wrap = el('div', 'ts-f');
      wrap.appendChild(el('label', null, label));
      wrap.appendChild(el('div', 'ts-ro' + (value ? '' : ' ts-ro--empty'), value || 'empty'));
      return wrap;
    }

    renderSummary(host) {
      var self = this;
      var A = fam('account');

      var head = el('div', 'ts-sec');
      head.appendChild(this.secHead('The Summary -- every fact of the act, editable in place',
        'the same devices that entered it (IN-8/IN-9)'));
      host.appendChild(head);

      // the account, editable (IN-9)
      var secA = el('div', 'ts-sec');
      secA.appendChild(this.secHead(A.title));
      var gridA = el('div', 'ts-fields');
      A.fields.forEach(function (f) {
        var opts = f.field === TS.entity + '_name' ? { onInput: function () { self.checkName(); } } : {};
        gridA.appendChild(self.labeled(f, self.acct, opts));
      });
      secA.appendChild(gridA);
      var dup = el('div', 'ts-dup'); dup.dataset.ts = 'namedup';
      secA.appendChild(dup);
      host.appendChild(secA);
      var bs2 = gridA.querySelector('[data-wf="billing_street_address"]');
      if (bs2) this.attachTypeahead(bs2, {
        street: bs2, city: gridA.querySelector('[data-wf="billing_city"]'),
        state: gridA.querySelector('[data-wf="billing_state"]'), zip: gridA.querySelector('[data-wf="billing_zip_code"]')
      }, this.billingGeo);

      // the agreement: identity + THE TERM VALUES (Q-M a -- the modes were set up front)
      var descF = fld('agreement', 'description');
      var startF = fld('agreement', 'start_date');
      var endF = fld('agreement', 'end_date');
      var cadF = fld('agreement', 'frequency');
      var bilF = fld('agreement', 'billing_frequency');
      var sec = el('div', 'ts-sec');
      sec.appendChild(this.secHead('The agreement -- identity + terms'));
      var grid = el('div', 'ts-fields');
      if (descF) grid.appendChild(this.labeled(descF, this.agree));
      if (startF) grid.appendChild(this.labeled(startF, this.agree));
      if (endF) grid.appendChild(this.labeled(endF, this.agree));
      if (this.cadMode === 'per') grid.appendChild(this.ro(cadF.label, 'set on each service (rows below)'));
      else if (cadF) grid.appendChild(this.labeled({ field: 'frequency', label: cadF.label + ' (all services)', input: 'select', options: cadF.options }, this.agree));
      if (this.billMode === 'separate') grid.appendChild(this.ro(bilF.label, 'each service billed separately (rows below)'));
      else if (bilF) grid.appendChild(this.labeled({ field: 'billing_frequency', label: bilF.label + ' (one bill)', input: 'select', options: bilF.options }, this.agree));
      // Q-AM (s45): the SET's price rides the header only when billed TOGETHER --
      // billed separate, each item row carries its own (never both).
      var priceF = fld('agreement', 'price');
      if (this.billMode === 'together' && priceF) grid.appendChild(this.labeled(priceF, this.agree));
      sec.appendChild(grid);
      var covered = 0, total = 0;
      this.places.forEach(function (p) { p.items.forEach(function (it) { total++; if (it.covered !== false) covered++; }); });
      sec.appendChild(el('div', 'ts-note', covered + ' of ' + total + ' item(s) ON THE AGREEMENT across ' +
        this.places.length + ' place(s)'));
      host.appendChild(sec);

      // the account roster, editable -- IN-15: place people live on their place cards
      var secE = el('div', 'ts-sec');
      secE.appendChild(this.secHead('The account roster',
        ROSTERS_SEPARATE ? 'place people are on their place cards below (IN-15)' : ''));
      secE.appendChild(this.rosterTable());
      var addR = el('button', 'ts-add', '+ add a person');
      addR.type = 'button';
      addR.addEventListener('click', function () { self.roster.push({ _org: 'roster' }); self.renderAll(); });
      secE.appendChild(addR);
      host.appendChild(secE);

      // every place, grouped the way the account will read in the app (F13) --
      // FULL address, editable (R2-8/IN-9), its people, its items
      var L = fam('places');
      this.places.forEach(function (p, i) {
        if (self.placeIsEmpty(p)) return;
        var s = el('div', 'ts-sec ts-place-card');
        var pc = 0; p.items.forEach(function (it) { if (it.covered !== false) pc++; });
        s.appendChild(self.secHead(p.vals.location_name || 'Place ' + (i + 1),
          pc + ' of ' + p.items.length + ' on the agreement at this site'));
        var gridP = el('div', 'ts-fields');
        L.fields.forEach(function (f) { gridP.appendChild(self.labeled(f, p.vals)); });
        s.appendChild(gridP);
        s.appendChild(self.provLine(p.vals));   // 3.2.0: the Summary's place carries the line too
        var stp = gridP.querySelector('[data-wf="street_address"]');
        if (stp) self.attachTypeahead(stp, {
          street: stp, city: gridP.querySelector('[data-wf="city"]'),
          state: gridP.querySelector('[data-wf="state"]'), zip: gridP.querySelector('[data-wf="postal_code"]')
        }, p.vals);
        if (self.simple()) {
          s.appendChild(el('p', 'ts-quiet', "the account's people keep this place -- the tie is implied"));
        } else {
          s.appendChild(self.tieTable(p, i));
        }
        s.appendChild(self.itemTable(p, i));
        var addI = el('button', 'ts-add', '+ add a service item');
        addI.type = 'button';
        addI.addEventListener('click', function () { p.items.push({ covered: true }); self.renderAll(); });
        s.appendChild(addI);
        host.appendChild(s);
      });

      var back = el('div', 'ts-stepnav');
      back.appendChild(this.ghostBtn('Back into the walk', function () {
        for (var i = 0; i < self.places.length; i++) {
          if (!self.places[i].done) { self.view = 'walk'; self.cursor = i; self.renderAll(); return; }
        }
        self.view = 'walk'; self.cursor = Math.max(0, self.places.length - 1); self.renderAll();
      }));
      // the fork rides the Summary too -- the whole-act view can grow the act (F7/IN-9)
      back.appendChild(this.ghostBtn('+ Add another place', function () {
        if (self.triage === 'one') self.triage = 'many';
        self.places.push(self.newPlace());
        self.cursor = self.places.length - 1;
        self.view = 'walk';
        self.renderAll();
      }));
      host.appendChild(back);
    }

    // ---- the act (T8: born whole or refused; the DOOR decides, never the form) -------
    placeIsEmpty(p) {
      return !p.vals.location_name && !p.vals.street_address && p.items.length === 0 && p.ties.length === 0;
    }

    buildPayload() {
      var self = this;
      var live = this.places.filter(function (p) { return !self.placeIsEmpty(p); });
      var places = live.map(function (p) {
        var row = {
          location_name: p.vals.location_name || null,
          street_address: p.vals.street_address || '',
          city: p.vals.city || '', state: p.vals.state || '', postal_code: p.vals.postal_code || '',
          access_information: p.vals.access_information || null,
          notes: p.vals.notes || null,
          // 3.2.0: the coordinate with its provenance, or nothing (the door writes the five together; absent = off the map)
          latitude: self.onMap(p.vals) ? p.vals.latitude : null,
          longitude: self.onMap(p.vals) ? p.vals.longitude : null,
          geocode_provider: self.onMap(p.vals) ? (p.vals.geocode_provider || null) : null,
          geocode_accuracy: self.onMap(p.vals) ? (p.vals.geocode_accuracy || null) : null,
          geocoded_at: self.onMap(p.vals) ? (p.vals.geocoded_at || null) : null
        };
        if (EDIT && p.id) row.service_location_id = p.id;   // the row persists; absent = born by the act
        return row;
      });
      var items = [], agreeItems = [];
      live.forEach(function (p, placeIdx) {
        p.items.forEach(function (it) {
          var idx = items.length;
          var itemRow = {
            item_name: it.item_name || p.vals.location_name || 'the whole place',   // F26
            item_type: it.item_type || null,
            place_index: placeIdx
          };
          if (EDIT && it.service_target_id) itemRow.service_target_id = it.service_target_id;
          items.push(itemRow);
          if (it.covered !== false) {
            // R3-2's belt AND braces: only a uuid-shaped service_id enters the payload
            var sid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(it.service_id || '')
              ? it.service_id : null;
            agreeItems.push({
              item_index: idx,
              price: it.price || null,
              frequency: self.cadMode === 'per' ? (it.frequency || null) : null,
              billing_frequency: self.billMode === 'separate' ? (it.billing_frequency || null) : null,
              service_id: sid
            });
          }
        });
      });
      var ties = [];
      live.forEach(function (p, placeIdx) {
        p.ties.forEach(function (t) {
          if (t.pi === undefined || !self.roster[t.pi]) return;
          ties.push({ person_index: t.pi, place_index: placeIdx,
                      role: t.role || 'primary', notes: t.notes || null,
                      is_primary: !!t.is_primary });
        });
      });
      // T7 carries: one person, one place, nothing declared -- the tie is implied
      if (ties.length === 0 && this.roster.length === 1 && places.length === 1) {
        ties = [{ person_index: 0, place_index: 0, role: 'primary', notes: null, is_primary: true }];
      }
      // the door's vocabulary only -- _org is the display split's, never the payload's
      var P = fam('people');
      var people = this.roster.map(function (person) {
        var row = {};
        P.fields.forEach(function (f) { if (person[f.field] !== undefined) row[f.field] = person[f.field]; });
        if (EDIT && person.contact_id) row.contact_id = person.contact_id;
        return row;
      });
      var agreement = {
        description: this.agree.description || null,
        start_date: this.agree.start_date || null,
        end_date: this.agree.end_date || null,   // Q11: blank unless requested
        frequency: this.cadMode === 'per' ? null : (this.agree.frequency || null),
        billing_frequency: this.billMode === 'separate' ? null : (this.agree.billing_frequency || null),
        price: this.billMode === 'together' ? (this.agree.price || null) : null,
        items: agreeItems
      };
      var payload = {
        tenant_id: this.context && this.context.tenant_id,
        account: this.acct,
        people: people,
        places: places,
        items: items,
        agreement: agreement,
        ties: ties
      };
      if (EDIT) payload.account_id = this.recordId;   // the edit door's one extra key
      return payload;
    }

    async submit() {
      var btn = this.$('submit');
      btn.disabled = true;
      this.client = this.client || this.dataClient();
      if (!this.client) {
        btn.disabled = false;
        return this.failNote('no data client -- the shell did not provide supabase context');
      }
      await this.ensurePlacedAll();   // 3.2.0 (his call 3): a typed address with no pick gets its one call before the act
      var r = await this.client.schema(TS.schema).rpc(TS.function, { payload: this.buildPayload() });
      btn.disabled = false;
      if (r.error) return this.failNote(TS.function + ': ' + r.error.message);
      var verdict = r.data;
      if (verdict && verdict.admitted === false) {
        this.gaps = verdict.gaps || [];
        this.renderRail();
        this.renderBanner();
        return;
      }
      if (verdict && verdict.admitted === true && verdict.account_id) {
        // born whole = born active -- land on the face THROUGH THE SHELL'S OWN ROUTER
        var route = '/' + TS.entity + 's/' + verdict.account_id;
        if (window.ShellNavigation && window.ShellNavigation.navigate) {
          window.ShellNavigation.navigate(route);
        } else {
          window.location.hash = '#' + route;
        }
        return;
      }
      this.failNote(TS.function + ': unexpected answer ' + JSON.stringify(verdict));
    }

    failNote(message) {
      var b = this.$('banner');
      b.hidden = false;
      b.className = 'ts-banner';
      b.textContent = message;
    }
  }

  // Export to window for the shell's mounting system
  if (typeof window !== 'undefined') {
    window.AccountEditTearsheetBlueprintUI = AccountEditTearsheetBlueprintUI;
    window.PatternRegistry = window.PatternRegistry || {};
    window.PatternRegistry['c7000000-0000-0000-0000-000000000001'] = window.AccountEditTearsheetBlueprintUI;
  }
})();
