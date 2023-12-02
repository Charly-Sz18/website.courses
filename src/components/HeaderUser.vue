<template>
  <v-app-bar app color="#14385C">
    <router-link to="/mycourses"> 
    <v-btn class="my-btn" text> 
      <div class="d-flex align-center ml-5">
      <v-avatar size="50" class="me-3">
        <img src="../assets/Logo/Logo.png" style="width: 100%;" />
      </v-avatar>
      <v-app-bar-title class="my-title" >
        GRUPO GEEC
      </v-app-bar-title>
    </div> 
    </v-btn>
 </router-link>
    <div style="width: 300px;">
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
      ></v-select>
    </div>
    <v-spacer></v-spacer>
    <v-responsive class="mx-auto mr-5" max-width="250">
      <v-text-field :loading="loading" density="compact" append-inner-icon="mdi-magnify" label="Buscar cursos" single-line
        hide-details @click:append-inner="onClick" class="chip" variant="solo"></v-text-field>
    </v-responsive>

        <v-container>
          <v-menu open-on-hover>
            <template v-slot:activator="{props}">
              <div class="h-100" >
                <v-col cols="auto">
                  <v-btn v-bind="props" icon="mdi mdi-account-circle" size="x-large"></v-btn>
                </v-col>
              </div>
              
              
            </template>

            <v-list  >
              <v-list-item> 
                <v-list-item-title><strong>{{userStore.userData?.email}}</strong></v-list-item-title>
              </v-list-item>
        
              <v-list-item
              v-for="item in itemsConfig"
              :key="item.id"
              @click="profileMenuOption(item)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            </v-list>

          </v-menu>
        </v-container>
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
      select: null,
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
  created() {
    console.log(this.$route.params.category);
    this.select = this.$route.params.category;
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
      console.log(item.id)
      this.$emit('menuOption',item.id)
    },
    redirectToCategoryView() {
      if (this.selectedOption && this.selectedOption !== 'Todos los cursos') {
        this.$router.push({ name: 'course-category', params: { category: this.selectedOption } });
      } else {
        this.$router.push({ name: 'home' });
      }
    },
   
    setup() {
      const router = useRouter();
    return {
      router,
      } 
    },
  },
};
</script>

<style> 
.my-title {
  color: white !important; /* Establecer el color del texto en blanco */
}
</style>