class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// const node = new Node(20);
// console.log(node);

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      // const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // print() {
  //   let current = this.head;
  //   while (current != null) {
  //     console.log(current.value);
  //     current = current.next;
  //   }
  // }
  [Symbol.iterator]() {
    let current = this.head;

    return {
      next() {
        if (current === null) {
          return {
            value: undefined,
            done: true,
          };
        }

        const value = current.value;
        current = current.next;

        return {
          value: value,
          done: false,
        };
      },
    };
  }
}
const list = new LinkList();
list.append(30);
list.append(50);
list.append(70);
list.append(80);
list.append(90);
list.append(100);

// console.log(list.head.value);
// console.log(list.head.next.value);
// console.log(list.tail.value);

// console.log(list);
// console.log(typeof list);

// let current = list.head;

// while (current !== null) {
//   console.log(current.value);
//   current = current.next;
// }
// list.print();
console.log(typeof list[Symbol.iterator]);
// const iterator = list[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (const value of list) {
  console.log(value);
}
