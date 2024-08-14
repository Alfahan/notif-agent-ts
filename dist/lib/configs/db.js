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
exports.dt_conf = void 0;
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
// Function to configure and initialize the database connection
const dt_conf = () => __awaiter(void 0, void 0, void 0, function* () {
    // Load environment variables from the .env file
    dotenv.config();
    try {
        // Create a new DataSource instance for PostgreSQL with configuration from environment variables
        const dt = new typeorm_1.DataSource({
            type: 'postgres', // Specifies the type of database (PostgreSQL in this case)
            host: process.env.DB_EMAIL_HOST || 'localhost', // Database host (default is 'localhost' if not provided)
            port: parseInt(process.env.DB_EMAIL_PORT || '5433', 10), // Database port (default is '5433' if not provided)
            username: process.env.DB_EMAIL_USERNAME || '', // Database username (empty string if not provided)
            password: process.env.DB_EMAIL_PASSWORD || '', // Database password (empty string if not provided)
            database: process.env.DB_EMAIL_DATABASE || '', // Database name (empty string if not provided)
        });
        // Initialize the database connection
        yield dt.initialize();
        // Return the initialized DataSource instance
        return dt;
    }
    catch (error) {
        // Handle any errors that occur during the initialization process
        throw error;
    }
});
exports.dt_conf = dt_conf;
