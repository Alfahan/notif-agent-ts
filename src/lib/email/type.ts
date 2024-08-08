export interface MailOptions {
    from: string;
    to: string;
    subject: string;
    templatePath?: string; // Template path menjadi opsional
    context?: { // Context menjadi opsional
        [key: string]: any;
    };
    text?: string; // Tambahkan opsi text untuk fallback jika template tidak ada
    attachments?: Array<{
        filename: string;
        path: string;
    }>;
}