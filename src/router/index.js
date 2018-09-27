import v from '../main.js';
import {routes} from "./test.js";
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import optionA from '../components/options/optionA.vue';
import optionB from '../components/options/optionB.vue';
import optionC from '../components/options/optionC.vue';
import login from '../components/nav/login.vue';
import optionD from '../components/options/optionD.vue';
import optionE from '../components/options/optionE.vue';
import HuanZheList from '../components/FUN/HuanZheList.vue';
import YiZhuGuanLi from '../components/FUN/YiZhuGuanLi.vue';
import ChaKanDianZiBingLi from '../components/FUN/ChaKanDianZiBingLi.vue';
import ChaKanHuLiBingLi from '../components/FUN/ChaKanHuLiBingLi.vue';
import ChaKanHuLiJiLu from '../components/FUN/ChaKanHuLiJiLu.vue';
import ChaKanSanCeDan from '../components/FUN/ChaKanSanCeDan.vue';

let index=[
    {
        name:'HuanZheList',
        path:'/fun/HuanZheList',
        component:HuanZheList,
        beforeEnter(a,b,c){
            if(v.$store.state.HuanZheID){
                v.$router.push({
                    name:v.$store.state.funType,
                    params:{
                        HuanZhe:v.$store.state.HuanZheID
                    }
                })
            }else{
                if(v.$store.state.funType==='ChaKanDianZiBingLi'){
                    v.$router.push({
                        name:'ChaKanDianZiBingLi'
                    });
                }else if(v.$store.state.funType==='ChaKanHuLiBingLi'){
                    v.$router.push({
                        name:'ChaKanHuLiBingLi'
                    });
                }else{
                    c();
                }
            }
        }
    },
    {
        name:'YiZhuGuanLi',
        path:'/fun/YiZhuGuanLi/:HuanZhe',
        component:YiZhuGuanLi,
        props:true
    },
    {
        name:'ChaKanDianZiBingLi',
        path:'/fun/ChaKanDianZiBingLi',
        component:ChaKanDianZiBingLi,
        props:true
    },
    {
        name:'ChaKanHuLiBingLi',
        path:'/fun/ChaKanHuLiBingLi/:HuanZhe',
        component:ChaKanHuLiBingLi,
        props:true
    },
    {
        name:'ChaKanHuLiJiLu',
        path:'/fun/ChaKanHuLiJiLu/:HuanZhe',
        component:ChaKanHuLiJiLu,
        props:true
    },
    {
        name:'ChaKanSanCeDan',
        path:'/fun/ChaKanSanCeDan/:HuanZhe',
        component:ChaKanSanCeDan,
        props:true
    },
    {
        path:'/',
        redirect:{
            name:'optionA'
        }
    },
    {
        name:'optionA',
        path:'/optionA',
        component:optionA
    },
    {
        name:'optionB',
        path:'/optionB',
        component:optionB
    },
    {
        name:'optionC',
        path:'/optionC',
        component:optionC
    },
    {
        name:'optionE',
        path:'/optionE',
        component:optionE
    },
    {
        name:'optionD',
        path:'/optionD',
        component:optionD
    },
    {
        name:'login',
        path:'/login',
        components:{
            login:login
        }
    }
];
for(let i=0; i<routes.length; i++){
    index.push(routes[i])
}
const router=new VueRouter({
    routes: index
});
export {router};
