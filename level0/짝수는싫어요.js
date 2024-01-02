// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 짝수는싫어요 함수를 완성해주세요.
let 짝수는싫어요 = (num) =>{
  return [...Array(num + 1).keys()].filter((n)=> n % 2)
}

console.log(짝수는싫어요(10))
console.log(짝수는싫어요(112))
console.log(짝수는싫어요(15))