<template> 

  <!-- <HeaderUser @menuOption="selectOptionProfile"> </HeaderUser> -->
  <v-tabs class="mt-8 ml-8" v-model="tab" color="#14385C">
    <v-tab value="1">Cursos</v-tab>
    <v-tab value="2">Visibles</v-tab>
    <v-tab value="3">Ocultos</v-tab>
  </v-tabs>
    <div class="text-right">
    <v-btn elevation="0" size="large" color="blue" style="margin-right: 30px;" @click="showNewCourse = true">
      Agregar
    </v-btn>
    <v-dialog v-model="showNewCourse" persistent max-width="800px">
      <new-course @close="showNewCourse = false" ></new-course>
    </v-dialog>
  </div>

  <v-window v-model="tab">
    <v-window-item class="mt-3" value="1">
      <v-container fluid>
        <v-row>
          <v-col v-for="course in courses" :key="course.id" cols="12" md="3" xs="12" sm="6">
            <CourseCardAdmVue :courses="course" > </CourseCardAdmVue>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
    <v-window-item value="2">
      <v-container fluid>
        <v-row>
          <v-col v-for="course in filteredCourses" :key="course.id" cols="12" md="3">
            <CourseCardAdmVue :courses="course"> </CourseCardAdmVue>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
    <v-window-item value="3">
      <v-container fluid>
        <v-row>
          <v-col v-for="course in filteredCompleted" :key="course.id" cols="12" md="3">
            <CourseCardAdmVue :courses="course"> </CourseCardAdmVue>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
  </v-window>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
import HeaderUser from '@/components/HeaderUser.vue';
import CourseCardAdmVue from '../components/CourseCardAdm.vue';
import newCourse from '../components/newCourse.vue';
import { useUserStore } from '../stores/counter';


export default {
  components: {
    CourseCard,
    HeaderUser,
    CourseCardAdmVue,
    newCourse
  },
  data() {
    const userStore= useUserStore();
    return {
      dialog:false,
      showNewCourse: false,
      showNewCourseComponent: false,
      tab: null,
      courses: [{
        id: 1,
        category: "web",
        tittle: "Este es un curso en web",
        description: "Esta es la descripcion de un curso",
        visible: false,
        status: "Continuar",
      },
      {
        id: 2,
        category: "mobile",
        tittle: "Este es un curso en react",
        description: "Esta es la descripcion de un curso",
        visible: false,
        status: "Iniciar"
      },
      {
        id: 3,
        category: "bd",
        tittle: "Este es un curso en movil",
        description: "Esta es la descripcion de un curso",
        visible: true,
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
      return this.courses.filter(course => course.visible);
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
