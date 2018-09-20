'use strict'
import Home from './components/Home'
import Admin from './components/Admin'
import About from './components/about/About'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'




//配置路由
export const routes = [{
        path: '/',
        name: 'homeLink',
        components: {
            default: Home,
            'orderingGuide': OrderingGuide,
            'history': History,
            'delivery': Delivery
        }
    },
    { path: '/menu', name: 'menuLink', component: Menu },
    {
        path: '/admin',
        name: 'adminLink',
        component: Admin
            //路由独享守卫
            // beforeEnter: (to, from, next) => {
            //     alert('hello world');
            //     next();
            // }
    },
    {
        path: '/about',
        name: 'aboutLink',
        component: About,
        redirect: '/about/contact',
        children: [{
                path: '/about/contact',
                name: 'contactLink',
                component: Contact,
                redirect: '/about/contact/phone',
                children: [
                    { path: '/about/contact/personName', name: 'personNameLink', component: PersonName },
                    { path: '/about/contact/phone', name: 'phoneLink', component: Phone }
                ]
            },
            { path: '/about/delivery', name: 'deliveryLink', component: Delivery },
            { path: '/about/history', name: 'historyLink', component: History },
            { path: '/about/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide }
        ]
    },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/register', name: 'registerLink', component: Register },
    { path: '*', redirect: '/' }
];