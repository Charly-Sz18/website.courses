<template>
    <div>
        <v-app-bar  color="#14385C" flat>
            <v-container fluid class="d-flex justify-center align-center " style="width: 95%; " >
                <v-avatar  size="50" class="me-3">
                    <img src="../assets/Logo/Logo.png" style="width: 100%;"/>
                </v-avatar>

                
                <v-app-bar-title >
                    GRUPO GEEC
                </v-app-bar-title>

                <v-btn>¡Comienza ya!</v-btn>
                
                <v-app-bar-nav-icon 
                    @click="drawer = true" 
                    class="d-flex d-sm-none">
                </v-app-bar-nav-icon>
            </v-container>            
        </v-app-bar>
  
    </div>
    
    
</template>

<script>
export default {
   data() {
    return {
        
    }
   },

}
</script>

<style lang="scss" scoped>

</style>