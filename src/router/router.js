// import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/admin/layout/index.vue'
import clayout from '@/views/customer/layout/index.vue'
import slayout from '@/views/supplier/layout/index.vue'
import login from '@/views/login.vue'


// Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/',
            name: 'login',
            redirect: '/login',
            meta: {
                title: '用户登录'
            },
            component: login,
            children: [
              {
              path: 'login',
              meta: {
                  title: '用户登录'
              },
              component: () => import('@/views/login.vue')
              }
            ]
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: '用户注册'
        },
        component: () => import('@/views/register.vue')
    },
  ]


//实例化vue的时候只挂载constantRouter
export default new Router({
    routes: constantRouterMap
  });


// //异步挂载的路由
// //动态需要根据权限加载的路由表 
// export const asyncRouterMap = [
//     {
//       path: '/permission',
//       component: Layout,
//       name: '权限测试',
//       meta: { role: ['admin','super_editor'] }, //页面需要的权限
//       children: [
//       { 
//         path: 'index',
//         component: Permission,
//         name: '权限测试页',
//         meta: { role: ['admin','super_editor'] }  //页面需要的权限
//       }]
//     },
//     { path: '*', redirect: '/404', hidden: true }
//   ];
  


//异步挂载的路由
//动态需要根据权限加载的路由表 
export const asyncRouterMap = [
    {
        path: '/table',
        name: 'shipping',
        meta: {
            title: '信息表', role: ['admin']
        },
        component: layout,
        children: [
            {
            path: '/admin/table/shipping/list',
            meta: {
                title: '出货信息表', role: ['admin']
            },
            component: () => import('@/views/admin/table/shipping/list.vue')
            },
            {
              path: '/admin/table/purchase/list',
              meta: {
                  title: '进货信息表', role: ['admin']
              },
              component: () => import('@/views/admin/table/purchase/list.vue')
            },
            {
              path: '/admin/table/product/list',
              meta: {
                  title: '产品信息表', role: ['admin']
              },
              component: () => import('@/views/admin/table/product/list.vue')
            }
        ]
      },
      {
        path: '/user',
        name: 'user',
        meta: {
            title: '用户信息表'
        },
        component: layout,
        children: [
            {
            path: '/admin/user/admin/list',
            meta: {
                title: '管理员信息', role: ['admin']
            },
            component: () => import('@/views/admin/user/admin/list.vue')
            },
            {
              path: '/admin/user/customer/list',
              meta: {
                  title: '客户信息', role: ['admin']
              },
              component: () => import('@/views/admin/user/customer/list.vue')
            },
            {
              path: '/admin/user/supplier/list',
              meta: {
                  title: '供应商信息', role: ['admin']
              },
              component: () => import('@/views/admin/user/supplier/list.vue')
            },
            {
              path: '/admin/user/addAdmin',
              meta: {
                  title: '添加管理员', role: ['admin']
              },
              component: () => import('@/views/admin/user/addAdmin.vue')
            },
            {
              path: '/admin/user/changepwd',
              meta: {
                  title: '密码更改', role: ['admin']
              },
              component: () => import('@/views/admin/user/changepwd.vue')
            },
        ]
      },


      {
        path: '/customer-table',
        name: 'customer-shipping',
        meta: {
            title: '客户', role: ['customer']
        },
        component: clayout,
        children: [
          {
            path: '/customer/table/shipping/list',
            meta:{
              title: '客户出货信息表', role: ['customer']
            },
            component: ()=> import('@/views/customer/table/list.vue')
          },
          {
            path: '/customer/table/shipping/edit',
            meta:{
              title: '客户出货信息编辑表', role: ['customer']
            },
            component: ()=> import('@/views/customer/table/edit.vue')
          }
        ]
      },
      {
        path: '/customer-person',
        name: 'customer-person',
        meta: {
            title: '客户个人信息', role: ['customer']
        },
        component: clayout,
        children: [
          {
            path: '/customer/person/list',
            meta:{
              title: '客户个人信息', role: ['customer']
            },
            component: ()=> import('@/views/customer/person/list.vue')
          },
          {
            path: '/customer/person/edit',
            meta:{
              title: '客户个人信息编辑表', role: ['customer']
            },
            component: ()=> import('@/views/customer/person/edit.vue')
          },
          {
            path: '/customer/person/changepwd',
            meta:{
              title: '客户个人信息编辑表', role: ['customer']
            },
            component: ()=> import('@/views/customer/person/changepwd.vue')
          }
        ]
      },

      
      {
        path: '/supplier-table',
        name: 'supplier-purchase',
        meta: {
            title: '供应商', role: ['supplier']
        },
        component: slayout,
        children: [
          {
            path: '/supplier/table/shipping/list',
            meta:{
              title: '供应商进货信息表', role: ['supplier']
            },
            component: ()=> import('@/views/supplier/table/list.vue')
          },
          {
            path: '/supplier/table/shipping/edit',
            meta:{
              title: '供应商进货信息编辑表', role: ['supplier']
            },
            component: ()=> import('@/views/supplier/table/edit.vue')
          }
        ]
      },
      {
        path: '/supplier-person',
        name: 'supplier-person',
        meta: {
            title: '客户个人信息', role: ['supplier']
        },
        component: slayout,
        children: [
          {
            path: '/supplier/person/list',
            meta:{
              title: '客户个人信息', role: ['supplier']
            },
            component: ()=> import('@/views/supplier/person/list.vue')
          },
          {
            path: '/supplier/person/edit',
            meta:{
              title: '客户个人信息编辑表', role: ['supplier']
            },
            component: ()=> import('@/views/supplier/person/edit.vue')
          },
          {
            path: '/supplier/person/changepwd',
            meta:{
              title: '密码修改', role: ['supplier']
            },
            component: ()=> import('@/views/supplier/person/changepwd.vue')
          }
        ]
      },
    { path: '*', redirect: '/404', hidden: true }
  ]


