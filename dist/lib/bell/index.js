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
exports.sendBell = void 0;
const axios_1 = require("axios");
// Function to send broadcast notifications to users via API
const sendBell = (userIdentifiers, payload) => __awaiter(void 0, void 0, void 0, function* () {
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
            return axios_1.default.post(`${process.env.URL_NOTIFICATION}/v4/notifications`, notifPayload, {
                headers: {
                    Authorization: `apiKey ${process.env.API_KEY_NOTIFICATION}`,
                    'Content-Type': 'application/json'
                }
            });
        });
        // Await all requests concurrently
        const responses = yield Promise.all(notificationRequests);
        // Log responses for debugging
        responses.forEach((response, index) => {
            console.log(`Response from external endpoint for user ${userIdentifiers[index].user_id}:`, response.data);
        });
        console.log('Broadcast notifications sent successfully!');
    }
    catch (error) {
        // Handle errors and log them
        console.error("Error broadcasting notifications via API:", error);
        throw new Error("Failed to send broadcast notifications.");
    }
});
exports.sendBell = sendBell;
