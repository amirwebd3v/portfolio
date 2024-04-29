<script setup lang="ts">
import type { PortfolioType } from '~/server/api/portfolio'

definePageMeta({
  icon: 'mdi-view-gallery',
  title: 'PORTFOLIO',
  drawerIndex: 2,
})

const { data } = await useFetch('/api/portfolio')

const projects: PortfolioType[] = [...data.value]

const goToProject = (title: PortfolioType['title']) => {
  if (title) {
    useRouter().push({
      name: 'portfolio-project',
      params: { project : title },
    })
  }
}

usePageShow('portfolio')
</script>

<template>
  <v-col cols="12">
    <v-card height="auto" class="pb-10 d-none gradiant-transparent" id="portfolio" max-width="1500">
      <v-card-title class="pt-10">
        <h1>PORTFOLIO</h1>
      </v-card-title>

      <div class="pt-2">
        <v-card-text class="font-20">
          <p class="font-weight-bold">
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

        <v-card-text class="font-20 pt-0">
          <p>
            By the way, I possess skills in a variety of tools and technologies,
            which are listed below.
          </p>
          <v-row justify="space-evenly" align="center" class="my-10">
            <v-icon class="pa-1" size="xxx-large" icon="custom:TypeScript" />
            <v-icon class="pa-1" size="xxx-large" icon="custom:JavaScript" />
            <v-icon class="pa-1" size="xxx-large" icon="custom:Nuxt JS" />
            <v-icon class="pa-1" size="xxx-large" icon="custom:Vue.js" />
            <v-icon class="pa-1" size="xxx-large" icon="custom:Veutify" />
            <v-icon class="pa-1" size="xxx-large" icon="custom:Bootstrap" />
            <v-icon class="pa-1" size="xxx-large" icon="custom:Laravel" />
            <v-icon class="pa-1" size="xxx-large" icon="custom:Docker" />
            <v-icon class="pa-1" size="xxx-large" icon="custom:PostgresSQL" />
            <v-icon class="pa-1" size="xxx-large" icon="custom:MySQL" />
            <v-icon class="pa-1" size="xxx-large" icon="custom:Adobe Photoshop" />
            <v-icon
              class="pa-1"
              size="x-large"
              icon="custom:Adobe Illustrator"
            />
          </v-row>

          <p>
            For more details about my experiences, please take a look at
            <nuxt-link to="/cv" class="text-decoration-none text-primary"
          >my CV</nuxt-link>.
          </p>
        </v-card-text>
      </div>



        <div v-for="project in projects" :key="project.title">
          <v-divider class="mt-8" />
          <v-row class="pt-5">
            <v-col
              class="flex-grow-1 flex-shrink-1 order-1"
              cols="auto"
              md="6"
              sm="12"
              style="min-width: auto; max-width: 100%;"
            >
              <v-card-title>
                <h2 class="font-weight-bold">{{ project.title }}</h2>
              </v-card-title>

              <v-card-text class="font-weight-thin font-20">
                {{ project.subtitle }}
              </v-card-text>

              <v-card-text class="font-weight-bold font-18 text-justify pt-0">
                {{ project.shortDescription }}
              </v-card-text>

              <v-card-text class="pt-0">
                <ul
                  class="ml-10 text-justify font-18 font-weight-thin"
                  style="list-style-type: circle"
                >
                  <li v-for="task in project.tasks">
                    {{ task }}
                  </li>
                </ul>

                <v-btn
                  class="mt-5 mx-2"
                  color="#BAFF9FE0"
                  variant="tonal"
                  rounded="lg"
                  @click="goToProject(project.title)"
                >
                  Read more...
                </v-btn>
              </v-card-text>
            </v-col>

            <v-col
              class="flex-grow-1 flex-shrink-0 order-2"
              cols="auto"
              md="6"
              sm="12"
              style="min-width: 210px; max-width: 100%"
            >
              <v-card-text>
                <v-img rounded="lg" :src="project.images[0]" />
              </v-card-text>
            </v-col>
          </v-row>
        </div>

    </v-card>
  </v-col>
</template>
