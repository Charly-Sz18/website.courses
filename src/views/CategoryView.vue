<template>
  
  <p> {{ this.category }}</p>
  
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="ms-28">Que aprender hoy</h1>
      </v-col>
      <v-col v-for="(course,index) in filteredCourses" :key="index"  cols="12" md="3" xs="12" sm="6">
        <CourseCardAll :courses="course" :index="index"> </CourseCardAll>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CourseCardAll from '@/components/CourseCardAll.vue';
import HeaderUser from '@/components/HeaderUser.vue';
import { UseWebAPI } from '@/stores/WebAPI';

export default {
 
  components: {
    CourseCardAll,
    HeaderUser
  },
  data() {
    const WebAPI= UseWebAPI();
    const {coursesList} = WebAPI;
    return {
      courses: [{
        id: 1,
        category: "web",
        tittle: "Este es un curso en web",
        description: "Esta es la descripcion de un curso",
        favorite: false,
        status: "Iniciar"
      },
      {
        id: 2,
        category: "mobile",
        tittle: "Este es un curso en react",
        description: "Esta es la descripcion de un curso",
        favorite: false,
        status: "Iniciar"
      },
      {
        id: 3,
        category: "bd",
        tittle: "Este es un curso en movil",
        description: "Esta es la descripcion de un curso",
        favorite: false,
        status: "Iniciar"
      },
      {
        id: 4,
        category: "videogames",
        tittle: "Este es un curso en si",
        description: "Esta es la descripcion de un curso",
        favorite: true,
        status: "Iniciar"
      }
      ],
      WebAPI,
      coursesList,
      isDataLoaded:false,
    };
  },
  props: {
    category: String,
  },
  computed: {
    filteredCourses() {
      if (this.category === 'all') {
        console.log("cosas")
        return this.coursesList;
      }
      return this.coursesList.filter(course => course.category === this.category);
    },
    created() {
      this.category = this.$route.params.category;
    }
  },
 
 
}
</script>

<style scoped>
.ms-28{
  margin-left: 28px;
  padding: 12px;
}

</style>


