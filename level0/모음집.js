// 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 
// 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때,
//  일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 
//  사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

function 개미군단(hp) {
  return ~~(hp / 5) + ~~((hp % 5) / 3) + ((hp % 5) % 3);
}
// console.log(개미군단(23)) //5
// console.log(개미군단(24)) //6
// console.log(개미군단(999)) //201


// 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다.
//  그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 
// 문자열 letter가 매개변수로 주어질 때, 
// letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
// 모스부호는 다음과 같습니다.

function 모스부호1(letter) {
  const morse = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
    '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
    '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z'
  }
  return letter.split(' ').map((str) => morse[str]).join('');
}

// console.log(모스부호1(".... . .-.. .-.. ---")) // "hello"
// console.log(모스부호1(".--. -.-- - .... --- -.")) // "python"



// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, 
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

function 가위바위보(rsp) {
  win = {
    2: 0,
    0: 5,
    5: 2,
  }
  return rsp.split('').reduce((acc, cur) => acc + win[cur], '');
}

// console.log(가위바위보("2")) // "0"
// console.log(가위바위보("205")) // "052"


// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
//  머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
//   balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

const fnc = (n) => (n === 0 ? 1 : n * fnc(n - 1))
function 구슬나누는경우의수(balls, share) {
  return Math.round(
    fnc(balls) / fnc(balls - share) / fnc(share)
  );
}
// 조합 : 서로 다른 n개의 원소를 가지고 순서에 상관없이 r개의 원소를 선택하는 것
// console.log(구슬나누는경우의수(3,2)) // 3
// console.log(구슬나누는경우의수(5,3)) // 10


// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

// x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
// x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
// x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
// x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합

function 점의위치(dot) {
  return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}
// console.log(점의위치([2,4])) // 1
// console.log(점의위치([-7,9])) // 2


// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
//  2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
function 이차원으로만들기(num_list, n) {
  const answer = []
  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}
// console.log(이차원으로만들기([1, 2, 3, 4, 5, 6, 7, 8], 2)) // 	[[1, 2], [3, 4], [5, 6], [7, 8]]
// console.log(이차원으로만들기([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)) // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]


function 공던지기(numbers, k) {
  return numbers[2 * (k - 1) % numbers.length];
}

// console.log(공던지기([1, 2, 3, 4], 2)) // 3
// console.log(공던지기([1, 2, 3, 4, 5, 6], 5)) // 3
// console.log(공던지기([1, 2, 3, 4, 5, 6, 7], 5)) // 2
// console.log(공던지기([1, 2, 3, 4, 5, 6, 7, 8], 5)) // 1
// console.log(공던지기([1, 2, 3], 3)) // 2


function 배열회전(numbers, direction) {
  direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
  return numbers
}

// console.log(배열회전([1, 2, 3], 'right')) // [3, 1, 2]
// console.log(배열회전([4, 455, 6, 4, -1, 45, 6], 'left')) // [455, 6, 4, -1, 45, 6, 4]
