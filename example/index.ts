import './index.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import { getTime } from '../dist/index';
import { createApp } from 'vue';

import App from './App.vue';

console.log(getTime());

createApp(App).mount('#app')
