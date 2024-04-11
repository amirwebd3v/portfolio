interface ConsoleText {
  id: string;
  words: string;
  order?: number;
}

export const useConsoleText = async ({ texts, cursorId = 'consoleCursor' }: { texts: ConsoleText[], cursorId?: string }) => {
  const consoleCursor = ref<HTMLElement | null>(null);
  const typingSpeed = ref(150); // Adjust typing speed here

  await onMounted(async () => {
    const cursorInterval = setInterval(() => {
      consoleCursor.value?.classList.toggle('hidden'); // Use optional chaining
    }, 400);

    onUnmounted(() => clearInterval(cursorInterval));

    consoleCursor.value = document.getElementById(cursorId);
    if (!consoleCursor.value) {
      throw new Error('Console cursor element not found');
    }
    consoleCursor.value.classList.add('console-underscore', 'hidden');

    const sortedTexts = texts.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    let currentTextIndex = 0;
    let isWaiting = false;

    const typeText = async (textElement: HTMLElement, text: string) => {
      for (const char of text) {
        await new Promise((resolve) => setTimeout(resolve, typingSpeed.value));
        textElement.textContent += char;
      }

      if (currentTextIndex < sortedTexts.length - 1) {
        textElement.innerHTML += '<br>';
      }
      currentTextIndex++;
      isWaiting = true;
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust pause between texts here
      isWaiting = false;
    };

    if (sortedTexts.length > 0) {
      for (const { id, words } of sortedTexts) {
        const target = document.getElementById(id);
        if (target) {
          await typeText(target, words);
        }
      }
    }
  });
};
