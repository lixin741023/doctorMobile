import optionA from '../components/options/optionA.vue';
import optionB from '../components/options/optionB.vue';
import optionC from '../components/options/optionC.vue';
import optionD from '../components/options/optionD.vue';
import optionE from '../components/options/optionE.vue';

let routes=[
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

export {routes};
