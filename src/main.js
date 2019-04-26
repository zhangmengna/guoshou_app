// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import Header from './components/Header.vue'
import reqAllUrl from './globalurl.js'
import axios from 'axios'

Vue.component('Header',Header)
Vue.use(Antd)
Vue.config.productionTip = false
Vue.prototype.axios = axios // 使用this.axios()
Vue.prototype.globalUrl = reqAllUrl
Vue.prototype.goback = function () {
  alert("123")
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
