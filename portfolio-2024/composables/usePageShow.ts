export const usePageShow = (pageId: string) => {
  const pageDisplay = ref<HTMLElement | null>(null)
  const showPage = () => {
    pageDisplay.value = document.getElementById(pageId)
    pageDisplay.value!.classList.replace('d-none', 'fade-in-page-cards')
  }
  onMounted(async () => {
    await showPage()
  })
}
