function 다항식더하기(polynomial) {
  let answer = 0, num = 0;
  polynomial.split(' ').forEach(v => {
    if (v.includes('x')) {
      v === 'x' ? answer += 1 : answer += (v.substring(0, v.length - 1) / 1)
    } else if (v !== '+') {
      num += v / 1
    }
  })
  answer = answer > 0 && num > 0
    ? `${answer > 1 ? `${answer}x` : 'x'} + ${num}`
    : answer > 0
      ? answer > 1 ? `${answer}x` : 'x'
      : num + ''
  return answer;
}
// console.log(다항식더하기("3x + 7 + x"))
// console.log(다항식더하기("x + x + x"))
// console.log(다항식더하기("x + 1 + 2"))
// console.log(다항식더하기("1 + 2"))


function 숨어있는숫자덧셈2(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

// 숨어있는숫자덧셈2("aAb1B2cC34oOp")
// 숨어있는숫자덧셈2("1a2b3c4d123Z")
// 숨어있는숫자덧셈2("bcdZss")
// 숨어있는숫자덧셈2("bcdZ121s3s")

function 안전지대(board) {
  board.forEach((v, i) => {
    v.forEach((f, j) => {
      if (f === 1) {
        if (board[i][j - 1] === 0) {
          board[i][j - 1] = 2
        }
        if (board[i][j + 1] === 0) {
          board[i][j + 1] = 2
        }
        if (!!board[i - 1] && board[i - 1][j] !== 1) {
          board[i - 1][j] = 2
          if (board[i - 1][j + 1] === 0) {
            board[i - 1][j + 1] = 2
          }
          if (board[i - 1][j - 1] === 0) {
            board[i - 1][j - 1] = 2
          }
        }
        if (!!board[i + 1] && board[i + 1][j] !== 1) {
          board[i + 1][j] = 2
          if (board[i + 1][j + 1] === 0) {
            board[i + 1][j + 1] = 2
          }
          if (board[i + 1][j - 1] === 0) {
            board[i + 1][j - 1] = 2
          }
        }
      }
    })
  })
  return board.reduce((a, c) => a + c.filter((n) => n === 0).length, 0);
}
// 안전지대([[1, 1, 0, 1, 1], [1, 1, 1, 1, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]) // 13

function 삼각형의완성조건2(sides) {
  const [min, max] = sides.sort((a, b) => b - a).map((_, i) => !!i ? sides[0] + sides[1] : sides[0] - sides[1])
  return max - min - 1;
}
// best 풀이 Math.min(...sides)*2-1
// 삼각형의완성조건2([1, 2])
// 삼각형의완성조건2([3, 6])
// 삼각형의완성조건2([11, 7])

function 외계어사전(spell, dic) {
  var answer = 2;
  for (let v of dic) {
    if (v.length >= spell.length && new Set(v).size >= spell.length) {
      if ([...new Set(v)].filter((x) => spell.includes(x)).length === spell.length) {
        answer = 1
        break
      }
    }
  }

  return dic.map(v => [...new Set(v)].filter((x => spell.includes(x))).join('')).filter(v => v.length >= spell.length).length > 0 ? 1 : 2;
}
// best 풀이 
// function solution(p, d) {
//     return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
// }
// 외계어사전(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])
// 외계어사전(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])
// 외계어사전(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])

function 저주의숫자3(n) {
  let answer = 0
  for (let i = 0; i < n; i++) {
    answer++
    while (answer % 3 === 0 || answer.toString().includes('3')) {
      answer++
    }
  }
  return answer
}
// 저주의숫자3(15) // 25
// 저주의숫자3(40) // 76

function 평행(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
  if ((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) return 1
  if ((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) return 1
  if ((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) return 1
  return 0;
}
// 기울기 = x 값의 증가량 / y 값의 증가량

// 평행([[1, 4], [9, 2], [3, 8], [11, 6]])
// 평행([[3, 5], [4, 1], [2, 4], [5, 10]])


function 겹치는선분의길이(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });
  return line.reduce((a, c) => c > 1 ? a + 1 : a, 0)
}

// 겹치는선분의길이([[0, 1], [2, 5], [3, 9]])
// 겹치는선분의길이([[-5, 8], [2, 5], [3, 9]])
// 겹치는선분의길이([[-1, 1], [1, 3], [3, 9]])
// 겹치는선분의길이([[0, 5], [3, 9], [1, 10]])

// function 유한소수판별(a, b) {
//   return !!((a / b).toString().length > 15) + 1
// }

function 특이한정렬(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a)
}
// 특이한정렬([1, 2, 3, 4, 5, 6], 4) // 	[4, 5, 3, 6, 2, 1]
// 특이한정렬([10000, 20, 36, 47, 40, 6, 10, 7000], 30)// [36, 40, 20, 47, 10, 6, 7000, 10000]
function 등수매기기(score) {
  let 평균리스트 = score.map(v => (v[0] + v[1]) / 2);
  let 순위 = 평균리스트.slice().sort((a, b) => b - a)
  return 평균리스트.map(v => 순위.indexOf(v) + 1)
}

// 등수매기기([[80, 70], [90, 50], [40, 70], [50, 80]])
// 등수매기기([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]])


function 옹알이1(babbling) {
  let answer = 0;
  babbling.forEach(v => {
    if (v.replace(/aya|ye|woo|ma/g, '').length === 0) answer += 1
  })
  return answer;
}
// 옹알이1(["aya", "yee", "u", "maa", "wyeoo"])
// 옹알이1(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])
function 로그인성공(id_pw, db) {
  const id = db.filter(([id, pw]) => id === id_pw[0])
  return id?.length > 0 ? id[0][1] === id_pw[1] ? "login" : "wrong pw" : "fail"
}
로그인성공(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]])
로그인성공(["programmer01", "15789"], [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]])
로그인성공(["rabbit04", "98761"], [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]])

function 치킨쿠폰(chicken) {
  return ~~((chicken - 1) / 9)
}

// console.log(치킨쿠폰(100))
// console.log(치킨쿠폰(110))
// console.log(치킨쿠폰(120)) 
// console.log(치킨쿠폰(1000))

// console.log(치킨쿠폰(1081))

function k의개수(i, j, k) {
  return Array.from({ length: j - i + 1 }, (_, idx) => idx + i).join('').split(k).length - 1
}
// k의개수(1, 13, 1)

function 이진수더하기(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString('2')
}
// console.log(이진수더하기('10', '11'))
// console.log(이진수더하기('1001', '1111'))

function A로B만들기(before, after) {
  before = before.split('').sort().join('')
  after = after.split('').sort().join('')
  return before === after ? 1 : 0
}

// A로B만들기('olleh', 'hello') // 1
// A로B만들기('allpe', 'apple') // 0

function 문자열밀기(A, B) {
  console.log((B + B).indexOf(A))
  return (B + B).indexOf(A);
}
// 문자열밀기("hello", "ohell")
// 문자열밀기("apple", "elppa")
// 문자열밀기("atat", "tata")
// 문자열밀기("abc", "abc")

function 종이자르기(M, N) {
  return M * N - 1;
}
function 다음에올숫자(common) {
  if (common[1] / common[0] !== common[2] / common[1]) {

    return 2, common[common.length - 1] + (common[1] - common[0])
  } else {
    return 1, common[common.length - 1] * common[2] / common[1]

  }

}
다음에올숫자([1, 2, 3, 4])
다음에올숫자([2, 4, 8])
다음에올숫자([3, 6, 12])