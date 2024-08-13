import axios, { AxiosError } from "axios";
import { MessageData } from "./type";

export const sendOcaWa = async (messageData: MessageData): Promise<void> => {
    const formattedPhoneNumber = await reformatPhone(messageData.phone_number);

    // Create a new MessageData object with the formatted phone number
    const updatedMessageData: MessageData = {
        ...messageData,
        phone_number: formattedPhoneNumber,
    };

    const url = `${process.env.OCA_WA_BASE_URL}/api/v2/push/message`;
    const headers = { Authorization: `Bearer ${process.env.OCA_WA_TOKEN}` };

    try {
        const response = await axios.post(url, updatedMessageData, { headers });
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        const errorMessage = err?.response?.data || 'Kesalahan tidak diketahui';
        console.error('Kesalahan saat mengirim permintaan:', errorMessage);
        throw new Error(`Gagal mengirim permintaan HTTP: ${errorMessage}`);
    }
}

const reformatPhone = async (phoneNumber: string): Promise<string> => {
    if (phoneNumber.startsWith('0')) {
        return `62${phoneNumber.substring(1)}`;
    }
    if (phoneNumber.startsWith('+')) {
        return phoneNumber.substring(1);
    }
    return phoneNumber;
}