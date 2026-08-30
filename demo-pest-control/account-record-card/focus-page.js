/**
 * Account Focus Page - Generated Blueprint UI (THE ONE PAGE, focus-page-001 1.0.0)
 * Blueprint ID: c3000000-0000-0000-0000-000000000001
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

  var FACE = {"schema":"services_template","tray":{"kinds":{"open_touch":{"button":{"title":"Resolve","status":"live"}},"coverage_gap":{"button":{"title":"Resolve","status":"future"}},"site_out_of_rhythm":{"button":{"title":"Schedule service","status":"future"}}},"source":"v_account_tray"},"entity":"account","header":{"chips":["status","account_type","billing_city"],"title_field":"account_name"},"selectors":[{"key":"contact","list":{"source":"v_account_people","columns":[{"field":"person","header":"person"},{"field":"role","header":"role"},{"field":"reach","header":"reach"},{"field":"prefers","header":"prefers"},{"field":"site","header":"site"}],"order_by":"rank","row_expansion":{"kind":"touch_log","source":"v_contact_touch_log"}},"label":"Contact"},{"key":"coverage","list":{"source":"v_account_coverage","columns":[{"field":"site","header":"site"},{"field":"target","header":"target"},{"field":"item_type","header":"type"},{"field":"plan","header":"plan"},{"field":"status","header":"status"}],"order_by":"site","site_leads":true},"label":"Service Coverage"},{"key":"work_orders","list":{"source":"v_account_work","columns":[{"field":"site","header":"site"},{"field":"work_date","header":"date"},{"field":"work_type","header":"type"},{"field":"summary","header":"summary"},{"field":"status","header":"status"}],"order_by":"work_date desc","site_leads":true},"label":"Work Orders"},{"key":"ledger","list":{"source":"v_account_ledger","columns":[{"field":"doc_date","header":"date"},{"field":"document","header":"document"},{"field":"site","header":"site"},{"field":"amount","header":"amount"},{"field":"status","header":"status"}],"order_by":"doc_date desc","caption_billing_address":true},"label":"Ledger"}],"primary_key":"account_id","frame_columns":5,"personas":{"FIELD_TECH":{"fields":["account_name","billing_street_address","billing_city","phone","next_service_date"],"readonly":["account_name","billing_street_address","billing_city","phone","next_service_date"],"filters":{"status":["active"]},"actions":["view","search"]},"GENERIC_USER":{"fields":["account_name","billing_street_address","billing_city","billing_state","billing_zip_code","phone","email","status","balance","created_at"],"readonly":["account_name","status","balance"],"filters":null,"actions":["view","search","sort","filter"]},"OPS_MANAGER":{"fields":["account_name","account_type","billing_street_address","billing_city","billing_state","billing_zip_code","status","phone","email","balance","last_service_date","next_service_date","service_frequency"],"readonly":["balance"],"filters":null,"actions":["view","search","sort","filter","edit","create"]},"SERVICE_MANAGER":{"fields":["account_name","billing_street_address","billing_city","phone","status","last_service_date","next_service_date","service_frequency"],"readonly":["account_name","status"],"filters":{"status":["active"]},"actions":["view","search","sort","filter","schedule","assign_tech","create"]},"CUSTOMER_SERVICE":{"fields":["account_name","account_type","status","billing_street_address","billing_city","billing_state","billing_zip_code","internal_notes","created_at","phone","email"],"readonly":["account_name","status","balance","last_service_date","next_service_date"],"filters":{"status":["active"]},"actions":["view","search","sort","filter","edit","log_call","schedule"]},"ADMIN_FULL":{"fields":["account_name","account_type","billing_street_address","billing_city","billing_state","billing_zip_code","status","internal_notes","phone","email","balance","last_service_date","next_service_date","service_frequency","created_at","updated_at"],"readonly":[],"filters":null,"actions":["view","search","sort","filter","edit","delete","export","bulk_actions","create"]}}};
  var SKELETON = "<!-- Account Focus Page -- THE ONE PAGE (focus-page-001, screen-grammar 42-46). Generated; do not edit.\n     The shell mounts into an EMPTY host (the s37 skeleton lesson): this markup is written by\n     focus-page.js FIRST, then filled. Five regions less one: the call panel arrives with 3c. -->\n<div class=\"fp\" data-blueprint=\"c3000000-0000-0000-0000-000000000001\">\n  <header class=\"fp-head\">\n    <h2 class=\"fp-title\" data-fp=\"title\"></h2>\n    <span class=\"fp-chips\" data-fp=\"chips\"></span>\n  </header>\n  <section class=\"fp-tray\" aria-label=\"Needs attention\">\n    <p class=\"fp-tray-label\">Needs attention</p>\n    <div data-fp=\"tray\"></div>\n  </section>\n  <nav class=\"fp-selectors\" data-fp=\"selectors\" aria-label=\"Detail selectors\"></nav>\n  <section class=\"fp-frame\" aria-label=\"Detail\">\n    <p class=\"fp-caption\" data-fp=\"caption\"></p>\n    <div class=\"fp-radios\" data-fp=\"radios\"></div>\n    <p class=\"fp-siteline\" data-fp=\"siteline\" hidden></p>\n    <div class=\"fp-list\" data-fp=\"list\"></div>\n  </section>\n</div>\n";

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = String(text);
    return e;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  class AccountFocusPageBlueprintUI {

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
    }

    getMetadata() {
      return { blueprintId: 'c3000000-0000-0000-0000-000000000001', pattern: 'FOCUS-PAGE', entity: FACE.entity };
    }

    mount(container) {
      this.container = container;
      container.innerHTML = SKELETON;
      this.$ = function (k) { return container.querySelector('[data-fp="' + k + '"]'); };
      this.maybeLoad();
    }

    unmount() {
      if (this.container) clear(this.container);
      this.container = null; this.rec = null; this.listCache = {};
    }

    onContext(context) {
      this.context = context || {};
      if (this.context.recordId && !this.recordId) this.recordId = this.context.recordId;
      this.maybeLoad();
    }

    setRecordId(id) {
      if (!id || id === this.recordId) return;
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
      var r = await this.from(FACE.entity).select('*').eq(FACE.primary_key, this.recordId).limit(1);
      if (r.error) return this.fail(FACE.entity, r.error.message);
      this.rec = (r.data || [])[0];
      if (!this.rec) return this.fail(FACE.entity, 'no record ' + this.recordId);
      this.renderHeader();
      await this.renderTray();
      this.renderSelectors();
      await this.showSelector(this.activeSelector);
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
    }

    // -- the tray (concept 40): open touches + derived exceptions; Resolve writes -------------
    async renderTray() {
      var self = this;
      var host = this.$('tray'); clear(host);
      var r = await this.from(FACE.tray.source).select('*').eq(FACE.primary_key, this.recordId);
      if (r.error) return this.fail(FACE.tray.source, r.error.message);
      var rows = r.data || [];
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

      // caption -- and the Ledger's half of the address law (46)
      var cap = s.label + ' · ' + rows.length + ' row(s)';
      if (L.caption_billing_address && this.rec) {
        cap += ' · billing address: ' + [this.rec.billing_street_address, this.rec.billing_city,
          this.rec.billing_state, this.rec.billing_zip_code].filter(Boolean).join(', ');
      }
      this.$('caption').textContent = cap;

      // site radios (44); one site -> they collapse (30)
      var radios = this.$('radios'); clear(radios);
      var line = this.$('siteline'); line.hidden = true; line.textContent = '';
      var focus = this.siteFocus[i] || 'all';
      if (L.site_leads) {
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
    window.AccountFocusPageBlueprintUI = AccountFocusPageBlueprintUI;
    window.PatternRegistry = window.PatternRegistry || {};
    window.PatternRegistry['c3000000-0000-0000-0000-000000000001'] = window.AccountFocusPageBlueprintUI;
  }
})();
