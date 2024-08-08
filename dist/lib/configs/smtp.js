"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransporter = createTransporter;
const nodemailer_1 = require("nodemailer");
const dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();
function createTransporter() {
    return nodemailer_1.default.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10), // Gunakan basis 10
        secure: process.env.SMTP_PORT === '465', // true untuk port 465
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
}
