import axios, { AxiosError } from "axios";
import { MessageData } from "./type";

export const sendOcaWa = async (messageData: MessageData): Promise<void> => {
    const formattedPhoneNumbers = messageData.phone_numbers.map(reformatPhone);

    const url = `${process.env.OCA_WA_BASE_URL}/api/v2/push/message`;
    const headers = { Authorization: `Bearer ${process.env.OCA_WA_TOKEN}` };

    // Prepare the requests for all phone numbers
    const requests = formattedPhoneNumbers.map(phoneNumber => {
        const updatedMessageData = {
            phone_number: phoneNumber,
            message: messageData.message,
        };
        
        return axios.post(url, updatedMessageData, { headers })
            .then(response => {
                console.log(`Message sent to ${phoneNumber} successfully!`);
                return response.data;
            })
            .catch((error: AxiosError) => {
                const errorMessage = error?.response?.data || 'Kesalahan tidak diketahui';
                console.error(`Kesalahan saat mengirim permintaan ke ${phoneNumber}:`, errorMessage);
                throw new Error(`Gagal mengirim permintaan HTTP ke ${phoneNumber}: ${errorMessage}`);
            });
    });

    // Send all requests in parallel
    try {
        await Promise.all(requests);
        console.log('All messages sent successfully!');
    } catch (error) {
        console.error('Failed to send one or more messages:', error.message);
    }
}

const reformatPhone = (phoneNumber: string) => {
    if (phoneNumber.startsWith('0')) {
        return `62${phoneNumber.substring(1)}`;
    }
    if (phoneNumber.startsWith('+')) {
        return phoneNumber.substring(1);
    }
    return phoneNumber;
}