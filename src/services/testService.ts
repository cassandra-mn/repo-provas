import {Test} from '@prisma/client';

import * as testRepository from '../repositories/testRepository.js';

export type TestData = Omit<Test, "id">;
export type CreateTestData = Omit<TestData, "teacherDisciplineId"> & {teacherId: number, disciplineId: number};

export async function createTest(test: CreateTestData) {
    const {name, pdfUrl, categoryId, teacherId, disciplineId} = test;
    const {id: teacherDisciplineId} = await testRepository.findByTeacherAndDiscipline(teacherId, disciplineId);
    await  testRepository.createTest({name, pdfUrl, categoryId, teacherDisciplineId});
}

async function getDisciplinesNameByTerm(number: number) {
    const disciplines = await testRepository.findDisciplinesByTermId(number);
    return disciplines;
}

async function getDisciplineOnTeacherByDisciplineId(disciplineId: number) {
    const disciplinesOnTeachers = await testRepository.findDisciplineOnTeacherByDisciplineId(disciplineId);
    return disciplinesOnTeachers;
}

async function getTestsByTeacherDisciplineId(teacherDisciplineId: number) {
    const tests = await testRepository.findTestsByTeacherDisciplineId(teacherDisciplineId);
    return tests;
}

async function getTeacherById(id: number) {
    const teacher = await testRepository.findTeacherByid(id);
    return teacher;
}

async function getDisciplineOnTeacherByTeacherId(teacherId: number) {
    const disciplinesOnTeachers = await testRepository.findDisciplineOnTeacherByTeacherId(teacherId);
    return disciplinesOnTeachers;
}

async function getDisciplineById(id: number) {
    const discipline = await testRepository.findDisciplinesById(id);
    return discipline;
}


export async function getTestByDiscipline() {
    const terms = await testRepository.findTerms();
    const categories = await testRepository.findCategories();
    
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
                        if (test.categoryId === category.id) testsByCategory.push({test: test.name, pdf: test.pdfUrl, teacher: teacher.name});
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

export async function getTestByTeacher() {
    const teachers = await testRepository.findTeachers();
    const categories = await testRepository.findCategories();
    
    const testsByTeachers = await Promise.all(teachers.map(async teacher => {
        const disciplinesOnTeachers = await getDisciplineOnTeacherByTeacherId(teacher.id);
        const byCategorie = await Promise.all(categories.map(async category => {
            const testsByTeacherDisciplineId = await Promise.all(disciplinesOnTeachers.map(async disciplineOnTeacher => {
                const discipline = await getDisciplineById(disciplineOnTeacher.disciplineId);
                const tests = await getTestsByTeacherDisciplineId(disciplineOnTeacher.id);
                const testsByCategory = [];
                for (let test of tests) {
                    if (test.categoryId === category.id) testsByCategory.push({test: test.name, pdf: test.pdfUrl, discipline: discipline.name});
                }
                return testsByCategory;
            }));
            return {category: category.name, tests: testsByTeacherDisciplineId};
        }));
        return {teacher: teacher.name, categories: byCategorie};
    }));

    return testsByTeachers;
}