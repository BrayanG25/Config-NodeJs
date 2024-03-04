import { Router } from 'express';
import { createUser } from '../Controllers/user.controller.js';

const router = Router();

router.post('/', createUser);

export default router;