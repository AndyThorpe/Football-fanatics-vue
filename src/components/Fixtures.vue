<template>
  <div class="fixture_row" v-on:click="viewMatch">
    <div class="home_team">
      <h1>
        <img :src="FixtureData.teams.home.logo" class="club_logo" />
        {{ FixtureData.teams.home.name }}
      </h1>
    </div>

    <div class="vs">
      <div v-if="FixtureData.fixture.status.short === 'NS'">
        <h1>
          {{ getHumanDate(FixtureData.fixture.date) }}
        </h1>
      </div>
      <div v-else-if="FixtureData.fixture.status.short === 'FT'">
        <h1 class="FT">
          <span>{{ FixtureData.goals.home }} - {{ FixtureData.goals.away }} </span>
          <span>FT</span>
        </h1>
      </div>
      <div v-else>
        <h1 class="live">
          <span> {{ FixtureData.goals.home }} - {{ FixtureData.goals.away }} </span>
          <span v-if="FixtureData.fixture.status.short === 'HT'">{{ FixtureData.fixture.status.short }}</span>
          <span v-else>{{ FixtureData.fixture.status.elapsed }}</span>
        </h1>
      </div>
    </div>

    <div class="away_team">
      <h1>
        {{ FixtureData.teams.away.name }}
        <img :src="FixtureData.teams.away.logo" class="club_logo" />
      </h1>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Fixtures',
  props: ['FixtureData'],
  methods: {
    getHumanDate: function(date) {
      return moment(date, 'HH:mm').format('HH:mm');
    },
    viewMatch: function() {
      window.scrollTo(0, 0);
      this.$store.commit('changeView', 'match');
      this.$store.commit('changeMatchID', this.FixtureData.fixture.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fixture_group h1 {
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  margin: 2px 0;
}

.fixture_group h2 {
  font-size: 0.85rem;
  font-weight: 400;
}

.fixture_group h3 {
  font-size: 0.75rem;
  font-weight: 400;
}

.flag {
  width: 20px;
  margin-right: 15px;
  margin-left: auto;
}

.comp_logo {
  width: 25px;
  margin-right: 15px;
}

.logo_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.club_logo {
  width: 30px;
}

.fixture_row {
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 2px 0;
}

.fixture_row h1 {
  display: flex;
  font-size: 0.85rem;
  font-weight: 400;
  align-items: center;
}

.fixture_row .home_team {
  width: 40%;
  display: flex;
}

.fixture_row .home_team h1 {
  justify-content: flex-start;
}

.fixture_row .away_team h1 {
  justify-content: flex-end;
}

.fixture_row .home_team img {
  margin-right: 15px;
}

.fixture_row .away_team img {
  margin-left: 15px;
}

.fixture_row .vs {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 20%;
}
.fixture_row .vs h1 {
  justify-content: center;
  align-items: center;
}

.fixture_row .away_team {
  width: 40%;
  display: flex;
  justify-content: flex-end;
}

.fixture_row .home_team h1 {
  text-align: left;
}

.fixture_row .away_team h1 {
  text-align: right;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.kickoff {
  text-align: center;
  font-size: 0.6rem;
  color: rgb(56, 56, 56);
  margin: 2px 0;
}

.match_info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.FT {
  background-color: rgb(5, 95, 110);
  color: #ffffff;
  width: 50px;
  padding: 3px;
  display: flex;
  flex-direction: column;
}

.FT {
  color: #ffffff;
  font-size: 0.7rem !important;
}

.live {
  background-color: rgb(87, 155, 201);
  width: 50px;
  padding: 3px;
  display: flex;
  flex-direction: column;
}

.live {
  color: #ffffff;
}

.live {
  color: #ffffff;
  font-size: 0.7rem !important;
}

.FT span,
.live span {
  margin: 1px;
}

.group_title {
  margin-bottom: 10px !important;
}

@media only screen and (max-width: 500px) {
  .club_logo {
    width: 24px;
  }

  .fixture_row .home_team img {
    margin-right: 10px;
  }

  .fixture_row .away_team img {
    margin-left: 10px;
  }

  .fixture_row .vs {
    width: 15%;
  }
}

@media only screen and (max-width: 500px) {
  .fixture_row h1 {
    font-size: 0.8rem;
  }
}

@media only screen and (max-width: 400px) {
  .club_logo {
    width: 20px;
  }

  .fixture_row h1 {
    font-size: 0.75rem;
  }
}

@media only screen and (max-width: 370px) {
  .club_logo {
    width: 18px;
  }

  .fixture_row h1 {
    font-size: 0.7rem;
  }
}
</style>
