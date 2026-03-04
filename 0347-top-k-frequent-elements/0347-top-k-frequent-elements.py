class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counters = collections.Counter(nums)
        answer = []

        for num, _ in counters.most_common(k):
            answer.append(num)

        return answer
