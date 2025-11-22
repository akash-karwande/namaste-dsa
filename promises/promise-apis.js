let p1 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        // resolve("P1 Success!");
        reject("P1 Failed!");
    }, 3000)
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        // resolve("P2 Success!");
        reject("P2 Failed!");
    }, 1000)
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        // resolve("P3 Success!");
        reject("P3 Failed!");
    }, 2000)
});

// wait for all to complete in success case and return all result
// if any of them fails return error immediatly
// Promise.all([p1, p2, p3])
// .then(function(res) {
//     console.log(res);
// })

// wait for all promises to complete and return the result if success or fail
// Promise.allSettled([p1, p2, p3])
// .then(function(res) {
//     console.log(res);

// Always return the result of 1st setteled promise, 
// it can be success or fail whichover the 1st
// Promise.race([p1, p2, p3])
// .then(function(res) {
//     console.log(res);


// It will wait for 1st setteled success promise and return
// if none is success then return aggregate error of all promises
Promise.any([p1, p2, p3])
.then(function(res) {
    console.log(res);
}).catch(function(err) {
    console.log(err);
})