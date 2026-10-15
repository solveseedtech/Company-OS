/**
 * Solve Seeds Technologies - Corporate Platform Architecture Runtime
 * Interactive UI System Schematic & Navigation Engine
 */

const SCHEMATIC_LAYERS = [
  {
    id: "identity",
    num: "01",
    tab: "Identity & RLS",
    title: "Layer 01: Sovereign Multi-Tenant Auth & PostgreSQL Strict RLS",
    desc: "Cryptographic tenant isolation engineered directly at the database layer. Every customer query executes within isolated Row-Level Security boundaries, eliminating cross-tenant leakage by design.",
    nodes: [
      { idx: "01.A", label: "Client Ingress", sub: "Cloudflare Edge SSL", active: false },
      { idx: "01.B", label: "RLS Gateway", sub: "PostgreSQL Strict Isolation", active: true },
      { idx: "01.C", label: "Session Vault", sub: "Stateless Encrypted JWT", active: false },
      { idx: "01.D", label: "Audit Ledger", sub: "Append-Only Event Log", active: false }
    ],
    telemetry: [
      { label: "Data Boundary Isolation", val: "PostgreSQL Row-Level Security (RLS)" },
      { label: "Session Verification Latency", val: "3.8ms Edge JWT Validation" },
      { label: "Compliance & Governance", val: "DPDP Act 2023 & SOC2 Compliant" },
      { label: "Post-Delivery Maintenance SLA", val: "RBAC & Auth Upgrades 100% Included" }
    ]
  },
  {
    id: "domain",
    num: "02",
    tab: "Domain Core",
    title: "Layer 02: Sovereign Domain Engine & Distributed Workflows",
    desc: "Zero commodity boilerplate. 100% of our engineering pod focuses on your proprietary business rules, custom schema state machines, and high-concurrency event pipelines.",
    nodes: [
      { idx: "02.A", label: "API Gateway", sub: "Type-Safe tRPC & REST", active: false },
      { idx: "02.B", label: "Domain Engine", sub: "Transactional State Machine", active: true },
      { idx: "02.C", label: "BullMQ Workers", sub: "Redis Distributed Queues", active: false },
      { idx: "02.D", label: "Persistence", sub: "Primary & Replica Pools", active: false }
    ],
    telemetry: [
      { label: "Type Safety Guarantee", val: "End-to-End Strict TypeScript" },
      { label: "Background Queue Throughput", val: "12,500 jobs / second per node" },
      { label: "State Machine Integrity", val: "ACID Guaranteed Transactions" },
      { label: "Post-Delivery Maintenance SLA", val: "New Workflows & Logic 100% Included" }
    ]
  },
  {
    id: "billing",
    num: "03",
    tab: "UPI & Billing",
    title: "Layer 03: Dual-Rail Billing Engine (Global Stripe + Indian UPI 2.0)",
    desc: "Seamless dual-currency settlement infrastructure. Supports global subscription billing via Stripe alongside native Indian rails: UPI 2.0 Autopay recurring mandates, Razorpay, and automated GST e-invoices.",
    nodes: [
      { idx: "03.A", label: "Payment Ingress", sub: "UPI Autopay & Card Rails", active: false },
      { idx: "03.B", label: "Webhook Vault", sub: "Idempotent Event Log", active: true },
      { idx: "03.C", label: "GST E-Invoice", sub: "Automated IRN Generation", active: false },
      { idx: "03.D", label: "Escrow Ledger", sub: "Multi-Party Split Settlements", active: false }
    ],
    telemetry: [
      { label: "Indian Payment Rails", val: "UPI 2.0 Recurring Mandates / NetBanking" },
      { label: "Global Payment Rails", val: "Stripe Billing / Multi-Currency Cards" },
      { label: "Webhook Reliability", val: "100% Idempotent Event Deduplication" },
      { label: "Post-Delivery Maintenance SLA", val: "Gateway & Tax Rule Updates Included" }
    ]
  },
  {
    id: "edge",
    num: "04",
    tab: "Bharat Edge",
    title: "Layer 04: Zero-Downtime Infrastructure & Sub-25ms Bharat Edge",
    desc: "Distributed cloud infrastructure optimized for Indian geography. Deployed across multi-hub edge clusters in Mumbai, Bengaluru, Delhi, Chennai, and Hyderabad for low-latency responsiveness.",
    nodes: [
      { idx: "04.A", label: "DNS Anycast", sub: "Sub-5ms Route Optimization", active: false },
      { idx: "04.B", label: "Bharat Edge Hub", sub: "Mumbai & Bengaluru PoPs", active: true },
      { idx: "04.C", label: "Connection Pool", sub: "Supavisor High Concurrency", active: false },
      { idx: "04.D", label: "Disaster Recovery", sub: "Continuous WAL Point-in-Time", active: false }
    ],
    telemetry: [
      { label: "National Edge Latency", val: "Sub-25ms across major Indian cities" },
      { label: "Concurrent User Ceiling", val: "100,000+ active Bharat sessions" },
      { label: "Point-in-Time Recovery", val: "Continuous WAL Backups with zero data loss" },
      { label: "Post-Delivery Maintenance SLA", val: "Infrastructure Scaling & DB Tuning Included" }
    ]
  }
];

