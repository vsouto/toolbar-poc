<template>
  <div class="toolbar-container">
    <div class="toolbar">
      <div
        class="toolbar-button"
        v-for="item in toolbar.menuItems"
        v-if="item.status === 'active'"
      >
        <v-icon
          small
          color="blue lighten"
          @click="activateToolbarElements(item)"
        >
          {{item.icon}}
        </v-icon>
      </div>
    </div>
    <toolbar-elements
      v-if="toolbarSubMenuVisible"
      :selectedMenu="selectedMenu"
    ></toolbar-elements>
    <toolbar-controls
      :toolbar="toolbar"
    ></toolbar-controls>
  </div>
</template>

<script>

  import ToolbarElements from "@/views/toolbar/toolbar-elements";
  import ToolbarControls from "@/views/toolbar/toolbar-controls";
  import SchematicsService from "@/services/SchematicsService"
  import ToolbarModel from "../../models/toolbar";

  export default {
    name: 'Sidebar',
    components: {
      ToolbarElements,
      ToolbarControls
    },
    data: () => ({
      toolbarSubMenuVisible: false,
      schematics: [],
      toolbar: {},
      selectedMenu: false
    }),
    mounted() {

      var _this = this;

      SchematicsService.getSchematics()
        .then(res => {

          console.log('got shematics', res);

          const response = JSON.parse(res.data);

          _this.schematics = response;
          //_this.menuItems = response.menuItems;

          // Creates a Toolbar Model, simulating the factory of a ToolbarHandler
          this.toolbar = new ToolbarModel(response);

          console.log('toolbar is now ', this.toolbar);

          return res
        })
        .catch((error) => {
          console.log('error', error); //eslint-disable-line
        })
    },
    methods: {
      activateToolbarElements(item) {

        if (this.toolbarSubMenuVisible) {
          this.selectedMenu = false;
        }
        else {
          this.selectedMenu = item;
        }

        this.toolbarSubMenuVisible = !this.toolbarSubMenuVisible;
      }
    }
  };
</script>

