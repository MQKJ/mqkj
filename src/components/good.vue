<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>菅双鹤</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <x-button slot="right" type="primary" action-type="button" mini @click="sendMessage">{{word}}</x-button>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li @click='applyFor()' target="_blank">页面huidiao </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Good',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      word: '发送验证码',
      isOvertime: false
    }
  },
  methods: {
    sendMessage(){
      if(this.isOvertime){
          return false;
      }
      let that = this,
          time = 60;
      var sendTimer = setInterval(function(){
          that.isOvertime = true;
          time--;
          that.word = "重新发送"+time;
          if(time < 0){
              that.isOvertime = false;
              clearInterval(sendTimer);
              that.word = "获取验证码";
          }
      },1000)
    },
    applyFor () {
      this.$router.push('/');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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