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
// 나머지1(10)
// 나머지1(12)

function x만큼간격이있는n개의숫자(x, n) {

  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}
// console.log(x만큼간격이있는n개의숫자(2, 5))
// console.log(x만큼간격이있는n개의숫자(4, 3))
// console.log(x만큼간격이있는n개의숫자(-4, 2))
function 자릿수더하기(n) {
  return (n + '').split('').reduce((a, c) => a += +c, 0);;
}
// 자릿수더하기('987')
// 자릿수더하기('123')

function 문자열내p와y의개수(s) {
  return s.match(/[pP]/g)?.length === s.match(/[yY]/g)?.length;
}

// 문자열내p와y의개수('pPoooyY')
function 제곱근판별(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.pow(Math.sqrt(n) + 1, 2)) : -1
}
// console.log(제곱근판별(3))

function 정수내림차순(n) {
  return +((n + '').split('').sort((a, b) => b - a).join(''))
}
// console.log(
//   정수내림차순(118372)
// )
function 하샤드수(x) {
  return x % (x + '').split('').reduce((a, c) => a += (c / 1), 0) === 0;
}
// console.log(
//   하샤드수(10),
//   하샤드수(12),
//   하샤드수(11),
//   하샤드수(13)
// )
function 두정수사이의합(a, b, answer = 0) {
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i
  return answer
}
// console.log(

//   // 두정수사이의합(3, 5),
//   // 두정수사이의합(3, 3),
//   // 두정수사이의합(5, 3)
// )

function 음양더하기(absolutes, signs) {
  return absolutes.reduce((a, c, i) => a + (c * (signs[i] ? 1 : -1)), 0);
}
// 음양더하기([4, 7, 12], [true, false, true])

function 콜라츠추측(num) {
  let answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
    answer++;
  }
  return num == 1 ? answer : -1;
}

// 콜라츠추측(6)

function 서울에서김서방찾기(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}
// 서울에서김서방찾기(["Jane", "Kim"])

function 나누어떨어지는숫자배열(arr, divisor) {
  let answer = arr.filter((n) => n % divisor === 0).sort((a, b) => a - b)
  return answer.length ? answer : [-1];
}
// console.log(

//   나누어떨어지는숫자배열([5, 9, 7, 10], 5),
//   나누어떨어지는숫자배열([2, 36, 1, 3], 1),
//   나누어떨어지는숫자배열([3, 2, 6], 10)
// )
function 없는숫자더하기(numbers, i = 0) {
  let answer = 0;
  while (i != 10) {
    numbers.indexOf(i) === -1 ? answer += i : ''
    i++
  }
  return answer;
}
// console.log(
//   없는숫자더하기([1, 2, 3, 4, 6, 7, 8, 0]),
//   없는숫자더하기([5, 8, 4, 0, 6, 7, 9])
// )

function 핸드폰번호가리기(phone_number) {
  return phone_number.replace(phone_number.substring(0, phone_number.length - 4), '*'.repeat(phone_number.length - 4));
}
console.log(
  핸드폰번호가리기("01033334444"),
  핸드폰번호가리기("027778888")
)