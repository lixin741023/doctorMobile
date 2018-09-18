import {lx} from "../js/global";
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        test:21,
        url:'http://7.0.0.114:8083/StarTrekMED',
        userId:'74a941c07db840f49a011b3174404281'
    },
    mutations:{
        commit_url:(state,a)=>{
            state.url=a;
            lx.con('当前url：',a);
        },
        commit_userId:(state,a)=>{
            state.userId=a;
            lx.con('当前用户Id：',a);
        }
    }
});

