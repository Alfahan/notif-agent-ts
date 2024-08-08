"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index"); // Pastikan mengimport fungsi dari lokasi yang benar
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Contoh payload yang akan dikirim sebagai notifikasi
        const notificationPayload = {
            user_id: '123e4567-e89b-12d3-a456-426614174000', // Contoh UUID user
            type: 'info', // Tipe notifikasi
            name: 'John Doe', // Nama pengirim atau penerima notifikasi
            email: 'john.doe@example.com', // Email yang terkait dengan notifikasi
            phone: '081234567890', // Nomor telepon yang terkait (opsional, bisa disesuaikan)
            icon: 'bell', // Ikon notifikasi
            path: '/dashboard/alerts', // Jalur atau URL untuk tindakan notifikasi
            content: {
                message: 'You have a new alert in your dashboard.',
                additionalInfo: 'Please check your dashboard for more details.'
            },
            color: 'primary' // Warna notifikasi, opsional (default: 'primary')
        };
        try {
            yield index_1.default.sendBell(notificationPayload);
            console.log('Notification sent successfully!');
        }
        catch (error) {
            console.error('Failed to send notification:', error);
        }
    });
}
main();
