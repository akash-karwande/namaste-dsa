// Input: root = [1,null,2,3]

// Output: [1,3,2]

// explaination
 // left --> root --> right;


function preOrder(root) {
    const ans = [];

    function traversal(curr) {
        if(!curr) return;
        traversal(curr.left); // left
        ans.push(curr.val); // root
        traversal(curr.right); // right
    }

    traversal(root);
    return ans
 }