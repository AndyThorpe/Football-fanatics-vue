<template>
<div class="calendar_container">
  <div v-for="date in dates" :key="date" class="calendar-item-container">
    <button v-on:click="changeDate(date)" class="calendar_item" :class="getDateFromState === date ? 'selected' : ''">
        <h2>
          {{ convertToDay(date) }}
        </h2>
        <h2>
          {{ convertToDate(date) }}
        </h2>
      </button>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Calendar',
  data() {
      return {
        dates: [],
        selectedDate: ''
     }
  },
  methods: {
    getRange: function () {
      const calendarRange = [+2, +1, 0, -1, -2, -3];
      calendarRange.map(num => {
        const currentDate = new Date();
        let day = new Date(currentDate.setDate( currentDate.getDate() - num ))
        const d = moment(day).format('YYYY-MM-DD')
        this.dates.push(d)
      })
     
    },
    convertToDay: function(date) {
      let formattedDate = moment(date).format('ddd');
      return formattedDate
    },
    convertToDate: function(date) {
       let formattedDate = moment(date).format('MM-DD');
       return formattedDate
    },
    changeDate: function(date) {
      console.log(date)
      this.$store.commit('changeDate', date)
    },
  },
  mounted() {
    this.getRange()
  },

   computed: {
    getDateFromState() {
       return this.$store.getters.getDate
    }
  },



    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calendar_container {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;
  background: rgb(248, 248, 248);
  align-items: center;
  justify-content: center;
}

.calendar-item-container {
  flex: 1 1 auto;
}

.calendar_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background: rgb(243, 243, 243);
  border: 1px solid #ffffff;
  font-size: 0.5rem;
  font-weight: 300;
  flex: 1 1 auto;
  margin: 2px;
  border-radius: 4px;
  box-shadow: 0px 4px 8px -9px #000000;
  width: 100%;
}

.calendar_item h2 {
  margin: 2px 0;
}

.selected {
  background: rgb(216, 231, 235);
}

</style>
