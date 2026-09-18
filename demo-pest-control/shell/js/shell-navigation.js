/**
 * APP-SHELL-LEFT-NAV-001 - Navigation Management
 * Manages navigation and routing for the shell
 * Generated for: Demo Pest Control
 */

(function(window) {
    'use strict';
    
    /**
     * Shell Navigation Manager
     * Handles navigation between views and routes
     */
    const ShellNavigation = {
        _routes: {},
        _currentRoute: null,
        
        /**
         * Initialize navigation system
         */
        init() {
            console.log('[ShellNavigation] Navigation system initialized');
            
            // Set up browser back/forward handling
            window.addEventListener('popstate', (event) => {
                if (event.state && event.state.route) {
                    this.navigate(event.state.route, false);
                }
            });

            // THE HASH IS THE TRUTH (R1 sweep, 2026-08-28 -- the s37 bookmarked-URL fix's
            // missing half): back/forward onto an entry this router did not create (the
            // initial load, a typed hash, a raw location.hash write) traversed with NO
            // routing -- the page kept the previous screen's mounts and the face kept the
            // previous record, or never received one at all (his "blank on load"). Any
            // hash change the router did not make itself now routes; navigate()'s own
            // pushState never fires hashchange, so there is no loop.
            window.addEventListener('hashchange', () => {
                const path = (window.location.hash || '').slice(1);
                if (!path || path === this._currentRoute) return;
                this.navigate(path, false);
            });
        },
        
        /**
         * Register a route
         * @param {string} path - Route path
         * @param {Function} handler - Route handler function
         */
        registerRoute(path, handler) {
            this._routes[path] = handler;
            console.log('[ShellNavigation] Route registered:', path);
        },
        
        /**
         * Match a path against registered route patterns
         * @param {string} path - Path to match
         * @returns {Object|null} Match result with handler and params, or null
         * @private
         */
        _matchRoute(path) {
            // THE ROUTE'S QUERY (SJ s52 leg 12, 2026-09-17; the Details sheet): a hash may carry `?key=value` after the
            // path -- /accounts/<id>?location=<loc>. The path is matched WITHOUT it and the query's keys ride on the
            // params beside the route's own (`:id` first, so the first key stays the record's id). Before this the query
            // was swallowed into `:id` ("<id>?location=<loc>") and the record opened empty.
            const qi = String(path).indexOf('?');
            const bare = qi === -1 ? path : path.slice(0, qi);
            const query = {};
            if (qi !== -1) {
                path.slice(qi + 1).split('&').forEach((kv) => {
                    if (!kv) return;
                    const eq = kv.indexOf('=');
                    const k = decodeURIComponent(eq === -1 ? kv : kv.slice(0, eq));
                    const v = eq === -1 ? '' : decodeURIComponent(kv.slice(eq + 1));
                    if (k) query[k] = v;
                });
            }
            const withQuery = (params) => {
                Object.keys(query).forEach((k) => { if (!(k in params)) params[k] = query[k]; });
                return params;
            };

            // First try exact match
            if (this._routes[bare]) {
                return { handler: this._routes[bare], params: withQuery({}) };
            }

            // Try pattern matching
            for (const [pattern, handler] of Object.entries(this._routes)) {
                const paramNames = [];
                const regexStr = pattern.replace(/:([^/]+)/g, (_, name) => {
                    paramNames.push(name);
                    return '([^/]+)';
                });
                const regex = new RegExp(`^${regexStr}$`);
                const match = bare.match(regex);

                if (match) {
                    const params = {};
                    paramNames.forEach((name, i) => params[name] = match[i + 1]);
                    return { handler, params: withQuery(params) };
                }
            }

            return null;
        },
        
        /**
         * Navigate to a route
         * @param {string} path - Route path
         * @param {boolean} pushState - Whether to push to browser history
         * @param {Object} data - Additional navigation data
         */
        navigate(path, pushState = true, data = {}) {
            console.log('[ShellNavigation] Navigate to:', path);
            
            // Match route with pattern support
            const match = this._matchRoute(path);
            if (!match) {
                console.warn('[ShellNavigation] Route not found:', path);
                this._handleNotFound(path);
                return;
            }
            
            const { handler, params } = match;
            
            // Update current route
            this._currentRoute = path;
            
            // Update browser history
            if (pushState) {
                const state = { route: path, data };
                history.pushState(state, '', `#${path}`);
            }
            
            // Execute route handler with params
            try {
                handler(params);
            } catch (error) {
                console.error('[ShellNavigation] Route handler error:', error);
                if (window.ShellEvents) {
                    window.ShellEvents.emit('error', {
                        type: 'navigation',
                        route: path,
                        error: error.message
                    });
                }
            }
            
            // Emit navigation event
            if (window.ShellEvents) {
                window.ShellEvents.emit('navigate', {
                    path,
                    params,
                    data,
                    timestamp: Date.now()
                });
            }
            
            // Update state
            if (window.ShellState) {
                window.ShellState.set('currentRoute', path);
            }
        },
        
        /**
         * Get current route
         * @returns {string|null} Current route path
         */
        getCurrentRoute() {
            return this._currentRoute;
        },
        
        /**
         * Get all registered routes
         * @returns {string[]} Array of route paths
         */
        getRoutes() {
            return Object.keys(this._routes);
        },
        
        /**
         * Handle 404 - Route not found
         * @private
         */
        _handleNotFound(path) {
            console.error('[ShellNavigation] 404 - Route not found:', path);
            
            if (window.ShellEvents) {
                window.ShellEvents.emit('error', {
                    type: 'navigation',
                    code: 404,
                    message: `Route not found: ${path}`
                });
            }
            
            // Try to navigate to home/default route
            if (this._routes['/'] || this._routes['home']) {
                this.navigate(this._routes['/'] ? '/' : 'home', true);
            }
        },
        
        /**
         * Go back in history
         */
        back() {
            window.history.back();
        },
        
        /**
         * Go forward in history
         */
        forward() {
            window.history.forward();
        },
        
        /**
         * Reload current route
         */
        reload() {
            if (this._currentRoute) {
                this.navigate(this._currentRoute, false);
            }
        }
    };
    
    // Expose to window
    window.ShellNavigation = ShellNavigation;
    
})(window);
