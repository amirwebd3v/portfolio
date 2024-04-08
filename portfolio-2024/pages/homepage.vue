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
  title: 'Homepage',
  drawerIndex: 0,
})
</script>

<template>
  <div class="wrapper">
    <p id="head1" class="header text-primary">Awesome designs</p>
    <p id="head2" class="header text-primary">Just</p>
    <p id="head3" class="header text-primary">For you</p>
    <p id="head4" class="header text-primary">
      simple and awesome all the time
    </p>
    <p id="head5" class="header text-primary">Welcome to BA designs</p>
    <div class="light x1"></div>
    <div class="light x2" v-show='$vuetify.display.smAndUp'></div>
    <div class="light x3"></div>
    <div class="light x4" v-show='$vuetify.display.smAndUp'></div>
    <div class="light x5"></div>
    <div class="light x6" v-show='$vuetify.display.smAndUp'></div>
    <div class="light x7" v-show='$vuetify.display.smAndUp'></div>
    <div class="light x8"></div>
    <div class="light x9" v-show='$vuetify.display.smAndUp'></div>
  </div>
</template>

<style scoped>
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

@-webkit-keyframes floatUp {
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
@-moz-keyframes floatUp {
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
@-o-keyframes floatUp {
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

.header {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 2em;
}

#head1,
#head2,
#head3,
#head4,
#head5 {
  opacity: 0;
}

#head1 {
  animation: fadeOut 1 5s ease-in;
}

#head2 {
  animation: fadeOut 1 5s ease-in;
  animation-delay: 6s;
}

#head3 {
  animation: fadeOut 1 5s ease-in;
  animation-delay: 12s;
}

#head4 {
  animation: fadeOut 1 5s ease-in;
  animation-delay: 17s;
}

#head5 {
  animation: finalFade 1 5s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 22s;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

@-webkit-keyframes fadeOut {
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

@-moz-keyframes fadeOut {
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

@-o-keyframes fadeOut {
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

@-webkit-keyframes finalFade {
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

@-moz-keyframes finalFade {
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

@-o-keyframes finalFade {
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
