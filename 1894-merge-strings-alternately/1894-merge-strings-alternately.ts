function mergeAlternately(word1: string, word2: string): string {
    let answer = ''

    let word1Pointer = 0
    let word2Pointer = 0

    while(true) {
        if(word1Pointer !== word1.length) answer += word1[word1Pointer++]
        if(word2Pointer !== word2.length) answer += word2[word2Pointer++]
        if(word1Pointer + word2Pointer === word1.length + word2.length) break
    }

    return answer
};