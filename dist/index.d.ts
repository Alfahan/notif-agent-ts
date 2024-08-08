declare const Notification: {
    sendBell: (payload: import("./lib/bell/type").NotificationPayload) => Promise<void>;
};
export default Notification;
