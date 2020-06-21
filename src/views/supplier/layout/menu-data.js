export default [
   {
      icon: 'ios-folder',
      name: 'purchase',
      title: '进货信息表',
      children: [
        {
          icon: 'ios-folder-outline',
          title: '进货信息表',
          route: '/supplier/table/supplier/list'
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
          route: '/supplier/person/list'
        },
        {
          icon: 'ios-folder-outline',
          title: '个人信息修改',
          route: '/supplier/person/edit'
        }
      ]
    },
]
