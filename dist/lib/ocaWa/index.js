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
exports.sendOcaWa = void 0;
const axios_1 = require("axios");
const sendOcaWa = (messageData) => __awaiter(void 0, void 0, void 0, function* () {
    const formattedPhoneNumbers = messageData.phone_numbers.map(reformatPhone);
    const url = `${process.env.OCA_WA_BASE_URL}/api/v2/push/message`;
    const headers = { Authorization: `Bearer ${process.env.OCA_WA_TOKEN}` };
    // Prepare the requests for all phone numbers
    const requests = formattedPhoneNumbers.map(phoneNumber => {
        const updatedMessageData = {
            phone_number: phoneNumber,
            message: messageData.message,
        };
        return axios_1.default.post(url, updatedMessageData, { headers })
            .then(response => {
            console.log(`Message sent to ${phoneNumber} successfully!`);
            return response.data;
        })
            .catch((error) => {
            var _a;
            const errorMessage = ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || 'Kesalahan tidak diketahui';
            console.error(`Kesalahan saat mengirim permintaan ke ${phoneNumber}:`, errorMessage);
            throw new Error(`Gagal mengirim permintaan HTTP ke ${phoneNumber}: ${errorMessage}`);
        });
    });
    // Send all requests in parallel
    try {
        yield Promise.all(requests);
        console.log('All messages sent successfully!');
    }
    catch (error) {
        console.error('Failed to send one or more messages:', error.message);
    }
});
exports.sendOcaWa = sendOcaWa;
const reformatPhone = (phoneNumber) => {
    if (phoneNumber.startsWith('0')) {
        return `62${phoneNumber.substring(1)}`;
    }
    if (phoneNumber.startsWith('+')) {
        return phoneNumber.substring(1);
    }
    return phoneNumber;
};
