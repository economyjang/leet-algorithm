function jump(nums: number[]): number {
    let count = 0;
    let curEndIdx = 0;
    let curMaxIdx = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        curMaxIdx = Math.max(curMaxIdx, i + nums[i]);

        if(curEndIdx === i) {
            count++;
            curEndIdx = curMaxIdx;
        }
    }

    return count;
};