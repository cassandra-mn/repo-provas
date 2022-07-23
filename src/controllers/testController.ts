import {Request, Response} from 'express';

import * as testService from '../services/testService.js';

export async function createTest(req: Request, res: Response) {
    const test = req.body;
    await testService.createTest(test);
    res.sendStatus(201);
}

export async function getTestByDiscipline(req: Request, res: Response) {
    const tests = await testService.getTestByDiscipline();
    res.status(200).send(tests);
}