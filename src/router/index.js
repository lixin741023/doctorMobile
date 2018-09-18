import {routes} from "./test.js";
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import optionA from '../components/options/optionA.vue';
import optionB from '../components/options/optionB.vue';
import optionC from '../components/options/optionC.vue';
import optionD from '../components/options/optionD.vue';
import optionE from '../components/options/optionE.vue';

let index=[
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
    }
];
for(let i=0; i<routes.length; i++){
    index.push(routes[i])
}
const router=new VueRouter({
    routes: index
});
export {router};
