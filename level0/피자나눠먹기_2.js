
function 피자나눠먹기_2(n) {
  let answer = 0
  const 피자계산기 = () => {
    return (answer += 6) % n === 0 ? answer / 6 : 피자계산기()
  }
  return 피자계산기()
}
function 피자나눠먹기_2_2(n) {
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
    return pizza;
}
console.log(피자나눠먹기_2(6))
console.log(피자나눠먹기_2_2(10))
console.log(피자나눠먹기_2(4))