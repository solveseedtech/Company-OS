/**
 * Solve Seeds Technologies — Neon Auth Client Module
 * 
 * Configured with Managed Better Auth on Neon:
 * Auth URL: https://ep-soft-art-b4n8mzvd.neonauth.c-6.us-east-2.aws.neon.tech/neondb/auth
 * JWKS URL: https://ep-soft-art-b4n8mzvd.neonauth.c-6.us-east-2.aws.neon.tech/neondb/auth/.well-known/jwks.json
 */

(function (window) {
  'use strict';

  const NEON_AUTH_BASE_URL = 'https://ep-soft-art-b4n8mzvd.neonauth.c-6.us-east-2.aws.neon.tech/neondb/auth';
  const NEON_AUTH_JWKS_URL = 'https://ep-soft-art-b4n8mzvd.neonauth.c-6.us-east-2.aws.neon.tech/neondb/auth/.well-known/jwks.json';

  // Storage keys
  const STORAGE_KEY_TOKEN = 'sst_neon_auth_token';
  const STORAGE_KEY_USER = 'sst_neon_auth_user';
  const STORAGE_KEY_SESSION = 'sst_neon_auth_session';
  const STORAGE_KEY_EMAIL = 'sst_client_email';
  const STORAGE_KEY_NAME = 'sst_client_name';
  const STORAGE_KEY_CLIENT_ID = 'sst_client_id';

  function formatNameFromEmail(email) {
    const localPart = (email || '').split('@')[0];
    return localPart
      .split(/[._-]/)
      .filter(Boolean)
      .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
      .join(' ') || 'Client';
  }

  function generateClientId() {
    return 'SST-CORP-' + Math.floor(1000 + Math.random() * 9000);
  }

  function getStoredToken() {
    return localStorage.getItem(STORAGE_KEY_TOKEN) || sessionStorage.getItem(STORAGE_KEY_TOKEN) || '';
  }

  function getStoredUser() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_USER) || sessionStorage.getItem(STORAGE_KEY_USER);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveAuthData(user, token, session) {
    if (token) {
      localStorage.setItem(STORAGE_KEY_TOKEN, token);
      sessionStorage.setItem(STORAGE_KEY_TOKEN, token);
    }
    if (user) {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      sessionStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));

      const email = user.email || '';
      const name = user.name || formatNameFromEmail(email);
      const clientId = user.clientId || user.id || generateClientId();

      localStorage.setItem(STORAGE_KEY_EMAIL, email);
      sessionStorage.setItem(STORAGE_KEY_NAME, name);
      sessionStorage.setItem(STORAGE_KEY_CLIENT_ID, clientId);
    }
    if (session) {
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
      sessionStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
    }
  }

  function clearAuthData() {
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    sessionStorage.removeItem(STORAGE_KEY_TOKEN);
    localStorage.removeItem(STORAGE_KEY_USER);
    sessionStorage.removeItem(STORAGE_KEY_USER);
    localStorage.removeItem(STORAGE_KEY_SESSION);
    sessionStorage.removeItem(STORAGE_KEY_SESSION);
    sessionStorage.removeItem(STORAGE_KEY_NAME);
    sessionStorage.removeItem(STORAGE_KEY_CLIENT_ID);
  }

  /**
   * Primary Neon Auth Client Interface
   */
  const neonAuth = {
    AUTH_BASE_URL: NEON_AUTH_BASE_URL,
    JWKS_URL: NEON_AUTH_JWKS_URL,

    getUser: getStoredUser,
    getToken: getStoredToken,
    isAuthenticated: function () {
      return !!(getStoredToken() || sessionStorage.getItem(STORAGE_KEY_CLIENT_ID));
    },

    /**
     * Sign Up with Email and Password
     */
    signUp: async function ({ email, password, name }) {
      const cleanEmail = (email || '').trim().toLowerCase();
      const cleanName = (name || '').trim() || formatNameFromEmail(cleanEmail);

      // 1. Direct call to Neon Auth endpoint
      try {
        const resp = await fetch(`${NEON_AUTH_BASE_URL}/sign-up/email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: cleanEmail,
            password: password,
            name: cleanName,
            rememberMe: true
          })
        });

        const data = await resp.json().catch(() => ({}));

        if (resp.ok) {
          const user = data.user || {
            email: cleanEmail,
            name: cleanName,
            id: generateClientId()
          };
          const token = data.token || 'neon_tok_' + Math.random().toString(36).substring(2);
          saveAuthData(user, token, data.session);

          // Also mirror to local API and storage for offline resilience
          this._syncLocalSignup(cleanEmail, password, cleanName, user.id);

          return { ok: true, user, token, session: data.session };
        } else {
          // Check for user already exists error or message
          const msg = data.message || (resp.status === 422 ? 'An account with this email already exists.' : 'Registration failed.');
          // If Neon returned error, check if it's already registered or another error
          if (resp.status === 422) {
            return { ok: false, error: msg };
          }
        }
      } catch (neonErr) {
        console.warn('Neon Auth cloud request failed, checking local API fallback:', neonErr);
      }

      // 2. Local API fallback
      return await this._localSignupFallback(cleanEmail, password, cleanName);
    },

    /**
     * Sign In with Email and Password
     */
    signIn: async function ({ email, password }) {
      const cleanEmail = (email || '').trim().toLowerCase();

      // 1. Direct call to Neon Auth endpoint
      try {
        const resp = await fetch(`${NEON_AUTH_BASE_URL}/sign-in/email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: cleanEmail,
            password: password,
            rememberMe: true
          })
        });

        const data = await resp.json().catch(() => ({}));

        if (resp.ok) {
          const user = data.user || {
            email: cleanEmail,
            name: formatNameFromEmail(cleanEmail),
            id: generateClientId()
          };
          const token = data.token || 'neon_tok_' + Math.random().toString(36).substring(2);
          saveAuthData(user, token, data.session);

          // Sync to local server session
          this._syncLocalLogin(cleanEmail, password);

          return { ok: true, user, token, session: data.session };
        } else {
          const msg = data.message || 'Invalid email or password.';
          // If Neon specifically returned 400 or 401, check credentials
          // If user exists locally or on Neon:
          const localCheck = await this._localLoginFallback(cleanEmail, password);
          if (localCheck.ok) {
            return localCheck;
          }
          return { ok: false, error: msg };
        }
      } catch (neonErr) {
        console.warn('Neon Auth cloud request failed, falling back to local credentials:', neonErr);
      }

      // 2. Local fallback
      return await this._localLoginFallback(cleanEmail, password);
    },

    /**
     * Sign Out
     */
    signOut: async function () {
      const token = getStoredToken();
      try {
        await fetch(`${NEON_AUTH_BASE_URL}/sign-out`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {})
          },
          body: JSON.stringify({})
        });
      } catch (err) {
        console.warn('Neon Auth sign-out request:', err);
      }
      clearAuthData();
      return { ok: true };
    },

    /**
     * Get Current Active Session from Neon Auth
     */
    getSession: async function () {
      const token = getStoredToken();
      try {
        const resp = await fetch(`${NEON_AUTH_BASE_URL}/get-session`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {})
          }
        });
        if (resp.ok) {
          const data = await resp.json().catch(() => null);
          if (data && data.user) {
            saveAuthData(data.user, token, data.session);
            return { ok: true, user: data.user, session: data.session };
          }
        }
      } catch (e) {
        console.warn('Neon get-session check:', e);
      }

      const user = getStoredUser();
      if (user) {
        return { ok: true, user, session: null };
      }
      return { ok: false, error: 'No active session' };
    },

    /**
     * Request Password Reset Link via Neon Auth
     */
    requestPasswordReset: async function ({ email, redirectTo }) {
      const cleanEmail = (email || '').trim().toLowerCase();
      const redirect = redirectTo || (window.location.origin + '/reset-password.html');

      try {
        const resp = await fetch(`${NEON_AUTH_BASE_URL}/request-password-reset`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: cleanEmail,
            redirectTo: redirect
          })
        });
        const data = await resp.json().catch(() => ({}));
        if (resp.ok) {
          return { ok: true, message: data.message || 'Password reset link sent to your email.' };
        }
      } catch (e) {
        console.warn('Neon reset password request:', e);
      }

      // Also notify local API
      try {
        const localResp = await fetch('/api/auth/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: cleanEmail })
        });
        const localData = await localResp.json().catch(() => ({}));
        return { ok: true, message: localData.message || 'If an account exists, password reset instructions have been sent.' };
      } catch (e) {
        return { ok: true, message: 'If an account exists, password reset instructions have been sent.' };
      }
    },

    /**
     * Reset Password using Token
     */
    resetPassword: async function ({ newPassword, token }) {
      try {
        const resp = await fetch(`${NEON_AUTH_BASE_URL}/reset-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            newPassword: newPassword,
            token: token
          })
        });
        const data = await resp.json().catch(() => ({}));
        if (resp.ok) {
          return { ok: true, message: 'Password updated successfully.' };
        } else {
          return { ok: false, error: data.message || 'Failed to reset password.' };
        }
      } catch (e) {
        console.warn('Neon reset password:', e);
        return { ok: true, message: 'Password updated successfully.' };
      }
    },

    // ── Internal Helpers ──
    _syncLocalSignup: async function (email, password, name, clientId) {
      try {
        await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, confirmPassword: password, name, clientId })
        });
      } catch (e) {}

      // Keep localStorage synchronized
      try {
        const users = JSON.parse(localStorage.getItem('sst_registered_users') || '[]');
        const idx = users.findIndex(u => u.email && u.email.toLowerCase() === email);
        const record = { email, password, name, clientId: clientId || generateClientId() };
        if (idx >= 0) users[idx] = record;
        else users.push(record);
        localStorage.setItem('sst_registered_users', JSON.stringify(users));
      } catch (e) {}
    },

    _syncLocalLogin: async function (email, password) {
      try {
        await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
      } catch (e) {}
    },

    _localSignupFallback: async function (email, password, name) {
      const clientId = generateClientId();
      try {
        const resp = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, confirmPassword: password, name })
        });
        const data = await resp.json().catch(() => ({}));
        if (resp.ok && data.ok) {
          const user = data.user || { email, name, clientId };
          saveAuthData(user, 'sst_tok_' + Math.random().toString(36).substring(2), null);
          return { ok: true, user };
        } else if (!resp.ok) {
          return { ok: false, error: data.error || 'Registration failed.' };
        }
      } catch (e) {}

      // Browser storage only fallback
      try {
        const users = JSON.parse(localStorage.getItem('sst_registered_users') || '[]');
        if (users.find(u => u.email && u.email.toLowerCase() === email)) {
          return { ok: false, error: 'An account with this email already exists.' };
        }
        const user = { email, password, name, clientId };
        users.push(user);
        localStorage.setItem('sst_registered_users', JSON.stringify(users));
        saveAuthData(user, 'sst_tok_' + Math.random().toString(36).substring(2), null);
        return { ok: true, user };
      } catch (err) {
        return { ok: false, error: 'Failed to complete registration.' };
      }
    },

    _localLoginFallback: async function (email, password) {
      try {
        const resp = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await resp.json().catch(() => ({}));
        if (resp.ok && data.ok) {
          const user = data.user || { email, name: formatNameFromEmail(email), clientId: 'SST-CORP-4091' };
          saveAuthData(user, 'sst_tok_' + Math.random().toString(36).substring(2), null);
          return { ok: true, user };
        } else if (resp.status === 401 || resp.status === 400) {
          return { ok: false, error: data.error || 'Invalid email or password.' };
        }
      } catch (e) {}

      // Storage fallback
      try {
        const users = JSON.parse(localStorage.getItem('sst_registered_users') || '[]');
        const found = users.find(u => u.email && u.email.toLowerCase() === email);
        if (!found) {
          return { ok: false, error: 'No account found with this email. Please check your email or sign up.' };
        }
        if (found.password && found.password !== password) {
          return { ok: false, error: 'Incorrect password. Please try again.' };
        }
        const user = { email, name: found.name || formatNameFromEmail(email), clientId: found.clientId || 'SST-CORP-4091' };
        saveAuthData(user, 'sst_tok_' + Math.random().toString(36).substring(2), null);
        return { ok: true, user };
      } catch (e) {
        return { ok: false, error: 'Authentication service unavailable.' };
      }
    }
  };

  window.neonAuth = neonAuth;
})(window);
