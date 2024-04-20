<script setup lang="ts">
// const name = ref('')
// function sayHi() {
//   Notify.success(`Hi, ${name.value}!`)
// }
// function warning() {
//   Notify.warning(`How dare you refuse me, ${name.value}.`)
// }
definePageMeta({
  icon: 'mdi-home',
  title: 'Home',
  drawerIndex: 0,
})



// const texts = ref([
//   { id: 'text1', words: 'Hi, I\'m Amir.', order: 0 },
//   { id: 'text2', words: 'A software engineer with 3 years of experience',  order: 1 },
//   { id: 'text3', words: 'in front-end and back-end web development.', order: 2 },
// ])

const texts = ref([
  { id: 'text1', words: 'H', order: 0 },
  { id: 'text2', words: 'A ',  order: 1 },
  { id: 'text3', words: 'i', order: 2 },
])


useConsoleText(texts.value,'btnGroup' )




</script>

<template>
  <div class="wrapper" >
    <div class="console-container">

        <span id="text1" class="text-primary" style="font-size: 65px; font-weight: bold;"/>
        <span id="text2" style="font-size: 32px;"/>
        <span id="text3" style="font-size: 32px;"/>
        <div class="console-underscore" id="consoleCursor"
             style="font-size: 32px;">&#95;</div>

      <v-sheet class="d-flex bg-transparent mt-16 pt-16 d-none" id="btnGroup">
        <v-btn class="mr-5" variant="tonal" width="100" rounded="md" elevation="2">Skills</v-btn>
        <v-btn class="mr-5" variant="tonal" width="100" rounded="md" elevation="2">Portfolio</v-btn>
      </v-sheet>
    </div>
    <div class="light x1"/>
    <div class="light x2" v-show="!$vuetify.display.mobile"/>
    <div class="light x3"/>
    <div class="light x4" v-show="!$vuetify.display.mobile"/>
    <div class="light x5"/>
    <div class="light x6" v-show="!$vuetify.display.mobile"/>
    <div class="light x7" v-show="!$vuetify.display.mobile"/>
    <div class="light x8"/>
    <div class="light x9" v-show="!$vuetify.display.mobile"/>
  </div>
</template>

