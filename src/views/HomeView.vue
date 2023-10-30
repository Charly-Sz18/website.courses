<template >
  <v-app-bar density="prominent" color="#14385C" flat>
    <v-container fluid class="d-flex justify-center align-center h-100" style="width: 95%; " >
      <v-avatar  size="80" class="me-3">
        <img src="../assets/Logo/Logo.png" style="width: 100%;"/>
      </v-avatar>
      
      <v-app-bar-title class="d-flex align-center h-100" >
        GRUPO GEEC 
      </v-app-bar-title>
      <v-card-text  class="d-none d-md-flex" >
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
      <v-btn class="text-h5 me-3 d-none d-md-flex"  variant="text" @click="ShowDialogEnter"> Iniciar sesión </v-btn>
      <Login @OpenRegister="ShowDialogRegister" ref="login"/>
      <v-btn class="text-none  text-h6 d-none d-md-flex  " color="info" variant="flat" @click="ShowDialogRegister"> ¡Comienza ya! </v-btn>
      <Signup @OpenLogin="ShowDialogEnter" ref="signup"/>
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
    <v-list>
      <v-list-item v-for="item,index in items" :key="index" @click="Asignarvalor(item.value)">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
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
        <v-btn class="text-none  text-h6  " color="info" variant="flat"> ¡Comienza ya! </v-btn>
      </v-col>
    </v-row>  
  </v-container>
  <v-container fluid >
    <v-row no-gutters>
      <v-col  class="v-col-lg-12  d-flex flex-column align-center" >
        <h2 class=" text-center mt-7">
         Toma el control de tu carrera
        </h2>
        <br>
        <p class=" text-center mt-4 mb-5"  >
         Domine las necesidades que necesita para conseguir el trabajo que desea y sobresalga cuando lo consiga
        </p>
         <div class="d-flex justify-center mt-4">
            <!-- Tarjeta izquierda -->
           <v-col class="mb-4 mx-7" xs12 sm6 md4>
            <v-card class="mr-4 mb-12 elevation-4 rounded rounded-lg"  width="300">
              <v-card-title>Aprende 
                <br> a codificar
              </v-card-title>
              <v-card-text>
              <div class="text-right">
              <v-avatar rounded="0" size="x-large" class="ms-5 mt" >
                <img src="../assets/ImagenesHome/code.png" style="width: 100%; "/>
              </v-avatar> 
            </div>
              </v-card-text>
            </v-card>
        </v-col>

            <!-- Tarjeta centrada -->
           <v-col class="mb-4 mx-7" xs12 sm6 md4>
            <v-card class="elevation-4 rounded rounded-lg" width="300">
              <v-card-title>Aprende nuevas
                <br> tecnologías </v-card-title>
              <v-card-text>
                <div class="text-right">
              <v-avatar rounded="0" size="x-large" class="ms-5 mt" >
                <img src="../assets/ImagenesHome/learning.png" style="width: 100%; "/>
              </v-avatar>
             </div>
              </v-card-text>
            </v-card>
            </v-col>  

            <!-- Tarjeta derecha -->
            <v-col class=" mx-7 mb-4" xs12 sm6 md4>
            <v-card class="elevation-4 rounded rounded-lg" width="300">
              <v-card-title>Preparate para <br> entrevistas técnicas</v-card-title>
              <v-card-text>
                <div class="text-right">
              <v-avatar rounded="0"  size="x-large" class="ms-5 mt" >
                <img src="../assets/ImagenesHome/interview.png" style="width: 100%; "/>
              </v-avatar> 
            </div>
              </v-card-text>
            </v-card>
            </v-col> 
          </div>
        <br>
      </v-col>
    </v-row>  
  </v-container>

  <v-container fluid class="seccion">
    <v-row no-gutters> 
      <v-col class="v-col-lg-12  d-flex flex-column align-center">
        <h1 class="mt-5"> Temas populares</h1>
        <p class="mt-5 mb-7" > Aprende con nosotros las tecnologías mas demandadas en la industria</p>

        <div class="d-flex justify-center mt-4 mb-7">
          <v-avatar color="yellow" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/js.png" style="width: 50%; "/>
          </v-avatar>
          <v-avatar color="#14354C" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/piton.png" style="width: 50%; "/>
          </v-avatar>
          <v-avatar color="#400f87" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/c.svg" style="width: 50%; "/>
          </v-avatar>
          <v-avatar color="white" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/flutter.png" style="width: 50%; "/>

          </v-avatar>
          <v-avatar color="#1E5B85" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/vue.png" style="width: 50%; "/>
          </v-avatar>
          <v-avatar color="black" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/React-icon.svg.png" style="width: 50%; "/>

          </v-avatar>
        </div>
      </v-col>
    </v-row>
  </v-container >
  
  <v-container fluid >
    <v-row no-gutters>
      <v-col  class="v-col-lg-12  d-flex flex-column align-center" >
        <h1 class=" text-center mt-7 mb-4">
         Opiniones de nuestros <span class="estudiantes"> estudiantes </span>
        </h1>
          <div class="d-flex justify-center mt-4">
            <!-- Tarjeta izquierda -->
            <v-card class="mr-4 mb-12 elevation-4 rounded rounded-lg"  width="300">
              <v-card-title class="titulo mt-4"> "
              </v-card-title>
              <v-card-text>  
                Nunca habia experimentado un aprendizaje tan flexible y efectivo.
                Los cursos en linea me permitiweon continuar con mi educacion mientras mantenia mi trabajo a tiempo completo.
                Gracias a esta plataforma ahora me siento más confiada y preparada para alcanzar mis metas profesionales
                
              <v-divider class="mt-2 mb-2"></v-divider>
              <v-avatar color="blue"> </v-avatar>
              Ana López
              </v-card-text>
            </v-card>

            <!-- Tarjeta centrada -->
            <v-card class="mx-15 mb-12 elevation-4 rounded rounded-lg" width="300">
              <v-card-title class="titulo mt-4">" </v-card-title>
              <v-card-text>
               Como un amante del aprendizaje constante, esta plataforma me ha dado acceso a un tesoro de conocimiento.
               Los cursos son excelentes y los instructores son expertos en sus campos. Estoy emocionado de seguir
               explorando nuevas áreas y expandiendo mis horizontes
               <v-divider class="mt-4 mb-2"></v-divider>
              <v-avatar color="blue"> </v-avatar>
              Pedro Morales
              </v-card-text>
            </v-card>

            <!-- Tarjeta derecha -->
            <v-card class="ml-4 mb-12 elevation-4 rounded rounded-lg" width="300">
              <v-card-title class="titulo mt-4">"</v-card-title>
              <v-card-text>
                ¡Estoy enganchada a esta plataforma! Cada curso es como un libro que no puedo dejar de leer. Me ha 
                inspirado a explorar campos que nunca antes habia considerado. Es  un lugar donde el aprendizaje se convierte en una adicción saludable.
                <v-divider class="mt-2 mb-2"></v-divider>
                <v-avatar color="blue"> </v-avatar>
                  Isabel Lagunez
              </v-card-text>
            </v-card>
          </div>
        <br>
      </v-col>
    </v-row>  
  </v-container>


  <v-container fluid class="secc">
    <v-row no-gutters> 
    <v-col class="v-col-lg-12  d-flex flex-column align-center">
      <h1 class="mt-6"> No postergues más tu educación, ¡Tu futuro te esta esperando!</h1>
      <p class="mt-6">Un nuevo empleo, mejor salario, mayor calidad de vida, ¡todo lo puedes conseguir con
        <br> educación! Es el momento de lograr lo que siempre has querido.
      </p>
      <v-btn class="text-none  text-h6  mt-6 " color="info" variant="flat"> ¡Comienza ya! </v-btn>
    </v-col>
  </v-row>
  </v-container>
  <v-container fluid class="home-header" > 

  </v-container>

  
</template>

<script>
import { defineComponent } from 'vue';
//import style from '../assets/styles.css?inline'
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

<style scoped>
.home-header{
    background-color: #14385C;
}

.title-home{
    font-size: clamp(3em,6vw,18em);
    color: white;
}

.subtitle-home{
    font-size: clamp(3em,6vw,18em);
    color: #6BACE4;
}
.frase-home{
    font-size: clamp(1em,1.2vw,5em);
    font-weight: normal;
}
.seccion{
    background-color: #E1F4FF;
}
.secc{
  background-color: #EFEFFA
}
.estudiantes{
  color: #2F80ED;
}
.icon{
  color: #6BACE4;
}
.titulo{
  font-size:50px;
  color: #6BACE4
}


</style>