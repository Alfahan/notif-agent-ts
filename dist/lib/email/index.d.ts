interface Attachment {
    filename: string;
    path: string;
}
export declare function sendMail(to: string[], subject: string, templateCode: string, data: {
    [key: string]: any;
}, attachments?: Attachment[]): Promise<void>;
export {};
