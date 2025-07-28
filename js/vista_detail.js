    document.addEventListener('DOMContentLoaded', () => {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = lightbox.querySelector('img');
      const galleryImages = document.querySelectorAll('.gallery-img');

      galleryImages.forEach(img => {
        img.addEventListener('click', () => {
          lightboxImg.src = img.src;
          lightbox.classList.add('active');
        });
      });

      lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
      });

      document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active') && e.key === 'Escape') {
          lightbox.classList.remove('active');
          lightboxImg.src = '';
        }
      });
    });