let currentLayerIdx = 0;

function initSchematic() {
  const tabsContainer = document.getElementById('schematicTabs');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = SCHEMATIC_LAYERS.map((layer, idx) => `
    <button type="button" class="schematic-tab-btn ${idx === currentLayerIdx ? 'active' : ''}" onclick="selectSchematicLayer(${idx})">
      <span class="tab-num">LAYER ${layer.num}</span>
      <span class="tab-title">${layer.tab}</span>
    </button>
  `).join('');

  renderActiveSchematic();
}

function selectSchematicLayer(idx) {
  currentLayerIdx = idx;
  document.querySelectorAll('.schematic-tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === currentLayerIdx);
  });
  renderActiveSchematic();
}

function renderActiveSchematic() {
  const contentEl = document.getElementById('schematicContent');
  if (!contentEl) return;

  const layer = SCHEMATIC_LAYERS[currentLayerIdx];

  contentEl.innerHTML = `
    <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; color: var(--text-primary); letter-spacing: -0.01em;">
      ${layer.title}
    </h3>
    <p class="schematic-layer-desc">
      ${layer.desc}
    </p>

    <!-- Visual Architecture Flow Nodes -->
    <div class="schematic-flow-diagram">
      ${layer.nodes.map(n => `
        <div class="flow-step-node ${n.active ? 'active-node' : ''}">
          <div class="flow-step-idx">${n.idx}</div>
          <div class="flow-step-label">${n.label}</div>
          <div class="flow-step-sub">${n.sub}</div>
        </div>
      `).join('')}
    </div>

    <!-- Telemetry & Operational SLA Specs Grid -->
    <div class="schematic-telemetry-grid">
      ${layer.telemetry.map(t => `
        <div class="telemetry-cell">
          <div class="telemetry-label">${t.label}</div>
          <div class="telemetry-val">${t.val}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// Intake form submission handler
function initIntakeForm() {
  const form = document.getElementById('architectureIntakeForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('intakeSubmitBtn');
    const statusMsg = document.getElementById('intakeStatusMsg');

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = 'Submitting Scope to Architecture Pod&hellip;';
    }

    setTimeout(() => {
      if (statusMsg) {
        statusMsg.style.display = 'block';
        statusMsg.innerHTML = `
          <div style="background-color: var(--arch-accent-bg); border: 1px solid rgba(46,90,68,0.3); padding: 16px 20px; border-radius: var(--radius-sm); margin-top: 16px;">
            <div style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: var(--arch-accent); letter-spacing: 0.06em; margin-bottom: 4px;">
              [ ARCHITECTURE SPEC RECEIVED &bull; SLA 24 HOURS ]
            </div>
            <div style="font-size: 0.88rem; color: var(--text-primary); line-height: 1.5;">
              A Principal Architect from Solve Seeds Technologies has received your requirements and will reach out with an initial architectural blueprint within 24 hours.
            </div>
          </div>
        `;
      }
      form.reset();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = 'Initiate Architecture Consultation &rarr;';
      }
    }, 600);
  });
}

// Smooth scrolling and initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initSchematic();
  initIntakeForm();
});
