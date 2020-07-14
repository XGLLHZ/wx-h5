/**
 * wx-h5-首页 api 
 */

import request from '@/utils/request'

//获取授权链接
export function getUrl(params) {
    return request({
        method: 'post',
        url: '/apimp/user/getUrl',
        data: params
    });
}

//获取用户信息
export function getUserInfo(params) {
    return request({
        method: 'post',
        url: '/apimp/user/getUserInfo',
        data: params
    });
}

