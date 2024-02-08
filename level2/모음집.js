function 최댓값과최솟값(s) {
  var arr = s.split(' ');
  return Math.min(...arr) + ' ' + Math.max(...arr);
}

// 최댓값과최솟값("1 2 3 4") // '1 4'

function 최솟값만들기(A, B) {
  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)
  return A.reduce((a, c, i) => a + c * B[i], 0);
}
최솟값만들기([1, 4, 2], [5, 4, 4]) // 29
최솟값만들기([1, 2], [3, 4]) // 10



function 다음큰숫자(n, i = 0) {
  let answer = 0;
  const n1개수 = n.toString(2).replaceAll(0, '').length
  while (true) {
    i++
    const 답1의개수 = (n + i).toString(2).replaceAll(0, '').length
    if (n1개수 === 답1의개수) {
      answer = (n + i)
      break
    }
  }
  return answer
}

// 다음큰숫자(78)
function 영어끝말잇기(n, words) {
  let 말한단어들 = []
  let 답 = [0, 0]
  for (let i = 0; i < words.length; i++) {
    let 마지막글자 = 말한단어들[말한단어들?.length - 1]
    let 첫글자 = words[i][0]
    if (i > 0 && (말한단어들.includes(words[i]) || 마지막글자?.charAt(마지막글자?.length - 1) !== 첫글자)) {
      답 = [말한단어들.length % n + 1, Math.ceil((i + 1) / n)]
      break
    }
    말한단어들.push(words[i])
  }
  return 답;
}
// 영어끝말잇기(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])
// 영어끝말잇기(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])
// 영어끝말잇기(2, ["hello", "one", "even", "never", "now", "world", "draw"])

function 가장큰수(numbers) {
  var answer = numbers
    .map((v) => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");

  return answer[0] === "0" ? "0" : answer;

}

가장큰수([659, 691, 12, 34, 5, 9, 6, 6, 6]) // 9534330
// 가장큰수([6, 10, 2]) // 9534330
// 가장큰수([3, 30, 34, 5, 9]) // 9534330