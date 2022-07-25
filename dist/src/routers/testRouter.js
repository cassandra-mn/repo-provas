import { Router } from 'express';
import { createTest, getTestByDiscipline, getTestByTeacher } from '../controllers/testController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchema.js';
import { testSchema } from '../schemas/testSchema.js';
var testRouter = Router();
testRouter.post('/test/create', validateSchemaMiddleware(testSchema), createTest);
testRouter.get('/test/discipline', getTestByDiscipline);
testRouter.get('/test/teacher', getTestByTeacher);
export default testRouter;
