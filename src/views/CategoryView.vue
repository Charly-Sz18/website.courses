<template>
    <HeaderUser> </HeaderUser>
    <div> {{ category }}</div>
    <CourseCardVue> </CourseCardVue>
    <v-row>
      <v-col v-for="curso in filteredCourses" :key="curso.id" cols="12" md="4">
        <CourseCardVue :curso="curso"></CourseCardVue>
      </v-col>
    </v-row>
    
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
      // Aquí debes acceder a los datos de cursos específicos de tu vista "MyCurses"
      // Supongamos que tienes una propiedad en tu vista llamada "cursos"
      const cursos = this.$store.state.myCourses.courses; // Ajusta según la estructura de tu store o datos

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


