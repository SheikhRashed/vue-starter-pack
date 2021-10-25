import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/Home.vue';
import NotFound from '../pages/NotFound/NotFound.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	// Page Not Found || 404
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
