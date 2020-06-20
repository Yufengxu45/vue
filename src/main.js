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
