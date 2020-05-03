import axios from 'axios'
import env from './env'
const service = axios.create({
    baseURL: env.baseURL,
    timeout: 8000
})

service.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

service.interceptors.response.use(response => {
    let res = response.data
    if (res.code == 0) {
        return res.data
    } else if (res.code == 10) {
        console.log('未登录');
        window.location.href = '/#/login'
    } else {
        console.log(res.msg);
    }
})

export default service