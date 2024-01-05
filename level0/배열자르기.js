// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

function 배열자르기(numbers, num1, num2) {
  return numbers.slice(num1 ,num2 + 1);
}
// splice 함수는 첫 번째 인자로 시작 인덱스를 받고, 두 번째 인자로는 몇 개를 삭제할 건지를 받습니다.
//  그냥 (num1, num2)를 하게 되면 num1번째 인덱스부터 시작해서 num2"개"를 제거합니다.(num2번째 인덱스까지가 아니라). 
// 하지만 문제에서 주어진 num1과 num2는 모두 인덱스값이기 때문에 제거하길 원하는 개수를 받아오려면 
// num2-num1+1을 해줘야합니다. 원하시는대로 작성하려면 splice가 아니라 slice(num1, num2+1)을 해주셔야 합니다.)
console.log(배열자르기([1, 2, 3, 4, 5],1,3)) //[2,3,4]
console.log(배열자르기([1,  3,  5],1,2))//[3,5]