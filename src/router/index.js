import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '../stores/counter';


const requireAuth= async(to, from, next) =>{
  const userStore = useUserStore();
  
  const user = await  userStore.currentUser()

  if(user){
    next()
  }else{
    next("/")
  }

}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/instructor/courses',
      name: 'instructor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InstructorView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/mycourses',
      name: 'Mycourses',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyCourses.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/courses/view/:id',
      name: 'course-view',
      component: () => import('../views/CourseView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/courses/category/:category',
      name: 'course-category',
      component: () => import('../views/CategoryView.vue'), 
      beforeEnter: requireAuth,
      props: true, 
      
    },
  ]
})

export default router
