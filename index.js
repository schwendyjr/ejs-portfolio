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
        res.send("Email sent successfully!");
    } catch (error) {
        console.error(error);
        res.send("Error sending email.");
    }
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { portfolioItems, isDetailPage: false, project: null }); // Pass isDetailPage: false for homepage
});

app.get('/portfolio/:id', (req, res) => {
    const project = portfolioItems.find(item => item.id === req.params.id);
    if (!project) {
        return res.status(404).send("Project not found");
    }
    res.render('index', { portfolioItems, project, isDetailPage: true }); // Pass isDetailPage: true and the specific project
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

