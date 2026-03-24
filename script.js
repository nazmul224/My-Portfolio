// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

// Smooth scrolling for navigation links
 const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    
    if (href !== '#') {  // Only handle actual anchor links
      event.preventDefault();
      
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        mobileNav.classList.remove('open');
      }
    }
  });
});