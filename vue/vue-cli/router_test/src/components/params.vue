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
    }
}
</script>
<style scoped>

</style>