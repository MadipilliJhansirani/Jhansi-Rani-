// Smooth Scroll Effect for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');
function showElementsOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
}
window.addEventListener('scroll', showElementsOnScroll);
showElementsOnScroll();

// Typing Effect for Header
const typingText = "Passionate Web Developer";
let index = 0;
function typeEffect() {
    if (index < typingText.length) {
        document.getElementById('typing-effect').textContent += typingText[index];
        index++;
        setTimeout(typeEffect, 100);
    }
}
document.getElementById('typing-effect').textContent = "";
typeEffect();

// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeToggle');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});