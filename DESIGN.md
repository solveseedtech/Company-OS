---
name: Solve Seeds Technologies Design System
description: Editorial enterprise architecture grid system combining Microsoft's discipline, Rippling's compound-product narrative, and Odoo's modular blocks.
colors:
  primary: "#1C1917"
  canvas: "#FFFBE9"
  surface-elevated: "#FFFFFF"
  surface-subtle: "#F5EEDC"
  footer: "#CEAB93"
  border-hairline: "#E2D5BE"
  border-strong: "#B8967E"
  border-footer: "#B5927B"
  text-primary: "#1C1917"
  text-secondary: "#57504A"
  text-mono: "#785A46"
  text-muted: "#8A7E75"
  cta-primary-bg: "#1C1917"
  cta-primary-text: "#FFFBE9"
  cta-secondary-bg: "#CEAB93"
  status-live: "#15803D"
  status-live-bg: "#DCFCE7"
  status-pending: "#B45309"
  status-pending-bg: "#FEF3C7"
  footer-text: "#4A3C33"
  footer-dark: "#2E251F"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.3rem, 4.2vw, 3.8rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  h1:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  h3:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  h4:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  body-sm:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.88rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  mono-base:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
  mono-sm:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.06em"
  editorial:
    fontFamily: "'Instrument Serif', Georgia, serif"
    fontStyle: "italic"
rounded:
  none: "0px"
  sm: "3px"
  md: "6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.cta-primary-bg}"
    textColor: "{colors.cta-primary-text}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
---

## Overview
Solve Seeds Technologies is an On-Demand SaaS Product Studio positioned as an engineering platform. The visual world rejects "vibe-coded" startup clichés (dark mode purple gradients, floating rounded-3xl cards with heavy drop shadows, glowing pill badges, Lucide icons in colored circles, bouncy spring animations) in favor of Microsoft’s editorial grid discipline, Rippling’s warm-toned compound-product storytelling, and Odoo’s modular catalog clarity.

## Colors
- **Canvas (`#FFFBE9`)**: Primary warm paper background across all pages.
- **Surface Elevated (`#FFFFFF`)**: Interactive cards, active configurator panels, and live code mockups.
- **Surface Subtle (`#F5EEDC`)**: Secondary section alternations, table headers, and structural backgrounds.
- **Footer Surface (`#CEAB93`)**: High-impact architectural footer and executive conversion banner.
- **Exposed Hairline Grid (`#E2D5BE`)**: 1px structural dividing lines across the body canvas.
- **Strong Border (`#B8967E`)**: Active card states, focused inputs, and interactive boundaries.
- **Footer Border (`#B5927B`)**: 1px structural dividers on the `#CEAB93` footer.
- **Text Primary (`#1C1917`)**: Deep espresso charcoal (never pure `#000000`) for high-contrast legible ink.
- **Text Secondary (`#57504A`)**: Muted umber for descriptions and technical subtext.
- **Technical Mono (`#785A46`)**: Sprint tags, SLA metrics, latency indicators, and schema labels.
- **Status Live (`#15803D`)**: Production-ready signals, SLA uptime badges, and verified commit checkmarks.

## Typography
- **Headlines & Titles**: Plus Jakarta Sans (SemiBold 600, letter-spacing -0.03em). Left-aligned, architectural scale steps.
- **Editorial Accent**: Instrument Serif italicized on 1–2 key words in display headlines to establish high-end editorial authority.
- **Technical Specs & Metrics**: JetBrains Mono (uppercase, 0.05em tracking) for sprint timelines, tech stack pills, API latencies, and commit hashes.
- **Body Text**: Plus Jakarta Sans (Regular 400, line-height 1.6, measure 65–75ch).

## Layout
- **Architectural Grid Discipline**: Continuous exposed hairline grids (1px solid `#E2D5BE`) dividing sections into blueprint cells.
- **Sticky Navigation**: 64px height, `#FFFBE9` background, 1px `#E2D5BE` bottom border, zero drop shadow.
- **Bento Ledgers**: Crisp rectangular cells with shared borders (`divide-x`, `divide-y`).
- **Persistent Selection Tray**: Sticky bottom action bar tracking selected modules and sprint calculation across discovery.

## Elevation & Depth
- **No Heavy Drop Shadows**: Shadows are omitted or restricted to a crisp 1px ambient border definition (`box-shadow: 0 1px 3px rgba(28,25,23,0.06)`).
- **Surface Contrast Over Haloing**: Depth is achieved through surface contrast (`#FFFBE9` canvas vs `#FFFFFF` elevated cards) bounded by `#E2D5BE` hairlines.

## Shapes
- **Micro-Corners Only**: Corner radii are strictly `0px` to `6px` (`rounded: 0px` to `4px` on buttons and cards). Large pill shapes and `rounded-3xl` are prohibited.

## Components
- **Primary Button**: Solid deep espresso `#1C1917` with warm cream `#FFFBE9` text, sharp `3px` radius, crisp hover transition.
- **Secondary Button**: Crisp `#FFFFFF` surface with 1px `#E2D5BE` border and `#1C1917` text.
- **Module Matrix Cards**: Interactive blueprint tiles showing module name, pre-built status badge, technology stack, days added, and toggle checkbox.
- **Interactive Sandbox Viewers**: 3-way toggle switcher (Interactive App Preview, DB Schema ERD, and API Latency Benchmarks) with one-click demo credentials.
- **Scoping Wizard**: 4-step progressive disclosure calculator with live timeline/investment estimation and instant Blueprint generation.
- **Architectural Mega-Footer**: Full-width `#CEAB93` surface with structured 4-column ledger and executive conversion banner.

## Do's and Don'ts
- **DO**: Use exposed 1px solid hairline borders to structure all data and cards.
- **DO**: Pair Plus Jakarta Sans headlines with JetBrains Mono metadata and Instrument Serif editorial italic accents.
- **DO**: Keep all state transitions deterministic and instant (150ms ease-out).
- **DO**: Provide immediate proof via interactive sandboxes, PostgreSQL schema ERDs, and working configurators.
- **DON'T**: Use dark-mode purple gradients, neon glowing borders, or heavy glassmorphism blur.
- **DON'T**: Place floating pill badges over every heading or center all editorial content.
- **DON'T**: Use generic 3D blobs, stock photos, or Lucide icons in colored circles.
- **DON'T**: Use bouncy spring physics or ungrounded fade-up animation delays.
