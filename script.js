// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect
const typewriter = document.querySelector('.typewriter');
const text = typewriter.textContent;
typewriter.textContent = '';

let i = 0;
function type() {
    if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', type);

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.progress');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bar.style.width = bar.parentElement.getAttribute('data-progress') + '%';
        }
    });
};

window.addEventListener('scroll', animateSkills);

// Reveal elements on scroll
const revealElements = document.querySelectorAll('.fade-in');
const reveal = () => {
    revealElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = (rect.top < window.innerHeight && rect.bottom > 0);
        if (isVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);

// Add this to your existing script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    // For now, we'll just log it
    console.log({
        name,
        email,
        subject,
        message
    });
    
    // Clear form
    this.reset();
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
});

// Add this to your existing script.js
document.querySelector('.contact-form button.btn').addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    this.style.setProperty('--x', `${x}px`);
    this.style.setProperty('--y', `${y}px`);
    
    const light = this.querySelector('::before');
    if (light) {
        light.style.left = `${x}px`;
        light.style.top = `${y}px`;
    }
});

document.querySelector('.contact-form button.btn').addEventListener('mouseleave', function() {
    const light = this.querySelector('::before');
    if (light) {
        light.style.opacity = '0';
    }
});

let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    // Add scrolled class for styling when not at top
    if (window.scrollY === 0) {
        nav.classList.remove('scrolled');
    } else {
        nav.classList.add('scrolled');
    }

    // Handle hiding/showing based on scroll direction
    if (lastScrollY < window.scrollY && window.scrollY > 100) {
        // Scrolling down & not at top
        nav.classList.add('hidden');
    } else {
        // Scrolling up or at top
        nav.classList.remove('hidden');
    }
    
    lastScrollY = window.scrollY;
});

// Add this to your existing script.js
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Create overlay element
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
body.appendChild(overlay);

// Toggle menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = '';
});

// Close menu when clicking nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    });
}); 