import axios from 'axios'
import env from './env'
// 根据前端的跨域方式做调整
const instance = axios.create({
    baseURL: env.baseURL,
    timeout: 8000
})

instance.interceptors.response.use( (response)=> {
    let res = response.data
    if(res.status == 0) {
        return res.data
    } else if(res.status == 10) {
        // 未登陆
        window.location.href = '/#/login'
    } else {
        // 错误信息
        alert(res.msg)
    }
})

export default instance