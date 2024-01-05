// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
function 특정문자제거(my_string, letter) {
  return [...my_string].filter((str)=>str !== letter).join('');
}
// my_string.split(letter).join('')
// split의 인자를 기준으로 분리
// my_string.replaceAll(letter, "");
console.log(특정문자제거('abcdef', 'f'))
console.log(특정문자제거('BCBdbe', 'B'))