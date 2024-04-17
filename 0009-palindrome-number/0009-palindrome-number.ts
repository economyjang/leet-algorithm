function isPalindrome(x: number): boolean {
    let str = String(x);
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length - 1 - i]) return false;
    }
    
    return true;
};