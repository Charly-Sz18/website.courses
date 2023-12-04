<template>
  <v-app-bar app color="#14385C">
    <router-link to="/courses/category/all" class="text-decoration-none"> 
        <v-btn class="my-btn d-flex align-center justify-center" > 
          <div class="d-flex align-center">
          <v-avatar size="50" class="me-3">
            <img src="../assets/Logo/Logo.png" style="width: 100%;" />
          </v-avatar>
          <v-app-bar-title class="my-title" >
            GRUPO GEEC
          </v-app-bar-title>
        </div> 
        </v-btn>
    </router-link>
    <div style="width: 300px;" v-if="$route.name=='course-category'">
      <v-select
        v-model="select"
        :items="items"
        item-title="state"
        item-value="abbr"
        label="Categorias"
        single-line
        variant="outlined"
        density="comfortable"
        class="ml-7 mt-4"
        @change="redirectToCategoryView"
      ></v-select>
    </div>
    <v-spacer></v-spacer>
    <router-link to="/mycourses" v-if="$route.name=='course-category'" class="me-4  text-decoration-none">
      <h3 class="my-title "> Mis cursos</h3>
    </router-link>
    <router-link to="/courses/category/all" v-if="$route.name=='Mycourses'" class="me-4  text-decoration-none">
      <h3 class="my-title " > Cursos disponibles</h3>
    </router-link>
    <v-responsive class="mx-auto mr-5" max-width="250">
      <v-text-field :loading="loading" density="compact" append-inner-icon="mdi-magnify" label="Buscar cursos" single-line
        hide-details @click:append-inner="onClick" class="chip" variant="solo"></v-text-field>
    </v-responsive>

    <v-menu open-on-hover>
      <template v-slot:activator="{props}">
        <div class="h-100 me-3" >
         
            <v-btn v-bind="props" icon="mdi mdi-account-circle" size="x-large"></v-btn>
          
        </div>
      </template>

      <v-list  >
        <v-list-item> 
          <v-list-item-title><strong>{{userStore.userData?.email}}</strong></v-list-item-title>
        </v-list-item>
  
        <v-list-item
        v-for="item in itemsConfig"
        :key="item.id"
        @click="profileMenuOption(item.id)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      </v-list>

    </v-menu>
    
    </v-app-bar> 
</template>

<script>
import {useUserStore} from '@/stores/counter';

export default {
  data() {
    const userStore= useUserStore();
    return {
      loaded: false,
      loading: false,
      select: 'all',
      items: [
        { abbr: 'all', state: 'Todos los cursos'},
        { abbr: 'web', state: 'Desarrollo Web' },
        { abbr: 'mobile', state: 'Desarrollo Móvil' },
        { abbr: 'bd', state: 'Base de datos' },
        { abbr: 'videogames', state: 'Videojuegos' },
        { abbr: 'programming', state: 'Programación' },
        { abbr: 'uxui', state: 'UX/UI' },
      ],
      itemsConfig:[
        {id: 1, title: 'Perfil'},
        {id: 2, title: 'Cerrar sesión'},
        {id: 3, title: 'Panel del instructor'}
      ],
      userStore,
    };
  },
  watch: {
     select(newValue) {
    this.$router.push({ path: '/courses/category/' + newValue})      
    },
  },
  methods: {
    onClick() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
    profileMenuOption(item){
      console.log(item)
        switch (item) {
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
             this.$router.push({path: '/instructor/courses'})
            break
            
          default:
            break;
        }


    },
    redirectToCategoryView() {
      console.log("cosa")
      this.$router.push({ path: '/courses/category/' + this.select}) 
    },
   
    // setup() {
    //   const router = useRouter();
    // return {
    //   router,
    //   } 
    // },
  },
};
</script>

<style> 
.my-title {
  color: white !important; /* Establecer el color del texto en blanco */
}
</style>