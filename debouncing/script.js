
function debounceFn(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn();
        }, delay)
    }
}

let count = 0;
function getData() {
    console.log("fetching data...", count++);
}


let enhancedFn = debounceFn(getData, 500);

// sum(1)(2)(3)(4)() --> 10


function sum(a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a
    }
}

// console.log(sum(1)(2)(3)(4)())

// input
let obj = {
    name: "Akash",
    address: {
        city: "Basmath",
        state: "Maharashtra"
    },
    personal: {
        username: "karwande",
        platform: "fb"
    },
    email: "akash@gmail.com"
}

// output
let user = {
    "name": "Akash",
    "address-city": "Basmath",
    "address-state": "Maharashtra",
    "email": "akash@gmail.com"
}

let result = {};
function objFlat(obj, parent) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
             objFlat(obj[key], parent + "-" + key);
        } else {
            result[parent + "-" + key] = obj[key];
        }
    }
    return result
}

// console.log(objFlat(obj, "user"));



