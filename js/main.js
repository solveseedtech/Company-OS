/**
 * Solve Seeds Technologies — Flagship Architecture Engine
 * Pure handcrafted vanilla JavaScript:
 * 1. IntersectionObserver scroll reveal engine
 * 2. Sticky navigation active section tracking
 * 3. Smooth offset anchor scrolling
 * 4. Executive Intake Form submission & SLA validation docket
 * 5. Interactive Docket telemetry
 */

(function () {
  'use strict';

  // ── 1. Scroll Reveal Engine ────────────────────────────────
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    reveals.forEach(el => {
      // If already in viewport on load, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      } else {
        observer.observe(el);
      }
    });
  }

  // ── 2. Active Navigation Tracking ──────────────────────────
  function initActiveNav() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    if (!navLinks.length) return;

    const sections = Array.from(navLinks)
      .map(link => {
        const id = link.getAttribute('href').slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (!sections.length || !('IntersectionObserver' in window)) return;

    const navObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              const href = link.getAttribute('href');
              if (href === '#' + id) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
              } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
              }
            });
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-64px 0px -50% 0px'
      }
    );

    sections.forEach(sec => navObserver.observe(sec));
  }

  // ── 3. Smooth Offset Anchor Scrolling ──────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        if (!targetId) return;

        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          const navHeight = 64;
          const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
          });

          // Focus management for accessibility
          targetEl.setAttribute('tabindex', '-1');
          targetEl.focus({ preventScroll: true });
        }
      });
    });
  }

  // ── 4. Executive Architecture Intake Form ──────────────────
  function initIntakeForm() {
    const form = document.getElementById('intakeForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusBox = document.getElementById('intakeStatus');
    if (!form || !submitBtn || !statusBox) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('fName');
      const emailInput = document.getElementById('fEmail');
      const domainInput = document.getElementById('fDomain');
      const timelineInput = document.getElementById('fTimeline');
      const scopeInput = document.getElementById('fScope');

      const name = nameInput ? nameInput.value.trim() : 'Executive';
      const email = emailInput ? emailInput.value.trim() : '';
      const domain = domainInput ? domainInput.value : 'Enterprise Platform';
      const timeline = timelineInput ? timelineInput.value : '5–7 Days';

      // Button loading state
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Submitting Scope to Architecture Pod&hellip;';

      setTimeout(() => {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <div class="intake-status-box" role="status" aria-live="polite">
            <div class="intake-status-tag">[ ARCHITECTURE SPEC RECEIVED &bull; SLA: 24-HOUR RESPONSE ]</div>
            <h4 class="intake-status-title">Direct Evaluation Scheduled with Senior Architect</h4>
            <div class="intake-status-body">
              <p>Thank you, <strong>${escapeHtml(name)}</strong>. Your architecture submission for <strong>${escapeHtml(domain)}</strong> (${escapeHtml(timeline)}) has been assigned to our senior engineering pod.</p>
              <p style="margin-top:8px">A Lead Architect will review your requirements and provide an initial sovereign architecture blueprint directly to <strong>${escapeHtml(email)}</strong> within 24 hours.</p>
              <div style="margin-top:12px; font-family: var(--font-mono); font-size: 0.72rem; color: var(--ink-mono);">
                DOCKET ID: SST-${Date.now().toString(36).toUpperCase()} &bull; ZERO HOURLY SURCHARGES &bull; 100% SOVEREIGN IP HANDOVER
              </div>
            </div>
          </div>
        `;

        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;

        // Smooth scroll status into view if needed
        statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 550);
    });
  }

  // ── 5. Work Order Docket Interactive State ─────────────────
  function initDocketInteractions() {
    const docket = document.querySelector('.docket');
    if (!docket) return;

    const serialEl = docket.querySelector('.docket-serial');
    if (serialEl) {
      serialEl.title = 'Click to copy Engagement Docket Reference';
      serialEl.style.cursor = 'pointer';
      serialEl.addEventListener('click', () => {
        const text = serialEl.textContent.trim();
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(() => {
            const prev = serialEl.textContent;
            serialEl.textContent = 'COPIED TO CLIPBOARD';
            setTimeout(() => {
              serialEl.textContent = prev;
            }, 1800);
          });
        }
      });
    }
  }

  // ── Helper ─────────────────────────────────────────────────
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ── DOM Ready Bootstrapper ─────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    initScrollReveal();
    initActiveNav();
    initSmoothScroll();
    initIntakeForm();
    initDocketInteractions();
  }
})();
