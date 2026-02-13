// Scroll-aware nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

function highlightNav() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 80;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

// Screenshot lightbox
const overlay = document.getElementById('screenshotOverlay');
const overlayImg = document.getElementById('screenshotOverlayImg');

document.querySelectorAll('.screenshot-item img').forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlayImg.alt = img.alt;
    overlay.classList.add('active');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  overlayImg.src = '';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('active')) {
    overlay.classList.remove('active');
    overlayImg.src = '';
  }
});
