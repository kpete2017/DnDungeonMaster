import Vue from 'vue'
import App from './App.vue'
import drag from "v-drag"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

Vue.use(drag)

new Vue({
  render: h => h(App),
}).$mount('#app')
