import './tailwind.scss';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { createApp } from 'vue';
import { OhVueIcon } from 'oh-vue-icons';
import './setupIcons';
import App from './App.vue';

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: () => import("./pages/index.vue")
	},
	{
		path: "/:catchAll(.*)*",
		component: () => import("./pages/notfound.vue")
	}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router).mount('#app');
