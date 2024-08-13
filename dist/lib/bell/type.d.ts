export interface UserIdentifier {
    user_id: string;
    name: string;
    email: string;
    phone: string;
}
export interface NotificationPayload {
    type: string;
    icon: string;
    path: string;
    content: any;
    color?: string;
}
