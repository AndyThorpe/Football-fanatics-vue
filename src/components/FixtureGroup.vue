<template>
  <div class="fixture_group">
    <h1 class="group_title">{{ groupedFixtures[0].league.name }}</h1>
    <div class="fixture_container" v-for="groupedFixture in groupedFixtures" :key="groupedFixture">
      <Fixture :FixtureData="groupedFixture" />
    </div>
  </div>
</template>

<script>
import Fixture from './Fixtures.vue';

export default {
  name: 'FixtureGroup',
  components: {
    Fixture,
  },
  props: ['groupedFixtures'],
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

.fixture_container {
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  min-height: 45px;
}

.fixture_container:nth-child(even) {
  background: rgb(250, 250, 250);
  box-shadow: 0 0 -5px -5px #000000;
}

.fixture_group {
  margin-bottom: 20px;
  background: rgb(247, 247, 247);
  padding: 12px;
  box-shadow: 0px 2px 8px -5px #000000;
  border: 1px solid #ffffff;
}

.group_title {
  margin-bottom: 10px !important;
}

@media only screen and (max-width: 500px) {
  .fixture_container {
    padding: 5px 5px;
  }
}
</style>
