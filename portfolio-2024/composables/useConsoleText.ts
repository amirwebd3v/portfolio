import { ref, onMounted, onUnmounted } from 'vue'

interface ConsoleTextOptions {
  words: string[]
  id: string
  color?: string
}

export const useConsoleText = ({ words, id, color = '#fff' }: ConsoleTextOptions) => {
  const consoleCursor = ref<HTMLElement | null>(null)
  const target = ref<HTMLElement | null>(null)

  onMounted(() => {
    consoleCursor.value = document.getElementById('consoleCursor')
    target.value = document.getElementById(id)

    if (!consoleCursor.value || !target.value) {
      throw new Error('Console or target element not found')
    }

    target.value.style.color = color

    let visibleCursor = true
    let letterIndex = 0
    let currentWordIndex = 0
    let isWaiting = false

    const typingInterval = setInterval(() => {
      if (words[currentWordIndex] && letterIndex === words[currentWordIndex].length && !isWaiting) {
        isWaiting = true
        if (words.length > 1) {
          target.value!.innerHTML += '<br>'
        }
        setTimeout(() => {
          words.shift()
          letterIndex = 0
          currentWordIndex = 0
          target.value!.style.color = color
          isWaiting = false
        }, 1000)
      } else if (!isWaiting && words[currentWordIndex]) {
        target.value!.innerHTML += words[currentWordIndex][letterIndex] || ''
        letterIndex += 1
      }
    }, 120)

    const cursorInterval = setInterval(() => {
      consoleCursor.value!.className = visibleCursor ? 'console-underscore hidden' : 'console-underscore'
      visibleCursor = !visibleCursor
    }, 400)

    onUnmounted(() => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    })

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  })
}
