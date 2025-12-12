// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]


function dailyTemperatures(arr) {
    let stack = [];
    let n = arr.length;
    let res = Array(n).fill(0);
    stack.push(n-1);

    for(let i = n - 2; i >= 0; i--) {
        while(stack.length) {
            let top = stack[stack.length -1];
            if(arr[top] >= arr[i]) {
                res[i] = top - i;
                break;
            } else {
                stack.pop();
            }
        }

        stack.push(i);
    }

    return res;
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))