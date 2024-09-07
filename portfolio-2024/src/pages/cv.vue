<script setup lang="ts">
definePageMeta({
  icon: 'mdi-text-box',
  title: 'CV',
  drawerIndex: 3,
  layout: 'blank',
})
</script>

<template>
  <v-card
    variant="elevated"
    rounded="lg"
    max-width="1000"
    class="cv-card gradiant-transparent"
  >
    <!--CV-Header-Start-->
    <v-row justify="start" align="start">
      <v-col cols="3" class="pl-sm-0">
        <v-img
          class="profile-img"
          height="152"
          width="152"
          src="https://1.gravatar.com/avatar/9c5e817f83c3885d42835fd5923dfd266b393d5aa11bad97c7162919610d8ef7?size=256"
          cover
          rounded="lg"
        />
      </v-col>
      <v-col cols="12" sm="6" class="px-0 bio mr-4 pt-0">
        <h2 class="text-primary">AMIRHOSSEIN ZAHMATMAND</h2>
        <h3 class="font-weight-thin">Fullstack Software Engineer</h3>
        <br />
        <p class="font-weight-thin justify-center">
          3 years of experience in front-end and back-end web development.
          Ambitious and communicative. Creative mind ;)
        </p>
        <div
          class="d-flex flex-wrap text-justify justify-center mt-2 links__row"
        >
          <a
            href="https://amirdev.com"
            class="text-primary text-decoration-none"
            ><h5 class="font-weight-thin">www.amirdev.me</h5></a
          >
          <span class="font-13 px-1">/</span>
          <a
            href="mailto:amirdev@gmail.com"
            class="text-primary text-decoration-none"
            ><h5 class="font-weight-thin">amirdev@gmail.com</h5></a
          >
          <span class="font-13 px-1">/</span>
          <a
            href="https://linkedin.com/in/amirdev"
            class="text-primary text-decoration-none"
            ><h5 class="font-weight-thin">linkedin.com/in/amirdev</h5></a
          >
        </div>
      </v-col>

      <v-divider
        class="border-opacity-15 links__column"
        vertical
        length="86"
        role="presentation"
      />

      <v-col cols="auto" class="text-primary links__column">
        <a href="https://amirdev.com" class="text-primary text-decoration-none">
          <h5 class="font-weight-thin">www.amirdev.me</h5></a
        >
        <a
          href="mailto:amirdev@gmail.com"
          class="text-primary text-decoration-none"
          ><h5 class="font-weight-thin">amirdev@gmail.com</h5></a
        >
        <a
          href="https://linkedin.com/in/amirdev"
          class="text-primary text-decoration-none"
          ><h5 class="font-weight-thin">linkedin.com/in/amirdev</h5></a
        >
      </v-col>
    </v-row>

    <!--CV-Header-End-->

    <!--CV-Section-Start-->
    <div class="mt-8 mb-16">
      <v-row>
        <span class="text-primary section-title font-weight-thin">Skills</span>
      </v-row>

      <v-row>
        <v-row class="d-flex flex-wrap">
          <v-col class="v-col-sm-3 app-name" cols="6">
            <div class="app-name__card">
              <span class="text-primary font-14 font-weight-thin"></span>
            </div>
          </v-col>

          <v-col class="app-date v-col-sm-3" cols="6">
            <div class="app-date__card">
              <span class="text-primary font-14 font-weight-thin"></span>
            </div>
          </v-col>

          <v-col class="section-subtitle mb-0 pb-0 v-col-sm-9" cols="12">
            <h3 class="pb-3"></h3>
          </v-col>

          <v-col class="section-description my-0 py-0 v-col-sm-9" cols="12">
            <div class="text-justify">
              <p>
                <strong>Back-end:</strong> Laravel, SQL databases, in-memory
                databases (Redis), MVC, REST API, and Modular architectures.
                Designed and maintained few web app backends with ~10K LoC.
              </p>
              <p class="pt-2">
                <strong>Front-end:</strong> JavaScript, TypeScript, Nuxt, Vue,
                Vuetify. Specialist in SPAs with ~30k LoC.
              </p>
              <p class="pt-2">
                <strong>DevOps:</strong> configured and maintained web servers
                through Docker and SSH.
              </p>
              <p class="pt-2">
                <strong>Management:</strong> Experienced in co-working
                principles, client negotiations, creating prototype and
                documentation.
              </p>
              <p class="pt-2">
                <strong>Others:</strong> Attentive to UI/UX details and high
                quality.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </div>

    <div class="mt-8 mb-16">
      <v-row>
        <span class="text-primary section-title font-weight-thin"
          >Experiences</span
        >
      </v-row>

      <v-row>
        <v-row class="d-flex flex-wrap">
          <v-col class="v-col-sm-3 app-name" cols="6">
            <div class="app-name__card">
              <span class="text-primary font-14 font-weight-thin">
                Freelancer
              </span>
            </div>
          </v-col>

          <v-col class="app-date v-col-sm-3" cols="6">
            <div class="app-date__card">
              <span class="text-primary font-14 font-weight-thin">
                August 2020 - Present
              </span>
            </div>
          </v-col>

          <v-col class="section-subtitle mb-0 pb-0 v-col-sm-9" cols="12">
            <h3 class="pb-3">Full-stack Software Engineer</h3>
          </v-col>

          <v-col class="section-description my-0 py-0 v-col-sm-9" cols="12">
            <div class="text-justify">
              <p>
                Created a few web applications, participating in the whole
                process of their development: product design and estimation,
                code design and development, UI/UX design, product launch and
                maintenance.
                <a href="/portfolio" class="text-decoration-none text-primary"
                  >(amirdev.me/portfolio)</a
                >
              </p>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </div>

    <div class="mt-8 mb-16">
      <v-row>
        <span class="text-primary section-title font-weight-thin"
          >Education</span
        >
      </v-row>

      <v-row>
        <v-row class="d-flex flex-wrap">
          <v-col class="v-col-sm-3 app-name" cols="6">
            <div class="app-name__card">
              <span class="text-primary font-14 font-weight-thin">
                Persian gulf University
              </span>
            </div>
          </v-col>

          <v-col class="app-date v-col-sm-3" cols="6">
            <div class="app-date__card">
              <span class="text-primary font-14 font-weight-thin">
                2016 – 2021
              </span>
            </div>
          </v-col>

          <v-col class="section-subtitle mb-0 pb-0 v-col-sm-9" cols="12">
            <h3 class="pb-3">Computer Engineer - Software</h3>
          </v-col>

          <v-col class="section-description my-0 py-0 v-col-sm-9" cols="12">
            <div class="text-justify">
              <p>
                I played multiple roles during my studies: as a Teaching
                Assistant, I guided fellow students through their coursework.
                Simultaneously, I volunteered as a network operator at an ISP,
                diving into both theoretical concepts and hands-on practice.
                Coding contests at the university challenged me, and I never
                settled for mere book knowledge—I always sought out practical
                tasks to reinforce my understanding.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </div>

    <div class="mt-8 mb-16">
      <v-row>
        <span class="text-primary section-title font-weight-thin">Other points</span>
      </v-row>

      <v-row>
        <v-row class="d-flex flex-wrap">
          <v-col class="v-col-sm-3 app-name" cols="6">
            <div class="app-name__card">
              <span class="text-primary font-14 font-weight-thin"></span>
            </div>
          </v-col>

          <v-col class="app-date v-col-sm-3" cols="6">
            <div class="app-date__card">
              <span class="text-primary font-14 font-weight-thin"></span>
            </div>
          </v-col>

          <v-col class="section-subtitle mb-0 pb-0 v-col-sm-9" cols="12">
            <h3 class="pb-3"></h3>
          </v-col>

          <v-col class="section-description my-0 py-0 v-col-sm-9" cols="12">
            <ul class="text-justify ml-5">
              <li>
                Good public speaker.(If I learn something, I enjoy to share it.)
              </li>
              <li>
                knowledge of working with adobe photoshop and illustrator.(feel an inside talent in graphical theories)
              </li>
              <li>
                fluent English speaking, conversational Germany.
              </li>
              <li>
                In my free times, like to surf the internet, watching movie, travel, and swimming.
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-row>
    </div>

    <!--CV-Section-End-->
  </v-card>
