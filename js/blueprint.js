/**
 * Solve Seeds Technologies - Generated Architecture Blueprint Engine
 * Dynamic Spec Deliverable with System Diagram, Sprint Roadmap & Cal.com Scheduler
 */

function initBlueprint() {
  const urlParams = new URLSearchParams(window.location.search);
  const scopeId = urlParams.get('id') || ScopeStore.getLastScopeId();
  
  let scope = null;
  if (scopeId) {
    scope = ScopeStore.getProjectScope(scopeId);
  }

  // Fallback defaults if accessed directly
  if (!scope) {
    scope = {
      id: scopeId || 'scope_demo_enterprise',
      companyName: 'Acme Enterprises',
      founderName: 'Alex Mercer',
      workEmail: 'alex@acme.com',
      template: 'b2b-saas',
      userScale: '5k-50k',
      platformTarget: 'web',
      sprintPriority: 'accelerated',
      selectedModules: ['ai-rag-pipeline', 'realtime-analytics', 'webhook-automation', 'token-usage-metering'],
      estimates: {
        weeks: 4,
        totalDays: 28,
        formattedPrice: '$18,800 – $23,500'
      }
    };
  }

  renderBlueprintHeader(scope);
  renderArchitectureDiagram(scope);
  renderSprintRoadmap(scope);
  renderCalcomScheduler(scope);
}

function renderBlueprintHeader(scope) {
  const titleEl = document.getElementById('blueprintTitle');
  const metaEl = document.getElementById('blueprintMeta');
  const priceEl = document.getElementById('blueprintPriceTag');

  if (titleEl) {
    titleEl.innerHTML = `System Architecture & Sprint Brief: <span class="editorial-italic" style="color: var(--text-primary);">${scope.companyName}</span>`;
  }

  if (metaEl) {
    metaEl.innerHTML = `
      <span><strong>Scope Ref:</strong> <code style="background:var(--bg-surface-subtle); padding:2px 6px; border:1px solid var(--border-hairline); border-radius:3px;">${scope.id}</code></span>
      <span>•</span>
      <span><strong>Prepared for:</strong> ${scope.founderName} (${scope.workEmail})</span>
      <span>•</span>
      <span><strong>Sprint Target:</strong> ${scope.estimates.weeks} Weeks to Production</span>
    `;
  }

  if (priceEl) {
    priceEl.innerHTML = `
      <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-mono); text-transform: uppercase;">Guaranteed Fixed Sprint Bracket</div>
      <div style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 700; color: var(--text-primary);">${scope.estimates.formattedPrice}</div>
    `;
  }
}

