<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/Hi">Hi 页面</router-link> |
      <router-link :to="{name:'hi1', params:{username:'rocketeerli', id:'my_id'}}">Hi 页面1</router-link> |
      <router-link to="/hi/hi2">Hi 页面2</router-link> |
    </div>
    <p>name 接收到的参数：{{$route.name}}</p>
    <router-view/>
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
</style>
