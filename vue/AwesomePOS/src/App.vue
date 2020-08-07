<template>
  <div id="app">
    <i class="iconfont icon-hanbao"></i>
    <i class="iconfont icon-goumai"></i>
    <i class="iconfont icon-dianpu"></i>
    <i class="iconfont icon-shouji"></i>
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
