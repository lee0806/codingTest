/*

문제 설명
두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 
첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 
이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ a ≤ 100
1 ≤ d ≤ 100
1 ≤ included의 길이 ≤ 100
included에는 true가 적어도 하나 존재합니다.

입출력 예
a	d	included	result
3	4	[true, false, false, true, true]	37
7	1	[false, false, false, true, false, false, false]	10

입출력 예 설명

입출력 예 #1

예제 1번은 a와 d가 각각 3, 4이고 included의 길이가 5입니다. 이를 표로 나타내면 다음과 같습니다.

1항	2항	3항	4항	5항
등차수열	3	7	11	15	19
included	true	false	false	true	true

따라서 true에 해당하는 1항, 4항, 5항을 더한 3 + 15 + 19 = 37을 return 합니다.

입출력 예 #2

예제 2번은 a와 d가 각각 7, 1이고 included의 길이가 7입니다. 이를 표로 나타내면 다음과 같습니다.

1항	2항	3항	4항	5항	6항	7항
등차수열	7	8	9	10	11	12	13
included	false	false	false	true	false	false	false

따라서 4항만 true이므로 10을 return 합니다.



*/

// 내가 제시한 정답

// 모든 코드는 이해하고 주석을 달아서 설명할 것
// 할 수 있는 데까지 최소한의 코드와 복잡도를 생각하고 작성할 것
// 이해하지 못할 경우 AI의 도움을 받아 코드를 작성하고 코드 리뷰를 진행 한 뒤 다시 문제를 풀어볼 것

function solution(a, d, included) {
  // a = 값, d = 공차, included = boolean 형태의 배열
  var answer = 0; // 답
  var total = 0; // 총합
  for (var i = 0; i < included.length; i++) {
    // included의 길이 만큼 반복
    if (included[i] == true) {
      // included[i]가 참일 때
      total += a + d * i; // 해당하는 i차값을 더함
    }
  }
  answer = total; // 값

  return answer; // 리턴
}

// 코드 리뷰 때 인상 깊었던 코드

// 가장 간결하고 이해하기 쉬운 코드를 가져올 것
// 코드를 읽고 이해한 뒤 주석을 달아 설명을 작성할 것

function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    // acc = 지금까지의 누적 합, flag = included의 현재 원소 i = 현재 인덱스
    return flag ? acc + a + d * i : acc;
  }, 0);
}

// reduce는 배열을 순회하면서 값들의 누적값을 결과로 만드는 함수
// reduce가 시작할 때 acc는 0
// included를 돌면서 flag가 true일 때만 acc + a + d * i를 계산
// flag가 false면 그대로 acc 반환
// 최종 결과를 return
