let index1: number = 1;

function print() {
    console.log(index1++);
}

// print()

class myClass {
    readonly a = 2;
}

// new myClass().a = 3 // error

const x = [1,2,3];
x[-1] = -1

// console.log(x)

// console.log(x[x.indexOf(10000)]) // -1

// function Foo() {
//     this.bar = 10;
// }

// Foo.prototype.bar = 42;
// var foo = new Foo();
// console.log("1:", foo.bar);

// delete foo.bar
// console.log("2:", foo.bar);

// "use strict"

// var a = 100;
// a = "2dd";
// console.log(a)

