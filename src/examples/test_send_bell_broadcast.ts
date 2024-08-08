import Notification from '../index'; // Pastikan mengimport fungsi dari lokasi yang benar

async function main() {
    // Daftar user dengan informasi tambahan
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
            // Tambahkan lebih banyak user jika diperlukan
        }
    ];

    // Payload notifikasi yang akan dikirim ke semua user
    const notificationPayload = {
        type: 'info',
        icon: 'bell',
        path: '/dashboard/alerts',
        content: { message: 'You have a new alert in your dashboard.' },
        color: 'primary'
    };

    try {
        await Notification.sendBellBroadcast(userIdentifiers, notificationPayload);
        console.log('Notification sent successfully!');
    } catch (error) {
        console.error('Failed to send broadcast notifications:', error);
    }
}

main();
