import service from '../utils/interceptor'

export function Login(data){
    return service.request({
        method: "get",
        url: "/user/login",
        data
        // data: data, 左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}