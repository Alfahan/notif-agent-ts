import path = require('path');
import Notification from '../index'; // Make sure to import the function from the correct location

const payload = {
    to: ['ali.farhan160@gmail.com', 'diasnour0395@gmail.com'],
    subject: 'Test From Lib',
    templateCode: 'sso_otp_verification',
    data : {
        otp_code: '666666'
    },
    attachments : [
        {
            filename: 'document.pdf', // The name of the attachment file that will appear in the email
            path: path.join(__dirname, './document.pdf'), // Path to the attachment file on the local system
        },
        {
            filename: 'document2.pdf', // The name of the attachment file that will appear in the email
            path: path.join(__dirname, './Get_Started_With_Smallpdf.pdf'), // Path to the attachment file on the local system
        },
    ],
}

Notification.sendMail(
    payload
)
