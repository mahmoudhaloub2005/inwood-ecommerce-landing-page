const menuToggle = document.querySelector('#menuToggle');
const siteNav = document.querySelector('#siteNav');
const navLinks = document.querySelectorAll('.site-nav a');
const toast = document.querySelector('#toast');
const cartButton = document.querySelector('#cartButton');
const newsletterForm = document.querySelector('#newsletterForm');

const showToast = (message) => {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2200);
};

const setMenuOpen = (isOpen) => {
  if (!menuToggle || !siteNav) return;

  menuToggle.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  siteNav.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
};

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setMenuOpen(false);
    navLinks.forEach((item) => item.classList.remove('is-active'));
    link.classList.add('is-active');
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuOpen(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    setMenuOpen(false);
  }
});

cartButton?.addEventListener('click', () => {
  showToast('Added to cart');
});

newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  showToast('Thanks for subscribing');
  newsletterForm.reset();
});
