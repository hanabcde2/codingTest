let input = require('fs').readFileSync('코테스터디/예제.txt').toString().trim().split('\n');
// console.log(input)
let 문제수 = +input.shift()
let 데드앤라면수 = Array.from({ length: 문제수 }, (_, i) => [...input[i].split(' ')])

//문제 푸는순서는 컵라면 제일 많이 받을수 있는 방법으로 순서 알아서 !
데드앤라면수.sort((a, b) => {
  if (a[0] - b[0] > 0) return 1
  else if (a[0] - b[0] === 0) return b[1] - a[1]
  else if (a[0] - b[0] < 0) return -1
})

// console.log(데드앤라면수)
let answer = 0
for (let i = 0; i <= 문제수 - 1; i++) {
  if (데드앤라면수[i] && +데드앤라면수[i][0] >= (i + 1)) {
    while (데드앤라면수[i + 1] && 데드앤라면수[i + 1][0] === 데드앤라면수[i][0]) {
      데드앤라면수.splice(i + 1, 1)
    }
    answer += +데드앤라면수[i][1]
  }
}
console.log(answer)