<template>
    <div>
        <h2>{{msg}}</h2><hr/>
        <h3>{{$store.state.count}}</h3>
        <p>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('sub')">-</button>
        </p>
    </div>
</template>
<script>
import store from '@/vuex/store';
export default {
    data(){
        return{
            msg: 'Hello Vuex !'
        }
    },
    // methods:{
    //     add(){
    //         store.state.count++;
    //     },
    //     sub(){
    //         store.state.count--;
    //     }
    // },
    store
}
</script>