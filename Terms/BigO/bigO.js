/*Big O is a measurement for algorithms
There are several types of Big O
1)O(n)=>n menas arr.length
2)O(log2 n)=>log2 is a reverse of a cube
3)O(n * log2 n)
4)O(n*n)
5)O(!n)
*/
//Examples:
let arr = [1,2,3,4,5]
function findFive(arr) {
  for(let i =0;i<arr.length;i++){
    if(arr[i] === 5){
      return true
    }
  }
  return false
}
console.log(findFive(arr));
//the examle below is O(n) because it searches each element one by one 
//Reminder:function can return only once that is why if the if statement is true the returns below will not be accepted

// The question comes: what if the number is located in the beginning, will that O(1) or O(n)
//Answer: O(n) because O() measures the algorthm in worst scenario

// The O(log2 n) will be in the next file