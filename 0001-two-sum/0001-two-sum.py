class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        answer = []

        num_dict = {}
        for idx, num in enumerate(nums):
            diff = target - num
            if diff not in num_dict:
                num_dict[num] = idx
            else:
                answer.append(num_dict[diff])
                answer.append(idx)

        return answer
        