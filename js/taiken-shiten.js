    // 渐显动画滚动触发
    document.addEventListener("DOMContentLoaded", function() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {threshold: 0.1});
      document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

      // 图片放大
      document.querySelectorAll('.photo-grid img').forEach(img => {
        img.addEventListener('click', function(e) {
          e.stopPropagation();
          const modal = document.getElementById('imgModal');
          const modalImg = modal.querySelector('img');
          modalImg.src = img.src;
          modalImg.alt = img.alt;
          modal.classList.add('active');
        });
      });

      // 避免点击图片关闭遮罩
      document.getElementById('imgModal').querySelector('img').addEventListener('click', function(e){
        e.stopPropagation();
      });

      // 点击背景关闭遮罩
      document.getElementById('imgModal').addEventListener('click', function(){
        this.classList.remove('active');
        this.querySelector('img').src = '';
      });

      // 按下 ESC 关闭遮罩
      document.addEventListener('keydown', function(e){
        const modal = document.getElementById('imgModal');
        if(e.key === 'Escape' && modal.classList.contains('active')){
          modal.classList.remove('active');
          modal.querySelector('img').src = '';
        }
      });
    });
