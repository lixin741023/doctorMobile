import Vue from 'vue';
import app from './app.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {routes} from "./router/routes";
const router=new VueRouter({
    routes
});

import './plugins/indigo.js';
import mui from './plugins/mui-master/dist/js/mui.js';

import 'mint-ui/lib/style.min.css';
import './styles/global.less';



new Vue({
    router,
    render:(core)=>core(app)
}).$mount('#app');
