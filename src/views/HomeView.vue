<template >
  <v-app-bar color="#14385C" flat>
    <v-container fluid class="d-flex justify-center align-center h-100" style="width: 95%; " >
      <v-avatar size="50" class="me-3">
        <img src="../assets/Logo/Logo.png" style="width: 100%;" />
      </v-avatar>

      <v-app-bar-title class="d-flex align-center h-100">
        GRUPO GEEC
      </v-app-bar-title>

      <v-btn class="text-h6 me-3 d-none d-md-flex" variant="text" @click="ShowDialogEnter"> Iniciar sesión </v-btn>
      <Login @OpenRegister="ShowDialogRegister" @LoginNotification="LogInNotification" ref="login" />
      <v-btn class="text-none  text-h6 d-none d-md-flex  " color="info" variant="flat" @click="ShowDialogRegister">
        ¡Comienza ya! </v-btn>
      <Signup @OpenLogin="ShowDialogEnter"  @RegisterNotification="RegistrationNotification" ref="signup" />

      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-flex d-md-none">
      </v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-if="drawer" v-model="drawer" location="top" class="d-flex d-lg-none" style="height: auto;">

    <v-list>
      <v-list-item v-for="item, index in items" :key="index" @click="Asignarvalor(item.value)">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-container fluid class="home-header">
    <v-row no-gutters>
      <v-col class="v-col-lg-12  d-flex flex-column align-center">
        <h1 class="font-weight-light text-center title-home">
          El conocimiento es poder,
        </h1>
        <h1 class="font-weight-bold text-center subtitle-home">
          ¿estás listo?
        </h1>
        <br>
        <p class="text-center  frase-home w-75 text-white ">La puerta al empoderamiento y el éxito se encuentra frente a
          ti.</p>
        <p class="text-center  frase-home w-75 text-white">Prepárate para una travesía de descubrimiento y logros. </p>
        <br>
        <v-btn class="text-none  text-h6  mb-5" color="info" variant="flat" @click="ShowDialogRegister"> ¡Comienza ya!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid class="mb-4">
    <v-row>
      <v-col class="text-center mt-7">
        <h2>Toma el control de tu carrera</h2>
        <p class="mt-4 mb-5">
          Domina las habilidades necesarias para conseguir el trabajo que deseas y sobresale cuando lo obtengas.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <!-- Tarjeta izquierda -->  
      <v-col class=" d-flex flex-column align-center " xs12 sm6 md4>
        <v-card class=" elevation-4 rounded rounded-lg  d-flex flex-column align-center " width="300">
          <v-card-title>Aprende a codificar</v-card-title>
          <v-card-text>
            <v-avatar rounded="0" size="x-large"    >
              <img src="../assets/ImagenesHome/code.png" style="width: 100%;"/>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tarjeta centrada -->
      <v-col class=" d-flex flex-column align-center" xs12 sm6 md4>
        <v-card class="elevation-4 rounded rounded-lg d-flex flex-column align-center" width="300">
          <v-card-title>Aprende nuevas tecnologías</v-card-title>
          <v-card-text>
            <v-avatar rounded="0" size="x-large" class="text-right">
              <img src="../assets/ImagenesHome/learning.png" style="width: 100%;" />
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tarjeta derecha -->
      <v-col class=" d-flex flex-column align-center" xs12 sm6 md4>
        <v-card class="elevation-4 rounded rounded-lg d-flex flex-column align-center" width="300">
          <v-card-title>Prepárate para entrevistas</v-card-title>
          <v-card-text>
            <v-avatar rounded="0" size="x-large" class="text-right">
              <img src="../assets/ImagenesHome/interview.png" style="width: 100%;" />
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid class="seccion">
    <v-row no-gutters>
      <v-col>
        <h1 class="text-center mt-5">Temas populares</h1>
        <p class="text-center mt-5 mb-7">Aprende con nosotros las tecnologías más demandadas en la industria</p>

        <div class="d-flex flex-wrap justify-center mt-4 mb-7">
          <v-avatar color="yellow" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/js.png" style="width: 50%;" />
          </v-avatar>
          <v-avatar color="#14354C" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/piton.png" style="width: 50%;" />
          </v-avatar>
          <v-avatar color="#400f87" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/c.svg" style="width: 50%;" />
          </v-avatar>
          <v-avatar color="white" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/flutter.png" style="width: 50%;" />
          </v-avatar>
          <v-avatar color="#1E5B85" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/vue.png" style="width: 50%;" />
          </v-avatar>
          <v-avatar color="black" size="large" class="mr-3">
            <img src="../assets/ImagenesHome/React-icon.svg.png" style="width: 50%;" />
          </v-avatar>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <div>
    <v-container fluid class="mb-5">
      <v-row no-gutters>
        <v-col>
          <h1 class="text-center mt-7 mb-4">
            Opiniones de nuestros <span class="estudiantes"> estudiantes </span>
          </h1>
        </v-col>
      </v-row>
      <v-row > 
        <!-- Tarjeta izquierda -->
        <v-col xs12 sm6 md4 class=" d-flex flex-column align-center">
          <v-card class=" elevation-4 rounded rounded-lg" width="300" height="300">
            <v-card-title class="titulo"> "</v-card-title>
            <v-card-text> 
              Los cursos en línea me permitieron continuar con mi educación mientras mantenía mi trabajo a tiempo completo. Gracias a esta plataforma ahora me siento más confiada y preparada para alcanzar mis metas profesionales.
              <v-divider class="mt-2 mb-2"></v-divider>
              <v-avatar color="blue"> <span class="mdi mdi-account"></span> </v-avatar>
              Ana López
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Tarjeta centrada -->
        <v-col xs12 sm6 md4 class=" d-flex flex-column align-center">
          <v-card class=" elevation-4 rounded rounded-lg" width="300" height="300">
            <v-card-title class="titulo">" </v-card-title>
            <v-card-text>
              Como amante del aprendizaje constante, esta plataforma me ha dado acceso a un tesoro de conocimiento. Estoy emocionado de seguir explorando nuevas áreas y expandiendo mis horizontes.

              <v-divider class="mt-4 mb-2"></v-divider>
              <v-avatar color="blue"> <span class="mdi mdi-account"></span></v-avatar>
              Pedro Morales
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Tarjeta derecha -->
        <v-col xs12 sm6 md4 class=" d-flex flex-column align-center">
          <v-card class=" elevation-4 rounded rounded-lg" width="300" height="300">
            <v-card-title class="titulo">"</v-card-title>
            <v-card-text>
              ¡Estoy enganchada a esta plataforma! Cada curso es como un libro que no puedo dejar de leer. Me ha inspirado a explorar campos que nunca antes había considerado. Es un lugar donde el aprendizaje se convierte en una adicción.

              <v-divider class="mt-2 mb-2"></v-divider>
              <v-avatar color="blue"> <span class="mdi mdi-account"></span></v-avatar>
              Isabel Lagunez
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="secc">
      <v-row no-gutters>
        <v-col class="v-col-lg-12  d-flex flex-column align-center" >
          <h1 class="mt-6">No postergues más tu educación, ¡Tu futuro te está esperando!</h1>
          <p class="mt-6">Un nuevo empleo, mejor salario, mayor calidad de vida, ¡todo lo puedes conseguir con educación! Es el momento de lograr lo que siempre has querido.</p>
          <v-btn class="text-none text-h6 mt-6" color="info" variant="flat" @click="ShowDialogRegister">¡Comienza ya!</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="home-header">
    </v-container>
  </div>
