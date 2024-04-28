<script setup lang="ts">
import type { PortfolioType } from '~/server/api/portfolio'

const { data } = await useFetch('/api/portfolio')

const projects: PortfolioType[] = [...data.value]

const project = projects.find((p) => p.title === useRoute().params['project'])

usePageShow('project')
</script>

<template>
  <v-col cols="12">
    <v-card height="auto" class="pb-10 d-none" id="project" max-width="1500">
      <v-card-title class="pt-10">
        <h1>{{ project['title'] }}</h1>
      </v-card-title>

      <div class="pt-2">
        <v-card-text class="font-20">
          <p>
            {{ project['subtitle'] }}
          </p>
        </v-card-text>

        <v-row>
          <v-col
            class="flex-grow-1 flex-shrink-1 order-1 pr-md-0"
            cols="auto"
            md="6"
            sm="12"
            style="min-width: auto; max-width: 100%"
          >
            <v-card-text class="font-weight-bold font-18 text-justify">
              {{ project['shortDescription'] }}
            </v-card-text>

            <v-card-text class="font-18 text-justify pt-0">
              {{project['fullDescription']}}
            </v-card-text>
          </v-col>

          <v-col
            style="height: 300px; max-width: 0"
            class="divider px-0"
            order="2"
            cols="1"
          >
            <v-divider vertical length="300" />
          </v-col>

          <v-col
            class="flex-grow-1 flex-shrink-0 order-3"
            cols="auto"
            md="5"
            sm="12"
            style="min-width: 210px; max-width: 100%"
          >
            <v-card-title class="pt-5 pl-md-0">
              <h3 class="font-weight-bold">Technical Summary</h3>
            </v-card-title>

            <v-card-text class="pt-6 pl-md-0">
              <ul
                class="ml-5 text-justify font-18 font-weight-thin"
                style="list-style-type: disc"
              >
                <li v-for="(item, key) in project['technicalSummary'][0]" :key="key">
                  <span class="font-weight-bold">{{ key }}</span>
                  {{ item }}
                </li>
              </ul>
            </v-card-text>
          </v-col>

          <v-col
            class="flex-grow-1 flex-shrink-0 order-4"
            cols="12"
            style="min-width: 210px; max-width: 100%"
          >
            <v-card-text>
              <v-img
                class="rounded-lg mb-5"
                v-for="image in project['images']"
                :src="image"
              />
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-col>
</template>

<style scoped>
@media screen and (max-width: 960px) {
  .divider {
    display: none;
  }
}
</style>
