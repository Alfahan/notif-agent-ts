"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bell_1 = require("./lib/bell");
const email_1 = require("./lib/email");
const ocaWa_1 = require("./lib/ocaWa");
const Notification = {
    sendBell: bell_1.sendBell,
    sendMail: email_1.sendMail,
    sendOcaWa: ocaWa_1.sendOcaWa
};
exports.default = Notification;
