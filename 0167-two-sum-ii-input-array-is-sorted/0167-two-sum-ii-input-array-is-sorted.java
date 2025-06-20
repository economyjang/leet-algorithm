class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        int left = 0, right = nums.length - 1;

        while(left < right) {
            int sum =  nums[left] + nums[right];

            if(sum == target) {
                result[0] = ++left;
                result[1] = ++right;
                break;
            } else if(sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return result;
    }
}