function romanToInt(s: string): number {
    let answer = [];
    
    const romanNumMap = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };
    
    s.split('').forEach((char) => {
        if(answer.length === 0) {
            answer.push(romanNumMap[char]);
        } else {
            if(answer[answer.length - 1] < romanNumMap[char]) {
                answer[answer.length - 1] = romanNumMap[char] - answer[answer.length - 1];
            } else {
                answer.push(romanNumMap[char]);
            }
        }
    });
    
    return answer.reduce((acc, cur) => acc + cur, 0);
};