/**
 * Solve Seeds Technologies - Client Engineering Portal & Staging Engine
 */

let isDemoLoggedIn = false;

function initPortal() {
  renderPortalUI();
}

function renderPortalUI() {
  const loginSection = document.getElementById('portalLoginSection');
  const dashboardSection = document.getElementById('portalDashboardSection');

  if (loginSection && dashboardSection) {
    if (isDemoLoggedIn) {
      loginSection.style.display = 'none';
      dashboardSection.style.display = 'block';
    } else {
      loginSection.style.display = 'block';
      dashboardSection.style.display = 'none';
    }
  }
}

function handleLoginSubmit(e) {
  if (e) e.preventDefault();
  isDemoLoggedIn = true;
  renderPortalUI();
}

function logoutPortal() {
  isDemoLoggedIn = false;
  renderPortalUI();
}

function simulateDeployStaging() {
  const alertEl = document.getElementById('portalDeployAlert');
  if (alertEl) {
    alertEl.style.display = 'block';
    alertEl.innerHTML = `⚡ <strong>CI/CD Webhook Triggered:</strong> Building commit <code>#8b41e9</code> on Cloudflare Pages. Staging updated in 14 seconds.`;
    setTimeout(() => {
      alertEl.style.display = 'none';
    }, 6000);
  }
}

document.addEventListener('DOMContentLoaded', initPortal);
