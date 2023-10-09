<template >
  <v-app-bar density="prominent" color="#14385C" flat>
    <v-container fluid class="d-flex justify-center align-center h-100" style="width: 95%; " >
      <v-avatar  size="80" class="me-3">
          <img src="../assets/Logo/Logo.png" style="width: 100%;"/>
      </v-avatar>
      
      <v-app-bar-title class="d-flex align-center h-100" >
          GRUPO GEEC 
      </v-app-bar-title>
      

      <v-card-text  class="d-none d-md-flex">
        <v-text-field
          :loading="loading"
          density="compact"
          label="Search templates"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onClick"
          
          >
        </v-text-field>
      </v-card-text>


      <v-divider
      class="ms-3 me-3 border-opacity-25 d-none d-md-flex"
      inset
      vertical>
      </v-divider>
     
    
      
      <v-btn class="text-h5 me-3 d-none d-md-flex" variant="texto"> Iniciar sesión </v-btn>
      <v-btn class="text-none  text-h6 d-none d-md-flex  " color="info" variant="flat"> ¡Comienza ya! </v-btn>
     
      <v-app-bar-nav-icon 
          @click="drawer = !drawer" 
          class="d-flex d-md-none">
      </v-app-bar-nav-icon>
    </v-container>            
  </v-app-bar>

  <v-navigation-drawer
        v-if="drawer"
        v-model="drawer"
        location="top"
        class="d-flex d-lg-none"
        style="height: auto;"
        >
        <v-list
          :items="items"
          @click="drawer = !drawer"
        ></v-list>
  </v-navigation-drawer>

  <v-container fluid class="home-header">
    <v-row no-gutters>
      <v-col  class="v-col-lg-12  d-flex flex-column align-center" >
        <h1 class="font-weight-light text-center title-home"  >
          El conocimiento es poder,
        </h1>
        <h1 class="font-weight-bold text-center subtitle-home"  >
          ¿estás listo?
        </h1>
        <br>
        <p class="text-center  frase-home w-75 text-white " >La puerta al empoderamiento y el éxito se encuentra frente a ti.</p>
        <p class="text-center  frase-home w-75 text-white" >Prepárate para una travesía de descubrimiento y logros. </p>
        <br>
        <v-btn class="text-none  text-h6 d-none d-md-flex  " color="info" variant="flat"> ¡Comienza ya! </v-btn>
      </v-col>
    </v-row>
    
  </v-container>


  
</template>

<script>
import { defineComponent } from 'vue';
import style from '../assets/styles.css'
// Components

export default defineComponent({
  name: 'HomeView',
  components: {

  },
  data: () => ({
    drawer: false,
      group: null,
      items: [
        {
          title: 'Iniciar sesión',
          value: 'LogIn',
        },
        {
          title: 'Registrarse',
          value: 'registro',
        },      
      ],
     
    }),

    methods: {
     
    },
});
</script>
