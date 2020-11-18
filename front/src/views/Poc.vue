<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>Welcome to Component X Proof of Concept</h1>
        </v-col>

        <v-col class="mb-8 pb-8">
          <br>
          <p class="subheading font-weight-regular">
            Hello
          </p>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Poc',
  components: {
  },
  data: () => ({
    ecosystem: [
      {
        text: 'vuejs',
        href: 'https://vuejs.org/',
      },
      {
        text: 'vuetify',
        href: 'https://github.com/vuetifyjs',
      },
      {
        text: 'github',
        href: 'https://github.com',
      },
      {
        text: 'mongodb',
        href: 'https://www.mongodb.com/',
      },
      {
        text: 'nodejs',
        href: 'https://nodejs.org/',
      }
    ]
  })
};
</script>
