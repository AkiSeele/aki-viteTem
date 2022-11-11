import axios from "axios";
// import { useMessage } from "naive-ui";
const message = useMessage();

const AxiosToken = axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // baseURL: import.meta.env.VITE_APP_BASE_API,
  baseURL: "/api",
  // 指定请求超时的毫秒数。
  timeout: 10000,
  // 自定义请求头
  // headers: { "X-Requested-With": "XMLHttpRequest" },
});

// 添加请求拦截器
AxiosToken.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
AxiosToken.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log("响应码：", response.status, "响应成功");
    return response;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // if (error.request.status === 500) {
    window.$message.error(error.message);
    // }
    return Promise.reject(error);
  }
);

export default AxiosToken;
