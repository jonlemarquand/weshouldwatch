import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//Routing Imports
import HomeScreen from './components/HomeScreen/HomeScreen';
import Host from './components/Host/Host';
import Join from './components/Join/Join';

// Shared Components
import ActionButton from './components/Shared/ActionButton';

const app = createApp(App)
app.component('action-button', ActionButton);

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        component: HomeScreen
    },
    {
        path: '/host',
        component: Host
    },
    {
        path: '/join',
        component: Join
    },
    ],
    linkActiveClass: 'active'
  });
  
app.use(router);

app.mount('#app')
