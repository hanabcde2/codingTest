// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

function 배열원소의길이(strlist) {
 
  return strlist.map((str)=>str.length)
}

console.log(배열원소의길이(["We", "are", "the", "world!"])) // [2,3,3,6]
console.log(배열원소의길이(["I", "Love", "Programmers."])) //[1,4,12]