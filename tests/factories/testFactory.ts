import {faker} from '@faker-js/faker';

export function createTestInfo() {
    return {
        name: faker.internet.domainName,
        pdfUrl: faker.internet.url,
        categoryId: 1,
        teacherId: 1,
        disciplineId: 1
    }
} 