let user = {
    fname: "Akash",
    lname: "Karwande"
}

let getName = function(city, state) {
    console.log(this.fname + " " + this.lname + " " + city + " ," + state);
}

let ur1 = getName.bind(user);
// ur1("Basmath");

Function.prototype.mybind = function(...args) {
    let obj = this;
    let param = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...param,...args2]);
    }
}

let ur2 = getName.mybind(user, "Basmath");
ur2("MH");