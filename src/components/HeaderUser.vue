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
        <div class="my-select">
          <v-select v-model="select"  :items="items" item-title="state"
            item-value="abbr" label="Categorias" persistent-hint return-object single-line></v-select>
        </div>
       <!--  <v-list v-model:opened="open">
          <v-list-group value="Admin">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Admin"></v-list-item>
            </template>
            <v-list-item
              v-for="([title, icon], i) in admins"
              :key="i"
              :title="title"
              :prepend-icon="icon"
              :value="title"
            ></v-list-item>
          </v-list-group>
        </v-list> -->
      </v-container>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectedOption: null, // Opción seleccionada
      open: ['admins'],
      options: ['Todos los cursos', 'Desarrollo web', 'Desarrollo mòvil', 'Base de datos', 'Videojuegos', 'UX/UI','Programaciòn'], // Lista de opciones
      admins: [
        '1', '2', '3', '4', '5', '6'
      ],
      select: { state: 'Categorias' },
      items: [
        { state: 'Todos los cursos'},
        { state: 'Desarrollo web' },
        { state: 'Desarrollo movil'},
        { state: 'Base de datos'},
        { state: 'Video juegos' },
      ],
    };
  },
};
</script>

<style>
.my-select .v-select__slot {
  background-color: transparent !important;
}
</style>