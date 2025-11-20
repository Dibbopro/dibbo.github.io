// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Initial check on page load
revealOnScroll();

// Back to top button
const backToTopButton = document.getElementById('backToTop');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Staggered animation for list items
const listItems = document.querySelectorAll('ul li');
listItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// Staggered animation for skills
const skillItems = document.querySelectorAll('.skills span');
skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});
