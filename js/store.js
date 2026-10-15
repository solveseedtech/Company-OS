/**
 * Solve Seeds Technologies - Global Scope State & LocalStorage Store
 */

const STORAGE_KEY = 'solveseeds_selected_modules';
const SCOPE_STORAGE_KEY = 'solveseeds_project_scopes';

// Default initial selection for instant high-conversion engagement
const DEFAULT_SELECTED = ['ai-rag-pipeline', 'realtime-analytics', 'webhook-automation'];

const ScopeStore = {
  getSelectedIds() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage error, using defaults', e);
    }
    return [...DEFAULT_SELECTED];
  },

  setSelectedIds(ids) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
      window.dispatchEvent(new CustomEvent('solveseeds:modules_changed', { detail: { selectedIds: ids } }));
      this.updateTray();
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
  },

  toggleModule(id) {
    const current = this.getSelectedIds();
    const index = current.indexOf(id);
    let updated;
    if (index > -1) {
      updated = current.filter(item => item !== id);
    } else {
      updated = [...current, id];
    }
    this.setSelectedIds(updated);
    return updated.includes(id);
  },

  isSelected(id) {
    return this.getSelectedIds().includes(id);
  },

  calculateEstimates(selectedIds) {
    const ids = selectedIds || this.getSelectedIds();
    const modules = typeof SAAS_MODULES !== 'undefined' ? SAAS_MODULES : [];
    
    // Always include base plumbing (0 additional days)
    const baseModules = modules.filter(m => m.isBase);
    const selectedCustomModules = modules.filter(m => !m.isBase && ids.includes(m.id));

    // Base timeline: 21 days (3 weeks)
    const baseDays = 21;
    const addedDays = selectedCustomModules.reduce((acc, m) => acc + (m.days || 0), 0);
    const totalDays = baseDays + addedDays;
    const totalWeeks = Math.max(3, Math.ceil(totalDays / 7));

    // Base fixed investment bracket: $12,500 base + $2,100 per custom module
    const basePrice = 12500;
    const addedPrice = selectedCustomModules.length * 2100;
    const lowEstimate = basePrice + addedPrice;
    const highEstimate = Math.round(lowEstimate * 1.25);

    return {
      baseDays,
      addedDays,
      totalDays,
      totalWeeks,
      baseModulesCount: baseModules.length,
      customModulesCount: selectedCustomModules.length,
      totalModulesCount: baseModules.length + selectedCustomModules.length,
      selectedCustomModules,
      lowEstimate,
      highEstimate,
      formattedPrice: `$${lowEstimate.toLocaleString()} – $${highEstimate.toLocaleString()}`
    };
  },

  saveProjectScope(scopeData) {
    try {
      const id = 'scope_' + Math.random().toString(36).substr(2, 6) + Date.now().toString(36).substr(-3);
      const submission = {
        id,
        timestamp: new Date().toISOString(),
        ...scopeData
      };
      
      const scopes = this.getAllProjectScopes();
      scopes[id] = submission;
      localStorage.setItem(SCOPE_STORAGE_KEY, JSON.stringify(scopes));
      localStorage.setItem('solveseeds_last_scope_id', id);
      return submission;
    } catch (e) {
      console.warn('Failed to save project scope', e);
      return null;
    }
  },

  getProjectScope(id) {
    try {
      const scopes = this.getAllProjectScopes();
      return scopes[id] || null;
    } catch (e) {
      return null;
    }
  },

  getAllProjectScopes() {
    try {
      const raw = localStorage.getItem(SCOPE_STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  },

  getLastScopeId() {
    return localStorage.getItem('solveseeds_last_scope_id');
  },

  updateTray() {
    const tray = document.getElementById('stickySelectionTray');
    if (!tray) return;

    const est = this.calculateEstimates();
    const countEl = tray.querySelector('.tray-count');
    const deliveryEl = tray.querySelector('.tray-delivery');

    if (countEl) {
      countEl.innerHTML = `<strong>${est.customModulesCount} Custom Modules Selected</strong> <span style="opacity: 0.7; font-weight: 400; margin-left: 8px;">(6 Core Plumbing Included)</span>`;
    }
    if (deliveryEl) {
      deliveryEl.textContent = `Estimated Deployment: ~${est.totalWeeks} Weeks [Fixed Sprint]`;
    }

    // Always show if there are custom modules or on catalog pages
    tray.classList.add('visible');
  }
};

// Initialize tray listener on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  ScopeStore.updateTray();
});
