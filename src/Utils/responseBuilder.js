// Función para construir una respuesta exitosa
const buildSuccessResponse = (message, data = null, status = 200) => ({
    success: true,
    status,
    message,
    data
});

// Función para construir una respuesta de error
const buildErrorResponse = (message, data = null, status = 500) => ({
    success: false,
    status,
    error: { message },
    data
});

// Función para enviar una respuesta estándar
export async function sendStandardResponse(res, success, message, status = null, data = null) {
    const responseStatus = status || (success ? 200 : 500);
    const responseFunction = success ? buildSuccessResponse : buildErrorResponse;
    const responseObject = responseFunction(message, data, responseStatus);
    
    res.status(responseStatus).json(responseObject);
    return responseObject;
}

