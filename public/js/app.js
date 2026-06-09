const API_BASE_URL = 'http://localhost:5002/api';

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const mobileMenu = document.querySelector('.menu-toggle');
    const navLinks   = document.querySelector('.nav-links');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    buildLanguageSwitcher();
    updateNavbarAuth();
    // i18n.js auto-calls applyTranslations() on DOMContentLoaded
});

// ── Language Switcher ─────────────────────────────────────────────────────────
function buildLanguageSwitcher() {
    const nav = document.querySelector('nav');
    if (!nav || document.getElementById('lang-switcher')) return;

    const switcher = document.createElement('div');
    switcher.id = 'lang-switcher';

    const langs = [
        { code: 'en', label: 'EN',  title: 'English' },
        { code: 'mr', label: 'मर', title: 'मराठी'   },
        { code: 'hi', label: 'हि',  title: 'हिंदी'   }
    ];

    langs.forEach(({ code, label, title }) => {
        const btn = document.createElement('button');
        btn.className   = 'lang-btn';
        btn.dataset.lang = code;
        btn.textContent = label;
        btn.title       = title;

        // Mark active (no inline colour — CSS handles it)
        if ((localStorage.getItem('lang') || 'en') === code) {
            btn.classList.add('active-lang');
        }

        btn.addEventListener('click', () => {
            // Remove active from all, add to clicked
            switcher.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active-lang'));
            btn.classList.add('active-lang');
            setLanguage(code); // defined in i18n.js
        });

        switcher.appendChild(btn);
    });

    nav.appendChild(switcher);
}


function updateNavbarAuth() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    // Remove existing auth links to prevent duplicates
    document.querySelectorAll('.auth-link').forEach(el => el.remove());

    const token = localStorage.getItem('token');
    const user  = JSON.parse(localStorage.getItem('user') || 'null');

    if (token && user) {
        const userLi = document.createElement('li');
        userLi.className = 'auth-link';
        userLi.innerHTML = `<a href="#" style="color:var(--primary-color);font-weight:bold;"><i class="fas fa-user-circle"></i> ${user.name}</a>`;

        const logoutLi = document.createElement('li');
        logoutLi.className = 'auth-link';
        logoutLi.innerHTML = `<a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> <span data-i18n="nav_logout">Logout</span></a>`;

        navLinks.appendChild(userLi);
        navLinks.appendChild(logoutLi);
    } else {
        const loginLi = document.createElement('li');
        loginLi.className = 'auth-link';
        loginLi.innerHTML = `<a href="login.html" class="btn" style="padding:5px 15px;color:white;" data-i18n="nav_login">Login</a>`;
        navLinks.appendChild(loginLi);
    }

    if (typeof applyTranslations === 'function') applyTranslations();
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}
