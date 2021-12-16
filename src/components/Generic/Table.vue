<template>
    <div v-if="table" class="table">
      <table class="table">
        <tr v-if="table" class="table-head">
            <th> Rank </th>
            <th class="team-name">Team</th>
             <th> Pld </th>
              <th> W</th>
              <th> D </th>
               <th>L </th>
               <th> +/- </th>
               <th>Pts</th>
        </tr>

        <tr v-for="line in table" :key="line">
            <td>  {{line.rank}} </td>
            <td class="team-name">{{line.team.name}}</td>
             <td>  {{line.all.played}} </td>
              <td> {{line.all.win}} </td>
              <td> {{line.all.draw}} </td>
               <td>{{line.all.lose}} </td>
               <td>{{line.goalsDiff}} </td>
               <td class="points">{{line.points}}</td>
        </tr>
      </table>
    </div>
      <div v-else class="error">
        <p>No table available</p>
      </div>

</template>

<script>

import axios from 'axios'

export default {
  name: 'Table',
  props: ['competitionId'],
      data() {
    return {
      table: []
    }
  },

  methods: {
         back : function () {
                this.$store.commit('changeView', 'fixtures');
          },
            setLoader : function (bool) {
            
                this.$store.commit('setLoading', bool);
          },
        },

   

   created() {
        this.setLoader(true)
      const BACKEND_SERVER = 'https://football-fanatics-backend.herokuapp.com';
      let cache = 60;
      axios.get(`${BACKEND_SERVER}/standings?id=${this.competitionId}&season=2021&cache=${cache}`)
        .then((response) => {
              let data = response.data.jobs.response[0];
              this.table = response.data.jobs.results > 0 ? data.league.standings[0] : ''
          
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
.table-container   {
  width:100%
}

.table   {
  width:100%;
  margin-bottom: 20px;
}

.team-name {
  text-align: left;
  padding-left: 6px
}


tr {
  padding: 5px 10px;
  height: 35px;
  font-size: 14px
}

tr:nth-child(even) {
  background: #ffffff
}

.table-head {
  background: azure
}

.error {
  width:100%;
}


</style>
