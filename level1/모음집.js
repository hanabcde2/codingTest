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
// console.log(
//   핸드폰번호가리기("01033334444"),
//   핸드폰번호가리기("027778888")
// )ㅂ
function 제일작은수제거하기(arr) {
  return arr.length > 1 ? arr.filter((n) => n > Math.min(...arr)) : [-1];
}
// console.log(
//   제일작은수제거하기([4, 3, 2, 1]),
//   제일작은수제거하기([10]),
//   제일작은수제거하기([1, 2, 3, 4]),
// )
function 내적(a, b) {
  return a.reduce((a, c, i) => a += c * b[i], 0);
}
// console.log(
//   내적([1, 2, 3, 4], [-3, -1, 0, 2]), //3
//   내적([-1, 0, 1], [1, 0, -1]), //-2
// )
function 수박수박수박(n) {
  return Array.from({ length: n }, ((_, i) => (i + 1) % 2 !== 0 ? '수' : '박')).join('');
}
// 수박수박수박(3)
// 수박수박수박(4)
function 약수의개수와덧셈(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let 약수 = []
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        약수.push(j)
      }
    }
    약수.length % 2 === 0 ? answer += i : answer -= i
  }
  return answer;
}
// for (let i = left; i <= right; i++) {
//   if (Number.isInteger(Math.sqrt(i))) {
//       answer -= i;
//   } else {
//       answer += i;
//   }
// }
// 제곱근이 정수면 약수의 개수는 홀수이다...
// 약수의개수와덧셈(13, 17) // 43
// 약수의개수와덧셈(24, 27) // 52

function 문자열내림차순배치(s) {
  return s.split('').sort().reverse().join('');
}
// 문자열내림차순배치("Zbcdefg")

function 부족한금액계산기(price, money, count) {
  let 요금 = Array.from({ length: count }, (_, i) => (i + 1) * price).reduce((a, c) => a + c, 0)
  return 요금 > money ? 요금 - money : 0;
}
// console.log(
//   부족한금액계산기(3, 20, 4)
// )

function 문자열다루기기본(s) {
  return s.match(/[0-9]/g)?.length === s?.length && (s.length === 4 || s.length === 6);
}

function 행렬의덧셈(arr1, arr2) {

  return arr1.map((v, i) => v.map((n, j) => n + arr2[i][j]));
}
// 행렬의덧셈([[1, 2], [2, 3]], [[3, 4], [5, 6]])
// 행렬의덧셈([[1], [2]], [[3], [4]])

const 직사각형별찍기 = () => {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) {
      console.log('*'.repeat(a))
    }
  });
}
// 직사각형별찍기()

function 최대공약수와최소공배수(n, m) {
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  const lcm = n * m / gcd(n, m);
  return [gcd(m, n % m), lcm];
}
// console.log(
//   최대공약수와최소공배수(3, 12),
//   최대공약수와최소공배수(2, 5)
// )

const 같은숫자는싫어 = (arr) => arr.filter((v, i) => v !== arr[i - 1])

// 같은숫자는싫어([1, 1, 3, 3, 0, 1, 1])
// 같은숫자는싫어([4, 4, 4, 3, 3])
function 진법뒤집기3(n) {

  return parseInt([...n.toString(3)].reverse().join(''), 3);
}
// 진법뒤집기3(45)
// 진법뒤집기3(125)
function 예산(d, budget) {
  let i, sum = 0;
  d.sort((a, b) => a - b)
  for (i = 0; i <= d.length; i++) {
    if (sum + d[i] <= budget) {
      sum += d[i]
    } else {
      break
    }
  }
  return i;
}
// 예산([1, 3, 2, 5, 4], 9)
// 예산([2, 2, 3, 3, 1, 2], 10)
function 이상한문자만들기(s) {
  return s.split(' ').map((str) => str.split('').map((v, i) => (i + 1) % 2 !== 0 ? v.toUpperCase() : v.toLowerCase()).join('')).join(' ')
}
// console.log(   이상한문자만들기("try hello world") //"TrY HeLlO WoRlD")
function 크기가작은부분문자열(t, p) {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    if (+t.substring(i, i + p.length) <= +p) {
      answer++
    }
  }
  return answer;
}

// 크기가작은부분문자열("3141592", "271")//2

function 삼총사(number) {
  let answer = 0;
  const 재귀함수 = (idx) => {
    if (idx > number.length - 2) return
    for (let i = idx + 1; i < number.length; i++) {
      for (let j = i + 1; j < number.length; j++) {
        if ((number[idx] + number[i] + number[j]) === 0) answer++
      }
    }
    재귀함수(idx + 1)
  }
  재귀함수(0)
  return answer;
}
삼총사([-2, 3, 0, 2, -5])	//2
삼총사([-3, -2, -1, 0, 1, 2, 3])	//5
삼총사([-1, 1, -1, 1])	// 0