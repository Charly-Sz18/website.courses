<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components:{
  
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
