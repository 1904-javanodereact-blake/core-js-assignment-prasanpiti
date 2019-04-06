/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
let ol = {
    name: 'object literal',
    age: 1
}

function fc(name, age){
    this.name = name;
    this.age = age;
}

class cl {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(ol);
let funObj = new fc('fun construc', 2);
console.log(funObj);
let classObj = new cl('class object', 3);
console.log(classObj);

