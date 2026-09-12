/**
 * Route - Generated Blueprint UI
 * Blueprint ID: cc000000-0000-0000-0000-000000000001
 * Pattern: LIST-VIEW-SIMPLE
 * Entity: route
 * 
 * Implements Pattern Interface Contract (JBA-003)
 * - mount(container): Render into container
 * - unmount(): Cleanup everything
 * - onContext(context): Receive tenant/user/role
 * - getMetadata(): Return component info
 */

// Wrap in IIFE to prevent class redeclaration errors when loading multiple blueprints
(function() {
  'use strict';
  
  /**
   * Blueprint UI Class - Contract Compliant
   * Can be mounted into ANY application shell
   */
  class RouteBlueprintUI {
  
  // ═══════════════════════════════════════════════════════════════════════
  // CONSTRUCTOR
  // ═══════════════════════════════════════════════════════════════════════
  
  constructor() {
    // State
    this.container = null;
    this.context = null;
    this.data = [];
    this.currentPage = 1;
    this.totalCount = 0;
    this.isLoading = false;
    this.supabaseClient = null;

    // s39 Q6/Q7: the user's search text and the filter panel's conditions. Both narrow WITHIN
    // the persona's filters, never past them (HITL ruling 2026-08-08).
    this.userSearch = '';
    this.userConditions = [];

    // Bound event handlers (for cleanup)
    this._boundHandlers = new Map();
    
    // Abort controller for fetch cancellation
    this._abortController = null;
    
    // Metadata (from Blueprint definition)
    this.metadata = {
      blueprint_id: 'cc000000-0000-0000-0000-000000000001',
      title: 'Route',
      pattern_type: 'LIST-VIEW-SIMPLE',
      entity: 'route',
      icon: 'list',
      route: '/route',
      permissions_required: ['route:read'],
      sopf_node: 'unknown',
      role_context_id: '',
      description: 'View and search route records'
    };
    
    // Configuration
    this.config = {
      entity: 'route',
      fields: [
  {
    "name": "route_date",
    "label": "Route Date",
    "type": "date",
    "width": "140px",
    "align": "left",
    "sortable": true,
    "filterable": true,
    "tag": false,
    "tagColors": null,
    "tagDefaultColor": null
  },
  {
    "name": "weekday",
    "label": "Weekday",
    "type": "text",
    "width": "auto",
    "align": "left",
    "sortable": true,
    "filterable": true,
    "tag": false,
    "tagColors": null,
    "tagDefaultColor": null
  },
  {
    "name": "technician",
    "label": "Technician",
    "type": "text",
    "width": "auto",
    "align": "left",
    "sortable": true,
    "filterable": true,
    "tag": false,
    "tagColors": null,
    "tagDefaultColor": null
  },
  {
    "name": "template",
    "label": "Template",
    "type": "text",
    "width": "auto",
    "align": "left",
    "sortable": true,
    "filterable": true,
    "tag": false,
    "tagColors": null,
    "tagDefaultColor": null
  },
  {
    "name": "state",
    "label": "State",
    "type": "text",
    "width": "auto",
    "align": "left",
    "sortable": true,
    "filterable": true,
    "tag": false,
    "tagColors": null,
    "tagDefaultColor": null
  },
  {
    "name": "room",
    "label": "Room",
    "type": "text",
    "width": "auto",
    "align": "left",
    "sortable": true,
    "filterable": true,
    "tag": false,
    "tagColors": null,
    "tagDefaultColor": null
  },
  {
    "name": "placed",
    "label": "Placed",
    "type": "text",
    "width": "auto",
    "align": "left",
    "sortable": true,
    "filterable": true,
    "tag": false,
    "tagColors": null,
    "tagDefaultColor": null
  },
  {
    "name": "slack",
    "label": "Slack",
    "type": "text",
    "width": "auto",
    "align": "left",
    "sortable": true,
    "filterable": true,
    "tag": false,
    "tagColors": null,
    "tagDefaultColor": null
  },
  {
    "name": "released",
    "label": "Released",
    "type": "text",
    "width": "auto",
    "align": "left",
    "sortable": true,
    "filterable": true,
    "tag": false,
    "tagColors": null,
    "tagDefaultColor": null
  }
],
      pagination: {
  "enabled": true,
  "pageSize": 50
},
      database: {
  "schema": "services_template",
  "isInternalSchema": false,
  "requiresTenantFiltering": true,
  "primaryKey": "route_id"
},
      // s39 Q6: the search box's declared fields -- OR across them, ANDed with everything else.
      search: {
  "fields": [
    "technician",
    "template",
    "state"
  ],
  "placeholder": "Search the days..."
},
      // Every persona's gate for this entity. visibleFields() picks one by context.facet.
      personas: {
  "FIELD_TECH": {
    "fields": null,
    "readonly": [],
    "filters": {
      "status": [
        "active"
      ]
    },
    "actions": [
      "view",
      "search"
    ],
    "seated": false
  },
  "GENERIC_USER": {
    "fields": null,
    "readonly": [],
    "filters": null,
    "actions": [
      "view",
      "search",
      "sort",
      "filter"
    ],
    "seated": false
  },
  "OPS_MANAGER": {
    "fields": [
      "route_name",
      "status",
      "route_date",
      "weekday",
      "technician",
      "template",
      "state",
      "room",
      "placed",
      "slack",
      "minutes",
      "released"
    ],
    "readonly": [],
    "filters": null,
    "actions": [
      "view",
      "search",
      "sort",
      "filter",
      "edit",
      "create",
      "cancel",
      "defer",
      "place",
      "place_week",
      "sequence",
      "release"
    ],
    "seated": true
  },
  "ADMIN_FULL": {
    "fields": null,
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
      "create",
      "cancel",
      "defer",
      "place",
      "place_week",
      "sequence",
      "release"
    ],
    "seated": true
  },
  "CUSTOMER_SERVICE": {
    "fields": [
      "route_name",
      "status",
      "route_date",
      "weekday",
      "technician",
      "template",
      "state",
      "room",
      "placed",
      "slack",
      "minutes",
      "released"
    ],
    "readonly": [],
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
      "schedule",
      "cancel",
      "defer",
      "place"
    ],
    "seated": true
  },
  "SERVICE_MANAGER": {
    "fields": [
      "route_name",
      "status",
      "route_date",
      "weekday",
      "technician",
      "template",
      "state",
      "room",
      "placed",
      "slack",
      "minutes",
      "released"
    ],
    "readonly": [],
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
      "create",
      "cancel",
      "defer",
      "place",
      "place_week",
      "sequence",
      "release"
    ],
    "seated": true
  }
}
    };
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // REQUIRED: mount(container)
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Mount the component into a container element.
   * @param {HTMLElement} container - The DOM element to render into
   * @throws {Error} If container is null or component already mounted
   */
  mount(container) {
    // Validate container
    if (!container) {
      throw new Error('Container element is required for mounting');
    }
    
    // Prevent double-mounting
    if (this.container) {
      throw new Error('Component is already mounted. Call unmount() first.');
    }
    
    // Store reference
    this.container = container;
    
    // Add scoped CSS class
    this.container.classList.add('blueprint-route-list');
    
    // Initial render (loading state)
    this.render();
    
    // Load data if context already received (handles init-before-mount case)
    if (this.context && this.supabaseClient) {
      this.loadData();
    }

    // THE VOID CLOSED (s39 Q7, measured 2026-08-23): the filter panel emitted filter:filter-changed
    // since it was built and NO list ever listened. The conditions arrive ANDed and are applied
    // UNDER the persona's filters in fetchFromSupabase -- narrowing only, never widening.
    // A LIST OFF THE ROUTE DOES NOT HEAR THE PANEL (SJ s51 leg 3b, 2026-09-07): the panel's event is
    // document-wide, and the coat's chair caught the hidden Pending Work Orders list answering the
    // Accounts panel's "service frequency" with a column it does not have -- an HTTP 400 nobody saw.
    // The shell hides every component off the current route; a hidden list lets the event pass.
    this._offRoute = () => {
      const host = this.container && this.container.closest ? this.container.closest('.mounted-component') : null;
      return !!(host && host.style && host.style.display === 'none');
    };
    this._onFilterChanged = (e) => {
      if (this._offRoute()) return;
      this.userConditions = (e.detail && e.detail.conditions) || [];
      this.currentPage = 1;
      if (this.context && this.supabaseClient) this.loadData(true);
    };
    this._onFilterCleared = () => {
      if (this._offRoute()) return;
      this.userConditions = [];
      this.currentPage = 1;
      if (this.context && this.supabaseClient) this.loadData(true);
    };
    document.addEventListener('filter:filter-changed', this._onFilterChanged);
    document.addEventListener('filter:filter-cleared', this._onFilterCleared);

    // Emit ready event
    this.emit('blueprint:ready', {});
    
    console.log('[RouteBlueprintUI] Mounted successfully');
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // REQUIRED: unmount()
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Unmount the component and clean up all resources.
   */
  unmount() {
    if (!this.container) {
      console.warn('[RouteBlueprintUI] Component not mounted, nothing to unmount');
      return;
    }
    if (this._onFilterChanged) document.removeEventListener('filter:filter-changed', this._onFilterChanged);
    if (this._onFilterCleared) document.removeEventListener('filter:filter-cleared', this._onFilterCleared);
    
    // Remove all event listeners
    this._boundHandlers.forEach((handler, element) => {
      element.removeEventListener('click', handler);
    });
    this._boundHandlers.clear();
    
    // Cancel any pending fetch requests
    if (this._abortController) {
      this._abortController.abort();
      this._abortController = null;
    }
    
    // Clear container content
    this.container.innerHTML = '';
    this.container.classList.remove('blueprint-route-list');
    
    // Reset state
    this.container = null;
    this.data = [];
    this.isLoading = false;
    this.currentPage = 1;
    this.totalCount = 0;
    // ⚠ THE CLIENT SURVIVES UNMOUNT. It was nulled here, and mount() only re-fetches when BOTH
    // context and client are present -- so a remounted list came back with data:[] and a client it
    // could not rebuild, and rendered "No account found" over a full table. onContext() is called
    // once by the registry at init and never again, so nothing restored it.
    //
    // Unreachable until 2026-08-08: this app had exactly ONE route, so no component was ever
    // unmounted and remounted. Adding the Create Account form made a second route, and navigating
    // back from it emptied the list. Found by writing a row and going to look for it.
    //
    // A Supabase client is not a DOM resource. It holds no listeners here and is not bound to the
    // container; the things that DO need releasing -- handlers, the abort controller, the markup --
    // are released above. Keeping it is also what makes the list refresh after a write.

    console.log('[RouteBlueprintUI] Unmounted and cleaned up');
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // REQUIRED: onContext(context)
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Receive application context from the shell.
   * @param {Object} context - Application context
   */
  onContext(context) {
    // Validate required context properties
    if (!context.tenant_id) {
      throw new Error('Context missing required property: tenant_id');
    }
    if (!context.user_id) {
      throw new Error('Context missing required property: user_id');
    }
    if (!context.role) {
      throw new Error('Context missing required property: role');
    }

    // Store context
    const previousContext = this.context;
    // A SNAPSHOT, not the caller's object. previousContext above is only useful as a comparison if
    // it cannot be changed underneath us -- a caller that mutates the context it already handed
    // over and calls again would leave both sides pointing at the same object, every comparison
    // false, and every re-render skipped. Silent, and it happened on the first real drive of the
    // persona switcher.
    this.context = Object.assign({}, context);

    // Apply defaults for optional properties
    this.locale = context.locale || 'en-US';
    this.timezone = context.timezone || 'UTC';

    // Apply theme if provided
    if (context.theme && this.container) {
      this.applyTheme(context.theme);
    }

    // Initialize Supabase client if config provided
    if (context.supabase && !this.supabaseClient) {
      this.initSupabase(context.supabase);
    }

    // If context changed significantly, reload data
    if (previousContext && (
      previousContext.tenant_id !== context.tenant_id ||
      previousContext.role !== context.role
    )) {
      console.log('[RouteBlueprintUI] Context changed, reloading data');
      this.loadData();
    } else if (previousContext && previousContext.facet !== context.facet
               && this.filtersDifferBetween(previousContext.facet, context.facet)) {
      // A PERSONA CHANGE THAT CHANGES THE FILTERS *IS* A DATA CHANGE. Which ROWS qualify has
      // changed, so this one has to go back to the engine -- unlike a change that only alters
      // which FIELDS are painted, immediately below.
      //
      // The two effects of a persona are genuinely different and this is where they part:
      //   field_visibility  -> which COLUMNS are painted   -> repaint, no round trip
      //   default_filters   -> which ROWS qualify          -> refetch
      // Treating them the same would either put a needless round trip behind every switch, or
      // leave the wrong rows on screen under the right columns -- which reads as correct and is not.
      console.log('[RouteBlueprintUI] Persona filters changed, reloading:', context.facet || '(none)');
      this.currentPage = 1;
      this.loadData();
    } else if (previousContext && previousContext.facet !== context.facet) {
      // A PERSONA CHANGE IS NOT A DATA CHANGE. The rows are identical -- the same tenant, the same
      // filter, the same query. What differs is which FIELDS get painted, so this re-renders and
      // does NOT go back to the engine. Refetching here would put a round trip behind every flick
      // of the switcher and would imply the persona narrows the ROWS, which it does not.
      //
      // (It also does not make the withheld data secret: the row already arrived whole. Withholding
      // is RLS and column grants, server-side.)
      console.log('[RouteBlueprintUI] Persona changed, re-rendering:', context.facet || '(none)');
      this.render();
    } else if (!previousContext && this.container) {
      // First context received after mount - load data
      this.loadData();
    }

    console.log('[RouteBlueprintUI] Context received:', {
      tenant_id: context.tenant_id,
      role: context.role
    });
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // REQUIRED: getMetadata()
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Return component metadata for shell integration.
   * @returns {Object} Blueprint metadata
   */
  getMetadata() {
    return { ...this.metadata };
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // EVENT EMISSION HELPER
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Emit a custom event from the container.
   * @param {string} eventName - Event type (e.g., 'blueprint:navigate')
   * @param {Object} detail - Event payload
   */
  emit(eventName, detail) {
    if (!this.container) {
      console.warn(`[RouteBlueprintUI] Cannot emit ${eventName}: not mounted`);
      return;
    }
    
    this.container.dispatchEvent(new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    }));
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // THEME APPLICATION
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Apply theme configuration to container.
   * @param {Object} theme - Theme context
   */
  applyTheme(theme) {
    if (!this.container) return;
    
    // Apply CSS variables from theme
    if (theme.cssVariables) {
      Object.entries(theme.cssVariables).forEach(([key, value]) => {
        this.container.style.setProperty(key, value);
      });
    }
    
    // Apply mode class
    this.container.classList.remove('theme-light', 'theme-dark');
    if (theme.mode === 'dark') {
      this.container.classList.add('theme-dark');
    } else {
      this.container.classList.add('theme-light');
    }
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // SUPABASE INITIALIZATION
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Initialize Supabase client from context config.
   * @param {Object} supabaseConfig - Supabase configuration
   */
  initSupabase(supabaseConfig) {
    if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
      console.warn('[RouteBlueprintUI] Supabase client library not loaded');
      return;
    }

    // THE SHELL'S CLIENT WINS (s31 resume, 2026-08-20). When the shell publishes
    // window.ShellData -- one client for the page, its auth token read fresh per
    // request on gated apps -- every component on the shell's schema shares it. The
    // fallback below builds a per-component client whose session JWT is FROZEN at
    // mount; it stays only for shells that publish no ShellData.
    const shellSchema = (window.AppContext && window.AppContext.supabase &&
                         window.AppContext.supabase.schema) || 'public';
    if (window.ShellData && (this.config.database.schema || 'public') === shellSchema) {
      this.supabaseClient = window.ShellData;
      console.log('[RouteBlueprintUI] using the shell data client');
      return;
    }

    try {
      this.supabaseClient = window.supabase.createClient(
        supabaseConfig.url,
        supabaseConfig.anonKey,
        { db: { schema: this.config.database.schema || 'public' },
          // THE SIGNED-IN TEAM'S TOKEN (s31, 2026-08-19). When the shell's sign-in gate
          // has run, AppContext.authHeaders carries the session JWT; every component
          // client attaches it so grants made to `authenticated` actually reach the
          // queries. Empty when the app declares no auth -- anon behavior unchanged.
          global: { headers: (window.AppContext && window.AppContext.authHeaders) || {} } }
      );
      console.log('[RouteBlueprintUI] Supabase client initialized');
    } catch (error) {
      console.error('[RouteBlueprintUI] Failed to initialize Supabase:', error);
    }
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // DATA LOADING
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Load data from API using context configuration.
   */
  async loadData(quiet) {
    // `quiet` (s39): a search keystroke or a filter change reloads WITHOUT the intermediate
    // loading render -- one repaint per change, and the search box does not lose its focus twice.
    if (!this.context) {
      console.warn('[RouteBlueprintUI] Cannot load data: no context');
      return;
    }


    this.isLoading = true;
    this.loadError = null;
    if (!quiet) this.render();

    // Create abort controller for cancellation
    this._abortController = new AbortController();
    
    try {
      let result;
      
      // Try Supabase first if client is available
      if (this.supabaseClient) {
        result = await this.fetchFromSupabase();
      } else if (this.context.apiBaseUrl) {
        result = await this.fetchFromAPI();
      } else {
        // Fall back to mock data
        result = this.generateMockData();
      }
      
      this.data = result.data || [];
      this.totalCount = result.count || this.data.length;
      this.isLoading = false;
      
      if (this.data.length === 0) {
        this.render();
      } else {
        this.render();
      }
      
      this.emit('blueprint:loaded', { 
        count: this.data.length,
        total: this.totalCount,
        page: this.currentPage
      });
      
    } catch (error) {
      // Ignore abort errors
      if (error.name === 'AbortError') {
        console.log('[RouteBlueprintUI] Fetch aborted');
        return;
      }
      
      this.isLoading = false;
      // A failed read must LOOK failed (s31 resume, 2026-08-20): this list rendered
      // its empty state over a 403 and a signed-in user saw "no accounts" instead of
      // an error. The message renders; the event below lets the shell add its part
      // (re-showing the sign-in gate when the session is gone).
      this.loadError = error.message || String(error);
      this.render();

      // Emit error event for shell to handle
      this.emit('blueprint:error', {
        code: 'DATA_LOAD_FAILED',
        message: `Failed to load route: ${error.message}`,
        details: { endpoint: '/v_schedule_days' }
      });
    }
  }
  
  /**
   * Fetch data from Supabase.
   */
  async fetchFromSupabase() {
    const pageSize = this.config.pagination?.pageSize || 25;
    const offset = (this.currentPage - 1) * pageSize;

    // The TABLE, not the entity. A blueprint may name a table that differs from its entity
    // (Blueprint List is entity `blueprint`, table `jtbd_blueprints`) and every such screen 404d.
    // fetchTarget falls back to entity_name in the generator, so a blueprint that declares no
    // override emits exactly what it emitted before.
    let query = this.supabaseClient
      .from('v_schedule_days')
      .select('*', { count: 'exact' });

    // Apply tenant filtering for multi-tenant tables
    query = query.eq('tenant_id', this.context.tenant_id);

    // THE PERSONA'S DEFAULT FILTERS. Declared on every facet since the estate was authored and
    // read by NOTHING until 2026-08-08 -- SERVICE_MANAGER asked for {status:['active']} the whole
    // time and every screen it drove showed suspended accounts anyway.
    //
    // A filter naming a column this relation does not have is SKIPPED, not fatal: default_filters
    // is a fact about the ROLE ("I work on active accounts"), stated once and applied wherever it
    // makes sense. A persona should not break a list of something with no status column.
    const filters = this.activeFilters();
    for (const [column, allowed] of Object.entries(filters)) {
      if (!this.hasColumn(column)) {
        console.warn(`[RouteBlueprintUI] persona filter on '${column}' skipped -- not a column of v_schedule_days`);
        continue;
      }
      query = Array.isArray(allowed) ? query.in(column, allowed) : query.eq(column, allowed);
    }

    // THE USER'S FILTERS (s39 Q7): the panel's conditions, ANDed, applied UNDER the persona's
    // filters above -- a user filter narrows within the role's scope and can never widen past it
    // (HITL ruling 2026-08-08). Operators: equals / in / contains (substring) / cs (array member,
    // the geographic-areas column).
    for (const c of this.userConditions || []) {
      if (!c || !c.field || c.value === '' || c.value === null || c.value === undefined) continue;
      if (c.operator === 'cs') query = query.contains(c.field, [c.value]);
      else if (c.operator === 'in') query = query.in(c.field, Array.isArray(c.value) ? c.value : [c.value]);
      else if (c.operator === 'contains' || c.operator === 'ilike' || c.operator === 'like') query = query.ilike(c.field, '%' + String(c.value).replace(/[%,()*]/g, ' ').trim() + '%');
      else query = query.eq(c.field, c.value);
    }

    // THE SEARCH (s39 Q6): the declared fields, OR across them, ANDed with everything above.
    // Commas, parens and wildcards in the typed text are neutralized -- PostgREST's .or()
    // grammar would read them as syntax, and a search box must never be a query editor.
    if (this.userSearch) {
      const q = String(this.userSearch).replace(/[%,()*]/g, ' ').trim();
      if (q) query = query.or(this.config.search.fields.map((f) => f + '.ilike.%' + q + '%').join(','));
    }

    const { data, error, count } = await query
      .range(offset, offset + pageSize - 1);

    if (error) throw error;

    return { data, count };
  }
  
  /**
   * Fetch data from REST API.
   */
  async fetchFromAPI() {
    const { apiBaseUrl, authToken, tenant_id } = this.context;

    // Build headers
    const headers = {
      'Content-Type': 'application/json',
      'X-Tenant-ID': tenant_id
    };

    // Handle auth token (string or async getter)
    if (typeof authToken === 'function') {
      headers['Authorization'] = `Bearer ${await authToken()}`;
    } else if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }

    const pageSize = this.config.pagination?.pageSize || 25;
    const offset = (this.currentPage - 1) * pageSize;

    const parentScope = '';

    // Fetch data
    // The TABLE here too. Fixing only the Supabase path would leave the identical defect one
    // branch along -- the REST path resolves the same PostgREST route by table name.
    const response = await fetch(`${apiBaseUrl}/v_schedule_days?limit=${pageSize}&offset=${offset}${parentScope}`, {
      headers,
      signal: this._abortController.signal
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    return {
      data: result.data || result,
      count: result.count || result.length
    };
  }
  
  /**
   * Generate mock data for testing.
   */
  generateMockData() {
    const data = [];
    for (let i = 1; i <= 50; i++) {
      const record = { id: i };
      record.route_date = `Route Date ${i}`;
      
      record.weekday = `Weekday ${i}`;
      
      record.technician = `Technician ${i}`;
      
      record.template = `Template ${i}`;
      
      record.state = `State ${i}`;
      
      record.room = `Room ${i}`;
      
      record.placed = `Placed ${i}`;
      
      record.slack = `Slack ${i}`;
      
      record.released = `Released ${i}`;
      
      data.push(record);
    }
    
    const pageSize = this.config.pagination?.pageSize || 25;
    const start = (this.currentPage - 1) * pageSize;
    const end = start + pageSize;
    
    return {
      data: data.slice(start, end),
      count: data.length
    };
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // RENDERING
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Render the component into its container.
   */
  render() {
    if (!this.container) return;
    
    // Clear existing content
    this.container.innerHTML = '';
    
    // Build HTML structure
    const html = this.buildHTML();
    this.container.innerHTML = html;
    
    // Attach event listeners
    this.attachEventListeners();
  }
  
  /**
   * Build the HTML structure.
   */
  buildHTML() {
    // The toolbar (the search box) stays on the page in the empty and loading states too --
    // a search that empties the list must still offer its own undoing (s39 Q6).
    if (!this.context) {
      return this.buildNoContextHTML();
    } else if (this.isLoading) {
      return this.buildToolbarHTML() + this.buildLoadingHTML();
    } else if (this.loadError) {
      return this.buildErrorHTML();
    } else if (this.data.length === 0) {
      return this.buildToolbarHTML() + this.buildEmptyHTML();
    } else {
      return this.buildToolbarHTML() + this.buildTableHTML();
    }
  }

  /**
   * The list's toolbar: today the search box alone (s39 Q6). Renders nothing when the
   * blueprint declares no search -- another entity's list is exactly what it was.
   */
  buildToolbarHTML() {
    const s = this.config.search;
    if (!s || !Array.isArray(s.fields) || s.fields.length === 0) return '';
    return `
      <div class="blueprint-toolbar">
        <input type="search" class="blueprint-search-input"
               placeholder="${this.escapeHtml(s.placeholder || 'Search...')}"
               value="${this.escapeHtml(this.userSearch)}"
               aria-label="${this.escapeHtml(s.placeholder || 'Search')}">
      </div>
    `;
  }

  buildErrorHTML() {
    return `
      <div class="blueprint-message blueprint-error">
        <p>Could not load Route: ${this.escapeHtml(String(this.loadError))}</p>
        <p>If you were signed in, your session may have ended -- sign in again.</p>
      </div>
    `;
  }
  
  buildNoContextHTML() {
    return `
      <div class="blueprint-message blueprint-warning">
        <p>Waiting for application context...</p>
      </div>
    `;
  }
  
  buildLoadingHTML() {
    return `
      <div class="blueprint-loading">
        <div class="blueprint-spinner"></div>
        <p>Loading Route...</p>
      </div>
    `;
  }
  
  buildEmptyHTML() {
    return `
      <div class="blueprint-message blueprint-info">
        <p>No route found.</p>
      </div>
    `;
  }
  
  /**
   * The fields THIS RENDER shows: the blueprint's curation intersected with the persona's gate.
   *
   *   BLUEPRINT  what this SCREEN shows -- curated and ordered, baked in at generation
   *   PERSONA    what this ROLE may see -- chosen at RUNTIME from context.facet
   *
   * The persona is deliberately not baked in. It used to be: one blueprint per persona, which is
   * why `account` carried fourteen blueprints for four jobs. Reading it from context means one
   * screen serves every role, and a persona switcher is a dropdown rather than a rebuild.
   *
   * No context.facet, or a facet this component has no gate for, means NO NARROWING -- the
   * blueprint's own curation stands. That is the safe default for an app with no sign-in yet.
   *
   * !! THIS IS NOT ACCESS CONTROL. The row arrives in the browser whole; this only decides what is
   * painted. A field a role must never READ has to be withheld server-side, by RLS and column
   * grants. This governs layout, not secrets.
   */
  visibleFields() {
    const all = this.config.fields || [];
    const personas = this.config.personas;
    const code = this.context && this.context.facet;
    if (!personas || !code) return all;

    const gate = personas[code];
    if (!gate || !Array.isArray(gate.fields)) return all;

    const allowed = new Set(gate.fields);
    const visible = all.filter(f => allowed.has(f.name));

    // An empty intersection is REPORTED, never silently widened back to everything. Falling back
    // to `all` would invert the gate -- the role that may see least would see most. Rendering
    // nothing is wrong in a way somebody notices; rendering everything is wrong in a way nobody does.
    if (visible.length === 0) {
      console.warn(`[RouteBlueprintUI] persona '${code}' permits none of this screen's fields`);
    }
    return visible;
  }

  /**
   * Whether two personas would fetch different ROWS. Compared by value, not identity: two personas
   * can declare the same filters, and switching between them should repaint without a round trip.
   */
  filtersDifferBetween(facetA, facetB) {
    const of = (code) => {
      const gate = code && this.config.personas ? this.config.personas[code] : null;
      return JSON.stringify((gate && gate.filters) || {});
    };
    return of(facetA) !== of(facetB);
  }

  /**
   * The filters this persona brings to every fetch. {} when no persona is set, or when the
   * persona declares none -- an unfiltered list is the honest default.
   */
  activeFilters() {
    const code = this.context && this.context.facet;
    const gate = code && this.config.personas ? this.config.personas[code] : null;
    return (gate && gate.filters) ? gate.filters : {};
  }

  /**
   * Whether the relation behind this screen actually has a column. Answered from the blueprint's
   * OWN field set rather than by asking the engine: the blueprint is the description of what this
   * screen reads, and a round trip to check a column name before every query would be absurd.
   *
   * Consequence worth naming: a persona filtering a real column the blueprint does not DISPLAY is
   * skipped too. That is arguably wrong -- you can filter on what you cannot see -- but the
   * alternative is issuing a query that PostgREST rejects, and a screen that shows nothing is
   * worse than one that shows too much. Revisit when a filter needs a column off-screen.
   */
  hasColumn(name) {
    return (this.config.fields || []).some(f => f.name === name);
  }

  /**
   * Whether this persona may EDIT a field. Visibility and writability are different questions and
   * the old model only answered the first -- comparing the per-persona duplicates before they were
   * collapsed showed one marking a field required and another marking the same field readonly.
   * `required` is a domain fact and lives on the blueprint; `readonly` is a role fact and lives here.
   */
  isReadonly(fieldName) {
    const code = this.context && this.context.facet;
    const gate = code && this.config.personas ? this.config.personas[code] : null;
    return !!(gate && Array.isArray(gate.readonly) && gate.readonly.includes(fieldName));
  }

  buildTableHTML() {
    const fields = this.visibleFields();
    const headerCells = fields.map(field => {
      const widthStyle = field.width ? `style="width: ${field.width};"` : '';
      return `
        <th class="blueprint-table-header" 
            data-field="${field.name}"
            data-align="${field.align || 'left'}"
            ${widthStyle}
            scope="col">
          ${this.escapeHtml(field.label)}
        </th>
      `;
    }).join('');
    
    const rows = this.data.map((record, index) => {
      const cells = fields.map(field => {
        const value = record[field.name] !== undefined && record[field.name] !== null 
          ? record[field.name] 
          : '';
        const align = field.align || 'left';
        
        // Special handling for status field (enum badges)
        if (field.type === 'enum' && field.name === 'status') {
          const statusClass = String(value).toLowerCase().replace(/\s+/g, '-');
          return `<td data-align="${align}">
            <span class="blueprint-status-badge ${statusClass}">${this.escapeHtml(String(value))}</span>
          </td>`;
        }
        
        // THE COAT (SJ s41 3b'): a timestamp is a DATE to a human; the raw ISO form is
        // the machine's word, not the row's face.
        if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
          return `<td data-align="${align}">${this.escapeHtml(value.slice(0, 10))}</td>`;
        }
        return `<td data-align="${align}">${this.escapeHtml(String(value))}</td>`;
      }).join('');
      
      const pk = (this.config.database && this.config.database.primaryKey) || 'id';
      return `<tr data-index="${index}" data-id="${record[pk] != null ? record[pk] : index}">${cells}</tr>`;
    }).join('');
    
    const paginationHTML = this.config.pagination?.enabled ? this.buildPaginationHTML() : '';
    
    return `
      <div class="blueprint-list-view">
        <div class="blueprint-table-container">
          <table class="blueprint-data-table" aria-label="Route data table">
            <thead>
              <tr>${headerCells}</tr>
            </thead>
            <tbody class="blueprint-table-body">
              ${rows}
            </tbody>
          </table>
        </div>
        ${paginationHTML}
      </div>
    `;
  }
  
  buildPaginationHTML() {
    const pageSize = this.config.pagination.pageSize;
    const start = ((this.currentPage - 1) * pageSize) + 1;
    const end = Math.min(this.currentPage * pageSize, this.totalCount);
    const maxPage = Math.ceil(this.totalCount / pageSize);
    
    return `
      <div class="blueprint-pagination-container" role="navigation" aria-label="Pagination">
        <button class="blueprint-btn blueprint-btn-prev" 
                data-action="prev" 
                type="button" 
                ${this.currentPage <= 1 ? 'disabled' : ''}
                aria-label="Previous page">Previous</button>
        <span class="blueprint-page-info" aria-live="polite">
          <span class="blueprint-current-range">${start}-${end}</span> of 
          <span class="blueprint-total-count">${this.totalCount}</span>
        </span>
        <button class="blueprint-btn blueprint-btn-next" 
                data-action="next" 
                type="button" 
                ${this.currentPage >= maxPage ? 'disabled' : ''}
                aria-label="Next page">Next</button>
      </div>
    `;
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // EVENT HANDLING
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Attach event listeners to rendered elements.
   */
  attachEventListeners() {
    // The search box (s39 Q6): debounced, quiet reloads, focus restored across the re-render
    // (render() rebuilds the container's markup, which would otherwise eat a keystroke's focus).
    const search = this.container.querySelector('.blueprint-search-input');
    if (search) {
      if (this._searchHadFocus) {
        search.focus();
        search.setSelectionRange(search.value.length, search.value.length);
        this._searchHadFocus = false;
      }
      search.addEventListener('input', () => {
        this.userSearch = search.value;
        this._searchHadFocus = true;
        if (this._searchTimer) clearTimeout(this._searchTimer);
        this._searchTimer = setTimeout(() => {
          this.currentPage = 1;
          if (this.context && this.supabaseClient) this.loadData(true);
        }, 300);
      });
    }

    // Use event delegation on container
    const handler = (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) {
        // Check if clicking on a table row
        const row = e.target.closest('tr[data-index]');
        if (row) {
          this.handleRowClick(row);
        }
        return;
      }
      
      const action = target.dataset.action;
      
      switch (action) {
        case 'prev':
          this.handlePrevPage();
          break;
        case 'next':
          this.handleNextPage();
          break;
      }
    };
    
    // One listener, not one per render: attachEventListeners runs on EVERY render,
    // and the map overwrite below orphaned the previous handler where nothing could
    // remove it -- three renders meant every row click emitted three times (the s31
    // triple-emit nit, fixed 2026-08-20 on the resume).
    const prev = this._boundHandlers.get(this.container);
    if (prev) { this.container.removeEventListener('click', prev); }
    this.container.addEventListener('click', handler);
    this._boundHandlers.set(this.container, handler);
  }
  
  handleRowClick(row) {
    const index = parseInt(row.dataset.index);
    const id = row.dataset.id;
    const record = this.data[index];
    
    // Emit navigation event. `id` rides at the top level so the shell's bridge can
    // hand it to any component exposing setRecordId() without knowing entity key names
    // (s31, 2026-08-19 -- the record-to-detail handshake's missing half).
    // `entity` is the key the generator supplies; `entityName` never was, so this emitted `//<id>`
    // in every deployed list (measured 2026-08-22). The shell's bridge takes the id and moves to the
    // feature's record route itself; this route is the fallback for shells without a bridge.
    this.emit('blueprint:navigate', {
      route: `/route/${id}`,
      id: id,
      params: { mode: 'view', record }
    });
  }
  
  handlePrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadData();
    }
  }
  
  handleNextPage() {
    const maxPage = Math.ceil(this.totalCount / this.config.pagination.pageSize);
    if (this.currentPage < maxPage) {
      this.currentPage++;
      this.loadData();
    }
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // UTILITIES
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Escape HTML to prevent XSS.
   */
  escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
  
  /**
   * Format date using locale from context.
   */
  formatDate(dateStr) {
    if (!dateStr) return '-';
    try {
      return new Date(dateStr).toLocaleDateString(this.locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  }
}
  
  // ═══════════════════════════════════════════════════════════════════════
  // EXPORT
  // ═══════════════════════════════════════════════════════════════════════
  
  // Export for module systems
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = RouteBlueprintUI;
  }
  
  // Export to window for browser (replaces any existing instance)
  if (typeof window !== 'undefined') {
    window.RouteBlueprintUI = RouteBlueprintUI;
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
    window.PatternRegistry['cc000000-0000-0000-0000-000000000001'] = window.RouteBlueprintUI;
  }
