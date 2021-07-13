/**
 * 深度克隆
 * 必有原因 es6 {...obj} [...list]方法只适用于单层数据 多层数据不生效
 * @param {*} arr // 深度克隆对象
 */
export function deepClone (arr) {
  let copyArr = arr ? (arr.constructor === Array ? [] : {}) : null // 判断是数组还是对象
  for (let i in arr) {
    if (typeof arr[i] === 'object') { // 判断是值类型还是引用类型
      copyArr[i] = deepClone(arr[i]) // 引用类型的话进行递归操作
    } else {
      copyArr[i] = arr[i] // 值类型直接赋值
    }
  }
  return copyArr
}
