export declare function sendMail(to: string[], subject: string, templateCode: string, data: {
    [key: string]: any;
}, attachmentPath?: string): Promise<void>;
