import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/badge',
      name: 'badge',
      component: () => import('../views/BadgeView.vue'),
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('../views/IconView.vue'),
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('@/views/ButtonView.vue'),
      meta: { title: 'Button' },
    },
    // Agregar a la lista de routes:
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('@/views/TooltipView.vue'),
      meta: { title: 'Tooltip' },
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('@/views/AlertView.vue'),
      meta: { title: 'Alert' },
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('@/views/CardView.vue'),
      meta: { title: 'Card' },
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/FormView.vue'),
      meta: { title: 'Form' },
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('@/views/InputView.vue'),
      meta: { title: 'Input' },
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('@/views/SelectView.vue'),
      meta: { title: 'Select' },
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import('@/views/RadioView.vue'),
      meta: { title: 'Radio' },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
