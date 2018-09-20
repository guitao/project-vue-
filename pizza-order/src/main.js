'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router'
import axios from 'axios'

import { store } from './store/store.js'

//使用路由
Vue.use(VueRouter);

//配置axios根路径
axios.defaults.baseURL = 'https://wd8046869294gzpsht.wilddogio.com/';

//配置axios原型（在任何组件中都可以正常使用axios）
Vue.prototype.http = axios;

//new()
const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savePosition) {
        // return { x: 0, y: 100 };
        // return { selector: '.btn' };
        if (savePosition) {
            return savePosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

//全局守卫
// router.beforeEach((to, from, next) => {
//     // console.log(to);
//     // alert('你还没有登录,请先登录.');

//     if (to.path === '/login' || to.path === '/register') {
//         next();
//     } else {
//         alert('你还没有登录,请先登录.');
//         next('/login');
//     }
// })

//后置钩子
// router.afterEach((toolbar, from, next) => {
//     alert('你还没登录，请先登录');
// })

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})