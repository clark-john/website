import { createApp } from 'vue'
import router from './router'

import './tailwind.css'
import App from './App.vue'

import './styles/globals.scss'
import './styles/animations.scss'

import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min'
import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App)
	.use(router)
 	.mount('#app')
