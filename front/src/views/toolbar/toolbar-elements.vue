<template>
  <div class="toolbar-elements" v-dragula="colOne" drake="first">
    <h2>Elements</h2>
    <token1></token1>
    <generic-element></generic-element>
    <info1-element></info1-element>
    <media-element></media-element>
  </div>
</template>

<script>

  import Vue from 'vue'
  import Token1 from '@/views/elements/token1/token1'
  import GenericElement from "../elements/generic/generic";
  import Info1Element from "../elements/info1/info1";
  import MediaElement from "../elements/media/media";

  export default {
    name: 'ToolbarElements',
    components: {
      MediaElement,
      Info1Element,
      GenericElement,
      Token1
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
