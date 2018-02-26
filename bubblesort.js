function bubbleSort(arr) {

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

