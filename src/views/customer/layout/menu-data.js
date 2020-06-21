export default [
   {
      icon: 'ios-folder',
      name: 'shipping',
      title: '出货信息表',
      children: [
        {
          icon: 'ios-folder-outline',
          title: '出货信息表',
          route: '/customer/table/shipping/list'
        }
      ]
    },
    {
      icon: 'ios-folder',
      name: 'personal',
      title: '用户信息',
      children: [
        {
          icon: 'ios-folder-outline',
          title: '个人信息',
          route: '/customer/person/list'
        },
        {
          icon: 'ios-folder-outline',
          title: '个人信息修改',
          route: '/customer/person/edit'
        }
      ]
    },
]
