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

// Scroll-triggered animations using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '-80px 0px',
  threshold: 0.15
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      // Remove show class when out of view to replay animation
      entry.target.classList.remove('show');
    }
  });
}, observerOptions);

// Observe all sections and footer
const sections = document.querySelectorAll('section, footer');
sections.forEach(section => {
  sectionObserver.observe(section);
});