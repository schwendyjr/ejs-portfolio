// data.js
const portfolioItems = [
    {
        id: "oursos", // Modified ID to be unique and lowercase, good for URLs/code
        title: "OurSOS - Your Lifeline in Times of Crisis",
        image: "/images/portfolio/oursos-hifi.png",
        images: [ // Added detail images - you can add paths to more images here
            "/images/portfolio/oursos-hifi.png", // Example detail image path
            "images/portfolio/oursos-detail-2.png"  // Example detail image path
            // ... more detail images for OurSOS ...
        ],
        description: "OurSOS is a mobile application designed to provide a platform for users to seek and offer help during local emergencies. It empowers communities to respond quickly and effectively to crises.",
        processHeadings: ["Overview", "Challenge", "Goal", "Key Features"], // Example process headings
        processContent: [
            "OurSOS is a mobile application designed to provide a platform for users to seek and offer help during local emergencies. It empowers communities to respond quickly and effectively to crises.",
            "The challenge was to create a real-time, community-driven emergency information system to address slow response times in local crises.",
            "The goal was to develop a mobile platform for rapid reporting and dissemination of emergency information, fostering faster community response and improved safety.",
            "Key features include user-friendly emergency reporting, real-time map visualization, and intuitive design for ease of use during stressful situations." // Summarized details as key features
        ],
        links: {
            liveDemo: "https://example.com/oursos-demo", // Example demo link - replace with actual if available
            // github: "https://github.com/your-repo/oursos" // Add GitHub link if applicable
        }
    },
    {
        id: "anderson-grant-brochure", // Modified ID for uniqueness
        title: "Anderson Grant - Interior Design Brochure",
        image: "images/portfolio/brochure-mockup.jpg",
        images: [ // Detail images for brochure
            "images/portfolio/brochure-detail-1.jpg", // Example detail image path
            "images/portfolio/brochure-detail-2.jpg"  // Example detail image path
            // ... more detail images for Anderson Grant Brochure ...
        ],
        description: "A visually appealing and informative brochure designed for Anderson Grant Interior Design to showcase their services and aesthetic.", // More descriptive overview
        processHeadings: ["Project Overview", "Client", "Target Audience", "Design Challenge", "Design Solution"], // Example process headings tailored to design project
        processContent: [
            "Creation of a professional interior design brochure for Anderson Grant.",
            "Anderson Grant Interior Design",
            "Potential clients interested in high-end interior design services.",
            "To develop a brochure that effectively communicates Anderson Grant's design style and services to attract new clients.",
            "A multi-page brochure featuring high-quality imagery, clear service descriptions, and elegant typography to reflect Anderson Grant's brand." // Summarized details as design solution
        ],
        links: {
            // No live demo or GitHub for a brochure, leave empty or add a Behance/portfolio link if applicable
        }
    },
    {
        id: "tradesquare", // Modified ID to be unique
        title: "Tradesquare - Community Marketplace",
        image: "images/portfolio/Tradesquare-mockup.png",
        images: [ // Detail images for Tradesquare
            "images/portfolio/tradesquare-detail-1.png", // Example detail image path
            "images/portfolio/tradesquare-detail-2.png"  // Example detail image path
            // ... more detail images for Tradesquare ...
        ],
        description: "Tradesquare is an online community marketplace connecting local tradespeople with customers seeking their services.",
        processHeadings: ["Project Goal", "Target Users", "Key Features", "Technology Stack"], // Example process headings for a marketplace app
        processContent: [
            "To build a community marketplace platform that efficiently connects tradespeople and customers.",
            "Homeowners, renters, and local trades professionals (plumbers, electricians, carpenters, etc.).",
            "User profiles for tradespeople, service request posting for customers, search and filtering, direct messaging, and review system.", // Summarized details as key features
            "React, Node.js, Express, MongoDB (Example stack - replace with actual)" // Example tech stack - replace with actual
        ],
        links: {
            liveDemo: "https://tradesquare-demo.example.com", // Example demo link - replace with actual
            // github: "https://github.com/your-repo/tradesquare" // Add GitHub link if applicable
        }
    },
    {
        id: "project-4", // Assuming you want to keep the duplicate project, I've made the ID unique
        title: "OurSOS - Your Lifeline in Times of Crisis (Duplicate Example)", // Clarified as duplicate for distinction
        image: "images/portfolio/oursos-hifi.png",
        images: [], // You can add different detail images for this duplicate if needed
        description: "This is a duplicate entry for OurSOS, used to demonstrate handling multiple projects. You can have different details here if needed for variations of the project.", // Description to differentiate duplicate
        processHeadings: ["Concept", "Design", "Development", "Testing"], // Different process headings for example
        processContent: [
            "Initial concept and ideation phase for the OurSOS application.",
            "UI/UX design process including wireframing and prototyping.",
            "Front-end and back-end development using React Native and Firebase (example).", // Example technologies
            "User testing and quality assurance phase before launch."
        ],
        links: {
            // liveDemo: "...", // If a different demo link for this variation
            // github: "..."  // If a different repo
        }
    },
    {
        id: "project-5", // Unique ID for the second brochure project
        title: "Anderson Grant - Interior Design Brochure (Duplicate Example)", // Clarified as duplicate
        image: "images/portfolio/brochure-mockup.jpg",
        images: [], // Detail images if different from the first brochure
        description: "Another example of the Anderson Grant brochure, perhaps a different iteration or style. Demonstrates handling similar project types.", // Description to differentiate
        processHeadings: ["Objective", "Audience", "Visual Style", "Content Strategy"], // Different headings for brochure example
        processContent: [
            "To create marketing collateral for Anderson Grant.",
            "High-net-worth individuals, luxury homeowners.",
            "Elegant, minimalist, and sophisticated visual approach.",
            "Showcase portfolio, service descriptions, contact information."
        ],
        links: {
            // No links, or link to a different online version if applicable
        }
    },
    {
        id: "project-6", // Unique ID for the second Tradesquare project
        title: "Tradesquare - Community Marketplace (Duplicate Example)", // Clarified as duplicate
        image: "images/portfolio/Tradesquare-mockup.png",
        images: [], // Detail images if different
        description: "A variation of the Tradesquare project, possibly a different version or platform (e.g., web app instead of mobile).", // Description to differentiate
        processHeadings: ["Platform", "Features Focus", "Monetization", "Development Timeline"], // Different headings
        processContent: [
            "Web-based platform for Tradesquare marketplace.", // Different platform
            "Focus on user reviews and rating system.", // Different feature focus
            "Commission-based monetization model.", // Different aspect
            "Estimated 6-month development timeline." // Different detail
        ],
        links: {
            // liveDemo: "...", // Different demo link if applicable
            // github: "..."  // Different repo if applicable
        }
    },
];

module.exports = portfolioItems;