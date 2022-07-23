import {prisma} from '../config/database.js';

export async function findTerms() {
    const terms = await prisma.term.findMany();
    return terms;
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

export async function findCategories() {
    const categories = await prisma.category.findMany();
    return categories;
}