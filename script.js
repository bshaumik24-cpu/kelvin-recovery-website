/* ============================================================
   KELVIN RECOVERY — script.js
   Plain JavaScript. No frameworks, no build step.
============================================================ */

// ---------- Sticky nav: shadow on scroll ----------
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Mobile menu toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

// Close the mobile menu after tapping a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Smooth scroll (native via CSS scroll-behavior; this
// handles browsers without it and keeps the URL hash tidy) ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', anchor.getAttribute('href'));
  });
});

// ---------- FAQ accordion: only one item open at a time ----------
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.removeAttribute('open');
    });
  });
});

// ---------- Scroll reveal (respects prefers-reduced-motion via CSS) ----------
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ---------- Contact form (FORM-DEMO: front-end only) ----------
// [EDIT-FORM] When you connect Formspree (see the comment in index.html),
// DELETE this block so the form submits normally to your endpoint.
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // FORM-DEMO: remove this handler once a real form service is connected

    // Minimal front-end validation
    const required = contactForm.querySelectorAll('[required]');
    let valid = true;
    required.forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#B4552D';
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      formStatus.textContent = 'Please fill in the highlighted fields.';
      formStatus.style.color = '#B4552D';
      return;
    }

    // Demo confirmation only — no data is sent anywhere yet.
    formStatus.style.color = '';
    formStatus.textContent =
      'Thank you — this demo form is not connected yet. Please use phone, email or WhatsApp for now.';
    contactForm.reset();
  });
}

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
