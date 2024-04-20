<script setup lang="ts">
const router = useRouter()
const routes = router.getRoutes().filter((r) => r.path.lastIndexOf('/') === 0)




routes.sort((a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98))



const { width, mobile } = useDisplay()

const drawerState = useState('drawer', () => true)
const drawerLocationState = useState('drawerLocation', () => 'left')


const drawerLocation = computed({
  get() {
    return drawerLocationState.value = ((mobile.value || width.value < 1280) ? 'top' : 'left')
  },
  set(val: 'top' | 'left') {
    drawerLocationState.value = val
  },
})

const drawer = computed({
  get() {
    return drawerState.value || !(mobile.value || width.value < 1280)
  },
  set(val: boolean) {
    drawerState.value = val
  },
})

watchEffect(() => {
  console.log(
    'mobile:',
    mobile.value,
    'width:',
    width.value,
    'drawerState:',
    drawerState.value,
    'drawerLocation:',
    drawerLocation.value,

  )

  console.log('mm',!(mobile.value || width.value < 1280))
  console.log('dd',((mobile.value && width.value < 1280) ? 'top' : 'left'))
})

nextTick(() => {
  drawerLocation.value =  ((mobile.value && width.value < 1280) ? 'top' : 'left')
  drawerState.value = !(mobile.value || width.value < 1280)
})

</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    width="468"
    permanent
    :location="drawerLocation"
  >

    <v-list nav density="compact">

      <v-img
        v-if="drawerLocation === 'left'"
        class="rounded-circle mx-auto mb-5"
        height="256"
        width="256"
        src="https://1.gravatar.com/avatar/9c5e817f83c3885d42835fd5923dfd266b393d5aa11bad97c7162919610d8ef7?size=256"
        cover
      />
      <v-list-item class="pa-1 pb-10">
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


      <AppDrawerItem v-for="route in routes" :key="route.name" :item="route" />

      <v-list-item class="mt-16">
        <span class="text-primary" style="font-size: 12px"> GET IN TOUCH </span>
        <div class="d-flex flex-row mt-5">
          <a href="#" class="text-decoration-none text-white">
            <v-icon icon="mdi-email" size="xx-large" />
          </a>
          <a href="#" class="text-decoration-none text-white">
            <v-icon icon="mdi-linkedin" size="xx-large" />
          </a>
          <a href="#" class="text-decoration-none text-white">
            <v-icon icon="mdi-github" size="xx-large" />
          </a>
          <a href="#" class="text-decoration-none text-white">
            <v-icon icon="mdi-instagram" size="xx-large" />
          </a>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
