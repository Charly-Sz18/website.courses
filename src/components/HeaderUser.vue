<template>
  <v-app-bar app color="#14385C">
    <div class="d-flex align-center ml-5">
      <v-avatar size="50" class="me-3">
        <img src="../assets/Logo/Logo.png" style="width: 100%;" />
      </v-avatar>
      <v-app-bar-title>
        GRUPO GEEC
      </v-app-bar-title>
    </div>
    <div class="ml-7 mt-4">
      <v-select v-model="selectedOption" :items="options" @change="redirectToCategoryView"></v-select>
    </div>
    <v-spacer></v-spacer>
    <v-responsive class="mx-auto mr-5" max-width="250">
      <v-text-field :loading="loading" density="compact" append-inner-icon="mdi-magnify" label="Buscar cursos" single-line
        hide-details @click:append-inner="onClick" class="chip" variant="solo"></v-text-field>
    </v-responsive>
    <v-col cols="auto">
      <v-btn icon="mdi mdi-account-circle" size="x-large"></v-btn>
    </v-col>
  </v-app-bar>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
      loaded: false,
      loading: false,
      selectedOption: 'Todos los cursos',
      options: ['Todos los cursos', 'Desarrollo web', 'Desarrollo móvil', 'Base de datos', 'Videojuegos', 'UX/UI', 'Programación'],
    };
  },

  methods: {
    onClick() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
    redirectToCategoryView() {
      if (this.selectedOption && this.selectedOption !== 'Todos los cursos') {
        this.$router.push({ name: 'course-category', params: { category: this.selectedOption } });
      } else {
        this.$router.push({ name: 'home' });
      }
    },
   
    setup() {
      const router = useRouter();
    return {
      router,
      } 
    },
  },
};
</script>