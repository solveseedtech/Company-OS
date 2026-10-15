/**
 * Solve Seeds Technologies — Flagship Architecture Engine
 * Handcrafted vanilla JavaScript:
 * 1. IntersectionObserver scroll reveal engine
 * 2. Sticky navigation active section tracking
 * 3. Smooth offset anchor scrolling
 * 4. Executive Intake Form submission & SLA validation
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
            <div class="intake-status-tag">SPECIFICATION RECEIVED &bull; 24-HOUR ARCHITECT SLA</div>
            <div class="intake-status-title">Direct Evaluation Scheduled with Senior Architect</div>
            <div class="intake-status-body">
              <p>Thank you, <strong>${escapeHtml(name)}</strong>. Your architecture submission for <strong>${escapeHtml(domain)}</strong> (${escapeHtml(timeline)}) has been routed to our senior engineering pod.</p>
              <p style="margin-top:8px">A Principal Architect will review your platform requirements and respond with an initial technical blueprint to <strong>${escapeHtml(email)}</strong> within 24 hours.</p>
              <div style="margin-top:12px; font-size: 0.74rem; font-weight: 600; color: var(--ink-secondary); letter-spacing: 0.04em;">
                SLA REFERENCE: SST-${Date.now().toString(36).toUpperCase()} &bull; ZERO CHANGE-ORDER SURCHARGES &bull; 100% SOVEREIGN IP HANDOVER
              </div>
            </div>
          </div>
        `;

        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;

        statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 500);
    });
  }

  // ── Helper ─────────────────────────────────────────────────
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ── DOM Ready ──────────────────────────────────────────────
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
  }
})();
