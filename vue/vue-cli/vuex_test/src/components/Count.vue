<template>
    <div>
        <h2>{{msg}}</h2><hr/>
        <h3>Vuex 写法： {{$store.state.a.count}}</h3>
        <h3>computed: {{count}}</h3>
        <p>
            <button @click="$store.commit('add', 3)">+</button>
            <button @click="sub">-</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="subAction">-</button>
        </p>
    </div>
</template>
<script>
import store from '@/vuex/store';
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return{
            msg: 'Hello Vuex !'
        }
    },
    // 第一种方法
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // },

    // 第二种方法
    // computed:mapState({
    //     count:state=>state.count
    // }),

    // 第三种方法
    computed: {
        ...mapState(['count']),
        // count() {
        //     return this.$store.getters.count;
        // },
        // ...mapGetters(['count'])
        count(){
            return this.$store.state.a.count;
        }
    },
    methods:{
        ...mapMutations(['add', 'sub']),
        ...mapActions(['addAction', 'subAction'])
    },
    store
}
</script>