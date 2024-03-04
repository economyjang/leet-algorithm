// 얻을 수 있는 최대 이익을 return 하라.
function maxProfit(prices: number[]): number {
    let buy = prices[0];
    let answer = 0;
    
    prices.forEach((price) => {
        if(price < buy) {
            buy = price;
        }
        
        answer = Math.max(answer, price - buy);
    });
    
    return answer;
};