export interface MailOptions {
    from: string;
    to: string[];
    subject: string;
    templatePath?: string;
    context?: {
        [key: string]: any;
    };
    text?: string;
    attachments?: Array<{
        filename: string;
        path: string;
    }>;
}
