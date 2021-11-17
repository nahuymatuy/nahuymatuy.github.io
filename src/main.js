import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import pdf from 'vue-pdf'
Vue.use(pdf)

new Vue({
  pdf,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')