let baseUrl
switch (process.env.NODE_ENV) {
    case "devlopment":
        baseUrl = "http://dev-mall-pre.springboot.cn/api"
        break;
    case "test":
        baseUrl = "http://test-mall-pre.springboot.cn/api"
        break;
    case "production":
        baseUrl = "http://pro-mall-pre.springboot.cn/api"
        break;
    default:
        baseUrl = "http://dev-mall-pre.springboot.cn/api"
        break;
}
export {
    baseUrl
}