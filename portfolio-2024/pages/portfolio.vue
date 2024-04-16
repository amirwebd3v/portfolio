<script setup lang="ts">
definePageMeta({
  icon: 'mdi-view-gallery',
  title: 'Portfolio',
  drawerIndex: 2,
})
</script>

<template>
  <v-col cols="12">
    <v-card height="auto" class="pb-10" max-width="1500">
      <v-card-title class="pt-10">
        <h1>PORTFOLIO</h1>
      </v-card-title>

      <div class="pt-10">
        <v-card-text class="font-18">
          <p class="text-primary font-weight-bold">
            I'm currently available for the next project.
          </p>
          <p>
            Looking for a full-stack engineer who can develop your idea? If so,
            <nuxt-link to="/homepage" class="text-decoration-none text-primary"
              >let me know
            </nuxt-link>
            .
          </p>
        </v-card-text>

        <v-divider />


        <v-row class="pt-5">
          <v-col
            class="flex-grow-1 flex-shrink-1 order-1"
            cols="auto"
            md="6"
            sm="12"
            style="min-width: auto; max-width: 100%"
          >
            <v-card-title >
              <h2 class="font-weight-thin">Dentistry</h2>
            </v-card-title>


            <v-card-text class="font-weight-thin font-18">
              Rely on dentists who prioritize their patients' comfort.
            </v-card-text>

            <v-card-text class="font-weight-bold font-18">
              This website is a web platform that allows to book appointments
              and review the portfolio of a dentist.
            </v-card-text>

            <v-card-text>

              <ul class="ml-7 text-justify font-18 font-weight-thin" style="list-style-type:circle;">
                <li>leading or co-developing their back-ends and front-ends,</li>
                <li>automating the deployment process,</li>
                <li>improving UI/UX design,</li>
                <li>mentoring the team,</li>
                <li>researching possible techs,</li>
                <li>setting up monitoring,</li>
                <li>improving the development process in general.</li>
              </ul>

              <v-btn class="mt-5 mx-2" variant="tonal" rounded="md"
                     elevation="2">Read more...
              </v-btn>

            </v-card-text>


          </v-col>

          <v-col
            class="flex-grow-1 flex-shrink-0 order-2"
            cols="auto"
            md="6"
            sm="12"
            style="min-width: 210px; max-width: 100%;"
          >
            <v-card-text>
              <v-img
                rounded="lg"
                src="https://jtom.me/generated/images/portfolio/tripsomnia/marketplace-home-cropped-800x568-1ce742.1d508d53.png"
              ></v-img>
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-col>
</template>
