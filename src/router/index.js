import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Partners from '../components/Partners.vue'
import Contacts from '../components/Contacts.vue'
import About from '../components/About.vue'
Vue.use(Router);
let router = new Router({
    mode: 'history',
    routes: [{
            path: '/' ,
            name: 'home',
            component: Main,
            props: true,
        },
        {
            path: '/partners',
            name: "partners",
            component: Partners,
            props: true
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        // {
        //     path: '*',
        //     name: "not-found",
        //     component: NotFound,
        // },
    ],
})
export default router;