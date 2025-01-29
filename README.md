# Parker Schwendeman Portfolio Website

## Overview

This repository contains the source code for my personal portfolio website, designed to showcase my skills and experience in digital design and development. The website is built using Node.js with Express.js for the backend, EJS for templating, and HTML/CSS/JavaScript for the frontend. It's a single-page application with smooth scrolling navigation, responsive design, and scroll-based animations.

## Live Demo

https://parker-schwendeman-portfolio.onrender.com/

## Features

- **Responsive Design:** The website adapts seamlessly to different screen sizes, providing an optimal viewing experience on desktops, tablets, and mobile devices.
- **Smooth Scrolling Navigation:**  Clickable links in the header smoothly scroll to the corresponding sections on the page.
- **Interactive Mobile Menu:** A hamburger menu icon on smaller screens allows easy access to navigation links.
- **Active Section Highlighting:** The active navigation link is highlighted based on the user's current scroll position.
- **Scroll-Based Animations:** Using the ScrollReveal.js library, elements smoothly fade in, slide in, or appear as the user scrolls.
- **Clean and Modern Design:**  The website has a contemporary aesthetic, focusing on readability and user experience.

## Design Process

### 1. Inspiration & Planning

-   **Inspiration:** I drew inspiration from a variety of modern portfolio websites, focusing on clean layouts, bold typography, and subtle animations. I also wanted to incorporate an element of the automotive design that I am inspired by, as well as the simplicity and boldness of Bauhaus design principles.
-   **Goal:** My goal was to create a visually appealing and user-friendly online portfolio that effectively showcases my skills in both design and development. I also wanted to make a strong personal brand identity.
-   **Structure:** I planned for a typical portfolio structure:
    -   **Home:** A striking opening with a tagline/quote and a visual element.
    -   **About:** A brief introduction about myself, background, and values.
    -   **Skills:** A showcase of my technical skills in both development and design.
    -   **Portfolio:** A section to showcase my works, each with an image and a view-detail link (will link in the future).
    -   **Contact:** A way for visitors to get in touch with me.
    -   **Footer:** Footer with quicklinks to the sections and social icons.

### 2. Wireframing and Mockups

-   **Low-Fidelity Wireframes:** I began with simple sketches of the structure of each section on paper to map the information, focusing on the overall flow and layout for both desktop and mobile views.
-   **High-Fidelity Mockups:** Using Figma, I refined the sketches into high-fidelity mockups, including color schemes, typography, and image placement. This was an iterative process, where I tested out different ideas and made adjustments along the way.
-   **Color Scheme:**  I selected a color scheme focused on simplicity and boldness while also including a bright accent color to bring a sense of energy and fun.
-   **Typography:** I used the "Montserrat" font family for a clean, modern look. Different weights and sizes were used for titles, headings, and body text.
-   **Image Assets:** I sourced or created the images to be used, with a placeholder where necessary.

### 3. Design Decisions

-   **Minimalism:** The design is clean, focusing on key information and visual hierarchy, letting my works speak for themselves.
-   **Visual Storytelling:** Each section is designed to guide the user through my work experience and journey, culminating in a simple contact.
-   **Accessibility:** While designing the layouts, I kept in mind how the site could be made more accessible.

## Development Process

### 1. Technology Stack

-   **Backend:**
    -   **Node.js:** JavaScript runtime environment for server-side development.
    -   **Express.js:** Minimalist web application framework for Node.js.
-   **Frontend:**
    -   **HTML5:** For the structure of the webpage
    -   **CSS3:** For styling and layout, using custom variables, Flexbox, Grid, and transition for animations.
    -   **JavaScript:** For client-side interactivity, using scroll-reveal library.
    -   **EJS:** To enable dynamic rendering of HTML pages.
-   **Icon Library:** [Boxicons](https://boxicons.com) for icons.
-   **Scroll-Based Animation:** [ScrollReveal.js](https://scrollrevealjs.org) for animations on scroll.

### 2. Backend Development

-   **Project Setup:**
    -   Initialized a new Node.js project using `npm init`.
    -   Installed Express.js, EJS, and path using `npm install express ejs path`.
-   **Server Setup:**
    -   Created a basic Express server in `index.js`.
    -   Configured EJS as the view engine and specified the views directory.
    -   Set up middleware to serve static files from the `public` directory.
    -   Created a basic route to serve the `index.ejs` file.
-   **Basic Routing:**
    -   The backend only has one route `/` to render the portfolio's landing page.

### 3. Frontend Development

-   **HTML Structure:** Created the base HTML structure in the `index.ejs` template, dividing it into header, main and footer tags with sections inside.
-   **CSS Styling:** Created a `style.css` file to style each element and use a responsive layout approach, with media queries for different device types.
-   **JavaScript Functionality:** Created the `script.js` file for interactive features and animations:
    -   **Mobile Menu:** The `showMenu` function adds and removes the 'show' class when hamburger menu is selected.
    -   **Active Menu:** When a menu item is clicked it will remove the class from all and add it to the selected item.
    -   **Scroll Highlighting:** Used the `scrollActive()` function to track scroll position and highlights the active section in the navigation.
    -   **Scroll Animations:** Used the ScrollReveal.js library for animations.
-   **Responsive Design:** The HTML and CSS were written in a mobile-first methodology. Responsive design was achieved using media queries to change layout and font sizes at different breakpoints.


## Running the Application

1.  **Clone the repository:**

    ```
    git clone [https://github.com/schwendyjr/ejs-portfolio.git]
    ```

    ```
    cd [ejs-portfolio]
    ```

2.  **Install dependencies:**

    ```
    npm install
    ```


3.  **Start the server:**

    ```
    npm start
    ```

    This will start the server, and you can open your browser at `http://localhost:3000`.

## Future Enhancements

-   **Portfolio Detail Pages:** Create separate pages for each portfolio item, adding more project details and context.
-   **Improved Contact Form:** Implement backend functionality to process contact form submissions.
-   **More Animations:** Add more animations and interactions for added engagement.
-   **Image Optimization:** Optimize images for faster loading speeds.

## Author

-   **Parker Schwendeman** - [GitHub Profile](https://github.com/schwendyjr)
