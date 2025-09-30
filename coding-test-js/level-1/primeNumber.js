/*
문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

입출력 예
nums	result
[1,2,3,4]	1
[1,2,7,6,4]	4

입출력 예 설명
입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.

*/

// 내가 제시한 정답

function solution(nums) {
  var count = 0; // 카운트 값
  function isPrime(numbers) {
    // 소수 인지 확인 하는 함수
    if (numbers < 2) return false; // 1과 2는 소수 이기 때문에 false 리턴
    for (let i = 2; i <= Math.sqrt(numbers); i++) {
      // 값의 제곱근까지 비교
      if (numbers % i === 0) return false; // 입력 값 까지 나눠지는지 확인
    }
    return true; // 소수일 경우 true 리턴
  }

  for (let i = 0; i < nums.length - 2; i++) {
    // 삼중 for문, 0부터 배열의 마지막에서 2번째까지 반복 (3개의 숫자를 선택해야 하기 때문)
    for (let j = i + 1; j < nums.length - 1; j++) {
      // 1부터 배열의 마지막에서 첫번째까지 반복 (3개의 숫자를 선택해야 하기 때문)
      for (let k = j + 1; k < nums.length; k++) {
        // 2부터 마지막 배열 까지
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          // 소수인지 비교
          count++; // 소수일경우 count ++
        }
      }
    }
  }
  return count; // 값 리턴
}

// 코드 리뷰 때 인상 깊었던 코드

function primecheck(n) {
  // 소수 인지 비교하는 함수
  for (var i = 2; i <= Math.sqrt(n); i++) {
    // 위와 같음
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function solution(nums) {
  var cnt = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var w = j + 1; w < nums.length; w++) {
        //console.log(nums[i]+"/"+nums[j]+"/"+nums[w]);

        if (primecheck(nums[i] + nums[j] + nums[w])) {
          //console.log(nums[i]+nums[j]+nums[w]);
          cnt++;
        }
      }
    }
  }
  return cnt;
}
