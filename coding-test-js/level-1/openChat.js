/*

문제 설명
오픈채팅방
카카오톡 오픈채팅방에서는 친구가 아닌 사람들과 대화를 할 수 있는데, 본래 닉네임이 아닌 가상의 닉네임을 사용하여 채팅방에 들어갈 수 있다.

신입사원인 김크루는 카카오톡 오픈 채팅방을 개설한 사람을 위해, 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창을 만들기로 했다.
 채팅방에 누군가 들어오면 다음 메시지가 출력된다.

"[닉네임]님이 들어왔습니다."

채팅방에서 누군가 나가면 다음 메시지가 출력된다.

"[닉네임]님이 나갔습니다."

채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.

채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
채팅방에서 닉네임을 변경한다.
닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.

예를 들어, 채팅방에 "Muzi"와 "Prodo"라는 닉네임을 사용하는 사람이 순서대로 들어오면 채팅방에는 다음과 같이 메시지가 출력된다.

"Muzi님이 들어왔습니다."
"Prodo님이 들어왔습니다."

채팅방에 있던 사람이 나가면 채팅방에는 다음과 같이 메시지가 남는다.

"Muzi님이 들어왔습니다."
"Prodo님이 들어왔습니다."
"Muzi님이 나갔습니다."

Muzi가 나간후 다시 들어올 때, Prodo 라는 닉네임으로 들어올 경우 기존에 채팅방에 남아있던 Muzi도 Prodo로 다음과 같이 변경된다.

"Prodo님이 들어왔습니다."
"Prodo님이 들어왔습니다."
"Prodo님이 나갔습니다."
"Prodo님이 들어왔습니다."

채팅방은 중복 닉네임을 허용하기 때문에, 현재 채팅방에는 Prodo라는 닉네임을 사용하는 사람이 두 명이 있다. 
이제, 채팅방에 두 번째로 들어왔던 Prodo가 Ryan으로 닉네임을 변경하면 채팅방 메시지는 다음과 같이 변경된다.

"Prodo님이 들어왔습니다."
"Ryan님이 들어왔습니다."
"Prodo님이 나갔습니다."
"Prodo님이 들어왔습니다."

채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 주어질 때, 
모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return 하도록 solution 함수를 완성하라.

제한사항
record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
다음은 record에 담긴 문자열에 대한 설명이다.
모든 유저는 [유저 아이디]로 구분한다.
[유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
[유저 아이디] 사용자가 채팅방에서 퇴장 - "Leave [유저 아이디]" (ex. "Leave uid1234")
[유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi")
첫 단어는 Enter, Leave, Change 중 하나이다.
각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.
입출력 예
record	result
["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
입출력 예 설명
입출력 예 #1
문제의 설명과 같다.

*/

// 내가 제시한 정답

function solution(record) {
  var splitRecord = record.map((line) => line.split(" ")); // record값을 2중 배열로 제작
  const nameById = {}; // 이름 최신화
  idIdx = []; // cmd, id, name 배열

  for (let i = 0; i < splitRecord.length; i++) {
    const [cmd, id, name] = splitRecord[i]; // i 번째 값 cmd, id, name을 삽입
    if (cmd === "Enter") {
      nameById[id] = name; // id에 맞는 이름 입력을 넣어줘야 조회가 됨
      idIdx.push([cmd, id]); // Enter 입력 받을 시 idIdx에 3개의 값 삽입
    }
    if (cmd === "Leave") {
      idIdx.push([cmd, id]);
    }
    if (cmd === "Change") {
      nameById[id] = name; // 이름이 변경 됐을 때 실행
    }
  }

  const output = []; // 결과값
  for (let k = 0; k < idIdx.length; k++) {
    if (idIdx[k][0] === "Enter") {
      output.push(`${nameById[idIdx[k][1]]}님이 들어왔습니다.`);
    }
    if (idIdx[k][0] === "Leave") {
      output.push(`${nameById[idIdx[k][1]]}님이 나갔습니다.`);
    }
  }
  return output;
}

// 코드 리뷰 때 인상 깊었던 코드

function solution(record) {
  const userInfo = {}; // id와 nickname 매핑 객체
  const action = []; // Enter, leave 기록 저장 배열
  const stateMapping = {
    // state에 따라 다른 메시지 문구
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((v) => {
    // forEach : 배열 안에 있는 모든 원소에 아래 함수를 실행
    const [state, id, nick] = v.split(" "); // 각 문자열을 띄어쓰기로 분리하고,
    // state, id, nick으로 분리

    if (state !== "Change") {
      // state가 Change가 아니면
      // action에 state와 id 배열 push
      action.push([state, id]);
    }

    if (nick) {
      // 만약 nick값이 존재하면
      //id nickname 매핑에 값 추가
      userInfo[id] = nick;
    }
  });

  return action.map(([state, uid]) => {
    // action에 있는 저장된 값을 출력
    return `${userInfo[uid]}${stateMapping[state]}`;
  });
}
