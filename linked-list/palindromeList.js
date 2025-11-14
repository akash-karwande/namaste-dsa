// 1 --> 2 --> 3 --> 2 --> 1


function isPalindrome(head) {
    // find the middle
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next; // middle
        fast = fast.next.next;
    }
    // reverse the second list
    let curr = slow;
    let prev = null;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    // check for palindrome
    let firstList = head;
    let secondList = prev;

    while(secondList) {
        if(firstList.val !== secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next
    }

    return true
}