export interface UserIdentifier {
    user_id: string; // ID of the user
}

export interface NotificationPayload {
    user_id: string; // ID of the user associated with the notification
    type: string; // Type of the notification
    icon: string; // Icon for the notification
    path: string; // Path related to the notification
    content: any; // JSONB content of the notification
    color?: string; // Color associated with the notification
    msg_type?: string; // Message type of the notification
    channel?: string; // Channel through which the notification was sent
    ecosystem_id?: string; // Ecosystem ID related to the notification
}