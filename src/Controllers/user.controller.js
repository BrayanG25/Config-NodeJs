import { sendStandardResponse } from '../Utils/responseBuilder.util.js';

export const getUser = async (req, res) => {
    try {
        // Your code for getting user(s) goes here

        // Example of sending success response with data
        const users = []; // Assuming you retrieve users from database or elsewhere
        sendStandardResponse(res, true, 'Users retrieved', 200, users);

    } catch (error) {
        console.error('Error getting user(s)', error);
        sendStandardResponse(res, false, 'Internal server error', 500);
    }
}

export const createUser = async (req, res) => {
    try {
        // Your code for creating a user goes here

        // Example of sending success response
        if (!res.headersSent) {
            sendStandardResponse(res, true, 'User created', 201); // 201: Created
        }
        
        // Example of sending error response
        // sendStandardResponse(res, false, 'Error creating user', 400);

        // Simulate an error by throwing a custom error
        // throw new Error('This is a simulated error for testing purposes');

    } catch (error) {
        console.error('Error creating user', error);
        sendStandardResponse(res, false, 'Internal server error', 500);
    }
}

export const updateUser = async (req, res) => {
    try {
        // Your code for updating user goes here

        // Example of sending success response
        sendStandardResponse(res, true, 'User updated', 200);

    } catch (error) {
        console.error('Error updating user', error);
        sendStandardResponse(res, false, 'Internal server error', 500);
    }
}

export const deleteUser = async (req, res) => {
    try {
        // Your code for deleting user goes here
        
        // Example of sending success response
        sendStandardResponse(res, true, 'User deleted', 200);

    } catch (error) {
        console.error('Error deleting user', error);
        sendStandardResponse(res, false, 'Internal server error', 500);
    }
}
