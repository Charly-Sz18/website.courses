<template>
 
  <v-dialog id="registro" v-model="dialog"  width="470px" persistent  >
    <v-card class="rounded-xl" >
      <v-toolbar
        dark
        color="white"
        class="mt-2"
      >
        <v-avatar size="60" class="ms-5 mt logo" >
           <img src="../assets/Logo/Logo.png" style="width: 100%; "/>
        </v-avatar>
  
        <v-toolbar-title class="font-weight-bold">GRUPO GEEC </v-toolbar-title>
        
        
        <v-toolbar-items >
          <v-btn
              icon
              dark
              @click="dialog = false"
              size="40"
              
          >
          <v-icon size="20">mdi-close</v-icon>
        </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-card-title  class="text-center text-h4  text-sm-h3 font-weight-bold mt-5 mb-2 h-100" >
        Regístrate
      </v-card-title>
      <v-card-text>
          <v-form @submit.prevent = "handleSubmit">
              <v-container>
              <v-row>
                  <v-col cols="12" class="pt-0">
                      <v-text-field
                      variant="solo"
                      label="Nombre Completo"
                      type="text"
                      v-model.trim="nombre"
                      background-color="#BDBDBD"
                      required
                      ></v-text-field>
                  </v-col>

                  <v-col cols="12" >
                      <v-text-field
                      variant="solo"
                      :rules="emailRules"
                      v-model.trim="correo"
                      label="Correo electrónico"
                      required
                      ></v-text-field>
                  </v-col>

                  <v-col cols="12" class="pt-0">
                      <v-text-field
                      variant="solo"
                      label="Contraseña"
                      type="password"
                      v-model.trim="password"
                      background-color="#BDBDBD"
                      required
                      ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12">
                      <v-btn type="submit" class="text-none text-h6" 
                          color="info" 
                          variant="flat" block
                      >
                          Crear cuenta
                      </v-btn>
                  </v-col>
                  <v-col cols="12" class="text-center">
                      <p>¿Ya tienes una cuenta?
                          <v-btn @click="goLogin" variant="text" color="info"  class="text-wheig-bold text-subtitle-1 pe-0 ps-0">Inicia sesión</v-btn>
                      </p>
                  </v-col>
              </v-row>
          </v-container>
          </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

import {useUserStore} from '@/stores/counter'

export default {
  data () {
    return {
      dialog: false,
      emailRules: [
          value => {
          if (value) return true

          return 'E-mail is requred.'
          },
          value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
          },
      ],
      nombre:'',
      correo:'',
      password:'',

    }
  },
  methods:{
    goLogin(){
      this.$emit('OpenLogin')
      this.dialog=false
    },
    async handleSubmit(){
         
          if(!this.nombre  || !this.correo || this.password.length < 6){
            return alert('llena los campos')
          }
          
            const userStore = useUserStore();

            try {
              await userStore.registerUser(this.correo,this.password);
              
              this.$emit('RegisterNotification',{
                icon: "success",
              })

              console.log('se envio succes')
              this.$router.push('/mycourses')
              
              this.nombre='';
              this.correo='';
              this.password='';
            } catch (error) {
              console.log('se envio un error')
              console.log(error.code, 'Error al registrar al usuario');
              if(error.code == 'auth/email-already-in-use'){
                  this.correo='';
                  this.password='';
                  this.$emit('RegisterNotification',{
                    icon: "errorEmail",
                  })
               
              }else{
                  this.correo='';
                  this.password='';
                  this.$emit('RegisterNotification',{
                    icon: "error",
                  })
              }
              
            }
    }
  }
 
}
</script>

<style>

.v-card .v-card-title {
  line-height: inherit !important; /* O cualquier otro valor que desees */
}


</style>