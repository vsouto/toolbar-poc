<template>
  <v-card
    class="mx-auto grid-element"
    max-width="242"
    @click="fireComponent()"
  >
    <v-card-title class="headline text-truncate">
      <v-icon color="teal" class="a_link">
        {{component.icon}}

      </v-icon>
      {{component.title}}
    </v-card-title>
    <v-card-text>
      <div class="text--primary">
        events<br>
        {{component.events}}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

  import { EventBus } from '@/plugins/eventbus.js';

  export default {
    name: 'GenericElement',
    components: {
    },
    props: {
      component: {
        type: Object,
        required: true
      }
    },
    methods: {
      fireComponent() {
        EventBus.$emit('addItem', this.component);
      }
    }
  };
</script>
