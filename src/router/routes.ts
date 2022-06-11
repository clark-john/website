import { RouteRecordRaw } from 'vue-router'
import others from './others'

const routes: RouteRecordRaw[] = [
	{ path: '/', component: () => import('/src/views/Index.vue') },
	{ path: '/about', component: () => import('/src/views/About.vue') },
	{
		path: '/how-to', 
		component: () => import('/src/views/HowTos.vue'),
		children: [
			{ path: '', component: () => import('/src/views/HowTosList.vue') },
			{ path: 'fetch-data-with-axios', component: () => import('/src/views/howtos/FetchDataWithAxios.vue') },
		]  
	},
	{ path: '/:pathMatch(.*)*', component: () => import('/src/views/404.vue') },
	...others
]

export default routes
