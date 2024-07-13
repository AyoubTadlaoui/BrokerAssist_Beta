// /src/routes/register.ts

import { Request } from 'express';
import { db } from '$lib/pocketbase'; // Adjust as per your setup
import { sendVerificationEmail } from 'email'; // Your email sending function

export async function post(req: Request) {
  const { email, password } = req.body;

  try {
    // Generate verification token (simplified example)
    const token = generateVerificationToken();

    // Store user data including verification token in PocketBase
    const newUser = await db.collection('users').insertOne({
      email,
      password, // Ensure password is hashed
      verified: false,
      verificationToken: token
    });

    // Send verification email
    await sendVerificationEmail(email, token);

    return {
      status: 201,
      body: { message: 'User registered successfully. Check your email for verification.' }
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      status: 500,
      body: { error: 'Internal server error' }
    };
  }
}
