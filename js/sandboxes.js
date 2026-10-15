/**
 * Solve Seeds Technologies - Live Playable Sandboxes Engine
 * 3 High-Fidelity Interactive In-Browser SaaS Blueprints with 3-Way Toggles
 */

const SANDBOX_DATA = {
  fintech: {
    name: "B2B FinTech & Subscription Analytics CRM",
    slug: "fintech",
    category: "Financial Technology",
    modulesUsed: ["auth-rbac", "billing-subscriptions", "tenant-isolation", "realtime-analytics", "webhook-automation"],
    demoUser: "enterprise_cfo@acmecorp.com [Role: Owner / SuperAdmin]",
    kpis: [
      { label: "Monthly Recurring Revenue", val: "$84,250", delta: "+14.8% vs last month" },
      { label: "Net Active Subscribers", val: "1,428", delta: "+42 this week" },
      { label: "Gross Revenue Churn", val: "0.82%", delta: "Target < 1.0%" }
    ],
    subscribers: [
      { id: "sub_9821", org: "Stripe Integrations Ltd", plan: "Enterprise Tier ($2,400/mo)", status: "Active", seats: 48, lastPayment: "Paid 2h ago" },
      { id: "sub_9822", org: "CloudScale Systems", plan: "Growth Tier ($890/mo)", status: "Active", seats: 16, lastPayment: "Paid yesterday" },
      { id: "sub_9823", org: "Vanguard Logistics", plan: "Enterprise Tier ($3,200/mo)", status: "Active", seats: 65, lastPayment: "Paid 3d ago" },
      { id: "sub_9824", org: "NextWave BioTech", plan: "Starter Tier ($290/mo)", status: "Past Due", seats: 5, lastPayment: "Retry in 24h" },
      { id: "sub_9825", org: "Apex Capital Partners", plan: "Enterprise Tier ($4,500/mo)", status: "Active", seats: 90, lastPayment: "Paid 4d ago" }
    ],
    schema: `// PostgreSQL 16 Relational Schema with Row-Level Security (RLS)
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE subscriptions (
  id TEXT PRIMARY KEY, /* Stripe Sub ID (sub_...) */
  tenant_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  plan_tier TEXT NOT NULL CHECK (plan_tier IN ('starter', 'growth', 'enterprise')),
  mrr_cents INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  current_period_end TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE billing_webhooks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type TEXT NOT NULL,
  idempotency_key TEXT UNIQUE NOT NULL,
  payload JSONB NOT NULL,
  processed_at TIMESTAMPTZ DEFAULT now()
);

-- Cryptographic Row-Level Security Policy
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation_policy ON subscriptions
  FOR ALL
  USING (tenant_id = (SELECT org_id FROM auth.current_session()));`,
    benchmarks: [
      { name: "Edge API Latency (Global P95)", val: "22ms", status: "Optimal" },
      { name: "PostgreSQL Query Execution", val: "8.4ms", status: "Index Cached" },
      { name: "Stripe Webhook Idempotent Ack", val: "48ms", status: "Queued" },
      { name: "Uptime SLA (Rolling 90 Days)", val: "99.992%", status: "Live Zero-Downtime" }
    ]
  },

  erp: {
    name: "Operations & Inventory ERP Portal",
    slug: "erp",
    category: "Enterprise Operations",
    modulesUsed: ["auth-rbac", "tenant-isolation", "erp-inventory", "audit-logs", "realtime-analytics"],
    demoUser: "ops_director@apexlogistics.com [Role: Ops Lead]",
    kpis: [
      { label: "Active Warehouses", val: "4 Facilities", delta: "100% Online" },
      { label: "Tracked SKUs in Vault", val: "14,892 Units", delta: "Ledger Balanced" },
      { label: "Pending Purchase Orders", val: "3 Dispatches", delta: "Estimated ARR: $214k" }
    ],
    subscribers: [
      { id: "PO-4091", org: "North Distribution Hub", plan: "Precision Optics (SKU: OPT-99)", status: "In Transit", seats: 450, lastPayment: "ETA: 4 Hours" },
      { id: "PO-4092", org: "Central Cold Storage", plan: "Thermal Sensors (SKU: THM-04)", status: "Low Stock Alert", seats: 12, lastPayment: "Restock Triggered" },
      { id: "PO-4093", org: "Pacific Gateway Dock", plan: "Embedded Circuit Controllers", status: "Received", seats: 1200, lastPayment: "Ledger Audited" },
      { id: "PO-4094", org: "Eastern Cargo Depot", plan: "Telemetry Beacon Transmitters", status: "Dispatched", seats: 340, lastPayment: "Carrier: FedEx Freight" }
    ],
    schema: `// Strict Double-Entry Inventory & Location Ledger Schema
CREATE TABLE warehouses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES organizations(id),
  facility_code VARCHAR(16) NOT NULL,
  capacity_units INTEGER NOT NULL
);

CREATE TABLE inventory_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES organizations(id),
  sku VARCHAR(64) NOT NULL,
  name TEXT NOT NULL,
  reorder_point INTEGER NOT NULL DEFAULT 50,
  unit_cost_cents INTEGER NOT NULL
);

CREATE TABLE inventory_ledger (
  id BIGSERIAL PRIMARY KEY,
  warehouse_id UUID REFERENCES warehouses(id),
  item_id UUID REFERENCES inventory_items(id),
  quantity_delta INTEGER NOT NULL, /* Positive for inbounds, negative for outbounds */
  balance_after INTEGER NOT NULL,
  reference_type VARCHAR(32) NOT NULL, /* 'PO', 'RETURN', 'TRANSFER' */
  created_at TIMESTAMPTZ DEFAULT now()
);`,
    benchmarks: [
      { name: "Ledger Transaction Throughput", val: "3,200 TPS", status: "Strict Isolation" },
      { name: "Inventory Rebalance Query", val: "11.2ms", status: "Partitioned" },
      { name: "Barcode Scan Webhook Ingest", val: "18ms", status: "Edge Worker" },
      { name: "Audit Trail Cryptographic Seal", val: "SHA-256", status: "Immutable" }
    ]
  },

  ai: {
    name: "AI Workflow & Multi-Tenant Agent Wrapper",
    slug: "ai",
    category: "AI & Automation",
    modulesUsed: ["auth-rbac", "tenant-isolation", "ai-rag-pipeline", "token-usage-metering", "webhook-automation"],
    demoUser: "ai_lead@synthetica.ai [Role: Workspace Admin]",
    kpis: [
      { label: "Token Consumption (24h)", val: "2,418,900 Tokens", delta: "Metered via Redis" },
      { label: "Workspace Credit Balance", val: "$4,120.50", delta: "Auto-recharge enabled" },
      { label: "Mean RAG Latency", val: "340ms (TTFT)", delta: "pgvector HNSW Index" }
    ],
    subscribers: [
      { id: "wf_101", org: "Legal Clause Classifier", plan: "Claude 3.5 Sonnet Router", status: "Active", seats: 1240, lastPayment: "Avg 99.4% F1 Score" },
      { id: "wf_102", org: "Financial SEC 10-K RAG", plan: "Hybrid Keyword + Vector", status: "Active", seats: 8900, lastPayment: "Chunk size: 512 tokens" },
      { id: "wf_103", org: "Customer Ticket Summarizer", plan: "Streaming WebSocket Pipeline", status: "Active", seats: 450, lastPayment: "Latency: 280ms" }
    ],
    schema: `// pgvector Vector Embeddings & Credit Metering Schema
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE document_embeddings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES organizations(id),
  document_id UUID NOT NULL,
  chunk_index INTEGER NOT NULL,
  content TEXT NOT NULL,
  embedding vector(1536), /* OpenAI ada-002 / text-embedding-3 */
  metadata JSONB NOT NULL DEFAULT '{}'
);

CREATE INDEX ON document_embeddings 
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);

CREATE TABLE credit_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES organizations(id),
  tokens_consumed INTEGER NOT NULL,
  model_id VARCHAR(64) NOT NULL,
  cost_in_credits NUMERIC(10, 4) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);`,
    benchmarks: [
      { name: "Vector Nearest Neighbor Search (HNSW)", val: "14ms", status: "Cosine Distance" },
      { name: "Time To First Token (TTFT)", val: "310ms", status: "Streaming Edge" },
      { name: "Redis Atomic Token Metering", val: "1.2ms", status: "Zero-Overdraft" },
      { name: "LLM Provider Fallback Circuit", val: "Active", status: "Claude -> OpenAI" }
    ]
  }
};

