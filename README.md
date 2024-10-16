# notif-agent (TypeScript)

## Instalation this package to your project


1. Run `npm` or `yarn` to install:
```
    npm i notif-agent-ts
```
## Setup env
``` env
    API_KEY_NOTIFICATION=API_KEY_NOTIFICATION
    URL_NOTIFICATION=URL_NOTIFICATION
```

## Usage Examples
### Usage Notification Bell
```typescript
    import Notification from "notif-agent-ts";

    const userIdentifiers = [
        {
            user_id: '00000000-0000-0000-0000-000000000001',
        }, 
        {
            user_id: '00000000-0000-0000-0000-000000000002',
        }, 
        {
            user_id: '00000000-0000-0000-0000-000000000003',
        },
    ]

    const NotifPayload = {
        type: "info-ts",
        icon: "icon.png",
        path: "/path/to/notification",
        content: {
            "message": "This is a test notification"
        },
        color: "primay",
        msg_type: "dm",
    }

    Notification.sendBell(
        userIdentifiers, NotifPayload
    )
```

### Usage Notification Bell Broadcast
```typescript
    import Notification from "notif-agent-ts";

    // broadcast
    const NotifPayload = [{
        user_id: null,
        type: "info-ts",
        icon: "icon.png",
        path: "/path/to/notification",
        content: {
            "message": "This is a test notification"
        },
        color: "primay",
        msg_type: "broadcast",
        channel: "test",
        ecosystem_id: "00000000-0000-0000-0000-000000000000",
    }]

    Notification.sendBellBulk(
        null, NotifPayload
    )
```

### Usage Notification Email
```typescript
    import path = require('path');
    import Notification from 'notif-agent-ts'; // Make sure to import the function from the correct location

    Notification.sendMail(
        ['ali.farhan160@gmail.com', 'diasnour0395@gmail.com'],
        'Test From Lib',
        'sso_otp_verification',
        {
            otp_code: '666666'
        },
        [
            {
                filename: 'document.pdf', // The name of the attachment file that will appear in the email
                path: path.join(__dirname, './document.pdf'), // Path to the attachment file on the local system
            },
            {
                filename: 'document2.pdf', // The name of the attachment file that will appear in the email
                path: path.join(__dirname, './Get_Started_With_Smallpdf.pdf'), // Path to the attachment file on the local system
            },
        ],
    )
```

### Usage Notification Wa OCA
```typescript
    import Notification from 'notif-agent-ts'; // Make sure to import the function from the correct location

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

```

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