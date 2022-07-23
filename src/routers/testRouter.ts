import {Router} from 'express';

import {createTest, getTestByDiscipline} from '../controllers/testController.js';
import {validateSchemaMiddleware} from '../middlewares/validateSchema.js';
import {testSchema} from '../schemas/testSchema.js';

const testRouter = Router();

testRouter.post('/test/create', validateSchemaMiddleware(testSchema), createTest);
testRouter.get('/test/discipline', getTestByDiscipline);

export default testRouter;