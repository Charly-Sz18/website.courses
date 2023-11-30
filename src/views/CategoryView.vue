<template>
  <HeaderUser> </HeaderUser>
  <p> {{ this.category }}</p>
  <v-container fluid>
    <v-row>
      <v-col v-for="course in filteredCourses" :key="course.id" cols="12" md="3" xs="12" sm="6">
        <CourseCard :courses="course"> </CourseCard>
      </v-col>
    </v-row>
  </v-container>
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
      ]
    };
  },
  props: {
    category: String,
  },
  computed: {
    filteredCourses() {
      if (this.category === 'all') {
        return this.courses;
      }
      return this.courses.filter(course => course.category === this.category);
    },
    created() {
      this.category = this.$route.params.category;
    }
  }
}
</script>

<style></style>


