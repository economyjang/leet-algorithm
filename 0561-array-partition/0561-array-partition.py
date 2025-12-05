class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        result = sum(nums[::2])

        return result
        