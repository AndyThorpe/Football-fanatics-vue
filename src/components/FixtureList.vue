<template>
  <Calendar />
  <div class="fixture_group_container" v-for="fixture in fixtures" :key="fixture.id">
    <FixtureGroup :groupedFixtures="fixture" />
  </div>
</template>

<script>
import axios from 'axios';
import FixtureGroup from './FixtureGroup.vue';
import Calendar from './Calendar/Calendar.vue';

export default {
  name: 'FixtureList',
  components: {
    FixtureGroup,
    Calendar,
  },
  data() {
    return {
      fixtures: [],
      date: '',
    };
  },
  props: ['selectedDate'],
  methods: {
    setLoader: function(bool) {
      console.log(bool);
      this.$store.commit('setLoading', bool);
    },

    getFixtures: function() {
      const dateFromState = this.selectedDate;
      const BACKEND_SERVER = 'https://football-fanatics-backend.herokuapp.com';
      const today = new Date().toISOString().split('T')[0];
      let cache = dateFromState === today ? 60 : 3600;

      let date = dateFromState;
      axios
        .get(`${BACKEND_SERVER}/fixtures?date=${date}&cache=${cache}`)
        .then((response) => {
          let data = response.data.jobs.response;
          let matches = [];

          data.sort(function(a, b) {
            return a.league.id - b.league.id;
          });

          data.length = 80;

          data.map(function(item) {
            if (
              item.fixture.status.short !== 'CANC' &&
              item.fixture.status.short !== 'PST' &&
              item.fixture.status.short !== 'SUSP' &&
              item.fixture.status.short !== 'TBD'
            ) {
              matches.push(item);
            }
          });

          const groupBy = (key) => {
            return function group(array) {
              return array.reduce((acc, obj) => {
                const property = obj.league[key];
                acc[property] = acc[property] || [];
                acc[property].push(obj);
                return acc;
              }, {});
            };
          };

          const groupByLeagueId = groupBy('id');
          const groupedFixtures = groupByLeagueId(matches);

          console.log(groupedFixtures);
          this.fixtures = groupedFixtures;
        })

        .then(() => {
          this.setLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  computed: {
    getDateFromState() {
      return this.$store.getters.getDate;
    },
  },
  mounted() {
    this.date = this.$store.getters.getDate;
  },

  beforeUpdate() {
    this.date = this.$store.getters.getDate;
  },

  watch: {
    date: function() {
      console.log('date changed');
      this.setLoader(true);
      this.getFixtures();
    },
  },
};
</script>

<style scoped>
.fixture_group_container {
  width: 100%;
}

@media only screen and (min-width: 1000px) {
  .fixture_group_container {
    width: 70%;
    margin: auto;
  }
}
</style>
