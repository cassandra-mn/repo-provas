import {Request, Response} from 'express';

import * as userService from '../services/userService.js';

export async function signUp(req: Request, res: Response) {
    const user = req.body;
    await userService.create(user);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const user = req.body;
    const token = await userService.login(user);
    res.status(200).send({token});
}