<template>
    <div>
        <p>{{msg}}</p>
        <router-view name="left" class="left"></router-view>
        <router-view name="right" class="right"></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'This is Hi !'
        }
    }
}
</script>
<style scoped>
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