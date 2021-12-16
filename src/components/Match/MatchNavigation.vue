<template>
  <div class="matchnav">
    <ul>
      <li v-on:click="changeMatchView('stats')" :class="getMatchView === 'stats' ? 'selected' : ''">Stats</li>
      <li v-on:click="changeMatchView('table')" :class="getMatchView === 'table' ? 'selected' : ''">Table</li>
      <li v-on:click="changeMatchView('events')" :class="getMatchView === 'events' ? 'selected' : ''">Events</li>
      <li v-on:click="changeMatchView('lineups')" :class="getMatchView === 'lineups' ? 'selected' : ''">Lineups</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MatchNavigation',
  methods: {
    changeMatchView: function(view) {
      this.$store.commit('changeMatchView', view);
    },
  },
  computed: {
    getMatchView() {
      return this.$store.getters.getMatchView;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.matchnav {
  width: 100%;
  overflow: hidden;
}

.matchnav ul {
  width: 100%;
  background: #f6f6f6;
  display: flex;
  justify-content: space-between;
  padding: 0px 10vw;
  box-shadow: 0px 0px 15px -12px #000000;
}

.matchnav li {
  list-style-type: none;
  display: inline;
  padding: 4px 6vw;
  border-radius: 4px;
  font-size: 15px;
}

.selected {
  background: #ffffff;
}

.bold {
  font-weight: 800;
}

@media only screen and (max-width: 500px) {
  .matchnav ul {
    padding: 0px 2vw;
  }
}
</style>
