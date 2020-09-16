import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('../views/layout/main.vue')
	},
	
	{
		path: '/', name: 'layout',
		component: () => import('../views/layout/main.vue'),
		children: [
			{
				name: 'home', path: 'home',
				component: () => import('../views/layout/home.vue')
			},
			{
				name: 'search', path: 'search',
				component: () => import('../views/favorite/search.vue')
			},
			{
				name: 'bookmark', path: 'bookmark',
				component: () => import('../views/favorite/bookmark.vue')
			},
			{
				name: 'ellipsis', path: 'ellipsis',
				component: () => import('../views/episodes/ellipsis.vue')
			},
			{
				name: 'v-slot', path: 'v-slot',
				component: () => import('../views/episodes/slot/slot-page.vue')
			},
		]
	},
	
	require('./example.js'),
]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router
