document.addEventListener('DOMContentLoaded', () => {
  const eggBtn = document.getElementById('easterEggBtn');
  if (!eggBtn) return;

  function spawnFlowers() {
    let container = document.querySelector('body > .easter-egg-flowers');
    if (!container) {
      container = document.createElement('div');
      container.className = 'easter-egg-flowers';
      document.body.appendChild(container);
    }
    container.innerHTML = '';
    const emojis = ['🌸','🌼','🌷','💮','✨','🌺'];
    for (let i = 0; i < 16; i++) {
      const flower = document.createElement('span');
      flower.className = 'easter-egg-flower';
      flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      flower.style.left = Math.random() * 96 + 'vw';
      flower.style.top = '-30px';
      flower.style.fontSize = (1.4 + Math.random() * 1.2) + 'rem';
      flower.style.animation = 'fall 4s linear forwards';
      flower.style.animationDelay = (Math.random() * 0.8) + 's';
      container.appendChild(flower);
    }
    setTimeout(() => container.remove(), 4000);
  }

  eggBtn.addEventListener('click', spawnFlowers);
  eggBtn.addEventListener('touchend', (e) => {
    e.preventDefault();
    spawnFlowers();
  });
});
