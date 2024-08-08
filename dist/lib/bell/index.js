"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBell = void 0;
const db_1 = require("../configs/db");
// send notif bell
const sendBell = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Simple input validation (you can expand this as needed)
    if (!payload.user_id || !payload.type || !payload.name || !payload.email || !payload.icon || !payload.path || !payload.content) {
        throw new Error("Missing required fields in the payload.");
    }
    const dt = yield (0, db_1.dt_conf)();
    const insertQuery = `
    INSERT INTO dev_fabd_user_core_owner.notifications (
        user_id, "type", "name", email, phone, icon, "path", "content", color
        ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9
    )`;
    const values = [
        payload.user_id,
        payload.type,
        payload.name,
        payload.email,
        payload.phone,
        payload.icon,
        payload.path,
        JSON.stringify(payload.content), // Ensure content is stored as JSON
        payload.color || 'primary'
    ];
    try {
        yield dt.query(insertQuery, values);
    }
    catch (error) {
        console.error("Error inserting notification:", error);
        throw new Error("Failed to send notification.");
    }
});
exports.sendBell = sendBell;
