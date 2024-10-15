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
const index_1 = require("../index"); // Make sure to import the function from the correct location
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const messageData = {
            phone_number: '08993613408',
            message: {
                type: 'template',
                template: {
                    template_code_id: '4fd64ce5_88ac_4983_a0ac_900dd0e98d0e:2stepverification',
                    payload: [
                        {
                            position: 'body',
                            parameters: [
                                {
                                    type: 'text',
                                    text: 'tesst',
                                },
                            ],
                        },
                        {
                            position: 'button',
                            parameters: [
                                {
                                    sub_type: 'url',
                                    index: '0',
                                    parameters: [
                                        {
                                            type: 'text',
                                            text: 'tessssstttt'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                },
            }
        };
        try {
            // Send the message using the sendOcaWa function from the Notification object
            const response = yield index_1.default.sendOcaWa(messageData);
            console.log('Message sent successfully:', response); // Log success response
        }
        catch (error) {
            console.error('Failed to send message:', error.message); // Handle and log errors that occur during sending
        }
    });
}
// Call the main function to execute the example
main();
