/**
 * Solve Seeds Technologies - Modular Catalog & SaaS Foundation Data
 * Includes Core Plumbing (Pre-Built Day 1) & Selectable Custom Domain Modules
 */

const SAAS_MODULES = [
  // --- INCLUDED BASE PLUMBING (0 DAYS ADDED, PRE-BUILT) ---
  {
    id: "auth-rbac",
    title: "Multi-Tenant Auth & RBAC",
    category: "core",
    isBase: true,
    days: 0,
    priceTier: "included",
    desc: "Organization workspaces, magic links, OAuth (Google/GitHub/SAML), role-based permissions (Owner, Admin, Member, Auditor), and session revocation.",
    tech: ["Next.js Auth", "Supabase RLS", "JWT", "Bcrypt"],
    dependencies: ["PostgreSQL", "RLS Policies"]
  },
  {
    id: "billing-subscriptions",
    title: "Global Subscription Billing",
    category: "billing",
    isBase: true,
    days: 0,
    priceTier: "included",
    desc: "Stripe & Razorpay customer portals, tier proration, webhook reconciliation, seat-based licensing, and automated tax calculations.",
    tech: ["Stripe SDK", "Razorpay API", "Webhook Engine", "Idempotency"],
    dependencies: ["Multi-Tenant Auth"]
  },
  {
    id: "tenant-isolation",
    title: "Multi-Tenant DB Isolation",
    category: "core",
    isBase: true,
    days: 0,
    priceTier: "included",
    desc: "PostgreSQL Row-Level Security (RLS) policies guaranteeing cryptographic isolation between customer workspaces on a shared high-efficiency schema.",
    tech: ["PostgreSQL 16", "Supabase RLS", "Connection Pooler"],
    dependencies: ["PostgreSQL"]
  },
  {
    id: "audit-logs",
    title: "Immutable Security Audit Logs",
    category: "core",
    isBase: true,
    days: 0,
    priceTier: "included",
    desc: "Append-only activity logs tracking user impersonation, role modifications, IP addresses, user-agent fingerprints, and API key generation.",
    tech: ["PostgreSQL Timescale", "SHA-256 Hashes", "Export to CSV"],
    dependencies: ["Multi-Tenant Auth"]
  },
  {
    id: "transactional-email",
    title: "Transactional Notification Engine",
    category: "core",
    isBase: true,
    days: 0,
    priceTier: "included",
    desc: "React Email templates, deliverability routing via Resend/Postmark, retry queues, and bounce/spam webhook processing.",
    tech: ["React Email", "Resend API", "Redis Queue"],
    dependencies: ["Webhook Engine"]
  },
  {
    id: "admin-backoffice",
    title: "Admin Super-Portal & Impersonation",
    category: "core",
    isBase: true,
    days: 0,
    priceTier: "included",
    desc: "Internal studio management dashboard to inspect tenant health, debug user sessions via read-only impersonation, and trigger manual database overrides.",
    tech: ["Admin Ledger UI", "Audit Trigger", "Session Vault"],
    dependencies: ["Multi-Tenant Auth", "Immutable Security Audit Logs"]
  },

  // --- SELECTABLE CUSTOM EXTENSION MODULES ---
  {
    id: "ai-rag-pipeline",
    title: "AI Copilot & Vector RAG Pipeline",
    category: "ai",
    isBase: false,
    days: 4,
    priceTier: "addon",
    desc: "Document chunking, pgvector embeddings, hybrid semantic keyword search, citation attribution, and streaming LLM responses with fallback routers.",
    tech: ["pgvector", "LangChain", "OpenAI / Claude API", "Redis Cache"],
    dependencies: ["Multi-Tenant DB Isolation"]
  },
  {
    id: "realtime-analytics",
    title: "Real-Time Analytics & BI Dashboards",
    category: "data",
    isBase: false,
    days: 3,
    priceTier: "addon",
    desc: "High-density metric boards, custom date ranges, cohort retention tables, automated scheduled PDF digests, and real-time WebSocket feeds.",
    tech: ["Apache ECharts", "ClickHouse / DuckDB", "WebSockets"],
    dependencies: ["Multi-Tenant DB Isolation"]
  },
  {
    id: "marketplace-payouts",
    title: "Marketplace Split-Payments & Escrow",
    category: "billing",
    isBase: false,
    days: 5,
    priceTier: "addon",
    desc: "Stripe Connect multi-party payouts, 1099 compliance, dispute holdbacks, automated platform fee calculation, and vendor onboarding KYC.",
    tech: ["Stripe Connect", "KYC Webhooks", "Ledger Accounting"],
    dependencies: ["Global Subscription Billing"]
  },
  {
    id: "erp-inventory",
    title: "Multi-Location Inventory & ERP Ledger",
    category: "erp",
    isBase: false,
    days: 5,
    priceTier: "addon",
    desc: "Double-entry inventory ledger, low-stock threshold triggers, barcode parsing, supplier purchase orders, and transfer reconciliation.",
    tech: ["PostgreSQL Strict Ledger", "SKU Engine", "Automated Triggers"],
    dependencies: ["Multi-Tenant DB Isolation"]
  },
  {
    id: "webhook-automation",
    title: "Developer API & Webhook Dispatcher",
    category: "core",
    isBase: false,
    days: 3,
    priceTier: "addon",
    desc: "Public REST/GraphQL endpoints, per-tenant API key rotation, HMAC signature verification, automatic exponential backoff retries, and customer event log UI.",
    tech: ["Svix Engine", "HMAC SHA-256", "Redis Queue", "Rate Limiter"],
    dependencies: ["Multi-Tenant Auth"]
  },
  {
    id: "whitelabel-domains",
    title: "White-Label Custom Domains & SSL",
    category: "core",
    isBase: false,
    days: 2,
    priceTier: "addon",
    desc: "Automated Let's Encrypt SSL provisioning, CNAME DNS verification, tenant-level branding customization (logos, themes, email domains).",
    tech: ["Cloudflare for SaaS", "DNS CNAME Verification", "ACME SSL"],
    dependencies: ["Multi-Tenant Auth"]
  },
  {
    id: "token-usage-metering",
    title: "Usage-Based Metering & Credit Engine",
    category: "billing",
    isBase: false,
    days: 3,
    priceTier: "addon",
    desc: "Prepaid credit top-ups, per-token or per-operation billing meter, Redis atomic deduplication, overdraft warnings, and Stripe Metered billing sync.",
    tech: ["Redis Atomic Counters", "Stripe Metered API", "Background Cron"],
    dependencies: ["Global Subscription Billing"]
  },
  {
    id: "file-storage-cdn",
    title: "Encrypted Document Vault & S3 CDN",
    category: "data",
    isBase: false,
    days: 2,
    priceTier: "addon",
    desc: "Direct presigned S3/R2 uploads, client-side virus scanning, time-expiring download links, and automated thumbnail extraction.",
    tech: ["AWS S3 / Cloudflare R2", "Presigned URLs", "Sharp.js"],
    dependencies: ["Multi-Tenant Auth"]
  },
  {
    id: "enterprise-sso",
    title: "Enterprise SAML / Okta / Azure SSO",
    category: "core",
    isBase: false,
    days: 3,
    priceTier: "addon",
    desc: "Enterprise directory sync via SCIM, SAML 2.0 single sign-on with Okta, Azure AD, and Google Workspace, automated tenant provisioning.",
    tech: ["WorkOS / BoxyHQ", "SAML 2.0", "SCIM 2.0"],
    dependencies: ["Multi-Tenant Auth"]
  }
];

if (typeof module !== 'undefined') {
  module.exports = { SAAS_MODULES };
}
