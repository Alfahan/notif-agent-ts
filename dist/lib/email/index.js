"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = sendMail;
const smtp_1 = require("../configs/smtp");
const fs = require("fs");
const mustache = require("mustache");
// Function to send an email based on the provided options
function sendMail(options) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a nodemailer Transporter instance using the createTransporter function
        const transporter = (0, smtp_1.createTransporter)();
        let htmlContent;
        // If a templatePath is provided, read and compile the Handlebars template
        if (options.templatePath) {
            try {
                // Read the HTML template file from the specified path
                htmlContent = fs.readFileSync(options.templatePath, 'utf-8');
                // Render the template with the provided context data
                htmlContent = mustache.render(htmlContent, options.context);
            }
            catch (error) {
                // Log and rethrow any errors encountered while reading or compiling the template
                console.error('Error reading or compiling template:', error);
                throw error;
            }
        }
        // Define the mail options to be used for sending the email
        const mailOptions = {
            from: options.from, // Sender's email address
            to: options.to, // Recipient's email addresses
            subject: options.subject, // Subject of the email
            html: htmlContent, // HTML content of the email (rendered from the template, if provided)
            text: options.text, // Plain text content of the email (used if no template is provided)
            attachments: options.attachments, // Array of attachments to include in the email
        };
        try {
            // Send the email using the transporter instance
            yield transporter.sendMail(mailOptions);
            console.log('Email sent successfully'); // Log success message
        }
        catch (error) {
            // Log and rethrow any errors encountered during the email sending process
            console.error('Error sending email:', error);
            throw error;
        }
    });
}