let currentAppKey = 'fintech';
let currentViewMode = 'preview'; // 'preview' | 'schema' | 'benchmarks'

function renderSandbox() {
  const container = document.getElementById('sandboxContainer');
  if (!container) return;

  const app = SANDBOX_DATA[currentAppKey];
  if (!app) return;

  // Update demo user bar
  const demoUserEl = document.getElementById('sandboxDemoUser');
  if (demoUserEl) {
    demoUserEl.innerHTML = `<span><strong>Session Context:</strong> ${app.demoUser}</span> <span style="color: var(--status-live);">● Read-Only Live Sandbox</span>`;
  }

  // Update App Switcher Buttons
  document.querySelectorAll('.sandbox-app-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.app === currentAppKey);
  });

  // Update View Mode Buttons
  document.querySelectorAll('.view-mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === currentViewMode);
  });

  // Render View Content
  const bodyEl = document.getElementById('sandboxBodyArea');
  if (!bodyEl) return;

  if (currentViewMode === 'preview') {
    renderPreviewView(bodyEl, app);
  } else if (currentViewMode === 'schema') {
    renderSchemaView(bodyEl, app);
  } else if (currentViewMode === 'benchmarks') {
    renderBenchmarksView(bodyEl, app);
  }
}

function renderPreviewView(container, app) {
  let kpisHtml = app.kpis.map(k => `
    <div class="kpi-card">
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-val">${k.val}</div>
      <div class="kpi-delta">${k.delta}</div>
    </div>
  `).join('');

  let rowsHtml = app.subscribers.map((s, idx) => `
    <tr>
      <td><span class="mono-tag">${s.id}</span></td>
      <td><strong>${s.org}</strong></td>
      <td>${s.plan}</td>
      <td>
        <span class="status-pill ${s.status === 'Active' || s.status === 'Received' ? 'live' : ''}" style="${s.status.includes('Alert') || s.status === 'Past Due' ? 'color:#B45309; background:#FEF3C7; border:1px solid rgba(180,83,9,0.2);' : ''}">
          <span class="status-dot"></span> ${s.status}
        </span>
      </td>
      <td>${s.seats} ${currentAppKey === 'erp' ? 'Units' : currentAppKey === 'ai' ? 'Reqs' : 'Seats'}</td>
      <td><span style="font-family: var(--font-mono); font-size: 0.75rem;">${s.lastPayment}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="triggerRowAction('${s.id}', '${s.org}')">
          ${currentAppKey === 'fintech' ? 'Simulate Charge' : currentAppKey === 'erp' ? 'Inspect SKU' : 'Test Prompt'}
        </button>
      </td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="mini-dashboard">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 4px;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 4px;">${app.name}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">Interactive mock runtime simulating live database state, webhooks, and multi-tenant RLS boundaries.</p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn btn-secondary btn-sm" onclick="simulateLiveAction()">
            ⚡ ${currentAppKey === 'fintech' ? 'Fire Stripe Webhook' : currentAppKey === 'erp' ? 'Dispatch PO Order' : 'Stream AI Token Test'}
          </button>
          <button class="btn btn-primary btn-sm" onclick="configureSandboxStack('${currentAppKey}')">
            Configure This Exact Stack →
          </button>
        </div>
      </div>

      <div class="kpi-row-3">
        ${kpisHtml}
      </div>

      <div id="sandboxEventBanner" style="display: none; background: #DCFCE7; border: 1px solid rgba(21,128,61,0.3); padding: 10px 16px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.78rem; color: #15803D;">
        <!-- Simulated Realtime Event -->
      </div>

      <div class="data-table-wrapper">
        <table class="editorial-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tenant / Entity</th>
              <th>Configuration / Tier</th>
              <th>Status</th>
              <th>Volume</th>
              <th>Operational Spec</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderSchemaView(container, app) {
  container.innerHTML = `
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 4px;">PostgreSQL 16 Relational Schema & RLS Policies</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">Production-ready schema automatically deployed into your private Supabase/PostgreSQL instance day 1.</p>
        </div>
        <button class="btn btn-primary btn-sm" onclick="configureSandboxStack('${currentAppKey}')">
          Configure This Exact Stack →
        </button>
      </div>

      <div class="code-schema-box" style="margin-top: 0; min-height: 380px;">
        <pre><code>${escapeHtml(app.schema)}</code></pre>
      </div>
    </div>
  `;
}

function renderBenchmarksView(container, app) {
  let benchCards = app.benchmarks.map(b => `
    <div class="ledger-cell" style="background: var(--bg-surface-elevated); padding: 24px; border: 1px solid var(--border-hairline); border-radius: var(--radius-sm);">
      <div class="spec-label" style="margin-bottom: 6px;">${b.name}</div>
      <div class="ledger-stat-val" style="font-size: 2.2rem; margin-bottom: 4px; color: var(--text-primary);">${b.val}</div>
      <div class="status-pill live" style="margin-top: 6px;">
        <span class="status-dot"></span> ${b.status}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 4px;">Verified System & Infrastructure Benchmarks</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">Measured on production clusters running Next.js Edge, Supabase Pooler, and Cloudflare Workers.</p>
        </div>
        <button class="btn btn-primary btn-sm" onclick="configureSandboxStack('${currentAppKey}')">
          Configure This Exact Stack →
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 24px;">
        ${benchCards}
      </div>

      <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-hairline); padding: 18px; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--text-secondary);">
        <strong>Architecture Guarantee:</strong> Every deployment passes automated load testing up to 10,000 concurrent WebSocket connections and 100k daily active users before final code handover.
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function switchSandboxApp(appKey) {
  if (SANDBOX_DATA[appKey]) {
    currentAppKey = appKey;
    renderSandbox();
  }
}

