"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var app_js_1 = require("./app.js");
var PORT = +process.env.PORT || 5000;
app_js_1["default"].listen(PORT, function () {
    console.log("Server is up and running on port ".concat(PORT));
});
