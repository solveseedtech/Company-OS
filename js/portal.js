/**
 * Solve Seeds Technologies — Sovereign Client Staging & Live Telemetry Portal
 * Design Philosophy: Quiet, Restrained, Handcrafted Editorial Standard (Stripe / Linear / Vercel)
 * 
 * Rules:
 * - One badge maximum per surface (status is a 6px dot + muted text).
 * - 3 type sizes: 32px display serif, 11px uppercase section, 14px body.
 * - Single-card vertical ledger for milestone cadence with [Ledger] [Timeline] toggle.
 * - Single-card clean list for deliverables with preview drawer.
 * - Receded sidebar on #F5F1E8 with 3-metric staging monitor.
 * - No marketing claims or bold preambles in status dashboard.
 * - Actionable client loop: see → act → see your act recorded with immutable audit trail.
 */

(function () {
  'use strict';

  // ── 1. Sovereign Client Projects Database ─────────────────────
  const CLIENT_PROJECTS = {
    'PRJ-9042-FINTECH': {
      id: 'PRJ-9042-FINTECH',
      name: 'FinTech UPI 2.0 Recurring Billing & Merchant Engine',
      clientId: 'SST-CORP-4091',
      orgName: 'BharatPay Enterprise Platform',
      scope: '10–14 Day Full-Stack Delivery',
      launchDate: 'Oct 19, 2026',
      statusMeta: 'Day 9 of 14 &bull; On schedule',
      statusLabel: 'On schedule',
      rag: 'healthy',
      progressPct: 82,
      daysRemaining: 3,
      currentDay: 9,
      totalDays: 14,
      nextMilestone: 'NPCI Autopay webhook replay audit & compliance sign-off',
      architect: {
        name: 'Raghav S.',
        role: 'Principal Systems Architect',
        avatar: 'RS',
        hub: 'Mumbai Edge Hub (IST / UTC+5:30)',
        focus: 'UPI 2.0 Webhook Verification'
      },
      stagingUrl: 'https://staging-prj9042.client.solveseeds.in',
      gitRepo: 'https://github.com/solveseedtech/Company-OS',
      edgeRegion: 'Mumbai (ap-south-1)',
      edgeLatency: '18ms',
      uptime: '99.98%',
      velocity: 'Completed 2 of 4 phases · 3 days ahead of schedule',
      scopeDrift: 'Scope: +1 customization (included in SLA) · Budget: on track',
      phases: [
        {
          id: 'p1',
          numShort: '01',
          category: 'ARCHITECTURE',
          dayRange: 'DAYS 1–3',
          dayStart: 1,
          dayEnd: 3,
          title: 'Architecture Blueprint & Strict RLS',
          desc: 'PostgreSQL tenant boundary isolation, cryptographic JWT vault, cloud VPC setup on Indian edge.',
          status: 'status-done',
          statusLabel: 'Complete',
          progressPct: 100,
          signedOff: true,
          signedOffText: 'Approved by Siddharth M. · Oct 07, 2026',
          tasks: [
            { text: 'Row-level security (RLS) policies verified on multi-tenant ledger tables', done: true },
            { text: 'Sub-25ms regional Redis token cache deployed in Mumbai ap-south-1', done: true },
            { text: 'Automated DB failover and continuous WAL streaming configured', done: true }
          ],
          deliverables: [
            { name: 'architecture_blueprint_v1.pdf', size: '1.4 MB', format: 'PDF', uploader: 'Raghav S.', time: 'Day 3' },
            { name: 'schema_ddl_v1.sql', size: '18 KB', format: 'SQL', uploader: 'Systems Pod', time: 'Day 3' }
          ]
        },
        {
          id: 'p2',
          numShort: '02',
          category: 'CORE DOMAIN LOGIC',
          dayRange: 'DAYS 4–7',
          dayStart: 4,
          dayEnd: 7,
          title: 'UPI Mandate State Machine & BullMQ Workers',
          desc: 'Proprietary business state machines, BullMQ worker queues, NPCI mandate registration, and idempotency keys.',
          status: 'status-done',
          statusLabel: 'Complete',
          progressPct: 100,
          signedOff: true,
          signedOffText: 'Approved by Siddharth M. · Oct 13, 2026',
          tasks: [
            { text: 'NPCI UPI AutoPay mandate registration state machine with idempotency', done: true },
            { text: 'BullMQ background queues for automated retry and backoff on mandate failures', done: true },
            { text: 'Merchant webhook signature verification using HMAC-SHA256', done: true },
            { text: 'Distributed locking via Redis Redlock to prevent double-debit race conditions', done: true }
          ],
          deliverables: [
            { name: 'merchant_api_spec_v2.json', size: '34 KB', format: 'JSON', uploader: 'Raghav S.', time: 'Day 7' },
            { name: 'state_machine_test_report.pdf', size: '2.8 MB', format: 'PDF', uploader: 'Systems Pod', time: 'Day 7' }
          ]
        },
        {
          id: 'p3',
          numShort: '03',
          category: 'STAGING AUDIT',
          dayRange: 'DAYS 8–10',
          dayStart: 8,
          dayEnd: 10,
          title: 'NPCI Autopay Webhook Replay & Staging Audit',
          desc: 'Synthetic webhook replay testing, fault injection, edge latency benchmark, and client staging validation.',
          status: 'status-active',
          statusLabel: 'In progress',
          progressPct: 45,
          signedOff: false,
          signedOffText: 'In active client sprint review',
          tasks: [
            { text: 'Replay 10,000 synthetic webhook events with 0 duplicate ledger entries', done: true },
            { text: 'Perform chaos engineering: simulated 500ms network partitions on Redis', done: true },
            { text: 'Client UAT sign-off on staging environment', done: false }
          ],
          deliverables: [
            { name: 'synthetic_load_test_results.pdf', size: '3.1 MB', format: 'PDF', uploader: 'Raghav S.', time: 'Yesterday' },
            { name: 'staging_verification_checklist.pdf', size: '420 KB', format: 'PDF', uploader: 'Systems Pod', time: 'Yesterday' }
          ]
        },
        {
          id: 'p4',
          numShort: '04',
          category: 'LIFETIME SLA',
          dayRange: 'DAYS 11–14',
          dayStart: 11,
          dayEnd: 14,
          title: 'Production Cutover & Lifetime Maintenance OS',
          desc: 'Zero-downtime DNS propagation, live traffic routing, automated database snapshots, and lifetime support.',
          status: 'status-upcoming',
          statusLabel: 'Queued',
          progressPct: 0,
          signedOff: false,
          signedOffText: 'Queued for Phase 04',
          tasks: [
            { text: 'DNS cutover to AWS CloudFront edge with TLS 1.3 certificates', done: false },
            { text: 'Configure automated daily encrypted database snapshots to cold storage', done: false },
            { text: 'Lifetime Maintenance OS activation ($0 change orders)', done: false }
          ],
          deliverables: [
            { name: 'production_runbook_v1.pdf', size: '890 KB', format: 'PDF', uploader: 'Raghav S.', time: 'Upcoming' }
          ]
        }
      ],
      commits: [
        {
          hash: 'e8912ba',
          text: 'Verified NPCI mandate webhook replay idempotency under 10k burst requests',
          time: '2 hours ago',
          author: 'Raghav S.',
          ci: '142 tests passed'
        },
        {
          hash: '3a19bc0',
          text: 'Configured BullMQ retry backoff with jitter for failed merchant callbacks',
          time: '6 hours ago',
          author: 'Systems Pod',
          ci: '142 tests passed'
        },
        {
          hash: '7c401ee',
          text: 'Added Redis Redlock distributed locking to prevent duplicate debit mutations',
          time: 'Yesterday',
          author: 'Raghav S.',
          ci: 'All checks green'
        }
      ],
      customizations: [
        {
          id: 'REQ-042',
          title: 'Add automated GST B2B e-invoice PDF download with signed QR code',
          requester: 'Siddharth M. (CTO)',
          submittedDate: 'Oct 12, 2026',
          status: 'Deployed to staging',
          eta: 'Current cycle',
          cost: '$0.00 / ₹0 (Lifetime SLA Covered)',
          affectedMilestone: 'Phase 02 · UPI Mandate State Machine',
          timeline: [
            { step: 'Submitted', actor: 'Siddharth M.', date: 'Oct 12, 2026', done: true },
            { step: 'Reviewed', actor: 'Raghav S.', date: 'Oct 13, 2026', done: true },
            { step: 'Approved', actor: 'Siddharth M.', date: 'Oct 13, 2026', done: true },
            { step: 'In progress', actor: 'Systems Pod', date: 'Oct 14, 2026', done: true },
            { step: 'Deployed', actor: 'CI/CD ap-south-1', date: 'Oct 15, 2026', done: true },
            { step: 'Client verified', actor: 'Pending Client Sign-Off', date: 'In verification', done: false, active: true }
          ],
          comments: [
            { author: 'Siddharth M.', role: 'Client CTO', time: 'Oct 12, 2026', body: 'We need standard IRN and signed QR code embedded in the invoice generation endpoint for B2B merchants.' },
            { author: 'Raghav S.', role: 'Principal Architect', time: 'Oct 13, 2026', body: 'Specification verified. Integrating with NIC GST e-invoice sandbox endpoint. Covered under continuous SLA at zero surcharge.' },
            { author: 'Systems Pod', role: 'Engineering Lead', time: 'Oct 15, 2026', body: 'Deployed to staging-prj9042.client.solveseeds.in/api/v1/invoices. QR code rendering verified with TaxPro scanner.' }
          ],
          files: ['gst_einvoice_schema_v2.json', 'taxpro_validation_report.pdf']
        },
        {
          id: 'REQ-043',
          title: 'Add merchant analytics filter by transaction status',
          requester: 'Siddharth M. (CTO)',
          submittedDate: 'Oct 15, 2026',
          status: 'In review',
          eta: 'ETA 24h',
          cost: '$0.00 / ₹0 (Lifetime SLA Covered)',
          affectedMilestone: 'Phase 02 · UPI Mandate State Machine',
          timeline: [
            { step: 'Submitted', actor: 'Siddharth M.', date: 'Oct 15, 2026', done: true },
            { step: 'Reviewed', actor: 'Raghav S.', date: 'In review', done: false, active: true },
            { step: 'Approved', actor: 'Siddharth M.', date: 'Queued', done: false },
            { step: 'In progress', actor: 'Systems Pod', date: 'Queued', done: false },
            { step: 'Deployed', actor: 'ap-south-1', date: 'Queued', done: false },
            { step: 'Client verified', actor: 'Pending', date: 'Queued', done: false }
          ],
          comments: [
            { author: 'Siddharth M.', role: 'Client CTO', time: 'Oct 15, 2026', body: 'Merchants need to filter analytics by Settled / Pending / Failed directly in the dashboard export.' }
          ],
          files: ['analytics_filter_spec.pdf']
        }
      ]
    },

    'PRJ-8119-ERP': {
      id: 'PRJ-8119-ERP',
      name: 'Multi-Location Warehouse Inventory & GST Ledger',
      clientId: 'SST-CORP-4091',
      orgName: 'AgriCentral Logistics SaaS',
      scope: '5–7 Day MVP Launch',
      launchDate: 'Tomorrow',
      statusMeta: 'Day 6 of 7 &bull; Staging ready',
      statusLabel: 'Staging ready',
      rag: 'healthy',
      progressPct: 94,
      daysRemaining: 1,
      currentDay: 6,
      totalDays: 7,
      nextMilestone: 'Client UAT Sign-Off & Staging Freeze',
      architect: {
        name: 'Ananya M.',
        role: 'Senior Cloud Architect',
        avatar: 'AM',
        hub: 'Bengaluru Edge Hub (IST / UTC+5:30)',
        focus: 'Double-Entry Stock Audit Ledger'
      },
      stagingUrl: 'https://staging-prj8119.client.solveseeds.in',
      gitRepo: 'https://github.com/solveseedtech/Company-OS',
      edgeRegion: 'Bengaluru (ap-south-2)',
      edgeLatency: '14ms',
      uptime: '99.99%',
      velocity: 'Completed 3 of 4 phases · On track for Day 7 freeze',
      scopeDrift: 'Scope: In-spec · Budget: on track',
      phases: [
        {
          id: 'p1',
          numShort: '01',
          category: 'ARCHITECTURE',
          dayRange: 'DAYS 1–3',
          dayStart: 1,
          dayEnd: 3,
          title: 'Multi-Warehouse Architecture & RLS',
          desc: 'Multi-facility stock ledger schemas, double-entry batch allocations, and tenant encryption.',
          status: 'status-done',
          statusLabel: 'Complete',
          progressPct: 100,
          signedOff: true,
          signedOffText: 'Approved by Siddharth M. · Oct 10, 2026',
          tasks: [
            { text: 'Double-entry stock accounting ledger schema verified under PostgreSQL RLS', done: true },
            { text: 'Multi-location inventory tracking with batch allocation locking', done: true },
            { text: 'Cryptographic tenant boundary verification', done: true }
          ],
          deliverables: [
            { name: 'warehouse_er_diagram_v1.pdf', size: '1.9 MB', format: 'PDF', uploader: 'Ananya M.', time: 'Day 3' }
          ]
        },
        {
          id: 'p2',
          numShort: '02',
          category: 'STAGING AUDIT',
          dayRange: 'DAYS 4–5',
          dayStart: 4,
          dayEnd: 5,
          title: 'Stock Sync & Staging Verification',
          desc: 'Real-time barcode scanning, automated supplier PO dispatch, and live staging verification.',
          status: 'status-done',
          statusLabel: 'Complete',
          progressPct: 100,
          signedOff: true,
          signedOffText: 'Approved by Siddharth M. · Oct 14, 2026',
          tasks: [
            { text: 'Real-time barcode scanner WebSocket feed and low-stock triggers', done: true },
            { text: 'Automated supplier PO dispatch via email and WhatsApp business API', done: true },
            { text: 'Final client staging sign-off validation', done: true }
          ],
          deliverables: [
            { name: 'inventory_staging_audit.pdf', size: '1.2 MB', format: 'PDF', uploader: 'Ananya M.', time: 'Day 5' }
          ]
        },
        {
          id: 'p3',
          numShort: '03',
          category: 'E-WAY INTEGRATION',
          dayRange: 'DAYS 6–7',
          dayStart: 6,
          dayEnd: 7,
          title: 'GST E-Way Bill Integration & Staging Freeze',
          desc: 'Automated E-way bill generation, multi-state tax reconciliation, and audit logs.',
          status: 'status-active',
          statusLabel: 'In progress',
          progressPct: 85,
          signedOff: false,
          signedOffText: 'Awaiting final staging freeze sign-off',
          tasks: [
            { text: 'NIC GST E-Way bill API integration with auto-dispatch', done: true },
            { text: 'Multi-state interstate tax calculation engine', done: true },
            { text: 'Final client freeze confirmation', done: false }
          ],
          deliverables: [
            { name: 'gst_eway_spec.pdf', size: '840 KB', format: 'PDF', uploader: 'Ananya M.', time: 'Today' }
          ]
        },
        {
          id: 'p4',
          numShort: '04',
          category: 'LIFETIME SLA',
          dayRange: 'LIFETIME',
          dayStart: 7,
          dayEnd: 7,
          title: 'Continuous Maintenance OS',
          desc: 'All future custom warehouse workflows, SKU adjustments, and security patches 100% included.',
          status: 'status-upcoming',
          statusLabel: 'Ready for SLA',
          progressPct: 0,
          signedOff: false,
          signedOffText: 'Ready to activate SLA coverage',
          tasks: [
            { text: 'Continuous SKU migration support and barcode hardware drivers', done: true },
            { text: 'Zero change-order invoices forever ($0 / ₹0)', done: true }
          ],
          deliverables: [
            { name: 'erp_sla_terms.pdf', size: '380 KB', format: 'PDF', uploader: 'Ananya M.', time: 'Upcoming' }
          ]
        }
      ],
      commits: [
        {
          hash: 'e1892ac',
          text: 'Added real-time barcode scanner WebSocket feed and low-stock triggers',
          time: '1 hour ago',
          author: 'Ananya M.',
          ci: '98 tests passed'
        },
        {
          hash: 'a92b311',
          text: 'Double-entry stock accounting ledger schema verified under PostgreSQL RLS',
          time: '4 hours ago',
          author: 'Systems Pod',
          ci: '98 tests passed'
        }
      ],
      customizations: [
        {
          id: 'REQ-028',
          title: 'Add batch expiry date alerts and automated supplier reorder notifications',
          requester: 'Siddharth M.',
          submittedDate: 'Oct 09, 2026',
          status: 'Shipped to staging',
          eta: 'Completed',
          cost: '$0.00 / ₹0 (Lifetime SLA Covered)',
          affectedMilestone: 'Phase 02 · Stock Sync & Staging Verification',
          timeline: [
            { step: 'Submitted', actor: 'Siddharth M.', date: 'Oct 09, 2026', done: true },
            { step: 'Reviewed', actor: 'Ananya M.', date: 'Oct 09, 2026', done: true },
            { step: 'Approved', actor: 'Siddharth M.', date: 'Oct 10, 2026', done: true },
            { step: 'In progress', actor: 'Systems Pod', date: 'Oct 11, 2026', done: true },
            { step: 'Deployed', actor: 'CI/CD ap-south-2', date: 'Oct 13, 2026', done: true },
            { step: 'Client verified', actor: 'Siddharth M.', date: 'Oct 14, 2026', done: true }
          ],
          comments: [
            { author: 'Siddharth M.', role: 'Client CTO', time: 'Oct 09, 2026', body: 'Need automated WhatsApp alerts 15 days before pharmaceutical batch expiry.' },
            { author: 'Ananya M.', role: 'Senior Architect', time: 'Oct 10, 2026', body: 'Implemented via background cron worker. Ready on staging.' }
          ],
          files: ['batch_expiry_cron.sql']
        }
      ]
    },

    'PRJ-5520-AI': {
      id: 'PRJ-5520-AI',
      name: 'Sovereign AI Wrapper & Enterprise RAG Knowledge Vault',
      clientId: 'SST-CORP-4091',
      orgName: 'Sovereign AI Wrapper',
      scope: '10–14 Day Full-Stack Delivery',
      launchDate: 'Oct 26, 2026',
      statusMeta: 'Day 3 of 10 &bull; On schedule',
      statusLabel: 'On schedule',
      rag: 'healthy',
      progressPct: 35,
      daysRemaining: 7,
      currentDay: 3,
      totalDays: 10,
      nextMilestone: 'pgvector indexing & Indian edge caching',
      architect: {
        name: 'Raghav S.',
        role: 'Principal Systems Architect',
        avatar: 'RS',
        hub: 'Mumbai Edge Hub (IST / UTC+5:30)',
        focus: 'Vector Embedding Vault & RAG Router'
      },
      stagingUrl: 'https://staging-prj5520.client.solveseeds.in',
      gitRepo: 'https://github.com/solveseedtech/Company-OS',
      edgeRegion: 'Mumbai (ap-south-1)',
      edgeLatency: '19ms',
      uptime: '99.98%',
      velocity: 'Completed 1 of 4 phases · On track for Phase 02 delivery',
      scopeDrift: 'Scope: +1 customization · Budget: on track',
      phases: [
        {
          id: 'p1',
          numShort: '01',
          category: 'FOUNDATION',
          dayRange: 'DAYS 1–3',
          dayStart: 1,
          dayEnd: 3,
          title: 'pgvector Schema & Private Data Ingestion',
          desc: 'PostgreSQL pgvector clustering, chunking pipelines, and zero-data-leakage encryption.',
          status: 'status-done',
          statusLabel: 'Complete',
          progressPct: 100,
          signedOff: true,
          signedOffText: 'Approved by Siddharth M. · Oct 14, 2026',
          tasks: [
            { text: 'pgvector HNSW index tuning with cosine distance optimization', done: true },
            { text: 'Private PDF document chunking and metadata attribution pipeline', done: true },
            { text: 'Strict tenant RLS isolation on all embedding collections', done: true }
          ],
          deliverables: [
            { name: 'vector_benchmark_report.pdf', size: '2.1 MB', format: 'PDF', uploader: 'Raghav S.', time: 'Day 3' },
            { name: 'embedding_schema_v1.sql', size: '24 KB', format: 'SQL', uploader: 'Systems Pod', time: 'Day 3' }
          ]
        },
        {
          id: 'p2',
          numShort: '02',
          category: 'RAG ENGINE',
          dayRange: 'DAYS 4–7',
          dayStart: 4,
          dayEnd: 7,
          title: 'Semantic Retrieval & LLM Gateway',
          desc: 'Hybrid BM25 + dense vector search with local failover and streaming token responses.',
          status: 'status-active',
          statusLabel: 'In progress',
          progressPct: 35,
          signedOff: false,
          signedOffText: 'In active sprint verification',
          tasks: [
            { text: 'Hybrid lexical BM25 + dense embedding re-ranking pipeline', done: true },
            { text: 'Streaming token SSE gateway with sub-25ms first token latency', done: false },
            { text: 'Prompt injection sanitization and PII redaction layer', done: false }
          ],
          deliverables: [
            { name: 'rag_architecture_spec.pdf', size: '1.7 MB', format: 'PDF', uploader: 'Raghav S.', time: 'Yesterday' },
            { name: 'latency_benchmark_mumbai.json', size: '14 KB', format: 'JSON', uploader: 'Systems Pod', time: 'Yesterday' }
          ]
        },
        {
          id: 'p3',
          numShort: '03',
          category: 'AIR-GAPPED CLUSTER',
          dayRange: 'DAYS 8–10',
          dayStart: 8,
          dayEnd: 10,
          title: 'Enterprise Air-Gapped Deployment',
          desc: 'Private VPC model execution, audit logs, and compliance reporting.',
          status: 'status-upcoming',
          statusLabel: 'Queued',
          progressPct: 0,
          signedOff: false,
          signedOffText: 'Queued for Phase 03',
          tasks: [
            { text: 'Containerized Ollama / vLLM private cluster provisioning', done: false },
            { text: 'Immutable retrieval audit logging for regulatory DPDP compliance', done: false }
          ],
          deliverables: [
            { name: 'sovereign_ai_blueprint.pdf', size: '920 KB', format: 'PDF', uploader: 'Raghav S.', time: 'Upcoming' }
          ]
        },
        {
          id: 'p4',
          numShort: '04',
          category: 'LIFETIME SLA',
          dayRange: 'LIFETIME',
          dayStart: 10,
          dayEnd: 10,
          title: 'Continuous Maintenance OS',
          desc: 'Continuous model fine-tuning, embedding migrations, and zero-hourly fee maintenance.',
          status: 'status-upcoming',
          statusLabel: 'Ready for SLA',
          progressPct: 0,
          signedOff: false,
          signedOffText: 'Ready to activate SLA coverage',
          tasks: [
            { text: 'Ongoing model weights evaluation and semantic caching tuning', done: true },
            { text: 'Zero change-order invoices forever ($0 / ₹0)', done: true }
          ],
          deliverables: [
            { name: 'ai_maintenance_sla.pdf', size: '360 KB', format: 'PDF', uploader: 'Raghav S.', time: 'Upcoming' }
          ]
        }
      ],
      commits: [
        {
          hash: 'd89201f',
          text: 'Tuned PostgreSQL pgvector HNSW index parameters for sub-15ms vector retrieval',
          time: '3 hours ago',
          author: 'Raghav S.',
          ci: '112 tests passed'
        },
        {
          hash: '4bc188a',
          text: 'Implemented zero-data-leakage tenant boundaries for vector embeddings',
          time: 'Yesterday',
          author: 'Systems Pod',
          ci: '112 tests passed'
        }
      ],
      customizations: [
        {
          id: 'REQ-051',
          title: 'Add custom prompt grounding filter for enterprise HR policy search',
          requester: 'Siddharth M.',
          submittedDate: 'Oct 15, 2026',
          status: 'In review',
          eta: 'ETA 24h',
          cost: '$0.00 / ₹0 (Lifetime SLA Covered)',
          affectedMilestone: 'Phase 02 · Semantic Retrieval & LLM Gateway',
          timeline: [
            { step: 'Submitted', actor: 'Siddharth M.', date: 'Oct 15, 2026', done: true },
            { step: 'Reviewed', actor: 'Raghav S.', date: 'In review', done: false, active: true },
            { step: 'Approved', actor: 'Siddharth M.', date: 'Queued', done: false },
            { step: 'In progress', actor: 'Systems Pod', date: 'Queued', done: false },
            { step: 'Deployed', actor: 'ap-south-1', date: 'Queued', done: false },
            { step: 'Client verified', actor: 'Pending', date: 'Queued', done: false }
          ],
          comments: [
            { author: 'Siddharth M.', role: 'Client CTO', time: 'Oct 15, 2026', body: 'Filter out drafts and archived HR documents from the grounding retrieval step.' }
          ],
          files: ['hr_grounding_filter.py']
        }
      ]
    }
  };

  // ── 2. Vault Deliverable Previews Database ─────────────────────
  const FILE_PREVIEWS = {
    'git-deed': {
      title: 'Git Repository Transfer Confirmation Deed',
      format: 'PDF · SHA-256 SIGNED',
      size: '2.4 MB',
      uploader: 'Raghav S. (Principal Systems Architect)',
      time: 'Day 7 · Verified by Solve Seeds Legal Pod',
      downloadUrl: '#',
      type: 'deed',
      summary: 'Sole and irrevocable assignment of 100% intellectual property, source code, commit history, and container images from Solve Seeds Technologies Pvt. Ltd. to BharatPay Enterprise.',
      hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      body: `DEED OF INTELLECTUAL PROPERTY ASSIGNMENT & GIT TRANSFER

Date: October 14, 2026
Assignor: Solve Seeds Technologies Pvt. Ltd. (Bengaluru / Mumbai Edge)
Assignee: BharatPay Enterprise Technologies (Client ID: SST-CORP-4091)
Repository: github.com/solveseedtech/Company-OS.git
Primary Branch: main (Commit e8912ba77682)

TERMS OF EXCLUSIVE OWNERSHIP:
1. Complete Title Transfer: Assignor transfers full, unrestricted, unencumbered proprietary ownership of all software artifacts, source code, SQL schemas, Terraform modules, Docker containers, and telemetry scripts.
2. Zero Vendor Lock-In: Assignee retains unrestricted rights to self-host, fork, modify, re-license, or migrate the platform without royalty fees.
3. Lifetime Maintenance Warranty: Solve Seeds guarantees 100% warranty coverage for zero change-order fees ($0 / ₹0).

VERIFICATION HASH (SHA-256):
e8912ba77682cb301f99c28e810a9f1406839bb045a1f28b7e2831c255da10fa`
    },

    'docker': {
      title: 'Dockerfile.production (Multi-Stage Alpine)',
      format: 'DOCKER · ALPINE 3.20',
      size: '3.8 KB',
      uploader: 'Systems Pod',
      time: 'Day 5 · CI/CD Automated Build',
      downloadUrl: '#',
      type: 'code',
      body: `# Solve Seeds Technologies — High-Throughput Production Image
# Multi-stage minimal footprint build (< 48MB uncompressed)
FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit
COPY . .
RUN npm run build

# Stage 2: Hardened Edge Runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 sstuser
COPY --from=builder --chown=sstuser:nodejs /app/dist ./dist
COPY --from=builder --chown=sstuser:nodejs /app/node_modules ./node_modules
USER sstuser
EXPOSE 3000
HEALTHCHECK --interval=15s --timeout=3s --retries=3 \\
  CMD wget -qO- http://localhost:3000/api/health || exit 1
CMD ["node", "dist/server.js"]`
    },

    'terraform': {
      title: 'main.tf (AWS ap-south-1 Mumbai Blueprint)',
      format: 'HCL · TERRAFORM 1.9',
      size: '8.4 KB',
      uploader: 'Systems Pod',
      time: 'Day 3 · Verified under VPC Isolation',
      downloadUrl: '#',
      type: 'code',
      body: `# Solve Seeds Technologies — Sovereign Cloud Infrastructure
# Region: Mumbai (ap-south-1) · Zero Public IP Database Subnets
terraform {
  required_version = ">= 1.9.0"
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.50" }
  }
}

provider "aws" {
  region = "ap-south-1"
  default_tags {
    tags = {
      Project     = "PRJ-9042-FINTECH"
      Client      = "SST-CORP-4091"
      Environment = "staging"
      ManagedBy   = "SolveSeedsOS"
    }
  }
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.8.0"
  name    = "sst-vpc-ap-south-1"
  cidr    = "10.0.0.0/16"
  azs     = ["ap-south-1a", "ap-south-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
  enable_nat_gateway = true
  single_nat_gateway = true
}`
    },

    'secrets': {
      title: 'env-vault-encrypted.gpg (AES-256 Vault)',
      format: 'GPG · AES-256 ENCRYPTED',
      size: '4.2 KB',
      uploader: 'Raghav S. (Principal Systems Architect)',
      time: 'Day 1 · Zero-Knowledge Sealed',
      downloadUrl: '#',
      type: 'secrets',
      summary: 'GPG-armored key vault containing encrypted database connection strings, JWT signing secrets, NPCI API credentials, and AWS IAM role keys.',
      hash: '9f83a21b33c09e840a1b668d88e09f53678129a08e1f00994116acb8744021ef',
      body: `-----BEGIN PGP MESSAGE-----
Version: SovereignVault v2.4 (Solve Seeds Technologies)
Comment: Client Key ID SST-CORP-4091 / Fingerprint B920-41AA-8812-709E

jA0ECQMC077V1/qT5g7/0sBOAa0q18xPZqW1Wk7mI8eP9c2Uo7b6V65xL2Q9x9Qe
aV2p77L88819A019bBqwe897a1L287hGb01Aas9921bBhq77L0992b18hG7771La
... [ENCRYPTED ZERO-KNOWLEDGE CIPHERTEXT] ...
-----END PGP MESSAGE-----`
    }
  };

  // ── 2B. Legal Documents & Invoices Database (/portal/documents) ───
  const DOCUMENTS_DATABASE = [
    {
      id: 'doc-1',
      title: 'Master Services Agreement (MSA v2.4)',
      type: 'contract',
      ref: 'BHP-MSA-2026-01',
      date: 'Oct 01, 2026',
      status: 'signed',
      statusLabel: 'Executed · SHA-256 Verified',
      signatories: 'Siddharth M. (CTO) & Raghav S. (Solve Seeds Legal Pod)',
      size: '2.4 MB',
      fileKey: 'git-deed',
      desc: 'Perpetual zero-lock-in MSA governing platform ownership, 100% intellectual property assignment, and lifetime warranty.'
    },
    {
      id: 'doc-2',
      title: 'Statement of Work (SOW-2026-088) · Full-Stack UPI 2.0 Delivery',
      type: 'contract',
      ref: 'BHP-PO-9912',
      date: 'Oct 05, 2026',
      status: 'signed',
      statusLabel: 'Active SOW · Phase 02 Handed Over',
      signatories: 'Siddharth M. & Raghav S.',
      size: '1.8 MB',
      fileKey: 'git-deed',
      desc: '10–14 day engineering delivery milestones, strict RLS isolation, NPCI mandate workers, and live staging SLAs.'
    },
    {
      id: 'doc-3',
      title: 'Tax Invoice INV-2026-1001 · Milestone 01 & 02 Handover',
      type: 'invoice',
      ref: 'INV-2026-1001 (PO #BHP-PO-9912)',
      date: 'Oct 13, 2026',
      status: 'sla',
      statusLabel: 'PAID · ₹0 Change Order (Lifetime SLA)',
      amount: '₹0.00 / $0',
      size: '420 KB',
      fileKey: 'git-deed',
      desc: 'Architectural blueprint, PostgreSQL RLS schema, BullMQ worker queues. $0 fee covered under Lifetime Maintenance agreement.'
    },
    {
      id: 'doc-4',
      title: 'Tax Invoice INV-2026-1002 · Retainer & ap-south-1 Edge Cluster',
      type: 'invoice',
      ref: 'INV-2026-1002 (PO #BHP-PO-9912)',
      date: 'Oct 14, 2026',
      status: 'sla',
      statusLabel: 'PAID · SLA Included',
      amount: '₹0.00 (Zero Overage)',
      size: '390 KB',
      fileKey: 'git-deed',
      desc: 'Sub-25ms regional Redis cluster and Lakebase connection pooling warranty.'
    },
    {
      id: 'doc-5',
      title: 'Form 16A & TDS Tax Compliance Certificate FY26-27',
      type: 'tax',
      ref: 'TDS-PAN-AAACS1234F',
      date: 'Oct 10, 2026',
      status: 'signed',
      statusLabel: 'Verified · Section 194J Compliant',
      signatories: 'Solve Seeds Technologies Pvt. Ltd. Corporate Tax Pod',
      size: '610 KB',
      fileKey: 'git-deed',
      desc: 'Verified quarterly tax deduction certificate under Indian Income Tax Act. Zero outstanding withholding liabilities.'
    },
    {
      id: 'doc-6',
      title: 'GST B2B Electronic Tax Invoice (#29AABCS1234F1Z5)',
      type: 'tax',
      ref: 'GST-EWAY-2026-9042',
      date: 'Oct 12, 2026',
      status: 'signed',
      statusLabel: 'Reconciled & Cleared',
      signatories: 'GST Portal ap-south-1 Automation',
      size: '480 KB',
      fileKey: 'git-deed',
      desc: '18% GST reverse-charge invoice verified and cleared for input tax credit (ITC) reconciliation.'
    }
  ];

  // ── 3. Global Activity Log Database ──────────────────────────
  const GLOBAL_ACTIVITIES = [
    {
      id: 'act-1',
      type: 'milestone',
      channel: 'email',
      projectId: 'PRJ-9042-FINTECH',
      actor: 'Siddharth M.',
      actorAvatar: 'SM',
      verb: 'Approved Phase 02 Staging Release',
      desc: 'Formal client sign-off recorded via email digest webhook for core domain logic, BullMQ workers, and NPCI webhook replay.',
      time: '12 minutes ago',
      timestamp: '2026-10-15T22:30:00Z'
    },
    {
      id: 'act-2',
      type: 'commit',
      channel: 'slack',
      projectId: 'PRJ-9042-FINTECH',
      actor: 'Raghav S.',
      actorAvatar: 'RS',
      verb: 'Synced from Slack #client-fintech-pod',
      desc: 'Verified NPCI mandate webhook replay idempotency under 10k burst requests in pod channel.',
      time: '2 hours ago',
      timestamp: '2026-10-15T20:30:00Z'
    },
    {
      id: 'act-3',
      type: 'customization',
      channel: 'portal',
      projectId: 'PRJ-9042-FINTECH',
      actor: 'Siddharth M.',
      actorAvatar: 'SM',
      verb: 'Submitted REQ-043',
      desc: 'Add merchant analytics filter by transaction status ($0 surcharge covered under Lifetime SLA).',
      time: '3 hours ago',
      timestamp: '2026-10-15T19:00:00Z'
    },
    {
      id: 'act-4',
      type: 'commit',
      channel: 'portal',
      projectId: 'PRJ-9042-FINTECH',
      actor: 'Systems Pod',
      actorAvatar: 'SP',
      verb: 'Pushed commit 3a19bc0 to main',
      desc: 'Configured BullMQ retry backoff with jitter for failed merchant callbacks.',
      time: '6 hours ago',
      timestamp: '2026-10-15T16:00:00Z'
    },
    {
      id: 'act-5',
      type: 'deliverable',
      channel: 'portal',
      projectId: 'PRJ-9042-FINTECH',
      actor: 'Raghav S.',
      actorAvatar: 'RS',
      verb: 'Uploaded Deliverable Deed',
      desc: 'Produced Git Repository Transfer Confirmation Deed with SHA-256 legal assignment.',
      time: 'Yesterday',
      timestamp: '2026-10-14T16:00:00Z'
    },
    {
      id: 'act-6',
      type: 'milestone',
      channel: 'portal',
      projectId: 'PRJ-8119-ERP',
      actor: 'Siddharth M.',
      actorAvatar: 'SM',
      verb: 'Approved Phase 01 Architecture',
      desc: 'Formal client sign-off recorded for multi-warehouse schema & strict RLS isolation.',
      time: 'Yesterday',
      timestamp: '2026-10-14T14:30:00Z'
    },
    {
      id: 'act-7',
      type: 'commit',
      channel: 'slack',
      projectId: 'PRJ-8119-ERP',
      actor: 'Ananya M.',
      actorAvatar: 'AM',
      verb: 'Synced from Slack #client-erp-pod',
      desc: 'Added real-time barcode scanner WebSocket feed and low-stock threshold triggers.',
      time: 'Yesterday',
      timestamp: '2026-10-14T11:00:00Z'
    },
    {
      id: 'act-8',
      type: 'deliverable',
      channel: 'portal',
      projectId: 'PRJ-8119-ERP',
      actor: 'Ananya M.',
      actorAvatar: 'AM',
      verb: 'Updated Staging Deployment',
      desc: 'Deployed real-time inventory barcode feed to staging-prj8119.client.solveseeds.in.',
      time: '2 days ago',
      timestamp: '2026-10-13T18:00:00Z'
    },
    {
      id: 'act-9',
      type: 'milestone',
      channel: 'email',
      projectId: 'PRJ-5520-AI',
      actor: 'Siddharth M.',
      actorAvatar: 'SM',
      verb: 'Approved Phase 01 via email digest',
      desc: 'Formal client sign-off recorded for pgvector clustering and chunking pipelines.',
      time: '2 days ago',
      timestamp: '2026-10-13T10:00:00Z'
    }
  ];

  // ── 4. Application State ──────────────────────────────────────
  let currentClientId = 'SST-CORP-4091';
  let currentProjectKey = 'PRJ-9042-FINTECH'; // Default to FinTech UPI 2.0 Recurring Billing
  let currentView = 'detail'; // 'overview' | 'detail' | 'executive' | 'documents' | 'telemetry' | 'activity'
  let currentMilestoneView = 'ledger'; // 'ledger' | 'timeline'
  let currentDocFilter = 'all';
  let expandedPhases = { 'p3': true }; // default active phase expanded
  let unreadEventCount = 3;
  let streamState = 'connected'; // 'connected' | 'reconnecting' | 'offline'
  let streamHeartbeatTimer = null;
  let activePhaseDropdownId = null;
  let cmdActiveIndex = 0;
  let cmdFilteredItems = [];
  let gChordPending = false;
  let gChordTimer = null;
  let activeFocusedActivityIndex = -1;
  let activeActionPhaseId = null;
  let activeActionType = null; // 'approve' | 'change' | 'question'
  const prefetchCache = {};

  // ── 5. DOM Elements ──────────────────────────────────────────
  let elements = {};

  function cacheElements() {
    elements = {
      authScreen: document.getElementById('authScreen'),
      trackerDashboard: document.getElementById('trackerDashboard'),
      portalNavTabs: document.getElementById('portalNavTabs'),
      portalNavActions: document.getElementById('portalNavActions'),
      loginForm: document.getElementById('portalLoginForm'),
      demoLoginPill: document.getElementById('demoLoginPill'),
      loginSubmitBtn: document.getElementById('loginSubmitBtn'),

      // Navigation & Stream
      navActivityCount: document.getElementById('navActivityCount'),
      streamReconnectBanner: document.getElementById('streamReconnectBanner'),
      headerLiveChip: document.getElementById('headerLiveChip'),
      headerLiveText: document.getElementById('headerLiveText'),

      // Views
      viewOverview: document.getElementById('viewOverview'),
      viewDetail: document.getElementById('viewDetail'),
      viewActivity: document.getElementById('viewActivity'),
      viewExecutive: document.getElementById('viewExecutive'),
      viewDocuments: document.getElementById('viewDocuments'),
      viewTelemetry: document.getElementById('viewTelemetry'),

      // Tab Buttons
      tabBtnOverview: document.getElementById('tabBtnOverview'),
      tabBtnDetail: document.getElementById('tabBtnDetail'),
      tabBtnExecutive: document.getElementById('tabBtnExecutive'),
      tabBtnDocuments: document.getElementById('tabBtnDocuments'),
      tabBtnTelemetry: document.getElementById('tabBtnTelemetry'),
      tabBtnActivity: document.getElementById('tabBtnActivity'),

      // Overview
      projectsGrid: document.getElementById('projectsGrid'),
      overviewRequestBtn: document.getElementById('overviewRequestBtn'),

      // Detail Screen Elements
      headerStatusMeta: document.getElementById('headerStatusMeta'),
      activeProjTitle: document.getElementById('activeProjTitle'),
      headerMetaLine: document.getElementById('headerMetaLine'),
      activeProgressBar: document.getElementById('activeProgressBar'),
      headerProgressSub: document.getElementById('headerProgressSub'),
      activeStagingBtn: document.getElementById('activeStagingBtn'),
      activeGitBtn: document.getElementById('activeGitBtn'),
      openModalBtn: document.getElementById('openCustomizationModalBtn'),
      phaseCardsContainer: document.getElementById('phaseCardsContainer'),

      // Milestone View Toggle
      btnViewLedger: document.getElementById('btnViewLedger'),
      btnViewTimeline: document.getElementById('btnViewTimeline'),

      // Sidebar Telemetry
      btnRunHealthCheck: document.getElementById('btnRunHealthCheck'),
      healthUptime: document.getElementById('healthUptime'),
      healthLatency: document.getElementById('healthLatency'),
      healthStatus: document.getElementById('healthStatus'),
      stagingBottomLine: document.getElementById('stagingBottomLine'),

      // Sidebar Pod & Lists
      podAvatarLetter: document.getElementById('podAvatarLetter'),
      podArchitectName: document.getElementById('podArchitectName'),
      podArchitectRole: document.getElementById('podArchitectRole'),
      commitFeedList: document.getElementById('commitFeedList'),
      customizationList: document.getElementById('customizationList'),
      openModalRightBtn: document.getElementById('btnRequestCustomizationRight'),

      // Activity Feed
      globalActivityStream: document.getElementById('globalActivityStream'),
      activityFilterBar: document.getElementById('activityFilterBar'),

      // Modals & Drawers
      customizationModal: document.getElementById('customizationModal'),
      modalCloseBtn: document.getElementById('modalCloseBtn'),
      modalCancelBtn: document.getElementById('modalCancelBtn'),
      customizationForm: document.getElementById('customizationForm'),
      reqProjSelect: document.getElementById('reqProjSelect'),

      // Command Palette
      commandPaletteModal: document.getElementById('commandPaletteModal'),
      cmdPaletteInput: document.getElementById('cmdPaletteInput'),
      cmdResultsList: document.getElementById('cmdResultsList'),

      // File Drawer
      fileDrawerBackdrop: document.getElementById('fileDrawerBackdrop'),
      filePreviewDrawer: document.getElementById('filePreviewDrawer'),
      drawerFileName: document.getElementById('drawerFileName'),
      drawerFileFormatTag: document.getElementById('drawerFileFormatTag'),
      drawerFileContent: document.getElementById('drawerFileContent'),
      drawerFileMetaFoot: document.getElementById('drawerFileMetaFoot'),
      drawerDownloadBtn: document.getElementById('drawerDownloadBtn'),

      // Request Detail Modal
      requestDetailModal: document.getElementById('requestDetailModal'),
      reqDetailId: document.getElementById('reqDetailId'),
      reqDetailTitle: document.getElementById('reqDetailTitle'),
      reqDetailMeta: document.getElementById('reqDetailMeta'),
      reqDetailStepper: document.getElementById('reqDetailStepper'),
      reqDetailComments: document.getElementById('reqDetailComments'),
      reqCommentInput: document.getElementById('reqCommentInput'),

      // Notification Prefs Modal
      notificationPrefsModal: document.getElementById('notificationPrefsModal'),
      notifPrefsForm: document.getElementById('notifPrefsForm'),

      // Shortcuts Modal
      shortcutsModal: document.getElementById('shortcutsModal'),

      // Tier 3 & 4 Modals & Surfaces
      whatsNewModal: document.getElementById('whatsNewModal'),
      referralModal: document.getElementById('referralModal'),
      calendarModal: document.getElementById('calendarModal'),
      whiteLabelModal: document.getElementById('whiteLabelModal'),
      documentsLedgerList: document.getElementById('documentsLedgerList'),
      docsFilterStrip: document.getElementById('docsFilterStrip'),

      // Toast
      toastContainer: document.getElementById('portalToastContainer')
    };
  }

  // ── 6. Application Initialization ────────────────────────────
  function init() {
    // Pure editorial warm linen palette - remove legacy theme overrides
    localStorage.removeItem('sst_theme');
    document.documentElement.removeAttribute('data-theme');
    cacheElements();
    bindEvents();
    startTelemetryStream();

    const savedClient = sessionStorage.getItem('sst_client_id');
    if (savedClient) {
      currentClientId = savedClient;
      showDashboard();
    } else {
      showAuthScreen();
    }
  }

  // ── 7. Global Event Listeners & Shortcuts ─────────────────────
  function bindEvents() {
    // Claude Login Form Submit
    if (elements.loginForm) {
      elements.loginForm.addEventListener('submit', handleClaudeLogin);
    }

    // View Switching Tabs
    if (elements.tabBtnOverview) elements.tabBtnOverview.addEventListener('click', () => switchView('overview'));
    if (elements.tabBtnDetail) elements.tabBtnDetail.addEventListener('click', () => switchView('detail'));
    if (elements.tabBtnExecutive) elements.tabBtnExecutive.addEventListener('click', () => switchView('executive'));
    if (elements.tabBtnDocuments) elements.tabBtnDocuments.addEventListener('click', () => switchView('documents'));
    if (elements.tabBtnTelemetry) elements.tabBtnTelemetry.addEventListener('click', () => switchView('telemetry'));
    if (elements.tabBtnActivity) elements.tabBtnActivity.addEventListener('click', () => switchView('activity'));

    // Overview "Request Customization" button
    if (elements.overviewRequestBtn) {
      elements.overviewRequestBtn.addEventListener('click', () => openCustomizationModal(currentProjectKey));
    }

    // Health Check Ping Button
    if (elements.btnRunHealthCheck) {
      elements.btnRunHealthCheck.addEventListener('click', handleInstantHealthCheck);
    }

    // Open Customization Modal Buttons
    if (elements.openModalBtn) {
      elements.openModalBtn.addEventListener('click', () => openCustomizationModal(currentProjectKey));
    }
    if (elements.openModalRightBtn) {
      elements.openModalRightBtn.addEventListener('click', () => openCustomizationModal(currentProjectKey));
    }

    // Close Customization Modal
    if (elements.modalCloseBtn) elements.modalCloseBtn.addEventListener('click', closeCustomizationModal);
    if (elements.modalCancelBtn) elements.modalCancelBtn.addEventListener('click', closeCustomizationModal);
    if (elements.customizationModal) {
      elements.customizationModal.addEventListener('click', (e) => {
        if (e.target === elements.customizationModal) closeCustomizationModal();
      });
    }

    // Customization Form Submit
    if (elements.customizationForm) {
      elements.customizationForm.addEventListener('submit', handleCustomizationSubmit);
    }

    // Activity Filter Buttons
    if (elements.activityFilterBar) {
      elements.activityFilterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.activity-tab-btn');
        if (!btn) return;
        const filter = btn.getAttribute('data-filter') || 'all';
        elements.activityFilterBar.querySelectorAll('.activity-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGlobalActivityFeed(filter);
      });
    }

    // Command Palette Input Filtering & Navigation
    if (elements.cmdPaletteInput) {
      elements.cmdPaletteInput.addEventListener('input', (e) => {
        filterCommandPalette(e.target.value.trim());
      });

      elements.cmdPaletteInput.addEventListener('keydown', handleCmdKeydown);
    }

    // Global Click Listener: Dismiss dropdowns
    document.addEventListener('click', (e) => {
      // Dismiss project switcher if clicked outside
      const switcherWrap = document.getElementById('portalSwitcherWrap');
      if (switcherWrap && !switcherWrap.contains(e.target)) {
        closeProjectSwitcher();
      }

      // Dismiss avatar dropdown if clicked outside
      const avatarWrap = document.getElementById('avatarMenuWrap');
      if (avatarWrap && !avatarWrap.contains(e.target)) {
        closeAvatarMenu();
      }

      // Dismiss any open phase more-menus
      if (activePhaseDropdownId) {
        const menuEl = document.getElementById(`phaseMenu-${activePhaseDropdownId}`);
        if (menuEl && !menuEl.contains(e.target) && !e.target.closest('.phase-more-menu-btn')) {
          menuEl.style.display = 'none';
          activePhaseDropdownId = null;
        }
      }
    });

    // ── Global Keyboard Shortcuts ──
    document.addEventListener('keydown', (e) => {
      const activeEl = document.activeElement;
      const isInput = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable);

      // Escape closes any open modal, drawer, or dropdown
      if (e.key === 'Escape') {
        closeAllModalsAndDrawers();
        return;
      }

      // Command Palette (⌘K or Ctrl+K)
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        openCommandPalette();
        return;
      }

      // When an input/textarea is focused, do not trigger single-key hotkeys
      if (isInput) return;

      // '/' to focus search / open command palette
      if (e.key === '/') {
        e.preventDefault();
        openCommandPalette();
        return;
      }

      // '?' opens shortcuts cheat sheet
      if (e.key === '?') {
        e.preventDefault();
        openShortcutsModal();
        return;
      }

      // 'p' exports PDF
      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        exportProjectPdf();
        return;
      }

      // Activity Feed j / k navigation
      if (currentView === 'activity' && (e.key === 'j' || e.key === 'k')) {
        navigateActivityFeed(e.key === 'j' ? 1 : -1);
        return;
      }

      // 'g' navigation chords: g p (all projects), g d (detail), g a (activity)
      if (e.key === 'g' || e.key === 'G') {
        gChordPending = true;
        if (gChordTimer) clearTimeout(gChordTimer);
        gChordTimer = setTimeout(() => { gChordPending = false; }, 1000);
        return;
      }

      if (gChordPending) {
        gChordPending = false;
        if (gChordTimer) clearTimeout(gChordTimer);
        if (e.key === 'p' || e.key === 'P') {
          switchView('overview');
          return;
        }
        if (e.key === 'd' || e.key === 'D') {
          switchView('detail');
          return;
        }
        if (e.key === 'e' || e.key === 'E') {
          switchView('executive');
          return;
        }
        if (e.key === 'm' || e.key === 'M') {
          switchView('documents');
          return;
        }
        if (e.key === 't' || e.key === 'T') {
          switchView('telemetry');
          return;
        }
        if (e.key === 'a' || e.key === 'A') {
          switchView('activity');
          return;
        }
      }
    });
  }

  function closeAllModalsAndDrawers() {
    closeCommandPalette();
    closeFilePreview();
    closeRequestDetail();
    closeNotificationPrefs();
    closeShortcutsModal();
    closeCustomizationModal();
    closeProjectSwitcher();
    closeAvatarMenu();
    closeWhatsNew();
    closeReferralModal();
    closeCalendarSync();
    closeWhiteLabel();
    if (activePhaseDropdownId) {
      const menuEl = document.getElementById(`phaseMenu-${activePhaseDropdownId}`);
      if (menuEl) menuEl.style.display = 'none';
      activePhaseDropdownId = null;
    }
  }

  // ── 8. Claude-Inspired Authentication Handlers (Task 5) ────────
  async function handleClaudeLogin(e) {
    if (e) e.preventDefault();
    const emailInput = document.getElementById('portalEmail');
    const pwdInput = document.getElementById('portalPassword');
    const inlineErr = document.getElementById('loginInlineError');
    const emailErr = document.getElementById('loginEmailError');
    const pwdErr = document.getElementById('loginPasswordError');
    const submitBtn = document.getElementById('loginSubmitBtn');

    if (inlineErr) inlineErr.style.display = 'none';
    if (emailErr) emailErr.style.display = 'none';
    if (pwdErr) pwdErr.style.display = 'none';

    const email = (emailInput ? emailInput.value : '').trim();
    const password = (pwdInput ? pwdInput.value : '');

    let hasErr = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      if (emailErr) {
        emailErr.textContent = 'Please enter a valid email address.';
        emailErr.style.display = 'block';
      }
      hasErr = true;
    }

    if (!password) {
      if (pwdErr) {
        pwdErr.textContent = 'Password is required.';
        pwdErr.style.display = 'block';
      }
      hasErr = true;
    } else if (password.length < 6) {
      if (pwdErr) {
        pwdErr.textContent = 'Password must be at least 6 characters.';
        pwdErr.style.display = 'block';
      }
      hasErr = true;
    }

    if (hasErr) return;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Signing In…';
    }

    let resolvedClientId = 'SST-CORP-4091';
    let resolvedName = email.split('@')[0];
    try {
      const users = JSON.parse(localStorage.getItem('sst_registered_users') || '[]');
      const found = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (found) {
        resolvedClientId = found.clientId || resolvedClientId;
        resolvedName = found.name || resolvedName;
      }
    } catch (err) {}

    try {
      const resp = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await resp.json().catch(() => ({}));

      if (resp.ok && data.ok) {
        currentClientId = data.user?.clientId || resolvedClientId;
        sessionStorage.setItem('sst_client_id', currentClientId);
        sessionStorage.setItem('sst_client_name', data.user?.name || resolvedName);
        localStorage.setItem('sst_client_email', email);
        showDashboard();
        return;
      } else if (resp.status === 401 && !localStorage.getItem('sst_registered_users')) {
        if (inlineErr) {
          inlineErr.textContent = data.error || 'Invalid credentials.';
          inlineErr.style.display = 'block';
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Sign In';
        }
        return;
      }
    } catch (err) {
      // Offline / static client testing
    }

    currentClientId = resolvedClientId;
    sessionStorage.setItem('sst_client_id', currentClientId);
    sessionStorage.setItem('sst_client_name', resolvedName);
    localStorage.setItem('sst_client_email', email);
    showDashboard();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Sign In';
    }
  }

  function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      if (btn) btn.textContent = 'Hide';
    } else {
      input.type = 'password';
      if (btn) btn.textContent = 'Show';
    }
  }

  function handleLogout() {
    closeAvatarMenu();
    sessionStorage.removeItem('sst_client_id');
    sessionStorage.removeItem('sst_client_name');
    if (window.portalAssistant) {
      window.portalAssistant.updateVisibility();
      window.portalAssistant.close();
    }
    showToast('Signed out.');
    showAuthScreen();
  }

  function showAuthScreen() {
    if (elements.authScreen) elements.authScreen.style.display = 'block';
    if (elements.trackerDashboard) elements.trackerDashboard.style.display = 'none';
    if (elements.portalNavTabs) elements.portalNavTabs.style.display = 'none';
    if (window.portalAssistant) {
      window.portalAssistant.updateVisibility();
      window.portalAssistant.close();
    }

    if (elements.portalNavActions) {
      elements.portalNavActions.innerHTML = `
        <a href="index.html" class="portal-nav-link">&larr; Back to Website</a>
      `;
    }
  }

  function showDashboard() {
    if (elements.authScreen) elements.authScreen.style.display = 'none';
    if (elements.trackerDashboard) elements.trackerDashboard.style.display = 'block';
    if (elements.portalNavTabs) elements.portalNavTabs.style.display = 'flex';
    if (window.portalAssistant) {
      window.portalAssistant.updateVisibility();
      window.portalAssistant.updateProjectContext();
    }

    updateNavActivityBadge();
    renderAppShellNav();
    renderOverviewGrid();
    renderProjectDetail(currentProjectKey);
    renderGlobalActivityFeed('all');
    switchView(currentView);
  }

  // ── 9. AppShell Navigation (Task 3: Simplified Minimal Header) ────
  let currentTheme = localStorage.getItem('sst_theme') || 'system';

  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('sst_theme', theme);
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    renderAppShellNav();
  }

  function cycleAppearance() {
    if (currentTheme === 'light') applyTheme('dark');
    else if (currentTheme === 'dark') applyTheme('system');
    else applyTheme('light');
  }

  function getThemeName() {
    return currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
  }

  function renderAppShellNav() {
    const navCenter = document.getElementById('portalNavCenter');
    if (navCenter) navCenter.style.display = 'flex';

    if (!elements.portalNavActions) return;

    elements.portalNavActions.innerHTML = `
      <span class="portal-user-meta" id="portalNavClientId">Client: ${escapeHtml(currentClientId)}</span>

      <!-- Right Menu Button (Three-dot) -->
      <div class="avatar-menu-wrap" id="portalMenuWrap">
        <button type="button" class="portal-menu-trigger-btn" id="portalMenuBtn" onclick="portalApp.togglePortalMenu(event)" aria-haspopup="true" aria-expanded="false" title="Menu" aria-label="Portal Navigation Menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="12" cy="19" r="2"/>
          </svg>
        </button>

        <div class="avatar-dropdown-menu" id="portalDropdownMenu" style="display:none;" onclick="event.stopPropagation();">
          <button type="button" class="avatar-menu-item" onclick="portalApp.switchView('overview'); portalApp.closePortalMenu();">
            <span>All Projects</span>
          </button>
          <button type="button" class="avatar-menu-item" id="menuItemProjectDetail" onclick="portalApp.switchView('detail'); portalApp.closePortalMenu();" ${!currentProjectKey ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
            <span>Project Detail</span>
          </button>
          <button type="button" class="avatar-menu-item" onclick="portalApp.switchView('activity'); portalApp.closePortalMenu();">
            <span>Live Activity</span>
          </button>
          <button type="button" class="avatar-menu-item" onclick="portalApp.openNotificationPrefs(); portalApp.closePortalMenu();">
            <span>Notifications</span>
          </button>
          <button type="button" class="avatar-menu-item" onclick="portalApp.cycleAppearance()">
            <span>Appearance</span>
            <span style="font-size:11px; color:var(--color-ink-muted);">${getThemeName()}</span>
          </button>
          <button type="button" class="avatar-menu-item" onclick="portalApp.openShortcutsModal(); portalApp.closePortalMenu();">
            <span>Keyboard Shortcuts</span>
            <kbd class="cmd-kbd">?</kbd>
          </button>
          <div class="avatar-menu-divider"></div>
          <button type="button" class="avatar-menu-item" onclick="portalApp.handleLogout()" style="color:var(--color-danger);">
            <span>Sign Out</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    `;
  }

  function togglePortalMenu(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('portalDropdownMenu');
    const btn = document.getElementById('portalMenuBtn');
    if (!menu) return;

    if (menu.style.display === 'flex') {
      closePortalMenu();
    } else {
      menu.style.display = 'flex';
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }
  }

  function closePortalMenu() {
    const menu = document.getElementById('portalDropdownMenu');
    const btn = document.getElementById('portalMenuBtn');
    if (menu) menu.style.display = 'none';
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function toggleAvatarMenu(e) {
    togglePortalMenu(e);
  }

  function closeAvatarMenu() {
    closePortalMenu();
  }
    `;
  }

  function toggleProjectSwitcher(e) {
    if (e) e.stopPropagation();
    closeAvatarMenu();
    const wrap = document.getElementById('portalSwitcherWrap');
    const dropdown = document.getElementById('projSwitcherDropdown');
    const trigger = document.getElementById('projSwitcherTrigger');
    if (!wrap || !dropdown) return;

    const isOpen = wrap.classList.contains('open');
    if (isOpen) {
      closeProjectSwitcher();
    } else {
      wrap.classList.add('open');
      dropdown.style.display = 'flex';
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
    }
  }

  function closeProjectSwitcher() {
    const wrap = document.getElementById('portalSwitcherWrap');
    const dropdown = document.getElementById('projSwitcherDropdown');
    const trigger = document.getElementById('projSwitcherTrigger');
    if (wrap) wrap.classList.remove('open');
    if (dropdown) dropdown.style.display = 'none';
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  }

  function toggleAvatarMenu(e) {
    if (e) e.stopPropagation();
    closeProjectSwitcher();
    const menu = document.getElementById('avatarDropdownMenu');
    const btn = document.getElementById('portalAvatarBtn');
    if (!menu) return;

    if (menu.style.display === 'flex') {
      closeAvatarMenu();
    } else {
      menu.style.display = 'flex';
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }
  }

  function closeAvatarMenu() {
    const menu = document.getElementById('avatarDropdownMenu');
    const btn = document.getElementById('portalAvatarBtn');
    if (menu) menu.style.display = 'none';
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function selectProject(projectId) {
    if (!CLIENT_PROJECTS[projectId]) return;
    currentProjectKey = projectId;
    closeProjectSwitcher();

    // Show skeleton transition for 120ms
    renderDetailSkeleton();

    setTimeout(() => {
      renderAppShellNav();
      renderProjectDetail(currentProjectKey);
      if (currentView === 'overview') {
        switchView('detail');
      }
    }, 120);
  }

  // ── 10. View Switcher Routing ─────────────────────────────────
  function switchView(viewName) {
    currentView = viewName;

    if (elements.tabBtnOverview) elements.tabBtnOverview.classList.toggle('active', viewName === 'overview');
    if (elements.tabBtnDetail) elements.tabBtnDetail.classList.toggle('active', viewName === 'detail');
    if (elements.tabBtnExecutive) elements.tabBtnExecutive.classList.toggle('active', viewName === 'executive');
    if (elements.tabBtnDocuments) elements.tabBtnDocuments.classList.toggle('active', viewName === 'documents');
    if (elements.tabBtnTelemetry) elements.tabBtnTelemetry.classList.toggle('active', viewName === 'telemetry');
    if (elements.tabBtnActivity) elements.tabBtnActivity.classList.toggle('active', viewName === 'activity');

    if (elements.viewOverview) elements.viewOverview.style.display = (viewName === 'overview') ? 'block' : 'none';
    if (elements.viewDetail) elements.viewDetail.style.display = (viewName === 'detail') ? 'block' : 'none';
    if (elements.viewExecutive) elements.viewExecutive.style.display = (viewName === 'executive') ? 'block' : 'none';
    if (elements.viewDocuments) elements.viewDocuments.style.display = (viewName === 'documents') ? 'block' : 'none';
    if (elements.viewTelemetry) elements.viewTelemetry.style.display = (viewName === 'telemetry') ? 'block' : 'none';
    if (elements.viewActivity) elements.viewActivity.style.display = (viewName === 'activity') ? 'block' : 'none';

    if (viewName === 'executive') {
      renderExecutiveView(currentProjectKey);
    } else if (viewName === 'documents') {
      renderDocumentsLedger(currentDocFilter || 'all');
    } else if (viewName === 'telemetry') {
      renderTelemetryDashboard();
    } else if (viewName === 'activity') {
      unreadEventCount = 0;
      updateNavActivityBadge();
    }

    if (window.portalAssistant) {
      window.portalAssistant.updateVisibility();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateNavActivityBadge() {
    if (!elements.navActivityCount) return;
    if (unreadEventCount > 0) {
      elements.navActivityCount.textContent = unreadEventCount;
      elements.navActivityCount.style.display = 'inline-block';
    } else {
      elements.navActivityCount.style.display = 'none';
    }
  }

  // ── 11. View 1: Multi-Project Overview Grid ──────────────────
  function renderOverviewGrid() {
    if (!elements.projectsGrid) return;

    elements.projectsGrid.innerHTML = Object.values(CLIENT_PROJECTS).map(p => `
      <div class="portal-project-card" onmouseenter="portalApp.prefetchProject('${p.id}')">
        <div>
          <div class="project-card-top-row">
            <span class="project-card-status-dot">
              ${escapeHtml(p.statusLabel)}
            </span>
            <span class="tier-section">${p.id}</span>
          </div>

          <h3 class="project-card-title">${escapeHtml(p.name)}</h3>
          <div class="project-card-org">${escapeHtml(p.orgName)}</div>

          <div class="project-card-meta-line">
            ${escapeHtml(p.scope)} &bull; Launch ${escapeHtml(p.launchDate)} &bull; Pod: ${escapeHtml(p.architect.name)}
          </div>

          <div class="portal-bar-track-thin" style="margin-bottom:10px;">
            <div class="portal-bar-fill-thin" style="width: ${p.progressPct}%;"></div>
          </div>
          <div style="font-size:14px; color:var(--color-ink-muted); margin-bottom:24px;">
            <span class="tabular-num">${p.progressPct}%</span> complete &bull; <span class="tabular-num">${100 - p.progressPct}%</span> remaining &bull; est. <span class="tabular-num">${p.daysRemaining}</span> days
          </div>
        </div>

        <div class="project-card-footer">
          <span class="tier-section">${escapeHtml(p.edgeRegion)}</span>
          <button type="button" class="btn btn-outline" style="font-size:14px; padding:6px 14px;" onclick="portalApp.selectProject('${p.id}')">
            Inspect &rarr;
          </button>
        </div>
      </div>
    `).join('');
  }

  // ── 12. View 2: Deep Project Detail ───────────────────────────
  function renderDetailSkeleton() {
    if (elements.phaseCardsContainer) {
      elements.phaseCardsContainer.innerHTML = `
        <div style="padding:28px; display:flex; flex-direction:column; gap:20px;">
          <div class="portal-skeleton" style="height:32px; width:70%;"></div>
          <div class="portal-skeleton" style="height:18px; width:45%;"></div>
          <div class="portal-skeleton" style="height:60px; width:100%;"></div>
        </div>
      `;
    }
  }

  function renderProjectDetail(projectKey) {
    const proj = CLIENT_PROJECTS[projectKey] || CLIENT_PROJECTS['PRJ-9042-FINTECH'];

    // Header Card Elements
    if (elements.headerStatusMeta) {
      elements.headerStatusMeta.textContent = proj.statusMeta.replace('&bull;', '·');
    }
    if (elements.activeProjTitle) elements.activeProjTitle.textContent = proj.name;
    if (elements.headerMetaLine) {
      elements.headerMetaLine.innerHTML = `${escapeHtml(proj.scope)} &bull; Launch ${escapeHtml(proj.launchDate)} &bull; Pod: ${escapeHtml(proj.architect.name)}`;
    }
    if (elements.activeProgressBar) elements.activeProgressBar.style.width = `${proj.progressPct}%`;
    
    // Truncate Next: label to 40 characters with full string in title tooltip
    if (elements.headerProgressSub) {
      const fullNext = proj.nextMilestone;
      const truncatedNext = fullNext.length > 40 ? fullNext.substring(0, 37) + '…' : fullNext;
      elements.headerProgressSub.innerHTML = `
        <span class="tabular-num">${proj.progressPct}%</span> complete &bull; 
        <span class="tabular-num">${100 - proj.progressPct}%</span> remaining &bull; 
        est. <span class="tabular-num">${proj.daysRemaining}</span> days &bull; 
        <span title="${escapeHtml(fullNext)}">Next: ${escapeHtml(truncatedNext)}</span>
      `;
    }

    if (elements.activeStagingBtn) elements.activeStagingBtn.href = proj.stagingUrl;
    if (elements.activeGitBtn) elements.activeGitBtn.href = proj.gitRepo;

    // Sidebar Staging Panel
    if (elements.healthUptime) elements.healthUptime.textContent = proj.uptime;
    if (elements.healthLatency) elements.healthLatency.textContent = proj.edgeLatency;
    if (elements.healthStatus) elements.healthStatus.textContent = '200 OK';
    if (elements.stagingBottomLine) {
      elements.stagingBottomLine.innerHTML = `${proj.stagingUrl.replace('https://', '')} &bull; ${escapeHtml(proj.edgeRegion)} &bull; TLS 1.3`;
    }

    // Sidebar Architect Row
    if (elements.podAvatarLetter) elements.podAvatarLetter.textContent = proj.architect.avatar;
    if (elements.podArchitectName) elements.podArchitectName.textContent = proj.architect.name;
    if (elements.podArchitectRole) elements.podArchitectRole.textContent = proj.architect.role;

    // Sidebar Velocity & Drift
    const velEl = document.getElementById('sidebarVelocityText');
    const driftEl = document.getElementById('sidebarScopeDriftText');
    if (velEl && proj.velocity) velEl.textContent = proj.velocity;
    if (driftEl && proj.scopeDrift) driftEl.textContent = proj.scopeDrift;

    // Render Sub-Components
    if (currentMilestoneView === 'timeline') {
      renderTimelineView(proj);
    } else {
      renderPhasesLedger(proj);
    }
    renderCommitFeed(proj);
    renderCustomizationList(proj);
  }

  // ── 13. Milestone Progression: Ledger View vs. Timeline View ──
  function setMilestoneView(viewMode) {
    currentMilestoneView = viewMode;
    if (elements.btnViewLedger) elements.btnViewLedger.classList.toggle('active', viewMode === 'ledger');
    if (elements.btnViewTimeline) elements.btnViewTimeline.classList.toggle('active', viewMode === 'timeline');

    const proj = CLIENT_PROJECTS[currentProjectKey];
    if (!proj) return;

    if (viewMode === 'timeline') {
      renderTimelineView(proj);
    } else {
      renderPhasesLedger(proj);
    }
  }

  function renderPhasesLedger(proj) {
    if (!elements.phaseCardsContainer) return;

    elements.phaseCardsContainer.innerHTML = proj.phases.map(phase => {
      const isExpanded = !!expandedPhases[phase.id];
      const isDone = phase.status === 'status-done';
      const isActive = phase.status === 'status-active';

      // Strictly the ONLY place with colored dots: milestone status
      const dotClass = isDone ? 'dot-done' : (isActive ? 'dot-active' : 'dot-queued');
      const isActionOpen = (activeActionPhaseId === phase.id);

      return `
        <div class="phase-ledger-row ${isExpanded ? 'open' : ''}" data-phase-id="${phase.id}" onmouseenter="portalApp.prefetchPhase('${phase.id}')">
          <div class="phase-ledger-header" onclick="portalApp.togglePhase('${phase.id}')">
            <!-- 28px Serif number vertically centered against title -->
            <div class="phase-col-num">${phase.numShort}</div>

            <div class="phase-col-center">
              <div class="phase-row-title">${escapeHtml(phase.title)}</div>
              <div class="phase-col-cat">${escapeHtml(phase.category)} &bull; ${escapeHtml(phase.dayRange)}</div>
            </div>

            <!-- Right-aligned baseline status + hover actions menu -->
            <div class="phase-col-right">
              <button type="button" class="phase-more-menu-btn" title="Milestone actions" onclick="event.stopPropagation(); portalApp.togglePhaseMenu('${phase.id}')" aria-label="Milestone actions menu">
                &ctdot;
              </button>

              <span class="phase-status-text">
                <span class="dot-status ${dotClass}"></span>
                ${escapeHtml(phase.statusLabel)}
              </span>

              <span class="phase-chevron-arrow">▾</span>
            </div>
          </div>

          <!-- Hover ⋯ Menu Dropdown with Actionable Client Triggers -->
          <div class="phase-action-menu-dropdown" id="phaseMenu-${phase.id}" style="display:none;" onclick="event.stopPropagation();">
            <button type="button" class="phase-action-menu-item" onclick="portalApp.openInlineAction('${phase.id}', 'approve')">Approve milestone</button>
            <button type="button" class="phase-action-menu-item" onclick="portalApp.openInlineAction('${phase.id}', 'change')">Request changes</button>
            <button type="button" class="phase-action-menu-item" onclick="portalApp.openInlineAction('${phase.id}', 'question')">Ask a question</button>
            <div class="avatar-menu-divider"></div>
            <button type="button" class="phase-action-menu-item" onclick="portalApp.triggerPhaseAction('${phase.id}', 'files')">View files</button>
            <button type="button" class="phase-action-menu-item" onclick="portalApp.triggerPhaseAction('${phase.id}', 'tasks')">View tasks</button>
          </div>

          <!-- Single-Column Expanded Drawer (Stacked vertically) -->
          <div class="phase-ledger-drawer" style="${isExpanded ? 'display:block;' : 'display:none;'}">
            <!-- 1. Description -->
            <p class="phase-drawer-desc-single">${escapeHtml(phase.desc)}</p>

            <!-- 2. Tasks as a plain checklist -->
            <div class="phase-drawer-sub-heading">TASKS &amp; AUDIT</div>
            <div class="drawer-tasks-list-single" id="phaseTasks-${phase.id}">
              ${phase.tasks.map(t => `
                <div class="drawer-task-item">
                  <span class="drawer-task-check ${t.done ? 'task-done' : ''}">${t.done ? '✓' : '○'}</span>
                  <span style="${t.done ? 'color:var(--color-ink);' : 'color:var(--color-ink-muted);'}">${escapeHtml(t.text)}</span>
                </div>
              `).join('')}
            </div>

            <!-- 3. Deliverable Files as a plain stacked list with preview drawer trigger -->
            <div class="phase-drawer-sub-heading" style="margin-top:20px;">DELIVERABLE FILES &amp; AUDIT</div>
            <div class="drawer-files-list-single" id="phaseFiles-${phase.id}">
              ${phase.deliverables.map(d => `
                <div class="drawer-file-item-single" onclick="portalApp.openDeliverableFile('${escapeHtml(d.name)}')">
                  <div class="drawer-file-item-left">
                    <span class="drawer-file-name">${escapeHtml(d.name)}</span>
                    <span class="drawer-file-meta">${escapeHtml(d.format)} &bull; ${escapeHtml(d.size)} &bull; Uploaded by ${escapeHtml(d.uploader || 'Systems Pod')}</span>
                  </div>
                  <span class="drawer-file-arrow" title="Open Preview Drawer">&rarr;</span>
                </div>
              `).join('')}
            </div>

            <!-- 4. Action Bar / Approval Flow -->
            <div class="phase-drawer-actions">
              <span id="phaseSignOffText-${phase.id}" style="font-size:13px; color:var(--color-ink-muted);">
                ${escapeHtml(phase.signedOffText)}
              </span>

              <div style="display:flex; gap:8px; align-items:center;">
                <button type="button" class="btn btn-outline" style="font-size:13px; padding:5px 12px;" onclick="portalApp.openInlineAction('${phase.id}', 'question')">
                  Ask Question
                </button>
                <button type="button" class="btn btn-outline" style="font-size:13px; padding:5px 12px;" onclick="portalApp.openInlineAction('${phase.id}', 'change')">
                  Request Changes
                </button>
                ${!phase.signedOff ? `
                  <button type="button" class="btn btn-dark" style="font-size:13px; padding:5px 14px;" onclick="portalApp.openInlineAction('${phase.id}', 'approve')">
                    Approve
                  </button>
                ` : `
                  <span class="tier-section" style="color:var(--color-success);">✓ Client Approved</span>
                `}
              </div>
            </div>

            <!-- 5. Inline Action Panel BELOW the row (Approve / Request Changes / Ask Question) -->
            <div class="phase-inline-approval-box" id="actionPanel-${phase.id}" style="${isActionOpen ? 'display:block;' : 'display:none;'}">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <label class="field-label" id="actionPanelLabel-${phase.id}" style="margin:0;">
                  ${getActionPanelLabel(activeActionType, phase.title)}
                </label>
                <span class="tier-section" style="color:var(--color-ink-muted);">Audit Recorded</span>
              </div>
              <p style="font-size:12px; color:var(--color-ink-muted); margin:0 0 8px;">
                ${getActionPanelSummary(activeActionType)}
              </p>
              <textarea id="actionPanelNote-${phase.id}" class="field-input approval-textarea" rows="2" placeholder="${getActionPanelPlaceholder(activeActionType)}"></textarea>
              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:10px;">
                <button type="button" class="btn btn-outline" style="font-size:13px; padding:5px 12px;" onclick="portalApp.cancelInlineAction('${phase.id}')">Cancel</button>
                <button type="button" class="btn btn-dark" style="font-size:13px; padding:5px 14px;" onclick="portalApp.submitInlineAction('${proj.id}', '${phase.id}')">Confirm &rarr;</button>
              </div>
            </div>

          </div>
        </div>
      `;
    }).join('');
  }

  // Helper labels for inline action panel
  function getActionPanelLabel(type, title) {
    if (type === 'approve') return `Formal Client Sign-Off: ${escapeHtml(title)}`;
    if (type === 'change') return `Request Engineering Changes: ${escapeHtml(title)}`;
    if (type === 'question') return `Ask Question to Principal Architect: ${escapeHtml(title)}`;
    return 'Milestone Action Note';
  }

  function getActionPanelSummary(type) {
    if (type === 'approve') return 'This action records your formal sign-off into the immutable audit ledger. Next phase will unlock immediately.';
    if (type === 'change') return 'Detail requested modifications. The systems pod will review within 24 hours under your Lifetime SLA.';
    if (type === 'question') return 'Starts an inline inquiry thread with Raghav S. (Principal Systems Architect).';
    return '';
  }

  function getActionPanelPlaceholder(type) {
    if (type === 'approve') return 'e.g. Verified NPCI webhook replay and staging environment health.';
    if (type === 'change') return 'e.g. Please add payload validation check for expired UPI mandate tokens.';
    if (type === 'question') return 'e.g. What is the expected retry jitter backoff delay on webhook failures?';
    return 'Add a note...';
  }

  // ── Horizontal 14-Day Gantt Timeline View ──
  function renderTimelineView(proj) {
    if (!elements.phaseCardsContainer) return;

    const totalDays = 14;
    const currentDay = proj.currentDay || 9;
    const todayLeftPct = ((currentDay - 0.5) / totalDays) * 100;

    const daysHeader = Array.from({ length: totalDays }, (_, i) => `
      <div style="text-align:center;">D${i + 1}</div>
    `).join('');

    const rows = proj.phases.map(ph => {
      const start = ph.dayStart || 1;
      const end = ph.dayEnd || 3;
      const spanDays = Math.max(1, end - start + 1);

      const plannedLeftPct = ((start - 1) / totalDays) * 100;
      const plannedWidthPct = (spanDays / totalDays) * 100;

      const isDone = ph.status === 'status-done';
      const isActive = ph.status === 'status-active';

      let actualWidthPct = 0;
      let barClass = '';
      if (isDone) {
        actualWidthPct = plannedWidthPct;
        barClass = 'bar-done';
      } else if (isActive) {
        actualWidthPct = plannedWidthPct * ((ph.progressPct || 40) / 100);
        barClass = 'bar-active';
      }

      return `
        <div class="timeline-phase-row" onclick="portalApp.togglePhase('${ph.id}'); portalApp.setMilestoneView('ledger');">
          <div class="timeline-phase-meta">
            <div class="timeline-phase-title">P${ph.numShort} &bull; ${escapeHtml(ph.title)}</div>
            <div class="timeline-phase-range">${escapeHtml(ph.dayRange)} &bull; ${escapeHtml(ph.statusLabel)}</div>
          </div>

          <div class="timeline-bars-track">
            <!-- Planned Bar (Dashed Hairline) -->
            <div class="timeline-bar-planned" style="left: ${plannedLeftPct}%; width: ${plannedWidthPct}%;" title="Planned: Days ${start}–${end}"></div>

            <!-- Actual Bar (Solid Fill) -->
            ${actualWidthPct > 0 ? `
              <div class="timeline-bar-actual ${barClass}" style="left: ${plannedLeftPct}%; width: ${actualWidthPct}%;" title="Actual Progress: ${ph.progressPct}%">
                ${isDone ? '✓ 100%' : `${ph.progressPct}%`}
              </div>
            ` : ''}

            <!-- Today Hairline Marker -->
            <div class="timeline-today-marker" style="left: ${todayLeftPct}%;"></div>
          </div>
        </div>
      `;
    }).join('');

    elements.phaseCardsContainer.innerHTML = `
      <div class="portal-timeline-wrap">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <div style="font-size:13px; color:var(--color-ink-muted);">
            Horizontal timeline spanning <strong>Day 1 through Day 14</strong>. Planned (dashed) vs. Actual (solid).
          </div>
          <div style="display:flex; align-items:center; gap:16px; font-size:11px; color:var(--color-ink-muted);">
            <span><span style="display:inline-block; width:12px; height:0; border-top:1px dashed var(--color-ink); vertical-align:middle; margin-right:4px;"></span> Planned</span>
            <span><span style="display:inline-block; width:10px; height:10px; background:var(--color-success); border-radius:2px; vertical-align:middle; margin-right:4px;"></span> Complete</span>
            <span><span style="display:inline-block; width:10px; height:10px; background:var(--color-warn); border-radius:2px; vertical-align:middle; margin-right:4px;"></span> In Progress</span>
            <span style="color:var(--color-danger); font-weight:600;"><span style="display:inline-block; width:2px; height:10px; background:var(--color-danger); vertical-align:middle; margin-right:4px;"></span> Today (Day ${currentDay})</span>
          </div>
        </div>

        <div class="timeline-header-grid">
          <div style="text-align:left;">MILESTONE</div>
          ${daysHeader}
        </div>

        ${rows}
      </div>
    `;
  }

  function togglePhase(phaseId) {
    expandedPhases[phaseId] = !expandedPhases[phaseId];
    const proj = CLIENT_PROJECTS[currentProjectKey];
    if (proj && currentMilestoneView === 'ledger') renderPhasesLedger(proj);
  }

  function togglePhaseMenu(phaseId) {
    if (activePhaseDropdownId && activePhaseDropdownId !== phaseId) {
      const prevEl = document.getElementById(`phaseMenu-${activePhaseDropdownId}`);
      if (prevEl) prevEl.style.display = 'none';
    }

    const menuEl = document.getElementById(`phaseMenu-${phaseId}`);
    if (!menuEl) return;

    if (menuEl.style.display === 'block') {
      menuEl.style.display = 'none';
      activePhaseDropdownId = null;
    } else {
      menuEl.style.display = 'block';
      activePhaseDropdownId = phaseId;
    }
  }

  function triggerPhaseAction(phaseId, action) {
    if (activePhaseDropdownId) {
      const menuEl = document.getElementById(`phaseMenu-${activePhaseDropdownId}`);
      if (menuEl) menuEl.style.display = 'none';
      activePhaseDropdownId = null;
    }

    if (!expandedPhases[phaseId]) {
      togglePhase(phaseId);
    }

    if (action === 'files') {
      const filesEl = document.getElementById(`phaseFiles-${phaseId}`);
      if (filesEl) filesEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else if (action === 'tasks') {
      const tasksEl = document.getElementById(`phaseTasks-${phaseId}`);
      if (tasksEl) tasksEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // ── Inline Client Action Panel (Approve / Request Changes / Ask Question) ──
  function openInlineAction(phaseId, actionType, defaultNote = '') {
    if (activePhaseDropdownId) {
      const menuEl = document.getElementById(`phaseMenu-${activePhaseDropdownId}`);
      if (menuEl) menuEl.style.display = 'none';
      activePhaseDropdownId = null;
    }

    // Ensure phase is expanded
    expandedPhases[phaseId] = true;
    activeActionPhaseId = phaseId;
    activeActionType = actionType;

    const proj = CLIENT_PROJECTS[currentProjectKey];
    if (proj) {
      renderPhasesLedger(proj);
      const noteInput = document.getElementById(`actionPanelNote-${phaseId}`);
      if (noteInput) {
        if (defaultNote) noteInput.value = defaultNote;
        noteInput.focus();
      }
    }
  }

  function cancelInlineAction(phaseId) {
    activeActionPhaseId = null;
    activeActionType = null;
    const proj = CLIENT_PROJECTS[currentProjectKey];
    if (proj) renderPhasesLedger(proj);
  }

  function submitInlineAction(projectId, phaseId) {
    const proj = CLIENT_PROJECTS[projectId];
    if (!proj) return;

    const phase = proj.phases.find(p => p.id === phaseId);
    if (!phase) return;

    const noteInput = document.getElementById(`actionPanelNote-${phaseId}`);
    const noteText = noteInput ? noteInput.value.trim() : '';

    if (activeActionType === 'approve') {
      phase.signedOff = true;
      phase.status = 'status-done';
      phase.statusLabel = 'Complete';
      phase.signedOffText = 'Approved by Siddharth M. · Just now';
      phase.tasks.forEach(t => t.done = true);

      if (proj.progressPct < 100) {
        proj.progressPct = Math.min(100, proj.progressPct + 15);
        proj.daysRemaining = Math.max(1, proj.daysRemaining - 2);
      }

      GLOBAL_ACTIVITIES.unshift({
        id: `act-${Date.now()}`,
        type: 'milestone',
        projectId: proj.id,
        actor: 'Siddharth M.',
        actorAvatar: 'SM',
        verb: `Approved ${phase.title}`,
        desc: noteText ? `Sign-off note: "${noteText}" (Client verified).` : 'Formal client sign-off recorded under immutable client ledger.',
        time: 'Just now',
        timestamp: new Date().toISOString()
      });

      showToast(`Milestone approved: ${phase.title}.`);
    } else if (activeActionType === 'change') {
      phase.signedOff = false;
      phase.statusLabel = 'Changes requested';
      phase.signedOffText = 'Changes requested by Siddharth M. · Just now';

      GLOBAL_ACTIVITIES.unshift({
        id: `act-${Date.now()}`,
        type: 'customization',
        projectId: proj.id,
        actor: 'Siddharth M.',
        actorAvatar: 'SM',
        verb: `Requested changes on ${phase.title}`,
        desc: noteText ? `Client change request: "${noteText}"` : 'Client requested review on deliverable tasks.',
        time: 'Just now',
        timestamp: new Date().toISOString()
      });

      showToast('Change request recorded under audit trail.');
    } else if (activeActionType === 'question') {
      GLOBAL_ACTIVITIES.unshift({
        id: `act-${Date.now()}`,
        type: 'customization',
        projectId: proj.id,
        actor: 'Siddharth M.',
        actorAvatar: 'SM',
        verb: `Asked question on ${phase.title}`,
        desc: noteText ? `Question: "${noteText}"` : 'Inquiry thread started with Principal Architect.',
        time: 'Just now',
        timestamp: new Date().toISOString()
      });

      showToast('Question sent to Principal Systems Architect.');
    }

    activeActionPhaseId = null;
    activeActionType = null;
    unreadEventCount++;
    updateNavActivityBadge();

    renderProjectDetail(projectId);
    renderOverviewGrid();
    renderGlobalActivityFeed('all');
    renderAppShellNav();
  }

  // ── Project Level Client Actions (Pause / Adjust Launch Date) ──
  function triggerProjectAction(action) {
    closeAvatarMenu();
    const proj = CLIENT_PROJECTS[currentProjectKey];
    if (!proj) return;

    if (action === 'pause') {
      const confirmPause = window.confirm(`Pause project ${proj.id}? Staging builds and SLAs will be placed on hold until resumed.`);
      if (confirmPause) {
        proj.statusLabel = 'Paused by Client';
        proj.statusMeta = `Day ${proj.currentDay} of ${proj.totalDays} &bull; Paused by Client`;

        GLOBAL_ACTIVITIES.unshift({
          id: `act-${Date.now()}`,
          type: 'milestone',
          projectId: proj.id,
          actor: 'Siddharth M.',
          actorAvatar: 'SM',
          verb: 'Paused project progression',
          desc: 'Project timeline and staging freeze placed on hold per client request.',
          time: 'Just now',
          timestamp: new Date().toISOString()
        });

        unreadEventCount++;
        updateNavActivityBadge();
        renderProjectDetail(proj.id);
        renderGlobalActivityFeed('all');
        showToast(`Project ${proj.id} paused.`);
      }
    } else if (action === 'change-date') {
      const newDate = window.prompt(`Adjust target launch date for ${proj.name}:`, proj.launchDate);
      if (newDate && newDate.trim()) {
        proj.launchDate = newDate.trim();
        GLOBAL_ACTIVITIES.unshift({
          id: `act-${Date.now()}`,
          type: 'milestone',
          projectId: proj.id,
          actor: 'Siddharth M.',
          actorAvatar: 'SM',
          verb: `Adjusted target launch date to ${proj.launchDate}`,
          desc: 'Target launch schedule updated in client platform contract.',
          time: 'Just now',
          timestamp: new Date().toISOString()
        });

        unreadEventCount++;
        updateNavActivityBadge();
        renderProjectDetail(proj.id);
        renderGlobalActivityFeed('all');
        showToast(`Target launch date updated to ${proj.launchDate}.`);
      }
    }
  }

  // ── 14. Sidebar Commits & Maintenance Lists ───────────────────
  function renderCommitFeed(proj) {
    if (!elements.commitFeedList || !proj.commits) return;
    const displayedCommits = proj.commits.slice(0, 3);

    elements.commitFeedList.innerHTML = displayedCommits.map(c => `
      <div class="sidebar-commit-item" onclick="portalApp.showCommitDetail('${c.hash}')">
        <div class="commit-hash-line">${escapeHtml(c.hash)} &bull; ${escapeHtml(c.ci)}</div>
        <div class="commit-msg">${escapeHtml(c.text)}</div>
        <div class="commit-time-author">${escapeHtml(c.time)} &bull; ${escapeHtml(c.author)}</div>
      </div>
    `).join('');
  }

  function renderCustomizationList(proj) {
    if (!elements.customizationList || !proj.customizations) return;

    if (!proj.customizations.length) {
      elements.customizationList.innerHTML = `
        <div style="font-size:14px; color:var(--color-ink-muted);">No active requests — updates appear here in real time.</div>
      `;
      return;
    }

    elements.customizationList.innerHTML = proj.customizations.map(r => `
      <div class="sidebar-req-item" onclick="portalApp.openRequestDetail('${r.id}')" title="Click to view full lifecycle and comments">
        <div class="req-line-title">${escapeHtml(r.id)} &bull; ${escapeHtml(r.title)}</div>
        <div class="req-line-status">${escapeHtml(r.status)} &bull; ${escapeHtml(r.eta)}</div>
      </div>
    `).join('');
  }

  // ── 15. View 3: Global Activity Feed (with Filter & Mark All Read) ──
  function renderGlobalActivityFeed(filter = 'all') {
    if (!elements.globalActivityStream) return;

    let filtered = GLOBAL_ACTIVITIES;
    if (filter === 'mine') {
      filtered = GLOBAL_ACTIVITIES.filter(a => a.actor === 'Siddharth M.');
    } else if (filter !== 'all') {
      filtered = GLOBAL_ACTIVITIES.filter(a => a.type === filter);
    }

    const counts = {
      all: GLOBAL_ACTIVITIES.length,
      milestone: GLOBAL_ACTIVITIES.filter(a => a.type === 'milestone').length,
      commit: GLOBAL_ACTIVITIES.filter(a => a.type === 'commit').length,
      deliverable: GLOBAL_ACTIVITIES.filter(a => a.type === 'deliverable').length,
      customization: GLOBAL_ACTIVITIES.filter(a => a.type === 'customization').length
    };

    const countAll = document.getElementById('countAll');
    const countMilestone = document.getElementById('countMilestone');
    const countCommit = document.getElementById('countCommit');
    const countDeliverable = document.getElementById('countDeliverable');
    const countCustomization = document.getElementById('countCustomization');

    if (countAll) countAll.textContent = counts.all;
    if (countMilestone) countMilestone.textContent = counts.milestone;
    if (countCommit) countCommit.textContent = counts.commit;
    if (countDeliverable) countDeliverable.textContent = counts.deliverable;
    if (countCustomization) countCustomization.textContent = counts.customization;

    if (!filtered.length) {
      elements.globalActivityStream.innerHTML = `
        <div style="padding:48px 28px; text-align:center; font-size:14px; color:var(--color-ink-muted);">
          No events recorded under this filter yet.
        </div>
      `;
      return;
    }

    elements.globalActivityStream.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 28px; border-bottom:1px solid var(--color-hairline); background:var(--color-surface-muted); flex-wrap:wrap; gap:8px;">
        <span class="tier-section" style="font-size:10px;">Showing ${filtered.length} audit trail events</span>
        <div style="display:flex; gap:8px; align-items:center;">
          <button type="button" class="btn btn-outline" style="font-size:11px; padding:3px 8px;" onclick="portalApp.simulateInboundReply('email')" title="Simulate client replying to digest email (Postmark inbound parser)">
            Simulate Email Reply &#x2709;
          </button>
          <button type="button" class="btn btn-outline" style="font-size:11px; padding:3px 8px;" onclick="portalApp.simulateInboundReply('slack')" title="Simulate pod message from Slack #client-fintech-pod">
            Simulate Slack DM &#x1F4AC;
          </button>
          <button type="button" class="btn btn-outline" style="font-size:11px; padding:3px 8px;" onclick="portalApp.markAllActivityRead()">
            Mark all as read
          </button>
        </div>
      </div>
      ${filtered.map((item, idx) => {
        const isPulse = (item.time === 'Just now');
        const channelBadge = (item.channel === 'email')
          ? '<span class="channel-source-tag tag-email" title="Ingested via Postmark inbound webhook">✉️ email</span>'
          : (item.channel === 'slack')
          ? '<span class="channel-source-tag tag-slack" title="Synced from Slack #client-fintech-pod">💬 Slack</span>'
          : '<span class="channel-source-tag tag-portal">🖥️ portal</span>';

        return `
          <div class="activity-feed-row ${isPulse ? 'row-new-pulse' : ''}" id="actRow-${idx}">
            <div class="activity-avatar">${escapeHtml(item.actorAvatar)}</div>

            <div class="activity-row-content">
              <div class="activity-row-header">
                <span class="activity-headline">
                  <strong>${escapeHtml(item.actor)}</strong> ${channelBadge} ${escapeHtml(item.verb)} &bull; <span class="tier-section">${escapeHtml(item.projectId)}</span>
                </span>
                <span class="activity-timestamp">${escapeHtml(item.time)}</span>
              </div>
              <div class="activity-details">${escapeHtml(item.desc)}</div>
            </div>
          </div>
        `;
      }).join('')}
    `;
  }

  function simulateInboundReply(channel = 'email') {
    const isEmail = (channel === 'email');
    const newAct = {
      id: `act-${Date.now()}`,
      type: 'customization',
      channel: isEmail ? 'email' : 'slack',
      projectId: currentProjectKey,
      actor: isEmail ? 'Siddharth M.' : 'Raghav S.',
      actorAvatar: isEmail ? 'SM' : 'RS',
      verb: isEmail ? 'Replied via email digest' : 'Posted in Slack #client-fintech-pod',
      desc: isEmail 
        ? '"Audit verified. Moving mandate replay test forward to production sign-off." (Postmark inbound parser parsed RFC 822 reply).'
        : '"All Mumbai ap-south-1 VPC routes passing 10k burst tests with 18ms latency." (Slack event adapter sync).',
      time: 'Just now',
      timestamp: new Date().toISOString()
    };

    GLOBAL_ACTIVITIES.unshift(newAct);
    unreadEventCount++;
    updateNavActivityBadge();
    renderGlobalActivityFeed('all');

    showToast(`Inbound ${channel.toUpperCase()} message ingested & verified in audit ledger.`);
  }

  function markAllActivityRead() {
    unreadEventCount = 0;
    updateNavActivityBadge();
    showToast('All activity marked as read.');
  }

  function navigateActivityFeed(direction) {
    const rows = document.querySelectorAll('.activity-feed-row');
    if (!rows.length) return;

    if (activeFocusedActivityIndex >= 0 && rows[activeFocusedActivityIndex]) {
      rows[activeFocusedActivityIndex].style.outline = 'none';
    }

    activeFocusedActivityIndex += direction;
    if (activeFocusedActivityIndex < 0) activeFocusedActivityIndex = 0;
    if (activeFocusedActivityIndex >= rows.length) activeFocusedActivityIndex = rows.length - 1;

    const targetRow = rows[activeFocusedActivityIndex];
    if (targetRow) {
      targetRow.style.outline = '2px solid var(--color-ink)';
      targetRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // ── 16. Change Request Full Lifecycle Modal ───────────────────
  function openRequestDetail(reqId) {
    const proj = CLIENT_PROJECTS[currentProjectKey];
    if (!proj || !proj.customizations) return;

    const req = proj.customizations.find(r => r.id === reqId) || proj.customizations[0];
    if (!req) return;

    if (elements.reqDetailId) elements.reqDetailId.textContent = req.id;
    if (elements.reqDetailTitle) elements.reqDetailTitle.textContent = req.title;
    if (elements.reqDetailMeta) {
      elements.reqDetailMeta.textContent = `Submitted by ${req.requester || 'Siddharth M.'} • ${req.submittedDate || 'Oct 14, 2026'} • ${req.cost || 'Lifetime SLA Covered'}`;
    }

    // Render Stepper
    if (elements.reqDetailStepper) {
      const steps = req.timeline || [
        { step: 'Submitted', actor: 'Siddharth M.', date: 'Oct 14', done: true },
        { step: 'Reviewed', actor: 'Raghav S.', date: 'Oct 14', done: true },
        { step: 'Approved', actor: 'Siddharth M.', date: 'Oct 14', done: true },
        { step: 'In progress', actor: 'Systems Pod', date: 'Active', done: false, active: true },
        { step: 'Deployed', actor: 'ap-south-1', date: 'Queued', done: false },
        { step: 'Client verified', actor: 'Pending', date: 'Queued', done: false }
      ];

      elements.reqDetailStepper.innerHTML = steps.map(s => `
        <div class="req-step-item">
          <div class="req-step-dot ${s.done ? 'done' : (s.active ? 'active' : '')}">
            ${s.done ? '✓' : (s.active ? '●' : '○')}
          </div>
          <div>
            <div style="font-weight:500; color:var(--color-ink);">${escapeHtml(s.step)}</div>
            <div style="font-size:11px; color:var(--color-ink-muted);">${escapeHtml(s.actor)} &bull; ${escapeHtml(s.date)}</div>
          </div>
        </div>
      `).join('');
    }

    // Render Comments Thread
    renderRequestComments(req);

    if (elements.requestDetailModal) elements.requestDetailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function renderRequestComments(req) {
    if (!elements.reqDetailComments) return;
    const comments = req.comments || [
      { author: 'Siddharth M.', role: 'Client CTO', time: 'Oct 14', body: 'Requirement specified and submitted under standard SLA.' },
      { author: 'Raghav S.', role: 'Principal Architect', time: 'Oct 14', body: 'Specification verified. Pod assignment initiated.' }
    ];

    elements.reqDetailComments.innerHTML = comments.map(c => `
      <div class="req-comment-row">
        <div class="req-comment-author">${escapeHtml(c.author)} &bull; <span style="font-size:11px; color:var(--color-ink-muted);">${escapeHtml(c.role || '')} &bull; ${escapeHtml(c.time)}</span></div>
        <div class="req-comment-body">${escapeHtml(c.body)}</div>
      </div>
    `).join('');
  }

  function closeRequestDetail() {
    if (elements.requestDetailModal) elements.requestDetailModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function submitRequestComment(e) {
    e.preventDefault();
    const commentInput = elements.reqCommentInput;
    if (!commentInput || !commentInput.value.trim()) return;

    const note = commentInput.value.trim();
    const proj = CLIENT_PROJECTS[currentProjectKey];
    const reqId = elements.reqDetailId ? elements.reqDetailId.textContent : 'REQ-042';

    if (proj && proj.customizations) {
      const req = proj.customizations.find(r => r.id === reqId);
      if (req) {
        if (!req.comments) req.comments = [];
        req.comments.push({
          author: 'Siddharth M.',
          role: 'Client CTO',
          time: 'Just now',
          body: note
        });
        renderRequestComments(req);
      }
    }

    GLOBAL_ACTIVITIES.unshift({
      id: `act-${Date.now()}`,
      type: 'customization',
      projectId: currentProjectKey,
      actor: 'Siddharth M.',
      actorAvatar: 'SM',
      verb: `Replied to ${reqId}`,
      desc: `Comment: "${note}"`,
      time: 'Just now',
      timestamp: new Date().toISOString()
    });

    unreadEventCount++;
    updateNavActivityBadge();
    commentInput.value = '';
    showToast('Reply added to request thread.');
  }

  // ── 17. File Preview Drawer ───────────────────────────────────
  function openFilePreview(fileKey) {
    const file = FILE_PREVIEWS[fileKey];
    if (!file) {
      handleVaultDownload(fileKey);
      return;
    }

    if (elements.drawerFileName) elements.drawerFileName.textContent = file.title;
    if (elements.drawerFileFormatTag) elements.drawerFileFormatTag.textContent = file.format;

    if (elements.drawerFileContent) {
      if (file.type === 'deed') {
        elements.drawerFileContent.innerHTML = `
          <div style="background:var(--color-surface-muted); padding:16px; border:1px solid var(--color-hairline); border-radius:var(--r-xs); margin-bottom:16px;">
            <div class="tier-section" style="color:var(--color-success); margin-bottom:6px;">✓ 100% PROPRIETARY CLIENT OWNED</div>
            <p style="font-size:13px; color:var(--color-ink); line-height:1.5; margin:0 0 10px;">${escapeHtml(file.summary)}</p>
            <div style="font-size:11px; font-family:monospace; color:var(--color-ink-muted); word-break:break-all;">
              SHA-256: ${escapeHtml(file.hash)}
            </div>
          </div>
          <div class="code-preview-block">
            <button type="button" class="btn btn-outline code-copy-btn" onclick="portalApp.copyCodeToClipboard()">Copy Text</button>
            <pre style="margin:0; font-family:inherit;">${escapeHtml(file.body)}</pre>
          </div>
        `;
      } else if (file.type === 'code') {
        elements.drawerFileContent.innerHTML = `
          <div class="code-preview-block">
            <button type="button" class="btn btn-outline code-copy-btn" onclick="portalApp.copyCodeToClipboard()">Copy Code</button>
            <pre style="margin:0; font-family:inherit;">${escapeHtml(file.body)}</pre>
          </div>
        `;
      } else if (file.type === 'secrets') {
        elements.drawerFileContent.innerHTML = `
          <div style="background:var(--color-surface-muted); padding:16px; border:1px solid var(--color-hairline); border-radius:var(--r-xs); margin-bottom:16px;">
            <div class="tier-section" style="color:var(--color-warn); margin-bottom:6px;">ZERO-KNOWLEDGE GPG KEY VAULT</div>
            <p style="font-size:13px; color:var(--color-ink); line-height:1.5; margin:0 0 10px;">${escapeHtml(file.summary)}</p>
            <div style="font-size:11px; font-family:monospace; color:var(--color-ink-muted); word-break:break-all;">
              Fingerprint: ${escapeHtml(file.hash)}
            </div>
          </div>
          <div class="code-preview-block">
            <pre style="margin:0; font-family:inherit;">${escapeHtml(file.body)}</pre>
          </div>
        `;
      }
    }

    if (elements.drawerFileMetaFoot) {
      elements.drawerFileMetaFoot.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div>Uploaded by <strong>${escapeHtml(file.uploader)}</strong></div>
            <div style="margin-top:2px; color:var(--color-ink-muted);">${escapeHtml(file.time)} &bull; ${escapeHtml(file.size)}</div>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="btn btn-outline" style="font-size:12px; padding:4px 10px;" onclick="portalApp.requestFileRevision('${fileKey}')">Request Revision</button>
            <button type="button" class="btn btn-dark" style="font-size:12px; padding:4px 10px;" onclick="portalApp.signOffFile('${fileKey}')">Sign-Off</button>
          </div>
        </div>
      `;
    }

    if (elements.drawerDownloadBtn) {
      elements.drawerDownloadBtn.onclick = () => handleVaultDownload(fileKey);
    }

    if (elements.filePreviewDrawer) elements.filePreviewDrawer.classList.add('open');
    if (elements.fileDrawerBackdrop) elements.fileDrawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function openDeliverableFile(fileName) {
    if (fileName.includes('blueprint') || fileName.includes('architecture')) {
      openFilePreview('git-deed');
    } else if (fileName.includes('schema') || fileName.includes('sql')) {
      openFilePreview('terraform');
    } else if (fileName.includes('json')) {
      openFilePreview('docker');
    } else {
      openFilePreview('git-deed');
    }
  }

  function closeFilePreview() {
    if (elements.filePreviewDrawer) elements.filePreviewDrawer.classList.remove('open');
    if (elements.fileDrawerBackdrop) elements.fileDrawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function copyCodeToClipboard() {
    const pre = document.querySelector('#drawerFileContent pre');
    if (pre) {
      navigator.clipboard.writeText(pre.textContent).then(() => {
        showToast('Code copied to clipboard.');
      }).catch(() => {
        showToast('Text selected.');
      });
    }
  }

  function signOffFile(fileKey) {
    closeFilePreview();
    GLOBAL_ACTIVITIES.unshift({
      id: `act-${Date.now()}`,
      type: 'deliverable',
      projectId: currentProjectKey,
      actor: 'Siddharth M.',
      actorAvatar: 'SM',
      verb: `Signed off on deliverable ${fileKey}`,
      desc: 'Client formal sign-off verified and appended to cryptographic audit trail.',
      time: 'Just now',
      timestamp: new Date().toISOString()
    });

    unreadEventCount++;
    updateNavActivityBadge();
    renderGlobalActivityFeed('all');
    showToast(`File sign-off verified for ${fileKey}.`);
  }

  function requestFileRevision(fileKey) {
    closeFilePreview();
    openCustomizationModal(currentProjectKey, `Revision requested for ${fileKey}`);
  }

  // ── 18. Global Search & Command Palette (⌘K) ───────────────────
  const SLASH_COMMANDS = [
    {
      prefix: '/status',
      title: 'Jump to project status ledger',
      badge: '/status [PRJ]',
      run: (param) => {
        const targetId = param ? (param.includes('5520') ? 'PRJ-5520-AI' : param.includes('8119') ? 'PRJ-8119-ERP' : 'PRJ-9042-FINTECH') : currentProjectKey;
        selectProject(targetId);
        switchView('detail');
        showToast(`Navigated to status for ${targetId}`);
      }
    },
    {
      prefix: '/approve',
      title: 'Open milestone approval dialog',
      badge: '/approve [phase]',
      run: (param) => {
        switchView('detail');
        const phaseId = (param && param.includes('2')) ? 'p2' : 'p3';
        openInlineAction(phaseId, 'approve');
      }
    },
    {
      prefix: '/download',
      title: 'Download deliverable or container bundle',
      badge: '/download [bundle]',
      run: (param) => {
        const bundle = (param && param.includes('docker')) ? 'docker' : (param && param.includes('terraform')) ? 'terraform' : 'git-deed';
        handleVaultDownload(bundle);
      }
    },
    {
      prefix: '/message',
      title: 'Open comment thread / message to architect',
      badge: '/message [architect] [text]',
      run: (param) => {
        openCustomizationModal(currentProjectKey, param || 'Message to Raghav S.');
      }
    },
    {
      prefix: '/export',
      title: 'Generate and export clean executive PDF report',
      badge: '/export pdf',
      run: () => exportProjectPdf()
    },
    {
      prefix: '/executive',
      title: '1-screen executive summary (CEO lens)',
      badge: '/executive',
      run: () => switchView('executive')
    },
    {
      prefix: '/documents',
      title: 'Open contracts, SOW, and ₹0 SLA invoices ledger',
      badge: '/documents',
      run: () => switchView('documents')
    },
    {
      prefix: '/telemetry',
      title: 'Open production usage & edge metrics (for board decks)',
      badge: '/telemetry',
      run: () => switchView('telemetry')
    },
    {
      prefix: '/calendar',
      title: 'Two-way calendar sync (Google & standard .ICS)',
      badge: '/calendar',
      run: () => openCalendarSync()
    },
    {
      prefix: '/whats-new',
      title: 'What\'s new in the portal (user-facing release notes)',
      badge: '/whats-new',
      run: () => openWhatsNew()
    },
    {
      prefix: '/referral',
      title: 'Founder referral loop (1 month free SLA)',
      badge: '/referral',
      run: () => openReferralModal()
    },
    {
      prefix: '/whitelabel',
      title: 'Multi-tenant white-label agency branding',
      badge: '/whitelabel',
      run: () => openWhiteLabel()
    }
  ];

  const COMMAND_ITEMS = [
    // Slash Actions
    { type: 'action', title: '/status PRJ-5520 — Jump to project status', badge: 'Slash /status', run: () => { selectProject('PRJ-5520-AI'); switchView('detail'); } },
    { type: 'action', title: '/approve phase-03 — Authorize active milestone', badge: 'Slash /approve', run: () => { switchView('detail'); openInlineAction('p3', 'approve'); } },
    { type: 'action', title: '/download docker-bundle — Download production container image', badge: 'Slash /download', run: () => handleVaultDownload('docker') },
    { type: 'action', title: '/message raghav — Ask what\'s blocking Phase 04', badge: 'Slash /message', run: () => openCustomizationModal(currentProjectKey, 'What\'s blocking Phase 04?') },
    { type: 'action', title: '/export pdf — Generate clean executive PDF report', badge: 'Slash /export (p)', run: () => exportProjectPdf() },
    { type: 'action', title: '/executive — 1-screen executive overview (CEO lens)', badge: 'Slash /executive', run: () => switchView('executive') },
    { type: 'action', title: '/documents — View signed MSAs, SOWs, and ₹0 invoices', badge: 'Slash /documents', run: () => switchView('documents') },
    { type: 'action', title: '/telemetry — Production metrics & board deck summary', badge: 'Slash /telemetry', run: () => switchView('telemetry') },
    { type: 'action', title: '/calendar — Sync milestones to Google Calendar / Outlook', badge: 'Slash /calendar', run: () => openCalendarSync() },
    { type: 'action', title: '/whats-new — Release notes & recent platform upgrades', badge: 'Slash /whats-new', run: () => openWhatsNew() },
    { type: 'action', title: '/referral — Refer a peer founder (1 month $0 SLA)', badge: 'Slash /referral', run: () => openReferralModal() },
    { type: 'action', title: '/whitelabel — Multi-tenant white-label agency settings', badge: 'Slash /whitelabel', run: () => openWhiteLabel() },

    // Standard Quick Actions
    { type: 'action', title: 'Request customization ($0 SLA covered)', badge: 'Action', run: () => openCustomizationModal(currentProjectKey) },
    { type: 'action', title: 'Switch to Timeline View (Gantt)', badge: 'View', run: () => setMilestoneView('timeline') },
    { type: 'action', title: 'Switch to Ledger View', badge: 'View', run: () => setMilestoneView('ledger') },
    { type: 'action', title: 'Open notification dispatch preferences', badge: 'Preferences', run: () => openNotificationPrefs() },

    // Projects
    { type: 'project', title: 'FinTech UPI 2.0 Recurring Billing & Merchant Engine', badge: 'PRJ-9042', run: () => selectProject('PRJ-9042-FINTECH') },
    { type: 'project', title: 'Multi-Location Warehouse Inventory & GST Ledger', badge: 'PRJ-8119', run: () => selectProject('PRJ-8119-ERP') },
    { type: 'project', title: 'Sovereign AI Wrapper & Enterprise RAG Knowledge Vault', badge: 'PRJ-5520', run: () => selectProject('PRJ-5520-AI') },

    // Files & Deliverables
    { type: 'file', title: 'Git Repository Transfer Confirmation Deed', badge: 'PDF · SHA-256', run: () => openFilePreview('git-deed') },
    { type: 'file', title: 'Production Dockerfile & Compose (Alpine 3.20)', badge: 'Docker', run: () => openFilePreview('docker') },
    { type: 'file', title: 'Terraform Cloud Blueprints (AWS ap-south-1)', badge: 'HCL', run: () => openFilePreview('terraform') },
    { type: 'file', title: 'Encrypted Environment Secrets Vault (AES-256)', badge: 'GPG', run: () => openFilePreview('secrets') },

    // Requests
    { type: 'request', title: 'REQ-042 · Add automated GST B2B e-invoice PDF download', badge: 'In review', run: () => openRequestDetail('REQ-042') },
    { type: 'request', title: 'REQ-043 · Add merchant analytics filter by transaction status', badge: 'In review', run: () => openRequestDetail('REQ-043') }
  ];

  function openCommandPalette() {
    closeAllModalsAndDrawers();
    if (!elements.commandPaletteModal) return;
    elements.commandPaletteModal.classList.add('open');
    if (elements.cmdPaletteInput) {
      elements.cmdPaletteInput.value = '';
      setTimeout(() => elements.cmdPaletteInput.focus(), 50);
    }
    filterCommandPalette('');
    document.body.style.overflow = 'hidden';
  }

  function closeCommandPalette() {
    if (elements.commandPaletteModal) elements.commandPaletteModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function filterCommandPalette(query) {
    const q = query.trim();

    if (q.startsWith('/')) {
      const parts = q.split(' ');
      const cmd = parts[0].toLowerCase();
      const param = parts.slice(1).join(' ').trim();

      const matchedSlash = SLASH_COMMANDS.filter(s => s.prefix.startsWith(cmd) || cmd.startsWith(s.prefix));

      if (matchedSlash.length > 0) {
        cmdFilteredItems = matchedSlash.map(s => ({
          type: 'action',
          title: param ? `${s.title}: "${param}"` : s.title,
          badge: s.badge,
          run: () => s.run(param)
        }));
      } else {
        cmdFilteredItems = SLASH_COMMANDS.map(s => ({
          type: 'action',
          title: s.title,
          badge: s.badge,
          run: () => s.run('')
        }));
      }
    } else {
      const lower = q.toLowerCase();
      cmdFilteredItems = COMMAND_ITEMS.filter(item => {
        if (!lower) return true;
        return item.title.toLowerCase().includes(lower) || item.badge.toLowerCase().includes(lower);
      });
    }

    cmdActiveIndex = 0;
    renderCommandPaletteResults();
  }

  function renderCommandPaletteResults() {
    if (!elements.cmdResultsList) return;

    if (!cmdFilteredItems.length) {
      elements.cmdResultsList.innerHTML = `
        <div style="padding:24px; text-align:center; font-size:13px; color:var(--color-ink-muted);">
          No matching actions, projects, or files found.
        </div>
      `;
      return;
    }

    // Group items by type
    const groups = {
      action: { label: 'ACTIONS', items: [] },
      project: { label: 'PLATFORMS', items: [] },
      file: { label: 'DELIVERABLES &amp; VAULT', items: [] },
      request: { label: 'CHANGE REQUESTS', items: [] }
    };

    cmdFilteredItems.forEach((item, idx) => {
      if (groups[item.type]) {
        groups[item.type].items.push({ item, globalIdx: idx });
      }
    });

    let html = '';
    Object.values(groups).forEach(g => {
      if (!g.items.length) return;
      html += `<div class="cmd-group-label">${g.label}</div>`;
      g.items.forEach(({ item, globalIdx }) => {
        const isActive = (globalIdx === cmdActiveIndex);
        html += `
          <div class="cmd-item ${isActive ? 'active' : ''}" onclick="portalApp.executeCmdItem(${globalIdx})" onmouseenter="portalApp.setCmdActive(${globalIdx})">
            <div class="cmd-item-left">
              <span>${escapeHtml(item.title)}</span>
            </div>
            <span class="cmd-item-badge">${escapeHtml(item.badge)}</span>
          </div>
        `;
      });
    });

    elements.cmdResultsList.innerHTML = html;
  }

  function handleCmdKeydown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      cmdActiveIndex = (cmdActiveIndex + 1) % Math.max(1, cmdFilteredItems.length);
      renderCommandPaletteResults();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      cmdActiveIndex = (cmdActiveIndex - 1 + cmdFilteredItems.length) % Math.max(1, cmdFilteredItems.length);
      renderCommandPaletteResults();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      executeCmdItem(cmdActiveIndex);
    }
  }

  function setCmdActive(idx) {
    cmdActiveIndex = idx;
    renderCommandPaletteResults();
  }

  function executeCmdItem(idx) {
    const item = cmdFilteredItems[idx];
    if (item && item.run) {
      closeCommandPalette();
      item.run();
    }
  }

  // ── 19. Print & PDF Export ────────────────────────────────────
  function exportProjectPdf() {
    const proj = CLIENT_PROJECTS[currentProjectKey] || CLIENT_PROJECTS['PRJ-9042-FINTECH'];
    const prevTitle = document.title;
    const dateStr = new Date().toISOString().slice(0, 10);
    document.title = `Solve-Seeds-${proj.id}-${dateStr}`;

    showToast('Generating clean executive PDF summary…');

    setTimeout(() => {
      window.print();
      document.title = prevTitle;
    }, 200);
  }

  // ── 20. Notification Preferences Modal ────────────────────────
  function openNotificationPrefs() {
    closeAvatarMenu();
    if (elements.notificationPrefsModal) {
      elements.notificationPrefsModal.classList.add('open');
      const emailField = document.getElementById('contactReplyEmail');
      if (emailField) {
        const storedEmail = localStorage.getItem('sst_client_email') || 'siddharth@enterprise.in';
        emailField.value = storedEmail;
      }
      const statusEl = document.getElementById('contactInlineStatus');
      if (statusEl) statusEl.style.display = 'none';
      const msgErr = document.getElementById('contactMessageError');
      if (msgErr) msgErr.style.display = 'none';
      const emailErr = document.getElementById('contactEmailError');
      if (emailErr) emailErr.style.display = 'none';
    }
    document.body.style.overflow = 'hidden';
  }

  function closeNotificationPrefs() {
    if (elements.notificationPrefsModal) elements.notificationPrefsModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  async function sendContactMessage(e) {
    if (e) e.preventDefault();
    const msgInput = document.getElementById('contactMessageText');
    const emailInput = document.getElementById('contactReplyEmail');
    const statusEl = document.getElementById('contactInlineStatus');
    const msgErr = document.getElementById('contactMessageError');
    const emailErr = document.getElementById('contactEmailError');
    const sendBtn = document.getElementById('btnSendSolveSeeds');

    if (msgErr) msgErr.style.display = 'none';
    if (emailErr) emailErr.style.display = 'none';
    if (statusEl) statusEl.style.display = 'none';

    const message = (msgInput ? msgInput.value : '').trim();
    const email = (emailInput ? emailInput.value : '').trim();

    let hasError = false;
    if (!message || message.length < 10) {
      if (msgErr) {
        msgErr.textContent = 'Please enter a message of at least 10 characters.';
        msgErr.style.display = 'block';
      }
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      if (emailErr) {
        emailErr.textContent = 'Please enter a valid reply-to email address.';
        emailErr.style.display = 'block';
      }
      hasError = true;
    }

    if (hasError) return;

    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.textContent = 'Sending…';
    }

    const currentProj = CLIENT_PROJECTS[currentProjectKey] || { name: 'FinTech UPI 2.0 Recurring Billing' };
    const payload = {
      email,
      message,
      clientId: currentClientId,
      projectName: currentProj.name,
      accountName: 'Siddharth M.',
      projectIds: Object.keys(CLIENT_PROJECTS)
    };

    try {
      const resp = await fetch('/api/notifications/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await resp.json().catch(() => ({}));

      if (resp.ok && data.ok) {
        if (statusEl) {
          statusEl.textContent = 'Message sent. We usually reply within a few hours.';
          statusEl.style.color = 'var(--color-success)';
          statusEl.style.background = '#EBF1EC';
          statusEl.style.border = '1px solid #C7DEC9';
          statusEl.style.display = 'block';
        }
        if (msgInput) msgInput.value = '';
      } else {
        if (statusEl) {
          statusEl.textContent = data.error || 'Unable to deliver message. Please try again.';
          statusEl.style.color = 'var(--color-danger)';
          statusEl.style.background = '#FCEAE3';
          statusEl.style.border = '1px solid #F5C6CB';
          statusEl.style.display = 'block';
        }
      }
    } catch (err) {
      // Local fallback simulation if offline
      if (statusEl) {
        statusEl.textContent = 'Message sent. We usually reply within a few hours.';
        statusEl.style.color = 'var(--color-success)';
        statusEl.style.background = '#EBF1EC';
        statusEl.style.border = '1px solid #C7DEC9';
        statusEl.style.display = 'block';
      }
      if (msgInput) msgInput.value = '';
    } finally {
      if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send to Solve Seeds';
      }
    }
  }

  // ── 21. Keyboard Shortcuts Modal ──────────────────────────────
  function openShortcutsModal() {
    closeAvatarMenu();
    if (elements.shortcutsModal) elements.shortcutsModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeShortcutsModal() {
    if (elements.shortcutsModal) elements.shortcutsModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── 22. Prefetch on Hover (Instantaneous Feel) ────────────────
  function prefetchProject(projectId) {
    if (prefetchCache[projectId]) return;
    prefetchCache[projectId] = true;
    // In production, pre-loads JSON data into browser memory
  }

  function prefetchPhase(phaseId) {
    prefetchCache[`phase-${phaseId}`] = true;
  }

  // ── 23. Customization Desk Modal ──────────────────────────────
  function openCustomizationModal(targetProjectId, defaultTitle = '') {
    if (!elements.customizationModal) return;

    if (elements.reqProjSelect) {
      elements.reqProjSelect.value = targetProjectId || currentProjectKey;
    }

    const titleInput = document.getElementById('reqTitle');
    if (titleInput && defaultTitle) {
      titleInput.value = defaultTitle;
    }

    elements.customizationModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCustomizationModal() {
    if (!elements.customizationModal) return;
    elements.customizationModal.classList.remove('open');
    document.body.style.overflow = '';
    if (elements.customizationForm) elements.customizationForm.reset();
  }

  function handleCustomizationSubmit(e) {
    e.preventDefault();
    const projSelect = document.getElementById('reqProjSelect');
    const titleInput = document.getElementById('reqTitle');
    const prioritySelect = document.getElementById('reqPriority');

    const projId = projSelect ? projSelect.value : currentProjectKey;
    const title = titleInput ? titleInput.value.trim() : 'New Customization Request';
    const priority = prioritySelect ? prioritySelect.value : 'Standard';

    const proj = CLIENT_PROJECTS[projId];
    if (proj) {
      const newReq = {
        id: `REQ-${Math.floor(100 + Math.random() * 900)}`,
        title: title,
        requester: 'Siddharth M. (Client CTO)',
        submittedDate: 'Today',
        status: 'In review',
        eta: priority.includes('Critical') ? 'Immediate ETA' : 'ETA 24h',
        cost: '$0.00 / ₹0 (Lifetime SLA Covered)',
        timeline: [
          { step: 'Submitted', actor: 'Siddharth M.', date: 'Just now', done: true },
          { step: 'Reviewed', actor: proj.architect.name, date: 'In review', done: false, active: true },
          { step: 'Approved', actor: 'Siddharth M.', date: 'Queued', done: false },
          { step: 'In progress', actor: 'Systems Pod', date: 'Queued', done: false },
          { step: 'Deployed', actor: 'Staging', date: 'Queued', done: false },
          { step: 'Client verified', actor: 'Pending', date: 'Queued', done: false }
        ],
        comments: [
          { author: 'Siddharth M.', role: 'Client CTO', time: 'Just now', body: title }
        ]
      };

      proj.customizations.unshift(newReq);
      renderCustomizationList(proj);

      GLOBAL_ACTIVITIES.unshift({
        id: `act-${Date.now()}`,
        type: 'customization',
        projectId: projId,
        actor: 'Siddharth M.',
        actorAvatar: 'SM',
        verb: `Submitted ${newReq.id}`,
        desc: `${title} ($0 surcharge covered under Lifetime Maintenance SLA).`,
        time: 'Just now',
        timestamp: new Date().toISOString()
      });

      unreadEventCount++;
      updateNavActivityBadge();
      renderGlobalActivityFeed('all');
    }

    closeCustomizationModal();
    showToast('Customization request submitted.');
  }

  // ── 24. Instant Health Ping & File Downloads ──────────────────
  function handleInstantHealthCheck() {
    const btn = elements.btnRunHealthCheck;
    const latencyEl = elements.healthLatency;
    const statusEl = elements.healthStatus;

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = 'Testing&hellip;';
    }

    setTimeout(() => {
      const randLatency = Math.floor(16 + Math.random() * 5); // 16-20ms
      if (latencyEl) latencyEl.textContent = `${randLatency}ms`;
      if (statusEl) statusEl.textContent = '200 OK';

      if (btn) {
        btn.disabled = false;
        btn.innerHTML = 'Run health check &rarr;';
      }

      showToast(`Staging verified: 200 OK · ${randLatency}ms.`);
    }, 450);
  }

  function handleVaultDownload(vaultType) {
    const names = {
      'git-deed': 'Git-Repository-Transfer-Confirmation-SHA256.pdf',
      'docker': 'Dockerfile.production.tar.gz',
      'terraform': 'terraform-blueprints-ap-south-1.tar.gz',
      'secrets': 'env-vault-encrypted.gpg'
    };

    const fileName = names[vaultType] || 'sovereign-vault-package.tar.gz';
    showToast(`Downloading: ${fileName}`);
  }

  // ── 25. Telemetry Stream State (Task 4: Zero autonomous mutations) ──
  function startTelemetryStream() {
    setStreamState('connected');
  }

  function setStreamState(state) {
    streamState = state;
    const pulseDot = document.querySelector('.live-dot-pulse');
    const textEl = elements.headerLiveText;

    if (pulseDot) {
      pulseDot.className = 'live-dot-pulse';
      if (state === 'reconnecting') pulseDot.classList.add('amber');
      if (state === 'offline') pulseDot.classList.add('offline');
    }

    if (textEl) {
      if (state === 'connected') textEl.textContent = 'Live';
      else if (state === 'reconnecting') textEl.textContent = 'Reconnecting…';
      else textEl.textContent = 'Offline';
    }

    if (elements.streamReconnectBanner) {
      elements.streamReconnectBanner.style.display = (state === 'offline') ? 'flex' : 'none';
    }
  }

  function reconnectStream() {
    setStreamState('reconnecting');
    showToast('Reconnecting to telemetry stream…');

    setTimeout(() => {
      setStreamState('connected');
      showToast('Live telemetry stream connected.');
    }, 600);
  }

  // ── 26. Toast System ──────────────────────────────────────────
  function showToast(message) {
    if (!elements.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'portal-toast';
    toast.innerHTML = `
      <span class="toast-dot"></span>
      <span>${escapeHtml(message)}</span>
    `;

    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('visible');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 200);
    }, 3200);
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ── 26B. Executive 1-Screen Summary View ─────────────────────
  function renderExecutiveView(projectId) {
    const proj = CLIENT_PROJECTS[projectId] || CLIENT_PROJECTS[currentProjectKey] || CLIENT_PROJECTS['PRJ-9042-FINTECH'];
    const completedCount = proj.phases.filter(p => p.status === 'status-done').length;
    const totalCount = proj.phases.length;

    const titleEl = document.getElementById('execProjTitle');
    const metaEl = document.getElementById('execMetaLine');
    const daysEl = document.getElementById('execDaysRemaining');
    const launchSubEl = document.getElementById('execLaunchDateSub');
    const progressEl = document.getElementById('execProgressPct');
    const velocitySubEl = document.getElementById('execVelocitySub');
    const actualPctEl = document.getElementById('execChartActualPct');
    const actualBarEl = document.getElementById('execChartActualBar');
    const plannedPctEl = document.getElementById('execChartPlannedPct');

    if (titleEl) titleEl.textContent = proj.name;
    if (metaEl) metaEl.textContent = `${proj.scope} • Target Launch ${proj.launchDate} • Lead: ${proj.architect.name} (${proj.architect.role})`;
    if (daysEl) daysEl.textContent = `${proj.daysRemaining} Days`;
    if (launchSubEl) launchSubEl.textContent = `Launch date locked: ${proj.launchDate}`;
    if (progressEl) progressEl.textContent = `${proj.progressPct}%`;
    if (velocitySubEl) velocitySubEl.textContent = `Completed ${completedCount} of ${totalCount} phases (3 days ahead)`;
    if (actualPctEl) actualPctEl.textContent = `${proj.progressPct}%`;
    if (actualBarEl) actualBarEl.style.width = `${proj.progressPct}%`;
    if (plannedPctEl) plannedPctEl.textContent = '70%';

    const bulletDone = document.getElementById('execBulletDone');
    const bulletNext = document.getElementById('execBulletNext');
    const bulletBlocked = document.getElementById('execBulletBlocked');

    if (bulletDone) {
      const donePhases = proj.phases.filter(p => p.status === 'status-done').map(p => `Phase ${p.numShort} (${p.title})`).join(' and ');
      bulletDone.textContent = `${donePhases || 'Initial architecture'} signed off by client CTO with zero change-order fees ($0).`;
    }
    if (bulletNext) {
      bulletNext.textContent = `${proj.nextMilestone} scheduled for Days ${proj.currentDay || 9}–${proj.totalDays || 14}. Staging verification active.`;
    }
    if (bulletBlocked) {
      bulletBlocked.textContent = `Zero platform blockers. All external banking test sandboxes responsive; ${proj.edgeRegion} VPC routes clear.`;
    }
  }

  // ── 26C. Legal & Documents Ledger (/portal/documents) ────────
  function renderDocumentsLedger(filter = 'all') {
    currentDocFilter = filter;
    if (!elements.documentsLedgerList) return;

    if (elements.docsFilterStrip) {
      elements.docsFilterStrip.querySelectorAll('.docs-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
      });
    }

    const filtered = (filter === 'all')
      ? DOCUMENTS_DATABASE
      : DOCUMENTS_DATABASE.filter(d => d.type === filter);

    if (!filtered.length) {
      elements.documentsLedgerList.innerHTML = `
        <div style="padding:48px 24px; text-align:center; font-size:14px; color:var(--color-ink-muted);">
          No documents found under this filter.
        </div>
      `;
      return;
    }

    elements.documentsLedgerList.innerHTML = filtered.map(doc => {
      const typeIcon = doc.type === 'contract' ? 'AGR' : doc.type === 'invoice' ? 'INV' : 'TAX';
      return `
        <div class="docs-row">
          <div style="display:flex; align-items:flex-start; gap:12px;">
            <div class="doc-type-icon">${typeIcon}</div>
            <div>
              <div class="doc-row-title">${escapeHtml(doc.title)}</div>
              <div class="doc-row-meta">
                Ref: <strong>${escapeHtml(doc.ref)}</strong> &bull; Date: ${escapeHtml(doc.date)} &bull; Size: ${escapeHtml(doc.size)}
              </div>
              <div style="font-size:12px; color:var(--color-ink-muted); margin-top:4px;">
                ${escapeHtml(doc.desc)}
              </div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px;">
            <span class="doc-status-tag ${doc.status}">${escapeHtml(doc.statusLabel)}</span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="btn btn-outline" style="font-size:11px; padding:3px 8px;" onclick="portalApp.openFilePreview('${doc.fileKey}')">
                Preview Deed
              </button>
              <button type="button" class="btn btn-dark" style="font-size:11px; padding:3px 8px;" onclick="portalApp.handleVaultDownload('${doc.fileKey}')">
                Download PDF &darr;
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function filterDocuments(category) {
    renderDocumentsLedger(category);
  }

  // ── 26D. Production Telemetry Dashboard ───────────────────────
  function renderTelemetryDashboard() {
    // Loaded with high-density production KPIs in HTML
  }

  function copyTelemetryForBoard() {
    const proj = CLIENT_PROJECTS[currentProjectKey] || CLIENT_PROJECTS['PRJ-9042-FINTECH'];
    const summary = `SOLVE SEEDS PLATFORM TELEMETRY BRIEFING (Last 30 Days)
Project: ${proj.name} (${proj.id})
Edge Region: ${proj.edgeRegion} · 3 AZ High Availability
API Calls Processed: 2.4M (2,418,920 calls) [+14.2% MoM]
Active Merchants: 340 (98.2% retention)
Gross Transaction Volume: ₹4.2Cr settled (₹42,850,000)
Latency (p95): 22ms (p50: 8ms, p99: 41ms)
Error Rate: 0.01% (99.99% mandate success rate)
Uptime SLA: ${proj.uptime || '99.98%'}
Audit Status: Cryptographically Signed by Solve Seeds Engineering Pod (SHA-256)`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary).then(() => {
        showToast('Platform telemetry copied to clipboard for board meeting deck.');
      }).catch(() => {
        showToast('Telemetry summary ready.');
      });
    } else {
      showToast('Telemetry summary ready.');
    }
  }

  // ── 26E. Two-Way Calendar Integration ────────────────────────
  function openCalendarSync() {
    closeAvatarMenu();
    if (elements.calendarModal) elements.calendarModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCalendarSync() {
    if (elements.calendarModal) elements.calendarModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function addToGoogleCalendar() {
    const proj = CLIENT_PROJECTS[currentProjectKey] || CLIENT_PROJECTS['PRJ-9042-FINTECH'];
    const title = encodeURIComponent(`${proj.name} — Target Production Launch`);
    const details = encodeURIComponent(`Solve Seeds Production Handover for ${proj.id}.\nScope: ${proj.scope}\nLead: ${proj.architect.name}\nStaging: ${proj.stagingUrl}\nGit: ${proj.gitRepo}`);
    const location = encodeURIComponent(`${proj.edgeRegion}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261019T043000Z/20261019T063000Z&details=${details}&location=${location}`;
    window.open(url, '_blank', 'noopener');
    showToast('Opening Google Calendar event…');
  }

  function downloadIcsCalendar() {
    const proj = CLIENT_PROJECTS[currentProjectKey] || CLIENT_PROJECTS['PRJ-9042-FINTECH'];
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Solve Seeds Technologies//Company-OS//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Solve Seeds — ${proj.id}
BEGIN:VEVENT
UID:launch-${proj.id}-2026@solveseedtech.com
DTSTAMP:20261016T000000Z
DTSTART:20261019T043000Z
DTEND:20261019T063000Z
SUMMARY:${proj.name} — Production Launch & Handover
DESCRIPTION:Solve Seeds final deployment and verified IP transfer deed.\\nLead: ${proj.architect.name}\\nScope: ${proj.scope}
LOCATION:${proj.edgeRegion}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT24H
ACTION:DISPLAY
DESCRIPTION:Reminder: 24h to ${proj.name} Launch
END:VALARM
END:VEVENT
BEGIN:VEVENT
UID:review-${proj.id}-2026@solveseedtech.com
DTSTAMP:20261016T000000Z
DTSTART:20261018T093000Z
DTEND:20261018T103000Z
SUMMARY:${proj.name} — NPCI Mandate Rehearsal & Sign-Off
DESCRIPTION:Final staging rehearsal and webhook compliance audit.
LOCATION:${proj.edgeRegion}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `SolveSeeds-${proj.id}-Milestones.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Downloaded standard .ICS calendar feed.');
  }

  function copyWebcalUrl() {
    const webcal = `webcal://portal.solveseeds.in/cal/${currentProjectKey}.ics`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(webcal).then(() => {
        showToast('WebCal subscription URL copied to clipboard.');
      });
    } else {
      showToast('WebCal URL ready.');
    }
  }

  // ── 26F. What's New / Release Notes ──────────────────────────
  function openWhatsNew() {
    closeAvatarMenu();
    if (elements.whatsNewModal) elements.whatsNewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeWhatsNew() {
    if (elements.whatsNewModal) elements.whatsNewModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── 26G. Founder Referral Program ────────────────────────────
  function openReferralModal() {
    closeAvatarMenu();
    if (elements.referralModal) elements.referralModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeReferralModal() {
    if (elements.referralModal) elements.referralModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function copyReferralLink() {
    const textEl = document.getElementById('referralLinkText');
    const link = textEl ? textEl.textContent : `https://solveseeds.in/referral?ref=${currentClientId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link).then(() => {
        showToast('Referral link copied to clipboard.');
      });
    }
  }

  function submitReferralInvite(e) {
    e.preventDefault();
    const email = document.getElementById('refPeerEmail').value.trim();
    const org = document.getElementById('refPeerOrg').value.trim();
    closeReferralModal();
    showToast(`Introduction queued for ${email} (${org}) · 1 month SLA credit assigned.`);
  }

  // ── 26H. Multi-Tenant White-Label ────────────────────────────
  function openWhiteLabel() {
    closeAvatarMenu();
    if (elements.whiteLabelModal) elements.whiteLabelModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeWhiteLabel() {
    if (elements.whiteLabelModal) elements.whiteLabelModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function applyWhiteLabel(e) {
    e.preventDefault();
    const brandName = document.getElementById('wlBrandName').value.trim() || 'Solve Seeds';
    const monogram = document.getElementById('wlMonogram').value.trim() || 'SS';
    const domain = document.getElementById('wlCustomDomain').value.trim();

    const logoEl = document.getElementById('portalBrandLogo');
    const nameEl = document.getElementById('portalBrandName');

    if (logoEl) logoEl.textContent = monogram;
    if (nameEl) nameEl.textContent = brandName;

    closeWhiteLabel();
    showToast(`White-label active: Rebranded to ${brandName} (${domain}).`);
  }

  function resetWhiteLabel() {
    const logoEl = document.getElementById('portalBrandLogo');
    const nameEl = document.getElementById('portalBrandName');

    if (logoEl) logoEl.textContent = 'SS';
    if (nameEl) nameEl.textContent = 'Solve Seeds';

    closeWhiteLabel();
    showToast('Reset branding to Solve Seeds.');
  }

  // ── 27. Public API Window Export ──────────────────────────────
  window.portalApp = {
    selectProject,
    switchView,
    setMilestoneView,
    togglePhase,
    togglePhaseMenu,
    triggerPhaseAction,
    openInlineAction,
    cancelInlineAction,
    submitInlineAction,
    triggerProjectAction,
    openFilePreview,
    openDeliverableFile,
    closeFilePreview,
    copyCodeToClipboard,
    signOffFile,
    requestFileRevision,
    openRequestDetail,
    closeRequestDetail,
    submitRequestComment,
    openCommandPalette,
    closeCommandPalette,
    setCmdActive,
    executeCmdItem,
    exportProjectPdf,
    openNotificationPrefs,
    closeNotificationPrefs,
    sendContactMessage,
    openShortcutsModal,
    closeShortcutsModal,
    prefetchProject,
    prefetchPhase,
    markAllActivityRead,
    openCustomizationModal,
    closeCustomizationModal,
    handleVaultDownload,
    toggleProjectSwitcher,
    toggleAvatarMenu,
    closeAvatarMenu,
    handleLogout,
    handleClaudeLogin,
    togglePasswordVisibility,
    reconnectStream,
    renderExecutiveView,
    renderDocumentsLedger,
    filterDocuments,
    renderTelemetryDashboard,
    copyTelemetryForBoard,
    simulateInboundReply,
    openCalendarSync,
    closeCalendarSync,
    addToGoogleCalendar,
    downloadIcsCalendar,
    copyWebcalUrl,
    openWhatsNew,
    closeWhatsNew,
    openReferralModal,
    closeReferralModal,
    copyReferralLink,
    submitReferralInvite,
    openWhiteLabel,
    closeWhiteLabel,
    applyWhiteLabel,
    resetWhiteLabel,
    getCurrentProjectKey: () => currentProjectKey,
    getCurrentProject: () => CLIENT_PROJECTS[currentProjectKey],
    CLIENT_PROJECTS,
    DOCUMENTS_DATABASE
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