</template>

<script>

import { defineComponent } from 'vue';
import Login from '@/components/Login.vue';
import Signup from '@/components/Signup.vue';
//import style from '../assets/styles.css?inline'
// Components

export default defineComponent({
  name: 'HomeView',
  components: {
    Login,
    Signup,
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
    ShowDialogEnter() {
      console.log("entra", this.$refs.login)
      this.$refs.login.dialog = true;
    },
    ShowDialogRegister() {
      console.log("entra", this.$refs.login)
      this.$refs.signup.dialog = true;
    },
    Asignarvalor(index) {
      console.log(index)
      this.drawer = !this.drawer;
      if (index === 'LogIn') {
        this.ShowDialogEnter()
      } else {
        this.ShowDialogRegister()
      }

    },
    RegistrationNotification(mensaje){

      console.log(mensaje)
      if(mensaje.icon=="success"){
          this.$swal({
            position: "center",
            icon: "success",
            title: "Cuenta registrada con éxito",
            showConfirmButton: false,
            timer: 1500
          })

      }

      if(mensaje.icon=="errorEmail"){

          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "El correo ya existe",
          });

      }
      
      if(mensaje.icon=="error"){
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal, intenta nuevamente",
          });

      }

    },
    LogInNotification(mensaje){

      if(mensaje.icon=="success"){
          this.$swal({
            position: "center",
            icon: "success",
            title: "Acceso correcto",
            showConfirmButton: false,
            timer: 1500
          })

      }

      if(mensaje.icon=="error"){

          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Ocurrio un error, intente nuevamente",
          });

      }

    }

  },
  computed: {

  }
});
</script>

<style scoped>
.home-header {
  background-color: #14385C;
}

.title-home {
  font-size: clamp(3em, 6vw, 18em);
  color: white;
}

.subtitle-home {
  font-size: clamp(3em, 6vw, 18em);
  color: #6BACE4;
}

.frase-home {
  font-size: clamp(1em, 1.2vw, 5em);
  font-weight: normal;
}

.seccion {
  background-color: #E1F4FF;
}

.secc {
  background-color: #EFEFFA
}

.estudiantes {
  color: #2F80ED;
}

.icon {
  color: #6BACE4;
}

.titulo {
  font-size: 50px;
  color: #6BACE4
}
</style>