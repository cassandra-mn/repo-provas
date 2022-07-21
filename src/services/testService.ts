import {Test} from '@prisma/client';

import * as testRepository from '../repositories/testRepository.js';

export type TestData = Omit<Test, "id">;
export type CreateTestData = Omit<TestData, "teacherDisciplineId"> & {teacherId: number, disciplineId: number};

export async function createTest(test: CreateTestData) {
    const {name, pdfUrl, categoryId, teacherId, disciplineId} = test;
    const {id: teacherDisciplineId} = await testRepository.findByTeacherAndDiscipline(teacherId, disciplineId);
    await  testRepository.createTest({name, pdfUrl, categoryId, teacherDisciplineId});
}