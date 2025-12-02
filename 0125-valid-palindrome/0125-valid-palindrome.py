class Solution:
    def isPalindrome(self, s: str) -> bool:
        if len(s) <= 1:
            return True

        strs = []
        for char in s:
            if char.isalnum():
                strs.append(char.lower())

        while 1 < len(strs):
            if strs.pop(0) != strs.pop():
                return False

        return True