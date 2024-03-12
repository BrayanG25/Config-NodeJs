// Function to build a successful response
const buildSuccessResponse = (message, data = null, status = 200) => ({
    success: true,
    status,
    message,
    data
});

//  Function to build an error response
const buildErrorResponse = (message, data = null, status = 500) => ({
    success: false,
    status,
    error: { message },
    data
});

// Function to send a standard response
export const sendStandardResponse = async (res, success, message, status = null, data = null) => {
    const responseStatus = status || (success ? 200 : 500);
    const responseFunction = success ? buildSuccessResponse : buildErrorResponse;
    const responseObject = responseFunction(message, data, responseStatus);
    
    res.status(responseStatus).json(responseObject);
    return responseObject;
}
