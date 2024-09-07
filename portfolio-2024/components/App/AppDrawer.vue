<script setup lang="ts">
const router = useRouter()
const routes = router.getRoutes().filter((r) => r.path.lastIndexOf('/') === 0)




routes.sort((a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98))



const { width, mobile } = useDisplay();

const drawerState = useState('drawer', () => !mobile.value)
const drawerLocationState = ref<'top' | 'left'>(mobile.value ? 'top' : 'left')


watch(mobile, (newVal) => {

  drawerState.value = !newVal;
  drawerLocationState.value = newVal ? 'top' : 'left';
});




</script>

<template>
  <v-navigation-drawer
    v-model="drawerState"
    width="auto"
    :location="drawerLocationState"
    style="z-index:1004 !important;"
    class="gradiant-transparent"
    elevation="10"
  >

    <v-list nav density="compact" >

      <v-img
        v-if="drawerLocationState === 'left' || $vuetify.display.smAndUp"
        :class="`rounded-circle mx-auto mb-5 ${$vuetify.display.lgAndUp ? 'mt-7' : 'mt-0'}`"
        height="192"
        width="192"
        src="https://1.gravatar.com/avatar/9c5e817f83c3885d42835fd5923dfd266b393d5aa11bad97c7162919610d8ef7?size=256"
        cover
      />
      <v-list-item class="pa-1 pb-10"  v-if="drawerLocationState === 'left' || $vuetify.display.smAndUp">
        <v-list-item-title
          class=" font-weight-bold text-center"
          style="line-height: 2rem; font-size: 24px !important;"

        >
          Amirhossein Zahmatmand
        </v-list-item-title>
        <v-list-item-title
          class="text-primary text-h6 text-center"
          style="line-height: 2rem"
        >
          <span>FRONT-END ENGINEER</span>
        </v-list-item-title>
      </v-list-item>


      <AppDrawerItem v-for="route in routes" :key="route.name" :item="route" />

      <v-list-item class="mt-16" v-if="drawerLocationState === 'left'">
        <span class="text-primary" style="font-size: 12px"> GET IN TOUCH </span>
        <div class="d-flex flex-row mt-5">
          <nuxt-link to="mailto:amirdev@gmail.com" class="text-decoration-none text-white">
            <v-icon icon="mdi-email" size="large" />
          </nuxt-link>
          <nuxt-link to="https://linkedin.com/in/amirdev" class="text-decoration-none text-white">
            <v-icon icon="mdi-linkedin" size="large" />
          </nuxt-link>
          <nuxt-link to="https://github.com/AmirDev" class="text-decoration-none text-white">
            <v-icon icon="mdi-github" size="large" />
          </nuxt-link>
          <nuxt-link to="https://instagram.com/amirdev.me" class="text-decoration-none text-white">
            <v-icon icon="mdi-instagram" size="large" />
          </nuxt-link>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

