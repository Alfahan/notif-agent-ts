"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bell_1 = require("./lib/bell");
const email_1 = require("./lib/email");
const Notification = {
    sendBell: bell_1.sendBell,
    sendBellBroadcast: bell_1.sendBellBroadcast,
    sendMail: email_1.sendMail
};
exports.default = Notification;
