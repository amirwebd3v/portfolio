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
  title: 'HOME',
  drawerIndex: 0,
})



const texts = ref([
  { id: 'text1', words: 'Greetings! I\'m Amir,', order: 0 },
  { id: 'text2', words: 'A software engineer with 4 years of experience',  order: 1 },
  { id: 'text3', words: 'I build clean, user-friendly websites that make an impact.', order: 2 },
])

// const texts = ref([
//   { id: 'text1', words: 'H', order: 0 },
//   { id: 'text2', words: 'A ',  order: 1 },
//   { id: 'text3', words: 'i', order: 2 },
// ])


useConsoleText(texts.value,'btnGroup' )




</script>

<template>
  <div class="wrapper" >
    <div class="console-container">

        <span id="text1" class="text-primary font-weight-bold" style="font-size: 65px;"/>
        <span id="text2" style="font-size: 32px;" />
        <span id="text3" style="font-size: 32px;" />
        <div class="console-underscore" id="consoleCursor"
             style="font-size: 32px;">&#95;</div>

      <v-sheet class="d-flex bg-transparent mt-16 pt-16 d-none" id="btnGroup">
        <v-btn class="mr-5"
               color="#BAFF9FE0"
               variant="tonal"
               rounded="lg"
               width="100"
               to="/skills"
               elevation="2">SKILLS</v-btn>
        <v-btn class="mr-5"
               color="#BAFF9FE0"
               variant="tonal"
               rounded="lg"
               width="100"
               to="/portfolio"
               elevation="2">PORTFOLIO</v-btn>
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

