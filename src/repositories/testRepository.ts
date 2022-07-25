import {prisma} from '../config/database.js';
import {TestData} from '../services/testService.js';

export async function createTest(test: TestData) {
    await prisma.test.create({data: test});
}

export async function findByTeacherAndDiscipline(teacherId: number, disciplineId: number) {
    const result = await prisma.disciplineOnTeacher.findFirst({where: {teacherId, disciplineId}});
    return result;
}

export async function findDisciplinesByTermId(termId: number) {
    const disciplines = await prisma.discipline.findMany({where: {termId}});
    return disciplines;
}

export async function findDisciplineOnTeacherByDisciplineId(disciplineId: number) {
    const disciplineOnTeacher = await prisma.disciplineOnTeacher.findMany({where: {disciplineId}});
    return disciplineOnTeacher;
}

export async function findTestsByTeacherDisciplineId(teacherDisciplineId: number) {
    const tests = await prisma.test.findMany({where: {teacherDisciplineId}});
    return tests;
}

export async function findTeacherByid(id: number) {
    const teacher = await prisma.teacher.findUnique({where: {id}});
    return teacher;
}

export async function findTerms() {
    const terms = await prisma.term.findMany();
    return terms;
}

export async function findCategories() {
    const categories = await prisma.category.findMany();
    return categories;
}

export async function findTeachers() {
    const teachers = await prisma.teacher.findMany();
    return teachers;
}

export async function findDisciplineOnTeacherByTeacherId(teacherId: number) {
    const disciplineOnTeacher = await prisma.disciplineOnTeacher.findMany({where: {teacherId}});
    return disciplineOnTeacher;
}

export async function findDisciplinesById(id: number) {
    const discipline = await prisma.discipline.findUnique({where: {id}});
    return discipline;
}