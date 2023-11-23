<template>
    <HeaderUser> </HeaderUser>
    <div> {{ category }}</div>
<!--     <v-row>
      <v-col v-for="curso in filteredCourses" :key="curso.id" cols="12" md="4">
        <CourseCardVue :curso="curso"></CourseCardVue>
      </v-col>
    </v-row> -->
    
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


