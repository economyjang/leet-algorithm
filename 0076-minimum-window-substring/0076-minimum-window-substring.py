class Solution:
    def minWindow(self, s: str, t: str) -> str:
        need = collections.Counter(t)
        missing = len(t)
        left = 0

        answer = ""

        for right in range(len(s)):
            char = s[right]

            if need[char] > 0:
                missing -= 1

            need[char] -= 1

            while missing == 0:
                window = s[left:right + 1]

                if answer == "" or len(window) < len(answer):
                    answer = window

                left_char = s[left]

                need[left_char] += 1

                if need[left_char] > 0:
                    missing += 1

                left += 1

        return answer