function split(wholeArray) {
  const midPoint = wholeArray.length / 2
  const firstHalf = wholeArray.slice(0, midPoint)
  const secondHalf = wholeArray.slice(midPoint)

  return [firstHalf, secondHalf];
}

// function merge(arr1, arr2) {
//   let newArr = []
//   while (arr1.length && arr2.length){
//     if (arr1[0] < arr2[0]){
//       newArr.push(arr1.shift())
//     } else {
//       newArr.push(arr2.shift())
//     }
//   }
//   console.log('newArr', newArr)
//   if (arr1.length){
//     newArr = newArr.concat(arr1)
//   } else {
//     newArr = newArr.concat(arr2)
//   }
//   return newArr
// }

function merge(arr1, arr2) {
    let newArr = []
    let arr1Index = 0
    let arr2Index = 0
    while (arr1Index < arr1.length && arr2Index < arr2.length){
      if (arr1[arr1Index] < arr2[arr2Index]){
        newArr.push(arr1[arr1Index])
        arr1Index++
      } else {
        newArr.push(arr2[arr2Index])
        arr2Index++
      }
    }
    if (arr1.slice(arr1Index).length){
      newArr = newArr.concat(arr1.slice(arr1Index))
    } else {
      newArr = newArr.concat(arr2.slice(arr2Index))
    }
    return newArr
  }

function mergeSort(arr){
  if (arr.length <= 1){
    return arr
  } else {
    return merge(mergeSort(split(arr)[0]), mergeSort(split(arr)[1]))
  }
}