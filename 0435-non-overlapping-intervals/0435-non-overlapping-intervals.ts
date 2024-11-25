function eraseOverlapIntervals(intervals: number[][]): number {
    // return minimum number of intervals you need remove to ~
    let answer = 0
    intervals.sort((a, b) => a[1] - b[1])
    let end = intervals[0][1]

    for(let i = 1; i < intervals.length; i++) {
        if(end > intervals[i][0]) {
            answer++
        } else {
            end = intervals[i][1]
        }
    }

    return answer
};