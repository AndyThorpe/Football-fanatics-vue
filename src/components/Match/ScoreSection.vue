<template>
  <div className="team">
    <img :src="logo" class="club_logo" height="40" width="40" />
    <h1>{{ teamname }}</h1>
    <div class="scorers">
      <ul>
        <li v-for="scorer in scorers" :key="scorer">{{ scorer.name }} {{ scorer.time }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreSection',
  props: ['logo', 'teamname', 'scorers'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.team {
  width: 38%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
  flex: 1;
}

.scorers_row {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.scorers {
  font-size: 0.85rem;
}

.scorers ul {
  margin: 0px;
  padding: 0px;
}

.scorers li {
  list-style-type: none;
  margin-bottom: 4px;
  text-align: center;
}

.club_logo {
  height: 40px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

@media only screen and (max-width: 500px) {
  .team h1 {
    font-size: 0.95rem;
  }
}

@media only screen and (max-width: 420px) {
  .team h1 {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 380px) {
  .team h1 {
    font-size: 0.8rem;
  }
}
</style>
