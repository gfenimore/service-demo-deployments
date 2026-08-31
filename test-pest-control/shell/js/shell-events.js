/**
 * APP-SHELL-LEFT-NAV-001 - Event Management
 * Manages custom events for the shell
 * Generated for: Demo Pest Control
 *
 * EXTRACTED TO KNOWLEDGE: Event naming standards extracted to KNOWLEDGE/standards/event-naming-standards.md (2025-11-15)
 */

(function(window) {
    'use strict';
    
    /**
     * Shell Event Manager
     * Provides pub/sub event system for shell communication
     */
    const ShellEvents = {
        _handlers: {},
        
        /**
         * Initialize event system
         */
        init() {
            console.log('[ShellEvents] Event system initialized');
            
            // Set up default event handlers
            this._setupDefaultHandlers();
        },
        
        /**
         * Emit a custom event
         * @param {string} eventName - Name of the event
         * @param {*} data - Event data
         */
        emit(eventName, data) {
            console.log('[ShellEvents] Emit:', eventName, data);
            
            // Call registered handlers
            if (this._handlers[eventName]) {
                this._handlers[eventName].forEach(handler => {
                    try {
                        handler(data);
                    } catch (error) {
                        console.error('[ShellEvents] Handler error:', error);
                    }
                });
            }
            
            // Also dispatch as DOM custom event
            const customEvent = new CustomEvent(`shell:${eventName}`, {
                detail: data,
                bubbles: true,
                cancelable: true
            });
            window.dispatchEvent(customEvent);
        },
        
        /**
         * Register an event handler
         * @param {string} eventName - Name of the event
         * @param {Function} handler - Handler function
         * @returns {Function} Unsubscribe function
         */
        on(eventName, handler) {
            if (!this._handlers[eventName]) {
                this._handlers[eventName] = [];
            }
            
            this._handlers[eventName].push(handler);
            
            console.log('[ShellEvents] Registered handler for:', eventName);
            
            // Return unsubscribe function
            return () => {
                const index = this._handlers[eventName].indexOf(handler);
                if (index > -1) {
                    this._handlers[eventName].splice(index, 1);
                }
            };
        },
        
        /**
         * Register a one-time event handler
         * @param {string} eventName - Name of the event
         * @param {Function} handler - Handler function
         */
        once(eventName, handler) {
            const wrapper = (data) => {
                handler(data);
                const index = this._handlers[eventName].indexOf(wrapper);
                if (index > -1) {
                    this._handlers[eventName].splice(index, 1);
                }
            };
            
            return this.on(eventName, wrapper);
        },
        
        /**
         * Remove all handlers for an event
         * @param {string} eventName - Name of the event
         */
        off(eventName) {
            if (this._handlers[eventName]) {
                delete this._handlers[eventName];
                console.log('[ShellEvents] Removed all handlers for:', eventName);
            }
        },
        
        /**
         * Set up default event handlers
         * @private
         */
        _setupDefaultHandlers() {
            // Handle pattern mount events
            this.on('pattern:mounted', (data) => {
                console.log('[ShellEvents] Pattern mounted:', data);
                if (window.ShellState) {
                    window.ShellState.set(`mountedPatterns.${data.zone}`, data.patternId);
                }
            });
            
            // Handle pattern unmount events
            this.on('pattern:unmounted', (data) => {
                console.log('[ShellEvents] Pattern unmounted:', data);
                if (window.ShellState) {
                    window.ShellState.set(`mountedPatterns.${data.zone}`, null);
                }
            });
            
            // Handle navigation events
            this.on('navigate', (data) => {
                console.log('[ShellEvents] Navigation:', data);
                if (window.ShellState) {
                    window.ShellState.set('currentView', data.view);
                }
            });
            
            // Handle sidebar toggle
            this.on('sidebar:toggle', () => {
                const sidebar = document.getElementById('app-sidebar');
                if (sidebar) {
                    sidebar.classList.toggle('is-open');
                    const isOpen = sidebar.classList.contains('is-open');
                    if (window.ShellState) {
                        window.ShellState.set('sidebarOpen', isOpen);
                    }
                }
            });
            
            // Handle errors
            this.on('error', (data) => {
                console.error('[ShellEvents] Error:', data);
            });
        },
        
        /**
         * Get list of all registered events
         * @returns {string[]} Array of event names
         */
        getRegisteredEvents() {
            return Object.keys(this._handlers);
        }
    };
    
    // Expose to window
    window.ShellEvents = ShellEvents;
    
})(window);
