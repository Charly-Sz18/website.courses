import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/mycourses',
      name: 'Mycourses',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyCourses.vue')
    },
    {
      path: '/courses/view/:id',
      name: 'course-view',
      component: () => import('../views/CourseView.vue')
    },
    {
      path: '/courses/category/:category',
      name: 'course-category',
      component: () => import('../views/CategoryView.vue'), 
      props: true, 
    },
  ]
})

export default router
