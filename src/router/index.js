import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('@/views/Welcome'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About'),
    },
  ],
});
