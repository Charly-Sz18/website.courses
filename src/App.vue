<template>
  <v-app>
   
    <HeaderUser v-if="$route.name!=='home'"/>
     
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue';
import { UseWebAPI } from '@/stores/WebAPI';
export default {
  name: 'App',
  components:{
    HeaderUser,
  
  },
  data(){
    const WebAPI= UseWebAPI();
    return{
      WebAPI,
    }
  }, created() {
    if (!this.isDataLoaded) {
      this.loadData();
    }
  },
  methods: {
    async loadData() {
      try {
        await this.WebAPI.getCourses();
        console.log(this.coursesList);
        this.isDataLoaded = true;
      } catch (error) {
        console.error('Error al obtener cursos:', error);
      }
    }
  },
  
  
  
}
</script>

<style>

.swal2-container {
  z-index: 300000;
}

body{
  padding-right: 0px !important;
}

</style>
