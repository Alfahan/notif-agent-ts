# notif-agent (TypeScript)

## Instalation this package to your project


1. Run `npm` or `yarn` to install:
```
    npm i notif-agent-ts
```

## Usage Examples
### Usage Notification Bell
``` env
    DB_EMAIL_HOST=localhost
    DB_EMAIL_PORT=5432
    DB_EMAIL_USERNAME=username
    DB_EMAIL_PASSWORD=password
    DB_EMAIL_DATABASE=database
```

```sql
    CREATE TABLE dev_fabd_user_core_owner.notifications (
        created_at timestamp(6) DEFAULT now() NOT NULL,
        created_by varchar DEFAULT '1'::character varying NOT NULL,
        created_name varchar DEFAULT 'System'::character varying NOT NULL,
        updated_at timestamp(6) DEFAULT now() NULL,
        updated_by varchar NULL,
        updated_name varchar NULL,
        deleted_at timestamp(6) NULL,
        deleted_by varchar NULL,
        deleted_name varchar NULL,
        id uuid DEFAULT uuid_generate_v4() NOT NULL,
        user_id varchar NOT NULL,
        "type" varchar NOT NULL,
        "name" varchar NOT NULL,
        email varchar NOT NULL,
        phone varchar NOT NULL,
        icon varchar NOT NULL,
        "path" varchar NOT NULL,
        is_read bool DEFAULT false NOT NULL,
        "content" jsonb NOT NULL,
        color varchar(255) DEFAULT 'primary'::character varying NULL,
        CONSTRAINT "PK_6a72c3c0f683f6462415e653c3a" PRIMARY KEY (id)
    );
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
    DB_EMAIL_HOST=localhost
    DB_EMAIL_PORT=5432
    DB_EMAIL_USERNAME=username
    DB_EMAIL_PASSWORD=password
    DB_EMAIL_DATABASE=database
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