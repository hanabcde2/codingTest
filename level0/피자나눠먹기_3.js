
function 피자나눠먹기_3(slice, n) {
  return Math.ceil(n / slice);
}
console.log(피자나눠먹기_3(7,10)) // 2
console.log(피자나눠먹기_3(4,12)) // 3
console.log(피자나눠먹기_3(10,62)) // 7