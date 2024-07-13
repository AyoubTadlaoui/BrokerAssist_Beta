// /src/email.ts

import { sendEmail } from './emailService'; // Adjust as per your email service provider

export async function sendVerificationEmail(email: string, token: string) {
  const APP_NAME = 'BrokerAssist';  
  const APP_URL = 'https://brokerassist.com/lander';

  const subject = `Verify your ${APP_NAME} email`;
  const actionUrl = `${APP_URL}/_#/verify/${token}`;
  const body = `
    <p>Hello,</p>
    <p>Thank you for joining us at ${APP_NAME}.</p>
    <p>Click on the button below to verify your email address.</p>
    <a class="btn" href="${actionUrl}" target="_blank" rel="noopener">Verify</a>
    <p>Thanks,<br/>${APP_NAME} team</p>
  `;

  try {
    await sendEmail({
      to: email,
      subject,
      html: body
    });
  } catch (error) {
    console.error('Failed to send verification email:', error);
    throw new Error('Failed to send verification email');
  }
}
