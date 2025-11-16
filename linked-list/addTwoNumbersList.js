  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }

//  Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function addTwoNumbers(l1, l2) {
    let ans = new ListNode();
    let ansHead = ans;
    let carry = 0;
    while(l1 || l2 || carry) {
        let sum = (l1? l1.val : 0) + (l2? l2.val : 0) + carry;
        let carry = Math.floor(sum / 10);
        let nodeVal = sum % 10;

        let newNode = new ListNode(nodeVal);
        ans.next = newNode;
        l1 = l1.next;
        l2 = l2.next;
        ans = ans.next;
    }

    return ansHead.next;
}