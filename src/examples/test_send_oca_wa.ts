import Notification from '../index'; // Make sure to import the function from the correct location

async function main() {
    const messageData = {
        phone_numbers: ['083875024308', '08993613404', '085867981124'], // Example recipient phone number
        message: {
            type: 'template',
					template: {
						template_code_id: process.env.OCA_WA_TEMPLATE_CODE, // Make sure template_code_id 
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
        const response = await Notification.sendOcaWa(messageData);
        console.log('Message sent successfully:', response); // Log success response
    } catch (error) {
        console.error('Failed to send message:', error.message); // Handle and log errors that occur during sending
    }
}

// Call the main function to execute the example
main();
