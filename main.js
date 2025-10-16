// Smooth scroll and dynamic year update
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Update year automatically in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form mailto fallback for sending email
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const first = document.getElementById('first').value.trim();
    const last = document.getElementById('last').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const to = 'info@qversesolutions.com';

    const body = encodeURIComponent(
      `Name: ${first} ${last}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoURL = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoURL;
  });
}
