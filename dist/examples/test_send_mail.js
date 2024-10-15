"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const index_1 = require("../index"); // Make sure to import the function from the correct location
index_1.default.sendMail(['ali.farhan160@gmail.com', 'diasnour0395@gmail.com'], 'Test From Lib', 'sso_otp_verification', {
    otp_code: '666666'
}, [
    {
        filename: 'document.pdf',
        path: path.join(__dirname, './document.pdf'), // Path to the attachment file on the local system
    },
    {
        filename: 'document2.pdf',
        path: path.join(__dirname, './Get_Started_With_Smallpdf.pdf'), // Path to the attachment file on the local system
    },
]);
