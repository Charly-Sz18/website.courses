<template>
  <v-col class=" mx-7 mb-4" xs12 sm6 md4>
    <v-card class="elevation-4 rounded" width="300">
      <v-card-title>
        <v-img class="align-end text-white" height="150" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover></v-img>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col md="6">
            <v-chip class="ma-2 chip rounded" :color="courses.category" variant="elevated" style="height:20px;">
              {{ getCategoryFullName(courses.category) }}
            </v-chip>
          </v-col>
          <v-col md="6">
            <v-switch class="d-flex justify-end align-center" v-model="courses.visible" color="blue"></v-switch>
          </v-col>
        </v-row>
        <v-container>
          <v-row>
            <v-divider vertical class="blue-divider"></v-divider>
            <v-col>
              <p>
                {{ courses.tittle }}
              </p>
            </v-col>
          </v-row>
        </v-container>
        <p class="ml-2"> {{ courses.description }}</p>
        <br>
        <v-row>
          <v-col xs12 sm6 md4>
            <v-btn width="100" class="text-none text-subtitle-1 ma-2 chip rounded" color="#F2994A" size="small"
              variant="elevated">
              Editar
            </v-btn>
          </v-col>
          <v-col xs12 sm6 md4>
            <v-btn width="100" class="text-none text-subtitle-1 ma-2 chip rounded" color="red" size="small"
              variant="elevated">
              Eliminar
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    courses: Object,
    required: true,
  },
  data() {
    return {
      liked: false,
    };
  },
  methods: {
    getCategoryFullName(abbreviation) {
      const categoryMappings = {
        web: 'Desarrollo web',
        mobile: 'Desarrollo móvil',
        bd: 'Base de datos',
        videogames: 'Videojuegos',
        uxui: 'UX/UI',
        programming: 'Programación',
      };
      return categoryMappings[abbreviation] || abbreviation;
    },
  },
};
</script>

<style>
.chip {
  color: white !important;
  border-radius: 0;
}

.heart-button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: gray;
  transition: color 0.2s;
  height: 100%;
}

.heart-button.liked {
  color: red;
}

.blue-divider {
  border-left: 4px solid #3700B3;
  height: 20px;
  margin-top: 15px;
}
</style>