class Node {
  // 초기 생성값
  constructor(data, next = null) {
    this.data = data; // 값을 저장
    this.next = next; // 다음 노드 주소를 가리킴
  }
}

class LinkedList {
  constructor() {
    this.head = null; // 첫번째 노드
    this.count = 0; // 노드의 갯수
  }

  // 모든 요소 출력
  printAll() {
    let currentNode = this.head; // 첫번째 노드 부터
    let text = ""; // 출력할 문자열

    while (currentNode != null) {
      // 마지막 노드가 아닐때까지
      text += currentNode.data + " "; // 문자열에 데이터를 추가
      currentNode = currentNode.next; // 다음 노드를 가리킴
    }
    console.log(text); // 모든 노드의 데이터를 출력
  }

  // 모든 노드 삭제
  // 메모리의 값들은 참조가 끊기면 자동으로 해제됨
  clear() {
    this.head = null; // 첫번째 노드를 null로 지정
    this.count = 0; // 노드의 갯수를 0으로 초기화
  }

  /**
   * 원하는 인덱스에 값을 삽입하는 함수
   * @param {*} index 원하는 위치
   * @param {*} data  넣을 데이터
   */
  insertAt(index, data) {
    if (index > this.count || index < 0) {
      // 인덱스가 노드의 갯수를 넘었거나, 인덱스가 0보다 작으면
      throw new Error("범위를 넘었음;;"); // 오류를 배출
    }

    let newNode = new Node(data); // 새로운 노드를 만들고

    if (index == 0) {
      // 맨 앞에 삽입할땐
      newNode.next = this.head; // 노드의 다음 노드를 현재 노드로 지정
      this.head = newNode; // 맨앞 노드를 새로운 노드로 지정
    } else {
      // 맨앞이 아닌 중간에 삽입할때
      let currentNode = this.head; // 첫 노드 부터 시작
      for (let i = 0; i < index - 1; i++) {
        // 원하는 인덱스가 나올때까지 다음 노드로 이동
        currentNode = currentNode.next;
      }
      // 원하는 노드가 나왔을때
      newNode.next = currentNode.next; // 새로운 노드의 다음 노드를 현재 노드의 다음 노드로 지정하고
      currentNode.next = newNode; // 현재 노드의 다음 노드를 새로운 노드로 바꿈
    }
    this.count++; // 노드의 갯수를 증가
  }

  insertLast(data) {
    this.insertAt(this.count, data); // 노드의 갯수 만큼의 위치에 데이터를 삽입
  }

  deleteLast() {
    return this.deleteAt(this.count - 1); // 마지막 노드 삭제
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘었음;;");
    }
    let currentNode = this.head;

    if (index == 0) {
      let deleteNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deletedNode;
    }
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘었음;;");
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

export { LinkedList };
export { Node };
