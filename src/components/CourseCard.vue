<template>
  <v-col class=" mx-7 mb-4" xs12 sm6 md4>
    <v-card class="elevation-4 rounded" width="300">
      <v-card-title>
        <img src="../assets/ImagenesHome/rectangulo.png" class="imagen" />
      </v-card-title>
      <v-card-text>
        <v-chip class="ma-2 titulo" color="red" variant="elevated">
          Web
        </v-chip>
        <P>
          React básico
        </P>
        <br>
        <p> Descripcion del curso</p>

        <div class="text-right">
          <v-btn class="text-none text-subtitle-1 ma-2" color="orange" size="small" variant="elevated" >
            continuar
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
</script>

<style>
.imagen {
  width: 271px;
  height: 150px;
  left: 72px;
  top: 248px;
}
.titulo{
  color: white !important;
}
</style>