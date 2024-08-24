import path = require('path');
import Notification from '../index'; // Make sure to import the function from the correct location

// Email options configuration
const mailOptions = {
    from: 'sender@example.com', // Sender's email address
    to: ['ali.farhan160@gmail.com', 'khaerul.adzany@gmail.com'], // List of recipient email addresses
    subject: 'Welcome to Our Service', // Subject of the email

    // Path to the HTML template file used for the email, located outside the project
    templatePath: path.join(__dirname, './template.html'),

    // Data to be injected into the template using the context
    context: {
        name: 'John Doe', // User's name to be inserted into the template
    },
    // List of attachments to include in the email
    attachments: [
        {
            filename: 'document.pdf', // The name of the attachment file that will appear in the email
            path: path.join(__dirname, './document.pdf'), // Path to the attachment file on the local system
        },
        {
            filename: 'document2.pdf', // The name of the attachment file that will appear in the email
            path: path.join(__dirname, './Get_Started_With_Smallpdf.pdf'), // Path to the attachment file on the local system
        },
    ],
};

// Send the email using the sendMail function from the Notification object
Notification.sendMail(mailOptions).catch(console.error); // Handle any errors that may occur during the email sending process
