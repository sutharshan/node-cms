// Import required modules
//const nodemailer = require('nodemailer');
import nodemailer from "nodemailer";

// Create and configure the transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Replace with your SMTP host
  port: 587, // Common SMTP port
  secure: false, // Set to true for port 465, false for other ports
  auth: {
    user: 'your-email@example.com', // Replace with your email
    pass: 'your-email-password', // Replace with your email password
  },
});

// Middleware function for sending email
const sendMailMiddleware = async (req, res, next) => {
  try {
    const { to, subject, text, html } = req.body;

    // Ensure required fields are provided
    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({ error: 'Missing required fields: to, subject, and either text or html.' });
    }

    // Email options
    const mailOptions = {
      from: 'your-email@example.com', // Replace with the sender's email address
      to, // Recipient's email address
      subject, // Subject line
      text, // Plain text body
      html, // HTML body (optional)
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // Log the message ID (optional)
    console.log('Email sent: %s', info.messageId);

    // Respond with success
    res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = sendMailMiddleware;
