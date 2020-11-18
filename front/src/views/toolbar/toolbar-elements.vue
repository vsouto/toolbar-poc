<template>
  <div class="toolbar-elements">
    <h2>Elements</h2>
    <generic-element></generic-element>
  </div>
</template>

<script>

  import GenericElement from "../elements/generic/generic";

  export default {
    name: 'ToolbarElements',
    components: {
      GenericElement,
    },
    data: () => ({
      toolbarOpen: false,
      colOne: [],
      categories: [
        [1, 2, 3],
        [4, 5, 6]
      ],
    }),
    mounted() {

    },
    created() {

    },
    methods: {
    }
  };

</script>
