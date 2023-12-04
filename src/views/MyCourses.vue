<template>
  <!-- <HeaderUser @menuOption="selectOptionProfile"> </HeaderUser> -->
  <v-tabs class="mt-8 ml-8" v-model="tab" color="#14385C">
    <v-tab value="1">Mis cursos</v-tab>
    <v-tab value="2">Favoritos</v-tab>
    <v-tab value="3">Completados</v-tab>
  </v-tabs>
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
import { useUserStore } from '../stores/counter';


export default {
  components: {
    CourseCard,
    HeaderUser
  },
  data() {
    const userStore= useUserStore();
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
      ],
      userStore,
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

    },
    selectOptionProfile(id){

      switch (id) {
        case 1:
          console.log("configurar Perfil")
        break;

        case 2:
       this.$swal({
                title: "Cerrar sesión",
                text: "Esta seguro que desea abandonar la sesión",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, cerrar"
              }).then((result) => {
                if (result.isConfirmed) {
                 this.userStore.logOutUser();
                }
              });

         
          
        break;
      
        case 3:
          
          break
          
        default:
          break;
      }
     
    },
    


  }
}


</script>

<style></style>