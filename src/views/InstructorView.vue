<template>

  <v-container fluid class="d-flex justify-center" v-if="cardCreateCourse">

    <v-card class="text-center mt-5 m-auto" width="80%" >
      <v-card-item>
        <v-card-title>Unete a la comunidad de instructores </v-card-title>
      </v-card-item>

      <v-card-text>
        <v-btn variant="elevated" class="text-h6 me-3" color="info" rounded="xs" size="x-large" @click="initQuestion" > Crear curso </v-btn>
      </v-card-text>
    </v-card>
    
  </v-container>

 

  <div class="about">
      <v-form @submit.prevent="EnviarForm()">
        <v-container fluid>
          <v-row justify="center" class="mt-5 mb-5 " v-if="itemQuestion==1" >
            <v-col cols="11"  class="containerQuestion" >
              <v-card class="containerQuestion" variant="text">
                <v-container fluid  class="h-75 text-center d-flex flex-column justify-center align-center" >
                 <h2>Elige un titulo para tu curso </h2> 
                 <div class="w-75 m-auto" >
                    <v-text-field
                        v-model="courses.title"
                        variant="solo"
                        label="Titulo"
                        type="text"
                        background-color="#BDBDBD"
                        required
                        >
                    </v-text-field>
                 </div>  
                </v-container>
                <v-card-actions class="h-25">
                  <v-btn variant="elevated" v-if="itemQuestion!=1" class="text-h6 me-3" color="info" rounded="xs" size="x-large" @click="initQuestion" > Anterior </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn variant="elevated" class="text-h6 me-3" color="info" rounded="xs" size="x-large" @click="next" > siguiente </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          
          <v-row justify="center" class="mt-5 mb-5 " v-if="itemQuestion==2" >
            <v-col cols="11"  class="containerQuestion" >
              <v-card class="containerQuestion" variant="text">
                <v-container fluid  class="h-75 text-center d-flex flex-column justify-center align-center" >
                 <h2>¿Qué categoría se corresponde mejor con la de los conocimientos que quieres compartir?</h2> 
                 <div class="w-75 m-auto" >
                  <v-select
                    v-model="courses.categories"
                    :items="itemsCategories"
                    chips
                    label="Chips"
                    multiple
                  ></v-select>
                 </div>  
                </v-container>
                <v-card-actions class="h-25">
                  <v-btn variant="elevated" v-if="itemQuestion!=null" class="text-h6 me-3" color="info" rounded="xs" size="x-large" @click="prev" > Anterior </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn variant="elevated" class="text-h6 me-3" color="info" rounded="xs" size="x-large" @click="next" > siguiente </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <v-row justify="center" class="mt-5 mb-5 " v-if="itemQuestion==3" >
            <v-col cols="11"  class="containerQuestion" >
              <v-card class="containerQuestion" variant="text">
                <v-container fluid  class="h-75 text-center d-flex flex-column justify-center align-center" >
                 <h2>Descrive de manera breve el curso</h2> 
                 <div class="w-75 m-auto" >
                    <v-text-field
                        v-model="courses.ShortDescription"
                        variant="solo"
                        label="Titulo"
                        type="text"
                        background-color="#BDBDBD"
                        required
                        >
                    </v-text-field>
                 </div>  
                </v-container>
                <v-card-actions class="h-25">
                  <v-btn variant="elevated" v-if="itemQuestion!=null" class="text-h6 me-3" color="info" rounded="xs" size="x-large" @click="prev" > Anterior </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn variant="elevated" class="text-h6 me-3" color="info" rounded="xs" size="x-large" @click="next" > siguiente </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <v-row justify="center" class="mt-5 mb-5 " v-if="itemQuestion==4" >
            <v-col cols="11"  class="containerQuestion" >
              <v-card class="containerQuestion" variant="text">
                <v-container fluid  class="h-75 text-center d-flex flex-column justify-center align-center" >
                 <h2>Describe de manera general el curso</h2> 
                 <div class="w-75 m-auto" >
                  <v-textarea
                  v-model="courses.descriptionGeneral"
                  label="Descripción General" 
                  variant="solo-filled">

                  </v-textarea>
                 </div>  
                </v-container>
                <v-card-actions class="h-25">
                  <v-btn variant="elevated" v-if="itemQuestion!=null" class="text-h6 me-3" color="info" rounded="xs" size="x-large" @click="prev" > Anterior </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn variant="elevated" class="text-h6 me-3" color="info" rounded="xs" size="x-large" @click="next" > siguiente </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <v-row justify="center" mt-5 mb-5 v-if="itemQuestion==5" >
            <v-col cols="11"   >
              <v-card  variant="text">
                <v-container fluid   >
                <p><strong>Titulo:</strong> {{ courses.title }}</p>
                <p><strong>categorias:</strong> <template v-for="category in courses.categories">
                  {{ category }}
                </template> </p>
                <p><strong>Descripcion corta:</strong> {{ courses.ShortDescription }}</p>
                <p><strong>Descripcion General:</strong>{{ courses.descriptionGeneral }}</p>
                <v-card>
                  <v-toolbar title="Secciones">
                    <v-btn icon="mdi-plus" size="small" class="me-4  mb-2 mt-2" @click="addseccion"></v-btn>               
                  </v-toolbar>

                  <v-card-text>

                    <v-card class="p-5" v-for="(seccion,index) in courses.secciones" :key="index">
                      <v-col cols="6">
                        <v-text-field v-model="seccion.nameseccion" label="Nombre de seccion" variant="solo-filled" width="50" ></v-text-field>
                      </v-col>
                      
                      <v-col cols="12">
                        <v-card>
                          <v-toolbar title="Lecciones">
                            <v-btn icon="mdi-plus" size="small" class="me-4  mb-2 mt-2" @click="addleccion(index)"></v-btn>
                          </v-toolbar>
                          <v-card-text>
                            <v-row v-for="leccion in seccion.lecciones">
                              <v-col cols="6">
                              <v-text-field v-model="leccion.nameleccion" label="Nombre de leccion" variant="solo-filled" width="50"></v-text-field>
                              </v-col>
                              <v-col cols="6">
                                <v-text-field v-model="leccion.url" label="Url de lección" variant="solo-filled" width="50"></v-text-field>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-card>

                  </v-card-text>
                </v-card>
                







               
                </v-container>
                <v-card-actions class="h-25">
                  <v-btn variant="elevated" v-if="itemQuestion!=null" class="text-h6 me-3" color="info" rounded="xs" size="x-large" @click="prev" > Anterior </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn  type="submit" variant="elevated" v-if="itemQuestion!=null" class="text-h6 me-3" color="info" rounded="xs" size="x-large" > Enviar </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        

      </v-form>
  </div>
