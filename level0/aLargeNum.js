let aLargeNum = (array) => {
  let m = new Map()
  array.forEach((num)=>{ m.set(num, (m.get(num) || 0) + 1)})
  m = [...m].sort((a,b)=>b[1]-a[1])
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1
}

console.log(aLargeNum([[1, 2, 3, 3, 3, 4]]))