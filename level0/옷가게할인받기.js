// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.


function 옷가게할인받기(price) {
  let 통과금액 = [500000, 300000, 100000].filter((지정금액)=> price >= 지정금액)
  let 할인률 = 통과금액.length >= 3 ? 20 : 통과금액.length * 5
  return ~~(price - (price * (할인률 / 100)))
}

console.log(옷가게할인받기(150000))
console.log(옷가게할인받기(580000))
console.log(옷가게할인받기(58000))