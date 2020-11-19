<template>
  <div class="toolbar-elements">
    <h2>{{selectedMenu.title}}</h2>
    <generic-element
      v-for="child in getChildren()"
      :component="child"
    ></generic-element>
  </div>
</template>

<script>

  import GenericElement from "../elements/generic/generic";

  export default {
    name: 'ToolbarElements',
    components: {
      GenericElement,
    },
    props: {
      selectedMenu: {
        type: Object,
        required: true
      }
    },
    methods: {
      getChildren() {
        return this.selectedMenu.children;
      },
    }
  };

</script>
