import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const home = r => require.ensure([], () => r(require('@/views/home/home')), 'home');
const about = r => require.ensure([], () => r(require('@/views/about/about')), 'about');

export default new Router({
    mode: 'history',
    strict: process.env.NODE_ENV !== 'production',
	routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/about',
            component: about
        }
    ]
})
