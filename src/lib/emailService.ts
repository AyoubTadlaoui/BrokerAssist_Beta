import nodemailer from 'nodemailer';

// Retrieve email credentials from environment variables
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'support@devxtreme.net',
    pass: process.env.EMAIL_PASS || 'your-email-password'
  }
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(options: EmailOptions) {
  const mailOptions = {
    from: `"Support" <${process.env.EMAIL_USER || 'support@devxtreme.net'}>`,
    ...options
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${options.to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
