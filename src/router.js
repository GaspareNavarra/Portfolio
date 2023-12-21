import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/pages/HomePage.vue';
import AboutMe from './components/pages/AboutMe.vue';
import MyJob from './components/pages/MyJob.vue';
import NotFound from './components/pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/Home'},
        {path: '/Home', component: HomePage},
        {path: '/AboutMe', component: AboutMe},
        {path: '/MyJob', component: MyJob},
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ]
});
export default router;