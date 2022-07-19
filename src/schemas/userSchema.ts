import Joi from 'joi';
import {UserData} from '../services/userService.js';

export interface CreateUserData {
    email: UserData["email"];
    password: UserData["password"];
    confirmPassword: UserData["password"];
}

export const userSchema = Joi.object<CreateUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password')
});