import Notification from '../index'; // Pastikan mengimport fungsi dari lokasi yang benar

async function main() {
    const messageData = {
        phone_number: '08993613408', // Example recipient phone number
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
        const response = await Notification.sendOcaWa(messageData);
        console.log('Message sent successfully:', response);
    } catch (error) {
        console.error('Failed to send message:', error.message);
    }
}

// Call the main function to execute the example
main();
