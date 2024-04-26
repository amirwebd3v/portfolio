<script setup lang="ts">
definePageMeta({
  icon: 'mdi-text-box',
  title: 'CV',
  drawerIndex: 3,
  layout: 'blank',
})

const { width, name, mobile } = useDisplay()

// watchEffect(() => {
//   console.log(width.value, name.value, mobile.value)
// })
// usePageShow('cv')
</script>

<template>

  <v-card variant="elevated" rounded="lg" max-width="1000" class="cv-card">
    <!--CV-Header-Start-->
          <v-row justify="start" align="start" >
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
            <v-col cols="12" sm="6" class="px-0 bio mr-14" >
              <h2 class="text-primary">AMIRHOSSEIN ZAHMATMAND</h2>
              <h3 class="font-weight-thin">Front-end Engineer</h3>
              <br />
              <p class="font-weight-thin justify-center">
                15 years of experience in front-end and back-end web development.
                Ambitious and communicative. Good mentor and tech lead.
              </p>
              <div class="d-flex flex-wrap text-primary text-justify justify-center mt-2 links__row" >
                <h5 class="font-weight-thin">www.hidevs.com</h5>
                <span class="font-13 px-1">/</span>
                <h5 class="font-weight-thin">www.hidevs.com</h5>
                <span class="font-13 px-1">/</span>
                <h5 class="font-weight-thin">www.hidevs.com </h5>
              </div>
            </v-col>

            <v-divider class="border-opacity-15 links__column" vertical length="86" role="presentation" />

            <v-col cols="auto" class=" text-primary links__column">
              <h5 class="font-weight-thin ">www.hidevs.com</h5>
              <h5 class="font-weight-thin">www.hidevs.com</h5>
              <h5 class="font-weight-thin">www.hidevs.com </h5>
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
<!--            <v-card-->
<!--              :height="26"-->
<!--              rounded="md"-->
<!--              color="grey"-->
<!--              variant="outlined"-->
<!--              class="px-1 mr-3 mb-1 app-name"-->
<!--            >-->
            <div class="app-name__card">
              <span
                class="text-primary font-14 font-weight-thin"
                >APPTUNE</span
              >
            </div>
<!--            </v-card>-->
          </v-col>

          <v-col class="app-date v-col-sm-3" cols="6">
<!--            <v-card-->
<!--              :height="26"-->
<!--              rounded="md"-->
<!--              color="white"-->
<!--              variant="text"-->
<!--              class="px-2 border-none "-->
<!--            >-->
            <div class="app-date__card">
              <span class="text-primary font-14 font-weight-thin">Nov 2021 - Sep 2023</span>
            </div>
<!--            </v-card>-->
          </v-col>

          <v-col class="section-subtitle mb-0 pb-0 v-col-sm-9" cols="12">
            <h3 class="pb-3">Tech Lead</h3>
          </v-col>

          <v-col
            class="section-description my-0 py-0 v-col-sm-9"
            cols="12"
          >
            <div class="text-justify">
              <p>
                <strong>Back-end:</strong> node.js, Elixir, Ruby, SQL databases,
                in-memory databases (Redis, Memcached), Elasticsearch, RabbitMQ,
                microservice and event-based architectures. Designed and
                maintained several web app backends with ~100k LoC.
              </p>
              <p class="pt-2">
                <strong>Front-end:</strong> JavaScript, TypeScript, React (with
                Hooks), Angular, Redux, next.js. Led dozens of front-end
                codebases, i.e. big SPAs with ~50k LoC.
              </p>
              <p class="pt-2">
                <strong>DevOps:</strong> configured and maintained web servers
                through AWS CDK, AWS CloudFormation, Ansible, Docker, Chef, SSH.
                Knowledge of whole AWS stack and experienced in configuring it.
              </p>
              <p class="pt-2">
                <strong>Management:</strong> Experienced in project and team
                management, recruitment, budget estimations, client
                negotiations.
              </p>
              <p class="pt-2">
                <strong>Others:</strong> Attentive to UI/UX details and high
                quality. Fan of unit tests, functional programming, static
                typing, and domain-driven design.
              </p>
            </div>
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

   .app-name__card{
     text-transform: uppercase;
     padding-right: 5px;
     border-radius: 4px;
     background-color: #ecf7f9;
   }
  }

  .app-date {
    order: 3;
    display: block;
    padding-top: 0;
    .app-date__card{
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

    .app-name__card{
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

    .profile-img,.links__column{
      display: none;
    }

    .links__row{
      display: flex !important;
    }
  }
}
</style>
