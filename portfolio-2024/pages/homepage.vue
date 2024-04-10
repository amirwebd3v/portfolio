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


onMounted(() => {
  consoleText(['bye', 'A freelance software engineer with.'], 'text');
})




function consoleText(words: string[], id: string, color: string = '#fff') : () => void {
  const console = document.getElementById('console');
  const target = document.getElementById(id);

  if (!console || !target) {
    throw new Error('Console or target element not found');
  }

  target.style.color = color;

  let visibleCursor = true;
  let letterIndex = 0;
  let currentWordIndex = 0;
  let isWaiting = false;

  const typingInterval = setInterval(() => {
    if (letterIndex === words[currentWordIndex].length && !isWaiting) {
      isWaiting = true;
      if (words.length > 1) {
        target.innerHTML += '<br>';
      }
      setTimeout(() => {
        words.shift();
        letterIndex = 0;
        currentWordIndex = 0;
        target.style.color = color;
        isWaiting = false;
      }, 1000);
    } else if (!isWaiting) {
      target.innerHTML += words[currentWordIndex][letterIndex];
      letterIndex += 1;
    }
  }, 120);

  const cursorInterval = setInterval(() => {
    console.className = visibleCursor
      ? 'console-underscore hidden'
      : 'console-underscore';
    visibleCursor = !visibleCursor;
  }, 400);

  return () => {
    clearInterval(typingInterval);
    clearInterval(cursorInterval);
  };
}
</script>

<template>
  <div class="wrapper">
    <div class="console-container">
        <span id="text" />
        <div class="console-underscore" id="console">&#95;</div>
    </div>
    <div class="light x1"></div>
    <div class="light x2" v-show="$vuetify.display.smAndUp"></div>
    <div class="light x3"></div>
    <div class="light x4" v-show="$vuetify.display.smAndUp"></div>
    <div class="light x5"></div>
    <div class="light x6" v-show="$vuetify.display.smAndUp"></div>
    <div class="light x7" v-show="$vuetify.display.smAndUp"></div>
    <div class="light x8"></div>
    <div class="light x9" v-show="$vuetify.display.smAndUp"></div>
  </div>
</template>

<style scoped>
.hidden {
  opacity: 0;
}

.console-container {
  font-size: 2em;
  text-align: left;
  height: 200px;
  width: auto;
  display: block;
  position: absolute;
  color: white;
  top: 20px;
  //bottom: 0;
  left: 20px;
  right: auto;
  margin: auto;
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
