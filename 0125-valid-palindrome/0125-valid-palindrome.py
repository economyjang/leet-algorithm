class Solution:
    def isPalindrome(self, s: str) -> bool:
        if len(s) <= 1:
            return True

        s = s.lower()
        s = re.sub('[^a-z0-9]', '', s)

        return s == s[::-1]