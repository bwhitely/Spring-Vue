import * as VueRouter from 'vue-router'
import {createWebHistory} from "vue-router";

export const router = VueRouter.createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            alias: '/customers',
            name: 'customers',
            component: () => import('./components/CustomerList')
        },
        {
            path: '/customers/:id',
            name: 'edit-customer',
            component: () => import('./components/EditCustomer')
        },
        {
            path: '/add',
            name: 'add-customer',
            component: () => import('./components/AddCustomer')
        }
    ]
})