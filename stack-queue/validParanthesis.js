// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Example 5:
// Input: s = "([)]"
// Output: false

function validParanthesis(s) {
    let stack = [];
    let map = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    for(let i =0; i < s.length; i++) {
        if(map[s[i]]) {
            stack.push(s[i])
        } else {
            let top = stack.pop();
            if(!top || s[i] !== map[top]) {
                return false
            }
        }
    }

    return stack.length === 0;
}

console.log(validParanthesis("{[]})"))