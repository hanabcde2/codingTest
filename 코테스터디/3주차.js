// 풀이봄
const merge = (intervals) => {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let previous = intervals[0];
  for (let i = 1; i < intervals.length; i += 1) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }
  result.push(previous);
  return result;

}

// merge([[1, 4], [0, 2], [3, 5]]) // [1,5]

function 입국심사(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times[times.length - 1];
  let answer = right; // 최대값.
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log('mid', mid)
    let count = 0
    times.forEach(value => {
      count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
      console.log('Math.floor(mid / value)', Math.floor(mid / value))
      if (count >= n) {
        answer = Math.min(mid, answer); // 최솟값
        console.log('Math.min(mid, answer)', Math.min(mid, answer))
        return;
      };
    });
    console.log('count', count)
    console.log('right', right)
    console.log('left', left)
    if (count >= n) {
      right = mid - 1;
    }
    else {
      left = mid + 1;
    }
  }
  return answer;
}
입국심사(6, [7, 10]) // 28

