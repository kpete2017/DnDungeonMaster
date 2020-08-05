import Vue from 'vue'
import App from './App.vue'
import drag from "v-drag"


Vue.config.productionTip = false

Vue.use(drag)

new Vue({
  render: h => h(App),
}).$mount('#app')
