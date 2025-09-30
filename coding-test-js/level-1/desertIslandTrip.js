/*

문제 설명
메리는 여름을 맞아 무인도로 여행을 가기 위해 지도를 보고 있습니다. 
지도에는 바다와 무인도들에 대한 정보가 표시돼 있습니다. 
지도는 1 x 1크기의 사각형들로 이루어진 직사각형 격자 형태이며, 
격자의 각 칸에는 'X' 또는 1에서 9 사이의 자연수가 적혀있습니다. 
지도의 'X'는 바다를 나타내며, 숫자는 무인도를 나타냅니다. 
이때, 상, 하, 좌, 우로 연결되는 땅들은 하나의 무인도를 이룹니다. 
지도의 각 칸에 적힌 숫자는 식량을 나타내는데, 
상, 하, 좌, 우로 연결되는 칸에 적힌 숫자를 모두 합한 값은 해당 무인도에서 최대 며칠동안 머물 수 있는지를 나타냅니다. 
어떤 섬으로 놀러 갈지 못 정한 메리는 우선 각 섬에서 최대 며칠씩 머물 수 있는지 알아본 후 놀러갈 섬을 결정하려 합니다.

지도를 나타내는 문자열 배열 maps가 매개변수로 주어질 때, 
각 섬에서 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아 return 하는 solution 함수를 완성해주세요. 
만약 지낼 수 있는 무인도가 없다면 -1을 배열에 담아 return 해주세요.

제한사항
3 ≤ maps의 길이 ≤ 100
3 ≤ maps[i]의 길이 ≤ 100
maps[i]는 'X' 또는 1 과 9 사이의 자연수로 이루어진 문자열입니다.
지도는 직사각형 형태입니다.
입출력 예
maps	result
["X591X","X1X5X","X231X", "1XXX1"]	[1, 1, 27]
["XXX","XXX","XXX"]	[-1]


*/

// 내가 제시한 정답

function solution(maps) {
  var answer = [];

  const R = maps.length; // 행, row의 길이
  const C = maps[0].length; // 열, colum

  // 방문했는지 확인하는 코드, maps와 같은 크기의 방문 확인 배열을 생성
  const visited = Array.from({ length: R }, () => Array(C).fill(false));

  const dr = [1, -1, 0, 0]; // 상, 하 탐색
  const dc = [0, 0, 1, -1]; // 좌, 우 탐색

  // 탐색 위치가 올바른지 확인
  const inRange = (r, c) => r >= 0 && r < R && c >= 0 && c < C;

  // DFS 탐색
  function dfs(r, c) {
    if (!inRange(r, c)) return 0; // 탐색 범위가 올바른지, 잘못되면 0 리턴
    if (visited[r][c]) return 0; // 이미 방문했는지, 방문했으면 0 리턴
    if (maps[r][c] === "X") return 0; // 해당 위치가 'X'로 되어 있는지, X면 0 리턴

    visited[r][c] = true; // 탐색 시작과 동시에 방문 했음을 확인
    let sum = Number(maps[r][c]); // 숫자로 변환 (값은 string으로 오기 때문)

    for (let k = 0; k < 4; k++) {
      // 상, 하, 좌, 우 탐색, 섬을 탐색
      const nr = r + dr[k];
      const nc = c + dc[k];
      sum += dfs(nr, nc); // 재귀 함수로 숫자가 아닌 값은 0, 탐색이 종료되면  sum 값 리턴
    }
    return sum;
  }
  for (let r = 0; r < R; r++) {
    // 모든 칸을 전부 방문, 전체 섬이 몇갠지를 탐색
    for (let c = 0; c < C; c++) {
      if (!visited[r][c] && maps[r][c] !== "X") {
        const islandSum = dfs(r, c);
        if (islandSum > 0) answer.push(islandSum);
      }
    }
  }
  // 값이 0이면 -1 리턴, 배열 값을 오름차순으로 정렬
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

// 모든 코드는 이해하고 주석을 달아서 설명할 것
// 할 수 있는 데까지 최소한의 코드와 복잡도를 생각하고 작성할 것
// 이해하지 못할 경우 AI의 도움을 받아 코드를 작성하고 코드 리뷰를 진행 한 뒤 다시 문제를 풀어볼 것

// 코드 리뷰 때 인상 깊었던 코드

// 가장 간결하고 이해하기 쉬운 코드를 가져올 것
// 코드를 읽고 이해한 뒤 주석을 달아 설명을 작성할 것

function solution(maps) {
  const arrMap = maps.map((string) => string.split("")); // 2차원 문자 배열로 변환
  const rowLength = arrMap.length - 1; // <= 기호를 사용하기 위해 -1
  const columnLength = arrMap[0].length - 1; // 위와 같음
  const dRow = [1, 0, -1, 0]; // 상 하 방향
  const dCol = [0, 1, 0, -1]; // 좌 우 방향
  const result = [];

  const bfs = (row, col, count) => {
    if (row > rowLength || col > columnLength || row < 0 || col < 0) {
      return count; // 범위 밖일 때 count 리턴
    }
    if (arrMap[row][col] === "X") {
      return count; // arrMap이 "X"일 때 count 리턴
    }

    count += Number(arrMap[row][col]); // 섬일 경우 섬의 숫자를 합함
    arrMap[row][col] = "X"; // 해당 위치를 X로 치환

    for (let i = 0; i < 4; i++) {
      count = bfs(row + dRow[i], col + dCol[i], count); //재귀 함수, 상 하 좌 우 탐색하여 탐색이 끝날 때 까지 반복
    }

    return count;
  };

  for (let i = 0; i <= rowLength; i++) {
    // 섬의 갯수를 탐색
    for (let j = 0; j <= columnLength; j++) {
      if (arrMap[i][j] === "X") {
        continue;
      }
      result.push(bfs(i, j, 0)); // result의 값을 배열에 push
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1]; // 해당 값을 오름 차순으로 정렬
}
