/**
 * APP-WIRING-001 - Application Initialization
 * App: Demo Pest Control (a0004000-0000-0000-0000-000000000001)
 * 
 * This file wires the shell to components at runtime.
 * DO NOT EDIT - regenerate using app-wiring-001 generator.
 */

(function(window) {
    'use strict';

    // ═══════════════════════════════════════════════════════════════════════
    // APPLICATION CONFIGURATION
    // ═══════════════════════════════════════════════════════════════════════
    
    // ONE HOME FOR THE DEPLOYMENT SEAM: window.AppContext, written by app-config.js.
    //
    // This block used to carry its OWN supabase url, anon key and context, rendered from the same
    // template data -- so the engine an app talks to had TWO homes, and substituting one at deploy
    // time left the other holding __SUPABASE_URL__. Caught 2026-08-08 the first time a generated
    // Carbon shell was served: app-config.js was correctly pointed at Local, and every component
    // still reported "Invalid supabaseUrl" and tenant_id 'default', because they were reading this
    // copy. Two homes, and the wrong one won.
    //
    // app-config.js is the seam by design -- it is the file the generator ships with placeholders
    // and a deployment substitutes. This one reads it instead of competing with it.
    const APP_CONFIG = {
        appId: 'a0004000-0000-0000-0000-000000000001',
        appTitle: 'Demo Pest Control',

        get supabase() {
            return (window.AppContext && window.AppContext.supabase) || {};
        },

        // Everything else the shell knows about who is asking: tenant_id, user_id, role, locale,
        // timezone, facet. Taken whole rather than key by key so a key added to app-config.js
        // reaches components without this file being regenerated.
        get context() {
            const ctx = Object.assign({}, window.AppContext);
            delete ctx.supabase;
            return ctx;
        }
    };

    if (!window.AppContext) {
        console.error(
            '[App] window.AppContext is not set -- app-config.js must load BEFORE app-init.js. ' +
            'Components will fail to reach the engine.');
    }

    // ═══════════════════════════════════════════════════════════════════════
    // COMPONENT REGISTRY
    // ═══════════════════════════════════════════════════════════════════════
    
    const ComponentRegistry = {
        instances: {},
        currentMounted: null,
        
        /**
         * Initialize a component class with context
         */
        init(ComponentClass, id) {
            if (!ComponentClass) {
                console.error(`[ComponentRegistry] Component class not found for: ${id}`);
                return null;
            }
            
            try {
                const instance = new ComponentClass();
                
                // Pass context including supabase config
                const context = {
                    ...APP_CONFIG.context,
                    supabase: APP_CONFIG.supabase
                };
                
                instance.onContext(context);
                this.instances[id] = instance;
                
                console.log(`[ComponentRegistry] Initialized: ${id}`);
                return instance;
                
            } catch (error) {
                console.error(`[ComponentRegistry] Failed to init ${id}:`, error);
                return null;
            }
        },
        
        /**
         * Mount a component to the content zone
         */
        mount(id) {
            const instance = this.instances[id];
            if (!instance) {
                console.error(`[ComponentRegistry] Component not found: ${id}`);
                return false;
            }
            
            const contentMount = document.getElementById('content-mount');
            if (!contentMount) {
                console.error('[ComponentRegistry] Content mount point not found');
                return false;
            }
            
            // Unmount current component
            this.unmountCurrent();
            
            // Mount new component
            try {
                instance.mount(contentMount);
                this.currentMounted = id;
                console.log(`[ComponentRegistry] Mounted: ${id}`);
                return true;
            } catch (error) {
                console.error(`[ComponentRegistry] Mount failed for ${id}:`, error);
                return false;
            }
        },
        
        /**
         * Unmount the currently mounted component
         */
        unmountCurrent() {
            if (this.currentMounted) {
                const instance = this.instances[this.currentMounted];
                if (instance && instance.container) {
                    try {
                        instance.unmount();
                        console.log(`[ComponentRegistry] Unmounted: ${this.currentMounted}`);
                    } catch (error) {
                        console.error(`[ComponentRegistry] Unmount error:`, error);
                    }
                }
                this.currentMounted = null;
            }
        },
        
        /**
         * Get a component instance
         */
        get(id) {
            return this.instances[id] || null;
        },

        /**
         * SWITCH PERSONA. Sets who is looking and re-contexts every mounted component.
         *
         * The whole mechanism, and it is this small because the persona was made a RUNTIME fact:
         * each component already carries every persona's gate and already re-renders on
         * onContext(). Nothing is refetched -- the rows are unchanged, only which fields get
         * painted. Before 2026-08-08 a persona was baked in at generation and this would have
         * meant loading a different build of every component.
         *
         * In production the facet comes from whoever signed in. A demo switcher is the same call
         * with a dropdown in front of it, which is why this lives on the registry rather than in
         * any one shell's markup: it survives the shell being replaced.
         *
         * @param {string|null} facetCode - a facet_code from app_factory.work_facets, or null for
         *                                  no narrowing (each screen shows its blueprint's own set)
         */
        setFacet(facetCode) {
            const ctx = window.AppContext;
            if (!ctx) {
                console.error('[ComponentRegistry] setFacet: no window.AppContext');
                return false;
            }

            // A NEW OBJECT, never a mutation of the old one. Components decide whether to re-render
            // by comparing the incoming context with the one they already hold; mutating
            // window.AppContext in place makes those two the SAME REFERENCE, so the comparison can
            // never fire and the switcher silently does nothing. That is exactly what happened the
            // first time this was driven for real -- zero network calls, zero visible change.
            const next = Object.assign({}, ctx, { facet: facetCode || null });
            window.AppContext = next;
            console.log('[ComponentRegistry] persona ->', next.facet || '(none)');

            for (const [id, instance] of Object.entries(this.instances)) {
                if (!instance || typeof instance.onContext !== 'function') continue;
                try {
                    instance.onContext(next);
                } catch (error) {
                    // One component refusing a persona must not stop the others switching --
                    // a half-switched screen is harder to read than a single failure.
                    console.error(`[ComponentRegistry] setFacet failed for ${id}:`, error);
                }
            }

            if (window.ShellEvents) {
                window.ShellEvents.emit('persona:changed', { facet: next.facet });
            }
            return true;
        },

        /**
         * The personas this app can actually switch between.
         *
         * DERIVED from the mounted components rather than emitted as its own list. Each component
         * already carries every persona's gate for its entity, so the union of their keys IS the
         * answer -- and it cannot drift from what the components will honour. A separately
         * generated list could say ADMIN_FULL while no component had a gate for it, which is the
         * declared-key-nobody-reads defect this estate keeps finding.
         *
         * Empty means no component carries a gate, and a switcher should not be shown at all.
         */
        availableFacets() {
            const codes = new Set();
            for (const instance of Object.values(this.instances)) {
                const personas = instance && instance.config && instance.config.personas;
                if (personas) Object.keys(personas).forEach(c => codes.add(c));
            }
            return Array.from(codes).sort();
        }
    };

    // ═══════════════════════════════════════════════════════════════════════
    // APPLICATION INITIALIZATION
    // ═══════════════════════════════════════════════════════════════════════
    
    function initializeApp() {
        console.log('[App] Initializing Demo Pest Control...');
        
        // Step 1: Initialize shell
        if (window.AppShell) {
            window.AppShell.init();
        } else {
            console.error('[App] AppShell not found!');
            return;
        }
        
        // Step 2: Initialize all components
        console.log('[App] Initializing components...');
        ComponentRegistry.init(window.AccountBlueprintUI, 'account-list-view');
        ComponentRegistry.init(window.AccountFormUI, 'create-account-form');
        ComponentRegistry.init(window.AccountDetailPanelUI, 'account-detail-view');
        ComponentRegistry.init(window.AccountGateUI, 'deactivate-account-gate');
        
        // Step 3: Register routes
        console.log('[App] Registering routes...');
        window.ShellNavigation.registerRoute('/accounts', function(params) {
            const instance = ComponentRegistry.get('account-list-view');
            if (instance && instance.setRecordId && params.id) {
                instance.setRecordId(params.id);
            }
            ComponentRegistry.mount('account-list-view');
        });
        window.ShellNavigation.registerRoute('/accounts/new', function(params) {
            const instance = ComponentRegistry.get('create-account-form');
            if (instance && instance.setRecordId && params.id) {
                instance.setRecordId(params.id);
            }
            ComponentRegistry.mount('create-account-form');
        });

        // Register placeholder handlers for unimplemented routes

        // Step 4: Set up navigation click handler
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a[data-route]');
            if (link) {
                e.preventDefault();
                const route = link.getAttribute('data-route');
                window.ShellNavigation.navigate(route);
            }
        });
        
        // Step 4b: Listen for blueprint:navigate events from components
        document.addEventListener('blueprint:navigate', function(e) {
            if (e.detail && e.detail.route) {
                console.log('[App] Blueprint navigation event:', e.detail.route);
                window.ShellNavigation.navigate(e.detail.route);
            }
        });
        
        // Step 5: Navigate to initial route
        const hash = window.location.hash.slice(1);
        if (hash && hash !== '/') {
            window.ShellNavigation.navigate(hash, false);
        } else {
            window.ShellNavigation.navigate('/accounts');
        }
        
        console.log('[App] Initialization complete ✓');
    }

    // ═══════════════════════════════════════════════════════════════════════
    // EXPORTS
    // ═══════════════════════════════════════════════════════════════════════
    
    // Expose for debugging
    window.APP_CONFIG = APP_CONFIG;
    window.ComponentRegistry = ComponentRegistry;

    // ═══════════════════════════════════════════════════════════════════════
    // PERSONA SWITCHER
    //
    // Binds the shell's control to ComponentRegistry.setFacet(). Shows itself only when some
    // mounted component actually carries a persona gate -- a switcher over nothing is furniture
    // that lies about what the app can do.
    //
    // The default option is "(no persona)", not the first facet, because that is the app's real
    // starting state: with no sign-in, nothing narrows and every screen shows its blueprint's own
    // curation. Defaulting to a persona would make the unnarrowed case unreachable and hide the
    // difference between "no one is signed in" and "an administrator is".
    // ═══════════════════════════════════════════════════════════════════════

    function wirePersonaSwitcher() {
        const host = document.getElementById('persona-switcher');
        const select = document.getElementById('persona-select');
        if (!host || !select) return;

        const facets = ComponentRegistry.availableFacets();
        if (facets.length === 0) {
            console.log('[PersonaSwitcher] no component carries a persona gate -- switcher stays hidden');
            return;
        }

        select.innerHTML = '<option value="">(no persona)</option>'
            + facets.map(f => `<option value="${f}">${f.replace(/_/g, ' ')}</option>`).join('');

        select.value = (window.AppContext && window.AppContext.facet) || '';
        select.addEventListener('change', (e) => ComponentRegistry.setFacet(e.target.value || null));

        host.hidden = false;
        console.log(`[PersonaSwitcher] ${facets.length} persona(s):`, facets.join(', '));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // STARTUP
    // ═══════════════════════════════════════════════════════════════════════

    function startup() {
        initializeApp();
        // After init, so availableFacets() sees real instances rather than an empty registry.
        wirePersonaSwitcher();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startup);
    } else {
        startup();
    }

})(window);
