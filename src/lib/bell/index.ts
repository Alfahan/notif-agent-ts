const axios = require('axios');
const dotenv = require('dotenv');
import { NotificationPayload } from './type';
import { UserIdentifier } from './type';

dotenv.config();

export const sendBell = async (notifications: NotificationPayload): Promise<void> => {
    const headers = {
        Authorization: `${process.env.API_KEY_NOTIFICATION}`,
        'Content-Type': 'application/json'
    };

    const options = {
        method: 'POST',
        url: `${process.env.URL_NOTIFICATION}/v4/webhooks/notifications`,
        headers,
        data: notifications
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error('Error sending notifications:', error);
    }
}

export const sendBellBulk = async (notifications: NotificationPayload[]): Promise<void> => {
    const headers = {
        Authorization: `${process.env.API_KEY_NOTIFICATION}`,
        'Content-Type': 'application/json'
    };

    const options = {
        method: 'POST',
        url: `${process.env.URL_NOTIFICATION}/v4/webhooks/notifications/bulk`,
        headers,
        data: notifications
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error('Error sending notifications:', error);
    }
}