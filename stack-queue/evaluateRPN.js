// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9


function evaluateRPN(tokens) {
    let stack = [];
    let map = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }
    for (let i = 0; i < tokens.length; i++) {
        if (map[tokens[i]]) {
            let num1 = stack.pop();
            let num2 = stack.pop();
            let result = map[tokens[i]](Number(num2), Number(num1))
            stack.push(Math.trunc(result));

        } else {
            stack.push(tokens[i])
        }
    }

    return Number(stack.pop());
}

// console.log(evaluateRPN(["2","1","+","3","*"]));

let input = ["11", 23, 'hey', "hello", 20, "end"];
let count = 0;
function handleClickEvent() {
    console.log(input[count]);
    count++;
    if (count >= input.length) count = 0;
}

// input.map(function(val, index, arr) {
//     console.log(arr);
// });

// Polyfill for map
Array.prototype.myMap = function (callBackFn) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        callBackFn(this[i], i, this);
    }
    return arr;
}
input.myMap(function (val, index, arr) {
    // console.log(val, index, arr)
});

// Polyfill for forEach
Array.prototype.myForEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
        
    }
}

// input.myForEach(function (val, index, arr) {
//     console.log(val)
// });

// Polyfill for filter

Array.prototype.myFilter = function(cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        if(res) {
            result.push(this[i])
        }
    }
    return result;
}

// const output = input.myFilter(function (val, index, arr) {
//     return typeof val === "number"
// });

// console.log(output);

// Polyfill for reduce

Array.prototype.myReduce = function(cb, initialVal) { 
    for (let i = 0; i < this.length; i++) {
       initialVal = cb(initialVal, this[i], i, this);
    }

    return initialVal;
}

// const output = [1,2,3,4,5].myReduce(function(acc, ele) {
//     acc = acc + ele;
//     return acc
// }, 0)

// console.log(output)

// Polyfill for call method;

function printName(city) {
    console.log(this.fname + " " + this.lname + ' from ' + city)
}

let obj = {
    fname: "Akash",
    lname: "Karwande"
};

Function.prototype.myCall = function(obj = {}, ...args) {
    if(typeof this !== 'function') {
        throw new Error("not callable");
    }
    obj.fn = this;
    return obj.fn(...args);
}

// printName.myCall(obj, "Basmath Maharashtra");


// Polyfill for apply
// printName.apply(obj, ["Basmath Maharashtra"])

Function.prototype.myApply = function(obj = {}, args) {
    if(typeof this !== "function") {
        throw new Error("Not callable");
    }

    obj.fn = this;
    return obj.fn(...args);
}


// printName.myApply(obj, ["Basmath Maharashtra"])


// Polyfill for bind

// let method = printName.bind(obj);
// method("Basmath");

Function.prototype.myBind = function(obj = {}, ...args) {
    if(typeof this !== "function") {
        throw new Error("Not callable")
    };
    obj.fn = this;
    return function(...remArgs) {
        return obj.fn(...args, ...remArgs);
    }
}

let method = printName.myBind(obj);
method("Basmath");


