<script setup lang="ts">
const router = useRouter()
const routes = router.getRoutes().filter((r) => r.path.lastIndexOf('/') === 0)
const drawerState = useState('drawer', () => true)


const { mobile, lgAndUp, width } = useDisplay()
const drawer = computed({
  get() {
    return drawerState.value || !mobile.value
  },
  set(val: boolean) {
    drawerState.value = val
  },
})
const rail = computed(() => !drawerState.value && !mobile.value)
routes.sort((a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98))

nextTick(() => {
  drawerState.value = lgAndUp.value && width.value !== 1280
})
</script>

<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" width="368">
    <template #prepend>
      <v-list>
        <v-img
          class="rounded-circle mx-auto mb-5"
          :height="drawerState ? 256 : 36"
          :width="drawerState  ? 256 : 36"
          src="https://1.gravatar.com/avatar/9c5e817f83c3885d42835fd5923dfd266b393d5aa11bad97c7162919610d8ef7?size=256"
          cover
        />
        <v-list-item class="pa-1" v-if="drawerState">
          <v-list-item-title
            class="text-h5 font-weight-bold text-center"
            style="line-height: 2rem"
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
      </v-list>
    </template>


    <v-list class="mt-10">
      <AppDrawerItem v-for="route in routes" :key="route.name" :item="route" />

      <v-list-item v-if="drawerState"
                   class="mt-16 pt-16">
        <span class="text-primary" style="font-size: 12px;">
          GET IN TOUCH
        </span>
        <div class="d-flex flex-row mt-5">
          <a href="#" class="text-decoration-none text-white"> <v-icon icon="mdi-email" size="xx-large"/></a>
          <a href="#" class="text-decoration-none text-white"> <v-icon icon="mdi-linkedin" size="xx-large"/></a>
          <a href="#" class="text-decoration-none text-white"> <v-icon icon="mdi-github" size="xx-large"/></a>
          <a href="#" class="text-decoration-none text-white"> <v-icon icon="mdi-instagram" size="xx-large"/></a>
        </div>

      </v-list-item>

    </v-list>

  </v-navigation-drawer>
</template>
