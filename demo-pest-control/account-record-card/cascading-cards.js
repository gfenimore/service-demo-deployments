/**
 * Account record card - Generated Blueprint UI (the RECORD CARD, cascading-cards 1.1.x)
 * Blueprint ID: c3000000-0000-0000-0000-000000000001
 * Pattern: CASCADING-CARDS
 * Root entity: account
 *
 * Implements Pattern Interface Contract (JBA-003)
 * - mount(container): Render into container
 * - unmount(): Cleanup everything
 * - onContext(context): Receive tenant/user/role (and the route's record id, if it carries one)
 * - getMetadata(): Return component info
 * - setRecordId(id): the record bridge and the router hand the focused record here
 *
 * The card of ONE record (screen-grammar concept 27): the root arrives chosen (by the list's row
 * click through the shell's bridge, or by the URL's route parameter), its children are read whole by
 * the account as the SIGNED-IN ROLE through the shell's data client, the selector set is resolved by
 * the SAME module the mockup generator runs (inlined below), and every path that is closed to the
 * role is SAID on the page, never blank (s31's silent-failure ban; concept 22).
 */

// Wrap in IIFE to prevent class redeclaration errors when loading multiple blueprints
(function() {
  'use strict';

  var CARD = {
  "schema": "services_template",
  "root": {
    "entity": "account",
    "table": "account",
    "preselected": true,
    "routeParam": "id"
  },
  "cascades": [
    {
      "name": "targets",
      "label": "Service targets",
      "levels": [
        {
          "entity": "service_target",
          "table": "service_target",
          "label": "Service Target",
          "labelField": "item_name",
          "primaryKey": "service_target_id",
          "foreignKey": "account_id",
          "columns": [
            {
              "field": "item_name",
              "label": "Item Name"
            },
            {
              "field": "item_type",
              "label": "Item Type"
            },
            {
              "field": "status",
              "label": "Status"
            }
          ],
          "order": []
        }
      ]
    },
    {
      "name": "work",
      "label": "Work by location",
      "levels": [
        {
          "entity": "service_location",
          "table": "service_location",
          "label": "Service Location",
          "labelField": "location_name",
          "primaryKey": "service_location_id",
          "foreignKey": "account_id",
          "columns": [
            {
              "field": "location_name",
              "label": "Location Name"
            },
            {
              "field": "street_address",
              "label": "Street Address"
            },
            {
              "field": "city",
              "label": "City"
            }
          ],
          "order": []
        },
        {
          "entity": "work_order",
          "table": "work_order",
          "label": "Work Order",
          "labelField": "summary",
          "primaryKey": "work_order_id",
          "foreignKey": "service_location_id",
          "columns": [
            {
              "field": "work_order_type",
              "label": "Work Order Type"
            },
            {
              "field": "work_order_status",
              "label": "Work Order Status"
            },
            {
              "field": "scheduled_date_time",
              "label": "Scheduled Date Time"
            }
          ],
          "order": [
            {
              "path": "scheduled_date_time",
              "direction": "desc"
            }
          ]
        }
      ]
    }
  ],
  "cards": {
    "account": {
      "facts": [
        {
          "path": "service_agreement[current]",
          "covers": "service_agreement[current].agreement_item[]",
          "fields": [
            "frequency",
            "start_date"
          ],
          "section": "Agreement"
        },
        {
          "paths": [
            "invoice[last].invoice_number",
            "invoice[last].total_amount",
            "invoice[last].status",
            "payment[last].payment_date",
            "payment[last].amount"
          ],
          "derived": [
            "balance"
          ],
          "section": "Billing summary"
        }
      ],
      "drills": [
        {
          "label": "Billing history",
          "paths": [
            "invoice",
            "payment",
            "credit_memo"
          ]
        },
        {
          "path": "contact",
          "then": "contact.communication_log",
          "label": "All contacts"
        },
        {
          "path": "account_status_change",
          "label": "Status history"
        }
      ],
      "header": [
        {
          "path": "contact[primary].first_name + last_name",
          "facts": [
            "contact[primary].phone_number",
            "contact[primary].communication_preference"
          ],
          "label": "Primary contact"
        },
        {
          "path": "service_agreement[current].frequency",
          "facts": [
            "service_agreement[current].agreement_status",
            "service_agreement[current].start_date"
          ],
          "label": "Agreement"
        },
        {
          "label": "Balance",
          "derived": "balance"
        },
        {
          "path": "work_order[next scheduled].scheduled_date_time",
          "facts": [
            "work_order[next scheduled].service_target.item_name"
          ],
          "label": "Next service"
        },
        {
          "path": "work_order[last completed].completion_date_time",
          "label": "Last service"
        }
      ],
      "derived": [
        {
          "name": "balance",
          "rule": "sum(invoice.total_amount where status in (sent, overdue, paid)) - sum(payment.amount where status = cleared)"
        },
        {
          "name": "last_service",
          "rule": "max(work_order.completion_date_time where status = completed)"
        },
        {
          "name": "next_service",
          "rule": "min(work_order.scheduled_date_time where status = scheduled and scheduled_date_time >= now)"
        }
      ],
      "projection": [
        "account_name",
        "account_type",
        "status",
        "billing_street_address",
        "billing_city",
        "billing_state",
        "billing_zip_code",
        "internal_notes",
        "created_at"
      ]
    },
    "work_order": {
      "drills": [
        {
          "label": "Open work order",
          "rides": [
            "work_order_assignment",
            "work_order_item"
          ],
          "own_page": true
        }
      ],
      "header": [
        "work_order_type",
        "work_order_status",
        "scheduled_date_time"
      ],
      "projection": [
        "work_order_type",
        "work_order_status",
        "scheduled_date_time",
        "completion_date_time",
        "summary",
        "priority"
      ]
    },
    "service_target": {
      "facts": [
        {
          "path": "primary_service_location",
          "fields": [
            "street_address",
            "city"
          ],
          "section": "Location"
        }
      ],
      "drills": [
        {
          "path": "service_target_property",
          "label": "Target details"
        }
      ],
      "header": [
        "item_name",
        "item_type",
        "status"
      ],
      "projection": [
        "item_name",
        "item_type",
        "identifier1",
        "status",
        "created_at"
      ]
    },
    "service_location": {
      "facts": [
        {
          "path": "geographic_area",
          "fields": [
            "name"
          ],
          "section": "Dispatch area"
        }
      ],
      "drills": [
        {
          "path": "contact_location",
          "label": "Contacts at this location"
        }
      ],
      "header": [
        "location_name",
        "street_address",
        "city"
      ],
      "projection": [
        "location_name",
        "street_address",
        "city",
        "state",
        "postal_code",
        "access_information"
      ]
    }
  },
  "actions": {
    "derived": "the focused record's entity: its goal verbs from job_steps, narrowed by the role's cell (actions_enabled); families not in the tree show as future",
    "verbs": [
      {
        "label": "Log a call",
        "goal": null,
        "family": "COMMUNICATE",
        "how": null
      },
      {
        "label": "Schedule service",
        "goal": "WORK_ORDER.ADD",
        "family": null,
        "how": null
      },
      {
        "label": "Bill",
        "goal": null,
        "family": "BILL",
        "how": null
      },
      {
        "label": "Edit",
        "goal": "ACCOUNT.EDIT",
        "family": null,
        "how": null
      },
      {
        "label": "Deactivate",
        "goal": "ACCOUNT.DEACTIVATE",
        "family": null,
        "how": "deactivate-account-gate"
      }
    ]
  },
  "personas": {
    "ADMIN_FULL": {
      "fields": [
        "account_name",
        "account_type",
        "billing_street_address",
        "billing_city",
        "billing_state",
        "billing_zip_code",
        "status",
        "internal_notes",
        "phone",
        "email",
        "balance",
        "last_service_date",
        "next_service_date",
        "service_frequency",
        "created_at",
        "updated_at"
      ],
      "readonly": [],
      "filters": null,
      "actions": [
        "view",
        "search",
        "sort",
        "filter",
        "edit",
        "delete",
        "export",
        "bulk_actions",
        "create"
      ]
    },
    "FIELD_TECH": {
      "fields": [
        "account_name",
        "billing_street_address",
        "billing_city",
        "phone",
        "next_service_date"
      ],
      "readonly": [
        "account_name",
        "billing_street_address",
        "billing_city",
        "phone",
        "next_service_date"
      ],
      "filters": {
        "status": [
          "active"
        ]
      },
      "actions": [
        "view",
        "search"
      ]
    },
    "GENERIC_USER": {
      "fields": [
        "account_name",
        "billing_street_address",
        "billing_city",
        "billing_state",
        "billing_zip_code",
        "phone",
        "email",
        "status",
        "balance",
        "created_at"
      ],
      "readonly": [
        "account_name",
        "status",
        "balance"
      ],
      "filters": null,
      "actions": [
        "view",
        "search",
        "sort",
        "filter"
      ]
    },
    "OPS_MANAGER": {
      "fields": [
        "account_name",
        "account_type",
        "billing_street_address",
        "billing_city",
        "billing_state",
        "billing_zip_code",
        "status",
        "phone",
        "email",
        "balance",
        "last_service_date",
        "next_service_date",
        "service_frequency"
      ],
      "readonly": [
        "balance"
      ],
      "filters": null,
      "actions": [
        "view",
        "search",
        "sort",
        "filter",
        "edit",
        "create"
      ]
    },
    "SERVICE_MANAGER": {
      "fields": [
        "account_name",
        "billing_street_address",
        "billing_city",
        "phone",
        "status",
        "last_service_date",
        "next_service_date",
        "service_frequency"
      ],
      "readonly": [
        "account_name",
        "status"
      ],
      "filters": {
        "status": [
          "active"
        ]
      },
      "actions": [
        "view",
        "search",
        "sort",
        "filter",
        "schedule",
        "assign_tech",
        "create"
      ]
    },
    "CUSTOMER_SERVICE": {
      "fields": [
        "account_name",
        "account_type",
        "status",
        "billing_street_address",
        "billing_city",
        "billing_state",
        "billing_zip_code",
        "internal_notes",
        "created_at",
        "phone",
        "email"
      ],
      "readonly": [
        "account_name",
        "status",
        "balance",
        "last_service_date",
        "next_service_date"
      ],
      "filters": {
        "status": [
          "active"
        ]
      },
      "actions": [
        "view",
        "search",
        "sort",
        "filter",
        "edit",
        "log_call",
        "schedule"
      ]
    }
  },
  "readModel": "v_account_list",
  "emptyText": "No rows for this account yet.",
  "primaryKey": "account_id"
};

// ==== INLINE-BEGIN ====
var RecordCardSelectors = (function () {
  'use strict';

  var RULES = {
    'primary':        'the contact whose is_primary_contact is true',
    'current':        'the agreement with agreement_status = active and the latest start_date',
    'last':           'the newest row by its date',
    'last completed': 'the work order with status completed and the latest completion_date_time',
    'next scheduled': 'the work order with status scheduled and the earliest scheduled_date_time'
  };

  var PK = {
    account: 'account_id', contact: 'contact_id', service_agreement: 'agreement_id', agreement_item: 'agreement_item_id',
    invoice: 'invoice_id', payment: 'payment_id', credit_memo: 'credit_memo_id', work_order: 'work_order_id',
    service_target: 'service_target_id', service_location: 'service_location_id', geographic_area: 'geographic_area_id',
    service_target_property: 'property_id', contact_location: 'contact_location_id', account_status_change: 'account_status_change_id',
    communication_log: 'communication_log_id', work_order_assignment: 'work_order_assignment_id', work_order_item: 'work_order_item_id'
  };

  var DATE_COLS = /_date(_time)?$|^created_at$|^updated_at$/;

  function cmp(a, b) { return a < b ? -1 : a > b ? 1 : 0; }

  /** A value as the page shows it: dates to their day, objects as JSON, null stays null. */
  function showVal(col, v) {
    if (v === null || v === undefined) return null;
    if (DATE_COLS.test(col) && typeof v === 'string' && v.length >= 10) return v.slice(0, 10);
    return typeof v === 'object' ? JSON.stringify(v) : String(v);
  }

  /** The order each child set takes once read by account -- stable, keyed last so ties are deterministic. */
  var ORDER = {
    contact:               function (a, b) { return cmp(a.last_name, b.last_name) || cmp(a.first_name, b.first_name) || cmp(a.contact_id, b.contact_id); },
    service_agreement:     function (a, b) { return cmp(b.start_date, a.start_date) || cmp(a.agreement_id, b.agreement_id); },
    invoice:               function (a, b) { return cmp(b.invoice_date, a.invoice_date) || cmp(a.invoice_id, b.invoice_id); },
    payment:               function (a, b) { return cmp(b.payment_date, a.payment_date) || cmp(a.payment_id, b.payment_id); },
    credit_memo:           function (a, b) { return cmp(a.credit_memo_id, b.credit_memo_id); },
    work_order:            function (a, b) { return cmp(b.scheduled_date_time, a.scheduled_date_time) || cmp(a.work_order_id, b.work_order_id); },
    service_target:        function (a, b) { return cmp(a.item_name, b.item_name) || cmp(a.service_target_id, b.service_target_id); },
    service_location:      function (a, b) { return cmp(a.location_name, b.location_name) || cmp(a.service_location_id, b.service_location_id); },
    account_status_change: function (a, b) { return cmp(a.account_status_change_id, b.account_status_change_id); }
  };

  function sortRows(table, rows) {
    var list = (rows || []).slice();
    if (ORDER[table]) list.sort(ORDER[table]);
    return list;
  }

  /**
   * The selector set, resolved over the account's sorted child rows.
   * sets = { contact, service_agreement, invoice, payment, work_order } (each already sortRows-ed).
   */
  function select(sets) {
    var contacts = sets.contact || [], agreements = sets.service_agreement || [], invoices = sets.invoice || [],
        payments = sets.payment || [], workOrders = sets.work_order || [];
    function first(list) { return list.length ? list[0] : null; }
    return {
      'contact[primary]':           contacts.filter(function (c) { return c.is_primary_contact === true; })[0] || null,
      'service_agreement[current]': agreements.filter(function (a) { return a.agreement_status === 'active'; })[0] || null,
      'invoice[last]':              first(invoices),
      'payment[last]':              first(payments),
      'work_order[last completed]': first(workOrders.filter(function (w) { return w.work_order_status === 'completed'; })
                                      .sort(function (a, b) { return cmp(b.completion_date_time, a.completion_date_time); })),
      'work_order[next scheduled]': first(workOrders.filter(function (w) { return w.work_order_status === 'scheduled'; })
                                      .sort(function (a, b) { return cmp(a.scheduled_date_time, b.scheduled_date_time); }))
    };
  }

  /**
   * Resolve one declared path against the selected rows.
   *   returns null                      -- not a path this grammar knows
   *   { mode: 'bare',   sel, table, row, id }                 -- `entity[selector]`
   *   { mode: 'absent', sel, table }                          -- the selector chose nothing
   *   { mode: 'fields', sel, table, row, id, fields: [f..] }  -- `.field` or `.a + b`
   *   { mode: 'hop',    sel, table, row, id, hop: { table, row, id, field } } -- the compiled hop (row may be null)
   *   { mode: 'unsupported', sel, path }                      -- a hop this version does not compile
   * lookups = { service_target: { id -> row } } for the compiled hop.
   */
  function resolvePath(p, selected, lookups) {
    var m = /^(\w+)\[([^\]]+)\](?:\.(.+))?$/.exec(p);
    if (!m) return null;
    var sel = m[1] + '[' + m[2] + ']', rest = m[3], table = m[1];
    if (!(sel in selected)) return null;
    var row = selected[sel];
    if (!rest) return { mode: 'bare', sel: sel, table: table, row: row, id: row ? row[PK[table]] : null };
    if (!row) return { mode: 'absent', sel: sel, table: table };
    var id = row[PK[table]];
    if (rest.indexOf(' + ') > -1) {
      return { mode: 'fields', sel: sel, table: table, row: row, id: id, fields: rest.split(' + ').map(function (f) { return f.trim(); }) };
    }
    if (rest.indexOf('.') > -1) {
      var parts = rest.split('.'), hop = parts[0], field = parts[1];
      if (table === 'work_order' && hop === 'service_target') {
        var t = (lookups && lookups.service_target && lookups.service_target[row.service_target_id]) || null;
        return { mode: 'hop', sel: sel, table: table, row: row, id: id, hop: { table: 'service_target', row: t, id: t ? t.service_target_id : null, field: field } };
      }
      return { mode: 'unsupported', sel: sel, path: p };
    }
    return { mode: 'fields', sel: sel, table: table, row: row, id: id, fields: [rest] };
  }

  /** A declared derived fact -> the read model's column that runs it today (v_account_list, s35 Q11). */
  function derivedColumn(name) {
    return ({ balance: 'balance', last_service: 'last_service_date', next_service: 'next_service_date' })[name] || name;
  }

  return { RULES: RULES, PK: PK, DATE_COLS: DATE_COLS, cmp: cmp, showVal: showVal, sortRows: sortRows, select: select, resolvePath: resolvePath, derivedColumn: derivedColumn };
})();
// ==== INLINE-END ====

  var S = RecordCardSelectors;
  var PK = S.PK;
  // The child sets read whole by the root's key, in the order the selector module sorts them.
  var CHILD_SETS = ['contact', 'service_agreement', 'invoice', 'payment', 'credit_memo', 'work_order',
                    'service_target', 'service_location', 'account_status_change'];

  function humanize(s) {
    return String(s).split(/[^a-zA-Z0-9]+/).filter(Boolean)
      .map(function (p) { return p.charAt(0).toUpperCase() + p.slice(1); }).join(' ');
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = String(text);
    return e;
  }
  function byId(rows, key) {
    var m = {};
    (rows || []).forEach(function (r) { m[r[key]] = r; });
    return m;
  }

  class AccountBlueprintUI {

    constructor() {
      this.container = null;
      this.context = null;
      this.client = null;
      this.recordId = null;
      this.record = null;
      this.rows = {};       // table -> rows read by the root's key
      this.extra = {};      // the reads that hang off children (communication_log, agreement_item, geographic_area)
      this.closed = {};     // table -> the database's words when the role was refused
      this.sel = {};        // the selector set, resolved
      this.lookups = {};    // table -> { id -> row }
      this.readModel = null;
      this.picked = {};     // cascade index -> the selected row's key
      this._handlers = new Map();
      this._seq = 0;
    }

    // -- contract ------------------------------------------------------------------------------
    onContext(context) {
      this.context = context || null;
      var p = (context && context.params) || {};
      var id = p[CARD.root.routeParam] || (context && context.recordId) || null;
      if (id) this.setRecordId(id);
      return this;
    }

    getMetadata() {
      return {
        blueprintId: 'c3000000-0000-0000-0000-000000000001',
        pattern: 'CASCADING-CARDS',
        shape: 'record-card',
        entity: 'account',
        root: CARD.root.entity,
        schema: CARD.schema,
        cascades: CARD.cascades.map(function (c) { return c.levels.map(function (l) { return l.entity; }); })
      };
    }

    /** The record bridge (the list's row click) and the router (the URL's :id) both land here. */
    setRecordId(recordId) {
      var id = recordId ? String(recordId) : null;
      if (id === this.recordId && this.record) return;
      this.recordId = id;
      if (this.container) this._load();
    }

    async mount(container) {
      if (!container) throw new Error('AccountBlueprintUI.mount: no container');
      this.container = container;
      this.client = this._client();
      var onClick = this._onClick.bind(this);
      container.addEventListener('click', onClick);
      this._handlers.set('click', onClick);
      if (this.recordId) await this._load(); else this._state('waiting');
      return this;
    }

    unmount() {
      if (this.container) {
        for (const [evt, fn] of this._handlers) this.container.removeEventListener(evt, fn);
      }
      this._handlers.clear();
      this.container = null;
      this.client = null;
      this.record = null;
      this.rows = {}; this.extra = {}; this.closed = {}; this.sel = {}; this.lookups = {}; this.picked = {};
      return this;
    }

    // -- data ----------------------------------------------------------------------------------
    _client() {
      if (typeof window === 'undefined') return null;
      // THE SHELL'S CLIENT WINS (s31): one client for the page, the signed-in user's token read fresh
      // per request, on the shell's schema. The fallback builds a per-component client carrying the
      // session header the shell published at sign-in.
      var ctx = window.AppContext || {};
      var sb = ctx.supabase || {};
      if (window.ShellData && (sb.schema || 'public') === CARD.schema) return window.ShellData;
      if (window.supabase && window.supabase.createClient && sb.url && sb.anonKey) {
        return window.supabase.createClient(sb.url, sb.anonKey, {
          db: { schema: CARD.schema },
          global: { headers: ctx.authHeaders || {} }
        });
      }
      return null;
    }

    /** One read, as the role. A refusal is recorded against the table and rendered, never swallowed. */
    async _read(table, build) {
      try {
        var q = build(this.client.schema(CARD.schema).from(table));
        var r = await q;
        if (r.error) throw new Error(r.error.message || String(r.error));
        delete this.closed[table];
        return r.data || [];
      } catch (err) {
        this.closed[table] = err.message || String(err);
        return [];
      }
    }

    async _load() {
      var seq = ++this._seq;
      var id = this.recordId;
      var root = CARD.root;
      var pk = PK[root.entity] || CARD.primaryKey;
      this._state('loading');
      if (!this.client) {
        this._error('No data client is configured, so this record card has nothing to read.');
        this._state('error');
        return;
      }

      var recRows = await this._read(root.table, function (q) { return q.select('*').eq(pk, id).limit(1); });
      if (seq !== this._seq) return;
      this.record = recRows[0] || null;
      if (!this.record) {
        if (this.closed[root.table]) { this._error(humanize(root.entity) + ' is closed to your role: ' + this.closed[root.table]); this._state('error'); }
        else this._state('empty');
        return;
      }

      var self = this;
      this.rows = {};
      for (var i = 0; i < CHILD_SETS.length; i++) {
        var t = CHILD_SETS[i];
        var got = await this._read(t, function (q) { return q.select('*').eq(pk, id); });
        if (seq !== this._seq) return;
        this.rows[t] = S.sortRows(t, got);
      }
      var contactIds = (this.rows.contact || []).map(function (c) { return c.contact_id; });
      var agreementIds = (this.rows.service_agreement || []).map(function (a) { return a.agreement_id; });
      this.extra.communication_log = contactIds.length
        ? await this._read('communication_log', function (q) { return q.select('communication_log_id, contact_id').in('contact_id', contactIds); }) : [];
      this.extra.agreement_item = agreementIds.length
        ? await this._read('agreement_item', function (q) { return q.select('*').in('agreement_id', agreementIds); }) : [];
      this.extra.geographic_area = await this._read('geographic_area', function (q) { return q.select('*'); });
      var rm = await this._read(CARD.readModel, function (q) { return q.select('*').eq(pk, id).limit(1); });
      if (seq !== this._seq) return;
      this.readModel = rm[0] || null;

      this.lookups = {
        service_target: byId(this.rows.service_target, 'service_target_id'),
        service_location: byId(this.rows.service_location, 'service_location_id'),
        geographic_area: byId(this.extra.geographic_area, 'geographic_area_id')
      };
      this.sel = S.select(this.rows);
      this.picked = {};
      this._render();
      this._state('rows');
    }

    // -- the ROLE gate (1.1.1; the engine's key is `personas`): chosen at render time; null = no narrowing
    _roleGate() {
      var facet = this.context && this.context.facet;
      if (!facet || !CARD.personas) return null;
      return CARD.personas[facet] || null;
    }
    _visible(fields) {
      var p = this._roleGate();
      if (!p || !Array.isArray(p.fields)) return fields;
      return fields.filter(function (f) { return p.fields.indexOf(f) !== -1; });
    }

    // -- render --------------------------------------------------------------------------------
    _slot(role) { return this.container.querySelector('[data-role="' + role + '"]'); }

    _closedMark(table) {
      var m = el('span', 'record-card__closedmark', 'closed to your role');
      m.title = this.closed[table] || '';
      return m;
    }

    /** A path's value as text nodes, or the closed / absent / not-compiled word for it. */
    _pathValue(p) {
      var frag = document.createDocumentFragment();
      var r = S.resolvePath(p, this.sel, this.lookups);
      if (!r) { frag.appendChild(el('span', 'record-card__muted', '(path not compiled: ' + p + ')')); return frag; }
      var table = r.table || (r.sel ? r.sel.split('[')[0] : null);
      if (table && this.closed[table]) { frag.appendChild(this._closedMark(table)); return frag; }
      if (r.mode === 'absent') { frag.appendChild(el('span', 'record-card__muted', '(none)')); return frag; }
      if (r.mode === 'bare') { frag.appendChild(document.createTextNode(r.id == null ? '(none)' : String(r.id))); return frag; }
      if (r.mode === 'fields') {
        var vals = r.fields.map(function (f) { return S.showVal(f, r.row[f]); }).filter(function (v) { return v !== null; });
        frag.appendChild(document.createTextNode(vals.length ? vals.join(' ') : '(none)'));
        return frag;
      }
      if (r.mode === 'hop') {
        if (this.closed[r.hop.table]) { frag.appendChild(this._closedMark(r.hop.table)); return frag; }
        var v = r.hop.row ? S.showVal(r.hop.field, r.hop.row[r.hop.field]) : null;
        frag.appendChild(document.createTextNode(v === null ? '(none)' : v));
        return frag;
      }
      frag.appendChild(el('span', 'record-card__muted', '(path not compiled: ' + p + ')'));
      return frag;
    }

    _derivedValue(name) {
      var col = S.derivedColumn(name);
      if (this.closed[CARD.readModel]) return this._closedMark(CARD.readModel);
      var v = this.readModel ? S.showVal(col, this.readModel[col]) : null;
      return document.createTextNode(v === null ? '(none)' : v);
    }

    _render() {
      var rec = this.record, root = CARD.root, card = (CARD.cards && CARD.cards[root.entity]) || {};
      var self = this;

      // the title row: the first projected field is the name; status-like fields are tags
      var projection = Array.isArray(card.projection) ? card.projection : [];
      var nameField = projection[0] || PK[root.entity];
      this._slot('name').textContent = rec[nameField] == null ? '(untitled)' : String(rec[nameField]);
      var tags = this._slot('tags'); tags.textContent = '';
      projection.filter(function (f) { return f === 'status' || /_type$/.test(f); }).forEach(function (f) {
        if (rec[f] != null) tags.appendChild(el('span', 'record-card__tag', rec[f]));
      });

      // THE COMMAND BAR (1.1.2; SJ s37 Q3 "yes", Q5 "unnarrowed verb list"): the verbs declared on the
      // blueprint, in order, for the focused record. Live when `how` names a component placed on this
      // feature (the gate for Deactivate); otherwise named and disabled -- a future verb is shown, never
      // hidden (concept 27 ii). No narrowing by any role's cell (Q3.1 deferred).
      var actions = this._slot('actions'); actions.textContent = '';
      if (CARD.actions && CARD.actions.derived) { actions.setAttribute('data-derived', CARD.actions.derived); }
      ((CARD.actions && CARD.actions.verbs) || []).forEach(function (v) {
        var b = el('button', 'record-card__action', v.label);
        b.type = 'button';
        b.setAttribute('data-role', 'verb');
        if (v.goal) b.setAttribute('data-goal', v.goal);
        if (v.family) b.setAttribute('data-family', v.family);
        if (v.how) { b.setAttribute('data-how', v.how); }
        else {
          b.disabled = true;
          b.title = (v.family ? v.family + ' is not in the goal tree yet' : v.goal + ' has no screen placed on this feature yet') + ' -- shown as future';
          b.setAttribute('aria-disabled', 'true');
        }
        actions.appendChild(b);
      });

      // the header tiles
      var tiles = this._slot('tiles'); tiles.textContent = '';
      (Array.isArray(card.header) ? card.header : []).forEach(function (h) {
        var tile = el('div', 'record-card__tile');
        if (typeof h === 'string') {
          tile.appendChild(el('div', 'record-card__tilelabel', humanize(h)));
          tile.appendChild(el('div', 'record-card__tilevalue', S.showVal(h, rec[h]) === null ? '(none)' : S.showVal(h, rec[h])));
        } else {
          tile.appendChild(el('div', 'record-card__tilelabel', h.label || (h.derived ? humanize(h.derived) : h.path)));
          var val = el('div', 'record-card__tilevalue');
          val.appendChild(h.derived ? self._derivedValue(h.derived) : self._pathValue(h.path));
          tile.appendChild(val);
          (h.facts || []).forEach(function (f) {
            var sub = el('div', 'record-card__tilesub');
            sub.appendChild(self._pathValue(f));
            tile.appendChild(sub);
          });
        }
        tiles.appendChild(tile);
      });

      // L1: the projection (the role may hide, never reorder), the facts, the derived, the drills
      var dl = this._slot('projection'); dl.textContent = '';
      this._visible(projection).forEach(function (f) {
        dl.appendChild(el('dt', null, humanize(f)));
        var v = S.showVal(f, rec[f]);
        dl.appendChild(el('dd', v === null ? 'record-card__muted' : null, v === null ? '(none)' : v));
      });

      var facts = this._slot('facts'); facts.textContent = '';
      (Array.isArray(card.facts) ? card.facts : []).forEach(function (s) {
        var sec = el('section', 'record-card__section');
        if (s.section) sec.appendChild(el('div', 'record-card__sectiontitle', s.section));
        if (s.path) {
          var r = S.resolvePath(s.path, self.sel, self.lookups);
          var row = r && r.row ? r.row : null, table = r ? r.table : null;
          (s.fields || []).forEach(function (f) {
            var line = el('div', 'record-card__line');
            line.appendChild(el('span', 'record-card__muted', humanize(f) + ': '));
            if (table && self.closed[table]) line.appendChild(self._closedMark(table));
            else line.appendChild(document.createTextNode(row && S.showVal(f, row[f]) !== null ? S.showVal(f, row[f]) : '(none)'));
            sec.appendChild(line);
          });
          if (s.covers) {
            var cur = self.sel['service_agreement[current]'];
            var items = cur ? (self.extra.agreement_item || []).filter(function (it) { return it.agreement_id === cur.agreement_id; })
                              .sort(function (a, b) { return S.cmp(a.agreement_item_id, b.agreement_item_id); }) : [];
            var cl = el('div', 'record-card__line');
            cl.appendChild(el('span', 'record-card__muted', 'Covers: '));
            if (self.closed.agreement_item) cl.appendChild(self._closedMark('agreement_item'));
            else {
              var names = items.map(function (it) { var t = self.lookups.service_target[it.service_target_id]; return t ? t.item_name : '(target ' + it.service_target_id + ')'; });
              cl.appendChild(document.createTextNode(items.length + ' item(s)' + (names.length ? ' - ' + names.join(', ') : '')));
            }
            sec.appendChild(cl);
          }
        }
        (s.paths || []).forEach(function (p) {
          var line = el('div', 'record-card__line');
          line.appendChild(el('span', 'record-card__muted', p + ': '));
          line.appendChild(self._pathValue(p));
          sec.appendChild(line);
        });
        (s.derived || []).forEach(function (d) {
          var line = el('div', 'record-card__line');
          line.appendChild(el('span', 'record-card__muted', humanize(d) + ': '));
          line.appendChild(self._derivedValue(d));
          sec.appendChild(line);
        });
        facts.appendChild(sec);
      });
      (Array.isArray(card.derived) ? card.derived : []).forEach(function (d) {
        var line = el('div', 'record-card__line');
        line.appendChild(el('span', 'record-card__muted', humanize(d.name) + ': '));
        line.appendChild(self._derivedValue(d.name));
        line.appendChild(el('div', 'record-card__rule', 'rule: ' + d.rule));
        facts.appendChild(line);
      });

      var drills = this._slot('drills'); drills.textContent = '';
      (Array.isArray(card.drills) ? card.drills : []).forEach(function (d) {
        var li = el('li');
        li.appendChild(el('strong', null, d.label || (d.path || (d.paths || []).join(', '))));
        var paths = d.paths || (d.path ? [d.path] : []);
        var parts = paths.map(function (p) {
          if (self.closed[p]) return p + ': closed to your role';
          var n = self.rows[p] ? self.rows[p].length : (self.extra[p] ? self.extra[p].length : null);
          return n === null ? p + ': (not read)' : n + ' ' + p.replace(/_/g, ' ');
        });
        if (d.then) {
          parts.push(self.closed.communication_log ? 'communications: closed to your role' : (self.extra.communication_log || []).length + ' communications');
        }
        li.appendChild(document.createTextNode(' - ' + parts.join(' - ')));
        drills.appendChild(li);
      });

      // the cascades
      CARD.cascades.forEach(function (c, ci) { self._renderCascade(ci); });

      // every closed path, said once at the foot
      var closedTables = Object.keys(this.closed);
      var closedEl = this._slot('closed');
      if (closedTables.length) {
        closedEl.textContent = 'Closed to your role (not readable as you are signed in): ' + closedTables.join(', ') + '.';
        closedEl.hidden = false;
      } else { closedEl.hidden = true; }
    }

    _renderCascade(ci) {
      var self = this;
      var c = CARD.cascades[ci];
      var lv0 = c.levels[0];
      var sec = this.container.querySelector('[data-role="cascade"][data-cascade="' + ci + '"]');
      if (!sec) return;
      var list = sec.querySelector('[data-role="list"]');
      var count = sec.querySelector('[data-role="count"]');
      var rows = this.rows[lv0.table] || [];
      list.textContent = '';
      count.textContent = this.closed[lv0.table] ? '' : '(' + rows.length + ')';
      if (this.closed[lv0.table]) {
        list.appendChild(el('li', 'record-card__muted')).appendChild(this._closedMark(lv0.table));
        return;
      }
      if (!rows.length) { list.appendChild(el('li', 'record-card__muted', CARD.emptyText)); }
      rows.forEach(function (row) {
        var li = el('li');
        var btn = el('button', 'record-card__row');
        btn.type = 'button';
        btn.setAttribute('data-role', 'row');
        btn.setAttribute('data-cascade', String(ci));
        btn.setAttribute('data-key', String(row[lv0.primaryKey]));
        btn.setAttribute('role', 'option');
        btn.setAttribute('aria-selected', 'false');
        btn.appendChild(el('span', 'record-card__rowtitle', row[lv0.labelField] == null ? '(untitled)' : row[lv0.labelField]));
        var meta = lv0.columns.map(function (col) { return col.field; }).filter(function (f) { return f !== lv0.labelField; })
          .map(function (f) { return S.showVal(f, row[f]); }).filter(function (v) { return v !== null && v !== ''; });
        // the WHERE as a fact on the WHAT (Q1.1): a target's primary location rides on its row
        if (lv0.entity === 'service_target' && row.primary_service_location_id) {
          var loc = self.lookups.service_location[row.primary_service_location_id];
          meta.push(loc ? 'at ' + [loc.street_address, loc.city].filter(Boolean).join(', ') : (self.closed.service_location ? 'location closed to your role' : 'at (location not on this account)'));
        }
        if (meta.length) btn.appendChild(el('span', 'record-card__rowmeta', meta.join(' - ')));
        li.appendChild(btn);
        list.appendChild(li);
      });
      // the first row arrives chosen, so the card below and the child level are never blank
      if (rows.length) this._pick(ci, String(rows[0][lv0.primaryKey]));
      else { sec.querySelector('[data-role="selected"]').textContent = ''; sec.querySelector('[data-role="child"]').textContent = ''; }
    }

    _onClick(evt) {
      var verb = evt.target.closest('[data-role="verb"]');
      if (verb && this.container.contains(verb)) { this._act(verb); return; }
      var btn = evt.target.closest('[data-role="row"]');
      if (!btn || !this.container.contains(btn)) return;
      this._pick(Number(btn.getAttribute('data-cascade')), btn.getAttribute('data-key'));
    }

    /** A live verb: the component placed on this feature that performs it is brought into view and told
     *  the focused record (the gate's own setRecordId already knows it through the bridge). */
    _act(btn) {
      var how = btn.getAttribute('data-how');
      if (!how) return;
      var host = document.querySelector('.mounted-component[data-component="' + how + '"]');
      var inst = (window.ShellComponents || {})[how];
      if (inst && typeof inst.setRecordId === 'function' && this.recordId) inst.setRecordId(this.recordId);
      if (host) {
        host.style.display = '';
        if (typeof host.scrollIntoView === 'function') host.scrollIntoView({ behavior: 'smooth', block: 'start' });
        var focusable = host.querySelector('select, input, textarea, button');
        if (focusable) focusable.focus();
      }
      try {
        this.container.dispatchEvent(new CustomEvent('blueprint:action', { bubbles: true, detail: { goal: btn.getAttribute('data-goal'), how: how, id: this.recordId, blueprintId: 'c3000000-0000-0000-0000-000000000001' } }));
      } catch (ignored) { /* no CustomEvent: the scroll and the focus are the act */ }
    }

    async _pick(ci, key) {
      var self = this;
      var c = CARD.cascades[ci], lv0 = c.levels[0], lv1 = c.levels[1] || null;
      var sec = this.container.querySelector('[data-role="cascade"][data-cascade="' + ci + '"]');
      this.picked[ci] = key;
      sec.querySelectorAll('[data-role="row"]').forEach(function (b) {
        b.setAttribute('aria-selected', b.getAttribute('data-key') === key ? 'true' : 'false');
      });
      var row = (this.rows[lv0.table] || []).filter(function (r) { return String(r[lv0.primaryKey]) === String(key); })[0] || null;
      var selEl = sec.querySelector('[data-role="selected"]');
      var childEl = sec.querySelector('[data-role="child"]');
      selEl.textContent = ''; childEl.textContent = '';
      if (!row) return;

      // the selected row's OWN card: the same shape at every level (concept 27 i)
      var card = (CARD.cards && CARD.cards[lv0.entity]) || {};
      var title = el('div', 'record-card__sectiontitle', 'Selected: ' + (row[lv0.labelField] == null ? key : row[lv0.labelField]));
      selEl.appendChild(title);
      var dl = el('dl', 'record-card__kv');
      this._visible(Array.isArray(card.projection) ? card.projection : []).forEach(function (f) {
        dl.appendChild(el('dt', null, humanize(f)));
        var v = S.showVal(f, row[f]);
        dl.appendChild(el('dd', v === null ? 'record-card__muted' : null, v === null ? '(none)' : v));
      });
      selEl.appendChild(dl);
      (Array.isArray(card.facts) ? card.facts : []).forEach(function (s) {
        // a fact by a foreign key on this row: `primary_service_location` -> service_location, `geographic_area` -> geographic_area
        var hopTable = self.lookups[s.path] ? s.path : s.path.replace(/^primary_/, '');
        var fk = s.path + '_id';
        var target = self.lookups[hopTable] ? self.lookups[hopTable][row[fk]] : null;
        var line = el('div', 'record-card__line');
        line.appendChild(el('span', 'record-card__muted', (s.section || humanize(s.path)) + ': '));
        if (self.closed[hopTable]) line.appendChild(self._closedMark(hopTable));
        else line.appendChild(document.createTextNode(target ? (s.fields || []).map(function (f) { return S.showVal(f, target[f]); }).filter(function (v) { return v !== null; }).join(', ') : '(none)'));
        selEl.appendChild(line);
      });
      for (var di = 0; di < (Array.isArray(card.drills) ? card.drills : []).length; di++) {
        var d = card.drills[di];
        var line = el('div', 'record-card__line');
        line.appendChild(el('strong', null, d.label || d.path || 'Open'));
        if (d.path) {
          // a drill's count is read on demand, by this row's key
          var keyCol = lv0.primaryKey;
          var got = await this._read(d.path, function (q) { return q.select(PK[d.path] || '*').eq(keyCol, row[keyCol]); });
          line.appendChild(document.createTextNode(' - '));
          if (this.closed[d.path]) line.appendChild(this._closedMark(d.path));
          else line.appendChild(document.createTextNode(got.length + ' ' + d.path.replace(/_/g, ' ')));
        } else if (d.own_page) {
          line.appendChild(el('span', 'record-card__muted', ' - opens its own page' + (d.rides && d.rides.length ? ' (with ' + d.rides.join(', ').replace(/_/g, ' ') + ')' : '')));
        }
        selEl.appendChild(line);
      }

      // the child level: the rows that point at the selected row, in the declared order
      if (lv1) {
        var kids = (this.rows[lv1.table] || []).filter(function (r) { return String(r[lv1.foreignKey]) === String(key); });
        (lv1.order || []).slice().reverse().forEach(function (o) {
          kids.sort(function (a, b) { var r = S.cmp(a[o.path], b[o.path]); return o.direction === 'desc' ? -r : r; });
        });
        childEl.appendChild(el('div', 'record-card__sectiontitle', lv1.label + ' (' + kids.length + ')'));
        if (this.closed[lv1.table]) { childEl.appendChild(this._closedMark(lv1.table)); return; }
        if (!kids.length) { childEl.appendChild(el('p', 'record-card__muted', CARD.emptyText)); return; }
        var table = el('table', 'record-card__table');
        var thead = el('thead'); var hr = el('tr');
        lv1.columns.forEach(function (col) { hr.appendChild(el('th', null, col.label)); });
        hr.appendChild(el('th', null, humanize(lv1.labelField)));
        thead.appendChild(hr); table.appendChild(thead);
        var tbody = el('tbody');
        kids.forEach(function (k) {
          var tr = el('tr');
          lv1.columns.forEach(function (col) { var v = S.showVal(col.field, k[col.field]); tr.appendChild(el('td', v === null ? 'record-card__muted' : null, v === null ? '' : v)); });
          var lv = S.showVal(lv1.labelField, k[lv1.labelField]); tr.appendChild(el('td', null, lv === null ? '' : lv));
          tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        childEl.appendChild(table);
      }
    }

    // -- state ---------------------------------------------------------------------------------
    _state(s) {
      var root = this.container.querySelector('.record-card');
      if (!root) return;
      root.classList.toggle('is-loading', s === 'loading');
      this._slot('waiting').hidden = s !== 'waiting';
      this._slot('empty').hidden = s !== 'empty';
      if (s !== 'error') this._slot('error').hidden = true;
      if (s === 'waiting' || s === 'empty') { this._slot('closed').hidden = true; }
    }

    _error(message) {
      var e = this._slot('error');
      if (!e) return;
      e.textContent = message;
      e.hidden = false;
      // A DATA FAILURE MUST NEVER BE SILENT (s31): the shell re-shows the sign-in gate on a dead session.
      try {
        this.container.dispatchEvent(new CustomEvent('blueprint:error', { bubbles: true, detail: { code: 'DATA_LOAD_FAILED', blueprintId: 'c3000000-0000-0000-0000-000000000001', message: message } }));
      } catch (ignored) { /* no CustomEvent: the text on the page still says it */ }
    }
  }

  if (typeof window !== 'undefined') {
    window.AccountBlueprintUI = AccountBlueprintUI;
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
    window.PatternRegistry['c3000000-0000-0000-0000-000000000001'] = window.AccountBlueprintUI;
  }
