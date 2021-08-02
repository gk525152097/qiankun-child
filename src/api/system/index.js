const menuList = [
  { id: 7, parentId: 0, name: '角色管理', rang: 4, icon: 'el-icon-user-solid', path: '/roleManage', component: 'views/roleManage', hidden: false, redirect: '' },
  { id: 2, parentId: 0, name: '菜单管理', rang: 1, icon: 'el-icon-menu', path: '/menuManage*', component: 'views/menuManage', hidden: false, redirect: '' },
  { id: 3, parentId: 0, name: '功能管理', rang: 2, icon: 'el-icon-aim', path: '/functionManage', component: 'views/functionManage', hidden: false, redirect: '' },
  { id: 4, parentId: 0, name: '配置管理', rang: 3, icon: 'el-icon-s-tools', path: '/configurationManage', component: 'views/configurationManage', hidden: false, redirect: '' },
  { id: 5, parentId: 0, name: '权限管理', rang: 5, icon: 'el-icon-s-claim', path: '/authorityManage', component: 'views/authorityManage', hidden: false, redirect: '' },
  { id: 6, parentId: 0, name: '用户管理', rang: 6, icon: 'el-icon-user', path: '/userManage', component: 'views/userManage', hidden: false, redirect: '' },
  { id: 6, parentId: 0, name: '测试页面', rang: 7, icon: 'el-icon-user', path: '/testManage', component: 'views/testManage', hidden: false, redirect: '' },
  { id: 8, parentId: 0, name: '一级试菜单', rang: 8, icon: 'el-icon-help', path: '/testPage1', component: 'views/test', hidden: false, redirect: '' },
  { id: 9, parentId: 8, name: '二级试菜单', rang: 9, icon: '', path: '/testPage2', component: 'views/test', hidden: false, redirect: '' },
  { id: 10, parentId: 9, name: '三级级菜单2', rang: 10, icon: '', path: '/testPage3', component: 'views/test', hidden: false, redirect: '' }
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
