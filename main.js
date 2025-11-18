// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{ threshold:0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(src) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.style.display = 'none';
}

// global fonksiyonlar
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
