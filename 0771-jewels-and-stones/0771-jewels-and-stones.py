class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        answer = 0
        stone_count = {}

        for stone in stones:
            if stone not in stone_count:
                stone_count[stone] = 1
            else:
                stone_count[stone] += 1

        for jewel in jewels:
            if jewel in stone_count:
                answer += stone_count[jewel]

        return answer