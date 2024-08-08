export interface NotificationPayload {
    user_id: string;
    type: string;
    name: string;
    email: string;
    phone: string;
    icon: string;
    path: string;
    content: any; // Adjust the type based on your JSON structure
    color?: string;
}

export interface UserIdentifier {
    user_id: string;
    name: string;
    email: string;
    phone: string;
}

export interface NotificationPayloadBroadcast {
    type: string;
    icon: string;
    path: string;
    content: any; // Adjust the type based on your JSON structure
    color?: string;
}