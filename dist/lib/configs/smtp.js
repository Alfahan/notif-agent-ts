"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransporter = createTransporter;
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
// Load environment variables from the .env file
dotenv.config();
// Function to create and configure a nodemailer Transporter instance
function createTransporter() {
    // Log a message to indicate that the transporter creation is starting
    console.log('Creating transporter with createTransport...');
    // Create and return a nodemailer Transporter instance with configuration from environment variables
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST, // SMTP server host (e.g., 'smtp.example.com')
        port: parseInt(process.env.SMTP_PORT || '587', 10), // SMTP server port (default is 587, using base 10 for parsing)
        secure: process.env.SMTP_PORT === '465', // Indicates whether the connection should use TLS (true for port 465, false otherwise)
        auth: {
            user: process.env.SMTP_USER, // SMTP server username for authentication
            pass: process.env.SMTP_PASS, // SMTP server password for authentication
        },
    });
}
