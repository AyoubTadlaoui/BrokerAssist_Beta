
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Retrieve email credentials and sender information from environment variables
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Replace with your SMTP host
  port: 587, // Replace with your SMTP port
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

interface EmailOptions {
  from?: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(options: EmailOptions) {
  const mailOptions = {
    from: options.from || `"${process.env.SENDER_NAME}" <${process.env.SENDER_EMAIL}>`,
    to: options.to,
    subject: options.subject,
    html: options.html
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${options.to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
