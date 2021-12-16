<template>
   <div class="info_bar">
      <h4>
        {{  primary }} - {{  secondary }}
      </h4>
    </div>
</template>

<script>

export default {
  name: 'InfoBar',
  props: ['primary', 'secondary', 'showNav'],
  methods: {
         back : function () {
                this.$store.commit('changeView', 'fixtures');
          }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info_bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: azure;
  padding: 4px;
}

.info_bar h4 {
  font-size: 0.9rem;
  margin: 0px;
}



</style>
