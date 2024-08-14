import axios, { AxiosError } from "axios";
import { MessageData } from "./type";

// Function to send messages to a list of phone numbers using the OCA WhatsApp API
export const sendOcaWa = async (messageData: MessageData): Promise<void> => {
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
        return axios.post(url, updatedMessageData, { headers })
            .then(response => {
                // Log success message if the request is successful
                console.log(`Message sent to ${phoneNumber} successfully!`);
                return response.data;
            })
            .catch((error: AxiosError) => {
                // Extract and log error message if the request fails
                const errorMessage = error?.response?.data || 'Unknown error';
                console.error(`Error sending request to ${phoneNumber}:`, errorMessage);
                throw new Error(`Failed to send HTTP request to ${phoneNumber}: ${errorMessage}`);
            });
    });

    // Execute all requests in parallel and handle completion
    try {
        await Promise.all(requests);
        console.log('All messages sent successfully!'); // Log success message after all requests are completed
    } catch (error) {
        // Log any errors that occurred during the sending process
        console.error('Failed to send one or more messages:', error.message);
    }
}

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
}
