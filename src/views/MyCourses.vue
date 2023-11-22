<template>
  <HeaderUser> </HeaderUser>

        <v-tabs class="mt-8" v-model="tab" color="#14385C">
          <v-tab value="1">Mis cursos</v-tab>
          <v-tab value="2">Favoritos</v-tab>
          <v-tab value="3">Completados</v-tab>
        </v-tabs>
 <router-link to="/courses/view/1"> 
    <v-btn> 
      Hola 
    </v-btn>
 </router-link>
  
  <v-window v-model="tab">
    <v-window-item class="mt-3" value="1">
      <v-container fluid>
        <v-row>
          <v-col v-for="course in courses" :key="course.id" cols="12" md="3" xs="12" sm="6">
            <CourseCard :courses="course"> </CourseCard>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
    <v-window-item value="2">
      <v-container fluid>
        <v-row>
          <v-col v-for="course in filteredCourses" :key="course.id" cols="12" md="3">
            <CourseCard :courses="course"> </CourseCard>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
    <v-window-item value="3">
      <v-container fluid>
        <v-row>
          <v-col v-for="course in filteredCompleted" :key="course.id" cols="12" md="3">
            <CourseCard :courses="course"> </CourseCard>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
  </v-window>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
import HeaderUser from '@/components/HeaderUser.vue';
export default {
  components: {
    CourseCard,
    HeaderUser
  },
  data() {
    return {
      tab: null,
      courses: [{
        id: 1,
        category: "web",
        tittle: "Este es un curso en web",
        description: "Esta es la descripcion de un curso",
        favorite: false,
        status: "Continuar"
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
        status: "Completo"
      },
      {
        id: 4,
        category: "videogames",
        tittle: "Este es un curso en si",
        description: "Esta es la descripcion de un curso",
        favorite: true,
        status: "Iniciar"
      }
      ]
    };
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(course => course.favorite);
    },
    filteredCompleted(){
      return this.courses.filter(course => course.status==="Completo");
    }
  },
  methods: {
    favorite() {

    }
  }
}


</script>

<style></style>