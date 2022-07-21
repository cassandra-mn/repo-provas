import {User} from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as userRepository from '../repositories/userRepository.js';

export type UserData = Omit<User, "id">;
export type CreateUserData = UserData & {confirmPassword: string};

export async function create(user: CreateUserData) {
    const existingUser = await userRepository.findUserByEmail(user.email);
    if (existingUser) throw {type: "conflict", message: "user already exists"};

    const confirmPassword = user.password === user.confirmPassword;
    if (!confirmPassword) throw {type: "unprocessable_entity", message: "the password and password confirmation fields must be the same"};

    const password = bcrypt.hashSync(user.password, 10);
    await userRepository.insertUser({email: user.email, password});
}

export async function login(login: UserData) {
    const user = await userRepository.findUserByEmail(login.email);
    if (!user) throw {type: "unauthorized", message: "incorrect email or password"};

    const isCorretPassword = bcrypt.compareSync(login.password, user.password)
    if (!isCorretPassword) throw {type: "unauthorized", message: "incorret email or password"};

    const token = jwt.sign(user, process.env.JWT_SECRET);
    return token;
}