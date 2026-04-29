class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # set prefix list
        prefixes = collections.deque()
        prefix = 1
        for i in range(0, len(nums)):
            prefixes.append(prefix)
            prefix = prefix * nums[i]

        # set suffix list
        suffixes = collections.deque()
        suffix = 1
        for i in range(len(nums) - 1, -1, -1):
            suffixes.appendleft(suffix)
            suffix = suffix * nums[i]

        # multiply prefix list and suffix
        output = [prefixes[i] * suffixes[i] for i in range(len(nums))]

        return output