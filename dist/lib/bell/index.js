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
const sendBell = (userIdentifiers, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate that the userIdentifiers array is not empty
    if (!userIdentifiers || userIdentifiers.length === 0) {
        throw new Error("User identifiers array is empty.");
    }
    const dt = yield (0, db_1.dt_conf)();
    // Prepare the base insert query
    const insertQuery = `
        INSERT INTO dev_fabd_user_core_owner.notifications (
            user_id, "type", "name", email, phone, icon, "path", "content", color
        ) VALUES
    `;
    // Construct the values part of the query
    const valueRows = userIdentifiers.map((_, index) => {
        const baseIndex = index * 9;
        return `($${baseIndex + 1}, $${baseIndex + 2}, $${baseIndex + 3}, $${baseIndex + 4}, $${baseIndex + 5}, $${baseIndex + 6}, $${baseIndex + 7}, $${baseIndex + 8}, $${baseIndex + 9})`;
    }).join(", ");
    const fullQuery = insertQuery + valueRows;
    // Flatten the payloads into a single array of values
    const values = userIdentifiers.flatMap(user => [
        user.user_id,
        payload.type,
        user.name,
        user.email,
        user.phone,
        payload.icon,
        payload.path,
        JSON.stringify(payload.content), // Ensure content is stored as JSON
        payload.color || 'primary'
    ]);
    try {
        yield dt.query(fullQuery, values);
        console.log('Broadcast notifications sent successfully!');
    }
    catch (error) {
        console.error("Error broadcasting notifications:", error);
        throw new Error("Failed to send broadcast notifications.");
    }
});
exports.sendBell = sendBell;
