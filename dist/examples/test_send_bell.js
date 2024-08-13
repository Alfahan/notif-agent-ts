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
            yield index_1.default.sendBell(userIdentifiers, notificationPayload);
            console.log('Notification sent successfully!');
        }
        catch (error) {
            console.error('Failed to send broadcast notifications:', error);
        }
    });
}
main();
