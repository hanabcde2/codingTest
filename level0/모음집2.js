function 가까운수(array, n) {
  let answer = 0
  let answer2 = 101
  array.forEach((num) => {
    if (answer2 > Math.abs(n - num) || (answer2 === Math.abs(n - num) && answer > num)) {
      answer2 = Math.abs(n - num)
      answer = num
    }
  })
  return answer;
}
// Best 풀이과정 array.sort((a,b)=> Math.abs(n-a) - Math.abs(n - b) || a - b)
// 가까운수([3, 10, 28], 20)
// 가까운수([10, 11, 12], 9)
// 가까운수([10, 11, 12], 12)


function 게임369(order) {
  // console.log('2', order.toString().split('').filter(n => ['3', '6', '9'].includes(n)).length)
  return (order + '').replace(/[^3|6|9]/g, '').length
}
// Best (''+order).split(/[369]/).length-1;
// 게임369(3) // 1
// 게임369(2912423) // 2
// 게임369(23336296) // 3
// 게임369(2) // 0

function 암호해독(cipher, code) {
  return cipher.split('').filter((v, i) => (i + 1) % code === 0).join('');
}

// 암호해독("dfjardstddetckdaccccdegk", 4)//	"attack"
// 암호해독("pfqallllabwaoclk", 2)//	"fallback"

function 대문자와소문자(my_string) {
  return Array.from(my_string, (v) => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join('');
}
// 대문자와소문자("cccCCC")
// 대문자와소문자("abCdEfghIJ")

function 영어가싫어요(numbers) {
  const stringNumber = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  return stringNumber.reduce((acc, cur, i) => acc.replaceAll(cur, i), numbers) / 1
}
// 영어가싫어요("onetwothreefourfivesixseveneightnine") // 123456789
// 영어가싫어요("onefourzerosixseven")//14067

function 인덱스바꾸기(my_string, num1, num2) {
  my_string = my_string.split('')
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]]
  return my_string.join('');
}
// 인덱스바꾸기("hello", 1, 2)
// 인덱스바꾸기("I love you", 3, 6)

function 한번만등장(s) {
  return [...s].filter((v) => s.indexOf(v) === s.lastIndexOf(v)).join()
}

// 한번만등장("abcabcadc")
// 한번만등장("abdc")
// 한번만등장("hello")

function 약수(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter((v) => n % v === 0);
}
// 약수(24)
// 약수(20)

function 편지(message) {
  return message.length * 2;
}
// 편지("happy birthday!") // 30
// 편지("I love you~") // 22
function 가장큰수찾기(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}
// 가장큰수찾기([1, 8, 3]) // [8, 1]
// 가장큰수찾기([9, 10, 11, 8]) // [11, 2]

function 문자열계산하기(my_string) {
  return Function(`return ${my_string}`)()
}
// Best 풀이 return eval(my_string);

// 문자열계산하기("3 + 4 + 3") // 10
// 문자열계산하기("32 - 4") // 28

function 배열의유사도(s1, s2) {
  return (s1.length + s2.length) - new Set([...s1, ...s2]).size;
}
// 배열의유사도(["a", "b", "c"], ["com", "b", "d", "p", "c"])
// 배열의유사도(["n", "omg"], ["m", "dot"])

function 숫자찾기(num, k) {
  return ('v' + num).indexOf(k)
}
// 숫자찾기(29183, 1) // 3
// 숫자찾기(232443, 4) // 4

function n의배수고르기(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}
function 자릿수더하기(n) {
  return (n + '').split('').reduce((a, c) => a + c / 1, 0);
}

function OX퀴즈(quiz) {
  return quiz.map((v) => {
    [식, 답] = v.split(' = ')
    return 답 == eval(식) ? 'O' : 'X'
  });
}
// OX퀴즈(["3 - 4 = -3", "5 + 6 = 11"])
// OX퀴즈(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])

function 문자열안에문자열(str1, str2) {
  return !!str1.match(str2) ? 1 : 2;
}

// 문자열안에문자열("ab6CDE443fgh22iJKlmn1o", "6CD") //1
// 문자열안에문자열("ppprrrogrammers", "pppp") //2
// 문자열안에문자열("AbcAbcA", "AAA") //2

function 세균증식(n, t) {

  return Array.from({ length: t - 1 }, (_, i) => (i)).reduce((a, c) => a = a * 2, n * 2);
  //Best 풀이 bn << t
  //Best  n*Math.pow(2,t)
}
// 세균증식(2, 10)
// 세균증식(7, 15)

function 문자열정렬하기2(str) {
  return [...str.toLowerCase()].sort().join('')
}
function seven의개수(array) {
  return array.join('').match(/7/g)?.length || 0
}
// seven의개수([7, 77, 17]) // 4
function 잘라서배열로저장(my_str, n) {
  return Array.from({ length: Math.ceil(my_str.length / n) }, (_, i) => (i)).map((v) => my_str.substr(v * n, n));
  //best 풀이 my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
// 잘라서배열로저장("abc1Addfggg4556b", 5)
// 잘라서배열로저장("abcdef123", 3)


function 머쓱이보다키큰사람(array, height) {
  console.log(array.filter((k) => k > height))
  return array.filter((k) => k > height).length;
}
머쓱이보다키큰사람([149, 180, 192, 170], 167)
머쓱이보다키큰사람([180, 120, 140], 190)