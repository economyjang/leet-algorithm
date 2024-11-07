function mergeAlternately(word1: string, word2: string): string {
    let answer = []
    const minLen = Math.min(word1.length, word2.length)
    for(let i = 0; i < minLen; i++) {
        answer.push(word1[i])
        answer.push(word2[i])
    }

    return answer.join('') + word1.slice(minLen) + word2.slice(minLen)
};