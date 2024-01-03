function 짝수의합(n) {

  var answer = [...Array(n + 1).keys()].filter((num)=> num % 2 === 0).reduce((acc, cur) => acc + cur,0); 
  return answer;
}


console.log(짝수의합(10)) //30
console.log(짝수의합(4)) //6