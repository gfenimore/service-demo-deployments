/**
 * Account - Generated Blueprint UI
 * Blueprint ID: c2000000-0000-0000-0000-000000000001
 * Pattern: DETAIL-PANEL-SIMPLE
 * Entity: account
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
  class AccountDetailPanelUI {
  
  // ═══════════════════════════════════════════════════════════════════════
  // CONSTRUCTOR
  // ═══════════════════════════════════════════════════════════════════════
  
  constructor() {
    // State
    this.container = null;
    this.context = null;
    this.data = null;
    this.recordId = null;
    this.isLoading = false;
    this.supabaseClient = null;
    this.embeddedData = {}; // Store embedded list data by entity name
    
    // Bound event handlers (for cleanup)
    this._boundHandlers = new Map();
    
    // Abort controller for fetch cancellation
    this._abortController = null;
    
    // Metadata (from Blueprint definition)
    this.metadata = {
      blueprint_id: 'c2000000-0000-0000-0000-000000000001',
      title: 'Account',
      pattern_type: 'DETAIL-PANEL-SIMPLE',
      entity: 'account',
      icon: 'view',
      route: '/account/:id',
      permissions_required: ['account:read'],
      sopf_node: 'unknown',
      role_context_id: '',
      description: 'View account record details'
    };
    
    // Configuration
    this.config = {
      entity: 'account',
      fields: [
  {
    "name": "account_name",
    "label": "Account Name",
    "type": "number",
    "displayFormat": "number",
    "readonly": true
  },
  {
    "name": "account_type",
    "label": "Account Type",
    "type": "number",
    "displayFormat": "number",
    "readonly": true
  },
  {
    "name": "billing_street_address",
    "label": "Billing Street Address",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "billing_city",
    "label": "Billing City",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "billing_state",
    "label": "Billing State",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "billing_zip_code",
    "label": "Billing Zip Code",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "phone",
    "label": "Phone",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "email",
    "label": "Email",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "status",
    "label": "Status",
    "type": "badge",
    "displayFormat": "badge",
    "readonly": true
  },
  {
    "name": "balance",
    "label": "Balance",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "service_frequency",
    "label": "Service Frequency",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "last_service_date",
    "label": "Last Service Date",
    "type": "date",
    "displayFormat": "date",
    "readonly": true
  },
  {
    "name": "next_service_date",
    "label": "Next Service Date",
    "type": "date",
    "displayFormat": "date",
    "readonly": true
  },
  {
    "name": "internal_notes",
    "label": "Internal Notes",
    "type": "text",
    "displayFormat": "textarea",
    "readonly": true
  }
],
      headerFields: [],
      detailFields: [
  {
    "name": "account_name",
    "label": "Account Name",
    "type": "number",
    "displayFormat": "number",
    "readonly": true
  },
  {
    "name": "account_type",
    "label": "Account Type",
    "type": "number",
    "displayFormat": "number",
    "readonly": true
  },
  {
    "name": "billing_street_address",
    "label": "Billing Street Address",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "billing_city",
    "label": "Billing City",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "billing_state",
    "label": "Billing State",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "billing_zip_code",
    "label": "Billing Zip Code",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "phone",
    "label": "Phone",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "email",
    "label": "Email",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "status",
    "label": "Status",
    "type": "badge",
    "displayFormat": "badge",
    "readonly": true
  },
  {
    "name": "balance",
    "label": "Balance",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "service_frequency",
    "label": "Service Frequency",
    "type": "text",
    "displayFormat": "text",
    "readonly": true
  },
  {
    "name": "last_service_date",
    "label": "Last Service Date",
    "type": "date",
    "displayFormat": "date",
    "readonly": true
  },
  {
    "name": "next_service_date",
    "label": "Next Service Date",
    "type": "date",
    "displayFormat": "date",
    "readonly": true
  },
  {
    "name": "internal_notes",
    "label": "Internal Notes",
    "type": "text",
    "displayFormat": "textarea",
    "readonly": true
  }
],
      embeddedLists: [],
      artifactLinks: [],
      backRoute: null,
      actions: {
  "view": false,
  "edit": false,
  "delete": false,
  "close": true
},
      database: {
  "schema": "services_template",
  "tableName": "v_account_list",
  "primaryKey": "account_id",
  "isInternalSchema": false,
  "requiresTenantFiltering": true
}
    };
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // RECORD ID SETTER (for parameterized routing)
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Set the record ID for this detail panel.
   * @param {string} id - The record ID to load
   */
  setRecordId(id) {
    this.recordId = id;
    // If already mounted with context, load data
    if (this.container && this.context && this.supabaseClient) {
      this.loadData();
    }
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
    this.container.classList.add('blueprint-account-detail');
    
    // Initial render (loading state)
    this.render();
    
    // Load data if context already received (handles init-before-mount case)
    if (this.context && this.supabaseClient && this.recordId) {
      this.loadData();
    }
    
    // Emit ready event
    this.emit('blueprint:ready', {});
    
    console.log('[AccountDetailPanelUI] Mounted successfully');
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // REQUIRED: unmount()
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Unmount the component and clean up all resources.
   */
  unmount() {
    if (!this.container) {
      console.warn('[AccountDetailPanelUI] Component not mounted, nothing to unmount');
      return;
    }
    
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
    this.container.classList.remove('blueprint-account-detail');
    
    // Reset state
    this.container = null;
    this.data = null;
    this.recordId = null;
    this.isLoading = false;
    this.supabaseClient = null;
    this.embeddedData = {};
    
    console.log('[AccountDetailPanelUI] Unmounted and cleaned up');
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
    this.context = context;
    
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
    
    // Extract record ID from context if provided
    if (context.recordId) {
      this.recordId = context.recordId;
    } else if (context.params && context.params.id) {
      this.recordId = context.params.id;
    }
    
    // If context changed significantly, reload data
    if (previousContext && (
      previousContext.tenant_id !== context.tenant_id ||
      previousContext.role !== context.role ||
      previousContext.recordId !== context.recordId
    )) {
      console.log('[AccountDetailPanelUI] Context changed, reloading data');
      this.loadData();
    } else if (!previousContext && this.container) {
      // First context received after mount - load data
      this.loadData();
    }
    
    console.log('[AccountDetailPanelUI] Context received:', {
      tenant_id: context.tenant_id,
      role: context.role,
      recordId: this.recordId
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
      console.warn(`[AccountDetailPanelUI] Cannot emit ${eventName}: not mounted`);
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
      console.warn('[AccountDetailPanelUI] Supabase client library not loaded');
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
      console.log('[AccountDetailPanelUI] Supabase client initialized');
    } catch (error) {
      console.error('[AccountDetailPanelUI] Failed to initialize Supabase:', error);
    }
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // DATA LOADING
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Load data from API using context configuration.
   */
  async loadData() {
    if (!this.context) {
      console.warn('[AccountDetailPanelUI] Cannot load data: no context');
      return;
    }
    
    if (!this.recordId) {
      console.warn('[AccountDetailPanelUI] Cannot load data: no record ID');
      this.render();
      return;
    }
    
    this.isLoading = true;
    this.render();
    
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
      
      this.data = result;
      
      // Load embedded lists if Supabase client is available
      if (this.supabaseClient && this.config.embeddedLists && this.config.embeddedLists.length > 0) {
        await this.loadEmbeddedLists();
      }
      
      this.isLoading = false;
      
      this.render();
      
      this.emit('blueprint:loaded', { 
        recordId: this.recordId,
        entity: this.config.entity
      });
      
    } catch (error) {
      // Ignore abort errors
      if (error.name === 'AbortError') {
        console.log('[AccountDetailPanelUI] Fetch aborted');
        return;
      }
      
      this.isLoading = false;
      this.render();
      
      // Emit error event for shell to handle
      this.emit('blueprint:error', {
        code: 'DATA_LOAD_FAILED',
        message: `Failed to load account: ${error.message}`,
        details: { endpoint: '/account/${this.recordId}' }
      });
    }
  }
  
  /**
   * Fetch data from Supabase.
   */
  async fetchFromSupabase() {
    const { data, error } = await this.supabaseClient
      .from(this.config.database.tableName || 'account')
      .select('*')
      .eq(this.config.database.primaryKey || 'id', this.recordId)

      .eq('tenant_id', this.context.tenant_id)

      .single();
      
    if (error) throw error;
    
    return data;
  }

  /**
   * Load embedded lists from Supabase.
   */
  async loadEmbeddedLists() {
    for (const embeddedList of this.config.embeddedLists) {
      try {
        let query = this.supabaseClient
          .from(embeddedList.table)
          .select('*')
          .eq(embeddedList.foreignKey, this.recordId);

        const { data, error } = await query;

        if (error) throw error;

        this.embeddedData[embeddedList.entity] = data || [];
      } catch (error) {
        console.error(`[AccountDetailPanelUI] Failed to load ${embeddedList.entity}:`, error);
        this.embeddedData[embeddedList.entity] = [];
      }
    }
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
    
    // Fetch data
    const response = await fetch(`${apiBaseUrl}/account/${this.recordId}`, {
      headers,
      signal: this._abortController.signal
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const result = await response.json();
    return result.data || result;
  }
  
  /**
   * Generate mock data for testing.
   */
  generateMockData() {
    const record = { id: this.recordId };

    record.account_name = Math.floor(Math.random() * 1000);
    

    record.account_type = Math.floor(Math.random() * 1000);
    
    record.billing_street_address = `Billing Street Address value`;
    
    record.billing_city = `Billing City value`;
    
    record.billing_state = `Billing State value`;
    
    record.billing_zip_code = `Billing Zip Code value`;
    
    record.phone = `Phone value`;
    
    record.email = `Email value`;
    
    record.status = `Status value`;
    
    record.balance = `Balance value`;
    
    record.service_frequency = `Service Frequency value`;
    

    record.last_service_date = new Date().toISOString();
    

    record.next_service_date = new Date().toISOString();
    

    record.internal_notes = `This is mock content for Internal Notes.\n\nIt contains multiple lines to demonstrate the textarea display format.\n\nYou can add more detailed information here as needed.`;
    
    
    return record;
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
    } else if (!this.recordId) {
      return this.buildNoRecordIdHTML();
    } else if (this.isLoading) {
      return this.buildLoadingHTML();
    } else if (!this.data) {
      return this.buildNotFoundHTML();
    } else {
      return this.buildDetailHTML();
    }
  }
  
  buildNoContextHTML() {
    return `
      <div class="blueprint-message blueprint-warning">
        <p>Waiting for application context...</p>
      </div>
    `;
  }
  
  buildNoRecordIdHTML() {
    return `
      <div class="blueprint-message blueprint-warning">
        <p>No record ID provided.</p>
      </div>
    `;
  }
  
  buildLoadingHTML() {
    return `
      <div class="blueprint-loading">
        <div class="blueprint-spinner"></div>
        <p>Loading Account...</p>
      </div>
    `;
  }
  
  buildNotFoundHTML() {
    return `
      <div class="blueprint-message blueprint-error">
        <p>Account not found.</p>
      </div>
    `;
  }
  
  buildDetailHTML() {
    const actionButtons = this.buildActionButtons();
    
    // Build back button if backRoute is configured
    const backButton = this.config.backRoute ? 
      `<button class="blueprint-btn blueprint-btn-back" data-action="back" type="button">← Back</button>` : '';
    
    // Build header fields (compact display)
    const headerFieldsHTML = this.config.headerFields && this.config.headerFields.length > 0 ?
      this.config.headerFields.map(field => {
        const value = this.data[field.name];
        const displayValue = this.formatFieldValue(value, field);
        const isEmpty = value === null || value === undefined || value === '';
        
        return `
          <span class="blueprint-header-field">
            <strong>${this.escapeHtml(field.label)}:</strong> 
            ${isEmpty ? '(empty)' : this.escapeHtml(displayValue)}
          </span>
        `;
      }).join(' | ') : '';
    
    // Build detail fields (main content)
    const detailFieldsHTML = (this.config.detailFields || this.config.fields).map(field => {
      const value = this.data[field.name];
      const displayValue = this.formatFieldValue(value, field);
      const isEmpty = value === null || value === undefined || value === '';
      const valueClass = field.displayFormat === 'textarea' 
        ? 'blueprint-field-value blueprint-textarea' 
        : 'blueprint-field-value';
      const emptyClass = isEmpty ? ' blueprint-empty' : '';
      
      return `
        <div class="blueprint-field">
          <label class="blueprint-field-label">${this.escapeHtml(field.label)}</label>
          <div class="${valueClass}${emptyClass}" data-field="${field.name}">
            ${isEmpty ? '(empty)' : this.escapeHtml(displayValue)}
          </div>
        </div>
      `;
    }).join('');
    
    // Build embedded lists
    const embeddedListsHTML = this.config.embeddedLists && this.config.embeddedLists.length > 0 ?
      this.config.embeddedLists.map(embeddedList => this.buildEmbeddedListHTML(embeddedList)).join('') : '';
    
    // Build artifact links
    const artifactLinksHTML = this.config.artifactLinks && this.config.artifactLinks.length > 0 ?
      `<div class="blueprint-artifact-links">
        <h3>Related Links</h3>
        <div class="blueprint-links-grid">
          ${this.config.artifactLinks.map(link => 
            `<a href="#" class="blueprint-link" data-action="artifact-link" data-route="${link.route}">${this.escapeHtml(link.label)}</a>`
          ).join('')}
        </div>
      </div>` : '';
    
    return `
      <div class="blueprint-detail-panel">
        <header class="blueprint-detail-header">
          <div class="blueprint-header-top">
            ${backButton}
            <h1 class="blueprint-detail-title">Account</h1>
            <div class="blueprint-detail-actions">
              ${actionButtons}
            </div>
          </div>
          ${headerFieldsHTML ? `<div class="blueprint-header-fields">${headerFieldsHTML}</div>` : ''}
        </header>
        <div class="blueprint-detail-content">
          <div class="blueprint-field-group">
            ${detailFieldsHTML}
          </div>
          ${embeddedListsHTML}
          ${artifactLinksHTML}
        </div>
      </div>
    `;
  }

  buildEmbeddedListHTML(embeddedList) {
    const data = this.embeddedData[embeddedList.entity] || [];
    const isEmpty = data.length === 0;
    
    if (isEmpty) {
      return `
        <div class="blueprint-embedded-list" data-entity="${embeddedList.entity}">
          <h3>${this.humanize(embeddedList.entity)}</h3>
          <p class="blueprint-empty-message">No ${embeddedList.entity} records found.</p>
        </div>
      `;
    }
    
    const tableHeaders = embeddedList.columns.map(col => 
      `<th>${this.escapeHtml(col.label)}</th>`
    ).join('');
    
    const tableRows = data.map(record => {
      const cells = embeddedList.columns.map(col => {
        const value = record[col.name];
        const displayValue = this.formatFieldValue(value, col);
        return `<td>${this.escapeHtml(displayValue || '')}</td>`;
      }).join('');
      
      const clickAction = embeddedList.rowClickAction ? 
        `data-action="embedded-row" data-entity="${embeddedList.entity}" data-record-id="${record.id}"` : '';
      
      return `<tr ${clickAction}>${cells}</tr>`;
    }).join('');
    
    return `
      <div class="blueprint-embedded-list" data-entity="${embeddedList.entity}">
        <h3>${this.humanize(embeddedList.entity)} (${data.length})</h3>
        <table class="blueprint-embedded-table">
          <thead>
            <tr>${tableHeaders}</tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
    `;
  }
  
  buildActionButtons() {
    const buttons = [];
    
    
    
    buttons.push(`<button class="blueprint-btn" data-action="close" type="button">Close</button>`);
    
    return buttons.join('');
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // EVENT HANDLING
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Attach event listeners to rendered elements.
   */
  attachEventListeners() {
    // Use event delegation on container
    const handler = (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;
      
      const action = target.dataset.action;
      
      switch (action) {
        case 'edit':
          this.handleEdit();
          break;
        case 'delete':
          this.handleDelete();
          break;
        case 'close':
          this.handleClose();
          break;
        case 'back':
          this.handleBack();
          break;
        case 'artifact-link':
          this.handleArtifactLink(target);
          break;
        case 'embedded-row':
          this.handleEmbeddedRow(target);
          break;
      }
    };
    
    this.container.addEventListener('click', handler);
    this._boundHandlers.set(this.container, handler);
  }
  
  handleEdit() {
    // Emit navigation event to switch to edit mode
    this.emit('blueprint:navigate', {
      route: `/account/${this.recordId}/edit`,
      params: { mode: 'edit', record: this.data }
    });
  }
  
  handleDelete() {
    // Emit action event for shell to handle
    this.emit('blueprint:action', {
      action: 'delete',
      entity: 'account',
      recordId: this.recordId,
      record: this.data
    });
  }
  
  handleClose() {
    // Emit navigation event to return to list
    this.emit('blueprint:navigate', {
      route: '/',
      params: {}
    });
  }

  handleBack() {
    // Navigate to configured back route or default to home
    if (this.config.backRoute) {
      const route = this.config.backRoute.replace(':id', this.recordId);
      this.emit('blueprint:navigate', {
        route: route,
        params: {}
      });
    } else {
      // Default: navigate to home/list
      this.emit('blueprint:navigate', {
        route: '/',
        params: {}
      });
    }
  }

  handleArtifactLink(target) {
    // Navigate to artifact link route
    const route = target.dataset.route.replace(':id', this.recordId);
    this.emit('blueprint:navigate', {
      route: route,
      params: {}
    });
  }

  handleEmbeddedRow(target) {
    // Navigate to embedded record detail
    const entity = target.dataset.entity;
    const recordId = target.dataset.recordId;
    this.emit('blueprint:navigate', {
      route: `/${entity}/${recordId}`,
      params: {}
    });
  }
  
  // ═══════════════════════════════════════════════════════════════════════
  // UTILITIES
  // ═══════════════════════════════════════════════════════════════════════
  
  /**
   * Format field value for display based on field type.
   */
  formatFieldValue(value, field) {
    if (value === null || value === undefined) {
      return '';
    }
    
    switch (field.type) {
      case 'date':
        return this.formatDate(value);
      case 'boolean':
        return value ? 'Yes' : 'No';
      case 'number':
        return this.formatNumber(value);
      default:
        return String(value);
    }
  }
  
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
  
  /**
   * Format number using locale from context.
   */
  formatNumber(num) {
    if (typeof num !== 'number') return String(num);
    try {
      return new Intl.NumberFormat(this.locale).format(num);
    } catch {
      return String(num);
    }
  }

  /**
   * Convert string to human-readable label (for embedded lists).
   */
  humanize(str) {
    return str
      .split(/[_-]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}
  
  // ═══════════════════════════════════════════════════════════════════════
  // EXPORT
  // ═══════════════════════════════════════════════════════════════════════
  
  // Export for module systems
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AccountDetailPanelUI;
  }
  
  // Export to window for browser (replaces any existing instance)
  if (typeof window !== 'undefined') {
    window.AccountDetailPanelUI = AccountDetailPanelUI;
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
    window.PatternRegistry['c2000000-0000-0000-0000-000000000001'] = window.AccountDetailPanelUI;
  }
