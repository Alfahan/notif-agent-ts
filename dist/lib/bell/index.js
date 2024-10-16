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
exports.sendBellBulk = exports.sendBell = void 0;
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const sendBell = (userIdentifiers, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userIdentifiers || userIdentifiers.length === 0) {
        throw new Error("User identifiers array is empty.");
    }
    try {
        for (const user of userIdentifiers) {
            const notifPayload = {
                type: payload.type,
                user_id: user.user_id,
                icon: payload.icon || 'bell',
                path: payload.path || '/',
                content: payload.content,
                color: payload.color || 'primary',
                msg_type: payload.msg_type || 'broadcast',
                channel: payload.channel || '',
                ecosystem_id: payload.ecosystem_id || ''
            };
            const axiosResponse = yield axios.post(`${process.env.URL_NOTIFICATION}/v4/webhooks/notifications`, notifPayload, {
                headers: {
                    Authorization: `${process.env.API_KEY_NOTIFICATION}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('notification bell:', axiosResponse.data.message);
        }
        console.log('Broadcast notifications sent successfully!');
    }
    catch (error) {
        console.error("Error broadcasting notifications via API:", error);
        throw new Error("Failed to send broadcast notifications.");
    }
});
exports.sendBell = sendBell;
const sendBellBulk = (userIdentifiers, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(payload);
        if (!userIdentifiers || userIdentifiers.length === 0) {
            if (payload.length > 0) {
                const axiosResponse = yield axios.post(`${process.env.URL_NOTIFICATION}/v4/webhooks/notifications-bulk`, payload, {
                    headers: {
                        Authorization: `${process.env.API_KEY_NOTIFICATION}`,
                        'Content-Type': 'application/json'
                    }
                });
                console.log('notification bell:', axiosResponse.data.message);
                console.log('Bulk notifications sent successfully!');
                return;
            }
            else {
                throw new Error("Payload is empty.");
            }
        }
        let notifPayload = [];
        if (payload.length > 0) {
            for (const user of userIdentifiers) {
                if (payload.length == 1) {
                    notifPayload.push({
                        type: payload[0].type,
                        user_id: user.user_id,
                        icon: payload[0].icon || 'bell',
                        path: payload[0].path || '/',
                        content: payload[0].content,
                        color: payload[0].color || 'primary',
                        msg_type: payload[0].msg_type || 'broadcast',
                        channel: payload[0].channel || '',
                        ecosystem_id: payload[0].ecosystem_id || ''
                    });
                    console.log('payload user:', user.user_id);
                }
                else {
                    for (const data of payload) {
                        notifPayload.push({
                            type: data.type,
                            user_id: user.user_id,
                            icon: data.icon || 'bell',
                            path: data.path || '/',
                            content: data.content,
                            color: data.color || 'primary',
                            msg_type: data.msg_type || 'broadcast',
                            channel: data.channel || '',
                            ecosystem_id: data.ecosystem_id || ''
                        });
                        console.log('payload user:', user.user_id);
                    }
                }
            }
        }
        else {
            throw new Error("Payload is empty.");
        }
        const axiosResponse = yield axios.post(`${process.env.URL_NOTIFICATION}/v4/webhooks/notifications-bulk`, notifPayload, {
            headers: {
                Authorization: `${process.env.API_KEY_NOTIFICATION}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('notification bell:', axiosResponse.data.message);
        console.log('Bulk notifications sent successfully!');
    }
    catch (error) {
        console.error("Error bulk notifications via API:", error);
        throw new Error("Failed to send bulk notifications.");
    }
});
exports.sendBellBulk = sendBellBulk;
