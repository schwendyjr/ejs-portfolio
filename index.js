require("dotenv").config();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const express = require('express');
const path = require('path');
const portfolioItems = require('./data'); // Import portfolio data
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

       // Email options
       let mailOptions = {
        from: email,
        to: "tamedogdesign@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
        // **CHANGE: Render 'index' with success message**
        res.render('index', {
            portfolioItems: portfolioItems, // Re-pass portfolio data
            isDetailPage: false,
            project: null,
            successMessage: "Email sent successfully!", // Success message
            errorMessage: null, // Clear any previous error
            scrollToContact: true // ADD THIS LINE - Signal to scroll

        });
    } catch (error) {
        console.error(error);
        // **CHANGE: Render 'index' with error message**
        res.render('index', {
            portfolioItems: portfolioItems, // Re-pass portfolio data
            isDetailPage: false,
            project: null,
            errorMessage: "Error sending email. Please try again later.", // Error message
            successMessage: null, // Clear any previous success
            scrollToContact: true // ADD THIS LINE - Signal to scroll

        });
    }
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // **CHANGE: Initialize successMessage and errorMessage to null**
    res.render('index', {
        portfolioItems: portfolioItems,
        isDetailPage: false,
        project: null,
        successMessage: null, // Initialize to null
        errorMessage: null  // Initialize to null
    });
});

app.get('/portfolio/:id', (req, res) => {
    const project = portfolioItems.find(item => item.id === req.params.id);
    if (!project) {
        return res.status(404).send("Project not found");
    }
    // **CHANGE: Initialize successMessage and errorMessage to null**
    res.render('index', {
        portfolioItems: portfolioItems,
        project: project,
        isDetailPage: true,
        successMessage: null, // Initialize to null
        errorMessage: null  // Initialize to null
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});