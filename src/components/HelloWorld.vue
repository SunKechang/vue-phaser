<template>
  <div class="hello">
    <ion-phaser 
            v-bind:game.prop="game"
            v-bind:initialize.prop="initialize"
        />
  </div>
</template>

<script>
import Phaser from 'phaser'
let vue
export default {
  name: 'HelloWorld',
  data() {
    return {
      game: {
        width: "80%",
        height: "80%",
        type: Phaser.AUTO,
        scene: {
            preload: function() {   //预加载，一般加载图片等资源
            },
            create: function() {
              let text = this.add.text(10, 10, vue.timePass)
              vue.$watch('timePass', ()=> {
                text.setText(vue.timePass)
              })
            },
            update: function() {
            }
        }
      },
      initialize: false,
      timePass: 0, //时间过去了多少秒
    }
  },
  mounted() {
    vue = this
    this.initialize = true
    setInterval(function(){
      vue.timePass++
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
