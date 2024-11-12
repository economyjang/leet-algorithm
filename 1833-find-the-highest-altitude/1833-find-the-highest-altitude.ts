function largestAltitude(gain: number[]): number {
    let curSum = 0
    let maxSum = 0

    for(let i = 0; i < gain.length; i++) {
        curSum += gain[i]
        maxSum = Math.max(curSum, maxSum)
    }

    return maxSum
};