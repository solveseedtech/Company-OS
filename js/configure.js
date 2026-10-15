/**
 * Solve Seeds Technologies - Scope & Price Estimator Wizard Engine
 * 4-Step Interactive Scoping Flow that Generates Dynamic System Blueprints
 */

let currentStep = 1;
let selectedTemplate = 'b2b-saas';
let userScale = '5k-50k';
let platformTarget = 'web';
let sprintPriority = 'accelerated';

function initConfigurator() {
  updateStepUI();
  renderSelectedModulesList();
  renderSidebarEstimates();
  setupEventListeners();
}

function updateStepUI() {
  // Update wizard progress indicators
  document.querySelectorAll('.step-pill').forEach((pill, idx) => {
    pill.classList.toggle('active', idx + 1 === currentStep);
    pill.classList.toggle('completed', idx + 1 < currentStep);
  });

  // Toggle step panes
  document.querySelectorAll('.wizard-step-pane').forEach((pane, idx) => {
    pane.style.display = (idx + 1 === currentStep) ? 'block' : 'none';
  });

  // Step indicator text
  const stepLabel = document.getElementById('stepIndicatorLabel');
  if (stepLabel) {
    const titles = [
      "Step 1: Select Base SaaS Template",
      "Step 2: Confirm & Customize Architectural Modules",
      "Step 3: Define Scale, Compliance & Timeline Priority",
      "Step 4: Unlock Instant System Architecture Blueprint"
    ];
    stepLabel.textContent = titles[currentStep - 1] || '';
  }
}

function nextStep() {
  if (currentStep < 4) {
    currentStep++;
    updateStepUI();
    if (currentStep === 2) {
      renderModuleChecklistStep2();
    }
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateStepUI();
  }
}

function selectTemplate(templateKey) {
  selectedTemplate = templateKey;
  document.querySelectorAll('.template-tile').forEach(tile => {
    tile.classList.toggle('selected', tile.dataset.template === templateKey);
  });
  renderSidebarEstimates();
}

function selectScale(scaleKey) {
  userScale = scaleKey;
  document.querySelectorAll('.scale-tile').forEach(tile => {
    tile.classList.toggle('selected', tile.dataset.scale === scaleKey);
  });
  renderSidebarEstimates();
}

function selectPlatform(platKey) {
  platformTarget = platKey;
  document.querySelectorAll('.platform-tile').forEach(tile => {
    tile.classList.toggle('selected', tile.dataset.platform === platKey);
  });
  renderSidebarEstimates();
}

function selectPriority(prioKey) {
  sprintPriority = prioKey;
  document.querySelectorAll('.priority-tile').forEach(tile => {
    tile.classList.toggle('selected', tile.dataset.priority === prioKey);
  });
  renderSidebarEstimates();
}

