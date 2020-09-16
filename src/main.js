import '@package/package.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router/routerCfg.js'
import store from './store'


// Vue.config.silent = true
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
