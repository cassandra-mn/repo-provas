import {Router} from 'express';

import {createTest} from '../controllers/testController.js';

const testRouter = Router();

testRouter.post('/test/create', createTest);

export default testRouter;