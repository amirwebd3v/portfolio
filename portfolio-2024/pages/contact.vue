<script setup lang="ts">
definePageMeta({
  icon: 'mdi-account-box',
  title: 'CONTACT ME',
  drawerIndex: 4,
})

usePageShow('contact')
</script>

<template>
  <v-col cols="12">
    <v-card height="auto" max-width="1000" class="pb-10 d-none gradiant-transparent" id="contact">


      <v-card-title class="pt-10">
        <h1>CANTACT ME</h1>
      </v-card-title>


      <div class="pt-10">
        <v-card-text class="font-20 font-weight-bold">
          I am currently
          <strong class="text-primary">available</strong>
          for hire and open to any ideas of cooperation.
        </v-card-text>
      </div>

      <div class="font-18 " >
        <div class="d-flex flex-wrap">
          <div class="order-1 px-2 mx-2">
            <span class="pr-15">Email:</span>
          </div>

          <div class="order-2 px-2 mx-2">
            <v-icon class="mx-1" icon="mdi-email-outline" size="small" />
            <nuxt-link to="/homepage" class="text-decoration-none text-primary">
              amirhidevs@gmail.com
            </nuxt-link>
          </div>
        </div>

        <div class="d-flex flex-wrap mt-8">
          <div class="order-1 px-2 mx-2">
            <span class="pr-10">LinkedIn:</span>
          </div>

          <div class="order-2 px-2 mx-2">
            <v-icon class="mr-1" icon="mdi-linkedin" size="small" />
            <nuxt-link to="/homepage" class="text-decoration-none text-primary">
              EyZi
            </nuxt-link>
          </div>
        </div>

        <div class="d-flex flex-wrap mt-3">
          <div class="order-1 px-2 mx-2">
            <span class="pr-7">Instagram:</span>
          </div>

          <div class="order-2 px-2 mx-2">
            <v-icon class="mr-1" icon="mdi-instagram" size="small" />
            <nuxt-link to="/homepage" class="text-decoration-none text-primary">
              EyZi
            </nuxt-link>
          </div>
        </div>

        <div class="d-flex flex-wrap mt-3">
          <div class="order-1 px-2 mx-2">
            <span class="pr-13">GitHub:</span>
          </div>

          <div class="order-2 px-2 mx-2">
            <v-icon class="mr-1" icon="mdi-github" size="small" />
            <nuxt-link to="/homepage" class="text-decoration-none text-primary">
              EyZi
            </nuxt-link>
          </div>
        </div>
      </div>
    </v-card>
  </v-col>
</template>
