// input  1 --> 2 --> 3 --> 4 --> 5
// output 5 --> 4 --> 3 --> 2 --> 1


function reverseLinkedList(head) {
    let curr = head;
    let prev = null;
    
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    head = prev;
    return head;
}