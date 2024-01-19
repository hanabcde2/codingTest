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
