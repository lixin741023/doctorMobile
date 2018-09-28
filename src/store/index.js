import {lx} from "../js/global";
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        test:21,
        // url:'http://7.0.0.114:8083/StarTrekMED',
        url:'http://7.0.0.111:8084/StarTrekMED',
        // url:undefined,
        userId:'74a941c07db840f49a011b3174404281',
        funType:undefined,
        HuanZheID:undefined
    },
    mutations:{
        commit_url:(fd,a0a)=>{
            fd.url=a0a;
            lx.con('当前url：',a0a);
        },
        commit_userId:(state,dz)=>{
            state.userId=dz;
            lx.con('当前用户Id：',dz);
        },
        commit_funType:(sxz,x91a)=>{
            sxz.funType=x91a;
            lx.con('当前方法',x91a);
        },
        commit_HuanZheID:(ee9o9,pop)=>{
            ee9o9.HuanZheID=pop;
            lx.con('当前患者',pop);
        }
    }
});

