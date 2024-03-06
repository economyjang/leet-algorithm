function canJump(nums: number[]): boolean {
    let jumpLength = 0;
    for(let i = 0; i < nums.length; i++) {
        if(i > jumpLength) return false;
        
        jumpLength = Math.max(jumpLength, i + nums[i]);
    }
    
    return true;
};