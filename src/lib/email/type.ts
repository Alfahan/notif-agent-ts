export interface MailOptions {
    from: string; // Email address of the sender
    to: string[]; // Array of recipient email addresses
    subject: string; // Subject line of the email
    templatePath?: string; // Optional path to the HTML template file
    context?: { // Optional context data to be used for rendering the template
        [key: string]: any; // Key-value pairs for dynamic data to be inserted into the template
    };
    text?: string; // Optional plain text content to use as a fallback if no template is provided
    attachments?: Array<{ // Optional array of attachments to include in the email
        filename: string; // Name of the attachment file
        path: string; // Path to the attachment file on the local system
    }>;
}
