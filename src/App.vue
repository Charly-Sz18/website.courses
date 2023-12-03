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

export default {
  name: 'App',
  components:{
    HeaderUser,
  
  },
  data: () => ({
    //
  }),
  
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
