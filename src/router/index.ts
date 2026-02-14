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
