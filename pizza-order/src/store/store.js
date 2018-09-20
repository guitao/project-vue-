'use strict'
import Vue from 'vue'
import Vuex from 'vuex'

import menu from './module/menu'
import status from './module/status'
import users from './module/users'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        users,
        menu,
        status
    }
})