<template>
              <div class="event_row">
                <span class="home">
                   <span class="event_line" v-if="team === 'home'" >
              
                  <span v-if="event.type !== 'subst'" class="player"> {{event.player.name}}</span>
                       <span v-if="event.detail === 'Yellow Card'" class="yellow_card"></span>
                      <span v-else-if="event.detail === 'Red Card'" class="red_card"></span>
                      <span v-else-if="event.type === 'Goal'" class="goal">
                        <img src="../../assets/ball.png" alt="me" width="16" height="16" />
                      </span>
                             <span v-if="event.type === 'subst'" class="sub">
                          <span>
                            <span>{{event.player.name}}</span>
                             <span>{{event.assist.name}}</span>
                             </span>
                               <img src="../../assets/sub.png" alt="me" width="16" height="16" />
                        </span>        
                        </span>
                      </span>
                <span class="event">
                  <span class="time">{{event.time.elapsed}}&apos;</span>
                </span>
                <span class="away">
                  <span class="event_line" v-if="team === 'away'" >
                      <span v-if="event.detail === 'Yellow Card'" class="yellow_card"></span>
                      <span v-else-if="event.detail === 'Red Card'" class="red_card"></span>
                      <span v-else-if="event.type === 'Goal'" class="goal">
                      <img src="../../assets/ball.png" alt="me" width="16" height="16" />
                      </span>
                       <span v-else-if="event.type === 'subst'" class="sub">
                          <img src="../../assets/sub.png" alt="me" width="16" height="16" />
                           <span>
                            <span>{{event.player.name}}</span>
                             <span>{{event.assist.name}}</span>
                        </span>
                        </span>
                  <span v-if="event.type !== 'subst'" class="player"> {{event.player.name}}</span>
                    </span>
                </span>
              </div>


</template>

<script>

export default {
  name: 'TopBar',
  props: ['event', 'team'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.events {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home,
.away {
  width: 40%;
}

.home {
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.away {
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}


.event {
  width: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.event_row {
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 8px 0vw;
  align-items: center;
  font-size: 0.9rem;
}

.event_line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.yellow_card {
  display: block;
  width: 10px;
  height: 16px;
  background-color: rgb(253, 253, 131);
}

.red_card {
  display: block;
  width: 10px;
  height: 16px;
  background-color: rgb(206, 6, 6);
}

.sub {
  display:flex;
  flex-direction: row;
  align-items: center;
}

.sub span {
  display:flex;
  flex-direction: column;
  font-size: 13px
}

.home .sub img {
  margin-left: 12px
}

.away .sub img {
  margin-right: 12px
}

.away .sub  {
  text-align: left;
}


.time {
  font-size: 0.85rem;
}

.home .player {
  margin-right: 6px;
}

.away .player {
  margin-left: 6px;
}


</style>
