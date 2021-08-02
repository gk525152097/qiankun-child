let list = [
  { id: 0, account: 'wxl', username: 'wxl', role: '系统管理员' },
  { id: 1, account: 'wxl2', username: 'wxl2', role: '系统管理员2' },
  { id: 2, account: 'wxl3', username: 'wxl3', role: '系统管理员3' },
  { id: 3, account: 'wxl4', username: 'wxl4', role: '系统管理员4' }
]

// 应用查询
export function handlePageData (params) {
  return Promise.resolve(list)
}

// 应用删除
export function handleDelete (params) {
  list = list.filter(item => item.id !== params.id)
  return Promise.resolve(list)
}

// 应用信息
export function handleAdd (params) {
  console.log(params)
  list.push({
    ...params,
    id: new Date().valueOf()
  })
  return Promise.resolve(list)
}

// 应用修改
export function handleModify (params) {
  list = list.map(item => {
    if (item.id === params.id) {
      return {
        ...item,
        ...params
      }
    }
    return item
  })
  return Promise.resolve(list)
}
