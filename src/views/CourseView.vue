<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-card>
          <p></p>
          <v-card-title class="course-title">{{coursesList[id].title}}</v-card-title>
          <v-chip variant="elevated" color="web" class="ma-4 chip rounded tag" style="height: 20px;">Web</v-chip>
          <v-card-text>
            <div class="video-container">
              <iframe width="560" height="315" :src="url" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-expansion-panels>
          
          <v-expansion-panel v-for="seccion in coursesList[id].secciones">
            <v-expansion-panel-title>
              <v-row no-gutters>
                <v-col cols="12" class="d-flex justify-start">
                  {{seccion.nameseccion}}
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-list-item
                v-for="(leccion,i) in seccion.lecciones" 
                :key="i"
                @click="MenuOption(leccion.url)"
              >
                <v-list-item-title>{{ leccion.nameleccion }}</v-list-item-title>
              </v-list-item>
              
            </v-expansion-panel-text>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue';
import { UseWebAPI } from '../stores/WebAPI';

export default {
  components: {
    HeaderUser
  },
  async created() {
    const id = this.$route.params.id;
    this.id = id;
  },
  data(){
    const WebAPI=UseWebAPI()
    const {coursesList} = WebAPI;
    return{
      WebAPI,
      coursesList,
      url:'',
    }
  },
  methods: {
    datos(){
      console.log(this.coursesList)
    },
    MenuOption(video){
      console.log(video)
      this.url= video;
    }


  },
  
  mounted() {
    this.datos()
  },
};
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.course-title {
  font-size: 24px;
  font-weight: bold;
  color: #2F80ED;
}

.course-category {
  display: inline-block;
  padding: 4px 8px;
  background-color: #3498db;
  color: #fff;
  border-radius: 4px;
}

.category-label {
  font-weight: bold;
}

.tag {
  color: white !important;
}
</style>