document.addEventListener('DOMContentLoaded', () => {
  // === 图片 Lightbox ===
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const galleryImages = document.querySelectorAll('.gallery-img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
      if (lightboxImg) lightboxImg.src = '';
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
      lightbox.classList.remove('active');
      if (lightboxImg) lightboxImg.src = '';
    }
  });

  // === 视频 Lightbox ===
  const videoBtn = document.getElementById("playVideo");
  const videoLightbox = document.getElementById("videoLightbox");
  const videoSource = document.getElementById("videoSource");
  const videoElement = videoLightbox?.querySelector("video");

  if (videoBtn && videoLightbox && videoSource && videoElement) {
    videoBtn.addEventListener("click", () => {
      // 设定影片来源，确保指向正确的文件路径
      videoSource.src = "videoshub_of_senses.mp4";
      videoLightbox.classList.add("active");
      videoElement.load();
      videoElement.play();
    });

    videoLightbox.addEventListener("click", () => {
      videoElement.pause();
      videoElement.currentTime = 0;
      videoLightbox.classList.remove("active");
    });
  }
});
