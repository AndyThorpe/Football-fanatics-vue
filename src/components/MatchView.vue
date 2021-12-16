<template>
   <InfoBar :primary="competitionName" :secondary="competitionRound" :showNav="true" />
   <MatchHeader v-if="matchdata" :matchdata="matchdata" />
   <InfoBar :primary="venue" :secondary="city" :showNav="false" />
   
   <MatchNavigation />

   <div v-if="matchView === 'events'" class="events_container">
      <div v-if="events.length > 0">
        <div v-for="event in events" :key="event.id">
          <MatchEvent  v-if="event.team.name === homeTeam" :event="event" team="home"  />
          <MatchEvent  v-else :event="event" team="away" />
        </div>
      </div>
      <div v-else>
          <h4>Referee: {{ referee}}</h4>
          <p>Match has not started yet.</p>
      </div>
    </div>

  <div v-else-if="matchView === 'stats'">
    <div v-if="homeStats" class="stats_container">
    <ul>
      <li v-for="stat in homeStats" :key="stat.id">{{stat.value}}</li>
    </ul>
      <ul>
      <li v-for="stat in homeStats" :key="stat.id">{{stat.type}}</li>
      </ul>
        <ul>
      <li v-for="stat in awayStats" :key="stat.id">{{stat.value}}</li>
      </ul>
        </div>
      <div v-else><p>No statistics available for this match</p></div>

    </div>

  <div v-else-if="matchView === 'table'" class="standings_container">
    <Table :competitionId="competitionId" /> 
    </div>

  <div v-else-if="matchView === 'lineups'" class="lineup_container">
      <Lineups :lineups="lineups"/>
    </div>

</template>

<script>
  import axios from 'axios'
  import InfoBar from './Generic/InfoBar'
  import MatchHeader from './Match/MatchHeader'
  import MatchEvent from './Match/MatchEvent'
  import MatchNavigation from './Match/MatchNavigation'
  import Table from './Generic/Table'
  import Lineups from './Match/Lineups'

export default {
  name: 'MatchView',
    data() {
    return {
      matchdata: '',
      competitionName: '',
      competitionRound: '',
      venue: '',
      city: '',
      events: '',
      homeTeam: '',
      homeStats: [],
      awayStats: [],
      competitionId: '',
      lineups: [],
      referee: '',
    }
  },
  components: {
    InfoBar,
    MatchHeader,
    MatchEvent,
    MatchNavigation,
    Table,
    Lineups
  },
  methods: {
          setLoader : function (bool) {
            
                this.$store.commit('setLoading', bool);
          },
  },
  computed: {
    matchId() {
       return this.$store.getters.getMatchId;
    },
    matchView() {
       return this.$store.getters.getMatchView;
    }
  },
  created() {
        this.setLoader(true)
      const BACKEND_SERVER = 'https://football-fanatics-backend.herokuapp.com';
      let cache = 60;
      axios.get(`${BACKEND_SERVER}/match?id=${this.matchId}&cache=${cache}`)
        .then((response) => {
              let data = response.data.jobs.response[0];
              console.log(data)
              this.matchdata = data
              this.competitionId = data.league.id
              this.competitionName = data.league.name
              this.competitionRound = data.league.round
              this.venue = data.fixture.venue.name
              this.city = data.fixture.venue.city
              this.events = data.events
              this.homeTeam = data.teams.home.name
              this.awayTeam = data.teams.away.name
              this.homeStats = data.statistics.length > 0 ? data.statistics[0].statistics : ''
              this.awayStats = data.statistics.length > 0 ? data.statistics[1].statistics : ''
              this.lineups = data.lineups
              this.referee = data.fixture.referee

        })
                .then(() => {
          this.setLoader(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title_bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: azure;
  padding: 4px;
  margin-bottom: 20px;
}

.title_bar h2 {
  font-size: 1rem;
  margin: 5px 0;
}

.score_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
}

.events_container {
  width: 100%;
  padding: 2vh 2.5vw;
  box-sizing: border-box
}


li {
  list-style-type: none;
}

.stats_container {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 10px auto;
  max-width: 550px
}

.standings_container {
  display: flex;
  justify-content: space-between;
  margin: 0px auto 10px;
  max-width: 1000px;
  width: 90%;
}

.lineup_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
   width: 100%;
}

.stats_container li {
  padding: 4px 0;
  font-size: 14px
}

@media only screen and (min-width: 400px) {
  .stats_container {
      width: 94%;
    }
}

/* .stats_container li:nth-child(even) {
  background: #ffffff
} */


</style>
