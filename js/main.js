/**
 * Solve Seeds Technologies - Corporate Platform Architecture Runtime Engine
 * Interactive 4-Layer Architecture Inspector & Smooth Navigation
 */

const LAYER_DATA = [
  {
    num: "01",
    tab: "Multi-Tenant Auth",
    title: "Layer 01: Multi-Tenant Auth & Cryptographic RBAC",
    desc: "Every platform ships with organization isolation, role hierarchies, and automated session management pre-wired day 1. Zero billable hours wasted on commodity plumbing.",
    specs: [
      { label: "AUTH PROVIDERS", val: "OAuth / Magic Links / SAML 2.0" },
      { label: "ROW-LEVEL SECURITY", val: "PostgreSQL Strict RLS Isolation" },
      { label: "SESSION LATENCY", val: "4.2ms JWT Verification" },
      { label: "COMPLIANCE READY", val: "SOC2 Type II & DPDP Act (India)" }
    ],
    code: `// Multi-Tenant Session & Role Verification Middleware
export async function verifyTenantSession(req: NextRequest) {
  const session = await auth.getSession(req);
  if (!session) return NextResponse.redirect('/login');
  
  // Strict cryptographic organization boundary verification
  const tenantContext = await db.query(
    'SELECT * FROM organizations WHERE id = $1 AND user_id = $2',
    [session.tenantId, session.userId]
  );
  return tenantContext 
    ? NextResponse.next() 
    : NextResponse.json({ error: 'Tenant Access Denied' }, { status: 403 });
}`
  },
  {
    num: "02",
    tab: "Domain Logic",
    title: "Layer 02: Sovereign Domain Logic & Enterprise Workflows",
    desc: "100% of your initial build and continuous post-delivery maintenance focuses on writing your proprietary business rules, custom algorithms, and specific domain workflows.",
    specs: [
      { label: "EXECUTION SPEED", val: "Zero Commodity Overhead" },
      { label: "API ARCHITECTURE", val: "Type-Safe tRPC & REST" },
      { label: "ASYNC ENGINE", val: "Redis + BullMQ Job Workers" },
      { label: "MAINTENANCE SLA", val: "All Customizations 100% Included" }
    ],
    code: `// Sovereign Domain Business Logic & Dynamic Workflow Execution
export async function executeDomainWorkflow(tenantId: string, payload: WorkflowPayload) {
  const organization = await db.organizations.findUnique({ where: { id: tenantId } });
  
  // Custom business rules executed with transactional integrity
  const result = await db.$transaction(async (tx) => {
    const state = await tx.ledger.recordEntry({ ...payload, orgId: tenantId });
    await notifyAuditStream({ event: 'WORKFLOW_DISPATCHED', tenantId, status: 'SUCCESS' });
    return state;
  });
  return { success: true, transactionId: result.id };
}`
  },
  {
    num: "03",
    tab: "UPI & Billing",
    title: "Layer 03: Unified Billing Engine (Global Stripe + Indian UPI)",
    desc: "Complete billing infrastructure supporting recurring international subscriptions as well as Indian domestic payment rails: UPI Autopay, Razorpay, Cashfree, and automated GST e-invoices.",
    specs: [
      { label: "PAYMENT RAILS", val: "UPI 2.0 + Stripe + Razorpay" },
      { label: "WEBHOOK INTEGRITY", val: "Guaranteed Idempotent Event Log" },
      { label: "TAX COMPLIANCE", val: "Automated GSTN B2B IRN Generation" },
      { label: "SETTLEMENT ENGINE", val: "Automated Multi-Party Split Escrow" }
    ],
    code: `// Dual Global & UPI Recurring Subscription Billing Engine
export async function processSubscriptionMandate(event: PaymentWebhookEvent) {
  const isDuplicate = await db.webhooks.findUnique({ where: { idempotencyKey: event.id } });
  if (isDuplicate) return { status: 'already_processed' };

  if (event.type === 'upi.mandate.executed' || event.type === 'invoice.paid') {
    await db.$transaction([
      db.subscriptions.update({ where: { id: event.subscriptionId }, data: { status: 'active' } }),
      db.gstInvoices.create({ data: { tenantId: event.tenantId, irn: generateIRN(event) } }),
      db.webhooks.create({ data: { idempotencyKey: event.id, eventType: event.type } })
    ]);
  }
}`
  },
  {
    num: "04",
    tab: "Cloud CI/CD",
    title: "Layer 04: Cloud CI/CD & Zero-Downtime Bharat Edge",
    desc: "Automated deployment pipelines with Git pushes, isolated preview environments per PR, Cloudflare edge caching, and automated WAL point-in-time recovery.",
    specs: [
      { label: "GLOBAL CDN", val: "Cloudflare 300+ Edge Nodes (India Hubs)" },
      { label: "CONCURRENCY CEILING", val: "100k+ Active Bharat Users" },
      { label: "COLD START TIME", val: "0ms Edge Runtime" },
      { label: "DISASTER RECOVERY", val: "Continuous Point-in-time WAL Backups" }
    ],
    code: `// Automated GitHub Actions Deployment & Migration Pipeline
name: Deploy Sovereign SaaS Cluster
on:
  push:
    branches: [main]
jobs:
  deploy-cluster:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Apply PostgreSQL RLS Schema
        run: npx prisma migrate deploy
      - name: Deploy to Distributed Edge Cluster
        run: npx wrangler pages deploy ./dist --project-name=solveseeds-os`
  }
];

let activeLayerIndex = 0;

function initLayerCard() {
  const tabsContainer = document.getElementById('heroLayerTabs');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = LAYER_DATA.map((l, idx) => `
    <button class="layer-tab-btn ${idx === activeLayerIndex ? 'active' : ''}" onclick="switchLayer(${idx})">
      <span class="tab-num">LAYER ${l.num}</span>
      <span class="tab-name">${l.tab}</span>
    </button>
  `).join('');

  renderActiveLayer();
}

function switchLayer(idx) {
  activeLayerIndex = idx;
  document.querySelectorAll('.layer-tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === activeLayerIndex);
  });
  renderActiveLayer();
}

function renderActiveLayer() {
  const contentEl = document.getElementById('heroLayerContent');
  if (!contentEl) return;

  const layer = LAYER_DATA[activeLayerIndex];

  contentEl.innerHTML = `
    <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 8px;">
      <h3 style="font-size: 1.15rem; font-weight: 700;">${layer.title}</h3>
      <span class="status-pill live"><span class="status-dot"></span> Sovereign Core</span>
    </div>
    <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 12px;">
      ${layer.desc}
    </p>

    <div class="code-schema-box">
      <pre><code>${escapeHtml(layer.code)}</code></pre>
    </div>

    <div class="layer-spec-grid">
      ${layer.specs.map(s => `
        <div class="spec-item">
          <span class="spec-label">${s.label}</span>
          <span class="spec-val">${s.val}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.addEventListener('DOMContentLoaded', () => {
  initLayerCard();
});
