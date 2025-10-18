/*
문제 설명

정수가 담긴 리스트 num_list가 주어질 때,
모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9

입출력 예
num_list	result
[3, 4, 5, 2, 1]	1
[5, 7, 8, 3]	0

입출력 예 설명

입출력 예 #1

모든 원소의 곱은 120, 합의 제곱은 225이므로 1을 return합니다.

입출력 예 #2

모든 원소의 곱은 840, 합의 제곱은 529이므로 0을 return합니다.

*/

// 내가 제시한 정답

function solution(num_list) {
  var multiAll = 1;
  var sumAll = 0;

  for (i = 0; i < num_list.length; i++) {
    multiAll *= num_list[i];
  }

  for (i = 0; i < num_list.length; i++) {
    sumAll += num_list[i];
  }

  sumAll = sumAll ** 2;

  if (multiAll < sumAll) {
    return 1;
  }

  return 0;
}

// 모든 코드는 이해하고 주석을 달아서 설명할 것
// 할 수 있는 데까지 최소한의 코드와 복잡도를 생각하고 작성할 것
// 이해하지 못할 경우 AI의 도움을 받아 코드를 작성하고 코드 리뷰를 진행 한 뒤 다시 문제를 풀어볼 것

// 코드 리뷰 때 인상 깊었던 코드

function solution(num_list) {
  let accMul = 1;
  let accSum = 0;
  for (const num of num_list) {
    accMul *= num;
    accSum += num;
  }
  return accMul < accSum ** 2 ? 1 : 0;
}

// 가장 간결하고 이해하기 쉬운 코드를 가져올 것
// 코드를 읽고 이해한 뒤 주석을 달아 설명을 작성할 것
