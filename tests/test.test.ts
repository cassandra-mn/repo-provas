import supertest from 'supertest';

import app from '../src/app.js';
import {prisma} from '../src/config/database.js';
import {createUser} from './factories/userFactory.js';
import {createTestInfo} from './factories/testFactory.js';

const agent = supertest(app);

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE tests`;
});

describe('tests test route', () => {
    it('returns 422 for invalid parameters', async () => {
        const user = await createUser();
        const response = await supertest(app).post('/sign-in').send(user);
        const {token} = response.body;

        const body = {}; 
        const result = await agent.post('/test/create').send(body).set("Authorization", `Bearer ${token}`);
        expect(result.status).toEqual(422);
    });

    it('returns 201 for valid parameters', async () => {
        const user = await createUser();
        const response = await supertest(app).post('/sign-in').send(user);
        const {token} = response.body;

        const body = createTestInfo(); 
        const result = await agent.post('/test/create').send(body).set("Authorization", `Bearer ${token}`);
        expect(result.status).toEqual(422);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});