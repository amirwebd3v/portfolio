<script setup lang="ts">
import { THEME_KEY } from 'vue-echarts'

const theme = useTheme()
provide(
  THEME_KEY,
  computed(() => (theme.current.value.dark ? 'dark' : undefined)),
)
const route = useRoute()
const title = computed(() => {
  return route.meta?.title || route.matched[0].meta?.title || ''
})
useHead({
  title,
  titleTemplate: (t) => (t ? `${t} | AmirZm` : 'Amirhossein'),
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
})
useSeoMeta({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  description: 'Amir , Web developer (Nuxt, Laravel) , Designer',
  ogImage: '/social-image.png',
  twitterImage: '/social-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <v-app>
    <AppDrawer />
    <AppBar/>
    <v-main :style="route.name !== 'homepage' ? 'margin-top: 64px;' : 'margin-top: 0'">
      <NuxtPage />
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<style scoped>
.v-main {
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 0;
  height: calc(100vh - 64px - 32px);
  overflow-y: auto;
  transition-property: padding;
}
</style>
