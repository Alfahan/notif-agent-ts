"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index"); // Make sure to import the function from the correct location
index_1.default.sendMail(['ali.farhan160@gmail.com', 'diasnour0395@gmail.com'], 'Test From Lib', 'sso_otp_verification', {
    otp_code: '666666'
});
