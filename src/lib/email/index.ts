import axios, { AxiosRequestConfig } from 'axios';
import * as FormData from 'form-data';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import { MailOptions } from './type';

dotenv.config();

export async function sendMail(
    messageToMail: MailOptions
): Promise<void> {
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
            form.append('attachments', fileStream, { filename: attachment.filename });  // Use the provided filename
        });
    }

    const headers = {
        Authorization: `${process.env.API_KEY_NOTIFICATION}`,
        ...form.getHeaders(),    
    }

    const options: AxiosRequestConfig = {
        method: 'POST',
        url: `${process.env.URL_NOTIFICATION}/v4/webhooks/email-notifications`,
        headers,
        data: form,
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error('Error sending email:', error);
    }

}
