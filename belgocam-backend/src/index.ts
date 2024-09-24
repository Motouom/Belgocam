import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter setup using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,  // Uses email from .env
    pass: process.env.EMAIL_PASSWORD,  // Uses password from .env
  },
});

// Contact Form API Route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,  // User's email from the form
    to: process.env.EMAIL_ADDRESS,  // Your email from .env
    subject: `Contact Form Submission from ${name}`,
    text: `
      You have received a new message from the contact form on Belgocam's website.
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
    console.log('Email sent: ' + info.response);
    res.json({ success: true, message: 'Thank you for contacting us!' });
  });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
