// Input: root = [1,null,2,3]
// Output: [1,2,3]

// explaination
 // root > left > right;

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 function preOrder(root) {
    const ans = [];

    function traversal(curr) {
        if(!curr) return;
        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }

    traversal(root);
    return ans
 }