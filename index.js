const merge = (left, right) => {
  const len = left.length + right.length, res = []
  left.push(Number.MAX_VALUE)
  right.push(Number.MAX_VALUE)
  let i = 0, l = 0, r = 0
  while (i < len) {
    res[i++] = left[l] < right[r] ? left[l++] : right[r++]
  }
  return res
}

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr
  }
  const mid = Math.floor(arr.length >> 1)
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)))
}

console.log(mergeSort([81, 84, 83, 27, 85, 90, 67, 72]))
