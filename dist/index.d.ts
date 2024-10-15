import { sendMail } from "./lib/email";
declare const Notification: {
    sendMail: typeof sendMail;
    sendOcaWa: (messageData: import("./lib/ocaWa/type").MessageData) => Promise<void>;
    sendBell: (userIdentifiers: import("./lib/bell/type").UserIdentifier[], payload: import("./lib/bell/type").NotificationPayload) => Promise<void>;
    sendBellBulk: (userIdentifiers: import("./lib/bell/type").UserIdentifier[], payload: import("./lib/bell/type").NotificationPayload[]) => Promise<void>;
};
export default Notification;
