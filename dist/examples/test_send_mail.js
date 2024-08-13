"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index"); // Pastikan mengimport fungsi dari lokasi yang benar
const mailOptions = {
    from: 'sender@example.com',
    to: 'ali.farhan160@yopmail.com',
    subject: 'Welcome to Our Service',
    templatePath: ``, // Path ke file template di luar proyek
    context: {
        name: 'John Doe',
    },
    // text: "HEH",
    attachments: [
        {
            filename: 'document.pdf',
            path: './document.pdf',
        },
    ],
};
index_1.default.sendMail(mailOptions).catch(console.error);
