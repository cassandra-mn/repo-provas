import {faker} from '@faker-js/faker';

import {prisma} from '../../src/config/database.js';

export function createTestInfo() {
    return {
        name: faker.internet.domainName,
        pdfUrl: faker.internet.url,
        categoryId: 1,
        teacherId: 1,
        disciplineId: 1
    }
} 