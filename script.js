// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Scroll Reveal Animations
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .about-content', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .about-img, .portfolio-box, .contact form, .about-content', { origin: 'bottom' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .about-content', { origin: 'left' });

// Typed.js Effect
const typed = new Typed('.multiple-text', {
    strings: ['Android Developer', 'Web Developer', 'Frontend Developer', "SEO rich Content Writer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});