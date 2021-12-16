<template>
  <div class="main">
    <div v-if="loading" class="loader-container">
      <breeding-rhombus-spinner :animation-duration="700" :size="70" color="rgb(87, 155, 201)" />
    </div>
    <Header />
    <div v-if="view === 'fixtures'" class="container">
      <FixtureList v-if="getDateFromState" :selectedDate="getDateFromState" />
    </div>
    <div v-else-if="view === 'match'" class="match_container">
      <MatchView />
    </div>
    <div v-else class="container">
      <p>This section is under construction.</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import FixtureList from './components/FixtureList.vue';
import MatchView from './components/MatchView.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { BreedingRhombusSpinner } from 'epic-spinners';

import moment from 'moment';

export default {
  name: 'App',
  components: {
    FixtureList,
    MatchView,
    Footer,
    Header,
    BreedingRhombusSpinner,
  },

  computed: {
    view() {
      return this.$store.getters.getView;
    },
    getDateFromState() {
      return this.$store.getters.getDate;
    },

    loading() {
      return this.$store.getters.loading;
    },
  },

  created() {
    const today = moment(new Date()).format('YYYY-MM-DD');
    console.log('render');
    this.$store.commit('changeDate', today);
  },
};
</script>

<style>
body {
  margin: 0px;
  display: flex;
  justify-content: center;
}

@font-face {
  font-family: 'a Attack Graffiti';
  src: url('./assets/aAttackGraffiti.woff2') format('woff2'), url('./assets/aAttackGraffiti.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'a Attack Graffiti';
  src: url('./assets/aAttackGraffiti.woff2') format('woff2'), url('./assets/aAttackGraffiti.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Condensed';
  src: url('./assets/RobotoCondensed-BoldItalic.woff2') format('woff2'), url('./assets/RobotoCondensed-BoldItalic.woff') format('woff');
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Condensed';
  src: url('./assets/RobotoCondensed-Bold.woff2') format('woff2'), url('./assets/RobotoCondensed-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Condensed';
  src: url('./assets/RobotoCondensed-Italic.woff2') format('woff2'), url('./assets/RobotoCondensed-Italic.woff') format('woff');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Condensed';
  src: url('./assets/RobotoCondensed-LightItalic.woff2') format('woff2'), url('./assets/RobotoCondensed-LightItalic.woff') format('woff');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Condensed';
  src: url('./assets/RobotoCondensed-Light.woff2') format('woff2'), url('./assets/RobotoCondensed-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Condensed';
  src: url('./assets/RobotoCondensed-Regular.woff2') format('woff2'), url('./assets/RobotoCondensed-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

html,
body {
  padding: 20px 0 0 0;
  margin: 0;
  font-family: 'Roboto Condensed', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  background: rgb(243, 243, 243);
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto Condensed', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  width: 100%;
}
.container {
  min-height: 100vh;
  padding: 0 1.5rem 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}

.match_container {
  min-height: 100vh;
  padding: 0 0 40px;
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.main {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.loader-container {
  position: absolute;
  top: 40vh;
}

@media only screen and (max-width: 500px) {
  .container {
    padding: 0 1rem 40px;
  }
}

@media only screen and (max-width: 400px) {
  .container {
    padding: 0 0.75rem 40px;
  }
}
</style>
