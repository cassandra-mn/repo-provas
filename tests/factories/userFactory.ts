import bcrypt from 'bcrypt';
import {faker} from '@faker-js/faker';

import {prisma} from '../../src/config/database.js';

export function createCredentials() {
    return {
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}

export async function createUser() {
    const data = createCredentials();
    const body = {...data, confirmPassword: data.password};

    await prisma.user.create({
        data: {
            email: body.email,
            password: bcrypt.hashSync(body.password, 12)
        } 
    });
  
    return data;
}