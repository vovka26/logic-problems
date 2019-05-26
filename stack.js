// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }
//     peek() {
//         return this.top;
//     }
//     push(value) {
//         const node = new Node(value);
//         if (this.length === 0) {
//             this.bottom = node;
//             this.top = node;
//         } else {
//             node.next = this.peek();
//             this.top = node;
//         }
//         this.length++;
//         return this;
//     }
//     pop() {
//         if (this.length === 0) {
//             return null;
//         }
//         const removedNode = this.peek();
//         if (this.length === 1) {
//             this.bottom = null;
//         }
//         this.top = this.peek().next
//         this.length--;
//         return removedNode;
//     }
//     isEmpty() {
//         return this.length === 0;
//     }
// }

// stack implementation using arrays
class Stack {
    constructor(){
      this.stack = [];
    }
    peek() {
      return this.stack[this.stack.length -1];
    }
    push(value){
      return this.stack.push(value);
    }
    pop(){
      return this.stack.pop();
    }
    isEmpty(){
      return this.stack.length === 0;
    }
  }

//   const myStack = new Stack();
//   myStack.push('Discord');
//   myStack.push('Udemy');
//   myStack.push('google');
//   myStack.peek()
  // myStack.pop()
  // myStack.pop()
  // myStack.pop()
  // myStack.isEmpty()



  //Discord
  //Udemy
  //google
