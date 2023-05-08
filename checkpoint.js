function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j-1]) {
      // swap arr[j] and arr[j-1]
      let temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
      j--;
    }
  }
  return arr;
}

// example usage
let arr = [4, 3, 2, 10, 12, 1, 5, 6];
let sortedArr = insertionSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 10, 12]
