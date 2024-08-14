// Interface for user identifier details
export interface UserIdentifier {
    user_id: string;  // Unique identifier for the user
    name: string;     // User's name
    email: string;    // User's email address
    phone: string;    // User's phone number
}

// Interface for notification payload details
export interface NotificationPayload {
    type: string;     // Type of notification (e.g., 'info', 'warning')
    icon: string;     // Icon associated with the notification
    path: string;     // Path or URL for notification redirection
    content: any;     // Content of the notification, can be of any type (consider refining based on specific JSON structure)
    color?: string;   // Optional color for the notification, defaults to 'primary' if not provided
}
