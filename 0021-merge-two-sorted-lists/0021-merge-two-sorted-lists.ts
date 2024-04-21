/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 === null) list2;
    if(list2 === null) list1;
    
    let preHead = {val : -1, next : null};
    let curHead = preHead;
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curHead.next = list1;
            list1 = list1.next;
        } else {
            curHead.next = list2;
            list2 = list2.next;
        }
        
        curHead = curHead.next;
    }
    
    if(list1) curHead.next = list1;
    if(list2) curHead.next = list2;
    
    return preHead.next;
};