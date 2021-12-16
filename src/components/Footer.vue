<template>
  <footer>
    <ul>
      <li v-on:click="changeView('home')" :class="getView === 'home' ? 'selected' : ''">Home</li>
      <li v-on:click="changeView('fixtures')" :class="getView === 'fixtures' || getView === 'match ' ? 'selected' : ''">Calendar</li>
      <li v-on:click="changeView('teams')" :class="getView === 'teams' ? 'selected' : ''">Teams</li>
      <li v-on:click="changeView('competitions')" :class="getView === 'competitions' ? 'selected' : ''">Competitions</li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    changeView: function(view) {
      this.$store.commit('changeView', view);
    },
  },
  computed: {
    getView() {
      return this.$store.getters.getView;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  position: fixed;
  width: 100%;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  background: rgb(243, 243, 243);
  color: #000000;
  border-top: 1px solid #e6e6e6;
  padding: 0px;
}

li {
  list-style-type: none;
  display: inline;
  padding: 8px 6vw;
  border-radius: 4px;
}

ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  padding: 6px 0px;
  margin: 0px;
}

.selected {
  background: #ffffff;
}
</style>
