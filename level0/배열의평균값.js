// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
const 배열의평균값 = (numbers) => {
  return (numbers.reduce((acc, cur) => acc + cur) / numbers?.length).toFixed(1)
}
console.log(배열의평균값([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(배열의평균값([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]))