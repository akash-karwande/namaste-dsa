// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6),
// profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed
// because you must buy before you sell.

// brut force approach O(n**2)
function maxProfit(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    // i buy value
    for (let j = i; j < prices.length; j++) {
      // j sell value
      if (prices[j] - prices[i] > profit) profit = prices[j] - prices[i];
    }
  }
  // console.log(profit)
  return profit;
}

// console.log(maxProfit([7,1,5,3,6,4]));


// my version
function maxProfit2(prices) {
  let profit = 0;
  let x = 0; // buy value
  for (let i = 1; i < prices.length; i++) {
    // i sell value

    if (prices[i] - prices[x] > profit) {
      profit = prices[i] - prices[x];
    } else if (prices[x] > prices[x + 1]) {
      x = x + 1;
    }
  }
  return profit;
}

// console.log(maxProfit2([7,6,4,3,1]));

// akshay saini version

function maxProfit3(prices) {
    let maxProfit = 0;
    let min = prices[0]; // holds buy values
    for (let i = 1; i < prices.length; i++) { // i holds sell values
        if(prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min
        }
        if(min > prices[i]) { // if low value found update buy 
            min = prices[i]
        }
    }

    return maxProfit
}

console.log(maxProfit3([7,1,5,3,6,4]));
