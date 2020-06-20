import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import layout from '@/views/admin/layout/index.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {
                title: '用户登录'
            },
            component: () => import('@/views/login.vue')
        },
        {
            path: '*',
            component: () => import('@/views/not-found.vue')
        },
        {
            path: '/',
            name: 'index',
            redirect: '/index',
            meta: {
                title: '学生管理系统'
            },
            component: layout,
            children: [
                {
                path: 'index',
                meta: {
                    title: '学生管理系统'
                },
                component: () => import('@/views/admin/index/index.vue')
                }
            ]
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
              }
          ]
        }
        /*{
            path: '/klass',
            name: 'klass',
            redirect: '/klass/list',
            meta: {
              title: '班级管理'
            },
            component: layout,
            children: [
              {
                path: '/klass/list',
                meta: {
                  title: '班级信息列表'
                },
                component: () => import('@/views/klass/list.vue')
              },
              {
                path: '/klass/edit',
                meta: {
                  title: '班级信息'
                },
                component: () => import('@/views/klass/form.vue')
              }
            ]
          },
          {
            path: '/student',
            name: 'student',
            redirect: '/student/list',
            meta: {
              title: '学生管理'
            },
            component: layout,
            children: [
              {
                path: '/student/list',
                meta: {
                  title: '学生信息列表'
                },
                component: () => import('@/views/student/list.vue')
              },
              {
                path: '/student/edit',
                meta: {
                  title: '学生信息'
                },
                component: () => import('@/views/student/form.vue')
              }
            ]
          }*/
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