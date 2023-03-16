import Vue from 'vue'
import App from './App.vue'
import store from './data/index'

import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'wowjs/css/libs/animate.css'
import VueRouter from 'vue-router'
import routes from './router'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    routes: routes
})
new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')