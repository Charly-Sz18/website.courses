<template>
  <HeaderUser> </HeaderUser>
  <p> {{ this.category }}</p>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
import HeaderUser from '@/components/HeaderUser.vue';

export default {
  components: {
    CourseCard,
    HeaderUser
  },
  props: {
    category: String,
  },
  computed: {
   /*  filteredCourses() {
      return this.$store.state.courses.filter(course => course.category === this.category);
    }, */
    filteredCourses() {
      
      const cursos = this.$store.state.MyCourses.courses; 

      return this.selectedCategory === 'Todos los cursos'
        ? cursos
        : cursos.filter(curso => curso.categoria === this.selectedCategory);
    },
 
    async created(){
        const category = this.$route.params.category;
        this.category = category;
    } 
 }
}
 </script>

<style> 
</style>


