// /src/email.ts

import { sendEmail } from './emailService'; // Adjust as per your email service provider
import dotenv from 'dotenv';
dotenv.config();

const {
  SENDER_NAME,
  SENDER_EMAIL,
  EMAIL_VERIFICATION_SUBJECT,
  EMAIL_VERIFICATION_BODY,
  EMAIL_VERIFICATION_ACTION_URL
} = process.env;

export async function sendVerificationEmail(email: string, token: string) {
  const subject = EMAIL_VERIFICATION_SUBJECT?.replace('{APP_NAME}', 'Your App Name') || 'Default Subject'; // Replace with your app's name
  const actionUrl = EMAIL_VERIFICATION_ACTION_URL?.replace('{APP_URL}', 'https://yourapp.com').replace('{TOKEN}', token) || 'https://default-action-url.com/{TOKEN}'; // Replace with your app's URL

  const body = EMAIL_VERIFICATION_BODY?.replace('{APP_NAME}', 'Your App Name').replace('{ACTION_URL}', actionUrl) || 'Default Email Body';

  try {
    await sendEmail({
      to: email,
      subject,
      html: body,
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>` // Set the sender's name and email
    });
    console.log('Verification email sent to:', email);
  } catch (error) {
    console.error('Failed to send verification email:', error);
    throw new Error('Failed to send verification email');
  }
}
