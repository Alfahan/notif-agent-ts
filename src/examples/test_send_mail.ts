import path = require('path');
import Notification from '../index'; // Make sure to import the function from the correct location

Notification.sendMail(
    ['ali.farhan160@gmail.com', 'diasnour0395@gmail.com'],
    'Test From Lib',
    'sso_otp_verification',
    {
        otp_code: '666666'
    },
    [
        {
            filename: 'document.pdf', // The name of the attachment file that will appear in the email
            path: path.join(__dirname, './document.pdf'), // Path to the attachment file on the local system
        },
        {
            filename: 'document2.pdf', // The name of the attachment file that will appear in the email
            path: path.join(__dirname, './Get_Started_With_Smallpdf.pdf'), // Path to the attachment file on the local system
        },
    ],
)
