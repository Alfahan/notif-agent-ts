"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the sendMail function from the 'email' module
const bell_1 = require("./lib/bell");
const email_1 = require("./lib/email");
// Import the sendOcaWa function from the 'ocaWa' module
const ocaWa_1 = require("./lib/ocaWa");
// Create an object to group and export notification-related functions
const Notification = {
    sendMail: email_1.sendMail, // Function to send emails
    sendOcaWa: // Function to send emails
    ocaWa_1.sendOcaWa, // Function to send OCA WhatsApp messages
    sendBell: // Function to send OCA WhatsApp messages
    bell_1.sendBell, // Function to send Bell 
    sendBellBulk: // Function to send Bell 
    bell_1.sendBellBulk, // Function to send Bell Bulk
};
// Export the Notification object as the default export of the module
exports.default = Notification;
