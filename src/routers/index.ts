import {Router} from 'express';

import {validateToken} from '../middlewares/validateToken.js';
import authRouter from './authRouter.js';

const router = Router();

router.use(authRouter);
router.use(validateToken);

export default router;