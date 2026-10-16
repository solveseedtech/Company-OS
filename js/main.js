/**
 * Solve Seeds Technologies — Flagship Architecture Engine
 * Handcrafted vanilla JavaScript:
 * 1. Fluid Scroll Reveal Motion Engine (smooth viewport entry)
 * 2. Circular Motion Architectural Ledger Controller (interactive scrub & pause)
 * 3. Sticky navigation active section tracking
 * 4. Smooth offset anchor scrolling
 * 5. Executive Intake Form submission & SLA validation
 */

(function () {
  'use strict';

  // ── 1. Fluid Scroll Reveal Engine ───────────────────────────
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-group');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
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

  // ── 2. Automated Circular Motion Ledger Lifecycle ───────────
  function initCircularMotion() {
    const track = document.getElementById('circularTrack');
    if (!track) return;

    // Pause on keyboard focus for full accessibility (WCAG 2.2.2)
    track.addEventListener('focusin', () => track.classList.add('is-paused'));
    track.addEventListener('focusout', () => track.classList.remove('is-paused'));
  }

  // ── 3. Active Navigation Tracking ───────────────────────────
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

  // ── 4. Smooth Offset Anchor Scrolling ───────────────────────
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

  // ── 5. Executive Architecture Intake Form ───────────────────
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

  // ── 6. Product Showcase Carousel (Task 6) ──────────────────
  function initProductShowcase() {
    const container = document.getElementById('showcaseScrollContainer');
    const prevBtn = document.getElementById('showcasePrevBtn');
    const nextBtn = document.getElementById('showcaseNextBtn');
    const dots = document.querySelectorAll('#showcaseDots .showcase-dot');
    const tabs = document.querySelectorAll('#showcaseNavTabs .showcase-tab-btn');
    const progressFill = document.getElementById('showcaseProgressFill');
    if (!container) return;

    const cards = container.querySelectorAll('.showcase-slide-card');
    const totalSlides = cards.length;
    if (!totalSlides) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    function getActiveIndex() {
      const scrollLeft = container.scrollLeft;
      let activeIdx = 0;
      let minDiff = Infinity;
      cards.forEach((card, idx) => {
        const cardOffset = card.offsetLeft - container.offsetLeft;
        const diff = Math.abs(cardOffset - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          activeIdx = idx;
        }
      });
      return activeIdx;
    }

    function updateCarouselState() {
      const activeIdx = getActiveIndex();

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIdx);
      });

      tabs.forEach((tab, idx) => {
        tab.classList.toggle('active', idx === activeIdx);
      });

      if (progressFill) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        let pct;
        if (maxScroll <= 0) {
          pct = ((activeIdx + 1) / totalSlides) * 100;
        } else {
          pct = Math.min(100, Math.max(16.66, ((activeIdx + 1) / totalSlides) * 100));
        }
        progressFill.style.width = pct + '%';
      }
    }

    function scrollToSlide(idx) {
      if (idx < 0 || idx >= totalSlides) return;
      const targetCard = cards[idx];
      if (targetCard) {
        const targetLeft = targetCard.offsetLeft - container.offsetLeft;
        container.scrollTo({
          left: Math.max(0, targetLeft),
          behavior: scrollBehavior
        });
      }
    }

    container.addEventListener('scroll', updateCarouselState, { passive: true });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const currentIdx = getActiveIndex();
        scrollToSlide(Math.max(0, currentIdx - 1));
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const currentIdx = getActiveIndex();
        scrollToSlide(Math.min(totalSlides - 1, currentIdx + 1));
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        scrollToSlide(idx);
      });
    });

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        scrollToSlide(idx);
      });
    });

    container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const currentIdx = getActiveIndex();
        scrollToSlide(Math.max(0, currentIdx - 1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const currentIdx = getActiveIndex();
        scrollToSlide(Math.min(totalSlides - 1, currentIdx + 1));
      }
    });

    updateCarouselState();
  }

  // ── Helper ──────────────────────────────────────────────────
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ── DOM Ready Boot ──────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    initScrollReveal();
    initCircularMotion();
    initActiveNav();
    initSmoothScroll();
    initIntakeForm();
    initProductShowcase();
  }
})();
