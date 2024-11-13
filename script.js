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
