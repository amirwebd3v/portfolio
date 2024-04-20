<script setup lang="ts">

const route = useRoute()
const title = computed(() => {
  return route.meta?.title || route.matched[0].meta?.title || ''
})
useHead({
  title,
  titleTemplate: (t) => (t ? `AmirZm | ${t}` : 'Amirhossein'),
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

    <AppBar  />


    <AppDrawer/>

    <v-main>
      <NuxtPage />
    </v-main>

    <AppFooter/>
  </v-app>
</template>

<style>
.v-main {
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 0;
  margin-top: 0;
  overflow-y: auto;
  transition-property: padding;
  @media (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    --v-layout-left:468px!important;
  }
}

.fade-in-page-cards {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: .1s;
  animation-name: fadeInLeft;
}

</style>
