let user = {
    fname: "Akash",
    lname: "Karwande",
    // printName: function() {
    //     console.log(this.fname + " " + this.lname);
    // }
}
let printName = function (city, state) {
    console.log(this.fname + " " + this.lname + " " + city + "," + state);
}
let user2 = {
    fname: "Rahul",
    lname: "Karwande"
}

// 1st argument is the reference, and all other is comma separated arguments
// printName.call(user, "Basmath", "MH");
// printName.call(user2, "Nanded", "KH");


// apply takes all array as argument
// printName.apply(user, ["Basmath", "MH"]); 
// printName.apply(user2, ["Nanded", "KH"]);

// 

let ur1 = printName.bind(user, "Basmath", "MH");
let ur2 = printName.bind(user2, "Nanded", "KH");

ur1();
ur2();