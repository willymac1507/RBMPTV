import { createApp, h } from 'vue';
import './style.css';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import AboutUs from './components/AboutUs.vue';
import Services from './components/Services.vue';
import Contact from './components/Contact.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: AboutUs,
    },
    {
        path: '/services',
        component: Services,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/about/pat',
        component: Contact,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp({
    render: () => h(App)
});

app.use(router);

app.mount('#app');
