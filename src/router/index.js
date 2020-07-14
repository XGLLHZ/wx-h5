import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'   //引入 web 首页
import user from '@/views/user'

//注册路由
Vue.use(Router)

export const routerMap = [
    {
        name: 'webindex',
        path: '/',
        component: index,
        redirect: 'index',
        children: [
            {
                name: 'webindex',
                path: '/index',
                component: index,
                meta: {
                    requireAuth: false
                }
            }
        ]
    },
    {
        name: 'user',
        path: '/user',
        component: user
    }
]

const routers = []

const router = new Router({
    routes: routerMap.concat(routers)
});

export default router

