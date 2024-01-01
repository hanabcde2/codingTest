
let medianValue = (array) => array.sort((a,b)=> a - b).at( ~~(array.length / 2))
console.log(medianValue([1, 2, 7, 10, 11]))
console.log(medianValue([9, -1, 0]))
