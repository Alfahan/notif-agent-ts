import { NotificationPayload } from './type';
import { UserIdentifier } from './type';
export declare const sendBell: (userIdentifiers: UserIdentifier[], payload: NotificationPayload) => Promise<void>;
export declare const sendBellBulk: (userIdentifiers: UserIdentifier[], payload: NotificationPayload[]) => Promise<void>;
