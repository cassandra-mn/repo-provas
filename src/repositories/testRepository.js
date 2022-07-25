"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.findDisciplinesById = exports.findDisciplineOnTeacherByTeacherId = exports.findTeachers = exports.findCategories = exports.findTerms = exports.findTeacherByid = exports.findTestsByTeacherDisciplineId = exports.findDisciplineOnTeacherByDisciplineId = exports.findDisciplinesByTermId = exports.findByTeacherAndDiscipline = exports.createTest = void 0;
var database_js_1 = require("../config/database.js");
function createTest(test) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.test.create({ data: test })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.createTest = createTest;
function findByTeacherAndDiscipline(teacherId, disciplineId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.disciplineOnTeacher.findFirst({ where: { teacherId: teacherId, disciplineId: disciplineId } })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.findByTeacherAndDiscipline = findByTeacherAndDiscipline;
function findDisciplinesByTermId(termId) {
    return __awaiter(this, void 0, void 0, function () {
        var disciplines;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.discipline.findMany({ where: { termId: termId } })];
                case 1:
                    disciplines = _a.sent();
                    return [2 /*return*/, disciplines];
            }
        });
    });
}
exports.findDisciplinesByTermId = findDisciplinesByTermId;
function findDisciplineOnTeacherByDisciplineId(disciplineId) {
    return __awaiter(this, void 0, void 0, function () {
        var disciplineOnTeacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.disciplineOnTeacher.findMany({ where: { disciplineId: disciplineId } })];
                case 1:
                    disciplineOnTeacher = _a.sent();
                    return [2 /*return*/, disciplineOnTeacher];
            }
        });
    });
}
exports.findDisciplineOnTeacherByDisciplineId = findDisciplineOnTeacherByDisciplineId;
function findTestsByTeacherDisciplineId(teacherDisciplineId) {
    return __awaiter(this, void 0, void 0, function () {
        var tests;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.test.findMany({ where: { teacherDisciplineId: teacherDisciplineId } })];
                case 1:
                    tests = _a.sent();
                    return [2 /*return*/, tests];
            }
        });
    });
}
exports.findTestsByTeacherDisciplineId = findTestsByTeacherDisciplineId;
function findTeacherByid(id) {
    return __awaiter(this, void 0, void 0, function () {
        var teacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.teacher.findUnique({ where: { id: id } })];
                case 1:
                    teacher = _a.sent();
                    return [2 /*return*/, teacher];
            }
        });
    });
}
exports.findTeacherByid = findTeacherByid;
function findTerms() {
    return __awaiter(this, void 0, void 0, function () {
        var terms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.term.findMany()];
                case 1:
                    terms = _a.sent();
                    return [2 /*return*/, terms];
            }
        });
    });
}
exports.findTerms = findTerms;
function findCategories() {
    return __awaiter(this, void 0, void 0, function () {
        var categories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.category.findMany()];
                case 1:
                    categories = _a.sent();
                    return [2 /*return*/, categories];
            }
        });
    });
}
exports.findCategories = findCategories;
function findTeachers() {
    return __awaiter(this, void 0, void 0, function () {
        var teachers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.teacher.findMany()];
                case 1:
                    teachers = _a.sent();
                    return [2 /*return*/, teachers];
            }
        });
    });
}
exports.findTeachers = findTeachers;
function findDisciplineOnTeacherByTeacherId(teacherId) {
    return __awaiter(this, void 0, void 0, function () {
        var disciplineOnTeacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.disciplineOnTeacher.findMany({ where: { teacherId: teacherId } })];
                case 1:
                    disciplineOnTeacher = _a.sent();
                    return [2 /*return*/, disciplineOnTeacher];
            }
        });
    });
}
exports.findDisciplineOnTeacherByTeacherId = findDisciplineOnTeacherByTeacherId;
function findDisciplinesById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var discipline;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_js_1.prisma.discipline.findUnique({ where: { id: id } })];
                case 1:
                    discipline = _a.sent();
                    return [2 /*return*/, discipline];
            }
        });
    });
}
exports.findDisciplinesById = findDisciplinesById;
