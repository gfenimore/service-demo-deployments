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
            // First try exact match
            if (this._routes[path]) {
                return { handler: this._routes[path], params: {} };
            }
            
            // Try pattern matching
            for (const [pattern, handler] of Object.entries(this._routes)) {
                const paramNames = [];
                const regexStr = pattern.replace(/:([^/]+)/g, (_, name) => {
                    paramNames.push(name);
                    return '([^/]+)';
                });
                const regex = new RegExp(`^${regexStr}$`);
                const match = path.match(regex);
                
                if (match) {
                    const params = {};
                    paramNames.forEach((name, i) => params[name] = match[i + 1]);
                    return { handler, params };
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
