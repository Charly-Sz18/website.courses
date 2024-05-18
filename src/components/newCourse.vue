<template>
  <!-- Contenido del formulario para agregar un nuevo curso -->
  <v-container fluid>
    <v-card class="mt-5 m-auto" width="100%" style="max-height: 600px; overflow-y: auto;">
      <v-card-title class="text-h4 text-center font-weight-black blue--text mb-7 mt-5">
        Agregar curso
      </v-card-title>
      <v-card-text>
        <p class="text-h6 mb-5 ">Información del curso</p>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="Nombre del curso" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-center">
              <v-select :items="itemsCategories" label="Categoría" variant="outlined"></v-select>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12">
            <v-textarea rows="2" label="Descripción" variant="outlined" class="mt-n9"></v-textarea>
          </v-col>
        </v-row>
        <p class="text-h6">Contenido del curso</p>
        <v-btn @click="agregarTema" variant="elevated" class="me-3" color="info" rounded="xs" size="small">Agregar tema</v-btn>
        <v-card color="#EFF8FF" class="mt-4" width="100%" v-for="(tema, index) in temas" :key="index">
          <v-expand-transition>
            <div>
              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="8">
                    <v-text-field label="Título del tema" variant="outlined"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <div class="text-right">
                      <v-btn @click="eliminarTema(index)" elevation="0" size="small" color="red" style="margin-right: 30px;">
                        Eliminar
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="8">
                    <v-text-field mx-auto label="Descripción" variant="outlined" class="mt-n9"></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-btn @click="agregarSubtema(index)" color="info" size="small">Agregar subtema</v-btn>
                <div v-for="(subtema, subtemaIndex) in tema.subtemas" :key="subtemaIndex">
                  <v-expand-transition>
                    <div v-show="true">
                      <v-row class="mt-1">
                        <v-col cols="12" sm="6">
                          <v-text-field label="Título del subtema" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field label="Enlace del video" variant="outlined"></v-text-field>
                        </v-col>
                      </v-row>
                    </div>
                  </v-expand-transition>
                </div>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-card-text>
      <v-row>
        <v-col xs12 sm6 md4>
          <div class="text-right">
            <v-btn @click="$emit('close')" width="100" class="text-none text-subtitle-1 ma-2 chip rounded" color="#BDBDBD" size="small" variant="elevated">Cancelar</v-btn>
          </div>
        </v-col>
        <v-col xs12 sm6 md4>
          <v-btn @click="$emit('close')" width="100" class="text-none text-subtitle-1 ma-2 chip rounded" color="info" size="small" variant="elevated">Aceptar</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showTema: false,
      temas: [],
      itemsCategories: [
        'web',
        'mobile',
        'bd',
        'videogames',
        'programming',
        'ux/ui',
      ],
    };
  },
  methods: {
    agregarTema() {
      this.temas.push({ mostrarSubtema: false, subtemas: [] });
    },
    agregarSubtema(index) {
      if (!this.temas[index].subtemas) {
        this.$set(this.temas[index], 'subtemas', []);
      }
      this.temas[index].subtemas.push({});
    },
    eliminarTema(index) {
      this.temas.splice(index, 1);
    },
    eliminarSubtema(temaIndex, subtemaIndex) {
      this.temas[temaIndex].subtemas.splice(subtemaIndex, 1);
    }
  }
};
</script>
