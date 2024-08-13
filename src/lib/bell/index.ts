import { dt_conf } from '../configs/db';
import { NotificationPayload, UserIdentifier } from './type';

export const sendBell = async (userIdentifiers: UserIdentifier[], payload: NotificationPayload): Promise<void> => {
    // Validate that the userIdentifiers array is not empty
    if (!userIdentifiers || userIdentifiers.length === 0) {
        throw new Error("User identifiers array is empty.");
    }

    const dt = await dt_conf();

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
        await dt.query(fullQuery, values);
        console.log('Broadcast notifications sent successfully!');
    } catch (error) {
        console.error("Error broadcasting notifications:", error);
        throw new Error("Failed to send broadcast notifications.");
    }
};