import Notification from '../index'; // Pastikan mengimport fungsi dari lokasi yang benar

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

Notification.sendMail(mailOptions).catch(console.error);