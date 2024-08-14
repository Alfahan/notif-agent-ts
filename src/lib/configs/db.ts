import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

// Function to configure and initialize the database connection
export const dt_conf = async () => {
    // Load environment variables from the .env file
    dotenv.config();

    try {
        // Create a new DataSource instance for PostgreSQL with configuration from environment variables
        const dt = new DataSource({
            type: 'postgres', // Specifies the type of database (PostgreSQL in this case)
			host: process.env.DB_EMAIL_HOST || 'localhost', // Database host (default is 'localhost' if not provided)
			port: parseInt(process.env.DB_EMAIL_PORT || '5433', 10), // Database port (default is '5433' if not provided)
            username: process.env.DB_EMAIL_USERNAME || '', // Database username (empty string if not provided)
            password: process.env.DB_EMAIL_PASSWORD || '', // Database password (empty string if not provided)
            database: process.env.DB_EMAIL_DATABASE || '', // Database name (empty string if not provided)
        });

        // Initialize the database connection
        await dt.initialize();

        // Return the initialized DataSource instance
        return dt;
    } catch (error) {
        // Handle any errors that occur during the initialization process
        throw error;
    }
}  
