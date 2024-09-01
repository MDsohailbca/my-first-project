// JavaScript to add animations and interactivity

// Function to handle the fade-in animation on scroll
function fadeInOnScroll() {
    const sections = document.querySelectorAll('.box');

    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.classList.add('fade-in');
        }
    });
}

// Add event listener for scroll to trigger the animation
window.addEventListener('scroll', fadeInOnScroll);

// Toggle search form visibility with slide effect
const searchIcon = document.querySelector('#fa-search');
const searchForm = document.querySelector('.search-form');

searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle('active');
});

// Toggle login form visibility with slide effect
const profileIcon = document.querySelector('#profile-btn');
const loginForm = document.querySelector('.login-form');

profileIcon.addEventListener('click', () => {
    loginForm.classList.toggle('active');
});

// Hide search and login forms when clicking outside of them
document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target) && !searchIcon.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!loginForm.contains(e.target) && !profileIcon.contains(e.target)) {
        loginForm.classList.remove('active');
    }
});
