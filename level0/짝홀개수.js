
// 정수가 담긴 리스트 num_list가 주어질 때,
//  num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function 짝홀개수(num_list) {
  let 짝수 = num_list.filter(num => num % 2 === 0).length  
  return [짝수, num_list.length - 짝수];
}
console.log(짝홀개수([1, 2, 3, 4, 5]))
console.log(짝홀개수([1, 3, 5, 7]))