function 외계행성의나이(age) {
  return age.toString().split('').map((str)=> 'abcdefghij'[str]).join('')
}
console.log(외계행성의나이(23))
console.log(외계행성의나이(51))