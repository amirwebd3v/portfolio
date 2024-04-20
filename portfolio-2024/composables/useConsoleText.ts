interface ConsoleText {
  id: string
  words: string
  order?: number
}




export const useConsoleText = (texts: ConsoleText[],btnGroupId : string) => {
  const consoleCursor = ref<HTMLElement | null>(null)
  const target = ref<HTMLElement | null>(null)
  const btnDisplay = ref<HTMLElement | null>(null)

  const typingSpeed = ref(120) // Adjust typing speed here
  let cursorInterval: ReturnType<typeof setInterval> | null = null
  const currentTextIndex = ref(0)
  const isAnimating = ref(false)
  const sortedTexts = ref<ConsoleText[] | null>(null)


  sortedTexts.value = texts.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))


  const showBtnGroup = () => {
    btnDisplay.value = document.getElementById(btnGroupId)
    btnDisplay.value?.classList.replace('d-none','fade-in-btnGroup')
  }


  const startCursor = () => {
    cursorInterval = setInterval(() => {
      consoleCursor.value?.classList.toggle('hidden')
    }, 400)
  }

  const stopCursor = async () => {
    if (cursorInterval) {
      clearInterval(cursorInterval)
      cursorInterval = null
    }


  }

  // watchEffect(()=>{
  //   console.log('=====================')
  //
  //   console.log('target',target.value)
  //
  //   console.log('st',sortedTexts.value!.map((i) => i.id)[currentTextIndex.value])
  // })

  const startAnimation = async () => {


    for (
      currentTextIndex.value=0;
      currentTextIndex.value < texts.length;
      currentTextIndex.value++
    ) {
      // console.log(currentTextIndex.value)


      target.value = document.getElementById(
        sortedTexts.value!.map((i) => i.id)[currentTextIndex.value],
      )


      if (!isAnimating.value) {
        if (target.value) {
          target.value.innerHTML = '';
        }
       break;
      }





      if (target.value) {



        await new Promise((resolve) => setTimeout(resolve, 1500)) // Adjust pause between texts here

        for (const char of sortedTexts.value!.map((w) => w.words)[currentTextIndex.value]) {

          await new Promise((resolve) => setTimeout(resolve, typingSpeed.value))

          target.value.textContent += char

        }

        if (currentTextIndex.value < sortedTexts.value!.length - 1) {
          target.value.innerHTML += '<br>'
        }
      }
    }
    isAnimating.value = false
    await showBtnGroup()
  }

  onMounted(async () => {
    consoleCursor.value = document.getElementById('consoleCursor')
    consoleCursor.value!.classList.add('console-underscore', 'hidden')
    await startCursor()
    isAnimating.value = true
    await startAnimation()
  })

  onUnmounted(async () => {
    isAnimating.value = false
    await stopCursor()
  })
}


//Todo: fix the clearing issue
