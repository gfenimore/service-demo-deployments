/**
 * FILTER-PANEL-001: Composable Filter Panel Pattern
 * Part of the Pattern Factory Language
 * 
 * This is an ATOMIC pattern that:
 * - Manages filter state
 * - Emits events for other patterns
 * - Can be composed with ANY view pattern
 */

(function () {
  'use strict';

  // The markup this panel renders, produced by filter-panel.html.hbs during generation. It is
  // handed over rather than duplicated so the .html template stays the single source of the markup.
  const MARKUP = "<!-- FILTER-PANEL-001: Composable Filter Panel Pattern -->\n<!-- Part of the Pattern Factory Language -->\n<div id=\"account-filters\" class=\"filter-panel filter-panel--minimal\">\n    <div class=\"filter-panel__header\">\n        <h3 class=\"filter-panel__title\">Account Filters</h3>\n    </div>\n    \n    <div class=\"filter-panel__body\">\n        \n        <div class=\"filter-panel__controls filter-panel__controls--horizontal\">\n            <div class=\"filter-grid filter-grid--cols-4\">\n                <div class=\"filter-control\" data-field=\"status\">\n                    <label class=\"filter-label\" for=\"filter-status\">\n                        Status\n                        \n                    </label>\n                    \n                    <select \n                        id=\"filter-status\" \n                        name=\"status\"\n                        class=\"filter-input filter-input--select\"\n                        \n                        data-operator=\"eq\">\n                        <option value=\"\">All Status</option>\n                        <option value=\"active\">Active</option>\n                        <option value=\"inactive\">Inactive</option>\n                    </select>\n                    \n                    \n                    \n                    \n                    \n                </div>\n                <div class=\"filter-control\" data-field=\"billing_city\">\n                    <label class=\"filter-label\" for=\"filter-billing_city\">\n                        City\n                        \n                    </label>\n                    \n                    \n                    \n                    <input \n                        type=\"text\"\n                        id=\"filter-billing_city\"\n                        name=\"billing_city\"\n                        class=\"filter-input filter-input--text\"\n                        placeholder=\"Search Billing City...\"\n                        \n                        data-operator=\"ilike\">\n                    \n                    \n                    \n                </div>\n                <div class=\"filter-control\" data-field=\"service_frequency\">\n                    <label class=\"filter-label\" for=\"filter-service_frequency\">\n                        Service frequency\n                        \n                    </label>\n                    \n                    <select \n                        id=\"filter-service_frequency\" \n                        name=\"service_frequency\"\n                        class=\"filter-input filter-input--select\"\n                        \n                        data-operator=\"eq\">\n                        <option value=\"\">All Service frequency</option>\n                        <option value=\"annual\">Annual</option>\n                        <option value=\"monthly\">Monthly</option>\n                        <option value=\"quarterly\">Quarterly</option>\n                    </select>\n                    \n                    \n                    \n                    \n                    \n                </div>\n                <div class=\"filter-control\" data-field=\"geographic_areas\">\n                    <label class=\"filter-label\" for=\"filter-geographic_areas\">\n                        Geographic area\n                        \n                    </label>\n                    \n                    <select \n                        id=\"filter-geographic_areas\" \n                        name=\"geographic_areas\"\n                        class=\"filter-input filter-input--select\"\n                        \n                        data-operator=\"cs\">\n                        <option value=\"\">All Geographic area</option>\n                        <option value=\"Bree-land\">Bree-land</option>\n                        <option value=\"The Shire\">The Shire</option>\n                    </select>\n                    \n                    \n                    \n                    \n                    \n                </div>\n            </div>\n        </div>\n        \n        <div class=\"filter-panel__actions\">\n            \n            <button class=\"btn btn--secondary filter-clear\">\n                Clear All\n            </button>\n            \n        </div>\n    </div>\n    \n    <div class=\"filter-panel__status\">\n        <span class=\"active-filter-count\">No filters applied</span>\n    </div>\n</div>\n\n<!-- This is a composable pattern - it emits events for other patterns to consume -->\n<!-- Events emitted: filter-changed, filter-cleared, filter-saved, filter-loaded -->";

class AccountFilterPanelUI {
    constructor(config) {
        this.id = 'account-filters';
        this.config = {
            filters: [
  {
    "field": "status",
    "name": "status",
    "label": "Status",
    "type": "select",
    "operator": "eq",
    "placeholder": "Filter by Status",
    "options": [
      {
        "label": "Active",
        "value": "active"
      },
      {
        "label": "Inactive",
        "value": "inactive"
      }
    ]
  },
  {
    "field": "billing_city",
    "name": "billing_city",
    "label": "City",
    "type": "text",
    "operator": "ilike",
    "placeholder": "Search Billing City..."
  },
  {
    "field": "service_frequency",
    "name": "service_frequency",
    "label": "Service frequency",
    "type": "select",
    "operator": "eq",
    "placeholder": "Filter by Service Frequency",
    "options": [
      {
        "label": "Annual",
        "value": "annual"
      },
      {
        "label": "Monthly",
        "value": "monthly"
      },
      {
        "label": "Quarterly",
        "value": "quarterly"
      }
    ]
  },
  {
    "field": "geographic_areas",
    "name": "geographic_areas",
    "label": "Geographic area",
    "type": "select",
    "operator": "cs",
    "placeholder": "Filter by Geographic Areas",
    "options": [
      {
        "label": "Bree-land",
        "value": "Bree-land"
      },
      {
        "label": "The Shire",
        "value": "The Shire"
      }
    ]
  }
],
            features: {
  "savedFilters": false,
  "quickFilters": false,
  "clearAll": true,
  "autoApply": true,
  "collapsible": false
},
            events: {
  "eventPrefix": "filter"
},
            layout: {
  "orientation": "horizontal",
  "columns": 4
}
        };
        
        // A LIST of conditions, not a dictionary keyed by field.
        //
        // WAS `{}` keyed by field until 2026-08-08, and that shape silently decided the filter
        // algebra: one condition per field, so `balance > 100 AND balance < 500` was
        // INEXPRESSIBLE -- the second write to currentFilters['balance'] overwrote the first.
        // Nobody chose that; it fell out of the data structure.
        //
        // Uniqueness is now (field, operator). Two conditions on one field with DIFFERENT
        // operators coexist, which is exactly a range. Two with the SAME operator still replace
        // each other, which is what re-typing in one box should do.
        //
        // Changed while NOTHING consumes the emitted payload. Once a consumer exists this is a
        // breaking contract change. HITL 2026-08-08: "D3 YES" -- fix it now.
        this.conditions = [];
        this.savedFilterSets = this.loadSavedFilters();
        this.container = null;
        this.root = null;
        this._mounted = false;
        this._docHandlers = [];
        // NOTHING happens in the constructor. It used to call init(), which queried the DOM for
        // markup that had to already exist -- so `new FilterPanel()` threw inside any shell that
        // mounted it. Work begins at mount(container), like every other pattern.
    }

    // ═══════════════════════════════════════════════════════════════════
    // REQUIRED: mount(container)
    // ═══════════════════════════════════════════════════════════════════
    mount(container) {
        if (this._mounted) {
            throw new Error('Component is already mounted. Call unmount() first.');
        }
        if (!container) {
            throw new Error('mount(container) requires a container element');
        }

        this.container = container;
        container.innerHTML = MARKUP;
        // Every query below is scoped to this root. They used to run against `document`, so two
        // filter panels on one page would have bound each other's inputs.
        this.root = container.querySelector('.filter-panel') || container.firstElementChild;

        this.setupEventListeners();
        this.listenForCommands();
        this.loadDefaultValues();
        this.updateStatus();
        this._mounted = true;

        this.emit('component:ready', {
            id: this.id,
            type: 'filter-panel',
            canEmit: ['filter-changed', 'filter-cleared', 'filter-saved'],
            canReceive: ['reset-filters', 'apply-filter-set']
        });

        console.log('[AccountFilterPanelUI] Mounted successfully');
        return this;
    }

    // ═══════════════════════════════════════════════════════════════════
    // REQUIRED: unmount()
    // ═══════════════════════════════════════════════════════════════════
    unmount() {
        if (!this._mounted) {
            console.warn('[AccountFilterPanelUI] Component not mounted, nothing to unmount');
            return;
        }
        // Document-level listeners are the ones that outlive the container, so they are tracked
        // and removed explicitly. Anything bound inside the container dies with its innerHTML.
        this._docHandlers.forEach(([type, fn]) => document.removeEventListener(type, fn));
        this._docHandlers = [];

        if (this.container) this.container.innerHTML = '';
        this.container = null;
        this.root = null;
        this._mounted = false;
        console.log('[AccountFilterPanelUI] Unmounted and cleaned up');
    }

    // ═══════════════════════════════════════════════════════════════════
    // REQUIRED: onContext(context)
    // ═══════════════════════════════════════════════════════════════════
    onContext(context) {
        this.context = context || {};
        // A filter panel reads no data of its own -- it emits filter-changed for whichever view
        // pattern consumes it. It takes the context so the contract is uniform across patterns.
        return this;
    }

    // ═══════════════════════════════════════════════════════════════════
    // REQUIRED: getMetadata()
    // ═══════════════════════════════════════════════════════════════════
    getMetadata() {
        return {
            id: this.id,
            pattern: 'FILTER-PANEL',
            blueprint_id: 'c4000000-0000-0000-0000-000000000001',
            entity: 'account',
            filterCount: (this.config.filters || []).length,
            mounted: this._mounted
        };
    }
    
    setupEventListeners() {
        const panel = this.root;
        
        // Quick filters
        panel.querySelectorAll('.quick-filter-chip').forEach(chip => {
            chip.addEventListener('click', (e) => this.handleQuickFilter(e));
        });
        
        // Input changes
        panel.querySelectorAll('.filter-input').forEach(input => {
            const eventType = input.type === 'text' ? 'input' : 'change';
            input.addEventListener(eventType, (e) => this.handleFilterChange(e));
        });
        
        // Multi-select dropdowns
        panel.querySelectorAll('.multi-select-trigger').forEach(trigger => {
            trigger.addEventListener('click', (e) => this.toggleMultiSelect(e));
        });
        
        panel.querySelectorAll('.multi-select-dropdown input').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleMultiSelectChange(e));
        });
        
        // Action buttons
        const applyBtn = panel.querySelector('.filter-apply');
        if (applyBtn) {
            applyBtn.addEventListener('click', () => this.applyFilters());
        }
        
        const clearBtn = panel.querySelector('.filter-clear');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearFilters());
        }
        
        const saveBtn = panel.querySelector('.filter-save');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveFilterSet());
        }
        
        const savedSelect = panel.querySelector('.saved-filter-select');
        if (savedSelect) {
            savedSelect.addEventListener('change', (e) => this.loadFilterSet(e.target.value));
        }
        
        // Collapsible panel
        const toggleBtn = panel.querySelector('.filter-panel__toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.togglePanel());
        }
    }
    
    handleFilterChange(e) {
        const field = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const operator = e.target.dataset.operator || 'equals';
        
        if (value === '' || value === false) {
            // Only THIS operator's condition goes. Clearing a "from" box must not also clear "to".
            this.conditions = this.conditions.filter(
                c => !(c.field === field && c.operator === operator));
        } else {
            this.setCondition(field, operator, value);
        }
        
        if (this.config.features.autoApply !== false) {
            this.applyFilters();
        }
        
        this.updateStatus();
    }
    
    handleMultiSelectChange(e) {
        const field = e.target.name;
        const values = [];
        
        const checkboxes = this.root.querySelectorAll(`input[name="${field}"]:checked`);
        checkboxes.forEach(cb => values.push(cb.value));
        
        if (values.length === 0) {
            this.conditions = this.conditions.filter(
                c => !(c.field === field && c.operator === 'in'));
        } else {
            // OR within one field, expressed as IN -- the same semantics list-view already applies
            // to a persona's default_filters, so a consumer reconciles one algebra, not two.
            this.setCondition(field, 'in', values);
        }
        
        this.updateMultiSelectLabel(field, values.length);
        
        if (this.config.features.autoApply !== false) {
            this.applyFilters();
        }
        
        this.updateStatus();
    }
    
    handleQuickFilter(e) {
        const chip = e.target;
        const filterType = chip.dataset.filter;
        
        chip.classList.toggle('active');
        
        // Apply pre-defined quick filters
        switch(filterType) {
            case 'incomplete':
                this.setCondition('status', 'not_equals', 'completed');
                break;
            case 'my-items':
                // This would need user context
                this.setCondition('assignee', 'equals', 'current_user');
                break;
            case 'this-sprint':
                this.setCondition('sprint', 'equals', 'current');
                break;
        }
        
        this.applyFilters();
    }
    
    toggleMultiSelect(e) {
        const trigger = e.target.closest('.multi-select-trigger');
        const dropdown = trigger.nextElementSibling;
        dropdown.hidden = !dropdown.hidden;
        
        // Close other dropdowns
        this.root.querySelectorAll('.multi-select-dropdown').forEach(dd => {
            if (dd !== dropdown) dd.hidden = true;
        });
    }
    
    updateMultiSelectLabel(field, count) {
        const trigger = this.root.querySelector(`.multi-select-trigger[data-field="${field}"] .selected-count`);
        if (trigger) {
            const filter = this.config.filters.find(f => f.field === field);
            trigger.textContent = count > 0 ? `${count} selected` : `All ${filter.label}`;
        }
    }
    
    /**
     * Add or replace a condition. Keyed by (field, operator) -- see the note on this.conditions.
     */
    setCondition(field, operator, value) {
        const i = this.conditions.findIndex(c => c.field === field && c.operator === operator);
        const cond = { field: field, operator: operator, value: value };
        if (i === -1) { this.conditions.push(cond); } else { this.conditions[i] = cond; }
    }

    /** How many FIELDS are constrained. A range on one field is ONE filter to a person. */
    filteredFieldCount() {
        return new Set(this.conditions.map(c => c.field)).size;
    }

    /**
     * Accept either shape. Saved sets already in a browser's localStorage, and apply-filter-set
     * events from a sibling, may still carry the pre-2026-08-08 dictionary.
     */
    toConditions(filters) {
        if (Array.isArray(filters)) return filters.map(c => ({ ...c }));
        if (!filters || typeof filters !== 'object') return [];
        return Object.entries(filters).map(([field, cfg]) => ({
            field: field,
            operator: (cfg && cfg.operator) || 'equals',
            value: cfg ? cfg.value : cfg
        }));
    }

    applyFilters() {
        // Build filter object for emission
        // THE COMBINATOR IS STATED, not inferred from the shape. Conditions are ANDed across the
        // list; OR is expressed WITHIN one condition by the `in` operator. That is the same algebra
        // list-view already applies to a persona's default_filters.
        //
        // !! A CONSUMER MUST APPLY THESE UNDER THE PERSONA'S FILTERS, NEVER MERGED WITH THEM.
        // A user filter may narrow within the role's scope and can never widen past it. Merging
        // the two sets into one bag is a privilege leak wearing a filter control. (HITL ruling,
        // 2026-08-08 -- see .project-models/ER/pattern-interface-and-customization.md sec 6.)
        const filterData = {
            combinator: 'and',
            conditions: this.conditions.map(c => ({ ...c })),
            timestamp: Date.now(),
            source: this.id
        };
        
        // Emit to specific target or broadcast
        if (this.config.events?.emitTo) {
            this.emitTo(this.config.events.emitTo, 'filter-changed', filterData);
        } else {
            this.emit('filter-changed', filterData);
        }
        
        console.log('Filters applied:', filterData);
    }
    
    clearFilters() {
        this.conditions = [];
        
        // Reset all inputs
        const panel = this.root;
        panel.querySelectorAll('.filter-input').forEach(input => {
            if (input.type === 'checkbox') {
                input.checked = false;
            } else {
                input.value = '';
            }
        });
        
        // Clear quick filters
        panel.querySelectorAll('.quick-filter-chip').forEach(chip => {
            chip.classList.remove('active');
        });
        
        // Clear multi-selects
        panel.querySelectorAll('.multi-select-dropdown input').forEach(cb => {
            cb.checked = false;
        });
        
        this.updateStatus();
        
        // Emit clear event
        this.emit('filter-cleared', {
            timestamp: Date.now(),
            source: this.id
        });
        
        // Auto-apply means apply even when cleared
        if (this.config.features.autoApply !== false) {
            this.applyFilters();
        }
    }
    
    saveFilterSet() {
        const name = prompt('Enter a name for this filter set:');
        if (!name) return;
        
        const filterSet = {
            name: name,
            conditions: this.conditions.map(c => ({ ...c })),
            created: new Date().toISOString()
        };
        
        this.savedFilterSets.push(filterSet);
        this.saveSavedFilters();
        this.updateSavedFiltersList();
        
        this.emit('filter-saved', filterSet);
    }
    
    loadFilterSet(name) {
        if (!name) return;
        
        const filterSet = this.savedFilterSets.find(fs => fs.name === name);
        if (!filterSet) return;
        
        this.conditions = this.toConditions(filterSet.conditions || filterSet.filters);
        this.updateUIFromFilters();
        this.applyFilters();
        
        this.emit('filter-loaded', filterSet);
    }
    
    updateUIFromFilters() {
        // Update all inputs to match current filters
        this.conditions.forEach(config => {
            const field = config.field;
            // Prefer the input declaring this operator, so a range round-trips into the right box.
            const input = this.root.querySelector(`[name="${field}"][data-operator="${config.operator}"]`)
                       || this.root.querySelector(`[name="${field}"]`);
            if (input) {
                if (input.type === 'checkbox') {
                    input.checked = config.value;
                } else if (Array.isArray(config.value)) {
                    // Multi-select
                    config.value.forEach(val => {
                        const cb = this.root.querySelector(`input[name="${field}"][value="${val}"]`);
                        if (cb) cb.checked = true;
                    });
                } else {
                    input.value = config.value;
                }
            }
        });
        
        this.updateStatus();
    }
    
    updateStatus() {
        const count = this.filteredFieldCount();
        const statusEl = this.root.querySelector('.active-filter-count');
        
        if (statusEl) {
            if (count === 0) {
                statusEl.textContent = 'No filters applied';
            } else if (count === 1) {
                statusEl.textContent = '1 filter applied';
            } else {
                statusEl.textContent = `${count} filters applied`;
            }
        }
    }
    
    togglePanel() {
        const panel = this.root;
        const body = panel.querySelector('.filter-panel__body');
        const icon = panel.querySelector('.toggle-icon');
        
        body.hidden = !body.hidden;
        icon.textContent = body.hidden ? '▶' : '▼';
    }
    
    loadDefaultValues() {
        this.config.filters.forEach(filter => {
            if (filter.defaultValue !== undefined) {
                this.setCondition(filter.field, filter.operator || 'equals', filter.defaultValue);
            }
        });
        
        if (this.conditions.length > 0) {
            this.updateUIFromFilters();
            if (this.config.features.autoApply !== false) {
                this.applyFilters();
            }
        }
    }
    
    // Saved filters persistence
    loadSavedFilters() {
        const saved = localStorage.getItem(`${this.id}-saved-filters`);
        return saved ? JSON.parse(saved) : [];
    }
    
    saveSavedFilters() {
        localStorage.setItem(`${this.id}-saved-filters`, JSON.stringify(this.savedFilterSets));
    }
    
    updateSavedFiltersList() {
        const select = this.root.querySelector('.saved-filter-select');
        if (!select) return;
        
        // Clear existing options except the first
        while (select.options.length > 1) {
            select.remove(1);
        }
        
        // Add saved filter sets
        this.savedFilterSets.forEach(fs => {
            const option = document.createElement('option');
            option.value = fs.name;
            option.textContent = fs.name;
            select.appendChild(option);
        });
    }
    
    // Event emission (composability magic!)
    emit(eventName, data) {
        const event = new CustomEvent(`${this.config.events?.eventPrefix || 'filter'}:${eventName}`, {
            detail: data,
            bubbles: true
        });
        document.dispatchEvent(event);
    }
    
    emitTo(targetId, eventName, data) {
        const target = document.getElementById(targetId);
        if (target) {
            const event = new CustomEvent(eventName, {
                detail: data,
                bubbles: false
            });
            target.dispatchEvent(event);
        }
    }
    
    // Listen for external commands (from orchestrator).
    //
    // These are legitimately document-level -- a filter panel is a COMPOSABLE pattern that talks
    // to siblings it cannot reference directly, so it broadcasts and listens globally. But a
    // document listener outlives the container, so each one is tracked and removed by unmount();
    // otherwise every mount/unmount cycle would leak a handler that still answers to this.id.
    //
    // ⚠ Called from mount(). It was defined and NEVER CALLED before, so reset-filters and
    // apply-filter-set were dead: the panel advertised canReceive for commands it never heard.
    listenForCommands() {
        const onReset = (e) => {
            if (e.detail && e.detail.target === this.id) this.clearFilters();
        };
        const onApplySet = (e) => {
            if (e.detail && e.detail.target === this.id) {
                this.conditions = this.toConditions(e.detail.conditions || e.detail.filters);
                this.updateUIFromFilters();
                this.applyFilters();
            }
        };
        document.addEventListener('command:reset-filters', onReset);
        document.addEventListener('command:apply-filter-set', onApplySet);
        this._docHandlers.push(['command:reset-filters', onReset],
                               ['command:apply-filter-set', onApplySet]);
    }
    
    // Get current state (for orchestrator)
    getState() {
        return {
            combinator: 'and',
            conditions: this.conditions.map(c => ({ ...c })),
            savedSets: this.savedFilterSets
        };
    }
}

  // NO AUTO-INSTANTIATION. This used to `new FilterPanel()` on DOMContentLoaded, which both
  // assumed the markup was already on the page and gave a shell no way to place the panel.
  // A shell instantiates and mounts it, like every other pattern.

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AccountFilterPanelUI;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SHELL CONTRACT -- register this component so a shell can mount it
  // without knowing its class name. Keyed by blueprint id, which is what
  // app_components.blueprint_id gives the shell. See
  // .project-models/architecture/06-blueprint-processing-gates.md gate 6.
  // ═══════════════════════════════════════════════════════════════════════
  if (typeof window !== 'undefined') {
    window.AccountFilterPanelUI = AccountFilterPanelUI;
    window.PatternRegistry = window.PatternRegistry || {};
    window.PatternRegistry['c4000000-0000-0000-0000-000000000001'] = AccountFilterPanelUI;
  }
})();
