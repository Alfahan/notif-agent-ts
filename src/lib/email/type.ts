
interface Attachment {
    filename: string;
    path: string;
}
export interface MailOptions {
    to: string[],
    subject: string,
    templateCode: string,
    data: { [key : string]: any },
    attachments?: Attachment[],
}
