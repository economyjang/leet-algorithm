/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    // k가 nums 의 길이보다 클 때, 길이로 나눈 나머지만큼만 움직임도록 한다.
    k %= nums.length;
    
    // 전체 배열을 전부 뒤집는다.
    reverse(nums, 0, nums.length - 1);
    // k 만큼 움직일 요소들을 뒤집는다.
    reverse(nums, 0, k - 1);
    // 나머지 요소를 뒤집는다.
    reverse(nums, k, nums.length - 1);
};

function reverse(nums: number[], start: number, end: number) {
    while(start < end) {
        let temp = nums[end];
        nums[end] = nums[start];
        nums[start] = temp;
        
        start++;
        end--;
    }
}