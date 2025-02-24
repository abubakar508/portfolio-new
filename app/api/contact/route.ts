import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: any) {
    try {
        const { name, email, phone, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Name, email, and message are required fields' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email templates
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #333; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <div style="margin-top: 20px;">
          <h3 style="color: #555;">Message:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FFD700; white-space: pre-line;">${message}</p>
        </div>
        <div style="margin-top: 30px; font-size: 12px; color: #777; text-align: center;">
          <p>This email was sent from your portfolio website contact form.</p>
        </div>
      </div>
    `;

        // Plain text alternative
        const textContent = `
      New Contact Form Submission
      --------------------------
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}

      Message:
      ${message}

      This email was sent from your portfolio website contact form.
    `;

        // Send email
        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.SMTP_USERNAME}>`,
            to: 'contact@abisma.xyz', // Primary receiving address
            cc: 'imabubakar508@gmail.com', // CC other emails
            subject: `New Contact from ${name} via Portfolio`,
            text: textContent,
            html: htmlContent,
            replyTo: email, // Set reply-to as the sender's email
        };

        await transporter.sendMail(mailOptions);

        // Also send confirmation email to the user
        const confirmationMailOptions = {
            from: `"Abubakar Ismail" <${process.env.SMTP_USERNAME}>`,
            to: email,
            subject: 'Thank you for contacting me',
            text: `
        Hi ${name},

        Thank you for reaching out! I've received your message and will get back to you as soon as possible.

        Here's a copy of your message:
        ${message}

        Best regards,
        Abubakar Ismail
        Portfolio: https://abisma.xyz
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">Thank you for contacting me</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
          <div style="margin-top: 20px;">
            <h3 style="color: #555;">Your message:</h3>
            <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FFD700; white-space: pre-line;">${message}</p>
          </div>
          <div style="margin-top: 30px;">
            <p>Best regards,<br>Abubakar Ismail</p>
          </div>
        </div>
      `,
        };

        await transporter.sendMail(confirmationMailOptions);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send email', error: error.message },
            { status: 500 }
        );
    }
}
