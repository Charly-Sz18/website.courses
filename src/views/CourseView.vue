<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <p></p>
          <v-card-title class="course-title">{{ coursesList[id]?.title }}</v-card-title>
          <v-chip variant="elevated" color="web" class="ml-4 chip rounded tag" style="height: 20px">Web</v-chip>
          <v-card-text>
            <div class="video-container">
              <iframe
                width="100%"
                height="100%"
                :src="url"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-expansion-panels multiple v-model="openedPanels">
          <v-expansion-panel v-for="(seccion, index) in coursesList[id]?.secciones" :key="index" class="mb-3">
            <v-expansion-panel-title>
              <v-row no-gutters align="center">
                <v-col cols="12" class="section">
                  <v-badge color="info" :content="index + 1" inline></v-badge>
                  <p>{{ seccion.nameseccion }}</p>
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-list-item
                v-for="(leccion, i) in seccion.lecciones"
                :key="i"
                @click="MenuOption(leccion.url, index, i)"
                :class="{ 'selected-item': selectedItem === `${index}-${i}` }"
              >
                <v-list-item-title>{{ `${index + 1}.${i + 1} - ${leccion.nameleccion}` }}</v-list-item-title>
              </v-list-item>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderUser from "@/components/HeaderUser.vue";
import { UseWebAPI } from "../stores/WebAPI";
export default {
  components: {
    HeaderUser,
  },
  async created() {
    const id = this.$route.params.id;
    this.id = id;
  },
  data() {
    const WebAPI = UseWebAPI();
    const { coursesList } = WebAPI;
    return {
      WebAPI,
      coursesList,
      url: "",
      selectedItem: null,
      openedPanels: [0],
    };
  },
  methods: {
    datos() {
      console.log(this.coursesList);
    },
    MenuOption(video, seccionIndex, leccionIndex) {
      console.log(video);
      this.url = video;
      this.selectedItem = `${seccionIndex}-${leccionIndex}`;
    },
  },
  mounted() {
    this.datos();
    const url = this.coursesList[this.id]?.secciones[0].lecciones[0].url
    console.log("Secciones===>", url)
    this.MenuOption(url, 0, 0)
  },
};
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 50%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.course-title {
  font-size: 24px;
  font-weight: bold;
  color: #2f80ed;
}

.course-category {
  display: inline-block;
  padding: 4px 8px;
  background-color: #3498db;
  color: #fff;
  border-radius: 4px;
}

.category-label {
  font-weight: bold;
}

.tag {
  color: white !important;
}

.section {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.selected-item {
  background-color: #addaffad;
  border-radius: 5px;
}

@media (max-width: 960px) {
  .video-container {
    padding-bottom: 75%;
  }
}
</style>