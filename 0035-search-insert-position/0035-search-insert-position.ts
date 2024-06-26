function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            start = mid + 1;
        } else if(nums[mid] > target) {
            end = mid - 1;
        }
    }
    
    return start;    
};