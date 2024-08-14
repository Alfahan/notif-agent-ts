import Notification from '../index'; // Import the Notification function from the appropriate location

async function main() {
    // List of users with additional information like user_id, name, email, and phone
    const userIdentifiers = [
        {
            user_id: '123e4567-e89b-12d3-a456-426614174000',
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '081234567890'
        },
        {
            user_id: '223e4567-e89b-12d3-a456-426614174001',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '081234567891'
        }
    ];

    // Notification payload that will be sent to all users
    const notificationPayload = {
        type: 'info', // Type of notification
        icon: 'bell', // Icon to be displayed with the notification
        path: '/dashboard/alerts', // URL path where the notification is linked
        content: { message: 'You have a new alert in your dashboard.' }, // Message content of the notification
        color: 'primary' // Color theme for the notification
    };

    try {
        // Send the notification to the list of users
        await Notification.sendBell(userIdentifiers, notificationPayload);
        console.log('Notification sent successfully!');
    } catch (error) {
        // Handle any errors that occur during the notification process
        console.error('Failed to send broadcast notifications:', error);
    }
}

main(); // Execute the main function to send the notifications
