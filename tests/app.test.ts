import supertest from 'supertest';
import app from '../src/app.js';
import {prisma} from '../src/config/database.js';

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`;
});

describe('tests authentication route', () => {
    it('returns 201 for valid parameters', async () => {
        const body = {
            "email": "teste@email.com",
            "password": "senha",
            "confirmPassword": "senha"
        };

        const result = await supertest(app).post('/sign-up').send(body);
        expect(result.status).toEqual(201);
    });

    it('returns 200 for valid parameters', async () => {
        const body = {
            "email": "teste@email.com",
            "password": "senha",
            "confirmPassword": "senha"
        };

        const result = await supertest(app).post('/sign-up').send(body);
        expect(result.status).toEqual(201);
        
        const login = {
            "email": "teste@email.com",
            "password": "senha"
        };

        const resultLogin = await supertest(app).post('/sign-in').send(login);
        expect(resultLogin.status).toEqual(200);
    });

    it('returns 422 for invalid parameters', async () => {
        const body = {}; 

        const result = await supertest(app).post('/sign-up').send(body);
        expect(result.status).toEqual(422);
    });

    it('returns 409 for duplicate parameters', async () => {
        const body = {
            "email": "teste@email.com",
            "password": "senha",
            "confirmPassword": "senha"
        };

        const firstTry = await supertest(app).post('/sign-up').send(body);
        expect(firstTry.status).toEqual(201); 

        const secondTry = await supertest(app).post('/sign-up').send(body);
        expect(secondTry.status).toEqual(409);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});