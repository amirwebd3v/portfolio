<template >
  <v-footer app  v-if="loggedIn">
    <v-defaults-provider
      :defaults="{ VBtn: { variant: 'text', size: 'x-small' } }"
    >
      <v-spacer />
      <div >
        <AppNotification/>
        <AppSettings/>
      </div>

    </v-defaults-provider>
  </v-footer>
</template>
<style>
.v-footer {
  padding: 0 10px !important;
  > .v-btn--icon {
    .v-icon {
      height: 1.25em;
      width: 1.25em;
    }
  }
}
</style>
<script setup>
const { loggedIn } = useUserSession()
</script>
