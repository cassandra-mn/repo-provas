import {prisma} from '../config/database.js';
import {UserData} from '../services/userService.js';

export async function findUserByEmail(email: string) {
    return await prisma.user.findFirst({where: {email}});
}

export async function insertUser(user: UserData) {
    await prisma.user.create({data: user});
}