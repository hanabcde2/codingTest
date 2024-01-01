// 분수의 덧셈
function fountain(numerator1, denominator1, numerator2, denominator2) {
  let denum = numerator1 * denominator2 + numerator2 * denominator1;
  console.log(denum)
  let num = denominator1 * denominator2;
  console.log(num)
  let cal_gcd = (a, b) => { 
    console.log('denum', b)
    console.log('num', a % b)
    return (a % b )? cal_gcd(b, a % b) : b 
  };
  let gcd = cal_gcd(denum, num);
  console.log('gcd', gcd)
  console.log('[분자, 분모]', [denum / gcd, num / gcd])
  return [denum / gcd, num / gcd];
}

// [5,4]
fountain(1,2,3,4)

// [29,6]
fountain(9,2,1,3)
