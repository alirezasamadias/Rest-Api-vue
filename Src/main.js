import { createApp } from 'vue';
import router from './Router';
// Css
import './Assets/Css/Font-Icon.css';
import './Assets/Css/Font-Family.css';
import './Assets/Css/Main.css';
// Components
import App from './App.vue';

createApp(App).use(router).mount('#app');