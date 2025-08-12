// js/hub.js
(function(){
  const btn = document.getElementById('hub-play');
  const vid = document.getElementById('hub-video');
  if (btn && vid) {
    btn.addEventListener('click', () => {
      btn.style.display = 'none';
      vid.hidden = false;
      const p = vid.play();
      if (p && typeof p.catch === 'function') { p.catch(()=>{}); }
    });
  }
})();
