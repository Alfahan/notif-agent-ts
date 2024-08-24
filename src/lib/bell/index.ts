import axios from 'axios';
import { NotificationPayload, UserIdentifier } from './type';

// Function to send broadcast notifications to users via API
export const sendBell = async (userIdentifiers: UserIdentifier[], payload: NotificationPayload): Promise<void> => {
    // Validate that the userIdentifiers array is not empty
    if (!userIdentifiers || userIdentifiers.length === 0) {
        throw new Error("User identifiers array is empty.");
    }

    try {
        // Prepare all API requests concurrently using Promise.all
        const notificationRequests = userIdentifiers.map((user) => {
            // Construct the notification payload
            const notifPayload = {
                type: payload.type,
                user_id: user.user_id,
                icon: payload.icon || 'bell',
                path: payload.path || '/',
                content: payload.content,
                color: payload.color || 'primary'
            };

            // Return the axios post promise
            return axios.post(`${process.env.URL_NOTIFICATION}/v4/notifications`, notifPayload, {
                headers: {
                    Authorization: `apiKey ${process.env.API_KEY_NOTIFICATION}`,
                    'Content-Type': 'application/json'
                }
            });
        });

        // Await all requests concurrently
        const responses = await Promise.all(notificationRequests);

        // Log responses for debugging
        responses.forEach((response, index) => {
            console.log(`Response from external endpoint for user ${userIdentifiers[index].user_id}:`, response.data);
        });

        console.log('Broadcast notifications sent successfully!');
    } catch (error) {
        // Handle errors and log them
        console.error("Error broadcasting notifications via API:", error);
        throw new Error("Failed to send broadcast notifications.");
    }
};
