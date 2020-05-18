
// 配置不同的baseURL
let baseURL
if (process.env.VUE_APP_MODE == 'development') {
  baseURL = process.env.VUE_APP_API_URL
  console.log(baseURL);
} else if (process.env.VUE_APP_MODE == 'test') {
  baseURL = process.env.VUE_APP_API_URL
  console.log(baseURL);
} else if (process.env.VUE_APP_MODE == 'production') {
  baseURL = process.env.VUE_APP_API_URL
  console.log(baseURL);
} else {
  baseURL = 'http://mall-mall-pre.springboot.cn/api'
}

export default baseURL
