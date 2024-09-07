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
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>


