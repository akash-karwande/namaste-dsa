let p1 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve("P1 resolved")
    }, 5000)
})

let p2 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve("P2 resolved")
    }, 1000)
});

async function getData() {
    console.log("Hello");

    let pr1 = await p1;
    console.log("Hi P1" , pr1);

    let pr2 = await p2;
    console.log("Hi P2", pr2);

}

getData()