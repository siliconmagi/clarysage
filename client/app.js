/* Third Party */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

/* Configs */
import './config.js'
import App from './App'
import routes from './routes.js'
import store from './store.js'

import PageContent from './components/PageContent'

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
  base: window.location.pathname,
  routes
});

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
