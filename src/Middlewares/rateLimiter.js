import { dirname, join } from 'path';
import { fileURLToPath  } from 'url';
import { createWriteStream } from 'fs';
import { sendStandardResponse } from '../Utils/responseBuilder.js';

// Ruta del archivo de registro de direcciones IP bloqueadas
const __dirname = dirname(fileURLToPath(import.meta.url));
const blockedIPLogPath = join(__dirname, 'blocked_ip.log');

// Objeto para realizar seguimiento de las solicitudes por dirección IP
const ipRequestTracker = {};

// Middleware para el control de velocidad y bloqueo de IP
export const rateLimitMiddleware = (req, res, next) => {
    const { ip } = req;
    const currentTime = Date.now();
    const windowMs = 60 * 1000;
    const maxRequestsPerWindow = 20;

    // Verificar y limpiar las solicitudes anteriores dentro de la ventana de tiempo
    ipRequestTracker[ip] = ipRequestTracker[ip]?.filter(request => {
        return request.timestamp > currentTime - windowMs;
    }) || [];

    // Verificar si el número de solicitudes dentro de la ventana de tiempo excede el límite
    if (ipRequestTracker[ip].length >= maxRequestsPerWindow) {
        // Bloquear la dirección IP y registrarla en el archivo de registro
        const blockedIPLogStream = createWriteStream(blockedIPLogPath, { flags: 'a' });
        blockedIPLogStream.write(`${ip} - ${new Date().toISOString()}\n`);
        blockedIPLogStream.end();

        console.log(`Blocked request from: ${ip}`);
        // Enviar una respuesta de error si no se ha enviado ya una respuesta
        if (!res.headersSent) {
            sendStandardResponse(res, false, 'Too Many Requests', 429);
        }
    }

    // Registrar la nueva solicitud y continuar al siguiente middleware
    ipRequestTracker[ip].push({ timestamp: currentTime });
    next();
};