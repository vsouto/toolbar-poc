<template>
  <div>
    <div class="container monitor-grid">
      <div class="row" v-dragula="colTwo" drake="first">
        <div class="col-md-2 col-2">
          <div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
            .col-2
          </div>
        </div>
        <div class="col-md-2 col-2">
          <div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
            .col-2
          </div>
        </div>
        <div class="col-md-2 col-2"><div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
          .col-2
          </div>
        </div>
        <div class="col-md-2 col-2"><div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
          .col-2
          </div>
        </div>
        <div class="col-md-2 col-2"><div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
          .col-2
          </div>
        </div>
        <div class="col-md-2 col-2"><div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
          .col-2
          </div>
        </div>
      </div>
      <div class="row" v-dragula="colTwo" drake="first">
        <div class="col-md-4 col-6">
          <div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0 box-row grid-cel">.</div>
        </div>
        <div class="col-md-4 col-6">
          <div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
            .col-6 .col-md-4
          </div>
        </div>
        <div class="col-md-4 col-6"><div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
          .col-6 .col-md-4
        </div></div>
      </div>
      <div class="row" v-dragula="colTwo" drake="first">
        <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1 grid-col">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            big card
          </v-card>
        </div>
        <div class="col-xs-12 col-sm-9 col-md-10 col-lg-11 grid-col">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            card
          </v-card>
        </div>
      </div>
      <div class="row" v-dragula="colTwo" drake="first">
        <div class="col-md-3 ml-md-auto">
          <div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0 box-row grid-cel">
            .wrapped big card .wrapped big card .wrapped big card
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-6">
          <div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0 box-row grid-cel">.</div>
        </div>
        <div class="col-md-4 col-6">
          <div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
          .col-6 .col-md-4
          </div>
        </div>
        <div class="col-md-4 col-6"><div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
          .col-6 .col-md-4
        </div></div>
      </div>
      <v-row v-dragula="colTwo" drake="first">
        <v-col
          v-for="n in 2"
          :key="n"
          cols="6"
        >
          <v-card
            class="pa-2"
            outlined
            tile
            shaped
          >
            .col-6
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'MonitorGrid',
    data: () => ({
      toolbarOpen: false,
      colTwo: [],
    }),
    ready() {

    },
    created() {

      console.log('created');

      var service = this.$dragula.$service;
      //var service = Vue.$dragula.$service;

      service.options('first', {
        copy: true
      })

      service.eventBus.$on('drop', (args) => {
        console.log('eventBus drop: ' + args[0])
        console.log(args);
      })

/*
      service.on({
        drop: (el, container) => {
          console.log('service drop: ', el, container)
        },
        drag: (el, container) => {
          console.log('service drag: ', el, container)
        }
      });*/

      service.on('first', {
        accepts: (drake, el, target) => {
          console.log('accepts: ', el, target)
          return true // target !== document.getElementById(left)
        },
        drag: (drake, el, container) => {
          console.log('drag: ', 'el:', el, 'c:', container)
          //console.log('classList', el.classList)
          //el.classList.remove('ex-moved')
        },
        drop: (drake, el, container) => {
          console.log('drop: ', el, container)
          //console.log('classList', el.classList)
          //el.classList.add('ex-moved')
          return false;
        },
        over: (drake, el, container) => {
          console.log('over: ', el, container)
          //console.log('classList', el.classList)
          //el.classList.add('ex-over')
        },
        out: (drake, el, container) => {
          console.log('out: ', el, container)
          //console.log('classList', el.classList)
          //el.classList.remove('ex-over')
        }
      })

    },
  };
</script>

