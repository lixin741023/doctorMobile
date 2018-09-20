import Vue from 'vue';
import app from './app.vue';
import {router} from "./router";
import store from './store';

import './js/localstorage.js';
import './plugins/indigo.js';
import mui from './plugins/mui-master/dist/js/mui.js';

import 'mint-ui/lib/style.min.css';
import './styles/global.less';

export default new Vue({
    store,
    router,
    render:(core)=>core(app)
}).$mount('#app');
