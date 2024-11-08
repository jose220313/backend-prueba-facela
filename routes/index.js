import { Router } from 'express';
import userRoutes from '../v1/users/routes.js';

const router = Router();

router.use('/users', userRoutes);

export default router;
