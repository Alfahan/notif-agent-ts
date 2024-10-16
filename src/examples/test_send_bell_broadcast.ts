import Notification from "../index";

// broadcast
const NotifPayload = [{
    user_id: null,
    type: "info-ts",
    icon: "icon.png",
    path: "/path/to/notification",
    content: {
        "message": "This is a test notification"
    },
    color: "primay",
    msg_type: "broadcast",
    channel: "test",
    ecosystem_id: "00000000-0000-0000-0000-000000000000",
}]

Notification.sendBellBulk(
    null, NotifPayload
)