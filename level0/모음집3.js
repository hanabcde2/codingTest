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

function 유한소수판별(a, b) {

  return !!((a / b).toString().length > 15) + 1

}
console.log(
  유한소수판별(7, 20)

)
유한소수판별(11, 22)
유한소수판별(12, 21)