
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

// Environment variable validation schema
const envSchema = z.object({
    SMTP_HOST: z.string().min(1, "SMTP host is required"),
    SMTP_PORT: z.string().regex(/^\d+$/, "SMTP port must be a number"),
    SMTP_USER: z.string().email("SMTP user must be a valid email"),
    SMTP_PASS: z.string().min(1, "SMTP password is required"),
    EMAIL_TO: z.string().email("Recipient email must be valid"),
});

// Validate environment variables
function validateEnvVariables() {
    try {
        const env = {
            SMTP_HOST: process.env.SMTP_HOST,
            SMTP_PORT: process.env.SMTP_PORT,
            SMTP_USER: process.env.SMTP_USER,
            SMTP_PASS: process.env.SMTP_PASS,
            EMAIL_TO: process.env.EMAIL_TO,
        };
        return envSchema.parse(env);
    } catch (error) {
        if (error instanceof z.ZodError) {
            const missingVars = error.errors.map(err => err.path.join('.')).join(', ');
            throw new Error(`Missing or invalid environment variables: ${missingVars}`);
        }
        throw error;
    }
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
    try {
        // Validate environment variables first
        validateEnvVariables();

        // Validate form input
        const validatedFields = contactFormSchema.safeParse({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        });
        
        if (!validatedFields.success) {
            return {
                message: "Failed to send message. Please check your input.",
                errors: validatedFields.error.flatten().fieldErrors,
                success: false,
            }
        }

        const { name, email, message } = validatedFields.data;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465, 
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            logger: true, // Enable logging
            debug: true, // Include debug information in logs
        });

        // Verify SMTP connection configuration
        await transporter.verify();

        // Send the email
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `New message from ${name} via your portfolio`,
            text: message,
            html: `
              <div>
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
              </div>
            `,
        });

        return {
            message: `Thank you, ${name}! Your message has been sent successfully.`,
            errors: null,
            success: true,
        }
    } catch (error) {
        console.error("Failed to send email:", error);
        
        // Provide more specific error messages based on the error type
        let errorMessage = "Sorry, there was an error sending your message. Please try again later.";
        
        if (error instanceof Error) {
            if (error.message.includes("Missing or invalid environment")) {
                errorMessage = "The contact form is not properly configured. Please contact the site administrator.";
            } else if (error.message.includes("Invalid login")) {
                errorMessage = "Email service authentication failed. Please contact the site administrator.";
            } else if (error.message.includes("Connection refused")) {
                errorMessage = "Could not connect to the email service. Please try again later.";
            }
        }

        return {
            message: errorMessage,
            errors: null,
            success: false,
        }
    }
}