</template>

<script>
import {UseWebAPI} from '@/stores/WebApi';
import { useUserStore } from '@/stores/counter'
export default{
 data() {
  const WebAPI= UseWebAPI();
  const userStore = useUserStore()
  return {
    cardCreateCourse: true,
    itemQuestion:null,
    value:[],
    itemsCategories:[
        'Desarrollo Web' ,
        'Desarrollo Móvil',
        'Base de datos' ,
        'Videojuegos',
        'Programación' ,
        'UX/UI',
    ],
    courses: {
      title:'',
      categories:[],
      favorito: false,
      ShortDescription:'',
      status:0,
      instructor:userStore.userData.uid,
      descriptionGeneral:'',
      questionAnswer:null,
      notas:null,
      valoracion:null,
      secciones:[],
    },
    WebAPI,
    userStore,
    
   
  }
 },
 methods: {
  initQuestion(){
    this.cardCreateCourse=false;
    this.itemQuestion=1;
  },
  prev(){
    if(this.itemQuestion>0){
      this.itemQuestion--;
    }

  },
  next(){
    if(this.itemQuestion<6){
      this.itemQuestion++;
    }
      
    
  },
  async EnviarForm(){

    try {
      await this.WebAPI.setCourses(this.courses)
      console.log("exito")
    } catch (error) {
      console.log(error)
    } 

  },
  addseccion(){
    console.log(this.courses)
    let newseccion={
        nameseccion:'',
        lecciones:[],
        status:0,
    }

    this.courses.secciones.push(newseccion);
    
  },
  addleccion(itemseccion){
    let newleccion={
        nameleccion:'',
        url:'',
        status:0,
    }

    this.courses.secciones[itemseccion].lecciones.push(newleccion);

  },
  imprimir(){
    console.log(this.courses)
  }
 },
}
</script>

<style scoped>

.border_new_course{
  border: 1px solid black;
}
.containerQuestion{
  height: 500px;
}
</style>
