let input = require('fs').readFileSync('코테스터디/예제.txt').toString().trim().split('\n');
// console.log(input)
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
  console.log('needVisit', needVisit)
  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    console.log('node', node)
    console.log('visited', visited)
    if (!visited.includes(node)) {
      visited.push(node);
      let nodes = graph[node];
      needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)];
    }
  }
  return visited;
};
let [정점, 간선, 시작정점] = input.shift().split(' ').map(Number);
let grph = [...Array(정점 + 1)].map(e => []);

for (let i = 0; i < 간선; i++) {
  let [시작점, 도착점] = input[i].split(' ').map(Number);
  grph[시작점].push(도착점);
  grph[도착점].push(시작점);
}
console.log(dfs(grph, 시작정점).join(' '));
console.log(bfs(grph, 시작정점).join(' '));