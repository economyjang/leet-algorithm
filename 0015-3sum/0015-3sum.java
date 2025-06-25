import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] arr) {
        List<List<Integer>> outerList = new ArrayList<>();

        Arrays.sort(arr);

        for(int i = 0; i < arr.length; i++){
            if(i > 0 && arr[i] == arr[i - 1]) continue;
            int target = arr[i];
            int left = i + 1, right = arr.length - 1;

            while(left < right){
                int sum = target + arr[left] + arr[right];

                if(sum == 0) {
                    List<Integer> innerList = new ArrayList<>();
                    innerList.add(target);
                    innerList.add(arr[left]);
                    innerList.add(arr[right]);
                    outerList.add(innerList);

                    while(left < right && arr[left] == arr[left + 1]) left++;
                    while(left < right && arr[right] == arr[right - 1]) right--;

                    left++;
                    right--;
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