const list = {
  head: {
    value: 90,
    next: {
      value: 10,
      next: {
        value: 89,
        next: {
          value: 100,
          next: null
        }
      }
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    let init = new Node('init');
    this.head = init;
    this.tail = init;
    this.현재노드 = undefined
    this.데이터수 = 0
  }
  get fullData() {
    let 순회용현재노드 = this.head.next;
    let s = '';
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data},`
      순회용현재노드 = 순회용현재노드.next
    }
    return JSON.parse(`[${s.slice(0, -2)}]`);
  }

  length() {
    return this.데이터수;
  }
  append(data) {
    let 새로운노드 = new Node(data)
    this.tail.next = 새로운노드;
    this.tail = 새로운노드
    this.데이터수 += 1
  }

  toString() {
    let 순회용현재노드 = this.head.next;
    let s = '';
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data},`
      순회용현재노드 = 순회용현재노드.next
    }
    return `[${s.slice(0, -2)}]`;
  }

  insert(index, data) {
    let 순회용현재노드 = this.head.next;
    for (let i = 0; i < index; i++) {
      순회용현재노드 = 순회용현재노드.next
    }
    let 새로운노드 = new Node(data)
    새로운노드.next = 순회용현재노드.next
    순회용현재노드.next = 새로운노드
    this.데이터수 += 1
  }


}

const l = new LinkedList();
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.insert(2, 1000)
console.log(
  l.length(),
  l.toString()
)