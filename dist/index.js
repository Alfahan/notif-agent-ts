"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the sendBell function from the 'bell' module
const bell_1 = require("./lib/bell");
// Import the sendMail function from the 'email' module
const email_1 = require("./lib/email");
// Import the sendOcaWa function from the 'ocaWa' module
const ocaWa_1 = require("./lib/ocaWa");
// Create an object to group and export notification-related functions
const Notification = {
    sendBell: bell_1.sendBell, // Function to send bell notifications
    sendMail: // Function to send bell notifications
    email_1.sendMail, // Function to send emails
    sendOcaWa: // Function to send emails
    ocaWa_1.sendOcaWa // Function to send OCA WhatsApp messages
};
// Export the Notification object as the default export of the module
exports.default = Notification;