</template>

<style scoped>
.cv-card {
  padding: 80px;
  margin: 80px auto !important;

  .section-title {
    margin-bottom: 15px;
    padding-left: 24%;
    font-size: 26px;
  }

  .app-name {
    display: block;
    text-align: right;

    .app-name__card {
      text-transform: uppercase;
      padding-right: 5px;
      border-radius: 4px;
      background-color: #2a3e02;
    }
  }

  .app-date {
    order: 3;
    display: block;
    padding-top: 0;

    .app-date__card {
      text-transform: uppercase;
      text-align: right !important;
      padding-right: 5px;
    }
  }

  .section-subtitle {
    padding-left: 0;
    order: 2;
  }

  .section-description {
    padding-left: 0;
    order: 4;
  }

  .links__row {
    display: none !important;
  }
}

@media screen and (max-width: 1000px) {
  .cv-card {
    padding: 32px 32px;
    margin: 0 !important;

    .bio {
      text-align: center;
    }
  }
}

@media screen and (max-width: 767px) {
  .cv-card {
    padding: 32px 32px;
    margin: 0 !important;

    h2 {
      font-size: 19px;
    }

    .section-title {
      padding-left: 0;
    }

    .app-name__card {
      text-align: left;
      background-color: unset !important;
    }

    .app-date {
      order: 2;
    }

    .section-subtitle {
      order: 3;
      padding-left: 15px !important;
    }

    .section-description {
      padding-left: 15px !important;
    }

    .v-col-6 {
      flex: 0 0 50%;
      max-width: 50%;
      align-self: end;
    }

    .v-col-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .profile-img,
    .links__column {
      display: none;
    }

    .links__row {
      display: flex !important;
    }
  }
}
</style>
