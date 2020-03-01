/**
 * @param {array} arr - 需要排序的数组
 * @param {boolean} desc - 是否降序 默认否
 * @return {array} - 已排序数组
 */
function mergeSort(arr, desc = false) {
  const merge = (leftArr, rightArr) => {
    let len = leftArr.length + rightArr.length
    let sentinel = desc ? Number.MIN_VALUE : Number.MAX_VALUE
    leftArr.push(sentinel)
    rightArr.push(sentinel)

    let i = 0, l = 0, r = 0, result = []
    while (i < len) {
      if (desc) {
        result[i++] = rightArr[r] < leftArr[l] ? leftArr[l++] : rightArr[r++]
      } else {
        result[i++] = rightArr[r] > leftArr[l] ? leftArr[l++] : rightArr[r++]
      }
    }

    return result
  }

  const recursion = arr => {
    if (arr.length < 2) {
      return arr
    }
    let mid = Math.floor(arr.length / 2)

    return merge(recursion(arr.slice(0, mid)), recursion(arr.slice(mid, arr.length)))
  }

  return recursion(arr)
}


//demo
console.log(mergeSort([81, 84, 83, 27, 85, 90, 67, 72]))
