module.exports = {
	path: '/example/',
	component: () => import('../components/example/Example.vue'),
	children: [
		{
			path: 'home',
			name: 'exampleHome',
			component: () => import( /* webpackChunkName: "about" */ '../components/example/Home.vue')
		},
		{
			path: 'about',
			name: 'exampleAbout',
			component: () => import( /* webpackChunkName: "about" */ '../components/example/About.vue')
		}
	]
}