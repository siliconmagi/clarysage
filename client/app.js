import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.material.registerTheme({
  default: {
      primary: 'green',
      accent: 'red'
    },
  green: {
      primary: 'green',
      accent: 'pink'
    },
  orange: {
      primary: 'orange',
      accent: 'green'
    },
})

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
