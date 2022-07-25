"use strict";
exports.__esModule = true;
exports.prisma = void 0;
var client_1 = require("@prisma/client");
var PrismaClient = client_1["default"].PrismaClient;
exports.prisma = new PrismaClient();
