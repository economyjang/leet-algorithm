function findDifference(nums1: number[], nums2: number[]): number[][] {
    const num1Set = new Set(nums1)
    const num2Set = new Set(nums2)

    const num1Result = Array.from(num1Set).filter(num => !num2Set.has(num))
    const num2Result = Array.from(num2Set).filter(num => !num1Set.has(num))

    return [num1Result, num2Result]
};