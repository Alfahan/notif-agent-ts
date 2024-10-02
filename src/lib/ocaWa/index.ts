import axios, { AxiosError } from "axios";
import { MessageData } from "./type";
import * as dotenv from 'dotenv';

dotenv.config();

// Function to send a message to a phone number using the OCA WhatsApp API
export const sendOcaWa = async (messageData: MessageData): Promise<void> => {
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
        const response = await axios.post(url, updatedMessageData, { headers });
        console.log(`Message sent to ${formattedPhoneNumber} successfully!`);
        return response.data;
    } catch (error: AxiosError | any) {
        // Extract and log error message if the request fails
        const errorMessage = error?.response?.data || 'Unknown error';
        console.error(`Error sending request to ${formattedPhoneNumber}:`, errorMessage);
        throw new Error(`Failed to send HTTP request to ${formattedPhoneNumber}: ${errorMessage}`);
    }
};

// Function to reformat phone numbers to match the expected format
const reformatPhone = (phoneNumber: string) => {
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
