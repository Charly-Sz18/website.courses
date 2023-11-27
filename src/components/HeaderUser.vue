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
    <div style="width: 300px;">
      <v-select
        v-model="select"
        :items="items"
        item-title="state"
        item-value="abbr"
        label="Categorias"
        single-line
        variant="outlined"
        density="comfortable"
        class="ml-7 mt-4"
      ></v-select>
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
      select: null,
      items: [
        { abbr: 'all', state: 'Todos los cursos'},
        { abbr: 'web', state: 'Desarrollo Web' },
        { abbr: 'mobile', state: 'Desarrollo Móvil' },
        { abbr: 'bd', state: 'Base de datos' },
        { abbr: 'videogames', state: 'Videojuegos' },
        { abbr: 'programming', state: 'Programación' },
        { abbr: 'uxui', state: 'UX/UI' },
      ],
    };
  },
  created() {
    console.log(this.$route.params.category);
    this.select = this.$route.params.category;
  },
  watch: {
    select(newValue) {
      this.$router.push({ path: '/courses/category/' + newValue})      
    },
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