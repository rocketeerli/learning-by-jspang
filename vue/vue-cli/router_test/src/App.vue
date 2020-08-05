<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <router-link to="/">Home</router-link> | 
    <router-link to="/params/333/hei guys!">Params</router-link> | 
    <!-- <router-link :to="{name:'hi'}">Hi</router-link> -->
    <router-view/>
    <!-- <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App'
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
.left {
  float:left;
  width:50%;
  height:300px;
  background-color: #ccc;
}
.right {
  float:right;
  width:50%;
  height:300px;
  background-color: red;
}
</style>
