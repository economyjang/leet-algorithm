import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List outerList = new ArrayList<ArrayList<Integer>>();

        Arrays.sort(nums);

        for(int i = 0; i < nums.length; i++) {
            if(i > 0 && nums[i - 1] == nums[i]) continue;
            int target = nums[i];
            int left = i + 1, right = nums.length - 1;

            while(left < right) {
                int sum = target + nums[left] + nums[right];

                if(sum == 0) {
                    List innerList = new ArrayList<Integer>();
                    innerList.add(target);
                    innerList.add(nums[left]);
                    innerList.add(nums[right]);
                    outerList.add(innerList);
                    
                    left++;
                    right--;

                    while(left < right && nums[left] == nums[left - 1]) left++;
                    while(left < right && nums[right] == nums[right + 1]) right--;
                } else if(sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return outerList;
    }
}