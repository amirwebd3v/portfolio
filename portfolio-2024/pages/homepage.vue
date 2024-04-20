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


usePageShow('homepage')


</script>

<template>
  <div class="wrapper d-none" id="homepage">
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
    <div class="light x2" v-show="$vuetify.display.smAndUp"/>
    <div class="light x3"/>
    <div class="light x4" v-show="$vuetify.display.smAndUp"/>
    <div class="light x5"/>
    <div class="light x6" v-show="$vuetify.display.smAndUp"/>
    <div class="light x7" v-show="$vuetify.display.smAndUp"/>
    <div class="light x8"/>
    <div class="light x9" v-show="$vuetify.display.smAndUp"/>
  </div>
</template>

<style>
@media (max-width: 767px) {
  [id="text1"] {
    font-size: 45px !important;
  }
  [id="text2"], [id="text3"], [id="consoleCursor"] {
    font-size: 1.5rem !important;
  }

  .console-container {
    margin:200px 50px !important;
  }
}

@media (min-width: 768px) {
  [id="text1"] {
    font-size: 65px !important;
  }
  [id="text2"], [id="text3"], [id="consoleCursor"] {
    font-size: 32px !important;
  }


}
.fade-in-btnGroup {
  animation-duration: 1.5s;
  animation-fill-mode: both;
  animation-delay: 1.5s;
  animation-name: fadeInLeft;
}





@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}


.hidden {
  opacity: 0;
}

.console-container {
  text-justify: inter-character;
  text-align:left;
  height:200px;
  width:auto;
  display:block;
  position:absolute;
  margin:200px 85px;
}

.console-underscore {
  display: inline-block;
  position: relative;
}

.wrapper {
  position: relative;
  text-align: center;
  margin: 0;
  height: 100vh;
  font-weight: 100;
  background: radial-gradient(#530426, #03192c);
  overflow-y: hidden;
  animation: fadeIn 1 1s ease-out;
}

.light {
  position: absolute;
  width: 0;
  background-color: white;
  box-shadow: #e9f1f1 0 0 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.x1 {
  animation: floatUp 4s infinite linear;
  transform: scale(1);
}

.x2 {
  animation: floatUp 7s infinite linear;
  transform: scale(1.6);
  left: 15%;
}

.x3 {
  animation: floatUp 2.5s infinite linear;
  transform: scale(0.5);
  left: -15%;
}

.x4 {
  animation: floatUp 4.5s infinite linear;
  transform: scale(1.2);
  left: -34%;
}

.x5 {
  animation: floatUp 8s infinite linear;
  transform: scale(1.2);
  left: -57%;
}

.x6 {
  animation: floatUp 3s infinite linear;
  transform: scale(0.5);
  left: -81%;
}

.x7 {
  animation: floatUp 5.3s infinite linear;
  transform: scale(2.1);
  left: 37%;
}

.x8 {
  animation: floatUp 4.7s infinite linear;
  transform: scale(1.7);
  left: 62%;
}

.x9 {
  animation: floatUp 4.1s infinite linear;
  transform: scale(0.9);
  left: 85%;
}

@keyframes floatUp {
  0% {
    top: 100vh;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 0;
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: -100vh;
    opacity: 0;
  }
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}

@keyframes finalFade {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}
</style>
