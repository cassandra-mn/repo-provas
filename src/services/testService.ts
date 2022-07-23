import {Test} from '@prisma/client';

import * as testRepository from '../repositories/testRepository.js';
import * as utils from '../utils/utils.js';

export type TestData = Omit<Test, "id">;
export type CreateTestData = Omit<TestData, "teacherDisciplineId"> & {teacherId: number, disciplineId: number};

export async function createTest(test: CreateTestData) {
    const {name, pdfUrl, categoryId, teacherId, disciplineId} = test;
    const {id: teacherDisciplineId} = await testRepository.findByTeacherAndDiscipline(teacherId, disciplineId);
    await  testRepository.createTest({name, pdfUrl, categoryId, teacherDisciplineId});
}

async function getDisciplinesNameByTerm(number: number) {
    const disciplines = await utils.findDisciplinesByTermId(number);
    return disciplines;
}

async function getDisciplineOnTeacherByDisciplineId(disciplineId: number) {
    const disciplinesOnTeachers = await utils.findDisciplineOnTeacherByDisciplineId(disciplineId);
    return disciplinesOnTeachers;
}

async function getTestsByTeacherDisciplineId(teacherDisciplineId: number) {
    const tests = await utils.findTestsByTeacherDisciplineId(teacherDisciplineId);
    return tests;
}

async function getTeacherById(id: number) {
    const teacher = await utils.findTeacherByid(id);
    return teacher;
}

export async function getTestByDiscipline() {
    const terms = await utils.findTerms();
    const categories = await utils.findCategories();
    
    const disciplinesByTerms = await Promise.all(terms.map(async term => {
        const disciplines = await getDisciplinesNameByTerm(term.number);
        const informations = await Promise.all(disciplines.map(async discipline => {
            const disciplinesOnTeachers = await getDisciplineOnTeacherByDisciplineId(discipline.id);  
            const test = await Promise.all(disciplinesOnTeachers.map(async disciplineOnTeacher => {
                const tests = await getTestsByTeacherDisciplineId(disciplineOnTeacher.id);
                const teacher = await getTeacherById(disciplineOnTeacher.teacherId);
                return await Promise.all(categories.map(category => {
                    const testsByCategory = [];
                    for (let test of tests) {
                        if (test.categoryId === category.id) testsByCategory.push({test: test.name, teacher: teacher.name});
                    }
                    return {category: category.name, tests: testsByCategory};
                }));
            }));
            return {discipline: discipline.name, categories: test[0]};
        }));
        return {term: term.number, disciplines: informations};
    }));

    return disciplinesByTerms;
}