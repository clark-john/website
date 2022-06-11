import { RouteRecordRaw } from 'vue-router'

const others: RouteRecordRaw[] = [
	{ path: '/others', component: () => import('/src/views/Others.vue')	},
	{ path: '/others/counter', component: () => import('/src/views/others/Counter.vue') }
] 
export default others 
