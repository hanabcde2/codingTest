
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
function 문자반복출력(my_string, n) {
  var answer = my_string.split('').map(str => str.repeat(n)).join("")
  // my_string.split('').forEach((str)=> {answer += Array(n).fill(str).join('')})
  
  return answer;
}
console.log(문자반복출력('hello', 3)) //"hhheeellllllooo"