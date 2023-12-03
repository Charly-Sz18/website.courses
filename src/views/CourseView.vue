<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title class="course-title">{{ id }}</v-card-title>
          <v-chip variant="elevated" color="web" class="ma-4 chip rounded tag" style="height: 20px;">Web</v-chip>
          <v-card-text>
            <div class="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/TU5-RvJ5GJI" frameborder="0"
                allowfullscreen></iframe>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-expansion-panels>

          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row no-gutters>
                <v-col cols="12" class="d-flex justify-start">
                  Introducción a React
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row no-gutters>
                <p>1.1 ¿Qué es?</p>
              </v-row>
              <v-row no-gutters>
                <p>1.1 ¿Qué es?</p>
              </v-row>
              <v-row no-gutters>
                <p>1.1 ¿Qué es?</p>
              </v-row>
              <v-row no-gutters>
                <p>1.1 ¿Qué es?</p>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels>

          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row no-gutters>
                <v-col cols="12" class="d-flex justify-start">
                  Introducción a React
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row no-gutters>
                <p>1.1 ¿Qué es?</p>
              </v-row>
              <v-row no-gutters>
                <p>1.1 ¿Qué es?</p>
              </v-row>
              <v-row no-gutters>
                <p>1.1 ¿Qué es?</p>
              </v-row>
              <v-row no-gutters>
                <p>1.1 ¿Qué es?</p>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue';

export default {
  components: {
    HeaderUser
  },
  async created() {
    const id = this.$route.params.id;
    this.id = id;
  },
  data: () => ({
  }),
};
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
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
  color: #2F80ED;
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
</style>