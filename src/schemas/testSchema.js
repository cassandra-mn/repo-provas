"use strict";
exports.__esModule = true;
exports.testSchema = void 0;
var joi_1 = require("joi");
exports.testSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    pdfUrl: joi_1["default"].string().uri().required(),
    categoryId: joi_1["default"].number().required(),
    teacherId: joi_1["default"].number().required(),
    disciplineId: joi_1["default"].number().required()
});
