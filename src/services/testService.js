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
exports.getTestByTeacher = exports.getTestByDiscipline = exports.createTest = void 0;
var testRepository = require("../repositories/testRepository.js");
function createTest(test) {
    return __awaiter(this, void 0, void 0, function () {
        var name, pdfUrl, categoryId, teacherId, disciplineId, teacherDisciplineId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = test.name, pdfUrl = test.pdfUrl, categoryId = test.categoryId, teacherId = test.teacherId, disciplineId = test.disciplineId;
                    return [4 /*yield*/, testRepository.findByTeacherAndDiscipline(teacherId, disciplineId)];
                case 1:
                    teacherDisciplineId = (_a.sent()).id;
                    return [4 /*yield*/, testRepository.createTest({ name: name, pdfUrl: pdfUrl, categoryId: categoryId, teacherDisciplineId: teacherDisciplineId })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.createTest = createTest;
function getDisciplinesNameByTerm(number) {
    return __awaiter(this, void 0, void 0, function () {
        var disciplines;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.findDisciplinesByTermId(number)];
                case 1:
                    disciplines = _a.sent();
                    return [2 /*return*/, disciplines];
            }
        });
    });
}
function getDisciplineOnTeacherByDisciplineId(disciplineId) {
    return __awaiter(this, void 0, void 0, function () {
        var disciplinesOnTeachers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.findDisciplineOnTeacherByDisciplineId(disciplineId)];
                case 1:
                    disciplinesOnTeachers = _a.sent();
                    return [2 /*return*/, disciplinesOnTeachers];
            }
        });
    });
}
function getTestsByTeacherDisciplineId(teacherDisciplineId) {
    return __awaiter(this, void 0, void 0, function () {
        var tests;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.findTestsByTeacherDisciplineId(teacherDisciplineId)];
                case 1:
                    tests = _a.sent();
                    return [2 /*return*/, tests];
            }
        });
    });
}
function getTeacherById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var teacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.findTeacherByid(id)];
                case 1:
                    teacher = _a.sent();
                    return [2 /*return*/, teacher];
            }
        });
    });
}
function getDisciplineOnTeacherByTeacherId(teacherId) {
    return __awaiter(this, void 0, void 0, function () {
        var disciplinesOnTeachers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.findDisciplineOnTeacherByTeacherId(teacherId)];
                case 1:
                    disciplinesOnTeachers = _a.sent();
                    return [2 /*return*/, disciplinesOnTeachers];
            }
        });
    });
}
function getDisciplineById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var discipline;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.findDisciplinesById(id)];
                case 1:
                    discipline = _a.sent();
                    return [2 /*return*/, discipline];
            }
        });
    });
}
function getTestByDiscipline() {
    return __awaiter(this, void 0, void 0, function () {
        var terms, categories, disciplinesByTerms;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.findTerms()];
                case 1:
                    terms = _a.sent();
                    return [4 /*yield*/, testRepository.findCategories()];
                case 2:
                    categories = _a.sent();
                    return [4 /*yield*/, Promise.all(terms.map(function (term) { return __awaiter(_this, void 0, void 0, function () {
                            var disciplines, informations;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, getDisciplinesNameByTerm(term.number)];
                                    case 1:
                                        disciplines = _a.sent();
                                        return [4 /*yield*/, Promise.all(disciplines.map(function (discipline) { return __awaiter(_this, void 0, void 0, function () {
                                                var disciplinesOnTeachers, test;
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, getDisciplineOnTeacherByDisciplineId(discipline.id)];
                                                        case 1:
                                                            disciplinesOnTeachers = _a.sent();
                                                            return [4 /*yield*/, Promise.all(disciplinesOnTeachers.map(function (disciplineOnTeacher) { return __awaiter(_this, void 0, void 0, function () {
                                                                    var tests, teacher;
                                                                    return __generator(this, function (_a) {
                                                                        switch (_a.label) {
                                                                            case 0: return [4 /*yield*/, getTestsByTeacherDisciplineId(disciplineOnTeacher.id)];
                                                                            case 1:
                                                                                tests = _a.sent();
                                                                                return [4 /*yield*/, getTeacherById(disciplineOnTeacher.teacherId)];
                                                                            case 2:
                                                                                teacher = _a.sent();
                                                                                return [4 /*yield*/, Promise.all(categories.map(function (category) {
                                                                                        var testsByCategory = [];
                                                                                        for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
                                                                                            var test_1 = tests_1[_i];
                                                                                            if (test_1.categoryId === category.id)
                                                                                                testsByCategory.push({ test: test_1.name, pdf: test_1.pdfUrl, teacher: teacher.name });
                                                                                        }
                                                                                        return { category: category.name, tests: testsByCategory };
                                                                                    }))];
                                                                            case 3: return [2 /*return*/, _a.sent()];
                                                                        }
                                                                    });
                                                                }); }))];
                                                        case 2:
                                                            test = _a.sent();
                                                            return [2 /*return*/, { discipline: discipline.name, categories: test[0] }];
                                                    }
                                                });
                                            }); }))];
                                    case 2:
                                        informations = _a.sent();
                                        return [2 /*return*/, { term: term.number, disciplines: informations }];
                                }
                            });
                        }); }))];
                case 3:
                    disciplinesByTerms = _a.sent();
                    return [2 /*return*/, disciplinesByTerms];
            }
        });
    });
}
exports.getTestByDiscipline = getTestByDiscipline;
function getTestByTeacher() {
    return __awaiter(this, void 0, void 0, function () {
        var teachers, categories, testsByTeachers;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.findTeachers()];
                case 1:
                    teachers = _a.sent();
                    return [4 /*yield*/, testRepository.findCategories()];
                case 2:
                    categories = _a.sent();
                    return [4 /*yield*/, Promise.all(teachers.map(function (teacher) { return __awaiter(_this, void 0, void 0, function () {
                            var disciplinesOnTeachers, byCategorie;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, getDisciplineOnTeacherByTeacherId(teacher.id)];
                                    case 1:
                                        disciplinesOnTeachers = _a.sent();
                                        return [4 /*yield*/, Promise.all(categories.map(function (category) { return __awaiter(_this, void 0, void 0, function () {
                                                var testsByTeacherDisciplineId;
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, Promise.all(disciplinesOnTeachers.map(function (disciplineOnTeacher) { return __awaiter(_this, void 0, void 0, function () {
                                                                var discipline, tests, testsByCategory, _i, tests_2, test_2;
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0: return [4 /*yield*/, getDisciplineById(disciplineOnTeacher.disciplineId)];
                                                                        case 1:
                                                                            discipline = _a.sent();
                                                                            return [4 /*yield*/, getTestsByTeacherDisciplineId(disciplineOnTeacher.id)];
                                                                        case 2:
                                                                            tests = _a.sent();
                                                                            testsByCategory = [];
                                                                            for (_i = 0, tests_2 = tests; _i < tests_2.length; _i++) {
                                                                                test_2 = tests_2[_i];
                                                                                if (test_2.categoryId === category.id)
                                                                                    testsByCategory.push({ test: test_2.name, pdf: test_2.pdfUrl, discipline: discipline.name });
                                                                            }
                                                                            return [2 /*return*/, testsByCategory];
                                                                    }
                                                                });
                                                            }); }))];
                                                        case 1:
                                                            testsByTeacherDisciplineId = _a.sent();
                                                            return [2 /*return*/, { category: category.name, tests: testsByTeacherDisciplineId }];
                                                    }
                                                });
                                            }); }))];
                                    case 2:
                                        byCategorie = _a.sent();
                                        return [2 /*return*/, { teacher: teacher.name, categories: byCategorie }];
                                }
                            });
                        }); }))];
                case 3:
                    testsByTeachers = _a.sent();
                    return [2 /*return*/, testsByTeachers];
            }
        });
    });
}
exports.getTestByTeacher = getTestByTeacher;
