import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count:1
}
const mutations = {
    add(state, num){
        state.count += num;
    },
    sub(state){
        state.count--;
    }
}
const getters = {
    count:state => {
        return state.count += 10;
    }
}

const actions = {
    addAction(context) {
        context.commit('add', 5);
        setTimeout(()=>{context.commit('sub')}, 3000);
        console.log('比 sub 先执行...');
    },
    subAction({commit}) {
        commit('sub');
    }
}

const moduleA = {
    state, mutations, getters, actions
}

export default new Vuex.Store({
    modules:{a: moduleA}
})
