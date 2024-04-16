<script setup lang="ts">
definePageMeta({
  icon: 'mdi-toolbox',
  title: 'Skills',
  drawerIndex: 1,
})
</script>

<template>
  <v-col cols="12">
    <v-card height="auto" max-width="1000">

      <v-card-title class="pt-10">
        <h1>SKILLS</h1>
      </v-card-title>
      <!-- Introduction Section -->
      <div class="pt-10">
        <v-card-text class="font-20">
          A
          <strong class="text-primary">full-stack software engineer</strong>
          with over
          <strong class="text-primary">15 years of experience</strong>.
        </v-card-text>

        <v-card-text
          class="text-justify font-16 font-weight-thin"
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
            class="ml-7 text-justify font-16 font-weight-thin"
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
            to="/homepage"
            class="text-decoration-none text-primary"
          >portfolio</nuxt-link>.
        </v-card-text>
      </div>
      <v-divider class="border-opacity-50 my-8" inset role="presentation" />
      <!-- Front-end Section -->
      <div>
        <v-card-text class="font-20 font-weight-bold">
          A
          <strong class="text-primary">back-end software engineer</strong>
          with over
          <strong class="text-primary">15 years of experience</strong>.
        </v-card-text>

        <v-card-text
          class="text-justify font-16 font-weight-thin"
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
            class="ml-7 text-justify font-16 font-weight-thin"
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
            to="/homepage"
            class="text-decoration-none text-primary">portfolio</nuxt-link>.
        </v-card-text>
      </div>
      <v-divider class="border-opacity-50 my-8" role="presentation" />
<!--       Final Section -->
      <div>
        <v-card-text class="text-justify font-16 font-weight-thin">
          If your initial thought is that I can’t be the best in everything,
          it's okay. Send the design job to someone else, I will take care of
          all the code development or any other role you see me best suited for.
        </v-card-text>

        <v-card-text class="text-justify font-16 font-weight-thin">
          In cases where you already have an existing team but still need some
          help, feel free to
          <nuxt-link to="/homepage" class="text-decoration-none text-primary"
            >contact me</nuxt-link>.
          I assure you that I will fit in quickly.
        </v-card-text>
      </div>
    </v-card>

  </v-col>
</template>
