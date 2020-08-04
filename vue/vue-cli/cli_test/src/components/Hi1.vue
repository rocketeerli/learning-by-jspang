<template>
    <div>
        <h2>{{msg}}</h2>
        <p>router-link 接收到的参数：</p>
        <p>username: {{$route.params.username}}</p>
        <p>id: {{$route.params.id}}</p>
    </div>
</template>

<script>
export default {
    name: 'hi1',
    data(){
        return {
            msg: 'I am Hi_1 page!'
        }
    }
}
</script>

<style scoped>

</style>
