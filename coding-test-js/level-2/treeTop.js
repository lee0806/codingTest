/*
문제 설명
n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다. 
당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다.
이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.

송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다. 
전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때, 
두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 2 이상 100 이하인 자연수입니다.
wires는 길이가 n-1인 정수형 2차원 배열입니다.
wires의 각 원소는 [v1, v2] 2개의 자연수로 이루어져 있으며, 이는 전력망의 v1번 송전탑과 v2번 송전탑이 전선으로 연결되어 있다는 것을 의미합니다.
1 ≤ v1 < v2 ≤ n 입니다.
전력망 네트워크가 하나의 트리 형태가 아닌 경우는 입력으로 주어지지 않습니다.
입출력 예
n	wires	result
9	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]	3
4	[[1,2],[2,3],[3,4]]	0
7	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]	1

*/

// 내가 제시한 정답

function solution(n, wires) {
  // 1) 인접 리스트(graph) 만들기: graph[i] = i와 연결된 이웃들 목록
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of wires) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // 2) (cutA, cutB) 간선을 "끊었다고 가정"하고 start에서 DFS로 연결된 노드 수 세기
  function countWithDFS(start, cutA, cutB) {
    const visited = Array(n + 1).fill(false);
    let count = 0;

    function dfs(cur) {
      visited[cur] = true;
      count += 1;

      for (const next of graph[cur]) {
        const isCut =
          (cur === cutA && next === cutB) || (cur === cutB && next === cutA);
        if (isCut) continue;

        if (!visited[next]) dfs(next);
      }
    }

    dfs(start);
    return count;
  }

  let answer = Infinity;

  for (const [a, b] of wires) {
    const sizeA = countWithDFS(a, a, b);
    const sizeB = n - sizeA;
    const diff = Math.abs(sizeA - sizeB);
    if (diff < answer) answer = diff;
  }

  return answer;
}

// 모든 코드는 이해하고 주석을 달아서 설명할 것
// 할 수 있는 데까지 최소한의 코드와 복잡도를 생각하고 작성할 것
// 이해하지 못할 경우 AI의 도움을 받아 코드를 작성하고 코드 리뷰를 진행 한 뒤 다시 문제를 풀어볼 것

// 코드 리뷰 때 인상 깊었던 코드

// 가장 간결하고 이해하기 쉬운 코드를 가져올 것
// 코드를 읽고 이해한 뒤 주석을 달아 설명을 작성할 것
