export default [
  {
    icon: 'ios-folder',
    name: 'shipping',
    title: '信息表',
    children: [
      {
        icon: 'ios-folder-outline',
        title: '出货信息列表',
        route: '/admin/table/shipping/list'
      },
      {
        icon: 'ios-folder-outline',
        title: '进货信息列表',
        route: '/admin/table/purchase/list'
      },
      {
        icon: 'ios-folder-outline',
        title: '产品信息列表',
        route: '/admin/table/product/list'
      }
    ]
  },
  {
    icon: 'ios-people',
    name: 'user',
    title: '用户信息',
    children: [
      {
        icon: 'ios-person',
        title: '管理员信息',
        route: '/admin/user/admin/list'
      },
      {
        icon: 'ios-person',
        title: '客户信息',
        route: '/admin/user/customer/list'
      },
      {
        icon: 'ios-person',
        title: '供应商信息',
        route: '/admin/user/supplier/list'
      }
    ]
  }
  /*{
    icon: 'ios-albums',
    name: 'student',
    title: '学生管理',
    children: [
      {
        icon: 'ios-albums',
        title: '学生信息列表',
        route: '/student/list'
      }
    ]
  }*/
]
