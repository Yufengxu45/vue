import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import login from '@/views/login.vue'
import layout from '@/views/admin/layout/index.vue'
import clayout from '@/views/customer/layout/index.vue'
import slayout from '@/views/supplier/layout/index.vue'

Vue.use(Router)

const router = new Router({
    routes: [
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
        {
            path: '*',
            component: () => import('@/views/not-found.vue')
        },
      
        {
          path: '/table',
          name: 'shipping',
          meta: {
              title: '信息表'
          },
          component: layout,
          children: [
              {
              path: '/admin/table/shipping/list',
              meta: {
                  title: '出货信息表'
              },
              component: () => import('@/views/admin/table/shipping/list.vue')
              },
              {
                path: '/admin/table/purchase/list',
                meta: {
                    title: '进货信息表'
                },
                component: () => import('@/views/admin/table/purchase/list.vue')
              },
              {
                path: '/admin/table/product/list',
                meta: {
                    title: '产品信息表'
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
                  title: '管理员信息'
              },
              component: () => import('@/views/admin/user/admin/list.vue')
              },
              {
                path: '/admin/user/customer/list',
                meta: {
                    title: '客户信息'
                },
                component: () => import('@/views/admin/user/customer/list.vue')
              },
              {
                path: '/admin/user/supplier/list',
                meta: {
                    title: '供应商信息'
                },
                component: () => import('@/views/admin/user/supplier/list.vue')
              },
              {
                path: '/admin/user/addAdmin',
                meta: {
                    title: '添加管理员'
                },
                component: () => import('@/views/admin/user/addAdmin.vue')
              },
              {
                path: '/admin/user/changepwd',
                meta: {
                    title: '密码更改'
                },
                component: () => import('@/views/admin/user/changepwd.vue')
              },
          ]
        },


        {
          path: '/customer-table',
          name: 'customer-shipping',
          meta: {
              title: '客户'
          },
          component: clayout,
          children: [
            {
              path: '/customer/table/shipping/list',
              meta:{
                title: '客户出货信息表'
              },
              component: ()=> import('@/views/customer/table/list.vue')
            },
            {
              path: '/customer/table/shipping/edit',
              meta:{
                title: '客户出货信息编辑表'
              },
              component: ()=> import('@/views/customer/table/edit.vue')
            }
          ]
        },
        {
          path: '/customer-person',
          name: 'customer-person',
          meta: {
              title: '客户个人信息'
          },
          component: clayout,
          children: [
            {
              path: '/customer/person/list',
              meta:{
                title: '客户个人信息'
              },
              component: ()=> import('@/views/customer/person/list.vue')
            },
            {
              path: '/customer/person/edit',
              meta:{
                title: '客户个人信息编辑表'
              },
              component: ()=> import('@/views/customer/person/edit.vue')
            },
            {
              path: '/customer/person/changepwd',
              meta:{
                title: '客户个人信息编辑表'
              },
              component: ()=> import('@/views/customer/person/changepwd.vue')
            }
          ]
        },

        
        {
          path: '/supplier-table',
          name: 'supplier-purchase',
          meta: {
              title: '供应商'
          },
          component: slayout,
          children: [
            {
              path: '/supplier/table/shipping/list',
              meta:{
                title: '供应商进货信息表'
              },
              component: ()=> import('@/views/supplier/table/list.vue')
            },
            {
              path: '/supplier/table/shipping/edit',
              meta:{
                title: '供应商进货信息编辑表'
              },
              component: ()=> import('@/views/supplier/table/edit.vue')
            }
          ]
        },
        {
          path: '/supplier-person',
          name: 'supplier-person',
          meta: {
              title: '客户个人信息'
          },
          component: slayout,
          children: [
            {
              path: '/supplier/person/list',
              meta:{
                title: '客户个人信息'
              },
              component: ()=> import('@/views/supplier/person/list.vue')
            },
            {
              path: '/supplier/person/edit',
              meta:{
                title: '客户个人信息编辑表'
              },
              component: ()=> import('@/views/supplier/person/edit.vue')
            },
            {
              path: '/supplier/person/changepwd',
              meta:{
                title: '密码修改'
              },
              component: ()=> import('@/views/supplier/person/changepwd.vue')
            }
          ]
        }
    ]
})



router.beforeEach((to, from, next) => {

    // 设置页面的标题
    if (to.meta.title) {
      document.title = to.meta.title
    }
    
    iView.LoadingBar.start()
    next()
  })
  
  router.afterEach(() => {
    iView.LoadingBar.finish()
  })

export default router