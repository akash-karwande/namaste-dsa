function linerSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }

    return -1
}

console.log([1,2,4,3,5,9,0,11], 5);