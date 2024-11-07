function mergeAlternately(word1: string, word2: string): string {
    let answer = ''

    let word1Arr = word1.split('')
    let word2Arr = word2.split('')

    while(word1Arr.length || word2Arr.length) {
        if(word1Arr.length) answer += word1Arr.shift()
        if(word2Arr.length) answer += word2Arr.shift()
    }

    return answer
};