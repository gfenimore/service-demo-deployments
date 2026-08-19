/**
 * APP-SHELL-LEFT-NAV-001 - State Management
 * Manages application shell state
 * Generated for: Demo Pest Control
 */

(function(window) {
    'use strict';
    
    /**
     * Shell State Manager
     * Simple key-value state store for the shell
     */
    const ShellState = {
        _store: {},
        _listeners: {},
        
        /**
         * Initialize state with default values
         */
        init() {
            this._store = {
                appId: 'a0004000-0000-0000-0000-000000000001',
                appTitle: 'Demo Pest Control',
                companyName: 'Demo Pest Control',
                shellType: 'left-nav',
                version: '1.0.0',
                sidebarOpen: true,
                currentView: null,
                mountedPatterns: {
                    'header-context': null,
                    'header-actions': null,
                    'sidebar': null,
                    'content': null
                },
                layout: {
                    sidebarWidth: 250,
                    headerHeight: 60
                },
                features: {
                    enableContextSection: true,
                    enableActionsSection: true
                }
            };
            
            console.log('[ShellState] Initialized with config:', this._store);
        },
        
        /**
         * Get a state value
         * @param {string} key - State key (supports dot notation)
         * @returns {*} State value
         */
        get(key) {
            const keys = key.split('.');
            let value = this._store;
            
            for (const k of keys) {
                if (value && typeof value === 'object') {
                    value = value[k];
                } else {
                    return undefined;
                }
            }
            
            return value;
        },
        
        /**
         * Set a state value
         * @param {string} key - State key (supports dot notation)
         * @param {*} value - Value to set
         * @param {boolean} silent - If true, don't trigger listeners
         */
        set(key, value, silent = false) {
            const keys = key.split('.');
            const lastKey = keys.pop();
            let target = this._store;
            
            // Navigate to the parent object
            for (const k of keys) {
                if (!target[k] || typeof target[k] !== 'object') {
                    target[k] = {};
                }
                target = target[k];
            }
            
            // Set the value
            const oldValue = target[lastKey];
            target[lastKey] = value;
            
            // Notify listeners
            if (!silent && oldValue !== value) {
                this._notifyListeners(key, value, oldValue);
            }
            
            console.log('[ShellState] Set:', key, '=', value);
        },
        
        /**
         * Subscribe to state changes
         * @param {string} key - State key to watch
         * @param {Function} callback - Callback function
         * @returns {Function} Unsubscribe function
         */
        subscribe(key, callback) {
            if (!this._listeners[key]) {
                this._listeners[key] = [];
            }
            
            this._listeners[key].push(callback);
            
            // Return unsubscribe function
            return () => {
                const index = this._listeners[key].indexOf(callback);
                if (index > -1) {
                    this._listeners[key].splice(index, 1);
                }
            };
        },
        
        /**
         * Notify listeners of state changes
         * @private
         */
        _notifyListeners(key, newValue, oldValue) {
            if (this._listeners[key]) {
                this._listeners[key].forEach(callback => {
                    try {
                        callback(newValue, oldValue);
                    } catch (error) {
                        console.error('[ShellState] Listener error:', error);
                    }
                });
            }
        },
        
        /**
         * Get all state (for debugging)
         * @returns {Object} Complete state object
         */
        getAll() {
            return JSON.parse(JSON.stringify(this._store));
        },
        
        /**
         * Reset state to initial values
         */
        reset() {
            console.log('[ShellState] Resetting state');
            this.init();
        }
    };
    
    // Expose to window
    window.ShellState = ShellState;
    
})(window);