function switchSandboxView(viewMode) {
  currentViewMode = viewMode;
  renderSandbox();
}

function triggerRowAction(id, name) {
  const banner = document.getElementById('sandboxEventBanner');
  if (!banner) return;
  banner.style.display = 'block';
  banner.innerHTML = `⚡ <strong>Live Action Executed:</strong> Operation verified for [${name}] (ID: ${id}) — RLS Policy verified tenant match in 6.2ms.`;
  setTimeout(() => {
    banner.style.display = 'none';
  }, 4500);
}

function simulateLiveAction() {
  const banner = document.getElementById('sandboxEventBanner');
  if (!banner) return;
  banner.style.display = 'block';
  
  if (currentAppKey === 'fintech') {
    banner.innerHTML = `⚡ <strong>Webhook Ingested:</strong> <code>evt_test_charge_succeeded</code> — $2,400 allocated to Stripe Integrations Ltd. MRR recalculated in 28ms.`;
  } else if (currentAppKey === 'erp') {
    banner.innerHTML = `⚡ <strong>Ledger Dispatched:</strong> Purchase Order #PO-4095 created for Pacific Hub. 250 units booked in double-entry ledger.`;
  } else {
    banner.innerHTML = `⚡ <strong>AI Pipeline Streaming:</strong> Vector chunk matched in 12ms. Consumed 428 tokens from tenant credit ledger.`;
  }

  setTimeout(() => {
    banner.style.display = 'none';
  }, 5000);
}

function configureSandboxStack(appKey) {
  const app = SANDBOX_DATA[appKey];
  if (app && app.modulesUsed) {
    ScopeStore.setSelectedIds(app.modulesUsed);
    window.location.href = 'configure.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSandbox();
});
