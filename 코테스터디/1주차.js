// leetCode 135.candy

var candy = function (ratings) {
  // ratings = [1, 2, 87, 87, 87, 2, 1]
  let arr = Array.from({ length: ratings.length }, (_) => 1) // arr = reatings 의 length 과 같은 1로만 된 배열 생성 (최소한의 캔디가 1이라서)

  // 0번째 보다 1번째 가 1번째의 캔디수 + 1 
  ratings.forEach((_, i) => {
    if (ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1
    }
  })
  // 현재 arr = [1, 2, 3, 1, 1, 1, 1]
  // ratings 의 앞은 다 봤으니 이번에는 뒤에서 부터 추적 후 값 ++ 
  // -2 를 해준 이유는 ratings 기준 length 가 7 인데 ratings의 인덱스 8,7,6 은 + 1 해도 다음게 없어서 -2
  // ratings[i] 가 ratings[i + 1] 클때 arr[i+1] 의 값보다 arr[i] 가 1 커야하니까 두 값을 비교 후 같거나 arr[i+1] 이 크면  arr[i+1]+1
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && arr[i] <= arr[i + 1]) {
      arr[i] = arr[i + 1] + 1
    }
  }
  // 모든 캔디를 합쳐준다
  return arr.reduce((a, c) => a += c, 0)
};

// candy([1, 0, 2]) // 4
// candy([1, 2, 2]) // 5
// candy([1, 2, 87, 87, 87, 2, 1]) // 13
// 1 2 3 1 3 2 1
// candy([1, 6, 10, 8, 7, 3, 2]) // 18
// 1 2 5 4 3 2 1




// 주식을 사고 팔기에 가장 좋은 시기

var maxProfit = function (prices) {
  const length = prices.length
  let answer = 0
  for (let i = 0; i < length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      answer += prices[i + 1] - prices[i]
    }
  }
  console.log(answer)
  return answer
}; // 시간 초과 

// 다른사람 풀이
// const maxProfit = function(prices) {
//   let profit = 0;
//   let min = prices[0]

//   for (let i=1; i<prices.length; i++) {
//       min = Math.min(min, prices[i-1])    // 구매 금액은 항상 판매 금액보다 앞인덱스에 있어야 하므로 i-1를 해준다.
//       profit = Math.max(prices[i]-min, profit)
//   }

//   return profit
// };

// 7 = 1, 5, 3, 6, 4
// 1 = 5, 3, 6, 4
// 5 = 3, 6, 4
// 3 = 6, 4
// 6 = 4
// maxProfit([7, 1, 5, 3, 6, 4]) // 5
// maxProfit([7, 6, 4, 3, 1]) // 0