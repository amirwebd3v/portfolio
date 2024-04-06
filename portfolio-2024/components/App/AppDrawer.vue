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
routes.sort((a: object, b: object) =>
    (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98),
)

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
          :width="drawerState ? 256 : 36"
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
          cover
        />
        <v-list-item class="pa-1" v-if="drawerState">
          <!--          <template #prepend>-->
          <!--            <v-icon-->
          <!--              icon=""-->
          <!--              size="x-large"-->
          <!--              class="drawer-header-icon"-->
          <!--              color="primary"-->
          <!--            />-->
          <!--          </template>-->
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
    <v-list nav density="compact" v-if="drawerState">
      <p class="text-justify">
        As a <span class="text-primary">talented</span>
        web developer with a passion for creating
        <span class="text-primary">innovative</span>
        solutions.With a Bachelor of Science in
        <span class="text-primary">Software Engineering</span>, I bring a wealth
        of knowledge and <span class="text-primary">expertise</span> to my work.
      </p>
    </v-list>

    <v-list>
      <AppDrawerItem v-for="route in routes" :key="route.name" :item="route" />
    </v-list>

    <v-spacer />
    <template #append v-if="drawerState">
      <v-list-item class="drawer-footer px-0 d-flex flex-column justify-center">
        <div class="text-primary" style="white-space: nowrap; font-size: 15px">
          <span style="font-size: 21px">&#9824;</span> Powered By
          <a
            href="https://github.com/amirhidevs"
            class="pt-6 pt-md-0 text-decoration-none text-white"
            target="_blank"
            style="font-size: 14px"
            >Amirhossein Zahmatmand</a
          >
        </div>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>
