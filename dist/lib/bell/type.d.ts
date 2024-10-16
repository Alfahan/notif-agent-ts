export interface UserIdentifier {
    user_id: string;
    name?: string;
    email?: string;
    phone?: string;
}
export interface NotificationPayload {
    user_id?: string;
    type: string;
    icon: string;
    path: string;
    content: any;
    color?: string;
    msg_type?: string;
    channel?: string;
    ecosystem_id?: string;
}
