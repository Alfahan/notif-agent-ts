import * as dotenv from 'dotenv';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';

// Load environment variables from .env file
dotenv.config();

export function createTransporter(): Transporter {
    console.log('Creating transporter with createTransport...');
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10), // Gunakan basis 10
        secure: process.env.SMTP_PORT === '465', // true untuk port 465
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
}
