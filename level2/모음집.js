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



