import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Poc from '../views/Poc.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/poc',
    name: 'Poc',
    component: Poc,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
