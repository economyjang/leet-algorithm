function countBits(n: number): number[] {
    let answer = []
    for(let i = 0; i <= n; i++) {
        const num = i
        const binary = i.toString(2)
        answer.push(binary.match(/1/g)?.length || 0)
    }

    return answer
};