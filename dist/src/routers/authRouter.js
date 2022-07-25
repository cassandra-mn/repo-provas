import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchema.js';
import { userSchema } from '../schemas/userSchema.js';
var authRouter = Router();
authRouter.post('/sign-up', validateSchemaMiddleware(userSchema), signUp);
authRouter.post('/sign-in', signIn);
export default authRouter;
