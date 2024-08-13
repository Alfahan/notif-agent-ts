import { sendMail } from "./lib/email";
declare const Notification: {
    sendBell: (userIdentifiers: import("./lib/bell/type").UserIdentifier[], payload: import("./lib/bell/type").NotificationPayload) => Promise<void>;
    sendMail: typeof sendMail;
    sendOcaWa: (messageData: import("./lib/ocaWa/type").MessageData) => Promise<void>;
};
export default Notification;
