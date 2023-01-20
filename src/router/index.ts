import { createRouter, createWebHistory } from 'vue-router';
import HelloWorldVue from '../views/HelloWorld.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        component: HelloWorldVue,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
