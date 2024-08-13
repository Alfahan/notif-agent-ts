import { NotificationPayload, UserIdentifier } from './type';
export declare const sendBell: (userIdentifiers: UserIdentifier[], payload: NotificationPayload) => Promise<void>;
