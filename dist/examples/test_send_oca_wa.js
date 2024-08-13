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
const index_1 = require("../index"); // Pastikan mengimport fungsi dari lokasi yang benar
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const messageData = {
            phone_numbers: ['083875024305', '08993613408', '085867981195'], // Example recipient phone number
            message: {
                type: 'template',
                template: {
                    template_code_id: process.env.OCA_WA_TEMPLATE_CODE,
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
            const response = yield index_1.default.sendOcaWa(messageData);
            console.log('Message sent successfully:', response);
        }
        catch (error) {
            console.error('Failed to send message:', error.message);
        }
    });
}
// Call the main function to execute the example
main();
