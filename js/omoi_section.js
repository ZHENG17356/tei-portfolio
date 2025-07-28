document.documentElement.classList.remove('no-js');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        const textContent = section.querySelector('.text-content');
        if (textContent) {
          textContent.classList.add("visible");
          const paragraphs = textContent.querySelectorAll('p');
          paragraphs.forEach((p, i) => {
            p.style.transitionDelay = `${i * 150}ms`;
            p.classList.add('visible');
          });
        }
        section.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll("section").forEach(section => observer.observe(section));

  // Floating Text Observer
  const floatingText = document.querySelector('.floating-text');
  if (floatingText) {
    const floatObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          floatingText.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });
    floatObserver.observe(floatingText);
  }

  // Modal Control
  const modal = document.getElementById("contactModal");
  const openBtn = document.getElementById("openContact");
  const closeBtn = document.querySelector(".close-btn");

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add("active");
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove("active");
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
    const eggBtn = document.getElementById('easterEggBtn');
  let eggTimer = null;
  
  // 彩蛋弹窗，修改版
  const eggModal = document.createElement('div');
  eggModal.className = 'easter-egg-modal';
  eggModal.style = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(18,18,18,0.92);z-index:10020;opacity:0;pointer-events:none;transition:opacity 0.5s;';
    eggModal.innerHTML = `
    <div class="easter-egg-flowers"></div>
    <div style="background:#121212;border-radius:18px;box-shadow:0 8px 32px rgba(0,0,0,0.5);padding:2.2em 2em 1.5em 2em;text-align:center;color:#fff;min-width:240px;max-width:90vw;">
      <div style="font-size:2.2em;">🌸</div>
      <div style="margin:1em 0 0.5em 0;">ここまで読んでくれて、ありがとう！</div>
      <div style="font-size:1em;opacity:0.7;">あなたの日常にも、やさしい光が降り注ぎますように。</div>
      <button id="closeEgg" class="nav-button" style="margin-top:2em;">閉じる</button>
    </div>
  `;
  document.body.appendChild(eggModal);
  
    function showEggModal() {
    eggModal.style.opacity = '1';
    eggModal.style.pointerEvents = 'auto';
    launchFlowers();
  }
  
  function launchFlowers() {
    const container = eggModal.querySelector('.easter-egg-flowers');
    if (!container) return;
    container.innerHTML = '';
    const emojis = ['🌸','🌼','🌷','💮','✨','🌺'];
    for(let i=0;i<18;i++){
      const flower = document.createElement('span');
      flower.className = 'easter-egg-flower';
      flower.textContent = emojis[Math.floor(Math.random()*emojis.length)];
      flower.style.left = Math.random()*96 + 'vw';
      flower.style.top = '-40px';
      flower.style.fontSize = (1.6 + Math.random()*1.2) + 'rem';
      flower.style.animation = 'fall 5s linear forwards';
      flower.style.animationDelay = (Math.random()*1.2) + 's';
      container.appendChild(flower);
      setTimeout(()=>flower.remove(), 5200);
    }
  }
    function hideEggModal() {
    eggModal.style.opacity = '0';
    eggModal.style.pointerEvents = 'none';
    // 可选：清空飘落的花朵
    const container = eggModal.querySelector('.easter-egg-flowers');
    if (container) container.innerHTML = '';
  }
  
  if (eggBtn) {
    eggBtn.addEventListener('mousedown', () => {
      eggTimer = setTimeout(showEggModal, 2000);
    });
    eggBtn.addEventListener('mouseup', () => clearTimeout(eggTimer));
    eggBtn.addEventListener('mouseleave', () => clearTimeout(eggTimer));
    eggBtn.addEventListener('touchstart', () => {
      eggTimer = setTimeout(showEggModal, 2000);
    });
    eggBtn.addEventListener('touchend', () => clearTimeout(eggTimer));
  }
  
  eggModal.addEventListener('click', (e) => {
    if (e.target.id === 'closeEgg' || e.target === eggModal) hideEggModal();
  });
