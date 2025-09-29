/*
문제 설명
문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

두 수가 n과 m이라면
">", "=" : n >= m
"<", "=" : n <= m
">", "!" : n > m
"<", "!" : n < m
두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다.
그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

제한 사항
1 ≤ n, m ≤ 100

입출력 예
ineq	eq	 n	m	result
"<" 	"="	 20	50	   1
">"	    "!"	 41	78	   0

입출력 예 설명

입출력 예 #1

20 <= 50은 참이기 때문에 1을 return합니다.

입출력 예 #2

41 > 78은 거짓이기 때문에 0을 return합니다.

*/

// 내가 제시한 정답

function solution(ineq, eq, n, m) {
  var answer = 0;
  // ineq가 >를 입력 받는가.
  if (ineq === ">") {
    // eq가 !를 입력 받는가
    if (eq === "!") {
      if (n < m) return (answer = 0); // eq가 !를 받았을 때 n과 m을 비교, 이때 ineq와 다른 값이 참이므로 answer를 0 리턴
      return (answer = 1); // !를 받았을 때 n > m일 경우 answer 1 리턴
    }
    // eq가 =를 입력 받았는가
    if (eq === "=") {
      if (n >= m) return (answer = 1); // n >= m을 비교하고 실제 참일 경우 answer 1 리턴
      return (answer = 0); // 위 조건이 맞지 않을경우 answer 0 리턴
    }
  }

  // ineq가 <를 입력 받았는가
  if (ineq === "<") {
    // eq가 !를 입력 받는가
    if (eq === "!") {
      if (n > m) return (answer = 0); // eq가 !를 받았을 때 n과 m을 비교, 이때 ineq와 다른 값이 참이므로 answer를 0 리턴
      return (answer = 1); // !를 받았을 때 n < m일 경우 answer 1 리턴
    }
    // eq가 =를 입력 받았는가
    if (eq === "=") {
      if (n <= m) return (answer = 1); // n <= m을 비교하고 실제 참일 경우 answer 1 리턴
      return (answer = 0); // 위 조건이 맞지 않을 경우 answer 0 리턴
    }
  }

  return answer; // 최종 answer 리턴
}

// 코드 리뷰 때 인상 깊었던 코드

// 제공 받은 문자를 조합해 n과 m을 비교, 값이 참일 경우 true, 거짓일 경우 false를 반환
// const operations = {
//   ">=": (n, m) => n >= m,
//   "<=": (n, m) => n <= m,
//   ">!": (n, m) => n > m,
//   "<!": (n, m) => n < m,
// };

// function solution(ineq, eq, n, m) {
//   const op = operations[ineq + eq]; // ineq와 eq를 합쳐서 문자로 제공
//   return Number(op(n, m)); // 값은 boolean값으로 받기 때문에 Number의 형태로 변환
// }

// 효율적인 코드인 이유
// 조건문을 여러개 달지 않아도 됨.
// 문제가 여러개로 늘어나도 operations만 추가하면 됨
// 가독성 높은 코드임