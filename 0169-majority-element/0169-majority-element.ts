function majorityElement(nums: number[]): number {
    let numsMap = {};
    nums.forEach((num) => {
        if(!numsMap[num]) numsMap[num] = 1;
        else numsMap[num]++;
    });
    
    console.log(numsMap);
    
    let maxNum = 0;
    Object.keys(numsMap).forEach((key) => {
        if(maxNum === 0) maxNum = +key;
        else if(numsMap[key] > numsMap[maxNum]) maxNum = +key;
    });
    
    return maxNum;
};