<script setup lang="ts">
definePageMeta({
  icon: 'mdi-card-account-phone',
  title: 'Contact Me',
  drawerIndex: 3,
})
</script>

<template>
  <v-col cols="12">
    <v-card height="auto" max-width="1000" class="pb-10">
      <!-- Introduction Section -->
      <div>
        <v-card-text class="font-20 font-weight-bold">
          I am currently
          <strong class="text-primary">available</strong>
          for hire and open to any ideas of cooperation.
        </v-card-text>
      </div>

      <div class="font-18">
        <v-sheet class="d-flex flex-wrap">
          <v-sheet class="order-1 px-2 mx-2">
            <span class="pr-15">Email:</span>
          </v-sheet>

          <v-sheet class="order-2 px-2 mx-2">
            <v-icon icon="mdi-email-outline" size="small" />
            <nuxt-link to="/homepage" class="text-decoration-none text-primary">
              amirhidevs@gmail.com
            </nuxt-link>
          </v-sheet>
        </v-sheet>

        <v-sheet class="d-flex flex-wrap mt-8">
          <v-sheet class="order-1 px-2 mx-2">
            <span class="pr-10">LinkedIn:</span>
          </v-sheet>

          <v-sheet class="order-2 px-2 mx-2">
            <v-icon icon="mdi-linkedin" size="small" />
            <nuxt-link to="/homepage" class="text-decoration-none text-primary">
              EyZi
            </nuxt-link>
          </v-sheet>
        </v-sheet>

        <v-sheet class="d-flex flex-wrap mt-3">
          <v-sheet class="order-1 px-2 mx-2">
            <span class="pr-7">Instagram:</span>
          </v-sheet>

          <v-sheet class="order-2 px-2 mx-2">
            <v-icon icon="mdi-instagram" size="small" />
            <nuxt-link to="/homepage" class="text-decoration-none text-primary">
              EyZi
            </nuxt-link>
          </v-sheet>
        </v-sheet>

        <v-sheet class="d-flex flex-wrap mt-3">
          <v-sheet class="order-1 px-2 mx-2">
            <span class="pr-13">GitHub:</span>
          </v-sheet>

          <v-sheet class="order-2 px-2 mx-2">
            <v-icon icon="mdi-github" size="small" />
            <nuxt-link to="/homepage" class="text-decoration-none text-primary">
              EyZi
            </nuxt-link>
          </v-sheet>
        </v-sheet>
      </div>
    </v-card>
  </v-col>
</template>
