const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ananya913',
  database: 'vencer_innovia'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// TODO: Add API routes for user registration, login, contact form, etc.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const nodemailer = require('nodemailer');

// Use express middleware to parse JSON data from incoming requests
app.use(express.json());

// Create a POST route handler for /submit-contact
app.post('/submit-contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Configure nodemailer transport using Gmail SMTP (Replace with your SMTP settings)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vencerinnovia@gmail.com',
            pass: 'WeWillRock'
        }
    });

    // Set up email data
    let mailOptions = {
        from: email, // sender address
        to: 'vencerinnovia@gmail.com', // list of receivers
        subject: `Contact form submission from ${name}`, // Subject line
        text: message, // plain text body
        html: `<b>${message}</b>` // html body
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.redirect('/success'); // Redirect to a "submitted successfully" page
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
});

// Add success route
app.get('/success', (req, res) => {
    res.send('<h1>Submitted Successfully</h1>');
});
