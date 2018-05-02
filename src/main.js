import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App'
import router from './router'
import Api from './api'

Vue.use(iView);
Vue.prototype.$api = Api
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
