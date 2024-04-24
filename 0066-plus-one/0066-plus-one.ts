function plusOne(digits: number[]): number[] {
    let answer = [];
    
    let num = BigInt(digits.join('')) + 1n;
    let strNum = String(num);
    
    answer = strNum.split('');
    
    return answer;
};