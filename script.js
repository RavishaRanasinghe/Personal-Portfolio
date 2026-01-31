// Mobile Menu Toggle

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if (navToggle) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.add('show-menu');
        console.log('Menu opened'); 
    });
}

// Hide menu when X is clicked
if (navClose) {
    navClose.addEventListener('click', function() {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking links 
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('show-menu');
    });
});

// Active link on scroll - found this solution online and adapted it
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(function(section) {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector('.nav__link[href*=' + sectionId + ']');
        
        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Header shadow on scroll - simple effect
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
}

window.addEventListener('scroll', scrollHeader);

// Download CV Function 
const downloadCvBtn = document.getElementById('download-cv');

if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', function(e) {
       
        const cvUrl = this.getAttribute('href');
        
        
        if (cvUrl === '#' || cvUrl === '') {
            e.preventDefault(); 
            
            
        } else {
            console.log('Downloading CV:', cvUrl);
            
        
        }
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.button');
        const originalText = submitBtn.textContent;
        
        // Get form values
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const subject = this.querySelector('input[name="subject"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        
        // Check email format 
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        
        setTimeout(function() {
           
            submitBtn.textContent = '✓ Sent!';
            submitBtn.style.background = '#10B981';
            
            // Clear form
            contactForm.reset();
            
            // Show message
            alert('Thanks for your message, ' + name + '! I\'ll get back to you soon.');
            
            // Reset button after delay
            setTimeout(function() {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            
        }, 1500); // 1.5 second delay
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || this.id === 'download-cv') {
            return;
        }
        
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Simple animation on scroll for elements
window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.about__box, .skills__box, .project__card');
    const windowHeight = window.innerHeight;
    
    boxes.forEach(function(box) {
        const boxTop = box.getBoundingClientRect().top;
        
        if (boxTop < windowHeight - 100) {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }
    });
});

// Initialize some elements with hidden state
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.about__box, .skills__box, .project__card');
    boxes.forEach(function(box) {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    setTimeout(function() {
        const event = new Event('scroll');
        window.dispatchEvent(event);
    }, 100);
    
    console.log('Portfolio loaded! Made by Ravisha 😊');
    console.log('Note: Form doesn\'t actually send emails yet - working on that!');
});

document.addEventListener('touchstart', function(){}, true);