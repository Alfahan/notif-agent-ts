import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

export const dt_conf = async () => {
    dotenv.config();
    try {
        const dt = new DataSource({
            type: 'postgres',
			host: process.env.DB_EMAIL_HOST || 'localhost',
			port: parseInt(process.env.DB_EMAIL_PORT || '5433', 10),
            username: process.env.DB_EMAIL_USERNAME || '',
            password: process.env.DB_EMAIL_PASSWORD || '',
            database: process.env.DB_EMAIL_DATABASE || '',
        });

        await dt.initialize();

        return dt;
    } catch (error) {
        throw error;
    }
}  