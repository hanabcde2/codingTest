// 문제1
function 두개뽑아서더하기(numbers) {
  let 답 = []
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      답.push(numbers[i] + numbers[j])
    }
  }
  return [...new Set(답)].sort((a, b) => a - b)
}
console.log(
  두개뽑아서더하기([2, 1, 3, 4, 1]),
  두개뽑아서더하기([5, 0, 2, 7])
)


// 문제 2 바닥 장식
const 문제2 = () => {
  let [N] = input.shift().split(' ')
  let 나무판자들 = input
  let 가로나무 = 0
  let 세로나무 = 0
  for (let i = 0; i < +N; i++) {
    세로나무 += 나무판자들[i].split('').filter(v => v === '|').length
    console.log('나무판자들[i]', 나무판자들[i])
    나무판자들[i].split('').forEach((나무, idx) => {
      if (나무 !== '|' && 나무 !== 나무판자들[i].charAt(idx + 1)) {
        가로나무++
      }
    })
    if (!!나무판자들[i + 1]) {
      나무판자들[i].split('').forEach((나무, 나무위치) => {
        if (나무 === '|' && 나무 === 나무판자들[i + 1].split('')[나무위치]) {
          세로나무--
        }
      })
    }
  }
  console.log(가로나무 + 세로나무)
}

// 문제3 
function 타겟넘버(numbers, target) {
  let 답 = 0
  const dfs = (idx, 합) => {
    if (idx == numbers.length) {
      if (합 == target) 답++
      return;
    }
    dfs(idx + 1, 합 + numbers[idx])
    dfs(idx + 1, 합 - numbers[idx])
  }
  dfs(0, 0)
  return 답;
}
// 타겟넘버([1, 1, 1, 1, 1], 3)
// 타겟넘버([4, 1, 2, 1], 4)

//문제4 (풀이봄)
const floodFill = function (image, sr, sc, newColor) {
  const dfs = (image, r, c, color, newColor) => {
    if (image[r][c] == color) {
      image[r][c] = newColor;
      if (r >= 1) {
        dfs(image, r - 1, c, color, newColor);
      }
      if (c >= 1) {
        dfs(image, r, c - 1, color, newColor);
      }
      if (r + 1 < image.length) {
        dfs(image, r + 1, c, color, newColor);
      }
      if (c + 1 < image[0].length) {
        dfs(image, r, c + 1, color, newColor);
      }
    }
  }
  let color = image[sr][sc];
  if (color != newColor) {
    dfs(image, sr, sc, color, newColor);
  }
  return image;
};
// floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)
// floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0)


//문제5 풀이봄 아직 이해 못함,,
const DFS와BFS = function () {
  const bfs = (graph, startNode) => {
    const visited = [];
    let needVisit = [];
    needVisit.push(startNode);
    while (needVisit.length !== 0) {
      const node = needVisit.shift();
      if (!visited.includes(node)) {
        visited.push(node);
        let nodes = graph[node];
        needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)];
      }
    }
    return visited;
  };
  const dfs = (graph, startNode) => {
    const visited = [];
    let needVisit = [];
    needVisit.push(startNode);
    while (needVisit.length !== 0) {
      const node = needVisit.pop();
      if (!visited.includes(node)) {
        visited.push(node);
        let nodes = graph[node];
        needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)];
      }
    }
    return visited;
  };
  let [n, edge, start] = input.shift().split(' ').map(Number);
  let grph = [...Array(n + 1)].map(e => []);

  for (let i = 0; i < edge; i++) {
    let [from, to] = input[i].split(' ').map(Number);
    grph[from].push(to);
    grph[to].push(from);
  }

  console.log(dfs(grph, start).join(' '));
  console.log(bfs(grph, start).join(' '));

};

//문제6
const 토마토 = function () {

};