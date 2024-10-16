import Notification from "../index";

const userIdentifiers = [
    {
        user_id: '00000000-0000-0000-0000-000000000001',
    }, 
    {
        user_id: '00000000-0000-0000-0000-000000000002',
    }, 
    {
        user_id: '00000000-0000-0000-0000-000000000003',
    },
]

const NotifPayload = {
    type: "info-ts",
    icon: "icon.png",
    path: "/path/to/notification",
    content: {
        "message": "This is a test notification"
    },
    color: "primay",
    msg_type: "dm",
}

Notification.sendBell(
    userIdentifiers, NotifPayload
)