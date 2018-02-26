function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      check(arr, j);
    }
  }
  return arr;
}

function check(arr, index) {
  if (arr[index] > arr[index + 1]) {
    swap(arr, index);
  }
}

function swap(arr, index) {
  let originalIndexVal = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = originalIndexVal;
}


