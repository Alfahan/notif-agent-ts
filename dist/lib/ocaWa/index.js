"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOcaWa = void 0;
const axios_1 = require("axios");
// Function to send messages to a list of phone numbers using the OCA WhatsApp API
const sendOcaWa = (messageData) => __awaiter(void 0, void 0, void 0, function* () {
    // Reformat phone numbers to match the expected format for the API
    const formattedPhoneNumbers = messageData.phone_numbers.map(reformatPhone);
    // Define the API endpoint URL and headers
    const url = `${process.env.OCA_WA_BASE_URL}/api/v2/push/message`;
    const headers = { Authorization: `Bearer ${process.env.OCA_WA_TOKEN}` };
    // Prepare requests for sending messages to all phone numbers
    const requests = formattedPhoneNumbers.map(phoneNumber => {
        // Create the message payload for each phone number
        const updatedMessageData = {
            phone_number: phoneNumber,
            message: messageData.message,
        };
        // Send a POST request to the API with the message data
        return axios_1.default.post(url, updatedMessageData, { headers })
            .then(response => {
            // Log success message if the request is successful
            console.log(`Message sent to ${phoneNumber} successfully!`);
            return response.data;
        })
            .catch((error) => {
            var _a;
            // Extract and log error message if the request fails
            const errorMessage = ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || 'Unknown error';
            console.error(`Error sending request to ${phoneNumber}:`, errorMessage);
            throw new Error(`Failed to send HTTP request to ${phoneNumber}: ${errorMessage}`);
        });
    });
    // Execute all requests in parallel and handle completion
    try {
        yield Promise.all(requests);
        console.log('All messages sent successfully!'); // Log success message after all requests are completed
    }
    catch (error) {
        // Log any errors that occurred during the sending process
        console.error('Failed to send one or more messages:', error.message);
    }
});
exports.sendOcaWa = sendOcaWa;
// Function to reformat phone numbers to match the expected format
const reformatPhone = (phoneNumber) => {
    // Convert phone number starting with '0' to international format
    if (phoneNumber.startsWith('0')) {
        return `62${phoneNumber.substring(1)}`;
    }
    // Remove '+' from phone numbers that start with '+'
    if (phoneNumber.startsWith('+')) {
        return phoneNumber.substring(1);
    }
    // Return phone number as-is if no formatting is needed
    return phoneNumber;
};