function renderModuleChecklistStep2() {
  const container = document.getElementById('step2ModulesGrid');
  if (!container || typeof SAAS_MODULES === 'undefined') return;

  const selectedIds = ScopeStore.getSelectedIds();

  let html = SAAS_MODULES.map(m => {
    const isSelected = m.isBase || selectedIds.includes(m.id);
    return `
      <div class="choice-tile ${isSelected ? 'selected' : ''}" style="${m.isBase ? 'opacity: 0.95; cursor: default;' : ''}" onclick="${m.isBase ? '' : `toggleModuleFromConfig('${m.id}')`}">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 4px;">
          <span class="choice-title" style="font-size: 0.9rem;">${m.title}</span>
          <span class="status-pill ${m.isBase ? 'live' : ''}" style="font-size: 0.62rem;">
            ${m.isBase ? 'Included Day 1' : `+${m.days} Days`}
          </span>
        </div>
        <p class="choice-desc" style="font-size: 0.75rem;">${m.desc}</p>
        <div style="margin-top: 8px; display: flex; gap: 4px; flex-wrap: wrap;">
          ${m.tech.slice(0, 3).map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

function toggleModuleFromConfig(id) {
  ScopeStore.toggleModule(id);
  renderModuleChecklistStep2();
  renderSidebarEstimates();
}

function renderSidebarEstimates() {
  const est = ScopeStore.calculateEstimates();

  // Adjust for accelerated sprint or enterprise scale
  let adjustedWeeks = est.totalWeeks;
  let multiplier = 1.0;

  if (sprintPriority === 'accelerated') {
    adjustedWeeks = Math.max(3, Math.round(est.totalWeeks * 0.75));
  }
  if (userScale === '50k+') {
    multiplier += 0.2;
  }
  if (platformTarget === 'web-mobile') {
    adjustedWeeks += 1;
    multiplier += 0.15;
  }

  const lowPrice = Math.round(est.lowEstimate * multiplier);
  const highPrice = Math.round(est.highEstimate * multiplier);

  const priceEl = document.getElementById('configSidebarPrice');
  if (priceEl) {
    priceEl.textContent = `$${lowPrice.toLocaleString()} – $${highPrice.toLocaleString()}`;
  }

  const durationEl = document.getElementById('configSidebarDuration');
  if (durationEl) {
    durationEl.textContent = `${adjustedWeeks} Weeks (${sprintPriority === 'accelerated' ? 'Accelerated Pod' : 'Standard Pod'})`;
  }

  const modulesCountEl = document.getElementById('configSidebarModulesCount');
  if (modulesCountEl) {
    modulesCountEl.textContent = `${est.customModulesCount} Custom Modules (+ 6 Core Foundation)`;
  }

  renderSelectedModulesList();
}

function renderSelectedModulesList() {
  const listEl = document.getElementById('configSidebarSelectedList');
  if (!listEl || typeof SAAS_MODULES === 'undefined') return;

  const selectedIds = ScopeStore.getSelectedIds();
  const selected = SAAS_MODULES.filter(m => !m.isBase && selectedIds.includes(m.id));

  let items = selected.map(m => `
    <li style="display: flex; align-items: center; justify-content: space-between; font-size: 0.78rem; padding: 4px 0; border-bottom: 1px solid var(--border-hairline);">
      <span>${m.title}</span>
      <span class="mono-tag" style="font-size: 0.65rem;">+${m.days}d</span>
    </li>
  `).join('');

  if (selected.length === 0) {
    items = `<li style="font-size: 0.78rem; color: var(--text-secondary); padding: 8px 0;">No custom modules added. (6 Core Plumbing modules included).</li>`;
  }

  listEl.innerHTML = items;
}

function handleConfigSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('leadName')?.value || 'Engineering Lead';
  const company = document.getElementById('leadCompany')?.value || 'NextGen Technologies';
  const email = document.getElementById('leadEmail')?.value || 'founder@solveseeds.com';
  const vision = document.getElementById('leadVision')?.value || 'Enterprise-ready custom SaaS solution.';

  const estimates = ScopeStore.calculateEstimates();

  const scopePayload = {
    founderName: name,
    companyName: company,
    workEmail: email,
    productVision: vision,
    template: selectedTemplate,
    userScale,
    platformTarget,
    sprintPriority,
    selectedModules: ScopeStore.getSelectedIds(),
    estimates: {
      weeks: sprintPriority === 'accelerated' ? Math.max(3, Math.round(estimates.totalWeeks * 0.75)) : estimates.totalWeeks,
      totalDays: estimates.totalDays,
      lowPrice: estimates.lowEstimate,
      highPrice: estimates.highEstimate,
      formattedPrice: estimates.formattedPrice
    }
  };

  const savedScope = ScopeStore.saveProjectScope(scopePayload);
  if (savedScope && savedScope.id) {
    // Immediate deterministic redirect to dynamic blueprint page
    window.location.href = `blueprint.html?id=${savedScope.id}`;
  } else {
    alert("Please complete the required fields.");
  }
}

function setupEventListeners() {
  const form = document.getElementById('scopingLeadForm');
  if (form) {
    form.addEventListener('submit', handleConfigSubmit);
  }
}

document.addEventListener('DOMContentLoaded', initConfigurator);
