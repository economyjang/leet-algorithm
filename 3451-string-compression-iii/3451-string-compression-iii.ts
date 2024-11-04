let tempCharArr = []

function compressedString(word: string): string {
    let comp = ''
    let count = 1

    for(let i = 0; i < word.length; i++) {
        // 앞 뒤 같은 문자이고, 같은 문자가 9개 미만일 때
        if(word[i] === word[i + 1] && count < 9) {
            count++
        } else {
            comp += `${count}${word[i]}`
            count = 1
        }
    }

    return comp
};