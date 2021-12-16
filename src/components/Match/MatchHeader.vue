<template>
   <header class="header">
      <div class="score_container">
        <ScoreSection :teamname="homeTeam" :logo="homeTeamLogo" :scorers="homeGoals"/>
        <ScoreBoard :goals="goals" :status="status" :date="date" :elapsed="elapsed" />
        <ScoreSection :teamname="awayTeam" :logo="awayTeamLogo" :scorers="awayGoals" />
      </div>
    </header>
</template>

<script>

import ScoreSection from './ScoreSection';
import ScoreBoard from './ScoreBoard';

export default {
  name: 'MatchHeader',
  props: [ 'matchdata' ],
  data: function() {
      return {
        data: this.matchdata,
        homeTeam: '',
        homeTeamLogo: '',
        awayTeam: '',
        awayTeamLogo: '',
        goals: {},
        status: '',
        date: '',
        elapsed: '',
        homeGoals: [],
        awayGoals: []
      }
  },
  components: {
    ScoreSection,
    ScoreBoard
  },
  methods: {
    mapScorers: function(events) {
      events.map(event => {
        if (event.type === 'Goal' && event.team.id === this.data.teams.home.id) this.homeGoals.push({ name: event.player.name, time: event.time.elapsed });
        if (event.type === 'Goal' && event.team.id === this.data.teams.away.id) this.awayGoals.push({ name: event.player.name, time: event.time.elapsed });
      })
    }
  },
  mounted: function() {
     this.homeTeam = this.data.teams.home.name
     this.awayTeam = this.data.teams.away.name
     this.homeTeamLogo = this.data.teams.home.logo
     this.awayTeamLogo = this.data.teams.away.logo
     this.goals = this.data.goals
     this.status = this.data.fixture.status
     this.date = this.data.fixture.date
     this.elapsed = this.data.fixture.status.elapsed

     this.mapScorers(this.data.events)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  min-height: 200px;
  width: 100%;
  padding: 5vh 0vw;
  background-color: antiquewhite;
  background-repeat: no-repeat;
  background-image: url('../../assets/stadium-bg.jpg');
  background-size: cover;
  color: #ffffff;
  display: flex;
  align-items: center;
}
.score_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
}


</style>
