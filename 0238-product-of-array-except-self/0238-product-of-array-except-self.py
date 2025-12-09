class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        prefix_sum = [0] * n
        suffix_sum = [0] * n
        result = [0] * n

        p = 1
        for i in range(n):
            p *= nums[i]
            prefix_sum[i] = p

        p = 1
        for i in range(n - 1, -1, -1):
            p *= nums[i]
            suffix_sum[i] = p

        for i in range(n):
            left = prefix_sum[i - 1] if i > 0 else 1
            right = suffix_sum[i + 1] if i < n - 1 else 1
            result[i] = left * right

        return result
