<template>
  <HeaderUser> </HeaderUser>
  <v-tabs
      class="mt-8 ml-8"
      v-model="tab"
      color="#14385C"
    >
      <v-tab value="1">Mis cursos</v-tab>
      <v-tab value="2">Favoritos</v-tab>
      <v-tab value="3">Completados</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
      class="mt-3"
      value="1">
      <CourseCard></CourseCard>
      </v-window-item>
      <v-window-item value="2"> 
        <p> Hola 2 </p>
      </v-window-item>
      <v-window-item value="3"> 
        <p> Hola 3 </p>
      </v-window-item>
    </v-window>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
import HeaderUser from '@/components/HeaderUser.vue';
export default {
  components: {
    CourseCard, 
    HeaderUser
  },
  data() {
    return {
      tab: null,
    };
  },
}


</script>

<style></style>