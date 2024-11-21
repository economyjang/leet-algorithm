function dailyTemperatures(temperatures: number[]): number[] {
    let answer = Array(temperatures.length).fill(0)

    let stack = []
    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && stack[stack.length - 1][1] < temperatures[i]) {
            const [idx, prev] = stack.pop()
            answer[idx] = i - idx
        }
        stack.push([i, temperatures[i]])
    }

    return answer
};