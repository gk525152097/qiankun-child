const menuList = [
  { id: 1, parentId: 0, title: '应用A角色管理', name: '应用A角色管理', rang: 1, icon: 'el-icon-user-solid', path: '/roleManage', component: 'views/roleManage', hidden: false, redirect: '', meta: { keepAlive: true } },
  { id: 2, parentId: 0, title: '应用A菜单管理', name: '应用A菜单管理', rang: 2, icon: 'el-icon-menu', path: '/menuManage', component: 'views/menuManage', hidden: false, redirect: '', meta: { keepAlive: true } },
  { id: 3, parentId: 0, title: '应用A3', name: '应用A3', rang: 3, icon: 'el-icon-menu', path: '/menuManage2', component: 'views/menuManage', hidden: false, redirect: '', meta: { keepAlive: true } },
  { id: 4, parentId: 3, title: '测试', name: '测试', rang: 3, icon: 'el-icon-menu', path: '/menuManage2/test', component: 'views/menuManage', hidden: false, redirect: '', meta: { keepAlive: true } }
]

const userInfo = {
  username: '子应用'
}

// 登陆接口
export function handleLogin (params) {
  return Promise.resolve(userInfo)
}

// 获取菜单信息
export function handleAppMenu (params) {
  return Promise.resolve(menuList)
}
