"use strict";
exports.__esModule = true;
exports.userSchema = void 0;
var joi_1 = require("joi");
exports.userSchema = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required(),
    confirmPassword: joi_1["default"].ref('password')
});
