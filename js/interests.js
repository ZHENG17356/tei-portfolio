    // Intersection Observer 用于渐显动画
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(el => observer.observe(el));
    observer.observe(document.querySelector('.bottom-buttons'));
