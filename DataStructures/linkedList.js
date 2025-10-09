////////////////////////////////////////////////Linked list/////////////////////////////////////////////////////////
//Linked list are the alternatives of the arrays, and there are pros and cons of it
//Pros:
//In the memory linked lists can be place everywhere because each elemnet will have the link for the next element of the list, it is like going to the cinema with friends and saying:"We came here to watch films tonight so we dont need to care where we are going to sit, so lets just all spread all over the cinema, we dont need to waste our time by finding the place for four of us", while arrays in the memory the always need to take n consective free places, so it means they all need to be next to eah other. This is the first plus of linked list
//Second plus is that to delete the element for example from the center we will have to touch two elemnts:
//First:the element we want to delete,then,the element above(to change the address from n to n+1)
//However in arrays we need to replce to n-1 index all the elements to right of the deleting element
//The same with adding
//Cons
//There is an only minus of linked list and it is getting access for the element, in arrays we can get by index, but in linked list we need to use all the elements left to the element we want to get:
//element1(has link to element2) => element2(has link to element3)=> element3, so to get element three we used two elements
//In asymptonic notation it lloks like this:
/*          Linked List     Massive
  Reading    O(n)            O(1)
  Deleting   O(1)            O(n)
  Adding     O(1)            O(n)
*/
//However arrays are used more often because reading the element is needed more often
//So this is how it looks:
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//These all could look like this:
/*let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
*/
//Getting access
console.log(list.value);//1
console.log(list.next.value);//2
console.log(list.next.next.value);//3

//Adding
console.log(list);//{ value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }
list = { value: "new item", next: list };
console.log(list);
 /*{
  value: 'new item',
  next: { value: 1, next: { value: 2, next: [Object] } }
}
  */
let newNode = { value: 1.5, next: null };


newNode.next = list.next.next; // новый узел указывает на бывший второй элемент
list.next.next = newNode;      // первый элемент теперь указывает на новый узел

//Connecting and splitting
//We can reconnect lists like this:
let mainList = {
  value: 1,
  next:{
    value:2,
    next:{
      value:3,
      next:null
    }
  }
}

secondPart = mainList.next.next
mainList.next.next = null
console.log(mainList);//{ value: 1, next: { value: 2, next: null } }
console.log(secondPart);//{ value: 3, next: null }
//We can also connect
mainList.next.next = secondPart
console.log(mainList);//{ value: 1, next: { value: 2, next: { value: 3, next: null } } } (came back)

//Deleting
// mainList.next = mainList.next.next
// console.log(mainList);//{ value: 1, next: { value: 3, next: null } }

//Adding to the end
//We can use while
let cur = mainList
while(cur.next !== null){
  cur = cur.next
}
let newa = {value:4,next:null}
cur.next = newa
console.log(mainList.next.next.next);//{value:4,next:null}

///
let list2 = {
  value: 1,
  next:{
    value:2,
    next:{
      value:3,
      next:null
    }
  }
}
 list2 = {value:"new val",next:list2}

console.log(list2);/*{
  value: 'new val',
  next: { value: 1, next: { value: 2, next: [Object] } }
}
 */
// let current = head;
// while (current.next !== null) {
//   current = current.next;
// }
// current.next = { value: "end", next: null };
// console.log(head.next.next);
// //Note: to change the head part of linked list we create a new variable
// let mid = { value: "middle", next: null };

// // 1️⃣ сохрани ссылку на старый следующий узел
// let temp = head.next.next;  // (2)

// // 2️⃣ вставь mid между head и temp
// head.next.next = mid;
// mid.next = temp;
// console.log(head);
