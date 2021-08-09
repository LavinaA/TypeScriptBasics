"use strict";
exports.__esModule = true;
var classDemo_1 = require("./classDemo");
var ce = new classDemo_1.classDemo();
ce.setUsername();
console.log(ce.getUsername);
function validate(value) {
    console.log(value);
}
validate("hey");
