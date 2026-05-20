class Solution:
    @staticmethod
    def to_swap(n1: int, n2: int) -> bool:
        return str(n1) + str(n2) < str(n2) + str(n1)

    def largestNumber(self, nums: List[int]) -> str:
        for i in range(1, len(nums)):
            j = i - 1
            key = nums[i]
            while j >= 0 and self.to_swap(nums[j], key):
                nums[j + 1] = nums[j]
                j = j - 1
            nums[j + 1] = key
        return str(int(''.join(map(str, nums))))
        