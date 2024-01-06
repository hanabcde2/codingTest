// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
//  머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
//   balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

const fnc = (n) => (n === 0 ? 1 : n * fnc(n - 1))
function 구슬나누는경우의수(balls, share) {
  return Math.round(
    fnc(balls) / fnc(balls - share) / fnc(share)
  );
}
// 조합 : 서로 다른 n개의 원소를 가지고 순서에 상관없이 r개의 원소를 선택하는 것
// console.log(구슬나누는경우의수(3,2)) // 3
// console.log(구슬나누는경우의수(5,3)) // 10
