<script setup lang="ts">

</script>

<template>
  <v-app class="gradiant-transparent">
    <v-container  >
      <NuxtPage/>
    </v-container>
  </v-app>
</template>

<style scoped>

.v-container {
  max-width: 920px!important;
}


@media screen and (max-width: 1000px)  {
  .v-container {
    max-width: 1000px!important;
  }

}

</style>
