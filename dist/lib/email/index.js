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
exports.sendMail = sendMail;
const axios_1 = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
function sendMail(messageToMail) {
    return __awaiter(this, void 0, void 0, function* () {
        const form = new FormData();
        messageToMail.to.forEach((recipient) => {
            form.append('to', recipient);
        });
        form.append('subject', messageToMail.subject);
        form.append('template_code', messageToMail.templateCode);
        form.append('data', JSON.stringify(messageToMail.data));
        if (messageToMail.attachments && messageToMail.attachments.length > 0) {
            messageToMail.attachments.forEach((attachment) => {
                const fileStream = fs.createReadStream(attachment.path);
                form.append('attachments', fileStream, { filename: attachment.filename }); // Use the provided filename
            });
        }
        const headers = Object.assign({ Authorization: `${process.env.API_KEY_NOTIFICATION}` }, form.getHeaders());
        const options = {
            method: 'POST',
            url: `${process.env.URL_NOTIFICATION}/v4/webhooks/email-notifications`,
            headers,
            data: form,
        };
        try {
            const response = yield axios_1.default.request(options);
            console.log(response.data);
        }
        catch (error) {
            console.error('Error sending email:', error);
        }
    });
}
