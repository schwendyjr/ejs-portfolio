//Activating Mobile Menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Menu by clicking in mobile menu links

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Changing Active Menu section while scrolling

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}

// Scroll Reveal Settings

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-title', {});
sr.reveal('.home-scroll', {delay: 200});
sr.reveal('.home-img', {origin: 'right', delay: 400 });

sr.reveal('.about-img', {delay: 500});
sr.reveal('.about-subtitle', {delay: 300});
sr.reveal('.about-profession', {delay: 400});
sr.reveal('.about-text', {delay: 500});
sr.reveal('.about-social-icon', {delay: 600, interval: 200});

sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-name', {distance: '20px', delay: 50, interval: 100});
sr.reveal('.skills-img', {delay: 400});

sr.reveal('.portfolio-img', {interval: 200});

sr.reveal('.contact-subtitle', {});
sr.reveal('.contact-text', {interval: 200});
sr.reveal('.contact-input', {delay: 400});
sr.reveal('.contact-button', {delay: 600});

document.addEventListener('DOMContentLoaded', () => {
    const skillSpans = document.querySelectorAll('.skills-name');
    const logoImage = document.getElementById('skill-logo');
    

    skillSpans.forEach(skillSpan => {
        skillSpan.addEventListener('mouseover', () => {
            const logoFilename = skillSpan.dataset.logo;
            const imagePath = `/images/skills/${logoFilename}`;
            logoImage.src = imagePath;
        });

        
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Check if the current URL path starts with '/portfolio/'
    if (window.location.pathname.startsWith('/portfolio/')) {
        // Get the portfolio section element by its ID
        const portfolioSection = document.getElementById('portfolio');

        // If the portfolio section exists on the page
        if (portfolioSection) {
            // Scroll the portfolio section into view smoothly
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// js/script.js

// ... your existing script.js code ...

function closeDetailPageTab() {
    window.close(); // Try to close the current tab

    // Optional: Alert to guide user back to homepage tab (if window.close() is blocked)
    //  setTimeout(() => { // Delay to allow window.close() attempt
    //      alert("This detail page tab should now be closing. If it doesn't close automatically, please close it manually and return to the main portfolio tab.");
    //  }, 100);
}