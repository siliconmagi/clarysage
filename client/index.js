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

/* Router */
Vue.use(VueRouter);
let router = new VueRouter({
	mode: 'hash',
	base: window.location.pathname,
	routes
});
sync(store, router)

let app = Vue.component('app', App);
app = new app({
	el: '#app',
	store,
	router
});

router.beforeEach((to, from, next) => {
	Vue.nextTick(() => {
		let mainContent = document.querySelector('.main-content');
		if (mainContent) {
			mainContent.scrollTop = 0;
		}
		app.closeSidenav();
		next();
	});
});

