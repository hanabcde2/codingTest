function 최소직사각형(sizes) {
  let 가로 = 0, 세로 = 0
  sizes.map((v) => v[0] < v[1] ? [v[1], v[0]] : [v[0], v[1]]).forEach(([a, b]) => {
    if (가로 < a) {
      가로 = a
    }
    if (세로 < b) {
      세로 = b
    }
  })
  return 가로 * 세로;
}

// 최소직사각형([[60, 50], [30, 70], [60, 30], [80, 40]])//4000
// 최소직사각형([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])	//120
// 최소직사각형([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])//	133


function 시저암호(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
시저암호("AB", 1)//	"BC"
시저암호("z", 1)	//"a"
시저암호("a B z", 4)	//"e F d"

const 가장가까운같은글자 = (s) => {
  let stack = [];
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    answer.push(stack.includes(s[i]) ? stack.length - stack.lastIndexOf(s[i]) : -1);
    stack.push(s[i]);
  }
  return answer;
}

// 가장가까운같은글자("banana") //	[-1, -1, -1, 2, 2, 2]
// 가장가까운같은글자("foobar") //	[-1, -1, 1, -1, -1, -1]

const 푸드파이트대회 = (food) => {
  let answer = ''
  for (let i = 1; i < food.length; i++) {
    answer += (i + '').repeat(~~(food[i] / 2))
  }
  answer += '0' + [...answer].reverse().join('')
  console.log(answer)
}
// 푸드파이트대회([1, 3, 4, 6]) // "1223330333221"
// 푸드파이트대회([1, 7, 1, 2]) // "111303111"

function K번째수(array, commands) {
  return commands.map(([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
}
// K번째수([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) // 	[5, 6, 3]

function 문자열내맘대로정렬하기(strings, n) {
  let sortedStr = strings.sort();
  return sortedStr.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}

function 콜라문제(a, b, n) {
  let result = 0;
  while (n >= a) {
    const 받는콜라 = ~~(n / a) * b
    n = n % a + 받는콜라
    result += 받는콜라
  }
  return result;
}
// 콜라문제(2, 1, 20)
// 콜라문제(3, 1, 20)

function 추억점수(name, yearning, photo) {
  const 추억의이름 = {}
  name.forEach((이름, i) => 추억의이름[이름] = yearning[i])
  return photo.map(사진 => {
    let 점수 = 0
    for (let i = 0; i < 사진.length; i++) {
      if (추억의이름[사진[i]]) {
        점수 += 추억의이름[사진[i]]
      }
    }
    return 점수
  })
}
// 추억점수(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])
// 추억점수(["kali", "mari", "don"], [11, 1, 55], [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]])
// 추억점수(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may"], ["kein", "deny", "may"], ["kon", "coni"]])

function 명예의전당1(k, score) {

  const 명예의전당 = []
  const 발표점수 = []
  k = k - 1
  for (let i = 0; i < score.length; i++) {
    if (isNaN(명예의전당[k])) {
      명예의전당.push(score[i])
    } else if (명예의전당[k] < score[i]) {
      명예의전당.pop()
      명예의전당.push(score[i])
    }
    발표점수.push(Math.min(...명예의전당))
    명예의전당.sort((a, b) => b - a)
  }
  return 발표점수;
}

명예의전당1(3, [10, 100, 20, 150, 1, 100, 200])
명예의전당1(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])