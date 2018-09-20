// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
'use strict'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import About from './components/About'
import AddUser from './components/AddUser'
import UserDetails from './components/UserDetails'
import Edit from './components/Edit'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/adduser', component: AddUser },
    { path: '/userdetails/:id', component: UserDetails },
    { path: '/edit/:id', component: Edit }
];
const router = new VueRouter({
    routes,
    mode: 'history'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})