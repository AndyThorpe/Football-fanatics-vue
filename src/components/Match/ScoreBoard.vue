<template>
  <div class="score_board">
    <div v-if="status.short !== 'NS'">
      <div class="score">
        <h2>{{ goals.home }} - {{ goals.away }}</h2>
      </div>
      <div class="status">
        <h3 v-if="status.short === '1H' || status.short === '2H'">{{ elapsed }}'</h3>
        <h3 v-else>{{ status.short }}</h3>
      </div>
    </div>
    <div v-else class="prematch_dates">
      <h2>
        {{ convertTime(date) }}
      </h2>
      <h3>
        {{ convertDate(date) }}
      </h3>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ScoreBoard',
  props: ['goals', 'status', 'date', 'elapsed'],
  methods: {
    convertTime: function(date) {
      let formattedDate = moment(date).format('HH:mm');
      return formattedDate;
    },
    convertDate: function(date) {
      let formattedDate = moment(date).format('D MMM');
      return formattedDate;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score_board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24%;
  position: relative;
  top: 15px;
}

.score_board h2 {
  margin: 0 0 5px;
  font-size: 3rem;
}

.score_board h3 {
  margin: 0px;
  font-size: 0.9rem;
  text-align: center;
}

.prematch_dates {
  display: flex;
  align-items: center;
  flex-direction: column;
}

@media only screen and (max-width: 500px) {
  .score_board h2 {
    font-size: 2.5rem;
  }
}

@media only screen and (max-width: 360px) {
  .score_board h2 {
    font-size: 2rem;
  }
}
</style>
