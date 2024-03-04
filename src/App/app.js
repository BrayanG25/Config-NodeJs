import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import corsConfig from './../Config/cors.js';

dotenv.config({ path: '.env' });

const app = express();
const PORT = process.env.PORT || 4000;
const router = express.Router();

app
    .set('port', PORT)
    .use(corsConfig)
    .use(express.json())
    .use(morgan('combined'))
    .get('/', (req, res) => res.send("Hello express"))

export default app;