import supertest from 'supertest';

import app from '../src/app.js';
import {prisma} from '../src/config/database.js';
import {createCredentials, createUser} from './factories/userFactory.js';

const agent = supertest(app);

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`;
});

describe('tests authentication route', () => {
    it('returns 422 for invalid parameters', async () => {
        const body = {}; 
        const result = await agent.post('/sign-up').send(body);
        expect(result.status).toEqual(422);
    });

    it('returns 201 for valid parameters', async () => {
        const user = createCredentials();
        const result = await agent.post('/sign-up').send({...user, confirmPassword: user.password});
        expect(result.status).toEqual(201);
    });

    it('returns 200 for valid parameters', async () => {
        const user = await createUser();
        const result = await agent.post('/sign-in').send(user);
        expect(result.status).toEqual(200);
    });

    it('returns 409 for duplicate parameters', async () => {
        const user = await createUser();
        const result = await agent.post('/sign-up').send(user);
        expect(result.status).toEqual(409);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});