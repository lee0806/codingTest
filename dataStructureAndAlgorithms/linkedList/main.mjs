import { Node, LinkedList } from "./linkedList.mjs"; // Node, LinkedList import

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();

console.log("data 삽입");

list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);

list.printAll();

console.log("test clear");
list.clear();
list.printAll();

console.log("마지막 값 삽입");

list.insertLast(10);
list.insertLast(20);
list.insertLast(30);
list.insertLast(40);

list.printAll();

console.log("데이터 삭제");
list.deleteAt(1);

list.printAll();

console.log("getNodeAt 테스트");
let node = list.getNodeAt(2);
console.log(node.data);
