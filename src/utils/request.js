/**
 * 请求拦截响应器
 */

import axios from 'axios'
import router from '@/router/index'
import { Message } from 'element-ui'

//创建 axios 实例
const axioseg = axios.create({
    baseURL: process.env.BASE_API,   //api 的 base_url
    timeout: 50000,   //请求超时
    headers: {
        'Access-Control-Aollow-Origin': '*'   //解决‘NO Access-Control-Allow-Origin’问题
    }
})

//此参数的添加只能以 .post 的形式
axioseg.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

//请求拦截器
axioseg.interceptors.request.use(config => {
    return config;
}, error => {
    Message.error({ message: '请求超时!' + error });
});

//请求响应器
axioseg.interceptors.response.use(res => {
    if (res.status === 200) {
        if (res.data.recode === 105) {
            router.push('/admin/login')
            Message.error({ message: res.data.remsg })
        }
        if (res.data.recode === 103) {
            router.push('/admin/login')
            Message.error({ message: res.data.remsg })
        }
        return res;
    }
}, error => {
    console.log(error)
    if (error.response.status == 404 || error.response.status == 504) {
        //服务器死妈了页面
        Message.error({ message: '服务器开小差啦' });
    } else {
        Message.error({ message: '未知错误！' });
    }
    return error;
});

export default axioseg



