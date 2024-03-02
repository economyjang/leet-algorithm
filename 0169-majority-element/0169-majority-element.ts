function majorityElement(nums: number[]): number {
    let numsMap = {};
    nums.forEach((num) => {
        if(!numsMap[num]) numsMap[num] = 1;
        else numsMap[num]++;
    });
    
    let halfLength = Math.floor(nums.length / 2);
    for (const [key, value] of Object.entries(numsMap)) {
        if(+value > halfLength) return +key;
    }
    
    return 0;
};