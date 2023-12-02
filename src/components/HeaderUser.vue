<template>
  <div>
    <v-app-bar color="#14385C" flat>
      <v-container fluid class="d-flex  justify-between align-center" style="width: 95%;">
        <div class="d-flex align-center">
          <v-avatar size="50" class="me-3">
            <img src="../assets/Logo/Logo.png" style="width: 100%;" />
          </v-avatar>
          <v-app-bar-title>
            GRUPO GEEC
          </v-app-bar-title>
        </div>
        <div class="ml-7 mt-2">
          <v-select v-model="select" :items="items" item-title="state" item-value="abbr" label="Categorias"
            persistent-hint return-object single-line variant="outlined" style="border: 0px solid;" density="comfortable">
          </v-select>
        </div>
        <v-text-field :loading="loading" density="compact" variant="solo" append-inner-icon="mdi-magnify"
                label="Buscar cursos" single-line hide-details @click:append-inner="onClick" class="chip" width="50%"></v-text-field>

        <div class="d-flex justify-end bg-surface-variant" >
          <v-card class="estilo " width="300px">
            <v-card-text>
              
            </v-card-text>
          </v-card>
        </div>


        <v-menu open-on-hover>
          <template v-slot:activator="{props}">
            <div class="h-100" >
              <v-avatar v-bind="props" size="50" class="me-3">
                <img src="../assets/Logo/Logo.png" style="width: 100%;" />
               </v-avatar>
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
  </div>
</template>


<script>
import {useUserStore} from '@/stores/counter'

export default {
  data() {
    const userStore= useUserStore();
    return {
      loaded: false,
      loading: false,
      selectedOption: null, // Opción seleccionada
      open: ['admins'],
      options: ['Todos los cursos', 'Desarrollo web', 'Desarrollo mòvil', 'Base de datos', 'Videojuegos', 'UX/UI', 'Programaciòn'], // Lista de opciones
      admins: [
        '1', '2', '3', '4', '5', '6'
      ],
      select: { state: 'Categorias' },
      items: [
        { state: 'Todos los cursos' },
        { state: 'Desarrollo web' },
        { state: 'Desarrollo movil' },
        { state: 'Base de datos' },
        { state: 'Video juegos' },
      ],
      itemsConfig:[
        {id: 1, title: 'Perfil'},
        {id: 2, title: 'Cerrar sesión'},
        {id: 3, title: 'Panel del instructor'}
      ],
      userStore,
    };
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
    }
  },
};
</script>

<style>
.no-background .v-input {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
.estilo{
  background-color: #14385C;
}
.chip {
  color: white !important;
  border-radius: 0;
}

</style>