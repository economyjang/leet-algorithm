// 오름차순 배열이 주어진다.
// 일부 중복을 제거해라
// 최대 2개여야 한다. 1개 또는 2개
function removeDuplicates(nums: number[]): number {
    let j = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (j == 1 || nums[i] !== nums[j - 2]) {
            nums[j++] = nums[i];
        }
    }
    
    return j;
};