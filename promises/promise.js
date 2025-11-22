// creator or producer of the promise

const cart = ["shirts", "pants", "shoes"];
function createOrder(cart) {
    let pr = new Promise(function(resolve, reject) {
        if(!validateCart()) {
            const error = new Error("cart is not valid");
            reject(error);
        }
        const orderId = "12345";
        if(orderId) {
            resolve(orderId);
        }
    })

    return pr;
}

function processedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve("Payment successfull!");
    })
}
function validateCart(cart) {
    return true;
}
// consumer of promise

createOrder(cart)
.then(function(orderId) {
    return orderId
})
.then(function(orderId) {
    return processedToPayment(orderId);
})
.then(function(data) {
    console.log(data);
})
.catch(function(err) {
    console.log(err.message)
})
.then(function() {
    console.log("I will be always called");
})