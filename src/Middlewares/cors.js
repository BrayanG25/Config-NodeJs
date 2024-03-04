import cors from 'cors';
import { dirname, join } from 'path';
import { fileURLToPath  } from 'url';
import fs from 'fs/promises';

const allowedOrigins = ['http://localhost:4001'];
const __dirname = dirname(fileURLToPath(import.meta.url));

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin)) {
                callback(null, true);
        } else {
            const blockedOrigin = origin || 'Unknown';
            const logFilePath = join(__dirname, 'blocked_origins.log');
            fs.appendFile(logFilePath, blockedOrigin + '\n').catch(err => {
                console.error('Error writing to blocked origins log:', err);
            });
            console.log(`Blocked request from: ${blockedOrigin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST']
};

export default cors(corsOptions);