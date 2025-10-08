//in javascript depth of recursion is a maximal amount of nested calls(saved returns in function)
//Here it is is 10000 calls, if it gets,more the engine will return an error.
//There some optiimzations that can help with nested calls, it is called "tail calls optimization"
//However this optimization is not supported everywhere:
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
//here the depth of recicursion is three, because there are three value that are saved in stack:
/* 
x=2,n=1 =>doesnt multiply because befare that if satement worked and retunrned two,it takes out two and moves to one column below to multiply 
x=2,n=2 =>2(This is two that was returned from the toppest stack) * 2(this is two that is an argument of pow) = 4
x=2,n=3 =>brings four from the top and multiplies by two 4*2=8, and returns the answer
*/