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
const dotenv = require("dotenv");
dotenv.config();
// Function to send a message to a phone number using the OCA WhatsApp API
const sendOcaWa = (messageData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Reformat the phone number to match the expected format for the API
    const formattedPhoneNumber = reformatPhone(messageData.phone_number);
    // Define the API endpoint URL and headers
    const url = `${process.env.URL_NOTIFICATION}/v4/webhooks/whatsapp-notification`;
    const headers = { Authorization: `${process.env.API_KEY_NOTIFICATION}` };
    // Create the message payload
    const updatedMessageData = {
        phone_number: formattedPhoneNumber,
        message: messageData.message,
    };
    // Send a POST request to the API with the message data
    try {
        const response = yield axios_1.default.post(url, updatedMessageData, { headers });
        console.log(`Message sent to ${formattedPhoneNumber} successfully!`);
        return response.data;
    }
    catch (error) {
        // Extract and log error message if the request fails
        const errorMessage = ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || 'Unknown error';
        console.error(`Error sending request to ${formattedPhoneNumber}:`, errorMessage);
        throw new Error(`Failed to send HTTP request to ${formattedPhoneNumber}: ${errorMessage}`);
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
