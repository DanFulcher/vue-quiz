import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new-quiz',
    name: 'NewQuiz',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewQuiz.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
