<script setup lang="ts">
definePageMeta({
  icon: 'mdi-toolbox',
  title: 'Skills',
  drawerIndex: 1,
})
</script>

<template>
  <v-col cols="12" class="px-md-16">

    <v-card height="auto" class="mx-md-16">
      <!-- Introduction Section -->
      <div>
        <v-card-text class="font-20 text-line-height font-weight-bold">
          A
          <strong class="text-primary">full-stack software engineer</strong>
          with over
          <strong class="text-primary">15 years of experience</strong>.
        </v-card-text>

        <v-card-text
          class="text-justify font-16 text-line-height font-weight-thin"
        >
          I have maintained, developed and launched multiple projects from
          scratch, handling the development of their back-end and front-end
          codebases.
          <br />
          My current toolset is composed of JavaScript & TypeScript (including
          Node.js), React, Kubernetes, Docker, and AWS CDK, Pulumi or Terraform.
          <br />
          Lately, I am also finding myself using low-code / no-code tools more
          and more, such as Plasmic and Xano. These tools can deliver projects
          of great quality while allowing for much greater flexibility, at a
          fraction of the usual cost.
        </v-card-text>

        <v-card-text class="font-weight-bold font-18"
          >I can assist you with all aspects of your project:
        </v-card-text>

        <v-card-text>
          <ul
            class="ml-7 text-justify font-16 text-line-height font-weight-thin"
          >
            <li>leading or co-developing their back-ends and front-ends,</li>
            <li>automating the deployment process,</li>
            <li>improving UI/UX design,</li>
            <li>mentoring the team,</li>
            <li>researching possible techs,</li>
            <li>setting up monitoring,</li>
            <li>improving the development process in general.</li>
          </ul>
        </v-card-text>

        <v-card-text class="font-20">
          For examples of my work, check out my
          <nuxt-link
            :to="'/homepage'"
            class="text-decoration-none text-primary"
          >
            portfolio.
          </nuxt-link>
        </v-card-text>
      </div>
        <v-divider class="border-opacity-50 my-8" inset role="presentation" />
      <!-- Front-end Section -->
      <div>
          <v-card-text class="font-20 text-line-height font-weight-bold">
            A
            <strong class="text-primary">full-stack software engineer</strong>
            with over
            <strong class="text-primary">15 years of experience</strong>.
          </v-card-text>

          <v-card-text
            class="text-justify font-16 text-line-height font-weight-thin"
          >
            I have maintained, developed and launched multiple projects from
            scratch, handling the development of their back-end and front-end
            codebases.
            <br />
            My current toolset is composed of JavaScript & TypeScript (including
            Node.js), React, Kubernetes, Docker, and AWS CDK, Pulumi or
            Terraform.
            <br />
            Lately, I am also finding myself using low-code / no-code tools more
            and more, such as Plasmic and Xano. These tools can deliver projects
            of great quality while allowing for much greater flexibility, at a
            fraction of the usual cost.
          </v-card-text>

          <v-card-text class="font-weight-bold font-18"
            >I can assist you with all aspects of your project:
          </v-card-text>

          <v-card-text>
            <ul
              class="ml-7 text-justify font-16 text-line-height font-weight-thin"
            >
              <li>leading or co-developing their back-ends and front-ends,</li>
              <li>automating the deployment process,</li>
              <li>improving UI/UX design,</li>
              <li>mentoring the team,</li>
              <li>researching possible techs,</li>
              <li>setting up monitoring,</li>
              <li>improving the development process in general.</li>
            </ul>
          </v-card-text>

          <v-card-text class="font-20">
            For examples of my work, check out my
            <nuxt-link
              :to="'/homepage'"
              class="text-decoration-none text-primary"
            >
              portfolio.
            </nuxt-link>
          </v-card-text>
        </div>
    </v-card>

  </v-col>
</template>


