function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// Пример использования:
let numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers)); // [2, 3, 4, 5, 8]
 

function sort(arr) {
  let exam = arr[0]
  let res = []
  for(let i =0;i<arr.length;i++){
    if(exam < arr[i]){
      res.push(arr[i])
      exam=arr[i]
    }
  }
  return res
}
console.log(sort(numbers));

function generateHashtag (str) {
  if(str.length < 2 || str.length > 140){
    return false
  }
  let arr = str.trim().split("").filter((item)=>item !== " ").join("").split(" ").map((item)=>item[0].toUpperCase() + item.slice(1))
  arr.unshift("#")
  
    return arr.join("")
  
}
console.log(generateHashtag("helloef vmeiew"));


let str = "ddekne  wen"
console.log(str.split(" "));
