// 매일 주식을 매수, 매도 할 수있다.
// 주식을 최대 1주만 갖을 수 있다.
// 당일에 매수, 매도를 동시에 할 수 있다.
function maxProfit(prices: number[]): number {
    let sumProfit = 0;
    
    let buy = prices[0];
    for(let i = 0; i < prices.length; i++) {
        if(buy > prices[i]) {
            buy = prices[i];
        } else if(buy < prices[i]) {
            sumProfit += prices[i] - buy;
            buy = prices[i];
        }
    }
    
    return sumProfit;
};