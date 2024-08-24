# notif-agent (TypeScript)

## Instalation this package to your project


1. Run `npm` or `yarn` to install:
```
    npm i notif-agent-ts
```

## Usage Examples
### Usage Notification Bell
``` env
    API_KEY_NOTIFICATION=API_KEY_NOTIFICATION
    URL_NOTIFICATION=URL_NOTIFICATION
```

```typescript
    import Notification from '../index'; // Import the Notification function from the appropriate location

    async function main() {
        // List of users with additional information like user_id, name, email, and phone
        const userIdentifiers = [
            {
                user_id: '123e4567-e89b-12d3-a456-426614174000',
                name: 'John Doe',
                email: 'john.doe@example.com',
                phone: '081234567890'
            },
            {
                user_id: '223e4567-e89b-12d3-a456-426614174001',
                name: 'Jane Smith',
                email: 'jane.smith@example.com',
                phone: '081234567891'
            }
        ];

        // Notification payload that will be sent to all users
        const notificationPayload = {
            type: 'info', // Type of notification
            icon: 'bell', // Icon to be displayed with the notification
            path: '/dashboard/alerts', // URL path where the notification is linked
            content: { message: 'You have a new alert in your dashboard.' }, // Message content of the notification
            color: 'primary' // Color theme for the notification
        };

        try {
            // Send the notification to the list of users
            await Notification.sendBell(userIdentifiers, notificationPayload);
            console.log('Notification sent successfully!');
        } catch (error) {
            // Handle any errors that occur during the notification process
            console.error('Failed to send broadcast notifications:', error);
        }
    }

    main(); // Execute the main function to send the notifications
```

### Usage Notification Email
``` env
    SMTP_HOST=SMTP_HOST
    SMTP_PORT=SMTP_PORT
    SMTP_USER=SMTP_USER
    SMTP_PASS=SMTP_PASS
```

```typescript
    import path = require('path');
    import Notification from '../index'; // Make sure to import the function from the correct location

    // Email options configuration
    const mailOptions = {
        from: 'sender@example.com', // Sender's email address
        to: ['ali.farhan@yopmail.com', 'diasnour@yopmail.com'], // List of recipient email addresses
        subject: 'Welcome to Our Service', // Subject of the email

        // Path to the HTML template file used for the email, located outside the project
        templatePath: path.join(__dirname, './template.html'),

        // Data to be injected into the template using the context
        context: {
            name: 'John Doe', // User's name to be inserted into the template
        },

        text: "HEH", // Fallback plain text content if the recipient's email client does not support HTML

        // List of attachments to include in the email
        attachments: [
            {
                filename: 'document.pdf', // The name of the attachment file that will appear in the email
                path: path.join(__dirname, './document.pdf'), // Path to the attachment file on the local system
            },
        ],
    };

    // Send the email using the sendMail function from the Notification object
    Notification.sendMail(mailOptions).catch(console.error); // Handle any errors that may occur during the email sending process
```

### Usage Notification Wa OCA
```
    OCA_WA_BASE_URL=OCA_WA_BASE_URL
    OCA_WA_TOKEN=OCA_WA_TOKEN
```

```typescript
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
```

### Usage Notification 

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions are welcome! See [Contributing](CONTRIBUTING.md).

## Author

- Khaerul A ([Github](https://github.com/kadzany))
- M Ali Farhan ([Github](https://github.com/Alfahan))

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---