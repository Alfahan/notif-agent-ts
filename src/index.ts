// Import the sendMail function from the 'email' module
import { sendMail } from "./lib/email";

// Import the sendOcaWa function from the 'ocaWa' module
import { sendOcaWa } from "./lib/ocaWa";

// Create an object to group and export notification-related functions
const Notification = {
    sendMail,   // Function to send emails
    sendOcaWa   // Function to send OCA WhatsApp messages
};

// Export the Notification object as the default export of the module
export default Notification;
