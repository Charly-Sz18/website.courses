<template>
  <div>
    <v-app-bar color="#14385C" flat>
      <v-container fluid class="d-flex justify-between align-center" style="width: 95%;">
        <div class="d-flex align-center">
          <v-avatar size="50" class="me-3">
            <img src="../assets/Logo/Logo.png" style="width: 100%;" />
          </v-avatar>
          <v-app-bar-title>
            GRUPO GEEC
          </v-app-bar-title>
        </div>
        <div class="ml-7 mt-2">
          <v-select v-model="select" :items="items" item-title="state" item-value="abbr" label="Categorias"
            persistent-hint return-object single-line variant="underlined" density="comfortable">
          </v-select>
        </div>

        <div class="d-flex justify-end bg-surface-variant" >
          <v-card class="estilo " width="300px">
            <v-card-text>
              <v-text-field :loading="loading" density="compact" variant="solo" append-inner-icon="mdi-magnify"
                label="Buscar cursos" single-line hide-details @click:append-inner="onClick" class="chip"></v-text-field>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-app-bar>
  </div>
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

<style>
.no-background .v-input {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
.estilo{
  background-color: #14385C;
}
.chip {
  color: white !important;
  border-radius: 0;
}

</style>