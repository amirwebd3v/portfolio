<script setup lang="ts">
definePageMeta({
  icon: 'mdi-toolbox',
  title: 'Skills',
  drawerIndex: 1,
})

usePageShow('skills')
</script>

<template>
  <v-col cols="12">
    <v-card
      height="auto"
      max-width="1000"
      class="d-none text-justify"
      id="skills"
    >
      <v-card-title class="pt-10">
        <h1>SKILLS</h1>
      </v-card-title>
      <!-- Introduction Section -->
      <div class="pt-2">
        <v-card-text class="font-20">
          A
          <strong class="text-primary">full-stack software engineer</strong>
          with over
          <strong class="text-primary">4 years of experience</strong>.
        </v-card-text>

        <v-card-text class="text-justify font-16 font-weight-thin pt-0">
          I have maintained, developed and launched multiple projects from
          scratch, handling the development of their back-end and front-end
          codebases.
          <br />
          My current toolset is composed of
          <strong class="font-weight-bold">
            JavaScript & TypeScript, Nuxt, Docker</strong
          >.
          <br />
          Lately, I am also finding myself using
          <strong class="font-weight-bold"> low-code / no-code</strong> tools
          more and more, such as Plasmic and Xano. These tools can deliver
          projects of great quality while allowing for much greater flexibility,
          at a fraction of the usual cost. Also, using all kinds of AI tools
          helps me developing faster than ever.
        </v-card-text>

        <v-card-text class="font-weight-bold font-18 pt-0"
          >I can assist you with all aspects of your project:
        </v-card-text>

        <v-card-text class="pt-0">
          <ul class="ml-7 text-justify font-16 font-weight-thin">
            <li>leading or co-developing their back-ends and front-ends,</li>
            <li>improving UI/UX design,</li>
            <li>mentoring the person,</li>
            <li>researching possible techs,</li>
            <li>improving the development process in general.</li>
          </ul>
        </v-card-text>

        <v-card-text class="font-18 pt-0">
          For examples of my work, check out my
          <nuxt-link to="/portfolio" class="text-decoration-none text-primary"
            >portfolio</nuxt-link>.
        </v-card-text>
      </div>

      <!-- Front-end Section -->
      <v-divider class="border-opacity-50 my-5" inset role="presentation" />

      <div class="pl-3 pt-2">
        <h2>
          <v-icon
            icon="mdi-nuxt"
            class="pb-2"
            color="#00DC82"
            size="xxx-large"
          />
          FRONT-END WEB DEVELOPMENT
        </h2>
      </div>

      <div>
        <v-card-text class="font-20 font-weight-bold">
          I specialize in developing applications using both Nuxt and Vuetify.
        </v-card-text>

        <v-card-text class="font-18 pt-0">
          My front-end experience and skills include:
        </v-card-text>

        <v-card-text class="pt-0">
          <ul class="ml-7 text-justify font-16 font-weight-thin">
            <li>
              TypeScript/JavaScript development: bootstrapping, refactoring,
              improving code structure and reliability, build setup,
            </li>
            <li>
              improving development process with features such as code
              minification, multiple environment support, deployment previews,
              integration, and visual testing,
            </li>
            <li>having a good sense of design and UX,</li>
            <li>
              reliable experience with JavaScript ecosystems, having used
              various libraries , such as Vue.js, Nuxt, Vuetify, and so on.
            </li>
          </ul>
        </v-card-text>

        <v-card-text>
          <v-row justify="space-evenly" class="text-primary text-center">
            <v-col cols="3">
              <v-row justify="center" class="font-18">
                <span style="font-size: 25px" class="font-weight-bold">7+</span>
                <span>single page applications launched in Vue or Nuxt</span>
              </v-row>
            </v-col>
            <v-col cols="3">
              <v-row justify="center" class="font-18">
                <span style="font-size: 25px" class="font-weight-bold">3</span>
                <span>Mentoring and Teaching Junior front-end developers</span>
              </v-row>
            </v-col>
            <v-col cols="3">
              <v-row justify="center" class="font-18">
                <span style="font-size: 25px" class="font-weight-bold"
                  >10+</span
                >
                <span>front-end developers whose codes, I reviewed</span>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </div>

      <!-- back-end Section -->
      <v-divider class="border-opacity-50 my-5" inset role="presentation" />

      <div class="pl-3 pt-2">
        <h2>
          <v-icon
            icon="mdi-laravel"
            class="pb-2"
            color="#FF2D20"
            size="xxx-large"
          />
          BACK-END WEB DEVELOPMENT
        </h2>
      </div>

      <div>
        <v-card-text class="font-20 font-weight-bold">
          In back-end development, my current recommended stack is Laravel and
          lately I working with node.js.
        </v-card-text>

        <v-card-text class="font-18 pt-0">
          I have personally started my programing journey with the back-end
          development. To improve development speed, performance, and
          reliability, I have switched languages and frameworks multiple times,
          transitioning my knowledge from C#, Python, Android, PHP to
          javascript's world, Node.js. Additionally, I have worked with various
          server configuration methods, starting from shell scripting, and now
          utilizing Docker.
        </v-card-text>

        <v-card-text class="font-18 pt-0">
          The lessons I have learned from these experiences will continue to be
          valuable to me, regardless of the framework I use in my next project.
        </v-card-text>

        <v-card-text class="font-18 pt-0">
          Regarding back-end development, I can:
        </v-card-text>

        <v-card-text class="pt-0">
          <ul class="ml-7 text-justify font-16 font-weight-thin">
            <li>develop back-ends using Laravel,</li>
            <li>split the backend into modular packages,</li>
            <li>collaborate with APIs,</li>
            <li>
              utilize different types of databases, such as PostgreSQL, MySQL,
              and Redis,
            </li>
            <li>
              divide servers into different machine nodes and Docker containers,
            </li>
            <li>
              refactor existing applications, by improving code readability,
              separating concerns into separate functions/classes/modules,
              extracting business logic from the request/response layer into
              separate modules, and transitioning the system architecture into
              an event-based one.
            </li>
          </ul>
        </v-card-text>
      </div>

      <!-- back-end Section -->
      <v-divider class="border-opacity-50 my-5" inset role="presentation" />

      <div class="pl-3 pt-2">
        <h2>
          <v-icon
            icon="mdi-human-male-board-poll"
            class="pb-4"
            color="#EBC911"
            size="x-large"
          />
          MENTORSHIP AND SIDE SKILLS
        </h2>
      </div>

      <div>
        <v-card-text class="font-20 font-weight-bold">
          Throughout my career, I have built and create various
          practice-oriented projects besides work.
        </v-card-text>

        <v-card-text class="font-18 pt-0">
          As a result, I not only handled the coding of their back-end and
          front-end codebases by senior developers' helping and learning
          real-world solutions, but I also took care of various other aspects
          crucial for a successful web application project. My firm belief in
          the principle that by teaching others, we ourselves learn more and
          better, fuels my passion to guide and mentor others. Totally, I am
          able to:
        </v-card-text>

        <v-card-text class="pt-0">
          <ul class="ml-7 text-justify font-16 font-weight-thin">
            <li>
              planning the best possible user experience, and then the user
              interface for it,
            </li>
            <li>ensuring consistency in design and typography,</li>
            <li>Search Engine Optimization, but in a pragmatic way,</li>
            <li>
              launching, deploying and monitoring the app during and after its'
              release,
            </li>
            <li>recruiting and mentoring Junior developers,</li>
            <li>
              taking on the responsibilities of team members when needed, in
              order to prevent unnecessary delays and ensure project success.
            </li>
          </ul>
        </v-card-text>
      </div>

      <!--       Final Section -->
      <v-divider class="border-opacity-50 my-8" role="presentation" />
      <div>
        <v-card-text class="text-justify font-16 font-weight-thin">
          If your initial thought is that I can’t be the best in everything,
          it's okay. I will take care of other development sections or any other
          role you see me best suited for.
        </v-card-text>

        <v-card-text class="text-justify font-16 font-weight-thin">
          If you already have an established team and require assistance, please
          don’t hesitate to  <nuxt-link to="/contact" class="text-decoration-none text-primary"
        >contact me</nuxt-link>. I assure you that I will seamlessly
          integrate and provide valuable support.
        </v-card-text>
      </div>
    </v-card>
  </v-col>
</template>
