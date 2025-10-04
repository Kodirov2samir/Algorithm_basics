//Binary search is a first algorithm that i am going to learn O(log2 n)
//So it is good because it is much faster than linear search O(n)
//Note: binary search work only if the array is sorted
// example:
function find(arr,answer) {
  let smallest = 0
  let highest = arr.length -1
  while(smallest <= highest){
    let miidleInd = Math.floor((smallest + highest)/2)
    if(arr[miidleInd] === answer){
      return miidleInd
    }
     if(arr[miidleInd] < answer){
      smallest=miidleInd+1
    }else{
      highest=miidleInd-1
    }
  }
  return -1
}

console.log(find([1,2,3,4,5,6],5));

// Now we will discuss step by step
/*
So we save the highest and the smallest index in order to change them in the future

while statement:we give true statement untill it becomes false, we did smallest <= because again in the future we will be changing their values and in the end they may have the same value(if all the statemnts are wrong)

Then we find the middle index because the point of binary search is splitting the array into to and just throwing by not reading unneeded parts, we did Math.Floor() because not all the numbers are devided by two

first if statement:it is a beginning and the ending of the loop together because that while will be working again and again untill arr[miidleInd] < answer is true, but to understand this part we need to know next parts

second if statement: if the first didnt work comes second where if the mid is smaller than guessed we go to the right, so it means the mid index will be the first index from now on(we did +1,because we already know that mid ind is not the answer so what is the purpose of checking thing that we already know)

third statement: the reverse of second if statement but now our last will be the mid - 1

(now we know why we saved the first and secod index)

and in the end if all statements are wrong, in while smallest will be equal to highest(because we were changing them before and they both came to the same value) and while will stop working and -1 will be returned(reason why it wos not returned in correct searches is that as soon as function returns one thing it will ignore the returns below)
*/