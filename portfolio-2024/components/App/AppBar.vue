<script setup lang="ts">
import { mergeProps } from 'vue'

const theme = useTheme()
const drawer = useState('drawer')


const route = useRoute()
const breadcrumbs = computed(() => {
  return route!.matched
    .filter(
      (item) =>
        item.meta && item.meta.title && !(item.meta?.breadcrumb === 'hidden'),
    )
    .map((r) => ({
      title: r.meta.title!,
      disabled:
        r.meta?.breadcrumb === 'disabled' || r.path === route.path || false,
      to: r.path,
    }))
})
const isDark = useDark({
  onChanged(dark: boolean) {
    theme.global.name.value = dark ? 'dark' : 'light'
  },
})
const toggleDark = useToggle<true, false | null>(isDark)
const { loggedIn, clear, user } = useUserSession()
</script>

<template>
  <v-app-bar flat v-if="$vuetify.display.mobile">
    <div id="app-bar" />
    <client-only>
      <v-switch
        :model-value="isDark"
        color=""
        hide-details
        density="compact"
        inset
        class="pl-5"
        false-icon="mdi-white-balance-sunny"
        true-icon="mdi-weather-night"
        @update:model-value="toggleDark"
      />
    </client-only>
    <v-menu location="bottom">
      <template #activator="{ props: menu }">
        <v-tooltip location="bottom">
          <template #activator="{ props: tooltip }">
            <v-btn icon large v-bind="mergeProps(menu, tooltip)" class="ml-1">
              <v-icon v-if="!loggedIn" icon="mdi-account-circle" size="36" />
              <v-avatar v-else color="primary" size="36">
                <!--                <v-img :src="`https://github.com/${user!.login}.png`" />-->
              </v-avatar>
            </v-btn>
          </template>
          <!--          <span>{{ loggedIn ? user!.login : 'User' }}</span>-->
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item
          v-if="!loggedIn"
          title="Login"
          prepend-icon="mdi-github"
          href="/api/auth/github"
        />
        <v-list-item
          v-else
          title="Logout"
          prepend-icon="mdi-logout"
          @click="clear"
        />
      </v-list>
    </v-menu>
    <v-spacer />
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-breadcrumbs />
  </v-app-bar>
</template>

<style scoped>
.v-app-bar {
  @media screen and (min-width: 1280px) {
    visibility: hidden !important;
  }
  @media screen and (max-width: 1279px) {
    visibility: visible !important;
  }
}
</style>
