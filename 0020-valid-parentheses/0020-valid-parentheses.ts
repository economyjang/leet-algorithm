function isValid(s: string): boolean {
    const bracketStack = [];
    
    s.split('').forEach((bracket) => {
        if (bracket === '(' || bracket === '[' || bracket === '{' || bracketStack.length === 0) {
            bracketStack.push(bracket);
        } else {
            if (bracket === ')') {
                if (bracketStack[bracketStack.length - 1] === '(') bracketStack.pop();
                else bracketStack.push(bracket);
            } else if (bracket === ']') {
                if (bracketStack[bracketStack.length - 1] === '[') bracketStack.pop();
                else bracketStack.push(bracket);
            } else if (bracket === '}') {
                if (bracketStack[bracketStack.length - 1] === '{') bracketStack.pop();
                else bracketStack.push(bracket);
            }
        }
    });
    
    return bracketStack.length > 0 ? false : true;
};