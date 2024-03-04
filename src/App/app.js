import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import corsConfig from './../Config/cors.js';
import { importRoutes } from './../Utils/routeHandler.js'

dotenv.config({ path: '.env' });

const app = express();
const PORT = process.env.PORT || 4000;
const router = express.Router();
importRoutes(router);

app
    .set('port', PORT)
    .use(corsConfig)
    .use(express.json())
    .use(morgan('combined'))
    .use(router)

export default app;