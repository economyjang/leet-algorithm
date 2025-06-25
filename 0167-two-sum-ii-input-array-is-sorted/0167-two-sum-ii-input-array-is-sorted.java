class Solution {
    public int[] twoSum(int[] arr, int target) {
        int[] result = new int[2];
        int left = 0, right = arr.length - 1;

        while(left < right) {
            int sum = arr[left] + arr[right];

            if (sum == target) {
                result[0] = left + 1;
                result[1] = right + 1;
                break;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return result;
    }
}