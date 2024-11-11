function findMaxAverage(nums: number[], k: number): number {
    let currentSum = 0
    let maxSum = 0

    let len = nums.length - k + 1
    for(let i = 0; i < k; i++) currentSum += nums[i]
    maxSum = currentSum

    for(let i = 1; i < len; i++) {
        currentSum += (nums[k + i - 1] - nums[i - 1])
        if(maxSum < currentSum) {
            maxSum = currentSum
        }
    }

    return maxSum / k
};