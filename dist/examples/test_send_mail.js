"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index"); // Pastikan mengimport fungsi dari lokasi yang benar
const mailOptions = {
    from: 'sender@example.com',
    to: 'ali.farhan160@yopmail.com',
    subject: 'Test Email with Attachment',
    text: 'This is a test email with an optional attachment.',
    attachments: [
        {
            filename: 'test.txt',
            path: './path/to/your/file.txt',
        },
    ],
};
index_1.default.sendMail(mailOptions).catch(console.error);
