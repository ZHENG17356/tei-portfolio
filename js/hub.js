// js/hub.js
(function () {
  const playBtn = document.getElementById('hub-play');
  const video = document.getElementById('hub-video');
  if (playBtn && video) {
    playBtn.addEventListener('click', () => {
      playBtn.style.display = 'none';
      video.hidden = false;
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {/* ignore policy blocks */});
      }
    });
  }

  // 可选：原生 lazy 已开启；如需更激进的懒加载，可在此扩展
})();
