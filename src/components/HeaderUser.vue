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
      <v-select v-model="select" :items="items" item-title="state" item-value="abbr" label="Categorias" persistent-hint
        return-object single-line variant="outlined" style="border: 0px solid;" density="comfortable">
      </v-select>
    </div>
    <v-spacer></v-spacer>

    <v-responsive class="mx-auto mr-5" max-width="344">
      <v-text-field :loading="loading" density="compact" append-inner-icon="mdi-magnify" label="Buscar cursos" single-line
        hide-details @click:append-inner="onClick" class="chip"></v-text-field>
    </v-responsive>

  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      loading: false,
      selectedOption: null, // Opción seleccionada
      open: ['admins'],
      options: ['Todos los cursos', 'Desarrollo web', 'Desarrollo mòvil', 'Base de datos', 'Videojuegos', 'UX/UI', 'Programaciòn'], // Lista de opciones
      admins: [
        '1', '2', '3', '4', '5', '6'
      ],
      select: { state: 'Categorias' },
      items: [
        { state: 'Todos los cursos' },
        { state: 'Desarrollo web' },
        { state: 'Desarrollo movil' },
        { state: 'Base de datos' },
        { state: 'Video juegos' },
      ],
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
  },
};
</script>