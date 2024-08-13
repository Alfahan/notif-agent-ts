import { sendBell, sendBellBroadcast } from "./lib/bell"
import { sendMail } from "./lib/email"
import { sendOcaWa } from "./lib/ocaWa"

const Notification = {
    sendBell,
    sendBellBroadcast,
    sendMail,
    sendOcaWa
}

export default Notification