<template>
  <header>
    <span v-if="getView === 'match'" v-on:click="back"><strong>Back</strong></span>
   <p>
     Football Fanatics
    </p>
  </header>
</template>

<script>

export default {
  name: 'Header',
  methods: {
         back : function () {
                window.scrollTo(0,0);
                this.$store.commit('changeView', 'fixtures');
                this.$store.commit('changeMatchView', 'events');
          },
       
        },

  computed: {
    getView() {
       return this.$store.getters.getView
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    position: fixed;
    width: 100%;
    top: 0px;
    display: flex;
    justify-content: center;
    background: rgb(243, 243, 243);
    color: #000000;
    border-bottom: 1px solid #e6e6e6;
    height: 40px;
    text-align: center;
    align-items: center;
  }

header span {
  position: absolute;
  left: 12px;
}

</style>
