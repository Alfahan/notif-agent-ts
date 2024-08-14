import { Transporter } from 'nodemailer';
import { createTransporter } from '../configs/smtp';
import { MailOptions } from './type';
import * as fs from 'fs';
import * as mustache from 'mustache';

// Function to send an email based on the provided options
export async function sendMail(options: MailOptions): Promise<void> {
    // Create a nodemailer Transporter instance using the createTransporter function
    const transporter: Transporter = createTransporter();
    
    let htmlContent: string | undefined;

    // If a templatePath is provided, read and compile the Handlebars template
    if (options.templatePath) {
        try {
            // Read the HTML template file from the specified path
            htmlContent = fs.readFileSync(options.templatePath, 'utf-8');
            // Render the template with the provided context data
            htmlContent = mustache.render(htmlContent, options.context);
        } catch (error) {
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
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully'); // Log success message
    } catch (error) {
        // Log and rethrow any errors encountered during the email sending process
        console.error('Error sending email:', error);
        throw error;
    }
}
