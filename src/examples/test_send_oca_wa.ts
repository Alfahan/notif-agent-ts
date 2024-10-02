import Notification from '../index'; // Make sure to import the function from the correct location

async function main() {
    const messageData = {
        phone_number: '08993613408', // Example recipient phone number
        message: {
            type: 'template',
					template: {
						template_code_id: '4fd64ce5_88ac_4983_a0ac_900dd0e98d0e:2stepverification', // Make sure template_code_id 
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
