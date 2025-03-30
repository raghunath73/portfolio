const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transport
const transpo = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'araghunathreddy73@gmail.com', // Replace with your Gmail address
        pass: '', // Replace with your Gmail App Password
    },
});

// Email route
app.post('/send-email', (req, res) => {
    const { to, subject, message } = req.body;

    const mailOptions = { // Your email
        to, // Recipient's email (from frontend)
        subject, // Subject line
        html: message, // HTML message body
    };

    transpo.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        res.send('Email sent successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
