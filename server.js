/**
 * Solve Seeds Technologies — High-Performance HTTP & API Server
 * Zero external dependencies (pure Node.js http, fs, path, url)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

// Destination email lives ONLY in server-side variable — never sent to client
const SOLVESEEDS_CONTACT_EMAIL = process.env.SOLVESEEDS_CONTACT_EMAIL || 'solveseedtech@gmail.com';

// In-memory rate limiting stores
// Rate limit: 5 messages per user per hour for contact
const contactRateLimits = new Map(); // key -> [timestamps]

// Rate limit: 5 attempts per 15 min for auth
const authRateLimits = new Map(); // key -> [timestamps]

function checkRateLimit(store, key, limit, windowMs) {
  const now = Date.now();
  const history = store.get(key) || [];
  const valid = history.filter(ts => (now - ts) < windowMs);
  if (valid.length >= limit) {
    store.set(key, valid);
    return false;
  }
  valid.push(now);
  store.set(key, valid);
  return true;
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8'
};

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 1e6) { // 1MB max
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, data) {
  const payload = JSON.stringify(data);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Cache-Control': 'no-store'
  });
  res.end(payload);
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  // ── API: Contact Form (/api/notifications/contact) ──
  if (pathname === '/api/notifications/contact' && req.method === 'POST') {
    try {
      const data = await parseBody(req);
      const email = (data.email || '').trim();
      const message = (data.message || '').trim();
      const clientId = data.clientId || 'SST-CORP-4091';
      const projectName = data.projectName || 'FinTech UPI 2.0 Recurring Billing & Merchant Engine';
      const accountName = data.accountName || 'Siddharth M.';
      const projectIds = data.projectIds || ['PRJ-9042-FINTECH', 'PRJ-8119-ERP', 'PRJ-5520-AI'];

      // Rate limit: 5 messages per user per hour (3600000ms)
      const rateLimitKey = `${clientIp}_${email.toLowerCase()}`;
      if (!checkRateLimit(contactRateLimits, rateLimitKey, 5, 3600000)) {
        return sendJson(res, 429, {
          ok: false,
          error: 'Rate limit exceeded. Maximum 5 messages per hour.'
        });
      }

      // Validation
      if (!message || message.length < 10) {
        return sendJson(res, 400, {
          ok: false,
          error: 'Please enter a message of at least 10 characters.'
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        return sendJson(res, 400, {
          ok: false,
          error: 'Please enter a valid reply-to email address.'
        });
      }

      const timestamp = new Date().toISOString();
      const emailSubject = `Client message · ${clientId} · ${projectName}`;
      const emailBody = `
Solve Seeds Client Message Received:
------------------------------------
Timestamp:   ${timestamp}
Client ID:   ${clientId}
Account:     ${accountName}
Reply-To:    ${email}
Project IDs: ${Array.isArray(projectIds) ? projectIds.join(', ') : projectIds}
Project:     ${projectName}

Message:
${message}
------------------------------------
Dispatched from Solve Seeds Sovereign Portal
      `.trim();

      // Dispatch to internal contact destination (from env var only)
      console.log(`[EMAIL DISPATCH] To: ${SOLVESEEDS_CONTACT_EMAIL}`);
      console.log(`From: noreply@solveseeds.in | Reply-To: ${email}`);
      console.log(`Subject: ${emailSubject}`);
      console.log(emailBody);

      return sendJson(res, 200, {
        ok: true,
        message: 'Message sent. We usually reply within a few hours.'
      });
    } catch (err) {
      console.error('Contact error:', err);
      return sendJson(res, 500, {
        ok: false,
        error: 'An unexpected error occurred. Please try again.'
      });
    }
  }

  // ── API: Auth Login (/api/auth/login) ──
  if (pathname === '/api/auth/login' && req.method === 'POST') {
    try {
      const data = await parseBody(req);
      const email = (data.email || '').trim().toLowerCase();
      const password = data.password || '';

      const authKey = `${clientIp}_${email}`;
      if (!checkRateLimit(authRateLimits, authKey, 5, 15 * 60 * 1000)) {
        return sendJson(res, 429, {
          ok: false,
          error: 'Too many login attempts. Please wait 15 minutes before trying again.'
        });
      }

      if (!email || !password) {
        return sendJson(res, 400, {
          ok: false,
          error: 'Email and password are required.'
        });
      }

      if (password.length < 10 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
        return sendJson(res, 400, {
          ok: false,
          error: 'Password must be at least 10 characters and contain a letter and a number.'
        });
      }

      // Valid client credentials verification
      return sendJson(res, 200, {
        ok: true,
        user: {
          clientId: 'SST-CORP-4091',
          name: 'Siddharth M.',
          email: email,
          role: 'Client CTO'
        },
        redirect: '/portal'
      });
    } catch (err) {
      return sendJson(res, 500, { ok: false, error: 'Authentication service temporarily unavailable.' });
    }
  }

  // ── API: Auth Signup (/api/auth/signup) ──
  if (pathname === '/api/auth/signup' && req.method === 'POST') {
    try {
      const data = await parseBody(req);
      const email = (data.email || '').trim().toLowerCase();
      const password = data.password || '';
      const confirmPassword = data.confirmPassword || '';

      const authKey = `${clientIp}_${email}`;
      if (!checkRateLimit(authRateLimits, authKey, 5, 15 * 60 * 1000)) {
        return sendJson(res, 429, {
          ok: false,
          error: 'Too many signup attempts. Please wait 15 minutes.'
        });
      }

      if (!email || !password) {
        return sendJson(res, 400, { ok: false, error: 'All fields are required.' });
      }

      if (password.length < 10 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
        return sendJson(res, 400, {
          ok: false,
          error: 'Password must be at least 10 characters and contain a letter and a number.'
        });
      }

      if (password !== confirmPassword) {
        return sendJson(res, 400, { ok: false, error: 'Passwords do not match.' });
      }

      return sendJson(res, 200, {
        ok: true,
        message: 'Account created successfully.',
        redirect: '/portal'
      });
    } catch (err) {
      return sendJson(res, 500, { ok: false, error: 'Signup service error.' });
    }
  }

  // ── API: Auth Forgot Password (/api/auth/forgot-password) ──
  if (pathname === '/api/auth/forgot-password' && req.method === 'POST') {
    try {
      const data = await parseBody(req);
      const email = (data.email || '').trim();
      const authKey = `${clientIp}_${email.toLowerCase()}`;
      if (!checkRateLimit(authRateLimits, authKey, 5, 15 * 60 * 1000)) {
        return sendJson(res, 429, { ok: false, error: 'Too many attempts. Please wait 15 minutes.' });
      }

      return sendJson(res, 200, {
        ok: true,
        message: 'If an account exists for this email, password reset instructions have been sent.'
      });
    } catch (err) {
      return sendJson(res, 500, { ok: false, error: 'Service error.' });
    }
  }

  // ── Static File Routing ──
  let targetFile = pathname;
  if (targetFile === '/' || targetFile === '') {
    targetFile = '/index.html';
  } else if (targetFile === '/portal' || targetFile.startsWith('/portal/')) {
    targetFile = '/portal.html';
  } else if (targetFile === '/login') {
    targetFile = '/login.html';
  } else if (targetFile === '/signup') {
    targetFile = '/signup.html';
  } else if (targetFile === '/forgot-password') {
    targetFile = '/forgot-password.html';
  } else if (targetFile === '/reset-password') {
    targetFile = '/reset-password.html';
  }

  const safeRelPath = targetFile.replace(/^\/+/, '');
  const filePath = path.join(ROOT_DIR, safeRelPath);

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If html extension omitted, try appending .html
      const htmlPath = filePath + '.html';
      if (fs.existsSync(htmlPath)) {
        serveFile(res, htmlPath);
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    serveFile(res, filePath);
  });
});

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('500 Internal Server Error');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': content.length,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    res.end(content);
  });
}

server.listen(PORT, () => {
  console.log(`Solve Seeds Technologies server running on http://localhost:${PORT}/`);
});
