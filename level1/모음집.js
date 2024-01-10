// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function 약수의합(n) {
  return Array.from({ length: n }, (_, i) => (i + 1)).filter((num) => n % num === 0).reduce((acc, cur) => acc + cur, 0);
}
// 약수의합(12) // 28
// 약수의합(5) // 6


function 문자열정수로바꾸기(s) {
  return s / 1;
}

// 문자열정수로바꾸기('+1234')
// 문자열정수로바꾸기('-1234')

function 짝수와홀수(num) {
  return num % 2 ? 'Odd' : 'Even';
}
// 짝수와홀수(3)
// 짝수와홀수(4)
// 짝수와홀수(0)
function 나머지1(n) {

  return Array.from({ length: n }, (_, i) => i).filter((v) => n % v === 1)[0];
}
나머지1(10)
나머지1(12)