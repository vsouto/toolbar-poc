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

  export default {
    name: 'Sidebar',
    components: {
      ToolbarElements
    },
    data: () => ({
      toolbarElements: false
    }),
    methods: {
      activateToolbarElements() {
        this.toolbarElements = !this.toolbarElements;
      }
    }
  };
</script>

