import Notification from '../index'; // Pastikan mengimport fungsi dari lokasi yang benar

async function main() {
    // Contoh payload yang akan dikirim sebagai notifikasi
    const notificationPayload = {
        user_id: '123e4567-e89b-12d3-a456-426614174000', // Contoh UUID user
        type: 'info', // Tipe notifikasi
        name: 'John Doe', // Nama pengirim atau penerima notifikasi
        email: 'john.doe@example.com', // Email yang terkait dengan notifikasi
        phone: '081234567890', // Nomor telepon yang terkait (opsional, bisa disesuaikan)
        icon: 'bell', // Ikon notifikasi
        path: '/dashboard/alerts', // Jalur atau URL untuk tindakan notifikasi
        content: { // Konten notifikasi dalam format JSON
            message: 'You have a new alert in your dashboard.',
            additionalInfo: 'Please check your dashboard for more details.'
        },
        color: 'primary' // Warna notifikasi, opsional (default: 'primary')
    };

    try {
        await Notification.sendBell(notificationPayload);
        console.log('Notification sent successfully!');
    } catch (error) {
        console.error('Failed to send notification:', error);
    }
}

main();
