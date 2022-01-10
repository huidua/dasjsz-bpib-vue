import axios from "axios";

/**
 * axios请求封装工具
 * API接口定义的时候都使用这个axios
 */


const service = axios.create({
    baseURL: process.env.BASE_API,
    headers: {
        'Content-Type': 'application/json',
        'author': 'huidu'
    },
    timeout: 5000,
})

// ===========拦截器====
service.interceptors.request.use(
    config => {

        // TODO 请求之前做的操作，如：携带token

        console.log('请求----灰度')
        return config // 一定要加
    },
    error => {
        console.error("[灰度axios：]" + error);
        return Promise.reject(error)
    }
)


service.interceptors.response.use(
    response => {

        return response
    },
    error => {
        console.error("[灰度axios：]" + error);
        // TODO 可以给页面提示
        return Promise.reject(error)
    }
)

export default service