import {Router} from 'express';

import {validateToken} from '../middlewares/validateToken.js';
import authRouter from './authRouter.js';
import testRouter from './testRouter.js';

const router = Router();

router.use(authRouter);
router.use(validateToken);
router.use(testRouter);

export default router;