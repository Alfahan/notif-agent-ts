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
// Function to send broadcast notifications to users
const sendBell = (userIdentifiers, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate that the userIdentifiers array is not empty
    if (!userIdentifiers || userIdentifiers.length === 0) {
        throw new Error("User identifiers array is empty.");
    }
    // Initialize database connection
    const dt = yield (0, db_1.dt_conf)();
    // Prepare the base SQL INSERT query
    const insertQuery = `
        INSERT INTO dev_fabd_user_core_owner.notifications (
            user_id, "type", "name", email, phone, icon, "path", "content", color
        ) VALUES
    `;
    // Construct the VALUES part of the query, handling multiple rows
    const valueRows = userIdentifiers.map((_, index) => {
        const baseIndex = index * 9; // Calculate base index for parameter placeholders
        return `($${baseIndex + 1}, $${baseIndex + 2}, $${baseIndex + 3}, $${baseIndex + 4}, $${baseIndex + 5}, $${baseIndex + 6}, $${baseIndex + 7}, $${baseIndex + 8}, $${baseIndex + 9})`;
    }).join(", ");
    // Combine base query with the VALUES part
    const fullQuery = insertQuery + valueRows;
    // Flatten the user data and payload into a single array of values
    const values = userIdentifiers.flatMap(user => [
        user.user_id, // User ID
        payload.type, // Notification type
        user.name, // User name
        user.email, // User email
        user.phone, // User phone number
        payload.icon, // Notification icon
        payload.path, // Path for notification
        JSON.stringify(payload.content), // Convert content to JSON string
        payload.color || 'primary' // Notification color, defaulting to 'primary' if not provided
    ]);
    try {
        // Execute the query with the prepared values
        yield dt.query(fullQuery, values);
        console.log('Broadcast notifications sent successfully!'); // Success message
    }
    catch (error) {
        // Handle errors and log them
        console.error("Error broadcasting notifications:", error);
        throw new Error("Failed to send broadcast notifications."); // Rethrow error with a custom message
    }
});
exports.sendBell = sendBell;
