// script.js - Smooth Scrolling Navigation and Interactive Portfolio Features

// Smooth Scrolling Navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Portfolio Features
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.classList.add('hover');
    });
    item.addEventListener('mouseleave', function() {
        item.classList.remove('hover');
    });
});