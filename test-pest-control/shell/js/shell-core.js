/**
 * APP-SHELL-LEFT-NAV-001 - Core Shell API
 * Main API for interacting with the application shell
 * Generated for: Demo Pest Control
 */

(function(window) {
    'use strict';
    
    /**
     * AppShell - Main Shell API
     * Global interface for pattern mounting, events, and state management
     */
    const AppShell = {
        version: '1.0.0',
        shellType: 'left-nav',
        _initialized: false,
        _mountPoints: {},
        
        /**
         * Initialize the shell
         */
        init() {
            if (this._initialized) {
                console.warn('[AppShell] Already initialized');
                return;
            }
            
            console.log('[AppShell] Initializing v' + this.version);
            
            // Initialize subsystems
            if (window.ShellState) {
                window.ShellState.init();
            }
            
            if (window.ShellEvents) {
                window.ShellEvents.init();
            }
            
            if (window.ShellNavigation) {
                window.ShellNavigation.init();
            }
            
            // Discover mount points
            this._discoverMountPoints();
            
            // Set up mobile menu toggle (if on mobile)
            this._setupMobileMenu();
            
            // Initialize theme from localStorage
            this.initTheme();
            
            this._initialized = true;
            
            // Emit ready event
            if (window.ShellEvents) {
                window.ShellEvents.emit('shell:ready', {
                    version: this.version,
                    shellType: this.shellType,
                    mountPoints: Object.keys(this._mountPoints)
                });
            }
            
            console.log('[AppShell] Initialization complete');
        },
        
        /**
         * Mount a pattern to a zone
         * @param {string} zoneId - Mount point zone ID (e.g., 'header-context', 'sidebar', 'content')
         * @param {HTMLElement|string} pattern - Pattern element or HTML string
         * @returns {boolean} Success status
         */
        mount(zoneId, pattern) {
            console.log('[AppShell] Mount pattern to zone:', zoneId);
            
            const mountPoint = this._mountPoints[zoneId];
            if (!mountPoint) {
                console.error('[AppShell] Mount point not found:', zoneId);
                return false;
            }
            
            try {
                // Clear existing content
                mountPoint.innerHTML = '';
                
                // Mount new pattern
                if (typeof pattern === 'string') {
                    mountPoint.innerHTML = pattern;
                } else if (pattern instanceof HTMLElement) {
                    mountPoint.appendChild(pattern);
                } else {
                    console.error('[AppShell] Invalid pattern type');
                    return false;
                }
                
                // Emit mount event
                if (window.ShellEvents) {
                    window.ShellEvents.emit('pattern:mounted', {
                        zone: zoneId,
                        patternId: pattern.id || 'anonymous',
                        timestamp: Date.now()
                    });
                }
                
                return true;
            } catch (error) {
                console.error('[AppShell] Mount error:', error);
                if (window.ShellEvents) {
                    window.ShellEvents.emit('error', {
                        type: 'mount',
                        zone: zoneId,
                        error: error.message
                    });
                }
                return false;
            }
        },
        
        /**
         * Unmount a pattern from a zone
         * @param {string} zoneId - Mount point zone ID
         * @returns {boolean} Success status
         */
        unmount(zoneId) {
            console.log('[AppShell] Unmount pattern from zone:', zoneId);
            
            const mountPoint = this._mountPoints[zoneId];
            if (!mountPoint) {
                console.error('[AppShell] Mount point not found:', zoneId);
                return false;
            }
            
            try {
                mountPoint.innerHTML = '';
                
                // Emit unmount event
                if (window.ShellEvents) {
                    window.ShellEvents.emit('pattern:unmounted', {
                        zone: zoneId,
                        timestamp: Date.now()
                    });
                }
                
                return true;
            } catch (error) {
                console.error('[AppShell] Unmount error:', error);
                return false;
            }
        },
        
        /**
         * Get a mount point element
         * @param {string} zoneId - Mount point zone ID
         * @returns {HTMLElement|null} Mount point element
         */
        getMountPoint(zoneId) {
            return this._mountPoints[zoneId] || null;
        },
        
        /**
         * Emit a custom event
         * @param {string} eventName - Event name
         * @param {*} data - Event data
         */
        emit(eventName, data) {
            if (window.ShellEvents) {
                window.ShellEvents.emit(eventName, data);
            }
        },
        
        /**
         * Subscribe to an event
         * @param {string} eventName - Event name
         * @param {Function} handler - Event handler
         * @returns {Function} Unsubscribe function
         */
        on(eventName, handler) {
            if (window.ShellEvents) {
                return window.ShellEvents.on(eventName, handler);
            }
            return () => {};
        },
        
        /**
         * Get shell state
         * @param {string} key - State key
         * @returns {*} State value
         */
        getState(key) {
            if (window.ShellState) {
                return window.ShellState.get(key);
            }
            return undefined;
        },
        
        /**
         * Set shell state
         * @param {string} key - State key
         * @param {*} value - State value
         */
        setState(key, value) {
            if (window.ShellState) {
                window.ShellState.set(key, value);
            }
        },
        
        /**
         * Navigate to a route
         * @param {string} path - Route path
         * @param {Object} data - Navigation data
         */
        navigate(path, data) {
            if (window.ShellNavigation) {
                window.ShellNavigation.navigate(path, true, data);
            }
        },
        
        /**
         * Discover and register mount points
         * @private
         */
        _discoverMountPoints() {
            const mountPoints = document.querySelectorAll('.pattern-mount[data-zone]');
            
            mountPoints.forEach(element => {
                const zoneId = element.getAttribute('data-zone');
                this._mountPoints[zoneId] = element;
                console.log('[AppShell] Discovered mount point:', zoneId);
            });
            
            // Also register by ID for common mount points
            const commonMountPoints = [
                'header-context-mount',
                'header-actions-mount',
                'sidebar-mount',
                'content-mount'
            ];
            
            commonMountPoints.forEach(id => {
                const element = document.getElementById(id);
                if (element && !this._mountPoints[id]) {
                    const zone = element.getAttribute('data-zone') || id.replace('-mount', '');
                    this._mountPoints[zone] = element;
                }
            });
        },
        
        /**
         * Set up mobile menu toggle
         * @private
         */
        _setupMobileMenu() {
            // On mobile, add a menu toggle button if needed
            if (window.innerWidth <= 768) {
                console.log('[AppShell] Mobile layout detected');
                
                // Check if sidebar exists
                const sidebar = document.getElementById('app-sidebar');
                if (sidebar) {
                    // Start closed on mobile
                    sidebar.classList.remove('is-open');
                }
            }
        },
        
        /**
         * Toggle sidebar visibility (primarily for mobile)
         */
        toggleSidebar() {
            if (window.ShellEvents) {
                window.ShellEvents.emit('sidebar:toggle');
            }
        },
        
        /**
         * Switch application theme
         * @param {string} themeName - Theme name ('bw', 'material-blue', etc.)
         *                            'bw' or null/undefined = default B&W
         */
        setTheme(themeName) {
            const themeLink = document.getElementById('theme-override');
            
            if (!themeLink) {
                console.error('[AppShell] Theme link element not found');
                return;
            }
            
            if (!themeName || themeName === 'bw') {
                // B&W is default - clear any theme override
                themeLink.href = '';
                themeLink.dataset.theme = 'bw';
            } else {
                // Load theme CSS
                themeLink.href = `themes/theme-${themeName}.css`;
                themeLink.dataset.theme = themeName;
            }
            
            // Persist preference
            try {
                localStorage.setItem('app-theme', themeName || 'bw');
            } catch (e) {
                console.warn('[AppShell] localStorage not available:', e);
            }
            
            // Emit event for any listeners
            this.emit('theme:changed', { theme: themeName || 'bw' });
            
            console.log('[AppShell] Theme set to:', themeName || 'bw');
        },
        
        /**
         * Get current theme
         * @returns {string} Current theme name
         */
        getTheme() {
            const themeLink = document.getElementById('theme-override');
            return themeLink?.dataset?.theme || 'bw';
        },
        
        /**
         * Initialize theme from localStorage (called on startup)
         */
        initTheme() {
            try {
                const saved = localStorage.getItem('app-theme');
                if (saved && saved !== 'bw') {
                    this.setTheme(saved);
                    console.log('[AppShell] Restored theme from localStorage:', saved);
                }
            } catch (e) {
                console.warn('[AppShell] Could not restore theme from localStorage:', e);
            }
        },
        
        /**
         * Get shell information
         * @returns {Object} Shell information
         */
        getInfo() {
            return {
                version: this.version,
                shellType: this.shellType,
                initialized: this._initialized,
                mountPoints: Object.keys(this._mountPoints),
                state: window.ShellState ? window.ShellState.getAll() : {},
                routes: window.ShellNavigation ? window.ShellNavigation.getRoutes() : [],
                theme: this.getTheme()
            };
        }
    };
    
    // Expose to window
    window.AppShell = AppShell;
    
    // Log banner
    console.log('%c🏗️ APP-SHELL-LEFT-NAV-001', 'font-weight: bold; font-size: 16px;');
    console.log('%cDemo Pest Control', 'font-size: 14px;');
    console.log('%cDemo Pest Control', 'font-style: italic;');
    
})(window);
