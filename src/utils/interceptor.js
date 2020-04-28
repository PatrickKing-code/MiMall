import axios from 'axios'
// 根据前端的跨域方式做调整
// let baseUrl = ''
// switch (process.env.NODE_ENV || "devlopment") {
//     case "devlopment":
//         baseUrl = "https://www.easy-mock.com/mock/5ea702dbb91d8b713ebf1dd3/api"
//         break;
//     case "test":
//         baseUrl = "http://test-mall-pre.springboot.cn/api"
//         break;
//     case "production":
//         baseUrl = "http://pro-mall-pre.springboot.cn/api"
//         break;
//     default:
//         baseUrl = "http://dev-mall-pre.springboot.cn/api"
//         break;
// }
const service = axios.create({
    baseURL: "https://www.easy-mock.com/mock/5ea702dbb91d8b713ebf1dd3/api"
    ,
    timeout: 8000
})

service.interceptors.response.use( (response)=> {
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

export default service