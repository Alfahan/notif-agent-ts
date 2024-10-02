import axios, { AxiosRequestConfig } from 'axios';
import * as FormData from 'form-data';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

interface Attachment {
    filename: string;
    path: string;
}

export async function sendMail(
    to: string[],
    subject: string,
    templateCode: string,
    data: { [key : string]: any },
    attachments?: Attachment[],
): Promise<void> {
    const form = new FormData();

    to.forEach((recipient) => {
        form.append('to', recipient);
    });
    form.append('subject', subject);
    form.append('template_code', templateCode);
    form.append('data', JSON.stringify(data));

    if (attachments && attachments.length > 0) {
        attachments.forEach((attachment) => {
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
