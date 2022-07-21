import {Router} from 'express';

import {validateSchemaMiddleware} from '../middlewares/validateSchema.js';
import {testSchema} from '../schemas/testSchema.js';
import {createTest} from '../controllers/testController.js';

const testRouter = Router();

testRouter.post('/test/create', validateSchemaMiddleware(testSchema), createTest);

export default testRouter;