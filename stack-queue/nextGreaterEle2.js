// Input: nums = [1,2,1]
// Output: [2,-1,2]

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]

// approach 1, by creating copy same array 
function findNextGreaterElementInCircle(nums) {
    let arr = [...nums, ...nums];
    let stack = [];
    let n = arr.length;
    let ans = Array(n).fill(-1);
    stack.push(arr[n - 1]);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > arr[i]) {
                ans[i] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(arr[i]);
    }

    return ans.slice(0, n / 2)
}

// approach 2, by runing the loop two times for same array 
function findNextGreaterElementInCircle2(arr) {
    let stack = [];
    let n = arr.length;
    let ans = Array(n).fill(-1);
    stack.push(arr[n - 1]);

    for (let i = (n * 2) - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > arr[i % n]) {
                ans[i % n] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(arr[i % n]);
    }

    return ans
}

console.log(findNextGreaterElementInCircle2([1, 2, 3, 4, 3]));