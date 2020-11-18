<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <h1>Toolbar Proof of Concept</h1>
      </v-row>

      <v-row>

        <v-col cols="3">
          <toolbar></toolbar>
        </v-col>

        <v-col cols="6">
          <dashboard></dashboard>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>

  import Toolbar from "@/views/toolbar/toolbar";
  import Dashboard from "@/views/Dashboard";

  export default {
    name: 'Poc',
    components: {
      Toolbar,
      Dashboard
    },
    data: () => ({

    })
  };
</script>
