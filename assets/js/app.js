function initGroupCarousel(containerSelector, groupSize = 1, interval = 3000) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const items = Array.from(container.children);
    const totalItems = items.length;
    let currentIndex = 0;

    function showGroup(startIndex) {
      items.forEach((item, i) => {
        item.style.display = (i >= startIndex && i < startIndex + groupSize) ? 'block' : 'none';
      });
    }

    function nextGroup() {
      currentIndex = (currentIndex + groupSize) % totalItems;
      showGroup(currentIndex);
    }

    showGroup(currentIndex);
    setInterval(nextGroup, interval);
  }

  function initNavbar(){
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    
    if (!hamburger || !navList) return;

    // Toggle menu saat hamburger diklik
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navList.classList.toggle('active');
    });

    // Tutup menu saat link diklik (mobile)
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
      });
    });

    // Tutup menu saat klik di luar menu
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navList.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnHamburger && navList.classList.contains('active')) {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
      }
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    initGroupCarousel('.news-option', 3);
    initGroupCarousel('.testimonial-content', 3); 
    initNavbar();

  });