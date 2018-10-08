import {lx} from "../js/global";
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        url:'http://7.0.0.111:8084/StarTrekMED',
        // url:'http://7.0.0.114:8083/StarTrekMED',
        // url:undefined,
        userId:'74a941c07db840f49a011b3174404281',
        funType:undefined,
        HuanZheID:undefined
    },
    mutations:{
        commit_url:(a,a0a)=>{
            a.url=a0a;
        },
        commit_userId:(b,dz)=>{
            b.userId=dz;
        },
        commit_funType:(c,x91a)=>{
            c.funType=x91a;
        },
        commit_HuanZheID:(d,pop)=>{
            d.HuanZheID=pop;
        }
    }
});

