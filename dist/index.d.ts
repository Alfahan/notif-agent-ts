import { sendMail } from "./lib/email";
declare const Notification: {
    sendBell: (payload: import("./lib/bell/type").NotificationPayload) => Promise<void>;
    sendBellBroadcast: (userIdentifiers: import("./lib/bell/type").UserIdentifier[], payload: import("./lib/bell/type").NotificationPayloadBroadcast) => Promise<void>;
    sendMail: typeof sendMail;
};
export default Notification;
