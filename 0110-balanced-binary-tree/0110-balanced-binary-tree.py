# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def check(root):
            if not root:
                return 0

            left = check(root.left)
            right = check(root.right)

            if left == -1 or right == -1 or abs(left - right) > 1:
                return -1

            # max 를 사용하는 이유는 해당 노드를 기준으로 자식 노드까지의 최대 높이를 알아야하기 때문
            return max(left, right) + 1

        return check(root) != -1
