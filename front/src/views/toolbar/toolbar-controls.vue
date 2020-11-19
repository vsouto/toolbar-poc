<template>
  <div class="toolbar-controls">
    <h3>Toolbar Handler</h3>
    <br>
    <div class="toolbar-control" @click="hideMenuItem">
      Hide Menu Item
    </div>
    <div class="toolbar-control" @click="showMenuItem">
      Show Menu Item
    </div>
    <div class="toolbar-control" @click="addMenuItem">
      Add Menu Item
    </div>
    <div class="toolbar-control" @click="removeMenuItem">
      Remove Menu Item
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ToolbarControls',
    components: {
    },
    props: {
      toolbar: {
        type: Object,
        required: true
      }
    },
    data: () => ({
    }),
    methods: {
      addMenuItem() {
        this.toolbar.addMenuItem();
      },
      removeMenuItem() {
        this.toolbar.removeMenuItem();
      },
      showMenuItem() {
        this.toolbar.showMenuItem();
      },
      hideMenuItem() {
        this.toolbar.hideMenuItem();
      }
    }
  };
</script>
