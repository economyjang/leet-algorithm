function romanToInt(s: string): number {
    let answer = 0;
    let prev = 0;
    
    const romanNumMap = {
        'I' : 1, 'V' : 5,
        'X' : 10, 'L' : 50,
        'C' : 100, 'D' : 500,
        'M' : 1000
    };
    
    s.split('').forEach((char) => {
        let number = romanNumMap[char];
        
        if (prev < number) {
            answer += number - (prev * 2);
        } else {
            answer += number;
        }
        
        prev = number;
    });
    
    return answer;
};