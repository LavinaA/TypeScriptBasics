import {classDemo} from './classDemo'

let ce = new classDemo();
ce.setUsername();
console.log(ce.getUsername());  

function validate(value:string):void
{
    console.log(value);
}

validate("hey");