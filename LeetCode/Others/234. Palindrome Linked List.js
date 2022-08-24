/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
    let stack = "";
    let reverse = "";

    while (head.val != undefined) {
        stack += head.val;
        if (!head.next) break;
        else { head = head.next; }
    }


    reverse = stack.split('').reverse().join('');

    return stack === reverse;
};