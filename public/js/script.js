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

function closeDetailPageTab() {
    window.close(); // Try to close the current tab
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("leaveButton");

    // Hide the button on small screens
    if (window.innerWidth < 768) {
        button.style.display = "none";
        return;
    }

    // Ensure the button has absolute positioning
    button.style.position = "absolute"; 

    // Set initial position: 20% from top, 80% from left
    button.style.top = `${window.innerHeight * 0.2}px`;
    button.style.left = `${window.innerWidth * 0.8}px`;

    // Get the nav bar height dynamically
    const navBar = document.querySelector("nav"); // Adjust selector if needed
    const navHeight = navBar ? navBar.offsetHeight + 10 : 50; // Default to 50px if no nav found

    // Define margins to prevent button from getting stuck at screen edges
    const margin = 100; // Adjust this value for more spacing from the edges

    document.addEventListener("mousemove", (event) => {
        const buttonRect = button.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const threshold = 100; // Distance at which the button starts moving
        const speed = 75; // Adjust movement speed

        if (
            mouseX > buttonRect.left - threshold &&
            mouseX < buttonRect.right + threshold &&
            mouseY > buttonRect.top - threshold &&
            mouseY < buttonRect.bottom + threshold
        ) {
            let newX = button.offsetLeft + (mouseX > buttonRect.left ? -speed : speed);
            let newY = button.offsetTop + (mouseY > buttonRect.top ? -speed : speed);

            // Constrain movement within the viewport (Left, Right, Top [below nav], Bottom)
            newX = Math.max(margin, Math.min(window.innerWidth - buttonRect.width - margin, newX));
            newY = Math.max(navHeight, Math.min(window.innerHeight - buttonRect.height - margin, newY));

            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
        }
    });
});

