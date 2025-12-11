let user = {
    fname: "Akash",
    lname: "Karwande"
}

let getName = function (city, state) {
    console.log(this.fname + " " + this.lname + " " + city + " ," + state);
}

let ur1 = getName.bind(user);
// ur1("Basmath");

Function.prototype.mybind = function (...args) {
    let obj = this;
    let param = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...param, ...args2]);
    }
}

let ur2 = getName.mybind(user, "Basmath");
ur2("MH");




var maximumGap = function (nums) {
    if (nums.length < 2) return 0;
    let diff = 0;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i + 1] - nums[i];

        if (diff < temp) {
            diff = temp
        }
    }

    return diff;
}

// console.log(maximumGap([3, 1]))

var compareVersion = function (version1, version2) {
    let v1 = "", v2 = "";
    let n1 = version1.length - 1, n2 = version2.length - 1;
    while (n1) {
        if (version1[n1] === '.') {
            break;
        } else {
            v1 = version1[n1] + v1;
            n1--
        }
    }
    while (n2) {
        if (version2[n2] === '.') {
            break;
        }

        v2 = version2[n2] + v2;
        n2--
    }

    if (Number(v1) == Number(v2)) return 0
    if (Number(v1) > Number(v2)) {
        return 1
    } else {
        return -1
    }
};

var compareVersion2 = function (version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);

    const maxLength = Math.max(v1.length, v2.length);
    while (v1.length < maxLength) v1.push(0);
    while (v2.length < maxLength) v2.push(0);

    console.log(maxLength, v1, v2)
    for (let i = 0; i < maxLength; i++) {
        if (v1[i] < v2[i]) return -1;
        if (v1[i] > v2[i]) return 1;
    }

    return 0;
};

// console.log(compareVersion2("7.5.2.4", "7.5.3"))
// console.log("--------------------------------")

// console.log(compareVersion("10.10", "99.10"))


// let str = "", num = "3"
// console.log(str + num)