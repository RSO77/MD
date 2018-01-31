import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

import Index from '@/components/pages/Index';
import Brand from '@/components/pages/Brand';
import Contacts from '@/components/pages/Contacts';
import About from '@/components/pages/About';
import Tech from '@/components/pages/Tech';


const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Index',
            meta: {
                gradients: [
                    ['#bac3d2', '#ffffff']
                ]
            },
            component: About
        },
        {
            path: '/brand',
            name: 'Brand',
            meta: {
                gradients: [
                    ['#bac3d2', '#ffffff']
                ]
            },
            component: Brand
        },
        {
            path: '/tech',
            name: 'Tech',
            meta: {
                gradients: [
                    ['#309fc8', '#143f85']
                ]
            },
            component: Tech
        },
        {
            path: '/contacts',
            name: 'Contacts',
            meta: {
                gradients: [
                    ['#bac3d2', '#ffffff']
                ]
            },
            component: Contacts
        }
    ]
})

export default router;

// var granimInstance = new Granim({
//     element: '#canvas-brand',
//     name: 'basic-gradient',
//     direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
//     opacity: [1, 1],
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#bac3d2', '#ffffff']
//             ]
//         }
//     }
// });
