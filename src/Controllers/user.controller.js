import { sendStandardResponse } from './../Utils/responseBuilder.js';

/**
    * Creates a new user.
    * @param {Object} req - The request object.
    * @param {Object} res - The response object.
*/

export async function createUser(req, res) {
    try {
        // Your code for creating a user goes here
        
        // Example of sending success response
        sendStandardResponse(res, true, 'User created', 200);
        
        // Example of sending error response
        // sendStandardResponse(res, false, 'Error creating user', 400);

        // Simulate an error by throwing a custom error
        // throw new Error('This is a simulated error for testing purposes');

    } catch (error) {
        console.error('Error creating user', error);
        sendStandardResponse(res, false, 'Internal server error', 500);
    }
}