import { Router } from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../Controllers/user.controller.js';

const router = Router();

// Get all users
router.get('/', getUser);

// Get a specific user by ID
router.get('/:id', getUser);

// Create a new user
router.post('/', createUser);

// Update a user
router.put('/:id', updateUser);

// Partially update a user
router.patch('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

export default router;
