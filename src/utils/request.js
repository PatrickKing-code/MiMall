import axios from "axios";
import env from './env'
// 根据前端跨域方式调整baseURL
axios.defaults.baseURL = env.baseURL
// 超时时间
axios.defaults.timeout = 8000
// 请求拦截
axios.interceptors.response.use((response) => {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    console.log(res.msg);
  }
});

export default axios