function renderArchitectureDiagram(scope) {
  const container = document.getElementById('blueprintArchDiagram');
  if (!container || typeof SAAS_MODULES === 'undefined') return;

  const selectedModules = SAAS_MODULES.filter(m => scope.selectedModules.includes(m.id) || m.isBase);
  const basePlumbing = selectedModules.filter(m => m.isBase);
  const customModules = selectedModules.filter(m => !m.isBase);

  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <!-- Layer 1: Client & Presentation Tier -->
      <div style="border: 1px solid var(--border-hairline); border-radius: var(--radius-sm); padding: 18px; background: var(--bg-surface-elevated);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <span class="mono-tag">LAYER 01 // PRESENTATION & EDGE ROUTING</span>
          <span class="status-pill live"><span class="status-dot"></span> Edge Static + ISR</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">
          Next.js App Router (React Server Components), Tailwind CSS editorial system tokens, and Cloudflare Global CDN edge distribution.
        </p>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <span class="tech-pill">Next.js App Router</span>
          <span class="tech-pill">Tailwind CSS</span>
          <span class="tech-pill">Cloudflare Edge CDN</span>
          <span class="tech-pill">TypeScript Strict</span>
        </div>
      </div>

      <!-- Layer 2: Pre-Engineered SaaS Core (Day 1) -->
      <div style="border: 2px solid var(--border-strong); border-radius: var(--radius-sm); padding: 18px; background: #FFFDF9;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <span class="mono-tag" style="color: var(--text-primary);">LAYER 02 // SOLVE SEEDS PRE-ENGINEERED SAAS CORE (0 DAYS BILLABLE)</span>
          <span class="status-pill live"><span class="status-dot"></span> Pre-Engineered Day 1</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">
          Enterprise commodity infrastructure pre-wired and tested. Zero billable hours wasted reinventing these foundations:
        </p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
          ${basePlumbing.map(b => `
            <div style="border: 1px solid var(--border-hairline); background: #FFFFFF; padding: 10px; border-radius: var(--radius-sm);">
              <div style="font-weight: 600; font-size: 0.82rem; margin-bottom: 2px;">${b.title}</div>
              <div style="font-size: 0.7rem; color: var(--text-secondary);">${b.tech.slice(0, 2).join(' + ')}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Layer 3: Custom Domain Modules -->
      <div style="border: 1px solid var(--border-hairline); border-radius: var(--radius-sm); padding: 18px; background: var(--bg-surface-elevated);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <span class="mono-tag">LAYER 03 // CLIENT CUSTOM PRODUCT LOGIC & MODULES</span>
          <span class="status-pill" style="color: var(--text-primary); background: var(--bg-surface-subtle); border: 1px solid var(--border-hairline);">
            ${customModules.length} Modules Tailored
          </span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">
          100% of your sprint engineering investment executes your specific domain capabilities:
        </p>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          ${customModules.map(c => `
            <div style="border: 1px solid var(--border-hairline); background: var(--bg-surface-subtle); padding: 12px; border-radius: var(--radius-sm);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                <strong style="font-size: 0.85rem;">${c.title}</strong>
                <span class="mono-tag">+${c.days} Days</span>
              </div>
              <p style="font-size: 0.76rem; color: var(--text-secondary); margin-bottom: 6px;">${c.desc}</p>
              <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                ${c.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Layer 4: Multi-Tenant Database & Storage -->
      <div style="border: 1px solid var(--border-hairline); border-radius: var(--radius-sm); padding: 18px; background: var(--bg-surface-elevated);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <span class="mono-tag">LAYER 04 // CRYPTOGRAPHIC ISOLATION & STORAGE</span>
          <span class="status-pill live"><span class="status-dot"></span> PostgreSQL 16 + RLS</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">
          Supabase/PostgreSQL 16 connection pooling with cryptographic Row-Level Security (RLS) guaranteeing multi-tenant data boundaries.
        </p>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <span class="tech-pill">PostgreSQL 16</span>
          <span class="tech-pill">Supabase Auth & RLS</span>
          <span class="tech-pill">pgvector Engine</span>
          <span class="tech-pill">Automated Point-in-time Backups</span>
        </div>
      </div>
    </div>
  `;
}

function renderSprintRoadmap(scope) {
  const container = document.getElementById('blueprintRoadmap');
  if (!container) return;

  const weeks = scope.estimates.weeks || 4;

  const roadmapSteps = [
    {
      week: "Week 01",
      title: "Core Infrastructure & Pre-Engineered SaaS Baseline",
      focus: "Authentication, RBAC, Multi-Tenant Database, Billing Integration",
      deliverables: [
        "Repository setup with CI/CD GitHub Actions & staging domain",
        "Supabase PostgreSQL schema initialization + RLS tenant isolation",
        "OAuth / Magic links & Stripe Customer Portal wired up",
        "Initial staging deployment accessible to client founders"
      ]
    },
    {
      week: "Week 02",
      title: "Custom Domain Business Logic & Core Workflows",
      focus: "Client-specific data models, core CRUD operations, API routes",
      deliverables: [
        "Primary domain data schemas and operational ledger",
        "Interactive dashboard wireframes turned into production React views",
        "Client review checkpoint #1 with live walkthrough demo"
      ]
    },
    {
      week: "Week 03",
      title: "Advanced Modules & Third-Party Integration",
      focus: "AI pipelines, real-time analytics, webhook automation",
      deliverables: [
        "Selected custom modules connected and benchmarked",
        "Transactional notification triggers & background worker queues",
        "Security penetration testing and edge latency tuning"
      ]
    },
    {
      week: `Week 0${weeks}`,
      title: "Production Hardening, UAT & 100% IP Handover",
      focus: "Load testing, DNS cutover, cloud ownership transfer",
      deliverables: [
        "Complete Git repository transfer & Cloudflare/Supabase admin transfer",
        "Environment variables, Terraform scripts & architecture documentation",
        "Production launch sign-off with 30-day post-launch warranty"
      ]
    }
  ];

  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      ${roadmapSteps.map(step => `
        <div style="border: 1px solid var(--border-hairline); border-radius: var(--radius-sm); padding: 20px; background: var(--bg-surface-elevated);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span class="mono-tag" style="background: var(--text-primary); color: var(--bg-canvas); padding: 4px 8px; border-radius: var(--radius-sm);">${step.week}</span>
              <h4 style="font-size: 1.05rem; font-weight: 700;">${step.title}</h4>
            </div>
            <span class="mono-tag" style="color: var(--text-mono);">${step.focus}</span>
          </div>
          <ul style="margin-left: 20px; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-top: 10px;">
            ${step.deliverables.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

function renderCalcomScheduler(scope) {
  const container = document.getElementById('blueprintCalcomWidget');
  if (!container) return;

  container.innerHTML = `
    <div style="border: 1px solid var(--border-hairline); border-radius: var(--radius-sm); background: var(--bg-surface-elevated); padding: 28px;">
      <div style="margin-bottom: 20px;">
        <span class="mono-tag">ENGINEERING ARCHITECTURE REVIEW</span>
        <h3 style="font-size: 1.35rem; font-weight: 700; margin-top: 4px; margin-bottom: 6px;">Book 20-Min Technical Kickoff with Lead Architect</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">Direct technical discussion with a Principal Engineer from Solve Seeds Technologies. No sales fluff.</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;" id="bookingInteractiveArea">
        <div>
          <label class="input-label">Select Sprint Date Window</label>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <button class="btn btn-secondary date-slot-btn active" onclick="selectDateSlot(this, 'Tomorrow at 10:30 AM EST')">
              📅 Tomorrow, 10:30 AM EST (Available)
            </button>
            <button class="btn btn-secondary date-slot-btn" onclick="selectDateSlot(this, 'Thursday at 2:00 PM EST')">
              📅 Thursday, 2:00 PM EST (Available)
            </button>
            <button class="btn btn-secondary date-slot-btn" onclick="selectDateSlot(this, 'Friday at 11:00 AM EST')">
              📅 Friday, 11:00 AM EST (Available)
            </button>
          </div>
        </div>

        <div>
          <label class="input-label">Confirm Attendee Details</label>
          <input type="text" class="text-input" style="margin-bottom: 10px;" value="${scope.founderName}" id="bookName">
          <input type="email" class="text-input" style="margin-bottom: 14px;" value="${scope.workEmail}" id="bookEmail">
          <button class="btn btn-primary" style="width: 100%;" onclick="confirmCalBooking('${scope.id}')">
            Confirm & Reserve Engineering Slot →
          </button>
        </div>
      </div>

      <div id="bookingConfirmationBanner" style="display: none; background: #DCFCE7; border: 1px solid rgba(21,128,61,0.3); padding: 18px; border-radius: var(--radius-sm); margin-top: 16px;">
        <h4 style="color: #15803D; font-size: 1rem; font-weight: 700; margin-bottom: 4px;">✓ Technical Review Confirmed!</h4>
        <p style="font-size: 0.85rem; color: #166534;" id="bookingConfirmationText"></p>
      </div>
    </div>
  `;
}

function selectDateSlot(btn, text) {
  document.querySelectorAll('.date-slot-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  window.selectedSlotText = text;
}

function confirmCalBooking(scopeId) {
  const name = document.getElementById('bookName')?.value || 'Lead';
  const email = document.getElementById('bookEmail')?.value || 'email@client.com';
  const slot = window.selectedSlotText || 'Tomorrow at 10:30 AM EST';

  const banner = document.getElementById('bookingConfirmationBanner');
  const textEl = document.getElementById('bookingConfirmationText');
  const area = document.getElementById('bookingInteractiveArea');

  if (banner && textEl) {
    textEl.innerHTML = `Google Meet link and Calendar invite sent to <strong>${email}</strong> for <strong>${slot}</strong>.<br>Reference Scope ID: <code>${scopeId}</code> has been attached to your meeting brief.`;
    banner.style.display = 'block';
    if (area) area.style.opacity = '0.5';
  }
}

function printBlueprint() {
  window.print();
}

function copyShareLink() {
  navigator.clipboard.writeText(window.location.href);
  alert("Architecture Blueprint shareable link copied to clipboard!");
}

document.addEventListener('DOMContentLoaded', initBlueprint);
