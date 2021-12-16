<template>

          <div v-if="home.length > 0" class="lineups">
            <div  class="home_lineup">
               <h3>Coach: {{homeCoach.name}}</h3>
              <h4>{{homeFormation}}</h4>
              <ul>
              <li v-for="player in home" :key="player.id">
                {{ player.player.name}}
              </li>
              </ul>
              <p class="bold">Substitutes</p>
              <ul>
              <li v-for="player in homesubs" :key="player.id">
                {{ player.player.name}}
              </li>
              </ul>
            </div>
            <div class="away_lineup">
              <h3>Coach: {{awayCoach.name}}</h3>
               <h4>{{awayFormation}}</h4>
               <ul>
              <li v-for="player in away" :key="player.id">
                   {{ player.player.name}}
              </li>
              </ul>
              <p>Substitutes</p>
              <ul>
              <li v-for="player in awaysubs" :key="player.id">
                   {{ player.player.name}}
              </li>
              </ul>
            </div>
          </div>
       <div v-else class="error"> 
          <p>No lineups available</p>   
        </div>
    
</template>

<script>

export default {
  name: 'TopBar',
  props: ['lineups'],
  data() {
    return {
      home: [],
      away: [],
      homesubs: [],
      awaysubs: [],
      homeFormation: '',
      awayFormation: '',
      homeCoach: '',
      awayCoach: ''
    }
  },
   created() {
     if (this.lineups.length > 0) {
     this.home = this.lineups[0].startXI
     this.away = this.lineups[1].startXI  
     this.homesubs = this.lineups[0].substitutes
     this.awaysubs = this.lineups[1].substitutes  
     this.homeFormation = this.lineups[0].formation
     this.awayFormation = this.lineups[1].formation  
    this.homeCoach = this.lineups[0].coach
     this.awayCoach = this.lineups[1].coach  
     }

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.lineups ul {
  margin: 0px;
  padding: 0px;
}

.lineups p {
text-align: left
}

.lineups h3 {
text-align: left;
margin-bottom: 5px;
font-size: 15px

}

.lineups h4 {
text-align: left;
margin-bottom: 5px
}

.lineups li {
  list-style-type: none;
  font-size: 0.95rem;
  text-align: left;
}

.lineups {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 10vw;
  text-align: center; 
}

.error  {
  width: 100%;
}


.error p {
  text-align: center
}



</style>
