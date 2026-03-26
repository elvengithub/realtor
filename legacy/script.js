// Reveal Animation on Scroll
const reveals = document.querySelectorAll('.reveal');

function reveal() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle'); // Updated ID to match index.html
const htmlElement = document.documentElement;
const profileImg = document.getElementById('profileImage');

function updateImage(theme) {
    if (profileImg) {
        profileImg.src = theme === 'dark' ? 'src/Anthony.png' : 'src/lightmode_anthony.jpg';
    }
}

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateImage(savedTheme);
} else if (systemDark) {
    htmlElement.setAttribute('data-theme', 'dark');
    updateImage('dark');
} else {
    updateImage('light');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateImage(newTheme);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
