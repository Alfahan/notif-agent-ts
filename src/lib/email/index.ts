import { Transporter } from 'nodemailer';
import { createTransporter } from '../configs/smtp';
import { MailOptions } from './type';
import * as fs from 'fs';
import * as Handlebars from 'handlebars';

export async function sendMail(options: MailOptions): Promise<void> {
    const transporter: Transporter = createTransporter();
    
    let htmlContent: string | undefined;

    // Jika templatePath diberikan, baca dan compile template Handlebars
    if (options.templatePath) {
        try {
            const templateFileContent = fs.readFileSync(options.templatePath, 'utf-8');
            const compiledTemplate = Handlebars.compile(templateFileContent);
            htmlContent = compiledTemplate(options.context);
        } catch (error) {
            console.error('Error reading or compiling template:', error);
            throw error;
        }
    }
    
    const mailOptions = {
        from: options.from,
        to: options.to,
        subject: options.subject,
        html: htmlContent, // Menggunakan HTML yang dihasilkan dari template jika ada
        text: options.text, // Menggunakan text jika template tidak tersedia
        attachments: options.attachments,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

