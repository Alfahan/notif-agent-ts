export interface MessageData {
    phone_number: string; // Array of phone numbers to which the message will be sent
    message: string | Record<string, any>; // Message content to be sent, can be a string or an object with more complex structure
}
