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

//all the recursions can be recreated by cycles
//And actually cycles are more effictive because it doesnt take too much memory on computer while recursion does the reverse, however recursion is always shorter and easier to understand

let company = { // тот же самый объект, сжатый для краткости
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 6700
//so basically here a recursion makes two iterations in a row
/*
1)company {} comes
if(Array.isArray) doesnt work so we go to else
else{let item of Object.value(department)} now department is equal to comnany {}, actually it is company{}, then it cheks its values
in company values are  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
and development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
    but they do not return any number , and sumSalaries by calling itslef splits the task in two
    sale and development
    first of all lets see what happened to sales part
    sales was an array so if(Array.IsArray(sales))=>true, and it returns the sum of all salaries
    so the part sum += sumcalaries work: sum + the returned value of the sales 1600. And sum is saved on stack because function returns stack
    sum=1600
    now sales part ended
    here comes development
    development is an object so if statement doesnt work and goes to else part
    in else part the the value of development sites and internals appear
    lets talk about site first
    so function recalls itself by giving sites as an argument and sites is an array so if statemnt works it returns a sum of salaries
    and the part where we wrote sum += sumSalaries(site) returns 3800 so here sum == 3800
    sum = 3800
    sum = 1600
    and site stopped working
    now internals 
    internal is an array so if statement works and returns 1300, so this value is added to the sum
    sum = 1300
    sum = 3800
    sum = 1600
    Note:each function has its own sum
    so in finally our problem looks like this:
    first sum = 0 + 1300(sum of internals)
    sum is changed into 1300
    then sum which now is equal to 1300 + 3800(sum of sites)
    sum is changed into 5100
    and finally sum which now is equal to 5100 + 1600(sum of sales)
    and returns 6700
    Note: 6700 will be returned only after recursion stops working so untill 6700 came recursion was still active
*/
