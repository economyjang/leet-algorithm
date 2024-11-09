/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let zeroArr = []
    let i = 0
    while(i < nums.length) {
        if(nums[i] === 0) {
            zeroArr.push(nums.splice(i, 1)[0])
        } else {
            i++
        }
    }

    nums.push(...zeroArr)
};