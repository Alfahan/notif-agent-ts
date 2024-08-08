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
const dt_conf = () => __awaiter(void 0, void 0, void 0, function* () {
    dotenv.config();
    try {
        const dt = new typeorm_1.DataSource({
            type: 'postgres',
            host: process.env.DB_EMAIL_HOST || 'localhost',
            port: parseInt(process.env.DB_EMAIL_PORT || '5433', 10),
            username: process.env.DB_EMAIL_USERNAME || '',
            password: process.env.DB_EMAIL_PASSWORD || '',
            database: process.env.DB_EMAIL_DATABASE || '',
        });
        yield dt.initialize();
        return dt;
    }
    catch (error) {
        throw error;
    }
});
exports.dt_conf = dt_conf;
