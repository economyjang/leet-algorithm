# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = parent = ListNode(0)

        while head:
            # cur.next 의 값이 head 보다 작아서 우측에 삽입할 필요가 없다면
            while cur.next and cur.next.val < head.val:
                # cur 전진
                cur = cur.next

            # cur.next 값이 head 와 같거나 커서 우측에 삽
            cur.next, head.next, head = head, cur.next, head.next

            # head가 존재하고 cur 값이 head보다 커서 좌측에 삽입해야 하면
            if head and cur.val > head.val:
                # cur를 원점으로 복귀
                cur = parent
        return parent.next