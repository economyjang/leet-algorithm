function findMaxAverage(nums: number[], k: number): number {
    let maxSum = -Infinity
    let curSum = 0
    let left = 0

    for(let right = 0; right < nums.length; right++) {
        curSum += nums[right]

        if(right - left + 1 === k) {
            maxSum = Math.max(maxSum, curSum)
            curSum -= nums[left]
            left++
        }
    }

    return maxSum / k
};