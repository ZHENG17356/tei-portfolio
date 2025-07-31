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

      // Video lightbox
      const videoBox = document.getElementById('videoLightbox');
      const playButton = document.getElementById('playVideo');
      const video = videoBox.querySelector('video');
      const source = document.getElementById('videoSource');

      if (playButton) {
        playButton.addEventListener('click', () => {
          source.src = 'old_film.mp4';
          video.load();
          videoBox.classList.add('active');
          video.play();
        });
      }

      videoBox.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        videoBox.classList.remove('active');
        source.src = '';
      });
    });
