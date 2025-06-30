class Solution {
    public int longestOnes(int[] nums, int k) {
        int maxLength = 0;
        int currentZeroCount = 0;

        int left = 0;
        for(int right = 0; right < nums.length; right++){
            if(nums[right] == 0) currentZeroCount++;

            while(currentZeroCount > k){
                if(nums[left++] == 0) currentZeroCount--;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}