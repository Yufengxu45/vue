import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import ElementUi from 'element-ui'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(ElementUi)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


//  权限实现
// router.beforeEach((to, from, next) => {
//   if (store.getters.token) { // 判断是否有token
//     if (to.path === '/login') {
//       next({ path: '/' });
//     } else {
//       if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
//         store.dispatch('GetInfo').then(res => { // 拉取info
//           const roles = res.data.role;
//           store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
//             router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//             next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//           })
//         }).catch(err => {
//           console.log(err);
//         });
//       } else {
//         next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
//       }
//     }
//   } 
//      else {
//       next('/login'); // 否则全部重定向到登录页
//     }
  
// });