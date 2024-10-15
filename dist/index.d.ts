import { sendMail } from "./lib/email";
declare const Notification: {
    sendMail: typeof sendMail;
    sendOcaWa: (messageData: import("./lib/ocaWa/type").MessageData) => Promise<void>;
};
export default Notification;
