// 오름차순 정렬된 배열이 주어진다.
// 중복된 요소를 삭제해야한다.
// 중복된 여러 요소들중 1개만 남기고 다 삭제해야한다.
function removeDuplicates(nums: number[]): number {
    let count = 0;
    
    let i = 1;
    let compareNum = nums[0];
    while(nums.length >= i) {
        if(nums[i] === compareNum) {
            nums.splice(i, 1);
        } else {
            compareNum = nums[i];
            count++;
            i++;
        }
    }
    return count;
};