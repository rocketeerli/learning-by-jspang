<template>
    <div>
        <h2>{{msg}}</h2>
        <p>news_id: {{$route.params.news_id}}</p>
        <p>news_title: {{$route.params.news_title}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'params page'
        }
    },
    beforeRouteEnter:(to, from, next)=>{
        console.log('准备进入 params 路由模板');
        next();
    },
    beforeRouteLeave: (to, from, next)=>{
        console.log('准备离开 params 路由模板');
        next();
    }
}
</script>
<style scoped>

</style>