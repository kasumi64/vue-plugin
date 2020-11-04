import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		sidebar: {
			namespaced: true, // { root: true }
			state: {
				active: 'active'
			},
			mutations: {},
			actions: {}
		}
	}
});
