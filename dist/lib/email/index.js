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
const Handlebars = require("handlebars");
function sendMail(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = (0, smtp_1.createTransporter)();
        let htmlContent;
        // Jika templatePath diberikan, baca dan compile template Handlebars
        if (options.templatePath) {
            try {
                const templateFileContent = fs.readFileSync(options.templatePath, 'utf-8');
                const compiledTemplate = Handlebars.compile(templateFileContent);
                htmlContent = compiledTemplate(options.context);
            }
            catch (error) {
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
            yield transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        }
        catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    });
}
