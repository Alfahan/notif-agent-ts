import axios from 'axios';
import { NotificationPayload, UserIdentifier } from './type';

// Function to send broadcast notifications to users via API
export const sendBell = async (userIdentifiers: UserIdentifier[], payload: NotificationPayload): Promise<void> => {
    // Validate that the userIdentifiers array is not empty
    if (!userIdentifiers || userIdentifiers.length === 0) {
        throw new Error("User identifiers array is empty.");
    }

    try {
        // Iterate over the userIdentifiers array to send notifications to each user
        for (const user of userIdentifiers) {
            // Construct the notification payload
            const notifPayload = {
                type: payload.type,
                user_id: user.user_id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                icon: payload.icon || 'bell',
                path: payload.path || '/',
                content: payload.content,
                color: payload.color || 'primary'
            };

            // Send the notification to the external notification service via API
            const axiosResponse = await axios.post(`${process.env.URL_NOTIFICATION}/v4/notifications`, notifPayload, {
                headers: {
                    Authorization: ` ${process.env.API_KEY_NOTIFICATION}`,
                    'Content-Type': 'application/json'
                }
            });

            // Log the response for debugging purposes
            console.log('notification bell:', axiosResponse.data.message);
        }

        console.log('Broadcast notifications sent successfully!');
    } catch (error) {
        // Handle errors and log them
        console.error("Error broadcasting notifications via API:", error);
        throw new Error("Failed to send broadcast notifications.");
    }
};
