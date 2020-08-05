<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <div>
      <p>
        <button @click="go_back">后退</button>
        <button @click="go_forward">前进</button>
        <button @click="go_home">返回首页</button>
      </p>
    </div>
    <router-link to="/">Home</router-link> | 
    <router-link to="/hi">Hi</router-link> | 
    <router-link to="/params/333/hei guys!">Params</router-link> | 
    <router-link to="/goHome">go Home</router-link> | 
    <router-link to="/goParams/227/Hello Params!">go Params</router-link> | 
    <router-link to="/hi_1">Hi_1</router-link> | 
    <router-link to="/hi_one">Hi_one</router-link> | 
    <router-link to="/home">alias_home</router-link> | 
    <router-link to="/lalala">404页面</router-link> | 
    <transition name="anim" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    go_back(){
      this.$router.go(-1);
    },
    go_forward(){
      this.$router.go(1);
    },
    go_home(){
      this.$router.push('/');
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.anim-enter {
  opacity:0;
}
.anim-enter-active{
  transition: opacity .5s;
}
.anim-leave{
  opacity: 1;
}
.anim-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
