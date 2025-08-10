 function updateSidebarOffset() {
    const header = document.querySelector('.header');
    const height = header.offsetHeight + 'px';
    document.documentElement.style.setProperty('--header-height', height);
  }
  
  window.addEventListener('load', updateSidebarOffset);
  window.addEventListener('resize', updateSidebarOffset);