// 오름차순 정렬된 배열이 주어진다.
// 중복된 요소를 삭제해야한다.
// 중복된 여러 요소들중 1개만 남기고 다 삭제해야한다.
function removeDuplicates(nums: number[]): number {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i + 1]) {
            nums[count++] = nums[i];
        }
    }
    
    return count;
};