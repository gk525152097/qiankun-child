import { deepClone } from './deepClone'
/**
 * list transform to tree
 * @param list
 * @returns {*}
 */
// sort
function description (a, b) {
  return a.parentId - b.parentId
}

function transform (_list) {
  if (!_list) return

  // 数据克隆
  const list = deepClone(_list)

  // parentId正序
  list.sort(description)

  let midObj = {}

  for (let i = list.length - 1; i >= 0; i--) {
    let nowPid = list[i].parentId || 0
    let nowId = list[i].id
    // 建立当前节点的父节点的children 数组
    if (midObj[nowPid]) {
      midObj[nowPid].push(list[i])
    } else {
      midObj[nowPid] = []
      midObj[nowPid].push(list[i])
    }
    // 将children 放入合适的位置 使用浅拷贝方法把childrenList直接复制到children属性上
    if (midObj[nowId]) {
      list[i].children = midObj[nowId]
      delete midObj[nowId]
    }
  }

  // 将minObj里的数组取出来
  // Object.entries 将对象转换map 【key, value】
  // 故两次判定是否为数组
  let tree = []
  if (Array.isArray(Object.entries(midObj))) {
    if (Array.isArray(Object.entries(midObj)[0])) {
      tree = Object.entries(midObj)[0][1]
    }
  }

  return tree
}

export default transform
