import {prisma} from '../config/database.js';
import {TestData} from '../services/testService.js';

export async function createTest(test: TestData) {
    await prisma.test.create({data: test});
}

export async function findByTeacherAndDiscipline(teacherId: number, disciplineId: number) {
    const result = await prisma.disciplineOnTeacher.findFirst({where: {teacherId, disciplineId}});
    return result;
}