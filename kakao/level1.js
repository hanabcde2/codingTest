// A 와 B 중 선물 더 많이준사람이 선물 하나 더 받음
// 선물지수 = 이번 달까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값입니다.
// 선물지수가 같으면 다음달에 서로 주고받지 않는다
// 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return 하도록 solution 함수를 완성해 주세요.
function 카카오1(friends, gifts) {
  let 친구들 = {}
  let 가장많은선물수 = 0
  friends.forEach((이름) => {
    친구들[이름] = {
      준선물: [],
      받은선물: [],
      선물지수: 0,
      다음달선물예측: 0
    }
  })
  gifts.forEach((기록) => {
    let [준애, 받은애] = 기록.split(' ')
    친구들[준애].준선물.push(받은애)
    친구들[받은애].받은선물.push(준애)
  });
  for (const i in friends) {
    let 나 = 친구들[friends[i]]
    친구들[friends[i]].선물지수 = 나.준선물.length - 나.받은선물.length
  }
  for (const 내Idx in friends) {
    let 나 = 친구들[friends[내Idx]]
    for (const 친구Idx in friends) {
      let 친구 = 친구들[friends[친구Idx]]
      if (friends[내Idx] !== friends[친구Idx]) {
        const 친구한테준선물수 = 나.준선물.filter((name) => name === friends[친구Idx]).length || 0
        const 친구가나한테준선물수 = 친구.준선물.filter((name) => name === friends[내Idx]).length || 0
        if (친구한테준선물수 > 친구가나한테준선물수 || (친구한테준선물수 === 친구가나한테준선물수 && 나.선물지수 > 친구.선물지수)) {
          나.다음달선물예측 += 1
        }
      }
    }
    if (가장많은선물수 < 나.다음달선물예측) {
      가장많은선물수 = 나.다음달선물예측
    }
  }
  return 가장많은선물수;
}

// 카카오1(
//   ["muzi", "ryan", "frodo", "neo"],
//   ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]
// ) // 2

// 카카오1(
//   ["joy", "brad", "alessandro", "conan", "david"],
//   ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]
// ) // 4 


// 다른사람 문제 풀이
// function solution(friends, gifts) {
//   const N = friends.length;
//   const ans = new Array(N).fill(0);

//   // 선물 현황
//   const giftArr = Array.from(Array(N), () => new Array(N).fill(0));

//   gifts.forEach((el) => {
//     const [from, to] = el.split(' ');
//     giftArr[friends.indexOf(from)][friends.indexOf(to)] += 1;
//   })
//   console.log('giftArr', giftArr)
//   // 선물 지수 계산
//   const giftNum = [];
//   for (let i = 0; i < N; i++) {
//     const send = giftArr[i].reduce((acc, cur) => acc + cur, 0);
//     const receive = giftArr.reduce((acc, cur) => acc + cur[i], 0);
//     giftNum.push(send - receive);
//   }
//   console.log('giftNum', giftNum)

//   // 다음달 선물 확인
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (i === j) continue;
//       if (giftArr[i][j] > giftArr[j][i]) {
//         ans[i] += 1;
//       } else if (giftArr[i][j] === giftArr[j][i]) {
//         // 보낸횟수가 같다면 선물지수 확인
//         if (giftNum[i] > giftNum[j]) {
//           ans[i] += 1;
//         }
//       }
//     }
//   }
//   return Math.max(...ans);
// }
// solution(
//   ["muzi", "ryan", "frodo", "neo"],
//   ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]
// ) // 2

// solution(
//   ["joy", "brad", "alessandro", "conan", "david"],
//   ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]
// ) // 4

// 2022 kakao level1
function 신고결과받기(id_list, report, k) {
  let 답 = []
  let 유저 = {}
  id_list.forEach((name) => 유저[name] = [[], 0])
  report.forEach((v) => {
    const [신고자, 신고대상] = v.split(' ')
    유저[신고대상][0].push(신고자)
  })
  id_list.forEach((name) => {
    if (new Set(유저[name][0]).size >= k) {
      new Set(유저[name][0]).forEach((v) => {
        유저[v][1] += 1
      })
    }
  })
  id_list.forEach((name) => 답.push(유저[name][1]))
  return 답;
}

// 신고결과받기(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)
// 신고결과받기(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)

//2021 카카오 채용연계형 인턴십
const 숫자문자열과영단어 = (s) => {
  const number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }
  s.match(/zero|one|two|three|four|five|six|seven|eight|nine/g)?.forEach(v => s = s.replace(v, number[v]))
  return +s
}
// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;
//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }
//     return Number(answer);
// }
// 숫자문자열과영단어("one4seveneight") // 1478
// 숫자문자열과영단어("23four5six7") // 234567
// 숫자문자열과영단어("zeroonetwo") // 012
// 숫자문자열과영단어("2three45sixseven") // 234567
// 숫자문자열과영단어("123") // 123
function 비밀지도1차(n, arr1, arr2) {
  return arr1.map((v, i) => {
    let 이진수 = v.toString(2)
    let 이진수2 = arr2[i].toString(2)
    let 지도 = ''
    if (이진수.length < n) {
      이진수 = '0'.repeat(n - 이진수.length) + 이진수
    }
    if (이진수2.length < n) {
      이진수2 = '0'.repeat(n - 이진수2.length) + 이진수2
    }
    for (let j = 0; j < n; j++) {
      지도 += (+이진수[j] + +이진수2[j]) >= 1 ? '#' : ' '
    }
    return 지도
  })
}
// 비밀지도1차(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]) //["#####", "# # #", "### #", "# ##", "#####"]
// 비밀지도1차(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]) //["######", "### #", "## ##", " #### ", " #####", "### # "]