///////////////////////////////////////////////Recursion//////////////////////////////////////////////////////////
//Recursion is an alternative of cicles
//Recursive functions consist of two parts
//1) Base of recursion(the part that stops the recursion)
//2)Recursive step(the part where the recursion starts working)
//Here is the example:
function allNumbers(num) {
  if(num == 1){
    return 1
  }else{
    return num + allNumbers(num - 1)
  }
}
console.log(allNumbers(5));
//or
function fact(num) {
  if(num == 1){
    return 1
  }else{
    return num * fact(num - 1)
  }
}

console.log(fact(5));
//the recursion will work untill the base part(if ==1)comes true, and returns 1(because function returns only once) and there is no purpose of reading the continuation
//all the results of recursion will be gathered into a stack (explanation will be continued after i explain stack)
///////////////////////////////////////////////Stack///////////////////////////////////////////////////////////////
//We meet stack even in the real life, for example a tack of documents that need to sign, the documents are added to the top and we sign them by taking the toppest one, signing and putting to the other place, the same with stack of recursion: 3 comes and goes to the end, num-1(3-1), two comes, and comes to the top of 3, but when on comes true statement works and stops resucrsion by returning 1. Now the stack looks like this:
/*
[third function(stopped recursion by returning one) =>1]
[second function => 2]
[first function => 3]
and then the function starts working in the opposite order
engine takes the value from the beginning and saves the returned value:
1
[second function => 2]
[first function => 3]
then
1
2
[first function => 3]
and then 
1
2
3
fact(1) = 1
fact(2) = 2 * 1 = 2
fact(3) = 3 * 2 = 6
*/
//1)
function sum(x) {
  if(x == 0){
    return 0
  }
  else{
    return x+sum(x-1)
  }
}

console.log(sum(5));
//2)
function sum2(x) {
  if(x == 1){
    return 1
  }
  else{
    return x*sum2(x-1)
  }
}
console.log(sum2(5));
//3)
function countDown(n) {
  if(n == 1){
    return 1
  }
  console.log(n);
    return countDown(n-1)
  
}
console.log(countDown(10));
//4)
function range(a,b) {
  
  if(a > b){
    return [];
  }else{
    return [a,...range(a+1,b)]
  }
}
console.log(range(10,20));
