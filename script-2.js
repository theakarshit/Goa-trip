// Script to handle header menu functionality and animations

document.addEventListener('DOMContentLoaded', function() {
  // Check for existing header menu elements
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.menu');
  
  // Handle menu toggle
  if (menuButton && menu) {
    menuButton.addEventListener('click', function() {
      menu.classList.toggle('show-menu');
      // Toggle menu visibility with a transition
      if (menu.classList.contains('show-menu')) {
        menu.style.maxHeight = menu.scrollHeight + 'px';
      } else {
        menu.style.maxHeight = 0;
      }
    });
  }
  
  // Add smooth scrolling to anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add the jello animation keyframes for hover effect
  const buttonHoverElements = document.querySelectorAll('.menu a.button, .apply-now-button');
  buttonHoverElements.forEach(button => {
    button.addEventListener('mouseover', function() {
      this.classList.add('jello');
    });
    button.addEventListener('animationend', function() {
      this.classList.remove('jello');
    });
  });
});

// Handle window resize for responsiveness
window.addEventListener('resize', function() {
  // Ensure menu styles are applied correctly on resize
  const menu = document.querySelector('.menu');
  if (menu && !menu.classList.contains('show-menu')) {
    menu.style.maxHeight = 0;
  }
});
