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
		component: () => import('../views/slot/slot-page.vue')
	},
	
	{
		path: '/test',
		component: () => import('../views/test.vue')
	},
	{
		path: '/slot',
		component: () => import('../views/slot/slot-page.vue')
	},
	
	require('./example.js'),
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router