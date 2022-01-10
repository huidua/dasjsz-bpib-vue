import request from '@/utils/request'
/**
 * 请求接口
 */

const API = {
    login(data) {
        console.log("ceshi")
        return request({
            // baseURL: '/',
            url: '/api/userInfo',
            method: 'get',
            data
        })
    }
}

export default API