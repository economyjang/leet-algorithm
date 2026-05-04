class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        count = 0

        jewel_map = {}

        for jewel in jewels:
            jewel_map[jewel] = jewel

        for stone in stones:
            if stone in jewels:
                count += 1

        return count