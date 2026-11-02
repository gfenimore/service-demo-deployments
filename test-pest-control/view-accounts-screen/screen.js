/**
 * SCREEN (screen-filters-list-001): a screen with regions -- SJ s56 Q9, 2026-10-10.
 * Component ID: a0004000-0000-0000-0000-000000000015
 * Blueprint ID: c1000000-0000-0000-0000-000000000001
 *
 * A composite pattern one level down from the shell. It renders its regions as pattern-mounts and does nothing
 * else: the shell mounts the parts whose rows name this screen as parent into the region each row names
 * (app_components.parent_component_id + zone). No entity, no doors, no fetch.
 */

(function () {
  'use strict';

  // The markup this screen renders, produced by screen.html.hbs during generation and handed over so the .html
  // template stays the single source of it.
  const MARKUP = "<!-- SCREEN (screen-filters-list-001): a screen with regions -- the shells' mount_points applied one level down (SJ s56 Q9). -->\n<!-- Each region is a pattern-mount the shell fills with the components whose rows name THIS screen as parent and the region as zone. -->\n<div id=\"account-screen\" class=\"screen screen--stacked\" data-screen=\"a0004000-0000-0000-0000-000000000015\" data-pattern=\"screen-filters-list-001\">\n    <div class=\"screen__regions screen__regions--stacked\">\n        <div class=\"pattern-mount screen__region screen__region--filters\" data-zone=\"filters\" data-parent=\"a0004000-0000-0000-0000-000000000015\" data-region-of=\"account-screen\">\n            <!-- the parts placed in region \"filters\" mount here -->\n        </div>\n        <div class=\"pattern-mount screen__region screen__region--list\" data-zone=\"list\" data-parent=\"a0004000-0000-0000-0000-000000000015\" data-region-of=\"account-screen\">\n            <!-- the parts placed in region \"list\" mount here -->\n        </div>\n    </div>\n</div>\n";
  const REGIONS = [
  "filters",
  "list"
];

  class AccountScreenUI {
    constructor() {
      this.id = 'account-screen';
      this.componentId = 'a0004000-0000-0000-0000-000000000015';
      this.regions = REGIONS.slice();
      this.layout = 'stacked';
      this.container = null;
      this.root = null;
      this.context = null;
      this._mounted = false;
    }

    // REQUIRED: mount(container) -- render into an EMPTY host and leave markup behind (the mount contract).
    mount(container) {
      if (this._mounted) {
        throw new Error('Screen is already mounted. Call unmount() first.');
      }
      if (!container) {
        throw new Error('mount(container) requires a container element');
      }
      this.container = container;
      container.innerHTML = MARKUP;
      this.root = container.firstElementChild;
      this._mounted = true;
      const missing = this.regions.filter(r => !this.getRegion(r));
      if (missing.length) {
        throw new Error('the screen rendered without its region(s): ' + missing.join(', '));
      }
      if (typeof document !== 'undefined') {
        document.dispatchEvent(new CustomEvent('screen:mounted', {
          detail: { componentId: this.componentId, regions: this.regions.slice(), layout: this.layout }
        }));
      }
      return this;
    }

    unmount() {
      if (!this._mounted) return;
      if (this.container) this.container.innerHTML = '';
      this.root = null;
      this.container = null;
      this._mounted = false;
    }

    // The shell hands every mounted component the app context; a screen keeps it for its own records only.
    onContext(context) {
      this.context = context || null;
    }

    // The region element a part mounts into -- the shell resolves it by [data-zone][data-parent]; this is the same lookup
    // offered to anyone holding the instance.
    getRegion(name) {
      if (!this.root) return null;
      return this.root.querySelector('[data-zone="' + name + '"][data-parent="' + this.componentId + '"]');
    }

    getState() {
      return { regions: this.regions.slice(), layout: this.layout, mounted: this._mounted };
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AccountScreenUI;
  }

  // SHELL CONTRACT -- register under the COMPONENT's id (the running key, SJ s55 Q10 leg 2).
  if (typeof window !== 'undefined') {
    window.AccountScreenUI = AccountScreenUI;
    window.PatternRegistry = window.PatternRegistry || {};
    window.PatternRegistry['a0004000-0000-0000-0000-000000000015'] = AccountScreenUI;
  }
})();
