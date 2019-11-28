// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import routes from './config/routes.js';
import store from './config/store.js';
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import VueI18n from 'vue-i18n';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import util from './assets/js/util.js'; 
// import './assets/css/theme.less';
import App from './App.vue';
import Api from './config/api';
import $ from '@js/jquery.min.js';
var moment = require('moment');
import VueSlideMini from 'vue-slide-mini'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import '../src/assets/'
// import Vue from 'vue'
Vue.use(VueAwesomeSwiper)
Vue.use(VueSlideMini)
Vue.use(iView);
Vue.use(VueClipboard)
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.use(VueI18n);

// Vue.prototype.host = "http://47.244.45.34:80";
Vue.prototype.host = "http://jingui360.com";
//Vue.prototype.host = "http://192.168.0.2:9595";

// Vue.prototype.host = "http://127.0.0.1:9595";
// Vue.prototype.host = "http://127.0.0.1:80";
// Vue.prototype.host = "http://192.168.1.28:9595";

Vue.prototype.api = Api;
Vue.http.options.credentials = true;
Vue.http.options.emulateJSON = true;
Vue.http.options.headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Content-Type': 'application/json;charset=utf-8'
};
const router = new VueRouter({
    mode: 'hash',
    routes
})
router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
  });
const i18n = new VueI18n({
    locale: 'en', 
    messages: {
        'zh': require('./assets/lang/zh.js'),
        'en': require('./assets/lang/en.js')
    }
});
Vue.http.interceptors.push((request, next) => {
    request.headers.set('x-auth-token', localStorage.getItem('TOKEN'));
    if(i18n.locale ==="en"){
        request.headers.set('lang', i18n.locale + "_US");
    }else{
        request.headers.set('lang', i18n.locale + "_CN"); 
    }
    next((response) => {
        var xAuthToken = response.headers.get('x-auth-token');
        if (xAuthToken != null && xAuthToken != '') {
            localStorage.setItem('TOKEN', xAuthToken);
        }
        //

        if (response.body.code == '4000' || response.body.code == '3000') {
            store.commit('setMember', null);
            router.push('/login');
            return false;
        }
        return response;
    });
});

Vue.config.productionTip = false
Vue.filter('timeFormat', function(tick) {
    return moment(tick).format("HH:mm:ss");
});
Vue.filter('dateFormat', function(tick) {
    return moment(tick).format("YYYY-MM-DD HH:mm:ss");
});

Vue.filter('toFixed', function(number, scale) {
    return new Number(number).toFixed(scale);
});
Vue.filter('toPercent', function(point) {
    var str = Number(point * 100).toFixed(1);
    str += "%";
    return str;
});
function toFloor(number, scale = 8) {
    if (new Number(number) == 0) { 
        return 0;
    }
    let str = number + ""; 
    if (str.indexOf('e') > -1 || str.indexOf('E') > -1) { 
        let num = new Number(number).toFixed(scale + 1),
            str = num + "";
        return str.substring(0, str.length - 1);
    } else if (str.indexOf(".") > -1) { 
        if (scale == 0) {
            return str.substring(0, str.indexOf("."));
        }
        return str.substring(0, str.indexOf(".") + scale + 1); 
    } else { 
        return str;
    }
}
Vue.filter('toFloor', (number, scale) => {
    return toFloor(number, scale);
});
Vue.prototype.toFloor = toFloor;



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    store,
    template: '<App/>',
    components: { App }
})