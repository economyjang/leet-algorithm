class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        sum_map = {}

        for i, num in enumerate(nums):
            sum_map[num] = i

        for i, num in enumerate(nums):
            if target - num in sum_map and i != sum_map[target - num]:
                return [i, sum_map[target - num]]
        
        return None