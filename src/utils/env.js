let env = process.env.NODE_ENV
let baseURL
console.log(env);
switch (env) {
    case 'production':
        baseURL = 'http://pro-mall-pre.springboot.cn'
        break;
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn'
        break;
    case 'pre':
        baseURL = 'http://rel-mall-pre.springboot.cn'
        break;
    default: baseURL = 'http://dev-mall-pre.springboot.cn'
        break;
}


export default env