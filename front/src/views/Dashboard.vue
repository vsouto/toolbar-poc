<template>
  <div>
    <div class="container dashboard">
      <div class="row">
        <generic-element
          v-for="item in items"
          :component="item"
        ></generic-element>
      </div>
    </div>
  </div>
</template>

<script>

  import GenericElement from "@/views/elements/generic/generic";
  import { EventBus } from '@/plugins/eventbus.js';

  export default {
    name: 'Dashboard',
    components: {
      GenericElement,
    },
    data: () => ({
      toolbarOpen: false,
      items: []
    }),
    created() {
      EventBus.$on('addItem', this.captureEvent);
    },
    methods: {
      captureEvent(data) {
        console.log('event captured: ', data);
        this.items.push(data);
      }
    }
  };
</script>

