<template>
  <div class="toolbar-container">
    <div class="toolbar">
      <div
        class="toolbar-button"
        @click="activateToolbarElements"
      >
        <v-icon
          small
          color="green darken-2"
        >
          mdi-apps
        </v-icon>
      </div>
      <div class="toolbar-button">
        <v-icon
          small
          center
          color="green darken-2"
        >
          mdi-domain
        </v-icon>
      </div>
      <div class="toolbar-button">
        <v-icon
          small
          center
          color="green darken-2"
        >
          mdi-domain
        </v-icon>
      </div>
      <div class="toolbar-button">
        <v-icon
          small
          center
          color="green darken-2"
        >
          mdi-domain
        </v-icon>
      </div>
      <div class="toolbar-button">
        <v-icon
          small
          center
          color="green darken-2"
        >
          mdi-domain
        </v-icon>
      </div>
    </div>
    <toolbar-elements v-if="toolbarElements"></toolbar-elements>
  </div>
</template>

<script>

  import ToolbarElements from "@/views/toolbar/toolbar-elements";
  import SchematicsService from "@/services/SchematicsService"

  export default {
    name: 'Sidebar',
    components: {
      ToolbarElements
    },
    data: () => ({
      toolbarElements: false
    }),
    mounted() {

      console.log('mounted toolbar');

      SchematicsService.getSchematics()
        .then(res => {

          console.log('got shematics', res);
          return res
        })
        .catch((error) => {
          console.log('error', error); //eslint-disable-line

        })
    },
    methods: {
      activateToolbarElements() {
        this.toolbarElements = !this.toolbarElements;
      }
    }
  };
</script>

