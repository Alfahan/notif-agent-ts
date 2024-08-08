import { NotificationPayload, NotificationPayloadBroadcast, UserIdentifier } from './type';
export declare const sendBell: (payload: NotificationPayload) => Promise<void>;
export declare const sendBellBroadcast: (userIdentifiers: UserIdentifier[], payload: NotificationPayloadBroadcast) => Promise<void>;
