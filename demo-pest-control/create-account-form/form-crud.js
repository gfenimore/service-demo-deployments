/**
 * Account - Generated Blueprint UI (Form)
 * Blueprint ID: d0000001-0001-0001-0002-000000000001
 * Pattern: FORM-CRUD-SIMPLE
 * Entity: account
 * 
 * Implements Pattern Interface Contract (JBA-003)
 * - mount(container): Render into container
 * - unmount(): Cleanup everything
 * - onContext(context): Receive tenant/user/role
 * - getMetadata(): Return component info
 * - isDirty(): Check for unsaved changes (FORM-SPECIFIC)
 * - save(): Programmatic save (FORM-SPECIFIC)
 */

// Wrap in IIFE to prevent class redeclaration errors when loading multiple blueprints
(function() {
  'use strict';
  
  /**
   * Blueprint UI Class - Contract Compliant (Form)
   * Can be mounted into ANY application shell
   */
  class AccountFormUI {
  
  // ═══════════════════════════════════════════════════════════════════════
  // CONSTRUCTOR
  // ═══════════════════════════════════════════════════════════════════════
  
  constructor() {
    // State
    this.container = null;
    this.context = null;
    this.mode = 'create'; // 'create' or 'edit'
    this.currentRecord = null;
    this.recordId = null;
    this._isDirty = false;
    this.isLoading = false;
    this.supabaseClient = null;
    
    // Bound event handlers (for cleanup)
    this._boundHandlers = new Map();
    
    // Abort controller for fetch cancellation
    this._abortController = null;
    
    // Metadata (from Blueprint definition)
    this.metadata = {
      blueprint_id: 'd0000001-0001-0001-0002-000000000001',
      title: 'Account',
      pattern_type: 'FORM-CRUD-SIMPLE',
      entity: 'account',
      icon: 'edit',
      route: '/account/form',
      permissions_required: ['account:write'],
      sopf_node: 'unknown',
      role_context_id: '',
      description: 'Create and edit account records'
    };
    
    // Configuration
    this.config = {
      entity: 'account',
      // Where this form WRITES. Same key and same shape as list-view: the schema is a fact about
      // the BLUEPRINT, not about whichever app happens to be hosting the component.
      database: {
  "schema": "services_template",
  "isInternalSchema": false,
  "requiresTenantFiltering": true
},
      geocodeOnSave: {"provider":"mapbox","address_fields":["billing_street_address","billing_city","billing_state","billing_zip_code"],"latitude_field":"billing_latitude","longitude_field":"billing_longitude"},
      table: 'account',
      primaryKey: 'account_id',
      fields: [
  {
    "name": "account_name",
    "label": "Account Name",
    "type": "text",
    "required": true,
    "readOnly": false,
    "hidden": false,
    "placeholder": "Enter Account Name",
    "helpText": "",
    "options": [],
    "section": "identity"
  },
  {
    "name": "account_type",
    "label": "Account Type",
    "type": "select",
    "required": false,
    "readOnly": false,
    "hidden": false,
    "placeholder": "Enter Account Type",
    "helpText": "",
    "options": [
      {
        "value": "residential",
        "label": "residential"
      },
      {
        "value": "commercial",
        "label": "commercial"
      }
    ],
    "section": "identity"
  },
  {
    "name": "billing_street_address",
    "label": "Street",
    "type": "text",
    "required": false,
    "readOnly": false,
    "hidden": false,
    "placeholder": "Enter Street",
    "helpText": "",
    "options": [],
    "section": "billing"
  },
  {
    "name": "billing_city",
    "label": "City",
    "type": "text",
    "required": false,
    "readOnly": false,
    "hidden": false,
    "placeholder": "Enter City",
    "helpText": "",
    "options": [],
    "section": "billing"
  },
  {
    "name": "billing_state",
    "label": "State",
    "type": "text",
    "required": false,
    "readOnly": false,
    "hidden": false,
    "placeholder": "Enter State",
    "helpText": "",
    "options": [],
    "section": "billing"
  },
  {
    "name": "billing_zip_code",
    "label": "ZIP",
    "type": "text",
    "required": false,
    "readOnly": false,
    "hidden": false,
    "placeholder": "Enter ZIP",
    "helpText": "",
    "options": [],
    "section": "billing"
  },
  {
    "name": "status",
    "label": "Status",
    "type": "select",
    "required": false,
    "readOnly": false,
    "hidden": false,
    "placeholder": "Enter Status",
    "helpText": "",
    "options": [
      {
        "value": "active",
        "label": "active"
      },
      {
        "value": "inactive",
        "label": "inactive"
      },
      {
        "value": "suspended",
        "label": "suspended"
      }
    ],
    "section": "identity"
  },
  {
    "name": "internal_notes",
    "label": "Internal Notes",
    "type": "textarea",
    "required": false,
    "readOnly": false,
    "hidden": false,
    "placeholder": "Enter Internal Notes",
    "helpText": "",
    "options": [],
    "section": "notes"
  }
],
      // Labelled dividers in render order. [] = one flat stack, the pre-2026-08-08 behaviour.
      sections: [
  {
    "key": "identity",
    "label": "Identity"
  },
  {
    "key": "billing",
    "label": "Billing address"
  },
  {
    "key": "notes",
    "label": "Notes"
  }
],
      validation: {
  "client": true,
  "server": false
},
      // Every persona's gate for this entity. visibleFields() picks one by context.facet.
      personas: {
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
   * @param {Object} options - Optional mount options (e.g., { recordId: '123' })
   * @throws {Error} If container is null or component already mounted
   */
  mount(container, options = {}) {
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
    this.container.classList.add('blueprint-account-form');
    
    // Store recordId if provided for edit mode
    if (options.recordId) {
      this.recordId = options.recordId;
      this.mode = 'edit';
    }
    
    // Initial render
    this.render();
    
    // Emit ready event
    this.emit('blueprint:ready', {});
    
    console.log('[AccountFormUI] Mounted successfully');
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // REQUIRED: unmount()
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Unmount the component and clean up all resources.
   */
  unmount() {
    if (!this.container) {
      console.warn('[AccountFormUI] Component not mounted, nothing to unmount');
      return;
    }
    
    // Warn about unsaved changes
    if (this._isDirty) {
      console.warn('[AccountFormUI] Unmounting with unsaved changes');
    }
    
    // Remove all event listeners
    this._boundHandlers.forEach((handler, element) => {
      element.removeEventListener('submit', handler);
      element.removeEventListener('input', handler);
      element.removeEventListener('change', handler);
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
    this.container.classList.remove('blueprint-account-form');
    
    // Reset state
    this.container = null;
    this.currentRecord = null;
    this.recordId = null;
    this._isDirty = false;
    this.isLoading = false;
    this.mode = 'create';
    // ⚠ THE CLIENT SURVIVES UNMOUNT -- same reason as list-view. onContext() is called once by the
    // registry at init, so a client dropped here is never rebuilt: a form remounted after
    // navigating away would silently fall through to the apiBaseUrl branch and never write.
    // A Supabase client is not a DOM resource; the handlers, abort controller and markup that are
    // are all released above.

    console.log('[AccountFormUI] Unmounted and cleaned up');
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
    // A SNAPSHOT, not the caller's object -- see list-view for the full note. A caller that mutates
    // the context it already handed over would make previousContext and context the same reference,
    // so every change comparison reads false and every re-render is skipped, silently.
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
    
    // A PERSONA CHANGE IS NOT A DATA CHANGE. Same record, same fetch -- what differs is which
    // fields are rendered and which of them are writable. Re-render without going back to the
    // engine. Checked BEFORE the load branches so a switch on an already-loaded form repaints
    // rather than silently doing nothing, which is what a list-view did until it was caught by
    // driving the switcher for real.
    if (previousContext && previousContext.facet !== context.facet && this.container) {
      console.log('[AccountFormUI] Persona changed, re-rendering:', context.facet || '(none)');
      this.render();
    }

    // If in edit mode and we have a recordId, load the record
    if (!previousContext && this.container && this.mode === 'edit' && this.recordId) {
      this.loadRecord(this.recordId);
    } else if (!previousContext && this.container) {
      // First context received in create mode - re-render to show form
      this.render();
    }
    
    console.log('[AccountFormUI] Context received:', {
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
  // FORM-SPECIFIC: isDirty() and save()
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Check if the form has unsaved changes.
   * @returns {boolean} True if there are unsaved changes
   */
  isDirty() {
    return this._isDirty;
  }
  
  /**
   * GEOCODE ON SAVE (s31, 2026-08-19). Declared by the blueprint as geocode_on_save:
   * { provider, address_fields, latitude_field, longitude_field }. The token is a
   * deployment-seam value: window.AppContext.integrations.mapboxToken, substituted at
   * deploy time (__MAPBOX_TOKEN__), never generated in and never logged.
   * @param {Object} formData - mutated in place: coordinate fields set on success
   */
  async applyGeocodeOnSave(formData) {
    const gc = this.config.geocodeOnSave;
    if (!gc || !gc.address_fields || !gc.latitude_field || !gc.longitude_field) return;

    const ctx = window.AppContext || {};
    const token = ctx.integrations && ctx.integrations.mapboxToken;
    if (!token || /^__[A-Z_]+__$/.test(token)) {
      console.warn('[AccountFormUI] geocode_on_save declared but no Mapbox token is ' +
                   'substituted (app-config.js integrations.mapboxToken) -- saving ' +
                   'without coordinates.');
      return;
    }

    const query = gc.address_fields
      .map((f) => formData[f])
      .filter((v) => v != null && String(v).trim() !== '')
      .join(', ');
    if (!query) return;

    try {
      const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
                  encodeURIComponent(query) + '.json?limit=1&access_token=' +
                  encodeURIComponent(token);
      const res = await fetch(url);
      if (!res.ok) throw new Error('geocoding HTTP ' + res.status);
      const body = await res.json();
      const feature = body.features && body.features[0];
      if (!feature || !feature.center) {
        console.warn('[AccountFormUI] address did not geocode: "' + query + '" -- ' +
                     'saving without coordinates.');
        this.emit('blueprint:notify', {
          message: 'Address could not be verified on the map -- saved without coordinates',
          type: 'warning'
        });
        return;
      }
      formData[gc.longitude_field] = feature.center[0];
      formData[gc.latitude_field] = feature.center[1];
      console.log('[AccountFormUI] geocoded "' + query + '" -> ' +
                  feature.center[1] + ', ' + feature.center[0]);
    } catch (err) {
      console.warn('[AccountFormUI] geocoding failed (' + err.message + ') -- saving ' +
                   'without coordinates.');
    }
  }

  /**
   * Programmatically save the form.
   * @returns {Promise<boolean>} True if save succeeded
   */
  async save() {
    if (!this.container) {
      console.warn('[AccountFormUI] Cannot save: not mounted');
      return false;
    }
    
    // Validate form
    if (!this.validateForm()) {
      this.emit('blueprint:error', {
        code: 'VALIDATION_FAILED',
        message: 'Please correct the errors before saving'
      });
      return false;
    }
    
    // Get form data
    const formData = this.getFormData();

    // GEOCODE ON SAVE (s31): populate coordinate columns from the address fields the
    // blueprint declares. Accuracy signal, not a gate -- a geocoder outage or an
    // unresolvable address warns and the save proceeds with the coordinates null.
    await this.applyGeocodeOnSave(formData);

    try {
      let result;
      if (this.mode === 'create') {
        result = await this.createRecord(formData);
      } else {
        result = await this.updateRecord(formData);
      }
      
      this._isDirty = false;
      this.emit('blueprint:dirty', { isDirty: false });
      this.emit('blueprint:notify', { 
        message: `${this.metadata.title} saved successfully`, 
        type: 'success' 
      });
      
      return true;
    } catch (error) {
      this.emit('blueprint:error', {
        code: 'SAVE_FAILED',
        message: error.message || 'Failed to save'
      });
      return false;
    }
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
      console.warn(`[AccountFormUI] Cannot emit ${eventName}: not mounted`);
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
      console.warn('[AccountFormUI] Supabase client library not loaded');
      return;
    }
    
    try {
      this.supabaseClient = window.supabase.createClient(
        supabaseConfig.url,
        supabaseConfig.anonKey,
        // The BLUEPRINT's schema, not the shell's. Was `supabaseConfig.schema || 'public'`, which
        // pointed every form at whatever the host app was configured with -- list-view was
        // repaired to read from the blueprint on 2026-08-08 and this was left behind.
        { db: { schema: this.config.database.schema || 'public' },
          // THE SIGNED-IN TEAM'S TOKEN (s31, 2026-08-19). When the shell's sign-in gate
          // has run, AppContext.authHeaders carries the session JWT; every component
          // client attaches it so grants made to `authenticated` actually reach the
          // queries. Empty when the app declares no auth -- anon behavior unchanged.
          global: { headers: (window.AppContext && window.AppContext.authHeaders) || {} } }
      );
      console.log('[AccountFormUI] Supabase client initialized');
    } catch (error) {
      console.error('[AccountFormUI] Failed to initialize Supabase:', error);
    }
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // DATA OPERATIONS
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Load a record for editing.
   */
  async loadRecord(id) {
    if (!this.context) {
      console.warn('[AccountFormUI] Cannot load record: no context');
      return;
    }
    
    this.isLoading = true;
    this.render();
    
    this._abortController = new AbortController();
    
    try {
      let result;
      
      if (this.supabaseClient) {
        result = await this.fetchRecordFromSupabase(id);
      } else if (this.context.apiBaseUrl) {
        result = await this.fetchRecordFromAPI(id);
      } else {
        throw new Error('No data source available');
      }
      
      this.currentRecord = result;
      this.isLoading = false;
      this.render();
      this.populateForm(result);
      
    } catch (error) {
      if (error.name === 'AbortError') return;
      
      this.isLoading = false;
      this.render();
      
      this.emit('blueprint:error', {
        code: 'DATA_LOAD_FAILED',
        message: `Failed to load account: ${error.message}`
      });
    }
  }
  
  /**
   * Fetch record from Supabase.
   */
  async fetchRecordFromSupabase(id) {
    const { data, error } = await this.supabaseClient
      .from('account')
      .select('*')
      .eq('account_id', id)
      .eq('tenant_id', this.context.tenant_id)
      .single();
      
    if (error) throw error;
    return data;
  }
  
  /**
   * Fetch record from REST API.
   */
  async fetchRecordFromAPI(id) {
    const { apiBaseUrl, authToken, tenant_id } = this.context;
    
    const headers = {
      'Content-Type': 'application/json',
      'X-Tenant-ID': tenant_id
    };
    
    if (typeof authToken === 'function') {
      headers['Authorization'] = `Bearer ${await authToken()}`;
    } else if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }
    
    const response = await fetch(`${apiBaseUrl}/account/${id}`, {
      headers,
      signal: this._abortController.signal
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  }
  
  /**
   * Create a new record.
   */
  async createRecord(data) {
    if (!this.context) {
      throw new Error('Context required for create');
    }
    
    // An internal schema has no tenant_id column; stamping one would make the INSERT fail.
    data.tenant_id = this.context.tenant_id;
    
    if (this.supabaseClient) {
      const { data: result, error } = await this.supabaseClient
        .from('account')
        .insert(data)
        .select()
        .single();
        
      if (error) throw error;
      
      this.currentRecord = result;
      this.recordId = result['account_id'];
      this.mode = 'edit';
      this.render();
      
      return result;
    } else if (this.context.apiBaseUrl) {
      const { apiBaseUrl, authToken, tenant_id } = this.context;
      
      const headers = {
        'Content-Type': 'application/json',
        'X-Tenant-ID': tenant_id
      };
      
      if (typeof authToken === 'function') {
        headers['Authorization'] = `Bearer ${await authToken()}`;
      } else if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }
      
      const response = await fetch(`${apiBaseUrl}/account`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      this.currentRecord = result;
      this.recordId = result['account_id'];
      this.mode = 'edit';
      this.render();
      
      return result;
    } else {
      throw new Error('No data source available');
    }
  }
  
  /**
   * Update existing record.
   */
  async updateRecord(data) {
    if (!this.recordId) {
      throw new Error('No record ID for update');
    }
    
    if (this.supabaseClient) {
      const { data: result, error } = await this.supabaseClient
        .from('account')
        .update(data)
        .eq('account_id', this.recordId)
        .eq('tenant_id', this.context.tenant_id)
        .select()
        .single();
        
      if (error) throw error;
      
      this.currentRecord = result;
      return result;
    } else if (this.context.apiBaseUrl) {
      const { apiBaseUrl, authToken, tenant_id } = this.context;
      
      const headers = {
        'Content-Type': 'application/json',
        'X-Tenant-ID': tenant_id
      };
      
      if (typeof authToken === 'function') {
        headers['Authorization'] = `Bearer ${await authToken()}`;
      } else if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }
      
      const response = await fetch(`${apiBaseUrl}/account/${this.recordId}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      this.currentRecord = result;
      return result;
    } else {
      throw new Error('No data source available');
    }
  }
  
  /**
   * Delete current record.
   */
  async deleteRecord() {
    if (!this.recordId) {
      throw new Error('No record ID for delete');
    }
    
    if (this.supabaseClient) {
      const { error } = await this.supabaseClient
        .from('account')
        .delete()
        .eq('account_id', this.recordId)
        .eq('tenant_id', this.context.tenant_id);
        
      if (error) throw error;
    } else if (this.context.apiBaseUrl) {
      const { apiBaseUrl, authToken, tenant_id } = this.context;
      
      const headers = {
        'X-Tenant-ID': tenant_id
      };
      
      if (typeof authToken === 'function') {
        headers['Authorization'] = `Bearer ${await authToken()}`;
      } else if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }
      
      const response = await fetch(`${apiBaseUrl}/account/${this.recordId}`, {
        method: 'DELETE',
        headers
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } else {
      throw new Error('No data source available');
    }
    
    this.emit('blueprint:notify', {
      message: `${this.metadata.title} deleted successfully`,
      type: 'success'
    });
    
    this.emit('blueprint:navigate', {
      route: '/account'
    });
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
    if (!this.context) {
      return this.buildNoContextHTML();
    } else if (this.isLoading) {
      return this.buildLoadingHTML();
    } else {
      return this.buildFormHTML();
    }
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
        <p>Loading...</p>
      </div>
    `;
  }
  
  /**
   * The fields THIS RENDER shows: the blueprint's field set intersected with the persona's gate.
   *
   *   BLUEPRINT  what this FORM can write -- only writable columns, baked in at generation
   *   PERSONA    what this ROLE may see   -- chosen at RUNTIME from context.facet
   *
   * Identical in shape to list-view's, deliberately: a persona that governs one surface and not
   * the other is not a persona. Until 2026-08-08 field_visibility mapped to `columns` and a form
   * reads `fields`, so an admin and a generic user saw IDENTICAL forms while their lists differed.
   *
   * No context.facet means no narrowing -- the blueprint's own field set stands.
   *
   * !! NOT ACCESS CONTROL. This decides what is painted and what is submitted. A field a role must
   * never write has to be refused server-side, by RLS and column grants.
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

    // Reported, never widened back to everything: falling back to `all` would invert the gate.
    if (visible.length === 0) {
      console.warn(`[AccountFormUI] persona '${code}' permits none of this form's fields`);
    }
    return visible;
  }

  /**
   * Whether this persona may EDIT a field. `required` is a DOMAIN fact and rides on the field;
   * `readonly` is a ROLE fact and rides on the persona. The per-persona blueprint duplicates that
   * were collapsed on 2026-08-08 had been carrying both on the same object, which is why one
   * marked account_name required and another marked it readonly.
   */
  isReadonly(field) {
    // A DOMAIN readonly rides on the field and holds in every mode -- a computed column is not
    // writable just because the row is new.
    if (field.readOnly) return true;

    // ⚠ A PERSONA's readonly DOES NOT APPLY ON CREATE. "You may not change this value" is a claim
    // about an EXISTING value; on a row that does not exist yet there is nothing to protect, and
    // applying it produces incoherent forms -- GENERIC_USER could not type a name into a new
    // account, because account_name is readonly for them on the LIST. Whether a role may create at
    // all is a different axis entirely: actions_enabled, checked in canCreate().
    if (this.mode === 'create') return false;

    const code = this.context && this.context.facet;
    const gate = code && this.config.personas ? this.config.personas[code] : null;
    return !!(gate && Array.isArray(gate.readonly) && gate.readonly.includes(field.name));
  }

  /**
   * Whether THIS persona may create a record at all.
   *
   * The fourth persona axis. actions_enabled has been declared on every persona since the facets
   * were authored and was read by NOTHING until 2026-08-08 -- the resolver injected fields,
   * readonly and filters, and dropped it. FIELD_TECH declares ["view","search"], which is a
   * correct and complete statement that a technician does not open accounts, and the form was
   * about to render them a Save button anyway.
   *
   * Omission IS the denial here: a persona that does not list "create" cannot create. No persona
   * that says nothing about actions is narrowed -- an absent gate is not a denial.
   *
   * !! NOT ACCESS CONTROL. This decides what is PAINTED. A role that must never insert has to be
   * refused server-side, by RLS and table grants.
   */
  canCreate() {
    const code = this.context && this.context.facet;
    const gate = code && this.config.personas ? this.config.personas[code] : null;
    if (!gate || !Array.isArray(gate.actions)) return true;
    return gate.actions.includes('create');
  }

  /**
   * Group this render's visible fields into their labelled sections.
   *
   * Grouped HERE, at render time, and not baked in by the generator -- a persona narrows the field
   * set at runtime, so which fields a section actually contains is not knowable until the persona
   * is chosen. A section that this persona has no fields for is DROPPED, not rendered as an empty
   * heading: a "Billing address" divider with nothing under it reads as a loading failure.
   *
   * Fields naming no section form an unnamed leading group, so a blueprint that declares no
   * sections renders exactly as it did before sections existed.
   *
   * @returns {Array<{label: string|null, fields: Array}>}
   */
  groupedFields() {
    const visible = this.visibleFields();
    const sections = Array.isArray(this.config.sections) ? this.config.sections : [];

    // No sections declared: one unnamed group holding everything, in blueprint order.
    if (sections.length === 0) return [{ label: null, fields: visible }];

    const groups = [];
    const leading = visible.filter(f => !f.section);
    if (leading.length) groups.push({ label: null, fields: leading });

    for (const s of sections) {
      const inSection = visible.filter(f => f.section === s.key);
      if (inSection.length) groups.push({ label: s.label, fields: inSection });
    }

    // A field whose section is not declared would otherwise vanish from the form entirely -- worse
    // than the generator's authoring warning, because nothing on screen would say so.
    const placed = new Set(groups.flatMap(g => g.fields).map(f => f.name));
    const orphans = visible.filter(f => !placed.has(f.name));
    if (orphans.length) {
      console.warn(`[AccountFormUI] field(s) name an undeclared section and were ` +
                   `appended ungrouped: ${orphans.map(f => f.name).join(', ')}`);
      groups.push({ label: null, fields: orphans });
    }

    return groups;
  }

  buildFormHTML() {
    const title = this.mode === 'edit' ? `Edit ${this.metadata.title}` : `Create ${this.metadata.title}`;

    // A persona that cannot create gets a stated refusal, not a form. Rendering the fields and
    // disabling Save would be worse: it invites the work and then throws it away.
    if (this.mode === 'create' && !this.canCreate()) {
      return `
        <div class="blueprint-form-container">
          <h2 class="blueprint-form-title">${this.escapeHtml(title)}</h2>
          <div class="blueprint-form-refusal">
            This role cannot create ${this.escapeHtml(this.metadata.title)} records.
          </div>
        </div>
      `;
    }

    const fields = this.groupedFields().map(group => {
      const rendered = group.fields.map(field => this.buildFieldHTML(field)).join('');
      if (!group.label) return rendered;
      return `
        <div class="blueprint-form-section">
          <h3 class="blueprint-form-section-label">${this.escapeHtml(group.label)}</h3>
        </div>
        ${rendered}
      `;
    }).join('');

    const deleteButton = this.mode === 'edit' ? `
      <button type="button" class="blueprint-btn blueprint-btn-delete" data-action="delete">
        Delete
      </button>
    ` : '';
    
    return `
      <div class="blueprint-form-container">
        <h2 class="blueprint-form-title">${this.escapeHtml(title)}</h2>
        <div class="blueprint-message" style="display:none;"></div>
        <form class="blueprint-form" data-form="main">
          ${fields}
          <div class="blueprint-form-actions">
            <button type="submit" class="blueprint-btn blueprint-btn-primary">
              ${this.mode === 'edit' ? 'Update' : 'Save'}
            </button>
            <button type="button" class="blueprint-btn blueprint-btn-secondary" data-action="cancel">
              Cancel
            </button>
            ${deleteButton}
          </div>
        </form>
      </div>
    `;
  }
  
  buildFieldHTML(field) {
    if (field.hidden) return '';
    
    const required = field.required ? 'required' : '';
    const readonly = this.isReadonly(field) ? 'readonly' : '';
    const value = this.currentRecord ? (this.currentRecord[field.name] || '') : '';
    
    return `
      <div class="blueprint-field">
        <label class="blueprint-label" for="field-${field.name}">
          ${this.escapeHtml(field.label)}${field.required ? ' *' : ''}
        </label>
        ${this.buildInputHTML(field, value, required, readonly)}
        <div class="blueprint-field-error" id="error-${field.name}"></div>
      </div>
    `;
  }
  
  buildInputHTML(field, value, required, readonly) {
    const id = `field-${field.name}`;
    const name = field.name;
    
    switch (field.type) {
      case 'textarea':
        return `<textarea id="${id}" name="${name}" class="blueprint-input blueprint-textarea" ${required} ${readonly}>${this.escapeHtml(value)}</textarea>`;
      
      case 'select':
        const options = (field.options || []).map(opt => 
          `<option value="${this.escapeHtml(opt.value)}" ${opt.value === value ? 'selected' : ''}>${this.escapeHtml(opt.label)}</option>`
        ).join('');
        return `<select id="${id}" name="${name}" class="blueprint-input blueprint-select" ${required} ${readonly}>${options}</select>`;
      
      case 'checkbox':
        return `<input type="checkbox" id="${id}" name="${name}" class="blueprint-checkbox" ${value ? 'checked' : ''} ${readonly}>`;
      
      default:
        return `<input type="${field.type || 'text'}" id="${id}" name="${name}" class="blueprint-input" value="${this.escapeHtml(value)}" ${required} ${readonly}>`;
    }
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // EVENT HANDLING
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Attach event listeners to rendered elements.
   */
  attachEventListeners() {
    const form = this.container.querySelector('[data-form="main"]');
    if (!form) return;
    
    // Form submit
    const submitHandler = (e) => {
      e.preventDefault();
      this.handleSubmit();
    };
    form.addEventListener('submit', submitHandler);
    this._boundHandlers.set(form, submitHandler);
    
    // Track changes for dirty state
    const changeHandler = () => {
      if (!this._isDirty) {
        this._isDirty = true;
        this.emit('blueprint:dirty', { isDirty: true });
      }
    };
    form.addEventListener('input', changeHandler);
    form.addEventListener('change', changeHandler);
    
    // Button actions
    const clickHandler = (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;
      
      const action = target.dataset.action;
      
      switch (action) {
        case 'cancel':
          this.handleCancel();
          break;
        case 'delete':
          this.handleDelete();
          break;
      }
    };
    this.container.addEventListener('click', clickHandler);
    this._boundHandlers.set(this.container, clickHandler);
  }
  
  async handleSubmit() {
    await this.save();
  }
  
  handleCancel() {
    if (this._isDirty) {
      // Emit navigation with warning about unsaved changes
      this.emit('blueprint:navigate', {
        route: '/account',
        hasUnsavedChanges: true
      });
    } else {
      this.emit('blueprint:navigate', {
        route: '/account'
      });
    }
  }
  
  async handleDelete() {
    // Confirm delete via notification system
    this.emit('blueprint:confirm', {
      message: `Delete this ${this.metadata.title}?`,
      onConfirm: async () => {
        try {
          await this.deleteRecord();
        } catch (error) {
          this.emit('blueprint:error', {
            code: 'DELETE_FAILED',
            message: error.message || 'Failed to delete'
          });
        }
      }
    });
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // FORM DATA HANDLING
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Get form data as an object.
   */
  getFormData() {
    const form = this.container.querySelector('[data-form="main"]');
    if (!form) return {};
    
    const formData = {};
    
    // visibleFields(), not config.fields: a field this persona cannot see is not on the form, so
    // validating it would block a save on an input nobody can fill, and collecting it would submit
    // a value nobody entered.
    this.visibleFields().forEach(field => {
      if (field.hidden || field.readOnly) return;
      
      const input = form.querySelector(`[name="${field.name}"]`);
      if (!input) return;
      
      if (field.type === 'checkbox') {
        formData[field.name] = input.checked;
      } else if (field.type === 'number') {
        formData[field.name] = input.value ? parseFloat(input.value) : null;
      } else {
        formData[field.name] = input.value || null;
      }
    });
    
    return formData;
  }
  
  /**
   * Populate form with record data.
   */
  populateForm(data) {
    const form = this.container.querySelector('[data-form="main"]');
    if (!form) return;
    
    // visibleFields(), not config.fields: a field this persona cannot see is not on the form, so
    // validating it would block a save on an input nobody can fill, and collecting it would submit
    // a value nobody entered.
    this.visibleFields().forEach(field => {
      const input = form.querySelector(`[name="${field.name}"]`);
      if (!input) return;
      
      const value = data[field.name];
      
      if (field.type === 'checkbox') {
        input.checked = !!value;
      } else {
        input.value = value || '';
      }
    });
    
    // Reset dirty state after populating
    this._isDirty = false;
    this.emit('blueprint:dirty', { isDirty: false });
  }
  
  /**
   * Validate form data.
   */
  validateForm() {
    const form = this.container.querySelector('[data-form="main"]');
    if (!form) return false;
    
    let isValid = true;
    
    // visibleFields(), not config.fields: a field this persona cannot see is not on the form, so
    // validating it would block a save on an input nobody can fill, and collecting it would submit
    // a value nobody entered.
    this.visibleFields().forEach(field => {
      if (field.hidden || field.readOnly) return;
      
      const input = form.querySelector(`[name="${field.name}"]`);
      if (!input) return;
      
      const errorEl = form.querySelector(`#error-${field.name}`);
      
      // Required validation
      if (field.required && !input.value.trim()) {
        if (errorEl) errorEl.textContent = `${field.label} is required`;
        isValid = false;
      } else if (errorEl) {
        errorEl.textContent = '';
      }
    });
    
    return isValid;
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
}
  
  // ═══════════════════════════════════════════════════════════════════════
  // EXPORT
  // ═══════════════════════════════════════════════════════════════════════
  
  // Export for module systems
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AccountFormUI;
  }
  
  // Export to window for browser (replaces any existing instance)
  if (typeof window !== 'undefined') {
    window.AccountFormUI = AccountFormUI;
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
    window.PatternRegistry['d0000001-0001-0001-0002-000000000001'] = window.AccountFormUI;
  }
