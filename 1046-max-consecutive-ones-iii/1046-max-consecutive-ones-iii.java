class Solution {
    public int longestOnes(int[] nums, int k) {
        int maxCount = 0;
        int zeroCount = 0;

        int left = 0, right = 0;
        while(right < nums.length) {
            System.out.println(left +" "+ right);
            if(nums[right] == 0) zeroCount++;

            while(zeroCount > k) {
                if(nums[left] == 0) zeroCount--;
                left++;
            }

            maxCount = Math.max(maxCount, right - left + 1);
            right++;
        }

        return maxCount;
    }
}