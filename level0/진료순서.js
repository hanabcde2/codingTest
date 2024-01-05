function 진료순서(emergency) {
  const sorted = emergency.slice().sort((a,b)=>b-a);

  return emergency.map(v=>sorted.indexOf(v)+1);
}
// sort 는 기존 배열을 변경하여 요소를 정렬시킵니다. slice 는 emergency 배열을 변경하지 않고 새로운 배열을 할당해주는 역할을 합니다.


console.log(진료순서([3, 76, 24])) //	[3, 1, 2]
console.log(진료순서([1, 2, 3, 4, 5, 6, 7])) // [7, 6, 5, 4, 3, 2, 1]
console.log(진료순서([30, 10, 23, 6, 100])) // 	[2, 4, 3, 5, 1]
