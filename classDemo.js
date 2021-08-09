"use strict";
exports.__esModule = true;
exports.classDemo = void 0;
var classDemo = /** @class */ (function () {
    function classDemo() {
    }
    /* classDemo(ssn:number){
         this.ssn = ssn;
 
     }*/
    classDemo.prototype.getUsername = function () {
        return this.username;
    };
    classDemo.prototype.setUsername = function () {
        this.username = "hello";
    };
    return classDemo;
}());
exports.classDemo = classDemo;
var ce = new classDemo();
ce.setUsername();
console.log(ce.getUsername());
